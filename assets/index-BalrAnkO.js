(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ru(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},fs=[],Zn=()=>{},md=()=>!1,Po=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Do=n=>n.startsWith("onUpdate:"),It=Object.assign,au=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lm=Object.prototype.hasOwnProperty,ot=(n,e)=>Lm.call(n,e),ke=Array.isArray,Wi=n=>ra(n)==="[object Map]",bs=n=>ra(n)==="[object Set]",Qu=n=>ra(n)==="[object Date]",Xe=n=>typeof n=="function",Rt=n=>typeof n=="string",wn=n=>typeof n=="symbol",bt=n=>n!==null&&typeof n=="object",gd=n=>(bt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),_d=Object.prototype.toString,ra=n=>_d.call(n),Im=n=>ra(n).slice(8,-1),bd=n=>ra(n)==="[object Object]",Lo=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Nm=/-\w/g,Un=Io(n=>n.replace(Nm,e=>e.slice(1).toUpperCase())),Um=/\B([A-Z])/g,ys=Io(n=>n.replace(Um,"-$1").toLowerCase()),xd=Io(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zo=Io(n=>n?`on${xd(n)}`:""),Yn=(n,e)=>!Object.is(n,e),eo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},aa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let eh;const No=()=>eh||(eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Bm(i):ou(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||bt(n))return n}const Fm=/;(?![^(]*\))/g,Om=/:([^]+)/,km=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Bm(n){const e={};return n.replace(km,t=>t.startsWith("/*")?"":t).split(Fm).forEach(t=>{if(t){const i=t.split(Om);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oa(n){let e="";if(Rt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=oa(n[t]);i&&(e+=i+" ")}else if(bt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Hm="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",zm=ru(Hm);function yd(n){return!!n||n===""}function Vm(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=qi(n[s],e[s],t);return i}function th(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&qi(r,i[o],t)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function Gm(n,e,t){let i=Wi(n),s=Wi(e);if(i||s||(i=bs(n),s=bs(e),i||s))return i&&s?th(n,e,t):!1;const r=Object.keys(n).length,a=Object.keys(e).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!qi(n[o],e[o],t))return!1}return String(n)===String(e)}function nh(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const a=i(n,e,t);return s.delete(n),r.delete(e),a}function qi(n,e,t){if(n===e)return!0;let i=Qu(n),s=Qu(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=wn(n),s=wn(e),i||s?n===e:(i=ke(n),s=ke(e),i||s?i&&s?nh(n,e,t,Vm):!1:(i=bt(n),s=bt(e),i||s?!i||!s?!1:nh(n,e,t,Gm):String(n)===String(e))))}function Wm(n,e){return n.findIndex(t=>qi(t,e))}const Md=n=>!!(n&&n.__v_isRef===!0),Qe=n=>Rt(n)?n:n==null?"":ke(n)||bt(n)&&(n.toString===_d||!Xe(n.toString))?Md(n)?Qe(n.value):JSON.stringify(n,Sd,2):String(n),Sd=(n,e)=>Md(e)?Sd(n,e.value):Wi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Qo(i,r)+" =>"]=s,t),{})}:bs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qo(t))}:wn(e)?Qo(e):bt(e)&&!ke(e)&&!bd(e)?String(e):e,Qo=(n,e="")=>{var t;return wn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Dt;class Ed{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Dt&&(Dt.active?(this.parent=Dt,this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Dt;try{return Dt=this,e()}finally{Dt=t}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){if(this._on>0&&--this._on===0){if(Dt===this)Dt=this.prevScope;else{let e=Dt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Td(n){return new Ed(n)}function Ad(){return Dt}function jm(n,e=!1){Dt&&(Dt.active?Dt.cleanups.push(n):n())}let Mt;const el=new WeakSet;class wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&(Dt.active?Dt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ih(this),Pd(this);const e=Mt,t=Fn;Mt=this,Fn=!0;try{return this.fn()}finally{Dd(this),Mt=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let Rd=0,Dr,Lr;function Cd(n,e=!1){if(n.flags|=8,e){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function lu(){Rd++}function cu(){if(--Rd>0)return;if(Lr){let e=Lr;for(Lr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Pd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),uu(i),Xm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ql(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ql(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Fn;Mt=n,Fn=!0;try{Pd(n);const s=n.fn(n._value);(e.version===0||Yn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Fn=i,Dd(n),n.flags&=-3}}function uu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)uu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const Id=[];function ii(){Id.push(Fn),Fn=!1}function si(){const n=Id.pop();Fn=n===void 0?!0:n}function ih(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let Gr=0;class qm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Fn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new qm(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,Nd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){lu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cu()}}}function Nd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Nd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,ps=Symbol(""),ec=Symbol(""),Wr=Symbol("");function Xt(n,e,t){if(Fn&&Mt){let i=ho.get(n);i||ho.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new hu),s.map=i,s.key=t),s.track()}}function Mi(n,e,t,i,s,r){const a=ho.get(n);if(!a){Gr++;return}const o=l=>{l&&l.trigger()};if(lu(),e==="clear")a.forEach(o);else{const l=ke(n),c=l&&Lo(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===Wr||!wn(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Wr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ps)),Wi(n)&&o(a.get(ec)));break;case"delete":l||(o(a.get(ps)),Wi(n)&&o(a.get(ec)));break;case"set":Wi(n)&&o(a.get(ps));break}}cu()}function Km(n,e){const t=ho.get(n);return t&&t.get(e)}function Es(n){const e=at(n);return e===n||(Xt(e,"iterate",Wr),_n(n))?e:ri(n)?Qn(n)?e.map(t=>Ki(Rn(t))):e.map(Ki):e.map(Rn)}function Uo(n){return Xt(n=at(n),"iterate",Wr),n}function jn(n,e){return ri(n)?Ki(Qn(n)?Rn(e):e):Rn(e)}const Ym={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Es(this).concat(...n.map(e=>ke(e)?Es(e):e))},entries(){return tl(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>jn(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>jn(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>jn(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...n){return pr(this,"push",n)},reduce(n,...e){return rh(this,"reduce",n,e)},reduceRight(n,...e){return rh(this,"reduceRight",n,e)},shift(){return pr(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return pr(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return pr(this,"unshift",n)},values(){return tl(this,"values",n=>jn(this,n))}};function tl(n,e,t){const i=Uo(n),s=i[e],r=s.call(i);if(i!==n&&!_n(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(r));return a.next=()=>sh(r.next(),t),s!==Ud[e]&&Object.defineProperties(a,{return:{get(){const o=r.return;return typeof o=="function"?o.bind(r):o}},throw:{get(){const o=r.throw;return typeof o=="function"?o.bind(r):o}}}),a}r._next=r.next,r.next=()=>sh(r._next(),t)}return r}function sh(n,e){return n.done||(n.value=e(n.value)),n}const Ud=Array.prototype;function hi(n,e,t,i,s,r){const a=Uo(n),o=a!==n&&!_n(n),l=a[e];if(l!==Ud[e]){const h=l.apply(n,r);return o?Rn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,jn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function rh(n,e,t,i){const s=Uo(n),r=s!==n&&!_n(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=jn(n,c)),t.call(this,c,jn(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?jn(n,l):l}function nl(n,e,t){const i=at(n);Xt(i,"iterate",Wr);const s=i[e](...t);return(s===-1||s===!1)&&Oo(t[0])?(t[0]=at(t[0]),i[e](...t)):s}function pr(n,e,t=[]){ii(),lu();const i=at(n)[e].apply(n,t);return cu(),si(),i}const $m=ru("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wn));function Jm(n){wn(n)||(n=String(n));const e=at(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class Od{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?og:zd:r?Hd:Bd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ke(e);if(!s){let l;if(a&&(l=Ym[t]))return l;if(t==="hasOwnProperty")return Jm}const o=Reflect.get(e,t,Ct(e)?e:i);if((wn(t)?Fd.has(t):$m(t))||(s||Xt(e,"get",t),r))return o;if(Ct(o)){const l=a&&Lo(t)?o:o.value;return s&&bt(l)?nc(l):l}return bt(o)?s?nc(o):Fo(o):o}}class kd extends Od{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=ke(e)&&Lo(t);if(!this._isShallow){const c=ri(r);if(!_n(i)&&!ri(i)&&(r=at(r),i=at(i)),!a&&Ct(r)&&!Ct(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ot(e,t),l=Reflect.set(e,t,i,Ct(e)?e:s);return e===at(s)&&l&&(o?Yn(i,r)&&Mi(e,"set",t,i):Mi(e,"add",t,i)),l}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!wn(t)||!Fd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",ke(e)?"length":ps),Reflect.ownKeys(e)}}class Zm extends Od{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qm=new kd,eg=new Zm,tg=new kd(!0);const tc=n=>n,_a=n=>Reflect.getPrototypeOf(n);function ng(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),a=Wi(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?tc:e?Ki:Rn;return!e&&Xt(r,"iterate",l?ec:ps),It(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function ba(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ig(n,e){const t={get(s){const r=this.__v_raw,a=at(r),o=at(s);n||(Yn(s,o)&&Xt(a,"get",s),Xt(a,"get",o));const{has:l}=_a(a),c=e?tc:n?Ki:Rn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(at(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,a=at(r),o=at(s);return n||(Yn(s,o)&&Xt(a,"has",s),Xt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=at(o),c=e?tc:n?Ki:Rn;return!n&&Xt(l,"iterate",ps),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return It(t,n?{add:ba("add"),set:ba("set"),delete:ba("delete"),clear:ba("clear")}:{add(s){const r=at(this),a=_a(r),o=at(s),l=!e&&!_n(s)&&!ri(s)?o:s;return a.has.call(r,l)||Yn(s,l)&&a.has.call(r,s)||Yn(o,l)&&a.has.call(r,o)||(r.add(l),Mi(r,"add",l,l)),this},set(s,r){!e&&!_n(r)&&!ri(r)&&(r=at(r));const a=at(this),{has:o,get:l}=_a(a);let c=o.call(a,s);c||(s=at(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Yn(r,u)&&Mi(a,"set",s,r):Mi(a,"add",s,r),this},delete(s){const r=at(this),{has:a,get:o}=_a(r);let l=a.call(r,s);l||(s=at(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Mi(r,"delete",s,void 0),c},clear(){const s=at(this),r=s.size!==0,a=s.clear();return r&&Mi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ng(s,n,e)}),t}function fu(n,e){const t=ig(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const sg={get:fu(!1,!1)},rg={get:fu(!1,!0)},ag={get:fu(!0,!1)};const Bd=new WeakMap,Hd=new WeakMap,zd=new WeakMap,og=new WeakMap;function lg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fo(n){return ri(n)?n:du(n,!1,Qm,sg,Bd)}function cg(n){return du(n,!1,tg,rg,Hd)}function nc(n){return du(n,!0,eg,ag,zd)}function du(n,e,t,i,s){if(!bt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=lg(Im(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Qn(n){return ri(n)?Qn(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function Oo(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function pu(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&vd(n,"__v_skip",!0),n}const Rn=n=>bt(n)?Fo(n):n,Ki=n=>bt(n)?nc(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function Wt(n){return ug(n,!1)}function ug(n,e){return Ct(n)?n:new hg(n,e)}class hg{constructor(e,t){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Rn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||ri(e);e=i?e:at(e),Yn(e,t)&&(this._rawValue=e,this._value=i?e:Rn(e),this.dep.trigger())}}function Ue(n){return Ct(n)?n.value:n}const fg={get:(n,e,t)=>e==="__v_raw"?n:Ue(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Vd(n){return Qn(n)?n:new Proxy(n,fg)}function dg(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=mg(n,t);return e}class pg{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=wn(t)?t:String(t),this._raw=at(e);let s=!0,r=e;if(!ke(e)||wn(this._key)||!Lo(this._key))do s=!Oo(r)||_n(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ue(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ct(this._raw[this._key])){const t=this._object[this._key];if(Ct(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Km(this._raw,this._key)}}function mg(n,e,t){return new pg(n,e,t)}class gg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Cd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _g(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new gg(i,s,t)}const xa={},fo=new WeakMap;let os;function bg(n,e=!1,t=os){if(t){let i=fo.get(t);i||fo.set(t,i=[]),i.push(n)}}function xg(n,e,t=vt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=x=>s?x:_n(x)||s===!1||s===0?Si(x,1):Si(x);let u,h,f,d,g=!1,_=!1;if(Ct(n)?(h=()=>n.value,g=_n(n)):Qn(n)?(h=()=>c(n),g=!0):ke(n)?(_=!0,g=n.some(x=>Qn(x)||_n(x)),h=()=>n.map(x=>{if(Ct(x))return x.value;if(Qn(x))return c(x);if(Xe(x))return l?l(x,2):x()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){ii();try{f()}finally{si()}}const x=os;os=u;try{return l?l(n,3,[d]):n(d)}finally{os=x}}:h=Zn,e&&s){const x=h,R=s===!0?1/0:s;h=()=>Si(x(),R)}const m=Ad(),p=()=>{u.stop(),m&&m.active&&au(m.effects,u)};if(r&&e){const x=e;e=(...R)=>{try{return x(...R)}finally{p()}}}let M=_?new Array(n.length).fill(xa):xa;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(x||s||g||(_?R.some((D,P)=>Yn(D,M[P])):Yn(R,M))){const D=os;ii();try{f&&f(),os=u;const P=[R,M===xa?void 0:_&&M[0]===xa?[]:M,d];M=R,l?l(e,3,P):e(...P)}finally{os=D,si()}}}else u.run()};return o&&o(S),u=new wd(h),u.scheduler=a?()=>a(S,!1):S,d=x=>bg(x,!1,u),f=u.onStop=()=>{const x=fo.get(u);if(x){if(l)l(x,4);else for(const R of x)R();fo.delete(u)}},e?i?S(!0):M=u.run():a?a(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Si(n,e=1/0,t){if(e<=0||!bt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))Si(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Si(n[i],e,t);else if(bs(n)||Wi(n))n.forEach(i=>{Si(i,e,t)});else if(bd(n)){for(const i in n)Si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Si(n[i],e,t)}return n}function la(n,e,t,i){try{return i?n(...i):n()}catch(s){ko(s,e,t)}}function kn(n,e,t,i){if(Xe(n)){const s=la(n,e,t,i);return s&&gd(s)&&s.catch(r=>{ko(r,e,t,void 0,!0)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],e,t,i));return s}}function ko(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h&&!l.isUnmounted&&(!s||l.scope.active)){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}l=l.parent}if(a){ii(),la(a,null,10,[n,c,u]),si();return}}vg(n,t,r,i,o)}function vg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qt=[];let Ln=-1;const Xn=[];let ki=null,Vs=0;const Gd=Promise.resolve();let po=null;function mu(n){const e=po||Gd;return n?e.then(this?n.bind(this):n):e}function yg(n){let e=Ln+1,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=jr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function gu(n){if(!(n.flags&1)){const e=jr(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=jr(t)?Qt.push(n):Qt.splice(yg(e),0,n),n.flags|=1,Wd()}}function Wd(){po||(po=Gd.then(qd))}function Mg(n){if(!ke(n))ki&&n.id===-1?ki.splice(Vs+1,0,n):n.flags&1||(Xn.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Xn.push(n[e]);Wd()}function jd(n,e,t,i=Ln+1){for(;i<Qt.length;i++){const s=Qt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;Qt.splice(i,1),i=n?i-1:Ln,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Xd(n,e,t=0){if(Xn.length){let i=Xn,s=0;if(e){i=[];for(let a=0;a<Xn.length;a++){const o=Xn[a];(o.i!==void 0?!o.i||o.i.uid<t:e.has(o))?Xn[s++]=o:i.push(o)}}const r=[...new Set(i)].sort((a,o)=>jr(a)-jr(o));if(Xn.length=s,ki){for(let a=0;a<r.length;a++)ki.push(r[a]);return}for(ki=r,Vs=0;Vs<ki.length;Vs++){const a=ki[Vs];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}ki=null,Vs=0}}let il=!1;function Sg(n,e){if(il){n();return}const t=e===void 0?void 0:new Set(Xn);n(),il=!0;try{jd(void 0,e),Xd(void 0,t,e)}finally{il=!1}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qd(n){try{for(Ln=0;Ln<Qt.length;Ln++){const e=Qt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),la(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Qt.length;Ln++){const e=Qt[Ln];e&&(e.flags&=-2)}Ln=-1,Qt.length=0,Xd(),po=null,(Qt.length||Xn.length)&&qd()}}let Tn=null,Kd=null;function mo(n){const e=Tn;return Tn=n,Kd=n&&n.type.__scopeId||null,e}function Eg(n,e=Tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&gh(-1);const r=mo(e),a=_s.length;let o;try{o=n(...s)}finally{for(let l=_s.length;l>a;l--)xp();mo(r),i._d&&gh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yd(n,e){if(Tn===null)return n;const t=Vo(Tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=vt]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&Si(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Zi(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const o=e&&e._mount;o&&(o._latest=n,n._mount=o)}else if(i==="mounted"){const o=n._latest;n._mount=n._latest=void 0,o&&(s=o,o._mount=void 0)}const r=s.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){let l=r[o];a?l.oldValue=a[o].value:i==="mounted"&&l.oldValue!==void 0&&(l=It({},l,{oldValue:void 0}));let c=l.dir[i];c&&(ii(),kn(c,t,8,[n.el,l,s,e]),si())}}function Tg(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function Ir(n,e,t=!1){const i=Sp();if(i||gs){let s=gs?gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function Ag(){return!!(Sp()||gs)}const wg=Symbol.for("v-scx"),Rg=()=>Ir(wg);function ms(n,e,t){return $d(n,e,t)}function $d(n,e,t=vt){const{immediate:i,deep:s,flush:r,once:a}=t,o=It({},t),l=e&&i||!e&&r!=="post";let c;if(Yr){if(r==="sync"){const d=Rg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Zn,d.resume=Zn,d.pause=Zn,d}}const u=tn;o.call=(d,g,_)=>kn(d,u,g,_);let h=!1;r==="post"?o.scheduler=d=>{d.i=u,Jt(d,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(d,g)=>{g?d():gu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=xg(n,e,o);return Yr&&(c?c.push(f):l&&f()),f}function Cg(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const a=ua(this),o=$d(s,r.bind(i),t);return a(),o}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Pg=Symbol("_vte"),Bo=n=>n.__isTeleport,sl=Symbol("_leaveCb");function Dg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bn){e=t;break}}return e}function Zd(n){if(!_u(n))return Bo(n.type)&&n.children?Dg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function Nr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Nr(Bo(t.type)&&Zd(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&Nr(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===qt&&ke(n.children)){const t=ap(n.children,!1);t&&Nr(t,e)}}function ic(n){if(n.component)return ic(n.component.subTree);if(n.type===qt){const e=ke(n.children)&&ap(n.children,!1);return e?ic(e):void 0}if(n.type!==Bn)return n}function ca(n,e){return Xe(n)?It({name:n.name},e,{setup:n}):n}function Qd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ah(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const go=new WeakMap;function Ur(n,e,t,i,s=!1){if(ke(n)){n.forEach((_,m)=>Ur(_,e&&(ke(e)?e[m]:e),t,i,s));return}if(Fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ur(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Vo(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===vt?o.refs={}:o.refs,h=o.setupState,f=at(h),d=h===vt?md:_=>ah(u,_)?!1:ot(f,_),g=(_,m)=>!(m&&ah(u,m));if(c!=null&&c!==l){if(oh(e),Rt(c))u[c]=null,d(c)&&(h[c]=null);else if(Ct(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Xe(l))la(l,o,12,[a,u]);else{const _=Rt(l),m=Ct(l);if(_||m){const p=()=>{if(n.f){const M=_?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)ke(M)&&au(M,r);else if(ke(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const S=[r];g(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else _?(u[l]=a,d(l)&&(h[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),go.delete(n)};M.id=-1,go.set(n,M),Jt(M,t)}else oh(n),p()}}}function oh(n){const e=go.get(n);e&&(e.flags|=8,go.delete(n))}No().requestIdleCallback;No().cancelIdleCallback;const Fr=n=>!!n.type.__asyncLoader,_u=n=>n.type.__isKeepAlive;function Lg(n,e){ep(n,"a",e)}function Ig(n,e){ep(n,"da",e)}function ep(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_u(s.parent.vnode)&&Ng(i,e,t,s),s=s.parent}}function Ng(n,e,t,i){const s=Xr(e,n,i,!0),r=Xr("um",()=>au(i[e],s),t);r.flags=16}function Xr(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ii();const o=ua(t),l=kn(e,t,n,a);return o(),si(),l});return i?s.unshift(r):s.push(r),r}}const Ri=n=>(e,t=tn)=>{(!Yr||n==="sp")&&Xr(n,(...i)=>e(...i),t)},Ug=Ri("bm"),tp=Ri("m"),Fg=Ri("bu"),Og=Ri("u"),bu=Ri("bum"),kg=Ri("um"),Bg=Ri("sp"),Hg=Ri("rtg"),zg=Ri("rtc");function Vg(n,e=tn){Xr("ec",n,e)}const Gg=Symbol.for("v-ndc");function to(n,e,t,i){let s;const r=t,a=ke(n);if(a||Rt(n)){const o=a&&Qn(n);let l=!1,c=!1;o&&(l=!_n(n),c=ri(n),n=Uo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ki(Rn(n[u])):Rn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(bt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const sc=n=>n?Ep(n)?Vo(n):sc(n.parent):null,Or=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sc(n.parent),$root:n=>sc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ip(n),$forceUpdate:n=>n.f||(n.f=()=>{gu(n.update)}),$nextTick:n=>n.n||(n.n=mu.bind(n.proxy)),$watch:n=>Cg.bind(n)}),rl=(n,e)=>n!==vt&&!n.__isScriptSetup&&ot(n,e),Wg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(rl(i,e))return a[e]=1,i[e];if(s!==vt&&ot(s,e))return a[e]=2,s[e];if(ot(r,e))return a[e]=3,r[e];if(t!==vt&&ot(t,e))return a[e]=4,t[e];rc&&(a[e]=0)}}const c=Or[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==vt&&ot(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ot(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return rl(s,e)?(s[e]=t,!0):i!==vt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==vt&&o[0]!=="$"&&ot(n,o)||rl(e,o)||ot(r,o)||ot(i,o)||ot(Or,o)||ot(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lh(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rc=!0;function jg(n){const e=ip(n),t=n.proxy,i=n.ctx;rc=!1,e.beforeCreate&&ch(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:S,unmounted:x,render:R,renderTracked:D,renderTriggered:P,errorCaptured:L,serverPrefetch:E,expose:v,inheritAttrs:C,components:B,directives:K,filters:se}=e;if(c&&Xg(c,i,null),a)for(const k in a){const N=a[k];Xe(N)&&(i[k]=N.bind(t))}if(s){const k=s.call(t,t);bt(k)&&(n.data=Fo(k))}if(rc=!0,r)for(const k in r){const N=r[k],le=Xe(N)?N.bind(t,t):Xe(N.get)?N.get.bind(t,t):Zn,ve=!Xe(N)&&Xe(N.set)?N.set.bind(t):Zn,we=xi({get:le,set:ve});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(o)for(const k in o)np(o[k],i,t,k);if(l){const k=Xe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(N=>{Tg(N,k[N])})}u&&ch(u,n,"c");function Q(k,N){ke(N)?N.forEach(le=>k(le.bind(t))):N&&k(N.bind(t))}if(Q(Ug,h),Q(tp,f),Q(Fg,d),Q(Og,g),Q(Lg,_),Q(Ig,m),Q(Vg,L),Q(zg,D),Q(Hg,P),Q(bu,M),Q(kg,x),Q(Bg,E),ke(v))if(v.length){const k=n.exposed||(n.exposed={});v.forEach(N=>{Object.defineProperty(k,N,{get:()=>t[N],set:le=>t[N]=le,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Zn&&(n.render=R),C!=null&&(n.inheritAttrs=C),B&&(n.components=B),K&&(n.directives=K),E&&Qd(n)}function Xg(n,e,t=Zn){ke(n)&&(n=ac(n));for(const i in n){const s=n[i];let r;bt(s)?"default"in s?r=Ir(s.from||i,s.default,!0):r=Ir(s.from||i):r=Ir(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function ch(n,e,t){kn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function np(n,e,t,i){let s=i.includes(".")?Jd(t,i):()=>t[i];if(Rt(n)){const r=e[n];Xe(r)&&ms(s,r)}else if(Xe(n))ms(s,n.bind(t));else if(bt(n))if(ke(n))n.forEach(r=>np(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&ms(s,r,n)}}function ip(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>_o(l,c,a,!0)),_o(l,e,a)),bt(e)&&r.set(e,l),l}function _o(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&_o(n,r,t,!0),s&&s.forEach(a=>_o(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=qg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const qg={data:uh,props:hh,emits:hh,methods:Ar,computed:Ar,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Ar,directives:Ar,watch:Yg,provide:uh,inject:Kg};function uh(n,e){return e?n?function(){return It(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Kg(n,e){return Ar(ac(n),ac(e))}function ac(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?It(Object.create(null),n,e):e}function hh(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:It(Object.create(null),lh(n),lh(e??{})):e}function Yg(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function sp(){return{app:null,config:{isNativeTag:md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function Jg(n,e){return function(i,s=null){Xe(i)||(i=It({},i)),s!=null&&!bt(s)&&(s=null);const r=sp(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:$g++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:C_,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Xe(u.install)?(a.add(u),u.install(c,...h)):Xe(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||mn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Vo(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(kn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=gs;gs=c;try{return u()}finally{gs=h}}};return c}}let gs=null;const Zg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${ys(e)}Modifiers`];function Qg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let s=t;const r=e.startsWith("update:"),a=r&&Zg(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),a.number&&(s=s.map(aa)));let o,l=i[o=Zo(e)]||i[o=Zo(Un(e))];!l&&r&&(l=i[o=Zo(ys(e))]),l&&kn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,kn(c,n,6,s)}}const e_=new WeakMap;function rp(n,e,t=!1){const i=t?e_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Xe(n)){const l=c=>{const u=rp(c,e,!0);u&&(o=!0,It(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(bt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>a[l]=null):It(a,r),bt(n)&&i.set(n,a),a)}function Ho(n,e){return!n||!Po(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,ys(e))||ot(n,e))}function fh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=mo(n);let p,M;try{if(t.shapeFlag&4){const x=s||i,R=x;p=qn(c.call(R,x,u,h,d,f,g)),M=o}else{const x=e;p=qn(x.length>1?x(h,{attrs:o,slots:a,emit:l}):x(h,null)),M=e.props?o:t_(o)}}catch(x){_s.length=0,ko(x,n,1),p=mn(Bn)}let S=p;if(M&&_!==!1){const x=Object.keys(M),{shapeFlag:R}=S;x.length&&R&7&&(r&&x.some(Do)&&(M=n_(M,r)),S=Js(S,M,!1,!0))}if(t.dirs&&(S=Js(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition){const x=Bo(S.type)&&Zd(S)||S;Nr(x,t.transition)}return p=S,mo(m),p}function ap(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(yu(s)){if(s.type!==Bn||s.children==="v-if"){if(t)return;t=s}}else return}return t}const t_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Po(t))&&((e||(e={}))[t]=n[t]);return e},n_=(n,e)=>{const t={};for(const i in n)(!Do(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function i_(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?dh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(op(a,i,f)&&!Ho(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?dh(i,a,c):!0:!!a;return!1}function dh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ot(n,r)||op(e,n,r)&&!Ho(t,r))return!0}return!1}function op(n,e,t){const i=n[t],s=e[t];return t==="style"&&bt(i)&&bt(s)?!qi(i,s):i!==s}function s_({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const lp={},cp=()=>Object.create(lp),up=n=>Object.getPrototypeOf(n)===lp;function r_(n,e,t,i=!1){const s={},r=cp();n.propsDefaults=Object.create(null),hp(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function a_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=at(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ho(n.emitsOptions,f))continue;const d=e[f];if(l)if(ot(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Un(f);s[g]=oc(l,o,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{hp(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!ot(e,h)&&((u=ys(h))===h||!ot(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=oc(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!ot(e,h))&&(delete r[h],c=!0)}c&&Mi(n.attrs,"set","")}function hp(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Pr(l))continue;const c=e[l];let u;s&&ot(s,u=Un(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ho(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=at(t),c=o||vt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=oc(s,l,h,c[h],n,!ot(c,h))}}return a}function oc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ot(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ua(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ys(t))&&(i=!0))}return i}const o_=new WeakMap;function fp(n,e,t=!1){const i=t?o_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=fp(h,e,!0);It(a,f),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return bt(n)&&i.set(n,fs),fs;if(ke(r))for(let u=0;u<r.length;u++){const h=Un(r[u]);ph(h)&&(a[h]=vt)}else if(r)for(const u in r){const h=Un(u);if(ph(h)){const f=r[u],d=a[h]=ke(f)||Xe(f)?{type:f}:It({},f),g=d.type;let _=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const M=g[p],S=Xe(M)&&M.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ot(d,"default"))&&o.push(h)}}const c=[a,o];return bt(n)&&i.set(n,c),c}function ph(n){return n[0]!=="$"&&!Pr(n)}const xu=n=>n==="_"||n==="_ctx"||n==="$stable",vu=n=>ke(n)?n.map(qn):[qn(n)],l_=(n,e,t)=>{if(e._n)return e;const i=Eg((...s)=>vu(e(...s)),t);return i._c=!1,i},dp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(xu(s))continue;const r=n[s];if(Xe(r))e[s]=l_(s,r,i);else if(r!=null){const a=vu(r);e[s]=()=>a}}},pp=(n,e)=>{const t=vu(e);n.slots.default=()=>t},mp=(n,e,t)=>{for(const i in e)(t||!xu(i))&&(n[i]=e[i])},c_=(n,e,t)=>{const i=n.slots=cp();if(n.vnode.shapeFlag&32){const s=e._;s?(mp(i,e,t),t&&vd(i,"_",s,!0)):dp(e,i)}else e&&pp(n,e)},u_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=vt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:mp(s,e,t):(r=!e.$stable,dp(e,s)),a=e}else e&&(pp(n,e),a={default:1});if(r)for(const o in s)!xu(o)&&a[o]==null&&delete s[o]},Jt=g_;function h_(n){return f_(n)}function f_(n,e){const t=No();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Zn,insertStaticContent:g}=n,_=(w,I,y,ee=null,V=null,G=null,Y=void 0,ae=null,$=!!I.dynamicChildren)=>{if(w===I)return;w&&!mr(w,I)&&(ee=X(w),Fe(w,V,G,!0),w=null),I.patchFlag===-2&&($=!1,I.dynamicChildren=null),I.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(I.dynamicChildren===fs&&(I.dynamicChildren=[]),I.dynamicChildren.hasOnce=!0);const{type:W,ref:ye,shapeFlag:ue}=I;switch(W){case zo:m(w,I,y,ee);break;case Bn:p(w,I,y,ee);break;case ol:w==null&&M(I,y,ee,Y);break;case qt:B(w,I,y,ee,V,G,Y,ae,$);break;default:ue&1?R(w,I,y,ee,V,G,Y,ae,$):ue&6?K(w,I,y,ee,V,G,Y,ae,$):(ue&64||ue&128)&&W.process(w,I,y,ee,V,G,Y,ae,$,_e)}ye!=null&&V?Ur(ye,w&&w.ref,G,I||w,!I):ye==null&&w&&w.ref!=null&&Ur(w.ref,null,G,w,!0)},m=(w,I,y,ee)=>{if(w==null)i(I.el=o(I.children),y,ee);else{const V=I.el=w.el;I.children!==w.children&&c(V,I.children)}},p=(w,I,y,ee)=>{w==null?i(I.el=l(I.children||""),y,ee):I.el=w.el},M=(w,I,y,ee)=>{[w.el,w.anchor]=g(w.children,I,y,ee,w.el,w.anchor)},S=({el:w,anchor:I},y,ee)=>{let V;for(;w&&w!==I;)V=f(w),i(w,y,ee),w=V;i(I,y,ee)},x=({el:w,anchor:I})=>{let y;for(;w&&w!==I;)y=f(w),s(w),w=y;s(I)},R=(w,I,y,ee,V,G,Y,ae,$)=>{if(I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),w==null)D(I,y,ee,V,G,Y,ae,$);else{const W=w.el&&w.el._isVueCE?w.el:null;try{W&&W._beginPatch(),E(w,I,V,G,Y,ae,$)}finally{W&&W._endPatch()}}},D=(w,I,y,ee,V,G,Y,ae)=>{let $,W;const{props:ye,shapeFlag:ue,transition:A,dirs:b}=w;if($=w.el=a(w.type,G,ye&&ye.is,ye),ue&8?u($,w.children):ue&16&&L(w.children,$,null,ee,V,al(w,G),Y,ae),b&&Zi(w,null,ee,"created"),P($,w,w.scopeId,Y,ee),ye){for(const j in ye)j!=="value"&&!Pr(j)&&r($,j,null,ye[j],G,ee);"value"in ye&&r($,"value",null,ye.value,G),(W=ye.onVnodeBeforeMount)&&Gn(W,ee,w)}b&&Zi(w,null,ee,"beforeMount");const O=d_(V,A);O?A.beforeEnter($):A&&!A.persisted&&($[m_]=!0),i($,I,y),((W=ye&&ye.onVnodeMounted)||O||b)&&Jt(()=>{W&&Gn(W,ee,w),O&&A.enter($),b&&Zi(w,null,ee,"mounted")},V)},P=(w,I,y,ee,V)=>{if(y&&d(w,y),ee)for(let G=0;G<ee.length;G++)d(w,ee[G]);if(V){let G=V.subTree;if(I===G||bp(G.type)&&(G.ssContent===I||G.ssFallback===I)){const Y=V.vnode;P(w,Y,Y.scopeId,Y.slotScopeIds,V.parent)}}},L=(w,I,y,ee,V,G,Y,ae,$=0)=>{for(let W=$;W<w.length;W++){const ye=w[W]=ae?yi(w[W]):qn(w[W]);_(null,ye,I,y,ee,V,G,Y,ae)}},E=(w,I,y,ee,V,G,Y)=>{const ae=I.el=w.el;let{patchFlag:$,dynamicChildren:W,dirs:ye}=I;$|=w.patchFlag&16;const ue=w.props||vt,A=I.props||vt;let b;if(y&&Qi(y,!1),(b=A.onVnodeBeforeUpdate)&&Gn(b,y,I,w),ye&&Zi(I,w,y,"beforeUpdate"),y&&Qi(y,!0),W&&(!w.dynamicChildren||w.dynamicChildren.length!==W.length)&&($=0,Y=!1,W=null),(ue.innerHTML&&A.innerHTML==null||ue.textContent&&A.textContent==null)&&u(ae,""),W?v(w.dynamicChildren,W,ae,y,ee,al(I,V),G):Y||N(w,I,ae,null,y,ee,al(I,V),G,!1),$>0){if($&16)C(ae,ue,A,y,V);else if($&2&&ue.class!==A.class&&r(ae,"class",null,A.class,V),$&4&&r(ae,"style",ue.style,A.style,V),$&8){const O=I.dynamicProps;for(let j=0;j<O.length;j++){const te=O[j],q=ue[te],Ee=A[te];(Ee!==q||te==="value")&&r(ae,te,q,Ee,V,y)}}$&1&&w.children!==I.children&&u(ae,I.children)}else!Y&&W==null&&C(ae,ue,A,y,V);((b=A.onVnodeUpdated)||ye)&&Jt(()=>{b&&Gn(b,y,I,w),ye&&Zi(I,w,y,"updated")},ee)},v=(w,I,y,ee,V,G,Y)=>{for(let ae=0;ae<I.length;ae++){const $=w[ae],W=I[ae],ye=$.el||kr($),ue=ye&&($.type===qt||!mr($,W)||$.shapeFlag&198)?h(ye):y;_($,W,ue,null,ee,V,G,Y,!0)}},C=(w,I,y,ee,V)=>{if(I!==y){if(I!==vt)for(const G in I)!Pr(G)&&!(G in y)&&r(w,G,I[G],null,V,ee);for(const G in y){if(Pr(G))continue;const Y=y[G],ae=I[G];Y!==ae&&G!=="value"&&r(w,G,ae,Y,V,ee)}"value"in y&&r(w,"value",I.value,y.value,V)}},B=(w,I,y,ee,V,G,Y,ae,$)=>{const W=I.el=w?w.el:o(""),ye=I.anchor=w?w.anchor:o("");let{patchFlag:ue,dynamicChildren:A,slotScopeIds:b}=I;b&&(ae=ae?ae.concat(b):b),w==null?(i(W,y,ee),i(ye,y,ee),L(I.children||[],y,ye,V,G,Y,ae,$)):ue>0&&ue&64&&A&&w.dynamicChildren&&w.dynamicChildren.length===A.length?(v(w.dynamicChildren,A,y,V,G,Y,ae),(I.key!=null||V&&I===V.subTree)&&gp(w,I,!0)):N(w,I,y,ye,V,G,Y,ae,$)},K=(w,I,y,ee,V,G,Y,ae,$)=>{I.slotScopeIds=ae,w==null?I.shapeFlag&512?V.ctx.activate(I,y,ee,Y,$):se(I,y,ee,V,G,Y,$):ne(w,I,$)},se=(w,I,y,ee,V,G,Y)=>{const ae=w.component=S_(w,ee,V);if(_u(w)&&(ae.ctx.renderer=_e),E_(ae,!1,Y),ae.asyncDep){if(V&&V.registerDep(ae,Q,Y,G),!w.el){const $=ae.subTree=mn(Bn);p(null,$,I,y),w.placeholder=$.el}}else Q(ae,w,I,y,V,G,Y)},ne=(w,I,y)=>{const ee=I.component=w.component;if(i_(w,I,y))if(ee.asyncDep&&!ee.asyncResolved){I.el=w.el,I.placeholder=w.placeholder,k(ee,I,y);return}else ee.next=I,ee.update();else I.el=w.el,I.placeholder=w.placeholder,ee.vnode=I},Q=(w,I,y,ee,V,G,Y)=>{const ae=()=>{if(w.isMounted){let{next:ue,bu:A,u:b,parent:O,vnode:j}=w;{const Ae=_p(w);if(Ae){ue&&(ue.el=j.el,k(w,ue,Y)),Ae.asyncDep.then(()=>{const Re=()=>{w.job.flags&8||(V&&V.pendingBranch?Jt(Re,V):W())};Re.flags=48,Jt(Re,V)});return}}let te=ue,q;Qi(w,!1),ue?(ue.el=j.el,k(w,ue,Y)):ue=j,A&&eo(A),(q=ue.props&&ue.props.onVnodeBeforeUpdate)&&Gn(q,O,ue,j),Qi(w,!0);const Ee=fh(w),he=w.subTree;w.subTree=Ee,_(he,Ee,h(he.el||kr(he)),X(he),w,V,G),ue.el=Ee.el,te===null&&s_(w,Ee.el),b&&Jt(b,V),(q=ue.props&&ue.props.onVnodeUpdated)&&Jt(()=>Gn(q,O,ue,j),V)}else{let ue;const{el:A,props:b}=I,{bm:O,m:j,parent:te,root:q,type:Ee}=w,he=Fr(I);Qi(w,!1),O&&eo(O),!he&&(ue=b&&b.onVnodeBeforeMount)&&Gn(ue,te,I),Qi(w,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(Ee,w.parent?w.parent.type:void 0);const Ae=w.subTree=fh(w);_(null,Ae,y,ee,w,V,G),I.el=Ae.el}if(j&&Jt(j,V),!he&&(ue=b&&b.onVnodeMounted)){const Ae=I;Jt(()=>Gn(ue,te,Ae),V)}(I.shapeFlag&256||te&&Fr(te.vnode)&&te.vnode.shapeFlag&256)&&w.a&&Jt(w.a,V),w.isMounted=!0,I=y=ee=null}};w.scope.on();const $=w.effect=new wd(ae);w.scope.off();const W=w.update=$.run.bind($),ye=w.job=$.runIfDirty.bind($);ye.i=w,ye.id=w.uid,$.scheduler=()=>gu(ye),Qi(w,!0),W()},k=(w,I,y)=>{I.component=w;const ee=w.vnode.props;w.vnode=I,w.next=null,a_(w,I.props,ee,y),u_(w,I.children,y),ii(),jd(w),si()},N=(w,I,y,ee,V,G,Y,ae,$=!1)=>{const W=w&&w.children,ye=w?w.shapeFlag:0,ue=I.children,{patchFlag:A,shapeFlag:b}=I;if(A>0){if(A&128){ve(W,ue,y,ee,V,G,Y,ae,$);return}else if(A&256){le(W,ue,y,ee,V,G,Y,ae,$);return}}b&8?(ye&16&&ie(W,V,G),ue!==W&&u(y,ue)):ye&16?b&16?ve(W,ue,y,ee,V,G,Y,ae,$):ie(W,V,G,!0):(ye&8&&u(y,""),b&16&&L(ue,y,ee,V,G,Y,ae,$))},le=(w,I,y,ee,V,G,Y,ae,$)=>{w=w||fs,I=I||fs;const W=w.length,ye=I.length,ue=Math.min(W,ye);let A;for(A=0;A<ue;A++){const b=I[A]=$?yi(I[A]):qn(I[A]);_(w[A],b,y,null,V,G,Y,ae,$)}W>ye?ie(w,V,G,!0,!1,ue):L(I,y,ee,V,G,Y,ae,$,ue)},ve=(w,I,y,ee,V,G,Y,ae,$)=>{let W=0;const ye=I.length;let ue=w.length-1,A=ye-1;for(;W<=ue&&W<=A;){const b=w[W],O=I[W]=$?yi(I[W]):qn(I[W]);if(mr(b,O))_(b,O,y,null,V,G,Y,ae,$);else break;W++}for(;W<=ue&&W<=A;){const b=w[ue],O=I[A]=$?yi(I[A]):qn(I[A]);if(mr(b,O))_(b,O,y,null,V,G,Y,ae,$);else break;ue--,A--}if(W>ue){if(W<=A){const b=A+1,O=b<ye?I[b].el:ee;for(;W<=A;)_(null,I[W]=$?yi(I[W]):qn(I[W]),y,O,V,G,Y,ae,$),W++}}else if(W>A)for(;W<=ue;)Fe(w[W],V,G,!0),W++;else{const b=W,O=W,j=new Map;for(W=O;W<=A;W++){const ge=I[W]=$?yi(I[W]):qn(I[W]);ge.key!=null&&j.set(ge.key,W)}let te,q=0;const Ee=A-O+1;let he=!1,Ae=0;const Re=new Array(Ee);for(W=0;W<Ee;W++)Re[W]=0;for(W=b;W<=ue;W++){const ge=w[W];if(q>=Ee){Fe(ge,V,G,!0);continue}let Ne;if(ge.key!=null)Ne=j.get(ge.key);else for(te=O;te<=A;te++)if(Re[te-O]===0&&mr(ge,I[te])){Ne=te;break}Ne===void 0?Fe(ge,V,G,!0):(Re[Ne-O]=W+1,Ne>=Ae?Ae=Ne:he=!0,_(ge,I[Ne],y,null,V,G,Y,ae,$),q++)}const fe=he?p_(Re):fs;for(te=fe.length-1,W=Ee-1;W>=0;W--){const ge=O+W,Ne=I[ge],Le=I[ge+1],Me=ge+1<ye?Le.el||kr(Le):ee;Re[W]===0?_(null,Ne,y,Me,V,G,Y,ae,$):he&&(te<0||W!==fe[te]?we(Ne,y,Me,2):te--)}}},we=(w,I,y,ee,V=null)=>{const{el:G,type:Y,transition:ae,children:$,shapeFlag:W}=w;if(W&6){we(w.component.subTree,I,y,ee);return}if(W&128){w.suspense.move(I,y,ee);return}if(W&64){Y.move(w,I,y,_e);return}if(Y===qt){i(G,I,y);for(let ue=0;ue<$.length;ue++)we($[ue],I,y,ee);i(w.anchor,I,y);return}if(Y===ol){S(w,I,y);return}if(ee!==2&&W&1&&ae)if(ee===0)ae.persisted&&!G[sl]?i(G,I,y):(ae.beforeEnter(G),i(G,I,y),Jt(()=>ae.enter(G),V));else{const{leave:ue,delayLeave:A,afterLeave:b}=ae,O=()=>{w.ctx.isUnmounted?s(G):i(G,I,y)},j=()=>{const te=G._isLeaving||!!G[sl];G._isLeaving&&G[sl](!0),ae.persisted&&!te?O():ue(G,()=>{O(),b&&b()})};A?A(G,O,j):j()}else i(G,I,y)},Fe=(w,I,y,ee=!1,V=!1)=>{const{type:G,props:Y,ref:ae,children:$,dynamicChildren:W,shapeFlag:ye,patchFlag:ue,dirs:A,cacheIndex:b,memo:O}=w;if((ue===-2||W&&W.hasOnce)&&(V=!1),ae!=null&&(ii(),Ur(ae,null,y,w,!0),si()),b!=null&&(!w.ctx||w.ctx===I)&&(I.renderCache[b]=void 0),ye&256&&I.ctx.deactivate(w))return;const j=ye&1&&A,te=!Fr(w);let q;if(te&&(q=Y&&Y.onVnodeBeforeUnmount)&&Gn(q,I,w),ye&6)nt(w.component,y,ee);else{if(ye&128){w.suspense.unmount(y,ee);return}j&&Zi(w,null,I,"beforeUnmount"),ye&64?w.type.remove(w,I,y,_e,ee):W&&!W.hasOnce&&(G!==qt||ue>0&&ue&64)?ie(W,I,y,!1,!0):(G===qt&&ue&384||!V&&ye&16)&&ie($,I,y),ee&&Je(w)}const Ee=O!=null&&b==null;(te&&(q=Y&&Y.onVnodeUnmounted)||j||Ee)&&Jt(()=>{q&&Gn(q,I,w),j&&Zi(w,null,I,"unmounted"),Ee&&(w.el=null)},y)},Je=w=>{const{type:I,el:y,anchor:ee,transition:V}=w,G=I===qt;if(G&&!V){ut(y,ee);return}if(I===ol){x(w),V&&!V.persisted&&V.afterLeave&&V.afterLeave();return}const Y=G?ic(w):w,ae=()=>{G?h(y)&&ut(y,ee):s(y),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(Y&&Y.shapeFlag&1&&V&&!V.persisted){const{leave:$,delayLeave:W}=V,ye=Y.el,ue=()=>$(ye,ae);W?W(ye,ae,ue):ue()}else ae()},ut=(w,I)=>{let y;for(;w!==I;)y=f(w),s(w),w=y;s(I)},nt=(w,I,y)=>{const{bum:ee,scope:V,job:G,subTree:Y,um:ae,m:$,a:W}=w;mh($),mh(W),ee&&eo(ee),V.stop(),G?(G.flags|=8,Fe(Y,w,I,y)):Y&&(Y.transition=w.vnode.transition,Fe(Y,w,I,y)),ae&&Jt(ae,I);const ye=()=>{w.isUnmounted=!0};ye.flags=16,Jt(ye,I)},ie=(w,I,y,ee=!1,V=!1,G=0)=>{for(let Y=G;Y<w.length;Y++)Fe(w[Y],I,y,ee,V)},X=w=>{if(w.shapeFlag&6)return X(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=f(w.anchor||w.el),y=I&&I[Pg];return y?f(y):I},oe=(w,I,y)=>{const ee=w&&I._vnode?void 0:w&&w.component?w.component.uid:M_();Sg(()=>{w==null?I._vnode&&Fe(I._vnode,null,null,!0):_(I._vnode||null,w,I,null,null,null,y),I._vnode=w},ee)},_e={p:_,um:Fe,m:we,r:Je,mt:se,mc:L,pc:N,pbc:v,n:X,o:n};return{render:oe,hydrate:void 0,createApp:Jg(oe)}}function al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function d_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gp(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=yi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&gp(a,o)),o.type===zo&&(o.patchFlag===-1&&(o=s[r]=yi(o)),o.el=a.el),o.type===Bn&&!o.el&&(o.el=a.el)}}function p_(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function _p(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function mh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function kr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return kr(e.subTree);const t=n.suspense;return t&&t.activeBranch?kr(t.activeBranch):null}const bp=n=>n.__isSuspense,m_=Symbol("_deferredEnter");function g_(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Mg(n)}const qt=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),ol=Symbol.for("v-stc"),_s=[];let pn=null;function lt(n=!1){_s.push(pn=n?null:[])}function xp(){_s.pop(),pn=_s[_s.length-1]||null}let qr=1;function gh(n,e=!1){qr+=n,n<0&&pn&&e&&(pn.hasOnce=!0)}function vp(n){return n.dynamicChildren=qr>0?pn||fs:null,xp(),qr>0&&pn&&pn.push(n),n}function ft(n,e,t,i,s,r){return vp(ce(n,e,t,i,s,r,!0))}function __(n,e,t,i,s){return vp(mn(n,e,t,i,s,!0))}function yu(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const yp=({key:n})=>n??null,no=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Ct(n)||Xe(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function ce(n,e=null,t=null,i=0,s=null,r=n===qt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yp(e),ref:e&&no(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return o?(bo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),qr>0&&!a&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const mn=b_;function b_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Gg)&&(n=Bn),yu(n)){const o=Js(n,e,!0);return t&&bo(o,t),qr>0&&!r&&pn&&(o.shapeFlag&6?pn[pn.indexOf(n)]=o:pn.push(o)),o.patchFlag=-2,o}if(R_(n)&&(n=n.__vccOpts),e){e=x_(e);let{class:o,style:l}=e;o&&!Rt(o)&&(e.class=oa(o)),bt(l)&&(Oo(l)&&!ke(l)&&(l=It({},l)),e.style=ou(l))}const a=Rt(n)?1:bp(n)?128:Bo(n)?64:bt(n)?4:Xe(n)?2:0;return ce(n,e,t,i,s,a,r,!0)}function x_(n){return n?Oo(n)?It({},n):up(n)?It({},n[Ap]||n):n:null}function Js(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?v_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yp(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Js(n.ssContent),ssFallback:n.ssFallback&&Js(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Nr(u,l.clone(u)),u}function ei(n=" ",e=0){return mn(zo,null,n,e)}function zt(n="",e=!1){return e?(lt(),__(Bn,null,n)):mn(Bn,null,n)}function qn(n){return n==null||typeof n=="boolean"?mn(Bn):ke(n)?mn(qt,null,n.slice()):yu(n)?yi(n):mn(zo,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Js(n)}function bo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),bo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!up(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Xe(e)){if(i&65){bo(n,{default:e});return}e={default:e,_ctx:Tn},t=32}else e=String(e),i&64?(t=16,e=[ei(e)]):t=8;n.children=e,n.shapeFlag|=t}function v_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=oa([e.class,i.class]));else if(s==="style")e.style=ou([e.style,i.style]);else if(Po(s)){const r=e[s],a=i[s];a&&r!==a&&!(ke(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Do(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Gn(n,e,t,i=null){kn(n,e,7,[t,i])}const y_=sp();let Mp=0;function M_(){return Mp}function S_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||y_,r={uid:Mp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(i,s),emitsOptions:rp(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Qg.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const Sp=()=>tn||Tn;let xo,Kr;{const n=No(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};xo=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Kr=e("__VUE_SSR_SETTERS__",t=>Yr=t)}const ua=n=>{const e=tn;return xo(n),n.scope.on(),()=>{n.scope.off(),xo(e)}},_h=()=>{tn&&tn.scope.off(),xo(null)};function Ep(n){return n.vnode.shapeFlag&4}let Yr=!1;function E_(n,e=!1,t=!1){e&&Kr(e);const{props:i,children:s}=n.vnode,r=Ep(n);r_(n,i,r,e),c_(n,s,t||e);const a=r?T_(n,e):void 0;return e&&Kr(!1),a}function T_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wg);const{setup:i}=t;if(i){ii();const s=n.setupContext=i.length>1?w_(n):null,r=ua(n),a=la(i,n,0,[n.props,s]),o=gd(a);if(si(),r(),(o||n.sp)&&!Fr(n)&&Qd(n),o){if(a.then(_h,_h),e)return a.then(l=>{Kr(!0);try{bh(n,l,e)}finally{Kr(!1)}}).catch(l=>{ko(l,n,0,void 0,!0),n.ssrRender=(c,u)=>u("<!---->")});n.asyncDep=a}else bh(n,a)}else Tp(n)}function bh(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:bt(e)&&(n.setupState=Vd(e)),Tp(n)}function Tp(n,e,t){const i=n.type;n.render||(n.render=i.render||Zn);{const s=ua(n);ii();try{jg(n)}finally{si(),s()}}}const Ap=Symbol(),A_={get(n,e){return Xt(n,"get",""),e===Ap?n:n[e]}};function w_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,A_),slots:n.slots,emit:n.emit,expose:e}}function Vo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(pu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function R_(n){return Xe(n)&&"__vccOpts"in n}const xi=(n,e)=>_g(n,e,Yr),C_="3.5.45";let lc;const xh=typeof window<"u"&&window.trustedTypes;if(xh)try{lc=xh.createPolicy("vue",{createHTML:n=>n})}catch{}const wp=lc?n=>lc.createHTML(n):n=>n,P_="http://www.w3.org/2000/svg",D_="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,vh=vi&&vi.createElement("template"),L_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?vi.createElementNS(P_,n):e==="mathml"?vi.createElementNS(D_,n):t?vi.createElement(n,{is:t}):vi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>vi.createTextNode(n),createComment:n=>vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{vh.innerHTML=wp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=vh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},I_=Symbol("_vtc");function N_(n,e,t){const i=n[I_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yh=Symbol("_vod"),U_=Symbol("_vsh"),F_=Symbol(""),O_=/(?:^|;)\s*display\s*:/;function k_(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&wr(i,o,"")}else for(const a in e)t[a]==null&&wr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?H_(n,a,!Rt(e)&&e?e[a]:void 0,o)||wr(i,a,o):wr(i,a,"")}}else if(s){if(e!==t){const a=i[F_];a&&(t+=";"+a),i.cssText=t,r=O_.test(t)}}else e&&n.removeAttribute("style");yh in n&&((!s||e!==t)&&(n[yh]=r?i.display:""),n[U_]&&(i.display="none"))}const va=/\s*!important$/;function wr(n,e,t){if(ke(t))t.forEach(i=>wr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))va.test(t)?n.setProperty(e,t.replace(va,""),"important"):n.setProperty(e,t);else{const i=B_(n,e);va.test(t)?n.setProperty(ys(i),t.replace(va,""),"important"):n[i]=t}}const Mh=["Webkit","Moz","ms"],ll={};function B_(n,e){const t=ll[e];if(t)return t;let i=Un(e);if(i!=="filter"&&i in n)return ll[e]=i;i=xd(i);for(let s=0;s<Mh.length;s++){const r=Mh[s]+i;if(r in n)return ll[e]=r}return e}function H_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&t===i}const Sh="http://www.w3.org/1999/xlink";function Eh(n,e,t,i,s,r=zm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sh,e.slice(6,e.length)):n.setAttributeNS(Sh,e,t):t==null||r&&!yd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":wn(t)?String(t):t)}function Th(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?wp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=yd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cs(n,e,t,i){n.addEventListener(e,t,i)}function z_(n,e,t,i){n.removeEventListener(e,t,i)}const Ah=Symbol("_vei");function V_(n,e,t,i,s=null){const r=n[Ah]||(n[Ah]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=j_(e);if(i){const c=r[e]=K_(i,s);cs(n,o,c,l)}else a&&(z_(n,o,a,l),r[e]=void 0)}}const G_=/(Once|Passive|Capture)$/,W_=/^on:?(?:Once|Passive|Capture)$/;function j_(n){let e,t;for(;(t=n.match(G_))&&!W_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ys(n.slice(2)),e]}let cl=0;const X_=Promise.resolve(),q_=()=>cl||(X_.then(()=>cl=0),cl=Date.now());function K_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(ke(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&kn(c,e,5,o)}}else kn(s,e,5,[i])};return t.value=n,t.attached=q_(),t}const wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Y_=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?N_(n,i,a):e==="style"?k_(n,t,i):Po(e)?Do(e)||V_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(n,e,i,a))?(Th(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eh(n,e,i,a,r,e!=="value")):n._isVueCE&&(J_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?Th(n,Un(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Eh(n,e,i,a))};function $_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wh(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wh(e)&&Rt(t)?!1:e in n}function J_(n,e){const t=n._def.props;if(!t)return!1;const i=Un(e);return Array.isArray(t)?t.some(s=>Un(s)===i):Object.keys(t).some(s=>Un(s)===i)}const vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>eo(e,t):e};function Z_(n){n.target.composing=!0}function Rh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ds=Symbol("_assign"),ya=Symbol("_initialValue");function ul(n,e,t){return e&&(n=n.trim()),t&&(n=aa(n)),n}const Q_={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[ya]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[ya]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ds]=vo(s);const r=i||s.props&&s.props.type==="number";cs(n,e?"change":"input",a=>{a.target.composing||n[ds](ul(n.value,t,r))}),(t||r)&&cs(n,"change",()=>{n.value=ul(n.value,t,r)}),e||(cs(n,"compositionstart",Z_),cs(n,"compositionend",Rh),cs(n,"change",Rh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[ya];delete n[ya],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[ds](ul(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[ds]=vo(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?aa(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},eb={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,cs(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?aa(yo(l)):yo(l)),r=n.multiple,a=r?bs(n._modelValue)?new Set(s):s:s[0],o=n._pendingValue=[r,r?ke(a)?s.slice():s:a];try{n[ds](a)}finally{mu(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[ds]=vo(i)},mounted(n,{value:e,modifiers:{number:t}}){Ch(n,e,t)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[ds]=vo(t)},updated(n,{value:e,modifiers:{number:t}}){const i=n._pendingValue;n._pendingValue=void 0,(!i||i[0]!==n.multiple||!tb(e,i[1],i[0]))&&Ch(n,e,t)}};function tb(n,e,t){if(!t||ke(n))return qi(n,e);if(bs(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function Ch(n,e,t=!1){const i=n.multiple,s=ke(e);if(!(i&&!s&&!bs(e))){for(let r=0,a=n.options.length;r<a;r++){const o=n.options[r],l=yo(o);if(i)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Wm(e,l)>-1}else o.selected=e.has(l)||t&&typeof l=="string"&&e.has(aa(l));else if(qi(yo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!i&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function yo(n){return"_value"in n?n._value:n.value}const nb=["ctrl","shift","alt","meta"],ib={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>nb.some(t=>n[`${t}Key`]&&!e.includes(t))},io=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=ib[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},sb=It({patchProp:Y_},L_);let Ph;function rb(){return Ph||(Ph=h_(sb))}const ab=((...n)=>{const e=rb().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=lb(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,ob(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function ob(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lb(n){return Rt(n)?document.querySelector(n):n}let Rp;const Go=n=>Rp=n,Cp=Symbol();function cc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Br;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Br||(Br={}));function cb(){const n=Td(!0),e=n.run(()=>Wt({}));let t=[],i=[];const s=pu({install(r){Go(s),s._a=r,r.provide(Cp,s),r.config.globalProperties.$pinia=s,i.forEach(a=>t.push(a)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Pp=()=>{};function Dh(n,e,t,i=Pp){n.add(e);const s=()=>{n.delete(e)&&i()};return!t&&Ad()&&jm(s),s}function Ts(n,...e){n.forEach(t=>{t(...e)})}const ub=n=>n(),Lh=Symbol(),hl=Symbol();function uc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];cc(s)&&cc(i)&&n.hasOwnProperty(t)&&!Ct(i)&&!Qn(i)?n[t]=uc(s,i):n[t]=i}return n}const hb=Symbol();function fb(n){return!cc(n)||!Object.prototype.hasOwnProperty.call(n,hb)}const{assign:Oi}=Object;function db(n){return!!(Ct(n)&&n.effect)}function pb(n,e,t,i){const{state:s,actions:r,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=s?s():{});const u=dg(t.state.value[n]);return Oi(u,r,Object.keys(a||{}).reduce((h,f)=>(h[f]=pu(xi(()=>{Go(t);const d=t._s.get(n);return a[f].call(d,d)})),h),{}))}return l=Dp(n,c,e,t,i,!0),l}function Dp(n,e,t={},i,s,r){let a;const o=Oi({actions:{}},t),l={deep:!0};let c,u,h=new Set,f=new Set,d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let _;function m(L){let E;c=u=!1,typeof L=="function"?(L(i.state.value[n]),E={type:Br.patchFunction,storeId:n,events:d}):(uc(i.state.value[n],L),E={type:Br.patchObject,payload:L,storeId:n,events:d});const v=_=Symbol();mu().then(()=>{_===v&&(c=!0)}),u=!0,Ts(h,E,i.state.value[n])}const p=r?function(){const{state:E}=t,v=E?E():{};this.$patch(C=>{Oi(C,v)})}:Pp;function M(){a.stop(),h.clear(),f.clear(),i._s.delete(n)}const S=(L,E="")=>{if(Lh in L)return L[hl]=E,L;const v=function(){Go(i);const C=Array.from(arguments),B=new Set,K=new Set;function se(k){B.add(k)}function ne(k){K.add(k)}Ts(f,{args:C,name:v[hl],store:R,after:se,onError:ne});let Q;try{Q=L.apply(this&&this.$id===n?this:R,C)}catch(k){throw Ts(K,k),k}return Q instanceof Promise?Q.then(k=>(Ts(B,k),k)).catch(k=>(Ts(K,k),Promise.reject(k))):(Ts(B,Q),Q)};return v[Lh]=!0,v[hl]=E,v},x={_p:i,$id:n,$onAction:Dh.bind(null,f),$patch:m,$reset:p,$subscribe(L,E={}){const v=Dh(h,L,E.detached,()=>C()),C=a.run(()=>ms(()=>i.state.value[n],B=>{(E.flush==="sync"?u:c)&&L({storeId:n,type:Br.direct,events:d},B)},Oi({},l,E)));return v},$dispose:M},R=Fo(x);i._s.set(n,R);const P=(i._a&&i._a.runWithContext||ub)(()=>i._e.run(()=>(a=Td()).run(()=>e({action:S}))));for(const L in P){const E=P[L];if(Ct(E)&&!db(E)||Qn(E))r||(g&&fb(E)&&(Ct(E)?E.value=g[L]:uc(E,g[L])),i.state.value[n][L]=E);else if(typeof E=="function"){const v=S(E,L);P[L]=v,o.actions[L]=E}}return Oi(R,P),Oi(at(R),P),Object.defineProperty(R,"$state",{get:()=>i.state.value[n],set:L=>{m(E=>{Oi(E,L)})}}),i._p.forEach(L=>{Oi(R,a.run(()=>L({store:R,app:i._a,pinia:i,options:o})))}),g&&r&&t.hydrate&&t.hydrate(R.$state,g),c=!0,u=!0,R}function mb(n,e,t){let i;const s=typeof e=="function";i=s?t:e;function r(a,o){const l=Ag();return a=a||(l?Ir(Cp,null):null),a&&Go(a),a=Rp,a._s.has(n)||(s?Dp(n,e,i,a):pb(n,i,a)),a._s.get(n)}return r.$id=n,r}function Mo(n){let e=n.trim();if(/了吗|了么|了没有|有没有|是不是|是否|多少|状态|支持|具备|查看|查询|看看|确认|开没开|关没关|开了没|关了没/.test(e))return e;const t=/^(?:能不能|能否|可不可以|可以|能)(?:请)?(?:帮我|帮忙|替我|麻烦你)/,i=t.test(e)||/^(?:请|麻烦|帮我|帮忙)/.test(e);return t.test(e)&&(e=e.replace(t,"帮我")),i&&(e=e.replace(/(?:好吗|好不好|可以吗|行吗|吗)[？?。！!]*$/,"").replace(/[？?]+$/,"")),e}function So(n){const e=[...n.matchAll(/[，,、；;]|并且|同时|以及|顺便/g)],t=[];let i=0;for(const o of e)t.push({start:i,end:o.index,text:n.slice(i,o.index)}),i=o.index+o[0].length;t.push({start:i,end:n.length,text:n.slice(i)});const s=/开|关|升|降|落|收|抬|挪|低|高|透|留|合/,r=[];let a=0;for(let o=0;o<t.length;o++){const l=n.slice(a,t[o].end).trim();(o===t.length-1||s.test(l)&&s.test(t[o+1].text))&&(l&&r.push(l),a=t[o+1]?.start??n.length)}return r.length>1&&r.every(o=>s.test(o))?r:[n.trim()]}const je=Object.freeze({Matched:"matched",Cancel:"cancel",Empty:"empty",Negated:"negated",NonImperative:"non_imperative",Ambiguous:"ambiguous",InvalidMagnitude:"invalid_magnitude",UnsupportedDevice:"unsupported_device",UnsupportedExpression:"unsupported_expression",ModelFallback:"model_fallback"}),Zs=["FL","FR","RL","RR"];function Lp(n){return n.normalize("NFKC").replace(/[\s，。！？、,.!?]/g,"").replace(/驾驶员|驾驶位/g,"主驾").replace(/^(请|麻烦|帮我|把)+/,"").replace(/(?:吧|一下|谢谢)+$/,"")}const gb="(?:副驾(?:座位)?(?:后面|后边|后方|后排)|主驾(?:座位)?(?:后面|后边|后方|后排)|左前|右前|左后|右后|前左|前右|后左|后右|主驾|副驾|左(?:侧|边)?|右(?:侧|边)?|前(?:面|排)?|后(?:面|排)?|所有|全部|四个|四扇|两个前|两个后|前|后)",fl=`${gb}(?:的)?(?:两个|两扇)?(?:车窗|窗户|窗)?`,_b="(?:一半|半|百分之[零一二两三四五六七八九十百\\d.]+|[\\d.]+%)",Ih=`(?:(?:全部|全)?(?:打开|开启|开|降下|降|关闭|关上|关|升起|升上|升)(?:到)?${_b}?|半开|全开|全关|(?:再)?(?:打开|开|降下|降|关闭|关|升起|升)一点)`,Ip=new RegExp(`^(?:(?:${fl})?(?:${Ih})|(?:${Ih})(?:${fl})|(?:是|就|那个|操作|选)?${fl})$`);function Mu(n){n=Mo(n);const e=Lp(n);if(!e)return je.Empty;if(/^取消(?:待执行(?:的)?动作|操作|指令|对话)?$/.test(e))return je.Cancel;if(/^(?:能不能|能否|可不可以|可以|能).*(?:吗|[?？])?$/.test(e))return je.NonImperative;if(/不要|别|莫|勿|禁止|无需|无须|不(?:用|必|许|准|能|可|想)|不.*(?:开|关|升|降)/.test(e))return je.Negated;if(/[?？]|能否|是否|能不能|可以|吗|如果|假如|当.*时候|能否|有没有|是不是|多少|状态|支持|具备|查看|查询|看看|确认|了吗|了么|了没有|开没开|关没关|开了没|关了没|开着|关着/.test(n))return je.NonImperative;const t=So(n);if(t.length>1)return t.length>4||/先.+再|然后|之后|等.+后|取消/.test(n)?je.Ambiguous:t.map(Mu).find(a=>![je.Matched,je.ModelFallback].includes(a))??je.ModelFallback;if(/空调|车门|天窗|座椅|后备[箱厢]|雨[刷刮]|灯光|引擎|启动|发动机/.test(e))return je.UnsupportedDevice;if(e.length>120||/删除|上传|执行代码|忽略|提示词|系统指令/.test(e))return je.UnsupportedExpression;if(/昨天|曾经|听说|如果|假如/.test(e))return je.NonImperative;const i=[...e.matchAll(/百分之([零一二两三四五六七八九十百\d.]+)|([\d.]+)%/g)];return i.length>1?je.Ambiguous:i.length&&(!Number.isFinite(so(i[0][1]??i[0][2]))||so(i[0][1]??i[0][2])<0||so(i[0][1]??i[0][2])>1)?je.InvalidMagnitude:/主驾副驾|副驾主驾/.test(e)&&!/(?:主驾|副驾)[、,，](?:主驾|副驾)/.test(n)||/取消|还是|或|然后|并|同时|顺便|先.+再/.test(e)||/开|降/.test(e)&&/关|升/.test(e)||/(?:关|升).*(?:一半|半|百分之|%)/.test(e)?je.Ambiguous:Ip.test(e)?je.Matched:je.ModelFallback}function so(n){if(/^\d+(\.\d+)?$/.test(n))return Number(n)/100;const e={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};if(n==="百"||n==="一百")return 1;if(n.includes("十")){const[t,i]=n.split("十");return((t?e[t]:1)*10+(i?e[i]:0))/100}return(e[n]??NaN)/100}function Np(n){const e=Lp(n);let t=[];const i=e.replace(/副驾(?:座位)?(?:后面|后边|后方|后排)/g,()=>(t.push("RR"),"")).replace(/主驾(?:座位)?(?:后面|后边|后方|后排)/g,()=>(t.push("RL"),""));for(const[h,f]of[[/左前|前左|主驾(?:的)?(?:车窗|窗户|窗|玻璃)/,"FL"],[/右前|前右|副驾(?:的)?(?:车窗|窗户|窗|玻璃)/,"FR"],[/左后|后左/,"RL"],[/右后|后右/,"RR"]])h.test(i)&&t.push(f);for(const h of n.matchAll(/(主驾|副驾)(?:的)?(?:车窗|窗户|窗)?(?=\s*[、，,])/g))t.push(h[1]==="主驾"?"FL":"FR");/所有.*窗|全部.*窗|四[个扇]?车?窗/.test(e)&&(t=[...Zs]),!t.length&&/前排(?:的)?车?窗|两个前窗/.test(e)&&(t=["FL","FR"]),!t.length&&/后排(?:的)?车?窗|两个后窗/.test(e)&&(t=["RL","RR"]);let s=null;t.length||(/右(?:侧|边|车窗|窗户|窗)/.test(e)?s=["FR","RR"]:/左(?:侧|边|车窗|窗户|窗)/.test(e)?s=["FL","RL"]:/后(?:排|面的)?(?:车窗|窗户|窗)/.test(e)?s=["RL","RR"]:/前(?:排|面的)?(?:车窗|窗户|窗)/.test(e)&&(s=["FL","FR"]));const r=[...e.matchAll(/百分之([零一二两三四五六七八九十百\d.]+)|([\d.]+)%/g)];let a=r.length===1?so(r[0][1]??r[0][2]):/一半|半开|开到?半/.test(e)?.5:null,o=null;/(?:开|降|升|设置)(?:到|为)|开一半|半开/.test(e)&&(o="absolute"),/再(?:开|关|降|升)一点/.test(e)&&(o="relative",a=.1);const l=/打开|开启|开到|开一半|开一点|降下|降一点/.test(e),c=/关闭|关上|升起|升上|关一点|升一点/.test(e),u=l!==c?l?1:-1:null;return{targets:t.length?[...new Set(t)]:null,candidates:s,requiresTargetClarification:!!s&&Ip.test(e),mode:o,magnitude:a,direction:u}}const js=(n,e)=>n&&typeof n=="object"&&!Array.isArray(n)&&Object.keys(n).sort().join(",")===[...e].sort().join(","),hc=n=>Array.isArray(n)&&n.length<=4&&new Set(n).size===n.length&&n.every(e=>Zs.includes(e));function Su(n){return n===null||js(n,["kind",n?.kind==="absolute"?"value":"delta"])&&(n.kind==="absolute"?Number.isFinite(n.value)&&n.value>=0&&n.value<=1:n.kind==="relative"&&[.1,-.1].includes(n.delta))}const Nh=(n,e)=>n&&e&&n.kind===e.kind&&(n.kind==="absolute"?n.value===e.value:n.delta===e.delta);class Up extends Error{constructor(e,t,i){super(t),this.name="IntentValidationError",this.code=e,this.path=i}}const rt=(n,e,t)=>{throw new Up(n,e,t)},Fp=(n,e,t)=>e.targets??e.candidates??(n.source==="pending"?t?.candidates:null)??Zs;function Uh(n,e,t,i=Date.now()){const s=t.pending&&t.pending.expiresAt>i?t.pending:null;return[...n.target.candidates.length?n.target.candidates:Fp(n.target,Np(e),s)]}function bb(n,e){if(n){if(e.mode&&n.kind!==e.mode&&rt("OPERATION_MODE_CONFLICT","动作类型与明确表达冲突","operation.kind"),e.magnitude!==null){const t=n.kind==="absolute"?n.value:Math.abs(n.delta);Math.abs(t-e.magnitude)>1e-9&&rt("MAGNITUDE_CONFLICT","幅度与明确数值冲突","operation")}e.direction&&n.kind==="relative"&&Math.sign(n.delta)!==e.direction&&rt("DIRECTION_CONFLICT","方向与明确动作冲突","operation.delta")}}function Op(n,e,t,i=Date.now()){xb(t),js(n,["type","target","operation","missing"])||rt("INVALID_STRUCTURE","模型意图字段结构无效","$"),["command","clarify","unsupported"].includes(n.type)||rt("INVALID_TYPE","模型意图类型无效","type"),js(n.target,["source","ids","candidates"])||rt("INVALID_TARGET_STRUCTURE","模型目标字段结构无效","target"),["explicit","context","pending","unknown"].includes(n.target.source)||rt("INVALID_TARGET_SOURCE","模型目标来源枚举无效","target.source"),hc(n.target.ids)||rt("INVALID_TARGET_IDS","模型目标列表结构无效","target.ids"),hc(n.target.candidates)||rt("INVALID_CANDIDATES","模型候选列表结构无效","target.candidates"),Su(n.operation)||rt("INVALID_OPERATION","模型动作结构或幅度无效","operation"),[null,"target","action","amount"].includes(n.missing)||rt("INVALID_MISSING","模型追问字段枚举无效","missing");const s=n.target,r=Np(e),a=t.active&&t.active.expiresAt>i?t.active:null,o=t.pending&&t.pending.expiresAt>i?t.pending:null;if(n.type==="unsupported")return(n.operation||n.missing||s.ids.length||s.candidates.length||s.source!=="unknown")&&rt("INVALID_UNSUPPORTED","无效的不支持结果：必须无目标、动作与追问","$"),n;const l=Mu(e);if([je.Cancel,je.Empty,je.Negated,je.NonImperative,je.InvalidMagnitude,je.UnsupportedDevice,je.UnsupportedExpression].includes(l)&&rt("RULE_BLOCKED","规则禁止将此输入转为车窗操作","type"),l===je.Ambiguous&&n.type==="command"&&rt("AMBIGUITY_REQUIRES_CLARIFY","已知歧义必须追问","type"),bb(n.operation,r),n.type==="clarify"){n.missing||rt("CLARIFY_MISSING_REQUIRED","无效追问：missing不能为null","missing"),s.ids.length&&rt("CLARIFY_IDS_MUST_BE_EMPTY","无效追问：ids必须为空，已知范围放在candidates","target.ids"),s.source==="context"&&rt("CLARIFY_CONTEXT_SOURCE","无效追问：source不能为context，追问不能带入执行目标","target.source"),s.source==="pending"&&!o&&rt("PENDING_UNAVAILABLE","待执行上下文已失效","target.source");const c=Fp(s,r,o);return s.candidates.some(u=>!c.includes(u))&&rt("CANDIDATE_CONSTRAINT_CONFLICT","追问候选与已知约束冲突","target.candidates"),s.source==="pending"&&n.operation&&!Nh(n.operation,o.operation)&&rt("PENDING_OPERATION_CHANGED","不能改写待执行动作","operation"),n}if(n.missing!==null&&rt("COMMAND_MISSING_MUST_BE_NULL","执行意图不完整：missing必须为null","missing"),n.operation||rt("COMMAND_OPERATION_REQUIRED","执行意图不完整：必须有动作","operation"),s.ids.length||rt("COMMAND_TARGET_REQUIRED","执行意图不完整：必须有目标","target.ids"),s.candidates.length&&rt("COMMAND_CANDIDATES_MUST_BE_EMPTY","执行意图不完整：candidates必须为空","target.candidates"),r.targets&&[...r.targets].sort().join()!==[...s.ids].sort().join()&&rt("TARGET_CONSTRAINT_CONFLICT","目标与明确位置冲突","target.ids"),r.candidates){const c=s.source==="pending"&&o?.candidates?r.candidates.filter(u=>o.candidates.includes(u)):r.candidates;s.ids.some(u=>!c.includes(u))&&rt("SIDE_CONSTRAINT_CONFLICT","目标与已知侧向约束冲突","target.ids"),r.requiresTargetClarification&&(c.length!==1||s.ids.length!==1||s.ids[0]!==c[0])&&rt("TARGET_STILL_AMBIGUOUS","目标仍不明确，必须追问","target.ids")}return s.source==="explicit"||(s.source==="context"?(r.targets||!a||s.ids.length!==1||s.ids[0]!==a.target)&&rt("ACTIVE_TARGET_INVALID","续接目标无效：必须引用有效active且与其单窗目标一致，不能覆盖明确新位置","target"):s.source==="pending"?((!o||s.ids.length!==1||o.candidates&&!o.candidates.includes(s.ids[0]))&&rt("PENDING_TARGET_INVALID","待执行目标无效：必须从有效pending的候选中确定一个车窗","target"),Nh(n.operation,o.operation)||rt("PENDING_OPERATION_CHANGED","不能改写待执行动作","operation")):rt("COMMAND_TARGET_SOURCE_UNKNOWN","目标来源无效：执行时source不能为unknown","target.source")),n.operation.kind==="relative"&&s.ids.length!==1&&rt("RELATIVE_SINGLE_TARGET_REQUIRED","相对操作只能是单窗","target.ids"),n}function xb(n){if(!js(n,["active","pending"]))throw new Error("无效对话上下文");if(n.active!==null&&(!js(n.active,["target","expiresAt"])||!Zs.includes(n.active.target)||!Number.isFinite(n.active.expiresAt)))throw new Error("无效续接上下文");if(n.pending!==null&&(!js(n.pending,["operation","expiresAt","candidates"])||!n.pending.operation||!Su(n.pending.operation)||!Number.isFinite(n.pending.expiresAt)||!(n.pending.candidates===null||hc(n.pending.candidates))))throw new Error("无效待执行上下文");return n}function vb(n){if(!Array.isArray(n)||!n.length||n.length>4)throw new Error("一次最多支持四项车窗操作。");const e=new Set,t=n.map(i=>{if(!i||!Array.isArray(i.targets)||i.targets.some(s=>!Zs.includes(s)))throw new Error("无效车辆目标");if(!Su(i.operation))throw new Error("无效车窗动作或幅度");for(const s of i.targets){if(e.has(s))throw new Error("同一车窗出现多次，请明确每扇车窗只执行一个动作。");e.add(s)}if(i.candidates&&(!Array.isArray(i.candidates)||i.candidates.some(s=>!Zs.includes(s))))throw new Error("无效候选车窗");if(i.operation?.kind==="relative"&&i.targets.length>1)throw new Error("相对调整请指定一个车窗。");return{targets:[...i.targets],operation:i.operation?{...i.operation}:null,...i.candidates?{candidates:[...i.candidates]}:{}}});return{items:t,ready:t.every(i=>i.targets.length&&i.operation),missingIndex:t.findIndex(i=>!i.targets.length||!i.operation)}}function yb(n,e,t,i=Date.now()){const s=(h,f="$")=>{throw new Up("INVALID_BATCH",h,f)};(!n||Object.keys(n).sort().join()!=="items,type"||!["command","clarify","unsupported"].includes(n.type)||!Array.isArray(n.items))&&s("批次结构无效");const r=So(e);(r.length<2||r.length>4||n.items.length!==r.length)&&s("批次必须完整覆盖每个分句");const a=So(Mo(e)),o=n.items.map((h,f)=>((!h||Object.keys(h).sort().join()!=="clause,intent"||h.clause!==r[f])&&s("分句与原文不一致",`items.${f}.clause`),Op(h.intent,a[f]??h.clause,{active:null,pending:null},i))),l=o.some(h=>h.type==="unsupported"),c=o.some(h=>h.type==="clarify");n.type!==(l?"unsupported":c?"clarify":"command")&&s("批次状态与子项不一致");const u=new Set;for(const h of o)for(const f of h.target.ids)u.has(f)&&s("同一车窗出现多次，整批未执行","items"),u.add(f);return n}const jt=["FL","FR","RL","RR"],Fh=[{open:0,offset:[0,0,0],rotationX:0},{open:.1,offset:[.6,-5.7,0],rotationX:-1.5},{open:.2,offset:[.6,-11.4,0],rotationX:-2.5},{open:.3,offset:[.6,-17.1,0],rotationX:-3.5},{open:.4,offset:[.6,-22.8,0],rotationX:-5},{open:.5,offset:[.6,-28.5,0],rotationX:-6},{open:.6,offset:[.6,-34.2,-2.25],rotationX:-7.2},{open:.7,offset:[.6,-39.9,-2.75],rotationX:-8.9},{open:.8,offset:[.6,-45.6,-2.75],rotationX:-10.1},{open:.9,offset:[.6,-51.3,-2.5],rotationX:-11.8},{open:1,offset:[.6,-57,-2.5],rotationX:-12}],Oh=[{open:0,offset:[0,0,0],rotationX:0},{open:.1,offset:[0,-5.5,0],rotationX:-2},{open:.2,offset:[0,-11,0],rotationX:-3.5},{open:.3,offset:[0,-16.5,0],rotationX:-5.5},{open:.4,offset:[0,-22,0],rotationX:-7},{open:.5,offset:[0,-27.5,0],rotationX:-9},{open:.6,offset:[0,-33,0],rotationX:-10.7},{open:.7,offset:[0,-38.5,0],rotationX:-12.4},{open:.8,offset:[0,-44,0],rotationX:-14.6},{open:.9,offset:[0,-49.5,0],rotationX:-16.3},{open:1,offset:[0,-55,0],rotationX:-18}],kh=n=>n.map(e=>({...e,offset:[e.offset[0],e.offset[1],-e.offset[2]],rotationX:-e.rotationX})),ti={FL:{label:"左前 · 主驾",node:"DoorGlass_FL__Front_door_glass",keyframes:Fh},FR:{label:"右前 · 副驾",node:"DoorGlass_FR__Front_door_glass001",keyframes:kh(Fh)},RL:{label:"左后",node:"DoorGlass_RL__Rear_door_glass",keyframes:Oh},RR:{label:"右后",node:"DoorGlass_RR__Rear_door_glass001",keyframes:kh(Oh)}},Mb=["DoorGlass_RL__Quarter_glass","DoorGlass_RR__Quarter_glass001"];function Sb(n,e){const t=Math.max(0,Math.min(1,e)),i=n.findIndex(o=>o.open>=t);if(i<=0)return n[0];const s=n[i-1],r=n[i],a=(t-s.open)/(r.open-s.open);return{open:t,offset:s.offset.map((o,l)=>o+(r.offset[l]-o)*a),rotationX:s.rotationX+(r.rotationX-s.rotationX)*a}}const Ot=(n,e=!1,t=je.Ambiguous)=>({ok:!1,message:n,clearTarget:e,reason:t});function Eb(n){if(/^\d+(\.\d+)?$/.test(n))return Number(n);if(n==="一百"||n==="百")return 100;const e={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};if(n.includes("十")){const[t,i]=n.split("十");return(t?e[t]:1)*10+(i?e[i]:0)}return e[n]??NaN}function Tb(n){let e=n.normalize("NFKC").replace(/[\s，。！？、,.!?]/g,"").replace(/驾驶员|驾驶位/g,"主驾");if(!e)return Ot("没有听清，请重新说一次。");if(e.length>120)return Ot("请一次说一条车窗指令。");if(e=e.replace(/^(请|麻烦|帮我|把)+/,"").replace(/(?:吧|一下|谢谢)+$/,""),/^取消(?:待执行(?:的)?动作|操作|指令|对话)?$/.test(e))return{ok:!0,targets:[],operation:null,cancel:!0};if(/不|别|取消|能否|能不能|是否|吗|还是|或者|然后/.test(e))return Ot("请明确说出一条车窗指令，或单独说“取消”。");let t=[],i;const s=/副驾(?:座位)?(?:后面|后边|后方|后排)/.test(e),r=/主驾(?:座位)?(?:后面|后边|后方|后排)/.test(e),a=/所有(?:的)?(?:车)?窗|全部(?:的)?(?:车)?窗|四(?:个|扇)?(?:车)?窗/.test(e);if(a&&/主驾|副驾|左|右|前|后/.test(e))return Ot("目标位置有冲突，请明确要操作哪些车窗。",!0);if(a)t=[...jt];else{s&&t.push("RR"),r&&t.push("RL");const f=e.replace(/副驾(?:座位)?(?:后面|后边|后方|后排)/g,"").replace(/主驾(?:座位)?(?:后面|后边|后方|后排)/g,"");/左前|前左|主驾/.test(f)&&t.push("FL"),/右前|前右|副驾/.test(f)&&t.push("FR"),/左后|后左/.test(f)&&t.push("RL"),/右后|后右/.test(f)&&t.push("RR"),/前(?:排)?(?:车)?窗/.test(f)&&!/左|右|主驾|副驾/.test(f)&&t.push("FL","FR"),/后(?:排)?(?:车)?窗/.test(f)&&!/左|右|主驾|副驾/.test(f)&&t.push("RL","RR");const d=/两个|两扇|两侧|都|所有|全部/.test(f);if(/左(?:(?:侧|边)?(?:的)?(?:两个|两扇)?(?:车窗|窗户|窗))/.test(f)&&(d?t.push("FL","RL"):i=["FL","RL"]),/右(?:(?:侧|边)?(?:的)?(?:两个|两扇)?(?:车窗|窗户|窗))/.test(f)){if(i)return Ot("目标位置有冲突，请明确车窗位置。",!0);d?t.push("FR","RR"):i=["FR","RR"]}if(t=[...new Set(t)],i&&t.length&&t.some(g=>!i.includes(g))||t.length>1&&!/两个|两扇|两侧|前窗|后窗|前排|后排|左侧|右侧|左边|右边|和|及/.test(e))return Ot("目标位置有冲突，请明确车窗位置。",!0)}const o=/关|升/.test(e),l=/开|降/.test(e);if(o&&l)return Ot("同时听到了打开和关闭，请只说一个动作。");if(!o&&!l){const f=e.replace(/^(是|就|那个|操作|选)/,"");return/^(?:左|右)(?:侧|边)?(?:的)?(?:车窗|窗户|窗)?$/.test(f)?{ok:!0,targets:[],operation:null,candidates:f.startsWith("左")?["FL","RL"]:["FR","RR"]}:/^(?:前|后)(?:面|排)?(?:的)?(?:车窗|窗户|窗)?$/.test(f)?{ok:!0,targets:[],operation:null,candidates:f.startsWith("前")?["FL","FR"]:["RL","RR"]}:t.length&&/^(?:左前|前左|右前|前右|左后|后左|右后|后右|主驾|副驾|左|右)(?:的)?(?:车窗|窗户|窗)?$/.test(f)?{ok:!0,targets:t,operation:null}:Ot("没有听清动作，请说打开、关闭或开到一半。",/左|右|主驾|副驾|前|后/.test(e)&&!t.length)}if(/再|一点/.test(e)){const f=e.replace(/(?:左前|前左|右前|前右|左后|后左|右后|后右|主驾|副驾|左|右)?(?:的)?(?:车窗|窗户|窗)/g,"").replace(/^(?:左前|右前|左后|右后|主驾|副驾)/,"");return/^(?:再)?(?:开|打开|降|降下|关|关闭|升|升起)(?:一点)$/.test(f)?{ok:!0,targets:t,candidates:i,unresolvedTarget:!t.length&&/左|右|前|后|主驾|副驾/.test(e),operation:{kind:"relative",delta:o?-.1:.1}}:Ot("相对调整请说“再开一点”或“再关一点”。")}const c=[...e.matchAll(/百分之([零一二两三四五六七八九十百\d.]+)|([\d.]+)%/g)];if(c.length>1)return Ot("出现多个开度，请一次指定一个目标开度。");const u=/一半|半开|开(?:到)?半/.test(e);if(o&&(u||c.length))return Ot("关闭幅度有歧义，请改说“开到50%”或“全部关闭”。");if(u&&c.length)return Ot("开度有冲突，请只指定一个目标开度。");const h=o?0:c.length?Eb(c[0][1]??c[0][2])/100:u?.5:1;return!Number.isFinite(h)||h<0||h>1?Ot("开度应在0%到100%之间。",!1,je.InvalidMagnitude):!c.length&&!u&&/[\d零一二三四五六七八九十百半]/.test(e.replace(/四(?:个|扇)?(?:车)?窗|两个|两扇/g,""))||/成|三分|四分|多少|一些/.test(e)?Ot("请用一半或明确的百分比描述开度。"):!t.length&&!/窗|主驾|副驾/.test(e)&&!/^(?:打开|开|关上|关闭|关|升上|升起|降下)(?:到)?(?:一半|半|百分之[零一二两三四五六七八九十百\d.]+|[\d.]+%)?$/.test(e)?Ot("没有听清车窗指令，请重新说一次。"):{ok:!0,targets:t,candidates:i,unresolvedTarget:!t.length&&/左|右|前|后|主驾|副驾/.test(e),operation:{kind:"absolute",value:h}}}function gr(n,e,t,i){return{id:crypto.randomUUID(),source:n,targets:e,openness:t,text:i}}function $r(n){const e=Mu(n),t=So(Mo(n));if(t.length>1&&e===je.ModelFallback){const r=t.map(a=>$r(a));return r.every(a=>a.ok&&!a.cancel)?{ok:!0,targets:[],operation:null,items:r.map(a=>{if(!a.ok)throw new Error;return{targets:a.targets,operation:a.operation,candidates:a.candidates}}),reason:je.Matched}:r.some(a=>!a.ok&&a.reason!==je.ModelFallback)?{...Ot("部分指令尚不明确，请重新说明整句。",!0),reason:je.Ambiguous}:{...Ot("正在理解复合指令。",!1,je.ModelFallback),reason:je.ModelFallback}}if(e!==je.Matched&&e!==je.Cancel)return{ok:!1,message:{empty:"没有听清，请重新说一次。",negated:"识别到否定表达，不执行车窗动作。",non_imperative:"请用明确的肯定指令说明车窗操作。",ambiguous:"动作或幅度有歧义，请明确位置及开度。",invalid_magnitude:"开度应为明确的0%到100%。",unsupported_device:"当前仅支持四个车窗。",unsupported_expression:"当前不支持这条表达，请明确说明车窗和动作。",model_fallback:"规则未覆盖，等待模型理解。"}[e]||"请重新说明车窗指令。",reason:e,clearTarget:e===je.Ambiguous&&/左|右|主驾|副驾/.test(n)};const i=Mo(n).replace(/^(?:请|麻烦|帮我|帮忙|把)+/,"").replace(/^(前排|后排)(?=(?:全部|全|开|关|半开))/,"$1车窗").replace(/全部(?=关|开)/,"全"),s=Tb(i.replace(/^(请|麻烦|帮我)(.*)好吗[？?]?$/,"$1$2"));return{...s,reason:s.reason??(s.ok&&s.cancel?je.Cancel:s.ok&&(s.candidates?.length||s.unresolvedTarget)?je.Ambiguous:je.Matched)}}const Ma=6e4,ha=mb("vehicle",{state:()=>({pendingBatch:null,sliderGroup:null,history:[],windows:Object.fromEntries(jt.map(n=>[n,{current:0,target:0}])),selected:"FL",playing:!1,seconds:5,direction:1,lastCommand:null,commandIds:[],textIds:[],interactionVersion:0,dialogueRevision:0,dialogueContext:null,pendingAction:null}),actions:{beginSlider(){this.sliderGroup=crypto.randomUUID()},endSlider(){this.sliderGroup=null},record(n){const e=this.history.find(t=>t.id===n.id);e?Object.assign(e,n,{started:e.started,text:e.text,targets:Object.keys(n.targets).length?n.targets:e.targets}):this.history.unshift(n),this.history=this.history.slice(0,10)},clearDialogue(){this.dialogueRevision++,this.dialogueContext=null,this.pendingAction=null,this.pendingBatch=null},expireDialogue(n=Date.now()){(this.pendingBatch&&n>=this.pendingBatch.expiresAt||this.dialogueContext&&n>=this.dialogueContext.expiresAt||this.pendingAction&&n>=this.pendingAction.expiresAt)&&this.clearDialogue()},manualInteraction(){this.interactionVersion++,this.clearDialogue()},selectWindow(n){this.manualInteraction(),this.selected=n},submitText(n,e,t=crypto.randomUUID(),i,s=Date.now()){return this.beginInput(e,t,i,s)??this.resolveIntent($r(n),n,e,t,s)},beginInput(n,e,t,i=Date.now()){return t??=this.interactionVersion,this.textIds.includes(e)?{status:"ignored",message:"重复结果已忽略。"}:(this.textIds.push(e),this.textIds.length>500&&this.textIds.shift(),n==="voice"&&t!==this.interactionVersion?{status:"ignored",message:"录音期间发生了手动或文字操作，本次语音结果已失效，请重新录音。"}:(n==="text"&&this.interactionVersion++,this.expireDialogue(i),null))},intentTicket(n,e=Date.now()){const t=this.contextSnapshot();return{interactionVersion:this.interactionVersion,dialogueRevision:this.dialogueRevision,inputAt:e,deadline:Math.min(Date.now()+n,t.active?.expiresAt??1/0,t.pending?.expiresAt??1/0,this.pendingBatch?.expiresAt??1/0),context:t}},contextSnapshot(){return{active:this.dialogueContext?{...this.dialogueContext}:null,pending:this.pendingAction?{operation:{...this.pendingAction.operation},expiresAt:this.pendingAction.expiresAt,candidates:this.pendingAction.candidates?[...this.pendingAction.candidates]:null}:null}},commitIntent(n,e,t,i,s,r=Date.now()){if(this.expireDialogue(r),r>=s.deadline||this.interactionVersion!==s.interactionVersion||this.dialogueRevision!==s.dialogueRevision)return{status:"ignored",message:"理解结果已过期或上下文已改变，请重新说明。"};if(n&&typeof n=="object"&&"items"in n){const u=yb(n,e,s.context,r);return u.type==="unsupported"?(this.clearDialogue(),{status:"clarify",message:"整句包含不支持的操作，请重新说明。"}):this.resolveBatch(u.items.map(({intent:h,clause:f})=>({targets:h.target.ids,operation:h.operation,candidates:h.type==="clarify"?Uh(h,f,{pending:null},r):void 0})),e,t,i,r)}const a=Op(n,e,s.context);if(a.type==="unsupported")return this.clearDialogue(),{status:"clarify",message:"当前不支持这条车窗表达，请重新说明。"};if(a.type==="clarify"&&a.missing!=="target")return this.clearDialogue(),{status:"clarify",message:a.missing==="amount"?"请明确目标开度。":"请明确车窗动作。"};if(this.pendingBatch&&a.target.source==="pending")return this.completePendingBatch({targets:a.target.ids,operation:null,candidates:a.target.candidates.length?a.target.candidates:void 0},r);const o=a.operation??s.context.pending?.operation??null;if(a.type==="clarify"&&!o)return this.clearDialogue(),{status:"clarify",message:"请明确车窗位置及动作。"};const l=a.type==="clarify"?Uh(a,e,s.context,r):a.target.candidates,c=this.resolveIntent({ok:!0,targets:a.target.ids,operation:o,candidates:l.length?l:void 0,unresolvedTarget:a.type==="clarify"},e,t,i,r);return this.pendingAction&&(this.pendingAction.expiresAt=Math.min(this.pendingAction.expiresAt,s.inputAt+Ma,s.context.pending?.expiresAt??1/0)),c},resolveIntent(n,e,t,i,s=Date.now()){if(!n.ok)return n.clearTarget&&this.clearDialogue(),{status:"clarify",message:n.message};if(n.items)return this.resolveBatch(n.items,e,t,i,s);if(this.pendingBatch&&!n.cancel&&(!n.operation||this.pendingBatch.items.some(c=>c.targets.length&&!c.operation)))return this.completePendingBatch(n,s);if(this.pendingBatch=null,this.dialogueRevision++,n.cancel)return this.clearDialogue(),{status:"cancelled",message:"已取消待执行动作，并清空续接上下文。"};n.unresolvedTarget&&this.clearDialogue(),n.candidates&&(this.dialogueContext=null);let r=n.targets,a=n.operation;if(a)this.pendingAction=null,!r.length&&this.dialogueContext&&(r=[this.dialogueContext.target]);else{if(!this.pendingAction)return{status:"clarify",message:"没有待执行的动作，请同时说明车窗和动作。"};if(n.candidates){const c=this.pendingAction.candidates,u=c?c.filter(h=>n.candidates.includes(h)):n.candidates;if(u.length!==1)return u.length&&(this.pendingAction.candidates=u),{status:"clarify",message:this.clarificationPrompt(u.length?u:c)};r=u}if(r.length!==1)return{status:"clarify",message:"请指定一个车窗：左前、右前、左后或右后。"};a=this.pendingAction.operation}if(!r.length)return this.dialogueContext=null,this.pendingAction={operation:a,expiresAt:s+Ma,text:e,candidates:n.candidates},{status:"clarify",message:this.clarificationPrompt(n.candidates)};if(a.kind==="relative"&&r.length!==1)return this.clearDialogue(),{status:"clarify",message:"相对调整请指定一个车窗。"};const o=gr(t,r,a.kind==="absolute"?a.value:0,e);o.id=i,o.operation=a,this.dispatch(o,s);const l=this.lastCommand;return{status:"executed",id:i,message:a.kind==="relative"?`按当前开度 ${Math.round(l.baseCurrent*100)}% 调整至 ${Math.round(l.openness*100)}%`:"指令已接受"}},prepareBatch(n){return vb(n)},resolveBatch(n,e,t,i,s=Date.now(),r=s+Ma){let a;try{a=this.prepareBatch(n)}catch(o){return this.clearDialogue(),{status:"clarify",message:o instanceof Error?o.message:"整批校验失败。"}}if(!a.ready){this.clearDialogue(),this.pendingBatch={id:i,items:a.items,text:e,source:t,expiresAt:r};const o=a.items[a.missingIndex];this.pendingAction=o.operation?{operation:o.operation,text:e,expiresAt:r,candidates:o.candidates}:null;const l=`第${a.missingIndex+1}项：`+(o.targets.length?"请明确动作和幅度。":this.clarificationPrompt(o.candidates))+" 整批暂未执行。";return this.record({id:i,source:t,text:e,started:s,targets:{},message:l}),{status:"clarify",id:i,message:l}}return this.commitBatch(a,{id:i,source:t,text:e},s),{status:"executed",id:i,message:"整批指令已接受"}},completePendingBatch(n,e=Date.now()){const t=this.pendingBatch;if(!t||e>=t.expiresAt)return this.clearDialogue(),{status:"clarify",message:"待执行批次已过期，请重新说明。"};const i=t.items.map(a=>({...a,targets:[...a.targets],candidates:a.candidates?[...a.candidates]:void 0})),s=i.find(a=>!a.targets.length||!a.operation),r=n.targets.length?n.targets:n.candidates;if(r){const a=s.candidates?s.candidates.filter(o=>r.includes(o)):r;if(!a.length)return{status:"clarify",id:t.id,message:"补充的位置与待执行范围不符，整批未执行。"};a.length===1?s.targets=[a[0]]:s.candidates=[...a]}return!s.operation&&n.operation&&(s.operation=n.operation),this.resolveBatch(i,t.text,t.source,t.id,e,t.expiresAt)},clarificationPrompt(n){const e=n?.length===2&&n.every(t=>t.endsWith("R"))?"右":n?.length===2&&n.every(t=>t.endsWith("L"))?"左":null;return e?`是${e}前窗还是${e}后窗？待执行动作已保留，请补充前后位置，或说“取消”。`:"要操作哪个车窗？动作暂存60秒，请回答左前、右前、左后或右后，或说“取消”。"},dispatch(n,e=Date.now()){return this.commitBatch(this.prepareBatch([{targets:n.targets,operation:n.operation??{kind:"absolute",value:n.openness}}]),n,e)},commitBatch(n,e,t=Date.now()){if(this.commandIds.includes(e.id))return!1;const i=this.prepareBatch(n.items);if(!i.ready)throw new Error("批次尚未完整，不能执行。");const s=Object.fromEntries(jt.map(h=>[h,this.windows[h].current])),r=i.items.flatMap((h,f)=>h.targets.map(d=>{const g=h.operation,_=g.kind==="absolute"?g.value:Math.max(0,Math.min(1,s[d]+g.delta));return{id:d,value:_,itemId:`${e.id}:${f}`,baseCurrent:g.kind==="relative"?s[d]:void 0}})),a=r.map(h=>h.id),o=["button","slider","playback"].includes(e.source);o&&this.manualInteraction(),this.commandIds.push(e.id),this.commandIds.length>500&&this.commandIds.shift(),this.dialogueRevision++,this.playing=!1,this.selected=a[0];for(const h of this.history)for(const f of a){const d=h.targets[f];d?.status==="moving"&&(d.status="replaced",d.ended=t)}const l=e.source==="slider"&&this.sliderGroup?this.sliderGroup:e.id,c=this.history.find(h=>h.id===l);this.record({id:l,commandIds:[...c?.commandIds??[],e.id],source:e.source,text:e.text||"手动车窗控制",started:t,targets:Object.fromEntries(r.map(h=>[h.id,{itemId:h.itemId,value:h.value,status:Math.abs(s[h.id]-h.value)<1e-5?"done":"moving",...Math.abs(s[h.id]-h.value)<1e-5?{ended:t}:{}}]))});const u={...this.windows};for(const h of r)u[h.id]={...this.windows[h.id],target:h.value};return this.windows=u,this.lastCommand={...e,targets:a,openness:r[0].value,operation:i.items.length===1?i.items[0].operation:void 0,baseCurrent:r[0].baseCurrent,status:r.every(h=>Math.abs(s[h.id]-h.value)<1e-5)?"done":"moving"},this.pendingAction=null,this.pendingBatch=null,this.dialogueContext=!o&&a.length===1?{target:a[0],expiresAt:t+Ma}:null,!0},setWindow(n,e,t="button"){this.dispatch(gr(t,[n],e))},setAll(n){this.dispatch(gr("button",[...jt],n))},togglePlayback(){if(this.playing){for(const n of this.history)for(const e of Object.values(n.targets))e.status==="moving"&&(e.status="paused",e.ended=Date.now());this.manualInteraction(),this.playing=!1;for(const n of jt)this.windows[n].target=this.windows[n].current;this.lastCommand?.status==="moving"&&(this.lastCommand.status="interrupted");return}this.direction=jt.every(n=>this.windows[n].current>.99)?-1:1,this.dispatch(gr("playback",[...jt],this.direction>0?1:0)),this.playing=!0},tick(n){this.expireDialogue();for(const e of jt){const t=this.windows[e],i=t.target-t.current;Math.abs(i)>1e-8&&(t.current+=Math.sign(i)*Math.min(Math.abs(i),n/this.seconds))}for(const e of this.history)for(const t of jt){const i=e.targets[t];i?.status==="moving"&&Math.abs(this.windows[t].current-i.value)<1e-5&&(i.status="done",i.ended=Date.now())}this.lastCommand?.status==="moving"&&this.lastCommand.targets.every(e=>Math.abs(this.windows[e].current-this.windows[e].target)<1e-5)&&(this.lastCommand.status="done"),this.playing&&jt.every(e=>Math.abs(this.windows[e].target-this.windows[e].current)<1e-5)&&(this.direction*=-1,this.dispatch(gr("playback",[...jt],this.direction>0?1:0)),this.playing=!0)}}}),Ab=["disabled"],wb={class:"presets"},Rb={class:"window-list"},Cb=["onClick"],Pb=["aria-label","value","onInput"],Db={class:"window-actions"},Lb=["onClick"],Ib=["onClick"],Nb=["onClick"],Ub=ca({__name:"WindowControls",props:{ready:{type:Boolean}},setup(n){const e=ha();return(t,i)=>(lt(),ft("section",null,[i[9]||(i[9]=ce("h2",null,"车窗控制",-1)),i[10]||(i[10]=ce("p",null,"左右以车辆自身为准 · 0%关闭，100%打开",-1)),ce("fieldset",{disabled:!n.ready},[i[8]||(i[8]=ce("legend",{class:"sr-only"},"四窗控制",-1)),ce("div",wb,[ce("button",{onClick:i[0]||(i[0]=s=>Ue(e).setAll(0))},"全部关闭"),ce("button",{onClick:i[1]||(i[1]=s=>Ue(e).setAll(.5))},"全部半开"),ce("button",{onClick:i[2]||(i[2]=s=>Ue(e).setAll(1))},"全部打开")]),ce("div",Rb,[(lt(!0),ft(qt,null,to(Ue(jt),s=>(lt(),ft("article",{key:s,class:oa(["window-card",{selected:Ue(e).selected===s}])},[ce("button",{class:"window-heading",onClick:r=>Ue(e).selectWindow(s)},[ce("span",null,[ce("small",null,Qe(s),1),ei(Qe(Ue(ti)[s].label),1)]),ce("strong",null,[ei(Qe(Math.round(Ue(e).windows[s].current*100)),1),i[7]||(i[7]=ce("em",null,"%",-1))])],8,Cb),ce("input",{onPointerdown:i[3]||(i[3]=r=>Ue(e).beginSlider()),onChange:i[4]||(i[4]=r=>Ue(e).endSlider()),onBlur:i[5]||(i[5]=r=>Ue(e).endSlider()),onPointercancel:i[6]||(i[6]=r=>Ue(e).endSlider()),type:"range",min:"0",max:"100",step:"1","aria-label":Ue(ti)[s].label+"开度",value:Ue(e).windows[s].target*100,onInput:r=>Ue(e).setWindow(s,Number(r.target.value)/100,"slider")},null,40,Pb),ce("div",Db,[ce("button",{onClick:r=>Ue(e).setWindow(s,0)},"全关",8,Lb),ce("button",{onClick:r=>Ue(e).setWindow(s,.5)},"半开",8,Ib),ce("button",{onClick:r=>Ue(e).setWindow(s,1)},"全开",8,Nb),ce("span",null,"目标 "+Qe(Math.round(Ue(e).windows[s].target*100))+"%",1)])],2))),128))])],8,Ab)]))}}),Fb="https://1257253028-ejvbd6nvzl.ap-guangzhou.tencentscf.com/api",kp=Fb.trim(),Bi=!kp,Hr=!1,Bp=n=>"/AISpeech-demo/"+n.replace(/^\/+/,""),Ob=["value"],kb={class:"playback"},Bb={key:0},Hb=["href"],zb={key:2,class:"diagnostic-note"},Vb={class:"node"},Gb=ca({__name:"DemoTools",props:{baseline:{type:Boolean}},emits:["inspect"],setup(n,{emit:e}){const t=new URLSearchParams(location.search).get("quality")||"auto";function i(a){const o=new URL(location.href),l=a.target.value;l==="auto"?o.searchParams.delete("quality"):o.searchParams.set("quality",l),location.href=o.href}const s=ha(),r=e;return(a,o)=>(lt(),ft("details",null,[o[12]||(o[12]=ce("summary",null,"演示与调试",-1)),ce("label",null,[o[4]||(o[4]=ei("画质（切换后重新加载）",-1)),ce("select",{value:Ue(t),onChange:i},[...o[3]||(o[3]=[ce("option",{value:"auto"},"自动",-1),ce("option",{value:"high"},"高清",-1),ce("option",{value:"balanced"},"均衡",-1),ce("option",{value:"low"},"流畅",-1)])],40,Ob)]),o[13]||(o[13]=ei()),ce("div",kb,[ce("div",null,[o[7]||(o[7]=ce("strong",null,"连续检查",-1)),ce("label",null,[o[6]||(o[6]=ei("单程 ",-1)),Yd(ce("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>Ue(s).seconds=l),"aria-label":"单程时长"},[...o[5]||(o[5]=[ce("option",{value:2},"2 秒",-1),ce("option",{value:5},"5 秒",-1),ce("option",{value:10},"10 秒",-1)])],512),[[eb,Ue(s).seconds,void 0,{number:!0}]])])]),ce("button",{class:"primary",onClick:o[1]||(o[1]=l=>Ue(s).togglePlayback())},Qe(Ue(s).playing?"Ⅱ 暂停在当前位置":"▷ 循环升降四窗"),1)]),Ue(Hr)?(lt(),ft("p",Bb,[ce("a",{href:n.baseline?"./":"?baseline=1"},Qe(n.baseline?"返回修正轨迹":"查看旧轨迹对照"),9,Hb)])):zt("",!0),Ue(Hr)?(lt(),ft("button",{key:1,class:"mesh-check",onClick:o[2]||(o[2]=l=>{Ue(s).setAll(1),r("inspect")})},"前窗网格检查（全开）")):zt("",!0),Ue(Hr)?(lt(),ft("p",zb,"网格视图：青色为主玻璃，线框为内饰板；旧轨迹对照中的红点为实际三角面交点。")):zt("",!0),ce("details",null,[o[8]||(o[8]=ce("summary",null,"模型与运动说明",-1)),o[9]||(o[9]=ce("p",null,"V8 Executive 0.1 · GTV Lab。保留原始 FBX；发布版GLB已包含门腔修正，未减面。玻璃透明度固定。",-1)),o[10]||(o[10]=ce("p",null,"前窗：57 cm / 12°；后窗：55 cm / 18°。前内饰板背面局部让位，上沿开槽并补齐内侧门腰板。四窗各 101 个开度对门皮、内饰板和新增板件未检出三角面相交；不代表所有零件的连续碰撞证明。",-1)),ce("p",Vb,"当前节点："+Qe(Ue(ti)[Ue(s).selected].node),1),o[11]||(o[11]=ce("p",null,"运动配置：src/config/v8-windows.ts",-1))])]))}}),Wb={key:0},jb={class:"history-list"},Xb={key:0},qb={key:0},Kb={key:0},Yb={key:0},$b=ca({__name:"OperationHistory",setup(n){const e=ha(),t={moving:"正在执行",done:"已完成",replaced:"已被替换",paused:"已暂停"},i={voice:"语音",text:"文字",button:"按钮",slider:"滑块",playback:"演示"};return(s,r)=>(lt(),ft("section",null,[r[1]||(r[1]=ce("h2",null,"最近操作",-1)),Ue(e).history.length?zt("",!0):(lt(),ft("p",Wb,"试着说“副驾车窗开一半”")),ce("div",jb,[(lt(!0),ft(qt,null,to(Ue(e).history,a=>(lt(),ft("article",{class:"history-item",key:a.id},[ce("small",null,Qe(i[a.source])+" · "+Qe(new Date(a.started).toLocaleTimeString()),1),ce("p",null,Qe(a.text),1),(lt(!0),ft(qt,null,to(a.targets,(o,l)=>(lt(),ft("div",{class:"history-target",key:l},Qe(Ue(ti)[l].label)+" · "+Qe(Math.round(o.value*100))+"% · "+Qe(t[o.status]),1))),128)),Object.keys(a.targets).length?zt("",!0):(lt(),ft("p",Xb,Qe(a.message),1)),ce("details",null,[r[0]||(r[0]=ce("summary",null,"操作详情",-1)),ce("p",null,"指令 "+Qe(a.id),1),a.commandIds&&a.commandIds.length>1?(lt(),ft("p",qb,"连续调节 "+Qe(a.commandIds.length)+" 次",1)):zt("",!0),a.source==="voice"||a.source==="text"?(lt(),ft(qt,{key:1},[ce("p",null,[ei(Qe(a.route),1),a.model?(lt(),ft("span",Kb," · "+Qe(a.model),1)):zt("",!0)]),a.elapsedMs!==void 0?(lt(),ft("p",Yb,"理解耗时 "+Qe(a.elapsedMs)+" ms",1)):zt("",!0)],64)):zt("",!0),(lt(!0),ft(qt,null,to(a.targets,(o,l)=>(lt(),ft("p",{key:l},Qe(Ue(ti)[l].label)+"："+Qe(o.ended?((o.ended-a.started)/1e3).toFixed(1)+" 秒":"—"),1))),128))])]))),128))])]))}});class Jb{constructor(e,t,i=3500,s=()=>{}){this.store=e,this.transport=t,this.timeout=i,this.onState=s}store;transport;timeout;onState;generation=0;queue=[];running=null;abort=null;waiting=!1;disposed=!1;submitted=new Set;isBusy(){return this.running!==null}stateChanged(){this.waiting&&this.invalidate("上下文已改变，已丢弃等待中的理解结果。")}invalidate(e="请求已失效，请重新说明。"){this.generation++,this.waiting=!1,this.abort?.abort(),this.abort=null;const t=[...this.running?[this.running]:[],...this.queue];this.running=null,this.queue=[];for(const i of t)i.resolve({status:"ignored",message:e});this.onState(e)}submit(e){if(this.disposed||this.submitted.has(e.id))return Promise.resolve({status:"ignored",message:"重复或已关闭的输入已忽略。"});if(this.submitted.add(e.id),this.submitted.size>500&&this.submitted.delete(this.submitted.values().next().value),e.source==="voice"&&e.version!==this.store.interactionVersion)return Promise.resolve({status:"ignored",message:"录音期间发生了手动或文字操作，请重新录音。"});const t=$r(e.text);return(e.source==="text"||t.ok&&t.cancel)&&this.invalidate(t.ok&&t.cancel?"已取消等待中的模型理解。":"已由文字输入替换。"),new Promise(i=>{this.queue.push({input:{...e,inputAt:e.inputAt??Date.now()},generation:this.generation,resolve:i}),this.pump()})}async pump(){if(this.running||this.disposed)return;const e=this.queue.shift();if(!e)return;this.running=e;const{input:t}=e;let i,s;try{const r=this.store.beginInput(t.source,t.id,t.version);if(r){e.resolve(r);return}const a=$r(t.text);if(a.reason!==je.ModelFallback){this.onState(`规则处理：${a.reason}`),e.resolve(this.store.resolveIntent(a,t.text,t.source,t.id));return}s=this.store.intentTicket(this.timeout,t.inputAt);const o=new AbortController;this.abort=o,this.waiting=!0,this.onState("模型理解中…");const l={status:"ignored",message:"理解超时或上下文过期，请重新说明。"},c=Math.max(0,s.deadline-Date.now()),u=new Promise((d,g)=>{i=setTimeout(()=>{o.abort(),g(new Error(l.message))},c)}),h=await Promise.race([this.transport({requestId:t.id,text:t.text,context:s.context},o.signal),u]);if(e.generation!==this.generation||this.disposed)return;this.waiting=!1;const f=this.store.commitIntent(h,t.text,t.source,t.id,s);f.status==="ignored"&&this.store.interactionVersion===s.interactionVersion&&this.store.dialogueRevision===s.dialogueRevision&&this.store.clearDialogue(),e.resolve(f),this.onState(f.status==="ignored"?"理解结果已失效":"模型结果已校验")}catch(r){if(e.generation===this.generation){this.waiting=!1;const a=s&&(this.store.interactionVersion!==s.interactionVersion||this.store.dialogueRevision!==s.dialogueRevision);a||this.store.clearDialogue(),e.resolve({status:a?"ignored":"clarify",message:a?"理解结果已失效，请重新说明。":r instanceof Error?r.message:"理解失败，请重新说明。"}),this.onState("理解未执行")}}finally{clearTimeout(i),this.running===e&&(this.running=null,this.waiting=!1,this.abort=null,this.pump())}}dispose(){this.disposed=!0,this.invalidate()}}const Zb=(n=()=>{},e="/api/intent")=>async(t,i)=>{const s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:i});let r;try{r=await s.json()}catch{throw new Error("模型服务暂时不可用，免费服务可能正在唤醒，请稍后重试。")}if(!s.ok)throw new Error(r.message||"模型理解服务不可用，请使用明确指令。");if(r.meta&&n(t.requestId,r.meta),r.requestId!==t.requestId)throw new Error("理解结果与当前请求不匹配。");return r.intent};class Qb{version=0;session=null;sentences=new Map;lastFinal=-1;begin(e){this.version=e,this.session=null,this.sentences.clear(),this.lastFinal=-1}bind(e){this.session=e}observe(e){return!this.session||e.session!==this.session||!Number.isInteger(e.index)||e.index<0?null:(this.sentences.has(e.index)||this.sentences.set(e.index,this.version),this.sentences.get(e.index))}final(e){const t=this.observe(e);return t===null||e.index<=this.lastFinal?null:(this.lastFinal=e.index,t)}}class ex{seen=new Set;accept(e,t){if(t.type!=="final"||!Number.isInteger(t.index)||t.index<0)return null;const i=`${e}:${t.index}`;return this.seen.has(i)?null:(this.seen.add(i),{text:t.text??"",id:i})}}function tx(n,e={}){let t,i,s,r,a,o=!1,l=!1,c=!1,u=0,h=0,f;function d(){c=!1,s?.getTracks().forEach(M=>M.stop()),s=void 0,r?.disconnect(),r=void 0,i?.close(),i=void 0}function g(){u++,clearTimeout(a),f?.abort(),f=void 0,d();const M=t;t=void 0,M?.close()}function _(M){o||(g(),n({type:"error",message:M}))}async function m(){g();const M=u;l=!1,h=0;try{if(n({type:"connecting"}),!navigator.mediaDevices?.getUserMedia)throw new Error("当前环境无法录音，请使用 localhost 或可信 HTTPS。");const S=new AudioContext;i=S;const x=S.resume();x.catch(()=>{}),a=setTimeout(()=>_("录音启动超时，请检查麦克风权限、输入设备和语音后端后重试。"),e.startupTimeoutMs??15e3),f=new AbortController,n({type:"progress",message:(e.startupTimeoutMs??15e3)>15e3?"正在连接语音服务，免费服务首次唤醒可能需要约1分钟…":"正在检查语音服务…"});let R;for(;!R;){try{const v=await fetch(e.healthUrl??"/api/health",{signal:f.signal});if([401,403,429].includes(v.status))throw new Error("语音服务拒绝连接或请求过于频繁，请稍后重试。");if(!v.ok)throw new TypeError("服务尚未就绪");const C=await v.json();if(!C||typeof C.asrConfigured!="boolean")throw new TypeError("服务尚未就绪");R=C}catch(v){if(o||M!==u)return;if(!(e.startupTimeoutMs&&e.startupTimeoutMs>15e3)||v instanceof Error&&!(v instanceof TypeError||v instanceof SyntaxError))throw new Error(v instanceof Error?v.message:"无法连接语音后端，请重试。");await new Promise(C=>{const B=f.signal,K=()=>{clearTimeout(se),B.removeEventListener("abort",K),C()},se=setTimeout(K,2e3);B.addEventListener("abort",K,{once:!0}),B.aborted&&K()})}if(o||M!==u)return}if(!R.asrConfigured)throw new Error("语音服务尚未配置，请联系演示维护者。");if(o||M!==u)return;n({type:"progress",message:"正在请求麦克风权限，请留意浏览器的授权提示…"});const D=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0},video:!1});if(o||M!==u){D.getTracks().forEach(v=>v.stop());return}if(s=D,s.getAudioTracks().forEach(v=>{v.onended=()=>{M===u&&!l&&_("麦克风已断开，请检查输入设备后重新录音。")}}),n({type:"progress",message:"正在启动音频采集…"}),await x,o||M!==u||(await S.audioWorklet.addModule(e.workletUrl??"/pcm-worklet.js"),o||M!==u))return;r=new AudioWorkletNode(S,"pcm-recorder"),r.onprocessorerror=()=>{M===u&&_("音频采集处理失败，请刷新页面后重试。")};const P=S.createMediaStreamSource(s),L=S.createGain();L.gain.value=0,P.connect(r).connect(L).connect(S.destination);const E=new WebSocket(e.asrUrl??`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/api/asr`);t=E,n({type:"progress",message:"正在连接语音识别…"}),r.port.onmessage=v=>{if(M===u){if(v.data.type==="level"&&n({type:"level",level:v.data.level,sentBytes:h}),v.data.type==="pcm"&&c&&E.readyState===WebSocket.OPEN){if(E.bufferedAmount>128e3)return _("网络拥堵，已停止录音，请重试。");E.send(v.data.data),h+=v.data.data.byteLength}v.data.type==="stopped"&&(c=!1,d(),E.readyState===WebSocket.OPEN&&E.send(JSON.stringify({type:"end"})))}},E.onmessage=v=>{if(o||M!==u)return;let C;try{C=JSON.parse(v.data)}catch{return _("无效识别结果。")}if(C.type==="ready"&&(clearTimeout(a),c=!0,a=setTimeout(p,6e4)),C.type==="error"){_(C.message||"语音识别失败。");return}C.type==="done"&&(clearTimeout(a),d()),n(C)},E.onerror=()=>{M===u&&_("语音后端连接失败，请检查服务是否运行。")},E.onclose=()=>{M===u&&!o&&(clearTimeout(a),d(),n({type:"closed"}))}}catch(S){M===u&&_(S instanceof DOMException&&S.name==="NotAllowedError"?"麦克风权限未开启，请允许此页面使用麦克风后重试。":S instanceof Error?S.message:"麦克风启动失败。")}}function p(){if(!l){if(l=!0,clearTimeout(a),!c){g(),n({type:"closed"});return}n({type:"finishing"}),r?.port.postMessage("stop"),a=setTimeout(()=>_("等待最终识别结果超时，请重试。"),1e4)}}return{start:m,stop:p,dispose(){o=!0,g()}}}function nx(n,e){const t=new URL(n?.trim()||"/api",e);if(!["http:","https:"].includes(t.protocol)||t.username||t.password||t.search||t.hash)throw new Error("后端地址必须是不含凭据、查询参数的HTTP(S)地址。");if(new URL(e).protocol==="https:"&&t.protocol!=="https:")throw new Error("HTTPS页面必须连接HTTPS后端。");t.pathname=t.pathname.replace(/\/+$/,"");const i=t.href.replace(/\/$/,""),s=new URL(i);return s.protocol=t.protocol==="https:"?"wss:":"ws:",{health:i+"/health",intent:i+"/intent",asr:s.href.replace(/\/$/,"")+"/asr",remote:t.origin!==new URL(e).origin}}const ix={class:"voice-panel","aria-label":"语音与文字控车"},sx=["disabled"],rx={role:"status"},ax={key:0,class:"audio-meter"},ox=["value"],lx={key:0},cx={key:1},ux={key:2},hx=["disabled"],fx={class:"text-command"},dx=["disabled"],px={key:4,class:"voice-result","aria-live":"polite"},mx={key:0},gx=ca({__name:"VoiceControl",props:{ready:{type:Boolean}},setup(n){const e=nx(kp,location.origin),t=n,i=ha(),s=Wt(""),r=Wt(""),a=Wt("点击麦克风开始，结束时再次点击。"),o=Wt("idle"),l=new ex,c=xi(()=>["connecting","ready","finishing"].includes(o.value)),u=Wt(0),h=Wt(0),f=Wt(""),d=Wt(""),g=Wt(""),_=new Qb;let m="",p=0;const M=Wt("规则优先"),S=Wt(!1);let x=0;const R=12e3,D=new Map,P=Bi?async()=>{throw new Error("在线预览暂未开放 AI 理解，请使用明确指令，例如“右后窗开一半”。")}:Zb((k,N)=>D.set(k,N),e.intent),L=new Jb(i,P,Number.isFinite(R)?Math.max(100,Math.min(3e4,R)):12e3,k=>{M.value=k,S.value=L.isBusy()});ms(()=>[i.interactionVersion,i.dialogueRevision],()=>L.stateChanged(),{flush:"sync"});async function E(k,N,le=crypto.randomUUID(),ve){const we=++x;r.value=k,d.value="",g.value="",f.value="",S.value=!0;const Fe=Date.now(),Je=await L.submit({text:k,source:N,id:le,version:ve});i.record({id:Je.id||le,source:N,text:k,started:Fe,targets:{},message:Je.message,route:$r(k).reason===je.ModelFallback?Bi?"AI 理解暂未开放":"模型理解":"规则处理",model:D.get(le)?.model,elapsedMs:Date.now()-Fe}),D.delete(le),we===x&&(S.value=L.isBusy(),f.value=Je.id||"",d.value=Je.status==="executed"?"":Je.message,g.value=Je.status==="executed"?Je.message:"")}const v=tx(k=>{if(k.type==="progress"&&(a.value=k.message||"正在连接…"),k.type==="level"&&(u.value=k.level||0,h.value=k.sentBytes||0),k.type==="connecting"&&(u.value=0,h.value=0,L.invalidate("新录音已开始，旧理解请求失效。"),x++,_.begin(i.interactionVersion),o.value="connecting",a.value="正在连接并请求麦克风…",r.value="",d.value="",f.value="",p=0),k.type==="ready"&&(m=k.session,_.bind(m),o.value="ready",a.value="正在聆听，请说出车窗指令。"),k.type==="sentence_start"&&_.observe(k),k.type==="interim"&&k.session===m&&(_.observe(k),r.value=k.text||""),k.type==="final"&&k.session===m){const N=l.accept(m,k);if(N){const le=_.final(k);le!==null&&(p++,E(N.text,"voice",N.id,le))}}k.type==="finishing"&&(o.value="finishing",a.value="录音已停止，等待最终识别结果…"),k.type==="done"&&(o.value="idle",a.value=p?"本次识别结束。":"没有听清，请靠近麦克风重新说一次。"),k.type==="error"&&(L.invalidate("录音连接中断，请重新说明。"),o.value="error",a.value=k.message?.includes("错误 6001")?"腾讯云ASR当前账号不支持境外后端调用；AI文字控车仍可使用。":k.message||"语音识别失败，请重试。"),k.type==="closed"&&o.value!=="error"&&(o.value="idle")},{healthUrl:e.health,asrUrl:e.asr,workletUrl:Bp("pcm-worklet.js"),startupTimeoutMs:e.remote?9e4:15e3}),C=xi(()=>i.lastCommand?.id===f.value?i.lastCommand:null),B=xi(()=>i.history.find(k=>k.id===f.value)),K=xi(()=>B.value&&Object.entries(B.value.targets).map(([k,N])=>ti[k].label+" → "+Math.round(N.value*100)+"%").join("、")||"—"),se=xi(()=>i.dialogueContext?ti[i.dialogueContext.target].label:"无，请先明确目标"),ne=xi(()=>i.pendingAction?(i.pendingAction.operation.kind==="relative"?`按回复时当前开度${i.pendingAction.operation.delta>0?"增加":"减少"}10个百分点`:`设置为${Math.round(i.pendingAction.operation.value*100)}%`)+"，等待单窗位置":"无"),Q=xi(()=>d.value||(B.value?Object.values(B.value.targets).map(k=>({moving:"正在执行",done:"已完成",replaced:"已被后续操作替换",paused:"已暂停"})[k.status]).filter((k,N,le)=>le.indexOf(k)===N).join(" · "):"")||(C.value?{moving:"指令已接受，车窗运动中",done:"执行完成，已到达目标开度",interrupted:"已暂停"}[C.value.status]:f.value?"已被后续操作替换":"等待有效指令"));return bu(()=>{L.dispose(),v.dispose()}),(k,N)=>(lt(),ft("section",ix,[ce("h3",null,Qe(Ue(Bi)?"交互体验":"语音控车"),1),ce("button",{class:"primary",disabled:Ue(Bi)||!t.ready||o.value==="finishing",onClick:N[0]||(N[0]=le=>c.value?Ue(v).stop():Ue(v).start())},Qe(Ue(Bi)?"语音体验暂未开放":o.value==="ready"?"■ 停止录音":o.value==="connecting"?"取消连接":o.value==="finishing"?"等待最终结果…":"● 点击说话"),9,sx),ce("p",rx,Qe(Ue(Bi)?"在线预览可旋转车模、独立调窗，也可输入文字指令。语音与 AI 理解暂未开放。":a.value),1),o.value==="ready"?(lt(),ft("div",ax,[ce("meter",{min:"0",max:"0.2",value:u.value,"aria-label":"麦克风输入音量"},null,8,ox),ce("span",null,Qe(u.value>.005?"已检测到声音":"输入音量很低，请检查麦克风"),1)])):zt("",!0),ce("details",null,[N[4]||(N[4]=ce("summary",null,"理解详情",-1)),ce("p",null,Qe(M.value),1),c.value?(lt(),ft("p",lx,"已发送音频 "+Qe(Math.round(h.value/1024))+" KB",1)):zt("",!0)]),Ue(i).dialogueContext?(lt(),ft("p",cx,"继续操作："+Qe(se.value)+" · 60秒有效",1)):zt("",!0),Ue(i).pendingAction?(lt(),ft("p",ux,"等待补充位置："+Qe(ne.value),1)):zt("",!0),S.value||Ue(i).pendingAction||Ue(i).pendingBatch||Ue(i).dialogueContext?(lt(),ft("button",{key:3,disabled:!S.value&&!Ue(i).pendingAction&&!Ue(i).pendingBatch&&!Ue(i).dialogueContext,onClick:N[1]||(N[1]=le=>E("取消","text"))},"取消本次对话",8,hx)):zt("",!0),N[11]||(N[11]=ce("p",{class:"voice-example"},"例如：副驾车窗开一半 → 再开一点 → 关上吧。左右按车辆自身方向；只说左／右车窗会追问前后位置；可说“取消”清空待执行动作和续接目标。",-1)),ce("details",null,[N[6]||(N[6]=ce("summary",null,"使用文字输入",-1)),ce("form",{onSubmit:N[3]||(N[3]=io(le=>E(s.value,"text"),["prevent"]))},[N[5]||(N[5]=ce("label",{for:"command-text"},"文字输入",-1)),ce("div",fx,[Yd(ce("input",{id:"command-text","onUpdate:modelValue":N[2]||(N[2]=le=>s.value=le),maxlength:"120",placeholder:"副驾后面的车窗开一半"},null,512),[[Q_,s.value]]),ce("button",{disabled:!t.ready||!s.value.trim()},"执行",8,dx)])],32)]),r.value||d.value?(lt(),ft("dl",px,[N[8]||(N[8]=ce("dt",null,"识别／输入文本",-1)),ce("dd",null,Qe(r.value||"—"),1),N[9]||(N[9]=ce("dt",null,"目标车窗",-1)),ce("dd",null,Qe(K.value),1),N[10]||(N[10]=ce("dt",null,"执行结果",-1)),ce("dd",null,[ei(Qe(Q.value),1),C.value&&g.value?(lt(),ft("span",mx,[N[7]||(N[7]=ce("br",null,null,-1)),ei(Qe(g.value),1)])):zt("",!0)])])):zt("",!0)]))}}),_x=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},bx=_x(gx,[["__scopeId","data-v-2f8adfde"]]);const Eu="180",Xs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xx=0,Bh=1,vx=2,Hp=1,yx=2,bi=3,wi=0,cn=1,Sn=2,ji=0,qs=1,Hh=2,zh=3,Vh=4,Mx=5,us=100,Sx=101,Ex=102,Tx=103,Ax=104,wx=200,Rx=201,Cx=202,Px=203,fc=204,dc=205,Dx=206,Lx=207,Ix=208,Nx=209,Ux=210,Fx=211,Ox=212,kx=213,Bx=214,pc=0,mc=1,gc=2,Qs=3,_c=4,bc=5,xc=6,vc=7,zp=0,Hx=1,zx=2,Xi=0,Vx=1,Gx=2,Wx=3,Vp=4,jx=5,Xx=6,qx=7,Gh="attached",Kx="detached",Gp=300,er=301,tr=302,yc=303,Mc=304,Wo=306,nr=1e3,Vi=1001,Eo=1002,nn=1003,Wp=1004,Rr=1005,gn=1006,ro=1007,Ei=1008,ai=1009,jp=1010,Xp=1011,Jr=1012,Tu=1013,xs=1014,Nn=1015,fa=1016,Au=1017,wu=1018,Zr=1020,qp=35902,Kp=35899,Yp=1021,$p=1022,An=1023,Qr=1026,ea=1027,Ru=1028,Cu=1029,Jp=1030,Pu=1031,Du=1033,ao=33776,oo=33777,lo=33778,co=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,wc=36196,Rc=37492,Cc=37496,Pc=37808,Dc=37809,Lc=37810,Ic=37811,Nc=37812,Uc=37813,Fc=37814,Oc=37815,kc=37816,Bc=37817,Hc=37818,zc=37819,Vc=37820,Gc=37821,Wc=36492,jc=36494,Xc=36495,qc=36283,Kc=36284,Yc=36285,$c=36286,ta=2300,na=2301,dl=2302,Wh=2400,jh=2401,Xh=2402,Yx=2500,$x=0,Zp=1,Jc=2,Jx=3200,Zx=3201,Qp=0,Qx=1,zi="",kt="srgb",an="srgb-linear",To="linear",gt="srgb",As=7680,qh=519,ev=512,tv=513,nv=514,em=515,iv=516,sv=517,rv=518,av=519,Zc=35044,Kh="300 es",$n=2e3,Ao=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const Ks=Math.PI/180,ir=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Lu(n,e){return(n%e+e)%e}function ov(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function lv(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function cv(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function uv(n,e=1){return e-Math.abs(Lu(n,e*2)-e)}function hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pv(n,e){return n+Math.random()*(e-n)}function mv(n){return n*(.5-Math.random())}function gv(n){n!==void 0&&(Yh=n);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _v(n){return n*Ks}function bv(n){return n*ir}function xv(n){return(n&n-1)===0&&n!==0}function vv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mv(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Iu={DEG2RAD:Ks,RAD2DEG:ir,generateUUID:On,clamp:Ze,euclideanModulo:Lu,mapLinear:ov,inverseLerp:lv,lerp:zr,damp:cv,pingpong:uv,smoothstep:hv,smootherstep:fv,randInt:dv,randFloat:pv,randFloatSpread:mv,seededRandom:gv,degToRad:_v,radToDeg:bv,isPowerOfTwo:xv,ceilPowerOfTwo:vv,floorPowerOfTwo:yv,setQuaternionFromProperEuler:Mv,normalize:dt,denormalize:In};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),D=Math.atan2(R,p*M);m=Math.sin(m*D)/R,o=Math.sin(o*D)/R}const x=o*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new F,$h=new Hn;class Ke{constructor(e,t,i,s,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],S=s[4],x=s[7],R=s[2],D=s[5],P=s[8];return r[0]=a*_+o*M+l*R,r[3]=a*m+o*S+l*D,r[6]=a*p+o*x+l*P,r[1]=c*_+u*M+h*R,r[4]=c*m+u*S+h*D,r[7]=c*p+u*x+h*P,r[2]=f*_+d*M+g*R,r[5]=f*m+d*S+g*D,r[8]=f*p+d*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Ke;function tm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sv(){const n=ia("canvas");return n.style.display="block",n}const Jh={};function sa(n){n in Jh||(Jh[n]=!0,console.warn(n))}function Ev(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Zh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tv(){const n={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[an]:{primaries:e,whitePoint:i,transfer:To,toXYZ:Zh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Zh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const it=Tv();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class Av{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=ia("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wv=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Av.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rv=0;const _l=new F;class Ht extends Ms{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Vi,s=Vi,r=gn,a=Ei,o=An,l=ai,c=Ht.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=On(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Gp;Ht.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,R=(p+1)/2,D=(u+f)/4,P=(h+_)/4,L=(g+m)/4;return S>x&&S>R?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=D/i,r=P/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=D/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=L/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cv extends Ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ht(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends Cv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nm extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pv extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Ea.subVectors(this.max,_r),Rs.subVectors(e.a,_r),Cs.subVectors(e.b,_r),Ps.subVectors(e.c,_r),Pi.subVectors(Cs,Rs),Di.subVectors(Ps,Cs),es.subVectors(Rs,Ps);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-es.z,es.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,es.z,0,-es.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-es.y,es.x,0];return!bl(t,Rs,Cs,Ps,Ea)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Rs,Cs,Ps,Ea))?!1:(Ta.crossVectors(Pi,Di),t=[Ta.x,Ta.y,Ta.z],bl(t,Rs,Cs,Ps,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,Sa=new Ci,Rs=new F,Cs=new F,Ps=new F,Pi=new F,Di=new F,es=new F,_r=new F,Ea=new F,Ta=new F,ts=new F;function bl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ts.fromArray(n,r);const o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dv=new Ci,br=new F,xl=new F;class li{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(xl)),this.expandByPoint(br.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new F,vl=new F,Aa=new F,Li=new F,yl=new F,wa=new F,Ml=new F;class lr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(vl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Li.dot(this.direction),l=-Li.dot(Aa),c=Li.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vl).addScaledVector(Aa,f),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){yl.subVectors(t,e),wa.subVectors(i,e),Ml.crossVectors(yl,wa);let a=this.direction.dot(Ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(Li,wa));if(l<0)return null;const c=o*this.direction.dot(yl.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(Ml);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,s,r,a,o,l,c,u,h,f,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lv,e,Iv)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),Ra.crossVectors(fn,Ii),s[0]=Ii.x,s[4]=Ra.x,s[8]=fn.x,s[1]=Ii.y,s[5]=Ra.y,s[9]=fn.y,s[2]=Ii.z,s[6]=Ra.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],S=i[7],x=i[11],R=i[15],D=s[0],P=s[4],L=s[8],E=s[12],v=s[1],C=s[5],B=s[9],K=s[13],se=s[2],ne=s[6],Q=s[10],k=s[14],N=s[3],le=s[7],ve=s[11],we=s[15];return r[0]=a*D+o*v+l*se+c*N,r[4]=a*P+o*C+l*ne+c*le,r[8]=a*L+o*B+l*Q+c*ve,r[12]=a*E+o*K+l*k+c*we,r[1]=u*D+h*v+f*se+d*N,r[5]=u*P+h*C+f*ne+d*le,r[9]=u*L+h*B+f*Q+d*ve,r[13]=u*E+h*K+f*k+d*we,r[2]=g*D+_*v+m*se+p*N,r[6]=g*P+_*C+m*ne+p*le,r[10]=g*L+_*B+m*Q+p*ve,r[14]=g*E+_*K+m*k+p*we,r[3]=M*D+S*v+x*se+R*N,r[7]=M*P+S*C+x*ne+R*le,r[11]=M*L+S*B+x*Q+R*ve,r[15]=M*E+S*K+x*k+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*d-i*l*d)+_*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,S=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,x=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,R=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,D=t*M+i*S+s*x+r*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=M*P,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*P,e[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*d-i*l*d)*P,e[4]=S*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*P,e[8]=x*P,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*P,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*P,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*P,e[12]=R*P,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*P,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*f+t*o*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,M=l*c,S=l*u,x=l*h,R=i.x,D=i.y,P=i.z;return s[0]=(1-(_+p))*R,s[1]=(d+x)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(d-x)*D,s[5]=(1-(f+p))*D,s[6]=(m+M)*D,s[7]=0,s[8]=(g+S)*P,s[9]=(m-M)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=$n,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===$n)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ao)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=$n,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===$n)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ao)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new F,Pn=new Ye,Lv=new F(0,0,0),Iv=new F(1,1,1),Ii=new F,Ra=new F,fn=new F,ef=new Ye,tf=new Hn;class oi{constructor(e=0,t=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const nf=new F,Ls=new Hn,pi=new Ye,Ca=new F,xr=new F,Uv=new F,Fv=new Hn,sf=new F(1,0,0),rf=new F(0,1,0),af=new F(0,0,1),of={type:"added"},Ov={type:"removed"},Is={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Et extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new F,t=new oi,i=new Hn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(xr,Ca,this.up):pi.lookAt(Ca,xr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(pi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ov),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Et.DEFAULT_UP=new F(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new F,mi=new F,El=new F,gi=new F,Ns=new F,Us=new F,lf=new F,Tl=new F,Al=new F,wl=new F,Rl=new ct,Cl=new ct,Pl=new ct;class En{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),mi.subVectors(i,t),El.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(mi),l=Dn.dot(El),c=mi.dot(mi),u=mi.dot(El),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Cl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),mi.subVectors(e,t),Dn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Dn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,i),Us.subVectors(r,i),Tl.subVectors(e,i);const l=Ns.dot(Tl),c=Us.dot(Tl);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,s);const u=Ns.dot(Al),h=Us.dot(Al);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ns,a);wl.subVectors(e,r);const d=Ns.dot(wl),g=Us.dot(wl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Us,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return lf.subVectors(r,s),o=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(lf,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Lu(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Dl(a,r,e+1/3),this.g=Dl(a,r,e),this.b=Dl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=im[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return it.workingToColorSpace(Gt.copy(this),e),Math.round(Ze(Gt.r*255,0,255))*65536+Math.round(Ze(Gt.g*255,0,255))*256+Math.round(Ze(Gt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=kt){it.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Pa);const i=zr(Ni.h,Pa.h,t),s=zr(Ni.s,Pa.s,t),r=zr(Ni.l,Pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ge;Ge.NAMES=im;let kv=0;class ni extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=On(),this.name="",this.type="Material",this.blending=qs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jn extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new F,Da=new ze;let Bv=0;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class sm extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rm extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hv=0;const yn=new Ye,Ll=new Et,Fs=new F,dn=new Ci,vr=new Ci,Ft=new F;class bn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tm(e)?rm:sm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(dn.min,vr.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,vr.max),dn.expandByPoint(Ft)):(dn.expandByPoint(vr.min),dn.expandByPoint(vr.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(e,c),Ft.add(Fs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;const c=new F,u=new F,h=new F,f=new ze,d=new ze,g=new ze,_=new F,m=new F;function p(L,E,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[L].add(_),o[E].add(_),o[v].add(_),l[L].add(m),l[E].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,E=M.length;L<E;++L){const v=M[L],C=v.start,B=v.count;for(let K=C,se=C+B;K<se;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const S=new F,x=new F,R=new F,D=new F;function P(L){R.fromBufferAttribute(s,L),D.copy(R);const E=o[L];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(D,E);const C=x.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,E=M.length;L<E;++L){const v=M[L],C=v.start,B=v.count;for(let K=C,se=C+B;K<se;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new Ye,ns=new lr,La=new li,uf=new F,Ia=new F,Na=new F,Ua=new F,Il=new F,Fa=new F,hf=new F,Oa=new F;class Bt extends Et{constructor(e=new bn,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),a?Fa.addScaledVector(Il,u):Fa.addScaledVector(Il.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(La.containsPoint(ns.origin)===!1&&(ns.intersectSphere(La,uf)===null||ns.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),ns.copy(e.ray).applyMatrix4(cf),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,R=S;x<R;x+=3){const D=o.getX(x),P=o.getX(x+1),L=o.getX(x+2);s=ka(this,p,e,i,c,u,h,D,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=ka(this,a,e,i,c,u,h,M,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,R=S;x<R;x+=3){const D=x,P=x+1,L=x+2;s=ka(this,p,e,i,c,u,h,D,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,x=m+2;s=ka(this,a,e,i,c,u,h,M,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zv(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:n}}function ka(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ia),n.getVertexPosition(l,Na),n.getVertexPosition(c,Ua);const u=zv(n,e,t,i,Ia,Na,Ua,hf);if(u){const h=new F;En.getBarycoord(hf,Ia,Na,Ua,h),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,h,new ze)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,h,new ze)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};En.getNormal(Ia,Na,Ua,f.normal),u.face=f,u.barycoord=h}return u}class da extends bn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function g(_,m,p,M,S,x,R,D,P,L,E){const v=x/P,C=R/L,B=x/2,K=R/2,se=D/2,ne=P+1,Q=L+1;let k=0,N=0;const le=new F;for(let ve=0;ve<Q;ve++){const we=ve*C-K;for(let Fe=0;Fe<ne;Fe++){const Je=Fe*v-B;le[_]=Je*M,le[m]=we*S,le[p]=se,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=D>0?1:-1,u.push(le.x,le.y,le.z),h.push(Fe/P),h.push(1-ve/L),k+=1}}for(let ve=0;ve<L;ve++)for(let we=0;we<P;we++){const Fe=f+we+ne*ve,Je=f+we+ne*(ve+1),ut=f+(we+1)+ne*(ve+1),nt=f+(we+1)+ne*ve;l.push(Fe,Je,nt),l.push(Je,ut,nt),N+=6}o.addGroup(d,N,E),d+=N,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const s in i)e[s]=i[s]}return e}function Vv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function am(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Gv={clone:sr,merge:Zt};var Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class om extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new F,ff=new ze,df=new ze;class en extends om{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,ff,df),t.subVectors(df,ff)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class Xv extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Os,ks,e,t);s.layers=this.layers,this.add(s);const r=new en(Os,ks,e,t);r.layers=this.layers,this.add(r);const a=new en(Os,ks,e,t);a.layers=this.layers,this.add(a);const o=new en(Os,ks,e,t);o.layers=this.layers,this.add(o);const l=new en(Os,ks,e,t);l.layers=this.layers,this.add(l);const c=new en(Os,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lm extends Ht{constructor(e=[],t=er,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new da(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ji});r.uniforms.tEquirect.value=t;const a=new Bt(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=gn),new Xv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Gi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kv={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pf extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new F;class Fu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const mf=new F,gf=new ct,_f=new ct,$v=new F,bf=new Ye,Ba=new F,Ul=new li,xf=new Ye,Fl=new lr;class Jv extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(s),e.ray.intersectsSphere(Ul)!==!1&&(xf.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(xf),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;gf.fromBufferAttribute(s.attributes.skinIndex,e),_f.fromBufferAttribute(s.attributes.skinWeight,e),mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=_f.getComponent(r);if(a!==0){const o=gf.getComponent(r);bf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector($v.copy(mf).applyMatrix4(bf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cm extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class um extends Ht{constructor(e=null,t=1,i=1,s,r,a,o,l,c=nn,u=nn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new Ye,Zv=new Ye;class Ou{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Zv;vf.multiplyMatrices(o,t[r]),vf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ou(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new um(t,e,e,An,Nn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new cm),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Qc extends sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new Ye,yf=new Ye,Ha=[],Mf=new Ci,Qv=new Ye,yr=new Bt,Mr=new li;class e0 extends Bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Mf.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Mr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),yf.multiplyMatrices(i,Bs),yr.matrixWorld=yf,yr.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const l=Ha[a];l.instanceId=r,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new um(new Float32Array(s*this.count),s,this.count,Ru,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ol=new F,t0=new F,n0=new Ke;class Hi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ol.subVectors(i,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||n0.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new li,i0=new ze(.5,.5),za=new F;class ku{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],S=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,d-u,p-g,R-M).normalize(),s[1].setComponents(c+a,d+u,p+g,R+M).normalize(),s[2].setComponents(c+o,d+h,p+_,R+S).normalize(),s[3].setComponents(c-o,d-h,p-_,R-S).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,R-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,R-x).normalize(),t===$n)s[5].setComponents(c+l,d+f,p+m,R+x).normalize();else if(t===Ao)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=i0.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new F,Ro=new F,Sf=new Ye,Sr=new lr,Va=new li,kl=new F,Ef=new F;class Bu extends Et{constructor(e=new bn,t=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wo.distanceTo(Ro);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Sf.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(Sf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),S=Ga(this,e,Sr,l,p,M,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ga(this,e,Sr,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ga(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ga(this,e,Sr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ga(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),Ro.fromBufferAttribute(o,r),t.distanceSqToSegment(wo,Ro,kl,Ef)>i)return;kl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(kl);if(!(c<e.near||c>e.far))return{distance:c,point:Ef.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Tf=new F,Af=new F;class Co extends Bu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Tf.fromBufferAttribute(t,s),Af.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tf.distanceTo(Af);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s0 extends Bu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hm extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wf=new Ye,eu=new lr,Wa=new li,ja=new F;class r0 extends Et{constructor(e=new bn,t=new hm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;wf.copy(s).invert(),eu.copy(e.ray).applyMatrix4(wf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);ja.fromBufferAttribute(h,m),Rf(ja,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)ja.fromBufferAttribute(h,g),Rf(ja,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rf(n,e,t,i,s,r,a){const o=eu.distanceSqToPoint(n);if(o<t){const l=new F;eu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fm extends Ht{constructor(e,t,i=xs,s,r,a,o=nn,l=nn,c,u=Qr,h=1){if(u!==Qr&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hu extends bn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new F,u=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rn(a,3)),this.setAttribute("normal",new rn(o,3)),this.setAttribute("uv",new rn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Xa=new F,qa=new F,Bl=new F,Ka=new En;class a0 extends bn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ks*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Ka;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ka.getNormal(Bl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const S=(M+1)%3,x=h[M],R=h[S],D=Ka[u[M]],P=Ka[u[S]],L=`${x}_${R}`,E=`${R}_${x}`;E in f&&f[E]?(Bl.dot(f[E].normal)<=r&&(d.push(D.x,D.y,D.z),d.push(P.x,P.y,P.z)),f[E]=null):L in f||(f[L]={index0:c[M],index1:c[S],normal:Bl.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Xa.fromBufferAttribute(o,_),qa.fromBufferAttribute(o,m),d.push(Xa.x,Xa.y,Xa.z),d.push(qa.x,qa.y,qa.z)}this.setAttribute("position",new rn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xo extends bn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let S=0;S<c;S++){const x=S*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,x=M+c*(p+1),R=M+1+c*(p+1),D=M+1+c*p;d.push(S,x,D),d.push(x,R,D)}this.setIndex(d),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class qo extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends qo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class o0 extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ya(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function c0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function u0(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Cf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function pm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class pa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class h0 extends pa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=e,o=2*t-i;break;case Xh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=e,l=2*i-t;break;case Xh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+M*a[c+R]+S*a[l+R]+x*a[h+R];return r}}class f0 extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class d0 extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new d0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new f0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new h0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&c0(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=na;class cr extends zn{constructor(e,t,i){super(e,t,i)}}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=ta;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class mm extends zn{constructor(e,t,i,s){super(e,t,i,s)}}mm.prototype.ValueTypeName="color";class rr extends zn{constructor(e,t,i,s){super(e,t,i,s)}}rr.prototype.ValueTypeName="number";class p0 extends pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ar extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new p0(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends zn{constructor(e,t,i){super(e,t,i)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ta;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends zn{constructor(e,t,i,s){super(e,t,i,s)}}or.prototype.ValueTypeName="vector";class m0{constructor(e="",t=-1,i=[],s=Yx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(_0(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(zn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=u0(l);l=Cf(l,1,u),c=Cf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];pm(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const S=f[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}s.push(new rr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(or,d+".position",f,"pos",s),i(ar,d+".quaternion",f,"rot",s),i(or,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function g0(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return mm;case"quaternion":return ar;case"bool":case"boolean":return cr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g0(n.type);if(n.times===void 0){const t=[],i=[];pm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ti={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class b0{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const x0=new b0;class hr{constructor(e){this.manager=e!==void 0?e:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class v0 extends Error{constructor(e,t){super(e),this.response=t}}class gm extends hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:i,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_i[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let D=0,P=u.length;D<P;D++){const L=u[D];L.onProgress&&L.onProgress(R)}p.enqueue(x),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new v0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ti.add(`file:${e}`,c);const u=_i[e];delete _i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=_i[e];if(u===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class y0 extends hr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Hs.get(a);h===void 0&&(h=[],Hs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=ia("img");function l(){u(),t&&t(this);const h=Hs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ti.remove(`image:${e}`);const f=Hs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class M0 extends hr{constructor(e){super(e)}load(e,t,i,s){const r=new Ht,a=new y0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ko extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pf extends Ko{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hl=new Ye,Df=new F,Lf=new F;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ku,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),Hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class S0 extends zu{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class E0 extends Ko{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new S0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const If=new Ye,Er=new F,zl=new F;class T0 extends zu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),i.position.copy(Er),zl.copy(i.position),zl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zl),i.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),If.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If,i.coordinateSystem,i.reversedDepth)}}class A0 extends Ko{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vu extends om{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class w0 extends zu{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Vl=new WeakMap;class R0 extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Vl.has(a)===!0)s&&s(Vl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Vl.set(l,c),Ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class C0 extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gu="\\[\\]\\.:\\/",P0=new RegExp("["+Gu+"]","g"),Wu="[^"+Gu+"]",D0="[^"+Gu.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",Wu),I0=/(WCOD+)?/.source.replace("WCOD",D0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),F0=new RegExp("^"+L0+I0+N0+U0+"$"),O0=["material","materials","bones","map"];class k0{constructor(e,t,i){const s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){const t=F0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);O0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=k0;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Nf=new Ye;class B0{constructor(e,t,i=0,s=1/0){this.ray=new lr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,i=[]){return tu(e,this,i,t),i.sort(Uf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)tu(e[s],this,i,t);return i.sort(Uf),i}}function Uf(n,e){return n.distance-e.distance}function tu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)tu(r[a],e,t,!0)}}class Ff{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H0 extends Co{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ge(i),s=new Ge(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new bn;u.setAttribute("position",new rn(l,3)),u.setAttribute("color",new rn(c,3));const h=new jo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class z0 extends Ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Of(n,e,t,i){const s=V0(i);switch(t){case Yp:return n*e;case Ru:return n*e/s.components*s.byteLength;case Cu:return n*e/s.components*s.byteLength;case Jp:return n*e*2/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case $p:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case Du:return n*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Ac:return Math.max(n,16)*Math.max(e,8)/4;case Sc:case Tc:return Math.max(n,8)*Math.max(e,8)/2;case wc:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wc:case jc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V0(n){switch(n){case ai:case jp:return{byteLength:1,components:1};case Jr:case Xp:case fa:return{byteLength:2,components:1};case Au:case wu:return{byteLength:2,components:4};case xs:case Tu:case Nn:return{byteLength:4,components:1};case qp:case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function bm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function G0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:W0,alphahash_pars_fragment:j0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:K0,alphatest_pars_fragment:Y0,aomap_fragment:$0,aomap_pars_fragment:J0,batching_pars_vertex:Z0,batching_vertex:Q0,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:sy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:hy,color_vertex:fy,common:dy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:by,emissivemap_pars_fragment:xy,colorspace_fragment:vy,colorspace_pars_fragment:yy,envmap_fragment:My,envmap_common_pars_fragment:Sy,envmap_pars_fragment:Ey,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:wy,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Uy,lights_toon_fragment:Oy,lights_toon_pars_fragment:ky,lights_phong_fragment:By,lights_phong_pars_fragment:Hy,lights_physical_fragment:zy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:jy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Yy,map_fragment:$y,map_pars_fragment:Jy,map_particle_fragment:Zy,map_particle_pars_fragment:Qy,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:sM,morphtarget_pars_vertex:rM,morphtarget_vertex:aM,normal_fragment_begin:oM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:uM,normal_vertex:hM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:_M,packing:bM,premultiplied_alpha_fragment:xM,project_vertex:vM,dithering_fragment:yM,dithering_pars_fragment:MM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:AM,shadowmap_vertex:wM,shadowmask_pars_fragment:RM,skinbase_vertex:CM,skinning_pars_vertex:PM,skinning_vertex:DM,skinnormal_vertex:LM,specularmap_fragment:IM,specularmap_pars_fragment:NM,tonemapping_fragment:UM,tonemapping_pars_fragment:FM,transmission_fragment:OM,transmission_pars_fragment:kM,uv_pars_fragment:BM,uv_pars_vertex:HM,uv_vertex:zM,worldpos_vertex:VM,background_vert:GM,background_frag:WM,backgroundCube_vert:jM,backgroundCube_frag:XM,cube_vert:qM,cube_frag:KM,depth_vert:YM,depth_frag:$M,distanceRGBA_vert:JM,distanceRGBA_frag:ZM,equirect_vert:QM,equirect_frag:eS,linedashed_vert:tS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:sS,meshlambert_vert:rS,meshlambert_frag:aS,meshmatcap_vert:oS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:uS,meshphong_vert:hS,meshphong_frag:fS,meshphysical_vert:dS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:_S,points_frag:bS,shadow_vert:xS,shadow_frag:vS,sprite_vert:yS,sprite_frag:MS},Se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Kn={basic:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Zt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Zt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Zt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Zt([Se.points,Se.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Zt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Zt([Se.common,Se.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Zt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Zt([Se.sprite,Se.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Zt([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Zt([Se.lights,Se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Kn.physical={uniforms:Zt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const $a={r:0,b:0,g:0},ss=new oi,SS=new Ye;function ES(n,e,t,i,s,r,a){const o=new Ge(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Wo)?(u===void 0&&(u=new Bt(new da(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:sr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(ss)),u.material.toneMapped=it.getTransfer(R.colorSpace)!==gt,(h!==R||f!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Bt(new Xo(2,2),new Yi({name:"BackgroundMaterial",uniforms:sr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(R.colorSpace)!==gt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB($a,am(n)),i.buffers.color.setClear($a.r,$a.g,$a.b,x,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:M}}function TS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(v,C,B,K,se){let ne=!1;const Q=h(K,B,C);r!==Q&&(r=Q,c(r.object)),ne=d(v,K,B,se),ne&&g(v,K,B,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,x(v,C,B,K),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,C,B){const K=B.wireframe===!0;let se=i[v.id];se===void 0&&(se={},i[v.id]=se);let ne=se[C.id];ne===void 0&&(ne={},se[C.id]=ne);let Q=ne[K];return Q===void 0&&(Q=f(l()),ne[K]=Q),Q}function f(v){const C=[],B=[],K=[];for(let se=0;se<t;se++)C[se]=0,B[se]=0,K[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:K,object:v,attributes:{},index:null}}function d(v,C,B,K){const se=r.attributes,ne=C.attributes;let Q=0;const k=B.getAttributes();for(const N in k)if(k[N].location>=0){const ve=se[N];let we=ne[N];if(we===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;Q++}return r.attributesNum!==Q||r.index!==K}function g(v,C,B,K){const se={},ne=C.attributes;let Q=0;const k=B.getAttributes();for(const N in k)if(k[N].location>=0){let ve=ne[N];ve===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),se[N]=we,Q++}r.attributes=se,r.attributesNum=Q,r.index=K}function _(){const v=r.newAttributes;for(let C=0,B=v.length;C<B;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const B=r.newAttributes,K=r.enabledAttributes,se=r.attributeDivisors;B[v]=1,K[v]===0&&(n.enableVertexAttribArray(v),K[v]=1),se[v]!==C&&(n.vertexAttribDivisor(v,C),se[v]=C)}function M(){const v=r.newAttributes,C=r.enabledAttributes;for(let B=0,K=C.length;B<K;B++)C[B]!==v[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function S(v,C,B,K,se,ne,Q){Q===!0?n.vertexAttribIPointer(v,C,B,se,ne):n.vertexAttribPointer(v,C,B,K,se,ne)}function x(v,C,B,K){_();const se=K.attributes,ne=B.getAttributes(),Q=C.defaultAttributeValues;for(const k in ne){const N=ne[k];if(N.location>=0){let le=se[k];if(le===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){const ve=le.normalized,we=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Je=Fe.buffer,ut=Fe.type,nt=Fe.bytesPerElement,ie=ut===n.INT||ut===n.UNSIGNED_INT||le.gpuType===Tu;if(le.isInterleavedBufferAttribute){const X=le.data,oe=X.stride,_e=le.offset;if(X.isInstancedInterleavedBuffer){for(let be=0;be<N.locationSize;be++)p(N.location+be,X.meshPerAttribute);v.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let be=0;be<N.locationSize;be++)m(N.location+be);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let be=0;be<N.locationSize;be++)S(N.location+be,we/N.locationSize,ut,ve,oe*nt,(_e+we/N.locationSize*be)*nt,ie)}else{if(le.isInstancedBufferAttribute){for(let X=0;X<N.locationSize;X++)p(N.location+X,le.meshPerAttribute);v.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let X=0;X<N.locationSize;X++)m(N.location+X);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let X=0;X<N.locationSize;X++)S(N.location+X,we/N.locationSize,ut,ve,we*nt,we/N.locationSize*X*nt,ie)}}else if(Q!==void 0){const ve=Q[k];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(N.location,ve);break;case 3:n.vertexAttrib3fv(N.location,ve);break;case 4:n.vertexAttrib4fv(N.location,ve);break;default:n.vertexAttrib1fv(N.location,ve)}}}}M()}function R(){L();for(const v in i){const C=i[v];for(const B in C){const K=C[B];for(const se in K)u(K[se].object),delete K[se];delete C[B]}delete i[v]}}function D(v){if(i[v.id]===void 0)return;const C=i[v.id];for(const B in C){const K=C[B];for(const se in K)u(K[se].object),delete K[se];delete C[B]}delete i[v.id]}function P(v){for(const C in i){const B=i[C];if(B[v.id]===void 0)continue;const K=B[v.id];for(const se in K)u(K[se].object),delete K[se];delete B[v.id]}}function L(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function AS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ai&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:D}}function RS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Hi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,S=M*4;let x=p.clippingState||null;l.value=x,x=u(g,f,S,d);for(let R=0;R!==S;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)a.copy(h[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function CS(n){let e=new WeakMap;function t(a,o){return o===yc?a.mapping=er:o===Mc&&(a.mapping=tr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qv(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ws=4,kf=[.125,.215,.35,.446,.526,.582],hs=20,Gl=new Vu,Bf=new Ge;let Wl=null,jl=0,Xl=0,ql=!1;const ls=(1+Math.sqrt(5))/2,zs=1/ls,Hf=[new F(-ls,zs,0),new F(ls,zs,0),new F(-zs,0,ls),new F(zs,0,ls),new F(0,ls,-zs),new F(0,ls,zs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],PS=new F;class zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=PS}=r;Wl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,jl,Xl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:fa,format:An,colorSpace:an,depthBuffer:!1},s=Vf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DS(r)),this._blurMaterial=LS(r,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,i,s,r){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Bf),h.toneMapping=Xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Jn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new Bt(new da,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Bf),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const R=this._cubeSize;Ja(s,x*R,S>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hf[(s-r-1)%Hf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):hs;m>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let M=0;for(let P=0;P<hs;++P){const L=P/_,E=Math.exp(-L*L/2);p.push(E),P===0?M+=E:P<m&&(M+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const x=this._sizeLods[s],R=3*x*(s>S-Ws?s-S+Ws:0),D=4*(this._cubeSize-x);Ja(t,R,D,3*x,2*x),l.setRenderTarget(t),l.render(h,Gl)}}function DS(n){const e=[],t=[],i=[];let s=n;const r=n-Ws+1+kf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ws?l=kf[a-n+Ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let D=0;D<d;D++){const P=D%3*2/3-1,L=D>2?0:-1,E=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];M.set(E,_*g*D),S.set(f,m*g*D);const v=[D,D,D,D,D,D];x.set(v,p*g*D)}const R=new bn;R.setAttribute("position",new sn(M,_)),R.setAttribute("uv",new sn(S,m)),R.setAttribute("faceIndex",new sn(x,p)),e.push(R),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vf(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function LS(n,e,t){const i=new Float32Array(hs),s=new F(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Gf(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wf(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yc||l===Mc,u=l===er||l===tr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new zf(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new zf(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function NS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&sa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function US(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,x=M.length;S<x;S+=3){const R=M[S+0],D=M[S+1],P=M[S+2];f.push(R,D,D,P,P,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const R=S+0,D=S+1,P=S+2;f.push(R,D,D,P,P,R)}}else return;const m=new(tm(f)?rm:sm)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function FS(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kS(n,e,t){const i=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let v=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*D*4*h),L=new nm(P,R,D,h);L.type=Nn,L.needsUpdate=!0;const E=x*4;for(let C=0;C<h;C++){const B=p[C],K=M[C],se=S[C],ne=R*D*4*C;for(let Q=0;Q<B.count;Q++){const k=Q*E;g===!0&&(s.fromBufferAttribute(B,Q),P[ne+k+0]=s.x,P[ne+k+1]=s.y,P[ne+k+2]=s.z,P[ne+k+3]=0),_===!0&&(s.fromBufferAttribute(K,Q),P[ne+k+4]=s.x,P[ne+k+5]=s.y,P[ne+k+6]=s.z,P[ne+k+7]=0),m===!0&&(s.fromBufferAttribute(se,Q),P[ne+k+8]=s.x,P[ne+k+9]=s.y,P[ne+k+10]=s.z,P[ne+k+11]=se.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new ze(R,D)},i.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function BS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xm=new Ht,jf=new fm(1,1),vm=new nm,ym=new Pv,Mm=new lm,Xf=[],qf=[],Kf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Xf[s];if(r===void 0&&(r=new Float32Array(s),Xf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function GS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function WS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;$f.set(i),n.uniformMatrix2fv(this.addr,!1,$f),Ut(t,i)}}function jS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Ut(t,i)}}function XS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),Ut(t,i)}}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function JS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function tE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jf.compareFunction=em,r=jf):r=xm,t.setTexture2D(e||r,s)}function nE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ym,s)}function iE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mm,s)}function sE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vm,s)}function rE(n){switch(n){case 5126:return HS;case 35664:return zS;case 35665:return VS;case 35666:return GS;case 35674:return WS;case 35675:return jS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return KS;case 35668:case 35672:return YS;case 35669:case 35673:return $S;case 5125:return JS;case 36294:return ZS;case 36295:return QS;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return sE}}function aE(n,e){n.uniform1fv(this.addr,e)}function oE(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function lE(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function cE(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function uE(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hE(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fE(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dE(n,e){n.uniform1iv(this.addr,e)}function pE(n,e){n.uniform2iv(this.addr,e)}function mE(n,e){n.uniform3iv(this.addr,e)}function gE(n,e){n.uniform4iv(this.addr,e)}function _E(n,e){n.uniform1uiv(this.addr,e)}function bE(n,e){n.uniform2uiv(this.addr,e)}function xE(n,e){n.uniform3uiv(this.addr,e)}function vE(n,e){n.uniform4uiv(this.addr,e)}function yE(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xm,r[a])}function ME(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ym,r[a])}function SE(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mm,r[a])}function EE(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vm,r[a])}function TE(n){switch(n){case 5126:return aE;case 35664:return oE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return hE;case 35676:return fE;case 5124:case 35670:return dE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return _E;case 36294:return bE;case 36295:return xE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return EE}}class AE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rE(t.type)}}class wE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TE(t.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Jf(n,e){n.seq.push(e),n.map[e.id]=e}function CE(n,e,t){const i=n.name,s=i.length;for(Kl.lastIndex=0;;){const r=Kl.exec(i),a=Kl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jf(t,c===void 0?new AE(o,n,e):new wE(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new RE(o),Jf(t,h)),t=h}}}class uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);CE(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Zf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PE=37297;let DE=0;function LE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Qf=new Ke;function IE(n){it._getMatrix(Qf,it.workingColorSpace,n);const e=`mat3( ${Qf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case To:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ed(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+LE(n.getShaderSource(e),o)}else return r}function NE(n,e){const t=IE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function UE(n,e){let t;switch(e){case Vx:t="Linear";break;case Gx:t="Reinhard";break;case Wx:t="Cineon";break;case Vp:t="ACESFilmic";break;case Xx:t="AgX";break;case qx:t="Neutral";break;case jx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new F;function FE(){it.getLuminanceCoefficients(Za);const n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function kE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cr(n){return n!==""}function td(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(n){return n.replace(HE,VE)}const zE=new Map;function VE(n,e){let t=$e[e];if(t===void 0){const i=zE.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}const GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(n){return n.replace(GE,WE)}function WE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function XE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qE(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(e="ENVMAP_MODE_REFRACTION"),e}function KE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function YE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $E(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jE(t),c=XE(t),u=qE(t),h=KE(t),f=YE(t),d=OE(t),g=kE(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Xi?UE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,NE("linearToOutputTexel",t.outputColorSpace),FE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=nu(a),a=td(a,t),a=nd(a,t),o=nu(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,x=M+p+o,R=Zf(s,s.VERTEX_SHADER,S),D=Zf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(C){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",K=s.getShaderInfoLog(R)||"",se=s.getShaderInfoLog(D)||"",ne=B.trim(),Q=K.trim(),k=se.trim();let N=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,D);else{const ve=ed(s,R,"vertex"),we=ed(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+ne+`
`+ve+`
`+we)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Q===""||k==="")&&(le=!1);le&&(C.diagnostics={runnable:N,programLog:ne,vertexShader:{log:Q,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(D),L=new uo(s,_),E=BE(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,PE)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=D,this}let JE=0;class ZE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QE(e),t.set(e,i)),i}}class QE{constructor(e){this.id=JE++,this.code=e,this.usedTimes=0}}function eT(n,e,t,i,s,r,a){const o=new Uu,l=new ZE,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,C,B,K){const se=B.fog,ne=K.geometry,Q=E.isMeshStandardMaterial?B.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),N=k&&k.mapping===Wo?k.image.height:null,le=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,we=ve!==void 0?ve.length:0;let Fe=0;ne.morphAttributes.position!==void 0&&(Fe=1),ne.morphAttributes.normal!==void 0&&(Fe=2),ne.morphAttributes.color!==void 0&&(Fe=3);let Je,ut,nt,ie;if(le){const ht=Kn[le];Je=ht.vertexShader,ut=ht.fragmentShader}else Je=E.vertexShader,ut=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),ie=l.getFragmentShaderID(E);const X=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),_e=K.isInstancedMesh===!0,be=K.isBatchedMesh===!0,w=!!E.map,I=!!E.matcap,y=!!k,ee=!!E.aoMap,V=!!E.lightMap,G=!!E.bumpMap,Y=!!E.normalMap,ae=!!E.displacementMap,$=!!E.emissiveMap,W=!!E.metalnessMap,ye=!!E.roughnessMap,ue=E.anisotropy>0,A=E.clearcoat>0,b=E.dispersion>0,O=E.iridescence>0,j=E.sheen>0,te=E.transmission>0,q=ue&&!!E.anisotropyMap,Ee=A&&!!E.clearcoatMap,he=A&&!!E.clearcoatNormalMap,Ae=A&&!!E.clearcoatRoughnessMap,Re=O&&!!E.iridescenceMap,fe=O&&!!E.iridescenceThicknessMap,ge=j&&!!E.sheenColorMap,Ne=j&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Me=!!E.specularColorMap,qe=!!E.specularIntensityMap,U=te&&!!E.transmissionMap,me=te&&!!E.thicknessMap,xe=!!E.gradientMap,Pe=!!E.alphaMap,de=E.alphaTest>0,re=!!E.alphaHash,Ie=!!E.extensions;let We=Xi;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=n.toneMapping);const yt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:ut,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:be,batchingColor:be&&K._colorsTexture!==null,instancing:_e,instancingColor:_e&&K.instanceColor!==null,instancingMorph:_e&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:an,alphaToCoverage:!!E.alphaToCoverage,map:w,matcap:I,envMap:y,envMapMode:y&&k.mapping,envMapCubeUVHeight:N,aoMap:ee,lightMap:V,bumpMap:G,normalMap:Y,displacementMap:f&&ae,emissiveMap:$,normalMapObjectSpace:Y&&E.normalMapType===Qx,normalMapTangentSpace:Y&&E.normalMapType===Qp,metalnessMap:W,roughnessMap:ye,anisotropy:ue,anisotropyMap:q,clearcoat:A,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:b,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:fe,sheen:j,sheenColorMap:ge,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Me,specularIntensityMap:qe,transmission:te,transmissionMap:U,thicknessMap:me,gradientMap:xe,opaque:E.transparent===!1&&E.blending===qs&&E.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:re,combine:E.combine,mapUv:w&&_(E.map.channel),aoMapUv:ee&&_(E.aoMap.channel),lightMapUv:V&&_(E.lightMap.channel),bumpMapUv:G&&_(E.bumpMap.channel),normalMapUv:Y&&_(E.normalMap.channel),displacementMapUv:ae&&_(E.displacementMap.channel),emissiveMapUv:$&&_(E.emissiveMap.channel),metalnessMapUv:W&&_(E.metalnessMap.channel),roughnessMapUv:ye&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:Ee&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(E.sheenRoughnessMap.channel),specularMapUv:Le&&_(E.specularMap.channel),specularColorMapUv:Me&&_(E.specularColorMap.channel),specularIntensityMapUv:qe&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:me&&_(E.thicknessMap.channel),alphaMapUv:Pe&&_(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Y||ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ne.attributes.uv&&(w||Pe),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:K.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:w&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===gt,decodeVideoTextureEmissive:$&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sn,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)v.push(C),v.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(M(v,E),S(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function M(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const v=g[E.type];let C;if(v){const B=Kn[v];C=Gv.clone(B.uniforms)}else C=E.uniforms;return C}function R(E,v){let C;for(let B=0,K=u.length;B<K;B++){const se=u[B];if(se.cacheKey===v){C=se,++C.usedTimes;break}}return C===void 0&&(C=new $E(n,v,E,r),u.push(C)),C}function D(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:L}}function tT(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ad(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||nT),i.length>1&&i.sort(f||rd),s.length>1&&s.sort(f||rd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function iT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new ad,n.set(i,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ge};break;case"SpotLight":t={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function rT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aT=0;function oT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lT(n){const e=new sT,t=rT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new Ye,a=new Ye;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,R=0,D=0,P=0;c.sort(oT);for(let E=0,v=c.length;E<v;E++){const C=c[E],B=C.color,K=C.intensity,se=C.distance,ne=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=B.r*K,h+=B.g*K,f+=B.b*K;else if(C.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(C.sh.coefficients[Q],K);P++}else if(C.isDirectionalLight){const Q=e.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,N=t.get(C);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=Q,d++}else if(C.isSpotLight){const Q=e.get(C);Q.position.setFromMatrixPosition(C.matrixWorld),Q.color.copy(B).multiplyScalar(K),Q.distance=se,Q.coneCos=Math.cos(C.angle),Q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Q.decay=C.decay,i.spot[_]=Q;const k=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,k.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[_]=k.matrix,C.castShadow){const N=t.get(C);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=ne,x++}_++}else if(C.isRectAreaLight){const Q=e.get(C);Q.color.copy(B).multiplyScalar(K),Q.halfWidth.set(C.width*.5,0,0),Q.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Q,m++}else if(C.isPointLight){const Q=e.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity),Q.distance=C.distance,Q.decay=C.decay,C.castShadow){const k=C.shadow,N=t.get(C);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=Q,g++}else if(C.isHemisphereLight){const Q=e.get(C);Q.skyColor.copy(C.color).multiplyScalar(K),Q.groundColor.copy(C.groundColor).multiplyScalar(K),i.hemi[p]=Q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=P,i.version=aT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function od(n){const e=new lT(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cT(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new od(n),e.set(s,[o])):r>=a.length?(o=new od(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fT(n,e,t){let i=new ku;const s=new ze,r=new ze,a=new ct,o=new o0({depthPacking:Zx}),l=new l0,c={},u=t.maxTextureSize,h={[wi]:cn,[cn]:wi,[Sn]:Sn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:uT,fragmentShader:hT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hp;let p=this.type;this.render=function(D,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ji),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=p!==bi&&this.type===bi,se=p===bi&&this.type!==bi;for(let ne=0,Q=D.length;ne<Q;ne++){const k=D[ne],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const le=N.getFrameExtents();if(s.multiply(le),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,N.mapSize.y=r.y)),N.map===null||K===!0||se===!0){const we=this.type!==bi?{minFilter:nn,magFilter:nn}:{};N.map!==null&&N.map.dispose(),N.map=new vs(s.x,s.y,we),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ve=N.getViewportCount();for(let we=0;we<ve;we++){const Fe=N.getViewport(we);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),B.viewport(a),N.updateMatrices(k,we),i=N.getFrustum(),x(P,L,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===bi&&M(N,L),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,C)};function M(D,P){const L=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new vs(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,L,f,_,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,L,d,_,null)}function S(D,P,L,E){let v=null;const C=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)v=C;else if(v=L.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=v.uuid,K=P.uuid;let se=c[B];se===void 0&&(se={},c[B]=se);let ne=se[K];ne===void 0&&(ne=v.clone(),se[K]=ne,P.addEventListener("dispose",R)),v=ne}if(v.visible=P.visible,v.wireframe=P.wireframe,E===bi?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:h[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=L}return v}function x(D,P,L,E,v){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&v===bi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const K=e.update(D),se=D.material;if(Array.isArray(se)){const ne=K.groups;for(let Q=0,k=ne.length;Q<k;Q++){const N=ne[Q],le=se[N.materialIndex];if(le&&le.visible){const ve=S(D,le,E,v);D.onBeforeShadow(n,D,P,L,K,ve,N),n.renderBufferDirect(L,null,K,ve,D,N),D.onAfterShadow(n,D,P,L,K,ve,N)}}}else if(se.visible){const ne=S(D,se,E,v);D.onBeforeShadow(n,D,P,L,K,ne,null),n.renderBufferDirect(L,null,K,ne,D,null),D.onAfterShadow(n,D,P,L,K,ne,null)}}const B=D.children;for(let K=0,se=B.length;K<se;K++)x(B[K],P,L,E,v)}function R(D){D.target.removeEventListener("dispose",R);for(const L in c){const E=c[L],v=D.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const dT={[pc]:mc,[gc]:xc,[_c]:vc,[Qs]:bc,[mc]:pc,[xc]:gc,[vc]:_c,[bc]:Qs};function pT(n,e){function t(){let U=!1;const me=new ct;let xe=null;const Pe=new ct(0,0,0,0);return{setMask:function(de){xe!==de&&!U&&(n.colorMask(de,de,de,de),xe=de)},setLocked:function(de){U=de},setClear:function(de,re,Ie,We,yt){yt===!0&&(de*=We,re*=We,Ie*=We),me.set(de,re,Ie,We),Pe.equals(me)===!1&&(n.clearColor(de,re,Ie,We),Pe.copy(me))},reset:function(){U=!1,xe=null,Pe.set(-1,0,0,0)}}}function i(){let U=!1,me=!1,xe=null,Pe=null,de=null;return{setReversed:function(re){if(me!==re){const Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=re;const We=de;de=null,this.setClear(We)}},getReversed:function(){return me},setTest:function(re){re?X(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(re){xe!==re&&!U&&(n.depthMask(re),xe=re)},setFunc:function(re){if(me&&(re=dT[re]),Pe!==re){switch(re){case pc:n.depthFunc(n.NEVER);break;case mc:n.depthFunc(n.ALWAYS);break;case gc:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case xc:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=re}},setLocked:function(re){U=re},setClear:function(re){de!==re&&(me&&(re=1-re),n.clearDepth(re),de=re)},reset:function(){U=!1,xe=null,Pe=null,de=null,me=!1}}}function s(){let U=!1,me=null,xe=null,Pe=null,de=null,re=null,Ie=null,We=null,yt=null;return{setTest:function(ht){U||(ht?X(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(ht){me!==ht&&!U&&(n.stencilMask(ht),me=ht)},setFunc:function(ht,ui,Vn){(xe!==ht||Pe!==ui||de!==Vn)&&(n.stencilFunc(ht,ui,Vn),xe=ht,Pe=ui,de=Vn)},setOp:function(ht,ui,Vn){(re!==ht||Ie!==ui||We!==Vn)&&(n.stencilOp(ht,ui,Vn),re=ht,Ie=ui,We=Vn)},setLocked:function(ht){U=ht},setClear:function(ht){yt!==ht&&(n.clearStencil(ht),yt=ht)},reset:function(){U=!1,me=null,xe=null,Pe=null,de=null,re=null,Ie=null,We=null,yt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,R=null,D=null,P=new Ge(0,0,0),L=0,E=!1,v=null,C=null,B=null,K=null,se=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,k=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(N)[1]),Q=k>=1):N.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Q=k>=2);let le=null,ve={};const we=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Je=new ct().fromArray(we),ut=new ct().fromArray(Fe);function nt(U,me,xe,Pe){const de=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<xe;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(me+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return re}const ie={};ie[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(n.DEPTH_TEST),a.setFunc(Qs),G(!1),Y(Bh),X(n.CULL_FACE),ee(ji);function X(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function oe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function _e(U,me){return h[U]!==me?(n.bindFramebuffer(U,me),h[U]=me,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function be(U,me){let xe=d,Pe=!1;if(U){xe=f.get(me),xe===void 0&&(xe=[],f.set(me,xe));const de=U.textures;if(xe.length!==de.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ie=de.length;re<Ie;re++)xe[re]=n.COLOR_ATTACHMENT0+re;xe.length=de.length,Pe=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(xe)}function w(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const I={[us]:n.FUNC_ADD,[Sx]:n.FUNC_SUBTRACT,[Ex]:n.FUNC_REVERSE_SUBTRACT};I[Tx]=n.MIN,I[Ax]=n.MAX;const y={[wx]:n.ZERO,[Rx]:n.ONE,[Cx]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[Ux]:n.SRC_ALPHA_SATURATE,[Ix]:n.DST_COLOR,[Dx]:n.DST_ALPHA,[Px]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[Nx]:n.ONE_MINUS_DST_COLOR,[Lx]:n.ONE_MINUS_DST_ALPHA,[Fx]:n.CONSTANT_COLOR,[Ox]:n.ONE_MINUS_CONSTANT_COLOR,[kx]:n.CONSTANT_ALPHA,[Bx]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,me,xe,Pe,de,re,Ie,We,yt,ht){if(U===ji){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(X(n.BLEND),_=!0),U!==Mx){if(U!==m||ht!==E){if((p!==us||x!==us)&&(n.blendEquation(n.FUNC_ADD),p=us,x=us),ht)switch(U){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,R=null,D=null,P.set(0,0,0),L=0,m=U,E=ht}return}de=de||me,re=re||xe,Ie=Ie||Pe,(me!==p||de!==x)&&(n.blendEquationSeparate(I[me],I[de]),p=me,x=de),(xe!==M||Pe!==S||re!==R||Ie!==D)&&(n.blendFuncSeparate(y[xe],y[Pe],y[re],y[Ie]),M=xe,S=Pe,R=re,D=Ie),(We.equals(P)===!1||yt!==L)&&(n.blendColor(We.r,We.g,We.b,yt),P.copy(We),L=yt),m=U,E=!1}function V(U,me){U.side===Sn?oe(n.CULL_FACE):X(n.CULL_FACE);let xe=U.side===cn;me&&(xe=!xe),G(xe),U.blending===qs&&U.transparent===!1?ee(ji):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Pe=U.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){v!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),v=U)}function Y(U){U!==xx?(X(n.CULL_FACE),U!==C&&(U===Bh?n.cullFace(n.BACK):U===vx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),C=U}function ae(U){U!==B&&(Q&&n.lineWidth(U),B=U)}function $(U,me,xe){U?(X(n.POLYGON_OFFSET_FILL),(K!==me||se!==xe)&&(n.polygonOffset(me,xe),K=me,se=xe)):oe(n.POLYGON_OFFSET_FILL)}function W(U){U?X(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ye(U){U===void 0&&(U=n.TEXTURE0+ne-1),le!==U&&(n.activeTexture(U),le=U)}function ue(U,me,xe){xe===void 0&&(le===null?xe=n.TEXTURE0+ne-1:xe=le);let Pe=ve[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ve[xe]=Pe),(Pe.type!==U||Pe.texture!==me)&&(le!==xe&&(n.activeTexture(xe),le=xe),n.bindTexture(U,me||ie[U]),Pe.type=U,Pe.texture=me)}function A(){const U=ve[le];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Ne(U){ut.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Le(U,me){let xe=c.get(me);xe===void 0&&(xe=new WeakMap,c.set(me,xe));let Pe=xe.get(U);Pe===void 0&&(Pe=n.getUniformBlockIndex(me,U.name),xe.set(U,Pe))}function Me(U,me){const Pe=c.get(me).get(U);l.get(me)!==Pe&&(n.uniformBlockBinding(me,Pe,U.__bindingPointIndex),l.set(me,Pe))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ve={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,R=null,D=null,P=new Ge(0,0,0),L=0,E=!1,v=null,C=null,B=null,K=null,se=null,Je.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:oe,bindFramebuffer:_e,drawBuffers:be,useProgram:w,setBlending:ee,setMaterial:V,setFlipSided:G,setCullFace:Y,setLineWidth:ae,setPolygonOffset:$,setScissorTest:W,activeTexture:ye,bindTexture:ue,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Re,texImage3D:fe,updateUBOMapping:Le,uniformBlockBinding:Me,texStorage2D:he,texStorage3D:Ae,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:Ee,scissor:ge,viewport:Ne,reset:qe}}function mT(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):ia("canvas")}function _(A,b,O){let j=1;const te=ue(A);if((te.width>O||te.height>O)&&(j=O/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(j*te.width),Ee=Math.floor(j*te.height);h===void 0&&(h=g(q,Ee));const he=b?g(q,Ee):h;return he.width=q,he.height=Ee,he.getContext("2d").drawImage(A,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Ee+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,b,O,j,te=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=b;if(b===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),b===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),b===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),b===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),b===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),b===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),b===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),b===n.RGBA){const Ee=te?To:it.getTransfer(j);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Ee===gt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,b){let O;return A?b===null||b===xs||b===Zr?O=n.DEPTH24_STENCIL8:b===Nn?O=n.DEPTH32F_STENCIL8:b===Jr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===Zr?O=n.DEPTH_COMPONENT24:b===Nn?O=n.DEPTH_COMPONENT32F:b===Jr&&(O=n.DEPTH_COMPONENT16),O}function R(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function D(A){const b=A.target;b.removeEventListener("dispose",D),L(b),b.isVideoTexture&&u.delete(b)}function P(A){const b=A.target;b.removeEventListener("dispose",P),v(b)}function L(A){const b=i.get(A);if(b.__webglInit===void 0)return;const O=A.source,j=f.get(O);if(j){const te=j[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(j).length===0&&f.delete(O)}i.remove(A)}function E(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const O=A.source,j=f.get(O);delete j[b.__cacheKey],a.memory.textures--}function v(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let te=0;te<b.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(b.__webglFramebuffer[j][te]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,te=O.length;j<te;j++){const q=i.get(O[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(A)}let C=0;function B(){C=0}function K(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function se(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function ne(A,b){const O=i.get(A);if(A.isVideoTexture&&W(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(O,A,b);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+b)}function Q(A,b){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ie(O,A,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+b)}function k(A,b){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ie(O,A,b);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+b)}function N(A,b){const O=i.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+b)}const le={[nr]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},ve={[nn]:n.NEAREST,[Wp]:n.NEAREST_MIPMAP_NEAREST,[Rr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},we={[ev]:n.NEVER,[av]:n.ALWAYS,[tv]:n.LESS,[em]:n.LEQUAL,[nv]:n.EQUAL,[rv]:n.GEQUAL,[iv]:n.GREATER,[sv]:n.NOTEQUAL};function Fe(A,b){if(b.type===Nn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gn||b.magFilter===ro||b.magFilter===Rr||b.magFilter===Ei||b.minFilter===gn||b.minFilter===ro||b.minFilter===Rr||b.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,le[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,le[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,le[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ve[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==Rr&&b.minFilter!==Ei||b.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Je(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",D));const j=b.source;let te=f.get(j);te===void 0&&(te={},f.set(j,te));const q=se(b);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[q].usedTimes++;const Ee=te[A.__cacheKey];Ee!==void 0&&(te[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(b)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return O}function ut(A,b,O){return Math.floor(Math.floor(A/O)/b)}function nt(A,b,O,j){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,O,j,b.data);else{q.sort((fe,ge)=>fe.start-ge.start);let Ee=0;for(let fe=1;fe<q.length;fe++){const ge=q[Ee],Ne=q[fe],Le=ge.start+ge.count,Me=ut(Ne.start,b.width,4),qe=ut(ge.start,b.width,4);Ne.start<=Le+1&&Me===qe&&ut(Ne.start+Ne.count-1,b.width,4)===Me?ge.count=Math.max(ge.count,Ne.start+Ne.count-ge.start):(++Ee,q[Ee]=Ne)}q.length=Ee+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let fe=0,ge=q.length;fe<ge;fe++){const Ne=q[fe],Le=Math.floor(Ne.start/4),Me=Math.ceil(Ne.count/4),qe=Le%b.width,U=Math.floor(Le/b.width),me=Me,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,qe,U,me,xe,O,j,b.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function ie(A,b,O){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const te=Je(A,b),q=b.source;t.bindTexture(j,A.__webglTexture,n.TEXTURE0+O);const Ee=i.get(q);if(q.version!==Ee.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const he=it.getPrimaries(it.workingColorSpace),Ae=b.colorSpace===zi?null:it.getPrimaries(b.colorSpace),Re=b.colorSpace===zi||he===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let fe=_(b.image,!1,s.maxTextureSize);fe=ye(b,fe);const ge=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type);let Le=S(b.internalFormat,ge,Ne,b.colorSpace,b.isVideoTexture);Fe(j,b);let Me;const qe=b.mipmaps,U=b.isVideoTexture!==!0,me=Ee.__version===void 0||te===!0,xe=q.dataReady,Pe=R(b,fe);if(b.isDepthTexture)Le=x(b.format===ea,b.type),me&&(U?t.texStorage2D(n.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ge,Ne,null));else if(b.isDataTexture)if(qe.length>0){U&&me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,qe[0].width,qe[0].height);for(let de=0,re=qe.length;de<re;de++)Me=qe[de],U?xe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,ge,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,ge,Ne,Me.data);b.generateMipmaps=!1}else U?(me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,fe.width,fe.height),xe&&nt(b,fe,ge,Ne)):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ge,Ne,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,qe[0].width,qe[0].height,fe.depth);for(let de=0,re=qe.length;de<re;de++)if(Me=qe[de],b.format!==An)if(ge!==null)if(U){if(xe)if(b.layerUpdates.size>0){const Ie=Of(Me.width,Me.height,b.format,b.type);for(const We of b.layerUpdates){const yt=Me.data.subarray(We*Ie/Me.data.BYTES_PER_ELEMENT,(We+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,We,Me.width,Me.height,1,ge,yt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,fe.depth,ge,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,fe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,fe.depth,ge,Ne,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Le,Me.width,Me.height,fe.depth,0,ge,Ne,Me.data)}else{U&&me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,qe[0].width,qe[0].height);for(let de=0,re=qe.length;de<re;de++)Me=qe[de],b.format!==An?ge!==null?U?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,ge,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,ge,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,de,Le,Me.width,Me.height,0,ge,Ne,Me.data)}else if(b.isDataArrayTexture)if(U){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,fe.width,fe.height,fe.depth),xe)if(b.layerUpdates.size>0){const de=Of(fe.width,fe.height,b.format,b.type);for(const re of b.layerUpdates){const Ie=fe.data.subarray(re*de/fe.data.BYTES_PER_ELEMENT,(re+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,ge,Ne,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ge,Ne,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,ge,Ne,fe.data);else if(b.isData3DTexture)U?(me&&t.texStorage3D(n.TEXTURE_3D,Pe,Le,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ge,Ne,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,ge,Ne,fe.data);else if(b.isFramebufferTexture){if(me)if(U)t.texStorage2D(n.TEXTURE_2D,Pe,Le,fe.width,fe.height);else{let de=fe.width,re=fe.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Le,de,re,0,ge,Ne,null),de>>=1,re>>=1}}else if(qe.length>0){if(U&&me){const de=ue(qe[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Le,de.width,de.height)}for(let de=0,re=qe.length;de<re;de++)Me=qe[de],U?xe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ge,Ne,Me):t.texImage2D(n.TEXTURE_2D,de,Le,ge,Ne,Me);b.generateMipmaps=!1}else if(U){if(me){const de=ue(fe);t.texStorage2D(n.TEXTURE_2D,Pe,Le,de.width,de.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ne,fe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ge,Ne,fe);m(b)&&p(j),Ee.__version=q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function X(A,b,O){if(b.image.length!==6)return;const j=Je(A,b),te=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const q=i.get(te);if(te.version!==q.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const Ee=it.getPrimaries(it.workingColorSpace),he=b.colorSpace===zi?null:it.getPrimaries(b.colorSpace),Ae=b.colorSpace===zi||Ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!Re&&!fe?ge[re]=_(b.image[re],!0,s.maxCubemapSize):ge[re]=fe?b.image[re].image:b.image[re],ge[re]=ye(b,ge[re]);const Ne=ge[0],Le=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),qe=S(b.internalFormat,Le,Me,b.colorSpace),U=b.isVideoTexture!==!0,me=q.__version===void 0||j===!0,xe=te.dataReady;let Pe=R(b,Ne);Fe(n.TEXTURE_CUBE_MAP,b);let de;if(Re){U&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,qe,Ne.width,Ne.height);for(let re=0;re<6;re++){de=ge[re].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const We=de[Ie];b.format!==An?Le!==null?U?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,We.width,We.height,Le,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,We.width,We.height,Le,Me,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,qe,We.width,We.height,0,Le,Me,We.data)}}}else{if(de=b.mipmaps,U&&me){de.length>0&&Pe++;const re=ue(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,qe,re.width,re.height)}for(let re=0;re<6;re++)if(fe){U?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Le,Me,ge[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,ge[re].width,ge[re].height,0,Le,Me,ge[re].data);for(let Ie=0;Ie<de.length;Ie++){const yt=de[Ie].image[re].image;U?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,yt.width,yt.height,Le,Me,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,qe,yt.width,yt.height,0,Le,Me,yt.data)}}else{U?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Me,ge[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,Le,Me,ge[re]);for(let Ie=0;Ie<de.length;Ie++){const We=de[Ie];U?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Le,Me,We.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,qe,Le,Me,We.image[re])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),q.__version=te.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function oe(A,b,O,j,te,q){const Ee=r.convert(O.format,O.colorSpace),he=r.convert(O.type),Ae=S(O.internalFormat,Ee,he,O.colorSpace),Re=i.get(b),fe=i.get(O);if(fe.__renderTarget=b,!Re.__hasExternalTextures){const ge=Math.max(1,b.width>>q),Ne=Math.max(1,b.height>>q);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,q,Ae,ge,Ne,b.depth,0,Ee,he,null):t.texImage2D(te,q,Ae,ge,Ne,0,Ee,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),$(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,fe.__webglTexture,0,ae(b)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,fe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(A,b,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const j=b.depthTexture,te=j&&j.isDepthTexture?j.type:null,q=x(b.stencilBuffer,te),Ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=ae(b);$(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,b.width,b.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,A)}else{const j=b.textures;for(let te=0;te<j.length;te++){const q=j[te],Ee=r.convert(q.format,q.colorSpace),he=r.convert(q.type),Ae=S(q.internalFormat,Ee,he,q.colorSpace),Re=ae(b);O&&$(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ae,b.width,b.height):$(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ae,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ne(b.depthTexture,0);const te=j.__webglTexture,q=ae(b);if(b.depthTexture.format===Qr)$(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(b.depthTexture.format===ea)$(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function w(A){const b=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?be(b.__webglFramebuffer[0],A):be(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),_e(b.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,q)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),_e(b.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(A,b,O){const j=i.get(A);b!==void 0&&oe(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&w(A)}function y(A){const b=A.texture,O=i.get(A),j=i.get(b);A.addEventListener("dispose",P);const te=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)O.__webglFramebuffer[he][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let he=0,Ae=te.length;he<Ae;he++){const Re=i.get(te[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&$(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Ae=te[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Re=r.convert(Ae.format,Ae.colorSpace),fe=r.convert(Ae.type),ge=S(Ae.internalFormat,Re,fe,Ae.colorSpace,A.isXRRenderTarget===!0),Ne=ae(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ge,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)oe(O.__webglFramebuffer[he][Ae],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else oe(O.__webglFramebuffer[he],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,Ae=te.length;he<Ae;he++){const Re=te[he],fe=i.get(Re);let ge=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,fe.__webglTexture),Fe(ge,Re),oe(O.__webglFramebuffer,A,Re,n.COLOR_ATTACHMENT0+he,ge,0),m(Re)&&p(ge)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),Fe(he,b),b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)oe(O.__webglFramebuffer[Ae],A,b,n.COLOR_ATTACHMENT0,he,Ae);else oe(O.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,he,0);m(b)&&p(he),t.unbindTexture()}A.depthBuffer&&w(A)}function ee(A){const b=A.textures;for(let O=0,j=b.length;O<j;O++){const te=b[O];if(m(te)){const q=M(A),Ee=i.get(te).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const V=[],G=[];function Y(A){if(A.samples>0){if($(A)===!1){const b=A.textures,O=A.width,j=A.height;let te=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(A),he=b.length>1;if(he)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(b[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,te,n.NEAREST),l===!0&&(V.length=0,G.length=0,V.push(n.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(V.push(q),G.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(b[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ae(A){return Math.min(s.maxSamples,A.samples)}function $(A){const b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function ye(A,b){const O=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==an&&O!==zi&&(it.getTransfer(O)===gt?(j!==An||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=Q,this.setTexture3D=k,this.setTextureCube=N,this.rebindTextures=I,this.setupRenderTarget=y,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=$}function gT(n,e){function t(i,s=zi){let r;const a=it.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jp)return n.BYTE;if(i===Xp)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===fa)return n.HALF_FLOAT;if(i===Yp)return n.ALPHA;if(i===$p)return n.RGB;if(i===An)return n.RGBA;if(i===Qr)return n.DEPTH_COMPONENT;if(i===ea)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===Jp)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Du)return n.RGBA_INTEGER;if(i===ao||i===oo||i===lo||i===co)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sc||i===Ec||i===Tc||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Rc||i===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wc||i===Rc)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Dc||i===Lc||i===Ic||i===Nc||i===Uc||i===Fc||i===Oc||i===kc||i===Bc||i===Hc||i===zc||i===Vc||i===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===jc||i===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wc)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Kc||i===Yc||i===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:_T,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vT extends Ms{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new xT,p={},M=t.getContextAttributes();let S=null,x=null;const R=[],D=[],P=new ze;let L=null;const E=new en;E.viewport=new ct;const v=new en;v.viewport=new ct;const C=[E,v],B=new C0;let K=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let X=R[ie];return X===void 0&&(X=new Nl,R[ie]=X),X.getTargetRaySpace()},this.getControllerGrip=function(ie){let X=R[ie];return X===void 0&&(X=new Nl,R[ie]=X),X.getGripSpace()},this.getHand=function(ie){let X=R[ie];return X===void 0&&(X=new Nl,R[ie]=X),X.getHandSpace()};function ne(ie){const X=D.indexOf(ie.inputSource);if(X===-1)return;const oe=R[X];oe!==void 0&&(oe.update(ie.inputSource,ie.frame,c||a),oe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Q(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",k);for(let ie=0;ie<R.length;ie++){const X=D[ie];X!==null&&(D[ie]=null,R[ie].disconnect(X))}K=null,se=null,m.reset();for(const ie in p)delete p[ie];e.setRenderTarget(S),d=null,f=null,h=null,s=null,x=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,_e=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?ea:Qr,_e=M.stencil?Zr:xs);const w={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(w),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new vs(f.textureWidth,f.textureHeight,{format:An,type:ai,depthTexture:new fm(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new vs(d.framebufferWidth,d.framebufferHeight,{format:An,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(ie){for(let X=0;X<ie.removed.length;X++){const oe=ie.removed[X],_e=D.indexOf(oe);_e>=0&&(D[_e]=null,R[_e].disconnect(oe))}for(let X=0;X<ie.added.length;X++){const oe=ie.added[X];let _e=D.indexOf(oe);if(_e===-1){for(let w=0;w<R.length;w++)if(w>=D.length){D.push(oe),_e=w;break}else if(D[w]===null){D[w]=oe,_e=w;break}if(_e===-1)break}const be=R[_e];be&&be.connect(oe)}}const N=new F,le=new F;function ve(ie,X,oe){N.setFromMatrixPosition(X.matrixWorld),le.setFromMatrixPosition(oe.matrixWorld);const _e=N.distanceTo(le),be=X.projectionMatrix.elements,w=oe.projectionMatrix.elements,I=be[14]/(be[10]-1),y=be[14]/(be[10]+1),ee=(be[9]+1)/be[5],V=(be[9]-1)/be[5],G=(be[8]-1)/be[0],Y=(w[8]+1)/w[0],ae=I*G,$=I*Y,W=_e/(-G+Y),ye=W*-G;if(X.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ye),ie.translateZ(W),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),be[10]===-1)ie.projectionMatrix.copy(X.projectionMatrix),ie.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const ue=I+W,A=y+W,b=ae-ye,O=$+(_e-ye),j=ee*y/A*ue,te=V*y/A*ue;ie.projectionMatrix.makePerspective(b,O,j,te,ue,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function we(ie,X){X===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(X.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let X=ie.near,oe=ie.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),B.near=v.near=E.near=X,B.far=v.far=E.far=oe,(K!==B.near||se!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,se=B.far),B.layers.mask=ie.layers.mask|6,E.layers.mask=B.layers.mask&3,v.layers.mask=B.layers.mask&5;const _e=ie.parent,be=B.cameras;we(B,_e);for(let w=0;w<be.length;w++)we(be[w],_e);be.length===2?ve(B,E,v):B.projectionMatrix.copy(E.projectionMatrix),Fe(ie,B,_e)};function Fe(ie,X,oe){oe===null?ie.matrix.copy(X.matrixWorld):(ie.matrix.copy(oe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(X.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(X.projectionMatrix),ie.projectionMatrixInverse.copy(X.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ir*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ie){return p[ie]};let Je=null;function ut(ie,X){if(u=X.getViewerPose(c||a),g=X,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let _e=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,_e=!0);for(let y=0;y<oe.length;y++){const ee=oe[y];let V=null;if(d!==null)V=d.getViewport(ee);else{const Y=h.getViewSubImage(f,ee);V=Y.viewport,y===0&&(e.setRenderTargetTextures(x,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(x))}let G=C[y];G===void 0&&(G=new en,G.layers.enable(y),G.viewport=new ct,C[y]=G),G.matrix.fromArray(ee.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ee.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(V.x,V.y,V.width,V.height),y===0&&(B.matrix.copy(G.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),_e===!0&&B.cameras.push(G)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const y=h.getDepthInformation(oe[0]);y&&y.isValid&&y.texture&&m.init(y,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let y=0;y<oe.length;y++){const ee=oe[y].camera;if(ee){let V=p[ee];V||(V=new dm,p[ee]=V);const G=h.getCameraImage(ee);V.sourceTexture=G}}}}for(let oe=0;oe<R.length;oe++){const _e=D[oe],be=R[oe];_e!==null&&be!==void 0&&be.update(_e,X,c||a)}Je&&Je(ie,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const nt=new bm;nt.setAnimationLoop(ut),this.setAnimationLoop=function(ie){Je=ie},this.dispose=function(){}}}const rs=new oi,yT=new Ye;function MT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,am(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,rs.copy(x),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(yT.makeRotationFromEuler(rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ST(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;i.uniformBlockBinding(M,x)}function c(M,S){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const R=S.program;i.updateUBOMapping(M,R);const D=e.render.frame;r[M.id]!==D&&(f(M),r[M.id]=D)}function u(M){const S=h();M.__bindingPointIndex=S;const x=n.createBuffer(),R=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=s[M.id],x=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,P=x.length;D<P;D++){const L=Array.isArray(x[D])?x[D]:[x[D]];for(let E=0,v=L.length;E<v;E++){const C=L[E];if(d(C,D,E,R)===!0){const B=C.__offset,K=Array.isArray(C.value)?C.value:[C.value];let se=0;for(let ne=0;ne<K.length;ne++){const Q=K[ne],k=_(Q);typeof Q=="number"||typeof Q=="boolean"?(C.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,B+se,C.__data)):Q.isMatrix3?(C.__data[0]=Q.elements[0],C.__data[1]=Q.elements[1],C.__data[2]=Q.elements[2],C.__data[3]=0,C.__data[4]=Q.elements[3],C.__data[5]=Q.elements[4],C.__data[6]=Q.elements[5],C.__data[7]=0,C.__data[8]=Q.elements[6],C.__data[9]=Q.elements[7],C.__data[10]=Q.elements[8],C.__data[11]=0):(Q.toArray(C.__data,se),se+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,S,x,R){const D=M.value,P=S+"_"+x;if(R[P]===void 0)return typeof D=="number"||typeof D=="boolean"?R[P]=D:R[P]=D.clone(),!0;{const L=R[P];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return R[P]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function g(M){const S=M.uniforms;let x=0;const R=16;for(let P=0,L=S.length;P<L;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let v=0,C=E.length;v<C;v++){const B=E[v],K=Array.isArray(B.value)?B.value:[B.value];for(let se=0,ne=K.length;se<ne;se++){const Q=K[se],k=_(Q),N=x%R,le=N%k.boundary,ve=N+le;x+=le,ve!==0&&R-ve<k.storage&&(x+=R-ve),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=k.storage}}}const D=x%R;return D>0&&(x+=R-D),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ET{constructor(e={}){const{canvas:t=Sv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=kt;let D=0,P=0,L=null,E=-1,v=null;const C=new ct,B=new ct;let K=null;const se=new Ge(0);let ne=0,Q=t.width,k=t.height,N=1,le=null,ve=null;const we=new ct(0,0,Q,k),Fe=new ct(0,0,Q,k);let Je=!1;const ut=new ku;let nt=!1,ie=!1;const X=new Ye,oe=new F,_e=new ct,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function I(){return L===null?N:1}let y=i;function ee(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),y===null){const H="webgl2";if(y=ee(H,T),y===null)throw ee(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let V,G,Y,ae,$,W,ye,ue,A,b,O,j,te,q,Ee,he,Ae,Re,fe,ge,Ne,Le,Me,qe;function U(){V=new NS(y),V.init(),Le=new gT(y,V),G=new wS(y,V,e,Le),Y=new pT(y,V),G.reversedDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),ae=new OS(y),$=new tT,W=new mT(y,V,Y,$,G,Le,ae),ye=new CS(x),ue=new IS(x),A=new G0(y),Me=new TS(y,A),b=new US(y,A,ae,Me),O=new BS(y,b,A,ae),fe=new kS(y,G,W),he=new RS($),j=new eT(x,ye,ue,V,G,Me,he),te=new MT(x,$),q=new iT,Ee=new cT(V),Re=new ES(x,ye,ue,Y,O,d,l),Ae=new fT(x,O,G),qe=new ST(y,ae,G,Y),ge=new AS(y,V,ae),Ne=new FS(y,V,ae),ae.programs=j.programs,x.capabilities=G,x.extensions=V,x.properties=$,x.renderLists=q,x.shadowMap=Ae,x.state=Y,x.info=ae}U();const me=new vT(x,y);this.xr=me,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=V.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=V.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(Q,k,!1))},this.getSize=function(T){return T.set(Q,k)},this.setSize=function(T,H,J=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,k=H,t.width=Math.floor(T*N),t.height=Math.floor(H*N),J===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Q*N,k*N).floor()},this.setDrawingBufferSize=function(T,H,J){Q=T,k=H,N=J,t.width=Math.floor(T*J),t.height=Math.floor(H*J),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,H,J,Z){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,H,J,Z),Y.viewport(C.copy(we).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,H,J,Z){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,H,J,Z),Y.scissor(B.copy(Fe).multiplyScalar(N).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){Y.setScissorTest(Je=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,J=!0){let Z=0;if(T){let z=!1;if(L!==null){const pe=L.texture.format;z=pe===Du||pe===Pu||pe===Cu}if(z){const pe=L.texture.type,Te=pe===ai||pe===xs||pe===Jr||pe===Zr||pe===Au||pe===wu,De=Re.getClearColor(),Ce=Re.getClearAlpha(),He=De.r,Ve=De.g,Oe=De.b;Te?(g[0]=He,g[1]=Ve,g[2]=Oe,g[3]=Ce,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=Oe,_[3]=Ce,y.clearBufferiv(y.COLOR,0,_))}else Z|=y.COLOR_BUFFER_BIT}H&&(Z|=y.DEPTH_BUFFER_BIT),J&&(Z|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Re.dispose(),q.dispose(),Ee.dispose(),$.dispose(),ye.dispose(),ue.dispose(),O.dispose(),Me.dispose(),qe.dispose(),j.dispose(),me.dispose(),me.removeEventListener("sessionstart",Vn),me.removeEventListener("sessionend",qu),$i.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ae.autoReset,H=Ae.enabled,J=Ae.autoUpdate,Z=Ae.needsUpdate,z=Ae.type;U(),ae.autoReset=T,Ae.enabled=H,Ae.autoUpdate=J,Ae.needsUpdate=Z,Ae.type=z}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const H=T.target;H.removeEventListener("dispose",re),Ie(H)}function Ie(T){We(T),$.remove(T)}function We(T){const H=$.get(T).programs;H!==void 0&&(H.forEach(function(J){j.releaseProgram(J)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,J,Z,z,pe){H===null&&(H=be);const Te=z.isMesh&&z.matrixWorld.determinant()<0,De=Am(T,H,J,Z,z);Y.setMaterial(Z,Te);let Ce=J.index,He=1;if(Z.wireframe===!0){if(Ce=b.getWireframeAttribute(J),Ce===void 0)return;He=2}const Ve=J.drawRange,Oe=J.attributes.position;let tt=Ve.start*He,mt=(Ve.start+Ve.count)*He;pe!==null&&(tt=Math.max(tt,pe.start*He),mt=Math.min(mt,(pe.start+pe.count)*He)),Ce!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Ce.count)):Oe!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Oe.count));const wt=mt-tt;if(wt<0||wt===1/0)return;Me.setup(z,Z,De,J,Ce);let St,xt=ge;if(Ce!==null&&(St=A.get(Ce),xt=Ne,xt.setIndex(St)),z.isMesh)Z.wireframe===!0?(Y.setLineWidth(Z.wireframeLinewidth*I()),xt.setMode(y.LINES)):xt.setMode(y.TRIANGLES);else if(z.isLine){let Be=Z.linewidth;Be===void 0&&(Be=1),Y.setLineWidth(Be*I()),z.isLineSegments?xt.setMode(y.LINES):z.isLineLoop?xt.setMode(y.LINE_LOOP):xt.setMode(y.LINE_STRIP)}else z.isPoints?xt.setMode(y.POINTS):z.isSprite&&xt.setMode(y.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))xt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Be=z._multiDrawStarts,Tt=z._multiDrawCounts,st=z._multiDrawCount,un=Ce?A.get(Ce).bytesPerElement:1,Ss=$.get(Z).currentProgram.getUniforms();for(let hn=0;hn<st;hn++)Ss.setValue(y,"_gl_DrawID",hn),xt.render(Be[hn]/un,Tt[hn])}else if(z.isInstancedMesh)xt.renderInstances(tt,wt,z.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,Be);xt.renderInstances(tt,wt,Tt)}else xt.render(tt,wt)};function yt(T,H,J){T.transparent===!0&&T.side===Sn&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,ga(T,H,J),T.side=wi,T.needsUpdate=!0,ga(T,H,J),T.side=Sn):ga(T,H,J)}this.compile=function(T,H,J=null){J===null&&(J=T),p=Ee.get(J),p.init(H),S.push(p),J.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==J&&T.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Z=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const De=pe[Te];yt(De,J,z),Z.add(De)}else yt(pe,J,z),Z.add(pe)}),p=S.pop(),Z},this.compileAsync=function(T,H,J=null){const Z=this.compile(T,H,J);return new Promise(z=>{function pe(){if(Z.forEach(function(Te){$.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){z(T);return}setTimeout(pe,10)}V.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ht=null;function ui(T){ht&&ht(T)}function Vn(){$i.stop()}function qu(){$i.start()}const $i=new bm;$i.setAnimationLoop(ui),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(T){ht=T,me.setAnimationLoop(T),T===null?$i.stop():$i.start()},me.addEventListener("sessionstart",Vn),me.addEventListener("sessionend",qu),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,L),p=Ee.get(T,S.length),p.init(H),S.push(p),X.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ut.setFromProjectionMatrix(X,$n,H.reversedDepth),ie=this.localClippingEnabled,nt=he.init(this.clippingPlanes,ie),m=q.get(T,M.length),m.init(),M.push(m),me.enabled===!0&&me.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&$o(pe,H,-1/0,x.sortObjects)}$o(T,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,ve),w=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,w&&Re.addToRenderList(m,T),this.info.render.frame++,nt===!0&&he.beginShadows();const J=p.state.shadowsArray;Ae.render(J,T,H),nt===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,z=m.transmissive;if(p.setupLights(),H.isArrayCamera){const pe=H.cameras;if(z.length>0)for(let Te=0,De=pe.length;Te<De;Te++){const Ce=pe[Te];Yu(Z,z,T,Ce)}w&&Re.render(T);for(let Te=0,De=pe.length;Te<De;Te++){const Ce=pe[Te];Ku(m,T,Ce,Ce.viewport)}}else z.length>0&&Yu(Z,z,T,H),w&&Re.render(T),Ku(m,T,H);L!==null&&P===0&&(W.updateMultisampleRenderTarget(L),W.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,H),Me.resetDefaultState(),E=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function $o(T,H,J,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ut.intersectsSprite(T)){Z&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Te=O.update(T),De=T.material;De.visible&&m.push(T,Te,De,J,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ut.intersectsObject(T))){const Te=O.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),_e.copy(Te.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(De)){const Ce=Te.groups;for(let He=0,Ve=Ce.length;He<Ve;He++){const Oe=Ce[He],tt=De[Oe.materialIndex];tt&&tt.visible&&m.push(T,Te,tt,J,_e.z,Oe)}}else De.visible&&m.push(T,Te,De,J,_e.z,null)}}const pe=T.children;for(let Te=0,De=pe.length;Te<De;Te++)$o(pe[Te],H,J,Z)}function Ku(T,H,J,Z){const z=T.opaque,pe=T.transmissive,Te=T.transparent;p.setupLightsView(J),nt===!0&&he.setGlobalState(x.clippingPlanes,J),Z&&Y.viewport(C.copy(Z)),z.length>0&&ma(z,H,J),pe.length>0&&ma(pe,H,J),Te.length>0&&ma(Te,H,J),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Yu(T,H,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new vs(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?fa:ai,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],Te=Z.viewport||C;pe.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);const De=x.getRenderTarget(),Ce=x.getActiveCubeFace(),He=x.getActiveMipmapLevel();x.setRenderTarget(pe),x.getClearColor(se),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),w&&Re.render(J);const Ve=x.toneMapping;x.toneMapping=Xi;const Oe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),nt===!0&&he.setGlobalState(x.clippingPlanes,Z),ma(T,J,Z),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),V.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let mt=0,wt=H.length;mt<wt;mt++){const St=H[mt],xt=St.object,Be=St.geometry,Tt=St.material,st=St.group;if(Tt.side===Sn&&xt.layers.test(Z.layers)){const un=Tt.side;Tt.side=cn,Tt.needsUpdate=!0,$u(xt,J,Z,Be,Tt,st),Tt.side=un,Tt.needsUpdate=!0,tt=!0}}tt===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}x.setRenderTarget(De,Ce,He),x.setClearColor(se,ne),Oe!==void 0&&(Z.viewport=Oe),x.toneMapping=Ve}function ma(T,H,J){const Z=H.isScene===!0?H.overrideMaterial:null;for(let z=0,pe=T.length;z<pe;z++){const Te=T[z],De=Te.object,Ce=Te.geometry,He=Te.group;let Ve=Te.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),De.layers.test(J.layers)&&$u(De,H,J,Ce,Ve,He)}}function $u(T,H,J,Z,z,pe){T.onBeforeRender(x,H,J,Z,z,pe),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,H,J,Z,T,pe),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,x.renderBufferDirect(J,H,Z,z,T,pe),z.side=wi,z.needsUpdate=!0,x.renderBufferDirect(J,H,Z,z,T,pe),z.side=Sn):x.renderBufferDirect(J,H,Z,z,T,pe),T.onAfterRender(x,H,J,Z,z,pe)}function ga(T,H,J){H.isScene!==!0&&(H=be);const Z=$.get(T),z=p.state.lights,pe=p.state.shadowsArray,Te=z.state.version,De=j.getParameters(T,z.state,pe,H,J),Ce=j.getProgramCacheKey(De);let He=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?ue:ye).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",re),He=new Map,Z.programs=He);let Ve=He.get(Ce);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Te)return Zu(T,De),Ve}else De.uniforms=j.getUniforms(T),T.onBeforeCompile(De,x),Ve=j.acquireProgram(De,Ce),He.set(Ce,Ve),Z.uniforms=De.uniforms;const Oe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=he.uniform),Zu(T,De),Z.needsLights=Rm(T),Z.lightsStateVersion=Te,Z.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function Ju(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=uo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Zu(T,H){const J=$.get(T);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Am(T,H,J,Z,z){H.isScene!==!0&&(H=be),W.resetTextureUnits();const pe=H.fog,Te=Z.isMeshStandardMaterial?H.environment:null,De=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:an,Ce=(Z.isMeshStandardMaterial?ue:ye).get(Z.envMap||Te),He=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,mt=!!J.morphAttributes.color;let wt=Xi;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(wt=x.toneMapping);const St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=St!==void 0?St.length:0,Be=$.get(Z),Tt=p.state.lights;if(nt===!0&&(ie===!0||T!==v)){const Kt=T===v&&Z.id===E;he.setState(Z,T,Kt)}let st=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Tt.state.version||Be.outputColorSpace!==De||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isBatchedMesh&&Be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==Ce||Z.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==tt||Be.morphColors!==mt||Be.toneMapping!==wt||Be.morphTargetsCount!==xt)&&(st=!0):(st=!0,Be.__version=Z.version);let un=Be.currentProgram;st===!0&&(un=ga(Z,H,z));let Ss=!1,hn=!1,dr=!1;const At=un.getUniforms(),xn=Be.uniforms;if(Y.useProgram(un.program)&&(Ss=!0,hn=!0,dr=!0),Z.id!==E&&(E=Z.id,hn=!0),Ss||v!==T){Y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(y,"projectionMatrix",T.projectionMatrix),At.setValue(y,"viewMatrix",T.matrixWorldInverse);const on=At.map.cameraPosition;on!==void 0&&on.setValue(y,oe.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&At.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,hn=!0,dr=!0)}if(z.isSkinnedMesh){At.setOptional(y,z,"bindMatrix"),At.setOptional(y,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),At.setValue(y,"boneTexture",Kt.boneTexture,W))}z.isBatchedMesh&&(At.setOptional(y,z,"batchingTexture"),At.setValue(y,"batchingTexture",z._matricesTexture,W),At.setOptional(y,z,"batchingIdTexture"),At.setValue(y,"batchingIdTexture",z._indirectTexture,W),At.setOptional(y,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(y,"batchingColorTexture",z._colorsTexture,W));const vn=J.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&fe.update(z,J,un),(hn||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,At.setValue(y,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(xn.envMap.value=Ce,xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(xn.envMapIntensity.value=H.environmentIntensity),hn&&(At.setValue(y,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&wm(xn,dr),pe&&Z.fog===!0&&te.refreshFogUniforms(xn,pe),te.refreshMaterialUniforms(xn,Z,N,k,p.state.transmissionRenderTarget[T.id]),uo.upload(y,Ju(Be),xn,W)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(uo.upload(y,Ju(Be),xn,W),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(y,"center",z.center),At.setValue(y,"modelViewMatrix",z.modelViewMatrix),At.setValue(y,"normalMatrix",z.normalMatrix),At.setValue(y,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kt=Z.uniformsGroups;for(let on=0,Jo=Kt.length;on<Jo;on++){const Ji=Kt[on];qe.update(Ji,un),qe.bind(Ji,un)}}return un}function wm(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Rm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,H,J){const Z=$.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=H,$.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const J=$.get(T);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const Cm=y.createFramebuffer();this.setRenderTarget=function(T,H=0,J=0){L=T,D=H,P=J;let Z=!0,z=null,pe=!1,Te=!1;if(T){const Ce=$.get(T);if(Ce.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(y.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Ce.__hasExternalTextures)W.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(Ce.__boundDepthTexture!==Oe){if(Oe!==null&&$.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ve=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?z=Ve[H][J]:z=Ve[H],pe=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?z=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[J]:z=Ve,C.copy(T.viewport),B.copy(T.scissor),K=T.scissorTest}else C.copy(we).multiplyScalar(N).floor(),B.copy(Fe).multiplyScalar(N).floor(),K=Je;if(J!==0&&(z=Cm),Y.bindFramebuffer(y.FRAMEBUFFER,z)&&Z&&Y.drawBuffers(T,z),Y.viewport(C),Y.scissor(B),Y.setScissorTest(K),pe){const Ce=$.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,J)}else if(Te){const Ce=H;for(let He=0;He<T.textures.length;He++){const Ve=$.get(T.textures[He]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+He,Ve.__webglTexture,J,Ce)}}else if(T!==null&&J!==0){const Ce=$.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ce.__webglTexture,J)}E=-1},this.readRenderTargetPixels=function(T,H,J,Z,z,pe,Te,De=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Y.bindFramebuffer(y.FRAMEBUFFER,Ce);try{const He=T.textures[De],Ve=He.format,Oe=He.type;if(!G.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&J>=0&&J<=T.height-z&&(T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(H,J,Z,z,Le.convert(Ve),Le.convert(Oe),pe))}finally{const He=L!==null?$.get(L).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,H,J,Z,z,pe,Te,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(H>=0&&H<=T.width-Z&&J>=0&&J<=T.height-z){Y.bindFramebuffer(y.FRAMEBUFFER,Ce);const He=T.textures[De],Ve=He.format,Oe=He.type;if(!G.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.bufferData(y.PIXEL_PACK_BUFFER,pe.byteLength,y.STREAM_READ),T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+De),y.readPixels(H,J,Z,z,Le.convert(Ve),Le.convert(Oe),0);const mt=L!==null?$.get(L).__webglFramebuffer:null;Y.bindFramebuffer(y.FRAMEBUFFER,mt);const wt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Ev(y,wt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,pe),y.deleteBuffer(tt),y.deleteSync(wt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,J=0){const Z=Math.pow(2,-J),z=Math.floor(T.image.width*Z),pe=Math.floor(T.image.height*Z),Te=H!==null?H.x:0,De=H!==null?H.y:0;W.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,Te,De,z,pe),Y.unbindTexture()};const Pm=y.createFramebuffer(),Dm=y.createFramebuffer();this.copyTextureToTexture=function(T,H,J=null,Z=null,z=0,pe=null){pe===null&&(z!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=z,z=0):pe=0);let Te,De,Ce,He,Ve,Oe,tt,mt,wt;const St=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(J!==null)Te=J.max.x-J.min.x,De=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,Ve=J.min.y,Oe=J.isBox3?J.min.z:0;else{const vn=Math.pow(2,-z);Te=Math.floor(St.width*vn),De=Math.floor(St.height*vn),T.isDataArrayTexture?Ce=St.depth:T.isData3DTexture?Ce=Math.floor(St.depth*vn):Ce=1,He=0,Ve=0,Oe=0}Z!==null?(tt=Z.x,mt=Z.y,wt=Z.z):(tt=0,mt=0,wt=0);const xt=Le.convert(H.format),Be=Le.convert(H.type);let Tt;H.isData3DTexture?(W.setTexture3D(H,0),Tt=y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(W.setTexture2DArray(H,0),Tt=y.TEXTURE_2D_ARRAY):(W.setTexture2D(H,0),Tt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,H.unpackAlignment);const st=y.getParameter(y.UNPACK_ROW_LENGTH),un=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ss=y.getParameter(y.UNPACK_SKIP_PIXELS),hn=y.getParameter(y.UNPACK_SKIP_ROWS),dr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,He),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ve),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Oe);const At=T.isDataArrayTexture||T.isData3DTexture,xn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const vn=$.get(T),Kt=$.get(H),on=$.get(vn.__renderTarget),Jo=$.get(Kt.__renderTarget);Y.bindFramebuffer(y.READ_FRAMEBUFFER,on.__webglFramebuffer),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let Ji=0;Ji<Ce;Ji++)At&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,$.get(T).__webglTexture,z,Oe+Ji),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,$.get(H).__webglTexture,pe,wt+Ji)),y.blitFramebuffer(He,Ve,Te,De,tt,mt,Te,De,y.DEPTH_BUFFER_BIT,y.NEAREST);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||$.has(T)){const vn=$.get(T),Kt=$.get(H);Y.bindFramebuffer(y.READ_FRAMEBUFFER,Pm),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,Dm);for(let on=0;on<Ce;on++)At?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,vn.__webglTexture,z,Oe+on):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,vn.__webglTexture,z),xn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Kt.__webglTexture,pe,wt+on):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Kt.__webglTexture,pe),z!==0?y.blitFramebuffer(He,Ve,Te,De,tt,mt,Te,De,y.COLOR_BUFFER_BIT,y.NEAREST):xn?y.copyTexSubImage3D(Tt,pe,tt,mt,wt+on,He,Ve,Te,De):y.copyTexSubImage2D(Tt,pe,tt,mt,He,Ve,Te,De);Y.bindFramebuffer(y.READ_FRAMEBUFFER,null),Y.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Tt,pe,tt,mt,wt,Te,De,Ce,xt,Be,St.data):H.isCompressedArrayTexture?y.compressedTexSubImage3D(Tt,pe,tt,mt,wt,Te,De,Ce,xt,St.data):y.texSubImage3D(Tt,pe,tt,mt,wt,Te,De,Ce,xt,Be,St):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,pe,tt,mt,Te,De,xt,Be,St.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,pe,tt,mt,St.width,St.height,xt,St.data):y.texSubImage2D(y.TEXTURE_2D,pe,tt,mt,Te,De,xt,Be,St);y.pixelStorei(y.UNPACK_ROW_LENGTH,st),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,un),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ss),y.pixelStorei(y.UNPACK_SKIP_ROWS,hn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,dr),pe===0&&H.generateMipmaps&&y.generateMipmap(Tt),Y.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,Y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function ld(n,e){if(e===$x)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Jc||e===Zp){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Jc)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class TT extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Vr.extractUrlBase(e);a=Vr.resolveURL(c,this.path)}else a=Vr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sm){try{a[et.KHR_BINARY_GLTF]=new jT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:a[h]=new RT;break;case et.KHR_DRACO_MESH_COMPRESSION:a[h]=new XT(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:a[h]=new qT;break;case et.KHR_MESH_QUANTIZATION:a[h]=new KT;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function AT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wT{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _m(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new A0(u),c.distance=h;break;case"spot":c=new E0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class RT{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,i){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}}class CT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class LT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class IT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,kt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class FT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class OT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,kt)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zT{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class VT{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class GT{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class WT{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ye,m=new F,p=new Hn,M=new F(1,1,1),S=new e0(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,_.compose(m,p,M));for(const x in l)if(x==="_COLOR_0"){const R=l[x];S.instanceColor=new Qc(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Et.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Sm="glTF",Tr=12,cd={JSON:1313821514,BIN:5130562};class jT{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Tr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Tr,r=new DataView(e,Tr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===cd.JSON){const c=new Uint8Array(e,Tr+a,o);this.content=i.decode(c)}else if(l===cd.BIN){const c=Tr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=iu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=iu[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],d=$s[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},o,c,an,f)})})}}class qT{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KT{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Em extends pa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,M=1-m,S=p-f+h;for(let x=0;x!==o;x++){const R=a[_+x+o],D=a[_+x+l]*u,P=a[g+x+o],L=a[g+x]*u;r[x]=M*R+S*D+m*P+p*L}return r}}const YT=new Hn;class $T extends Em{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return YT.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ud={9728:nn,9729:gn,9984:Wp,9985:ro,9986:Rr,9987:Ei},hd={33071:Vi,33648:Eo,10497:nr},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JT={CUBICSPLINE:void 0,LINEAR:na,STEP:ta},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new qo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),n.DefaultMaterial}function as(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function eA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tA(n){let e;const t=n.extensions&&n.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jl(t.attributes):e=n.indices+":"+Jl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Jl(n.targets[i]);return e}function Jl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function su(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iA=new Ye;class sA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new M0(this.options.manager):this.textureLoader=new R0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return as(r,o,s),Wn(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Vr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Yl[s.type],o=$s[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new sn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Yl[s.type],c=$s[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(M);S||(_=new c(o,p*d,s.count*d/u),S=new Yv(_,d/u),t.cache.add(M,S)),m=new Fu(S,l,f%d/u,g)}else o===null?_=new c(s.count*l):_=new c(o,f,s.count*l),m=new sn(_,l,g);if(s.sparse!==void 0){const p=Yl.SCALAR,M=$s[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new M(a[1],S,s.sparse.count*p),D=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,L=R.length;P<L;P++){const E=R[P];if(m.setX(E,D[P*l]),l>=2&&m.setY(E,D[P*l+1]),l>=3&&m.setZ(E,D[P*l+2]),l>=4&&m.setW(E,D[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=ud[f.magFilter]||gn,u.minFilter=ud[f.minFilter]||Ei,u.wrapS=hd[f.wrapS]||nr,u.wrapT=hd[f.wrapT]||nr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==gn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ht(_);m.needsUpdate=!0,f(m)}),t.load(Vr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Wn(h,a),h.userData.mimeType=a.mimeType||nA(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new hm,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new jo,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return qo}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=s[et.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],an),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,kt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Sn);const u=r.alphaMode||$l.OPAQUE;if(u===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jn){const h=r.emissiveFactor;o.emissive=new Ge().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==Jn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Wn(h,r),t.associations.set(h,{materials:e}),r.extensions&&as(s,h,r),h})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return fd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=tA(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=fd(new bn,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?ZT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const M=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Jv(_,M):new Bt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=ld(p.geometry,Zp):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=ld(p.geometry,Jc));else if(m.mode===Mn.LINES)p=new Co(_,M);else if(m.mode===Mn.LINE_STRIP)p=new Bu(_,M);else if(m.mode===Mn.LINE_LOOP)p=new s0(_,M);else if(m.mode===Mn.POINTS)p=new r0(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&eA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wn(p,r),m.extensions&&as(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&as(s,h[0],r),h[0];const f=new Gi;r.extensions&&as(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(Iu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Vu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ou(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,x=f.length;S<x;S++){const R=f[S],D=d[S],P=g[S],L=_[S],E=m[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const v=i._createAnimationTracks(R,D,P,L,E);if(v)for(let C=0;C<v.length;C++)p.push(v[C])}const M=new m0(r,void 0,p);return Wn(M,s),M})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,iA)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new cm:c.length>1?u=new Gi:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Wn(u,r),r.extensions&&as(i,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Gi;i.name&&(r.name=s.createUniqueName(i.name)),Wn(r,i),i.extensions&&as(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof ni||f instanceof Ht)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Fi[r.path]===Fi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Fi[r.path]){case Fi.weights:c=rr;break;case Fi.rotation:c=ar;break;case Fi.translation:case Fi.scale:c=or;break;default:i.itemSize===1?c=rr:c=or;break}const u=s.interpolation!==void 0?JT[s.interpolation]:na,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Fi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ar?$T:Em;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rA(n,e,t){const i=e.attributes,s=new Ci;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const u=su($s[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=su($s[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new li;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function fd(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=iu[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return it.workingColorSpace!==an&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Wn(n,e),rA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?QT(n,e.targets,t):n})}var aA=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),S=0;S<p.length;++S){var x=p.charCodeAt(S);M[S]=x>96?x-97:x>64?x-39:x+4}for(var R=0,S=0;S<p.length;++S)M[R++]=M[S]<60?i[M[S]]:(M[S]-60)*64+M[++S];return M.buffer.slice(0,R)}function l(p,M,S,x,R,D,P){var L=p.exports.sbrk,E=x+3&-4,v=L(E*R),C=L(D.length),B=new Uint8Array(p.exports.memory.buffer);B.set(D,C);var K=M(v,x,R,C,D.length);if(K==0&&P&&P(v,E,R),S.set(B.subarray(v,v+x*R)),L(v-L(0)),K!=0)throw new Error("Malformed buffer data: "+K)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(S){var x=S.data;M.pending-=x.count,M.requests[x.id][x.action](x.value),delete M.requests[x.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),S=new Blob([M],{type:"text/javascript"}),x=URL.createObjectURL(S),R=h.length;R<p;++R)h[R]=d(x);for(var R=p;R<h.length;++R)h[R].object.postMessage({});h.length=p,URL.revokeObjectURL(x)}function _(p,M,S,x,R){for(var D=h[0],P=1;P<h.length;++P)h[P].pending<D.pending&&(D=h[P]);return new Promise(function(L,E){var v=new Uint8Array(S),C=++f;D.pending+=p,D.requests[C]={resolve:L,reject:E},D.object.postMessage({id:C,count:p,size:M,source:v,mode:x,filter:R},[v.buffer])})}function m(p){var M=p.data;if(!M.id)return self.close();self.ready.then(function(S){try{var x=new Uint8Array(M.count*M.size);l(S,S.exports[M.mode],x,M.count,M.size,M.source,S.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:x},[x.buffer])}catch(R){self.postMessage({id:M.id,count:M.count,action:"reject",value:R})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,S,x,R){l(r,r.exports.meshopt_decodeVertexBuffer,p,M,S,x,r.exports[c[R]])},decodeIndexBuffer:function(p,M,S,x){l(r,r.exports.meshopt_decodeIndexBuffer,p,M,S,x)},decodeIndexSequence:function(p,M,S,x){l(r,r.exports.meshopt_decodeIndexSequence,p,M,S,x)},decodeGltfBuffer:function(p,M,S,x,R,D){l(r,r.exports[u[R]],p,M,S,x,r.exports[c[D]])},decodeGltfBufferAsync:function(p,M,S,x,R){return h.length>0?_(p,M,S,u[x],c[R]):a.then(function(){var D=new Uint8Array(p*M);return l(r,r.exports[u[x]],D,p,M,S,r.exports[c[R]]),D})}}})();const dd={type:"change"},Xu={type:"start"},Tm={type:"end"},Qa=new lr,pd=new Hi,oA=Math.cos(70*Iu.DEG2RAD),Lt=new F,ln=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zl=1e-6;class lA extends z0{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Hn,this._lastTargetPosition=new F,this._quat=new Hn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new F,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new F,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uA.bind(this),this._onPointerDown=cA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=bA.bind(this),this._onMouseWheel=pA.bind(this),this._onKeyDown=mA.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=_A.bind(this),this._onMouseDown=fA.bind(this),this._onMouseMove=dA.bind(this),this._interceptControlDown=xA.bind(this),this._interceptControlUp=vA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dd),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Lt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<oA?this.object.lookAt(this.target):(pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(pd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zl||this._lastTargetPosition.distanceToSquared(this.target)>Zl?(this.dispatchEvent(dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function uA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tm),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fA(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Xu)}function dA(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pA(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(Xu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tm))}function mA(n){this.enabled!==!1&&this._handleKeyDown(n)}function gA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Xu)}function _A(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function bA(n){this.enabled!==!1&&n.preventDefault()}function xA(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yA(n,e,t={}){if(!new URLSearchParams(location.search).has("perf"))return{enabled:!1,mark(L){},markView(L){},loaded(){},frame(L,E,v,C,B){},dispose(){}};const i=performance.now(),s={};let r=0,a=0,o=!1,l=0,c=0,u="perspective";const h=[],f=()=>{a=0,o=!1};document.addEventListener("visibilitychange",f);const d=document.createElement("details");d.id="v8-performance-panel",d.style.cssText="position:absolute;right:8px;top:8px;width:min(320px,95%);max-height:45%;overflow:auto;overscroll-behavior:contain;background:#ffffffed;font:11px sans-serif;padding:8px;z-index:5;pointer-events:auto";const g=document.createElement("summary");g.textContent="性能记录 · 点击展开",d.appendChild(g);const _=document.createElement("label");_.textContent="设备型号 ";const m=document.createElement("input");m.placeholder="例如 iPhone 15 / Android机型",m.style.cssText="width:100%;font-size:16px",_.appendChild(m),d.appendChild(_);const p=document.createElement("button");p.textContent="重置采样",p.onclick=()=>{h.length=0,a=0,o=!1,l=0,c=0},d.appendChild(p);const M=document.createElement("button");M.textContent="导出测量JSON",M.style.cssText="margin:6px 0",d.appendChild(M);const S=document.createElement("pre");S.id="v8-performance",S.setAttribute("aria-label","性能测量数据"),S.style.cssText="white-space:pre-wrap;font:10px monospace;margin:0",d.appendChild(S),n.appendChild(d),M.onclick=()=>{const L=JSON.parse(S.textContent||"{}");L.deviceLabel=m.value,L.exportedAt=new Date().toISOString();const E=URL.createObjectURL(new Blob([JSON.stringify(L,null,2)],{type:"application/json"})),v=document.createElement("a");v.href=E,v.download="v8-phone-"+Date.now()+".json",v.click(),setTimeout(()=>URL.revokeObjectURL(E),1e3)};const x=(L,E)=>{const v=[...L].sort((C,B)=>C-B);return v.length?Math.round(v[Math.min(v.length-1,Math.floor(v.length*E))]*100)/100:null},R=L=>{s[L]=Math.round((performance.now()-i)*100)/100};function D(){const L=v=>({averageActiveFPS:v.some(C=>C.gap>0)?Math.round(v.filter(C=>C.gap>0).length*1e4/v.reduce((C,B)=>C+B.gap,0))/10:null,frames:v.length,rafGapP50Ms:x(v.filter(C=>C.gap>0).map(C=>C.gap),.5),rafGapP95Ms:x(v.filter(C=>C.gap>0).map(C=>C.gap),.95),cpuP95Ms:x(v.map(C=>C.cpu),.95),over33ms:v.filter(C=>C.gap>33.34).length,over50ms:v.filter(C=>C.gap>50).length}),E=performance.getEntriesByType("resource").filter(v=>/\.glb|fbx|door-cavity/.test(v.name)&&["fetch","xmlhttprequest"].includes(v.initiatorType)).map(v=>{const C=v;return{url:new URL(C.name).pathname,durationMs:Math.round(C.duration),transferSize:C.transferSize,encodedBodySize:C.encodedBodySize,decodedBodySize:C.decodedBodySize}});S.textContent=JSON.stringify({kind:"browser-render-profile",config:t,view:u,device:{userAgent:navigator.userAgent,platform:navigator.platform,touchPoints:navigator.maxTouchPoints,secureContext:window.isSecureContext,microphoneAvailable:!!navigator.mediaDevices?.getUserMedia},readyMs:s.ready??null,timings:s,elapsedMs:Math.round(performance.now()-i),renderedFrames:l,lastFrameAgeMs:c?Math.round(performance.now()-c):null,viewport:{width:n.clientWidth,height:n.clientHeight,dpr:devicePixelRatio,renderPixelRatio:e.getPixelRatio(),bufferWidth:e.domElement.width,bufferHeight:e.domElement.height},drawCalls:e.info.render.calls,submittedTriangles:e.info.render.triangles,geometryCount:e.info.memory.geometries,textureCount:e.info.memory.textures,programCount:e.info.programs?.length,idle:L(h.filter(v=>!v.moving&&!v.camera)),camera:L(h.filter(v=>v.camera&&!v.moving)),moving:L(h.filter(v=>v.moving)),resources:E,note:"Device browser measurement; CPU duration is not GPU time. Static scenes pause drawing. Measure averageActiveFPS while rotating or animating; export the JSON after each scenario."},null,2)}const P=setInterval(D,1e3);return{enabled:!0,mark:R,markView(L){u=L,h.length=0,a=0},loaded(){r=performance.now(),R("ready"),h.length=0,a=0,D()},frame(L,E,v,C=!1,B=!1){if(!r)return;"firstFrame"in s||R("firstFrame");const K=a&&o?L-a:0;o=C,document.visibilityState==="visible"&&h.push({gap:K,cpu:performance.now()-E,moving:v,camera:B}),a=L,c=performance.now(),l++,h.length>1800&&h.shift()},dispose(){clearInterval(P),document.removeEventListener("visibilitychange",f),d.remove()}}}function MA(n,e=!1,t=requestAnimationFrame,i=cancelAnimationFrame){let s=0,r=null,a=!1,o=!1;function l(){!a&&!o&&!s&&(s=t(c))}function c(u){if(s=0,a||o)return;const h=r===null?0:Math.min(Math.max((u-r)/1e3,0),.1);r=u,n(u,h)||e?l():s||(r=null)}return{invalidate:l,visibility(u){o=u,s&&(i(s),s=0),r=null,o||l()},dispose(){a=!0,s&&i(s),s=0}}}function SA(n){let e;const t=ms(()=>[n.dialogueContext?.expiresAt,n.pendingAction?.expiresAt,n.pendingBatch?.expiresAt],i=>{clearTimeout(e);const s=Math.min(...i.filter(r=>r!==void 0));Number.isFinite(s)&&(e=setTimeout(()=>n.expireDialogue(),Math.max(0,s-Date.now())+1))},{immediate:!0,flush:"sync"});return()=>{t(),clearTimeout(e)}}function EA(n,e,t){const i=new URLSearchParams(location.search),s=Hr,r=i.get("loop")==="continuous",a=["high","balanced","low"].includes(i.get("quality")??"")?i.get("quality"):matchMedia("(pointer:coarse)").matches?"balanced":"high",o={high:2,balanced:1.25,low:1}[a],l=new ET({antialias:a!=="low"});l.setPixelRatio(Math.min(devicePixelRatio,o)),l.setClearColor(15331053),l.outputColorSpace=kt,l.toneMapping=Vp,l.toneMappingExposure=1.3,n.appendChild(l.domElement);const c=yA(n,l,{asset:"glb",quality:a,loop:r?"continuous":"demand"}),u=new pf,h=new en(38,1,.01,100),f=new lA(h,l.domElement);f.enableDamping=!0,f.minDistance=.2,f.maxDistance=12,f.maxPolarAngle=Math.PI*.49,f.target.set(-.15,.85,0),h.position.set(6,3.2,-6),u.add(new Pf(16777215,6782073,2.8));for(const[X,oe,_e,be]of[[3,5,-4,3],[-4,3,3,2],[0,4,1,1.5]]){const w=new _m(16777215,be);w.position.set(X,oe,_e),u.add(w)}const d=new Bt(new Hu(8,80),new qo({color:14476257,roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=-.015,u.add(d);const g=new H0(14,28,12897995,14015962);g.position.y=-.01,u.add(g);const _=new Map,m=[];let p,M=!1,S=!1,x,R,D=ti;const P=new Hn,L=new F(1,0,0),E=new F,v=()=>jt.some(X=>Math.abs(e.windows[X].target-e.windows[X].current)>1e-5),C=MA((X,oe)=>{if(M)return!1;const _e=performance.now(),be=v();_.size===4&&(be||e.playing)&&e.tick(oe);for(const[y,ee]of _){const V=e.windows[y].current,G=e.selected===y||Math.abs(e.windows[y].target-V)>1e-4;if(V!==ee.open){const Y=Sb(D[y].keyframes,V);P.setFromAxisAngle(L,Iu.degToRad(Y.rotationX)),ee.mesh.quaternion.copy(P).multiply(ee.rotation),ee.mesh.position.copy(ee.initial).sub(ee.pivot).applyQuaternion(P).add(ee.pivot).add(E.fromArray(Y.offset)),ee.open=V}G!==ee.highlight&&(ee.outline.visible=G,ee.highlight=G)}if(R){const y=_.get("FL").mesh;R.position.copy(y.position),R.quaternion.copy(y.quaternion)}const w=f.update();l.render(S&&x?x:u,h);const I=v()||e.playing||w;return c.frame(X,_e,be,I,w),I},r),B=()=>C.invalidate();f.addEventListener("change",B),f.addEventListener("start",B),f.addEventListener("end",B);const K=ms(()=>[e.selected,e.playing,...jt.flatMap(X=>[e.windows[X].target,e.windows[X].current])],B,{flush:"sync"}),se=SA(e),ne=()=>{e.expireDialogue(),C.visibility(document.hidden)};document.addEventListener("visibilitychange",ne),C.visibility(document.hidden);const Q=()=>{const{width:X,height:oe}=n.getBoundingClientRect();l.setPixelRatio(Math.min(devicePixelRatio,o)),l.setSize(X,oe),h.aspect=X/Math.max(oe,1),h.updateProjectionMatrix(),B()},k=new ResizeObserver(Q);k.observe(n),window.addEventListener("resize",Q),Q();const N=X=>{le=[X.clientX,X.clientY]};let le=[0,0];const ve=X=>{if(Math.hypot(X.clientX-le[0],X.clientY-le[1])>5)return;const oe=l.domElement.getBoundingClientRect(),_e=new B0;_e.layers.set(1),_e.setFromCamera(new ze((X.clientX-oe.left)/oe.width*2-1,-(X.clientY-oe.top)/oe.height*2+1),h);const be=_e.intersectObjects(m,!1)[0];be&&e.selectWindow(be.object.userData.windowId)};l.domElement.addEventListener("pointerdown",N),l.domElement.addEventListener("pointerup",ve);const we=new AbortController;async function Fe(X){const oe=await fetch(X,{signal:we.signal});if(!oe.ok)throw new Error(`模型请求失败 ${oe.status}`);return oe.arrayBuffer()}async function Je(){try{let X;t("正在加载车模…");{c.mark("loaderReady");const oe=await Fe(Bp("models/v8-working.glb"));c.mark("downloaded"),X=(await new TT().setMeshoptDecoder(aA).parseAsync(oe,"")).scene,c.mark("parsed")}if(M){ie(X);return}p=X,p.scale.setScalar(.01),u.add(p),p.updateMatrixWorld(!0);for(const oe of[...jt.map(_e=>ti[_e].node),...Mb])if(!p.getObjectByName(oe))throw new Error("模型节点缺失："+oe);p.traverse(oe=>{if(oe instanceof Bt)for(const _e of Array.isArray(oe.material)?oe.material:[oe.material])_e.transparent&&(_e.depthWrite=!1)});for(const oe of jt){const _e=p.getObjectByName(ti[oe].node);_e.geometry.computeBoundingBox();const be=_e.geometry.boundingBox.getCenter(new F).applyMatrix4(_e.matrix),w=new Co(new a0(_e.geometry,30),new jo({color:41869}));w.visible=!1,_e.add(w),_.set(oe,{mesh:_e,pivot:be,initial:_e.position.clone(),rotation:_e.quaternion.clone(),outline:w,open:NaN,highlight:!1});const I=new Bt(_e.geometry,new Jn({side:Sn,colorWrite:!1,depthWrite:!1}));I.position.copy(_e.position),I.quaternion.copy(_e.quaternion),I.scale.copy(_e.scale),I.userData.windowId=oe,I.layers.set(1),p.add(I),m.push(I)}c.loaded(),t("车模已就绪",!0),S&&ut(),B()}catch(X){M||t("模型初始化失败："+String(X))}}Je();async function ut(){if(x||!p)return;x=new pf,x.background=new Ge(15331053),x.add(new Pf(16777215,8887188,3));const X=new Gi;X.scale.setScalar(.01);const _e=p.getObjectByName("Door_FL__V8_DoorCard_DoorFrontL").clone();_e.material=new Jn({color:6650739,wireframe:!0}),X.add(_e);const be=_.get("FL").mesh;R=new Bt(be.geometry,new Jn({color:1478042,side:Sn})),R.position.copy(be.position),R.quaternion.copy(be.quaternion),X.add(R),x.add(X),B()}function nt(X){if(c.markView(X),S=X==="mesh-front",S)ut(),f.target.set(.22,.77,-.8),h.position.set(.65,1.05,-2);else if(X==="inside-front"||X==="inside-rear"){const oe=X==="inside-front"?.25:-.72;f.target.set(oe,.88,-.8),h.position.set(oe-.3,1.25,.1)}else{f.target.set(-.15,.9,0);const oe={perspective:[6,3.2,-6],left:[0,1.65,-7],right:[0,1.65,7],rear:[-6,2.5,-4],top:[0,7,.01]};h.position.fromArray(oe[X]??oe.perspective)}f.update(),B()}function ie(X){const oe=new Set,_e=new Set;X.traverse(be=>{if(be instanceof Bt||be instanceof Co){oe.add(be.geometry);for(const w of Array.isArray(be.material)?be.material:[be.material])_e.add(w)}}),oe.forEach(be=>be.dispose()),_e.forEach(be=>be.dispose())}return{view:nt,invalidate:B,dispose(){M=!0,we.abort(),C.dispose(),c.dispose(),K(),se(),k.disconnect(),window.removeEventListener("resize",Q),f.removeEventListener("change",B),f.removeEventListener("start",B),f.removeEventListener("end",B),f.dispose(),document.removeEventListener("visibilitychange",ne),l.domElement.removeEventListener("pointerdown",N),l.domElement.removeEventListener("pointerup",ve),ie(u),x&&ie(x),l.dispose(),l.domElement.remove()}}}const TA={class:"app"},AA={class:"brand"},wA={class:"subtitle"},RA={class:"badge"},CA={class:"workspace"},PA={class:"stage"},DA={key:0,class:"loading",role:"status"},LA={class:"views","aria-label":"车辆视角"},IA=["aria-expanded"],NA={class:"panel-scroll"},UA=ca({__name:"App",setup(n){const e=Wt(!1),t=Hr,i=ha(),s=Wt(),r=Wt("正在准备场景…"),a=Wt(!1);let o;return tp(()=>{try{o=EA(s.value,i,(l,c)=>{r.value=l,a.value=!!c})}catch(l){r.value="无法启动 WebGL："+String(l)}}),bu(()=>o?.dispose()),(l,c)=>(lt(),ft("main",TA,[ce("header",null,[ce("div",AA,[c[9]||(c[9]=ce("span",{class:"logo"},"V8",-1)),ce("div",null,[c[8]||(c[8]=ce("strong",null,"智能车窗体验",-1)),ce("span",wA,Qe(Ue(Bi)?"拖动探索 · 四窗独立控制":"点击，或说出你的指令"),1)])]),ce("span",RA,Qe(Ue(Bi)?"在线预览":"交互展示台"),1)]),ce("div",CA,[ce("section",PA,[ce("div",{ref_key:"viewport",ref:s,class:"viewport","aria-label":"可拖动旋转的三维车模"},null,512),c[10]||(c[10]=ce("div",{class:"stage-title"},[ce("span",{class:"eyebrow"},"V8 EXECUTIVE"),ce("h1",null,"每一次开合，都看得见。"),ce("p",null,"拖动探索车身 · 点击车窗选择")],-1)),a.value?zt("",!0):(lt(),ft("div",DA,Qe(r.value),1)),ce("nav",LA,[ce("button",{onClick:c[0]||(c[0]=u=>Ue(o)?.view("perspective"))},"整体"),ce("button",{onClick:c[1]||(c[1]=u=>Ue(o)?.view("left"))},"左侧"),ce("button",{onClick:c[2]||(c[2]=u=>Ue(o)?.view("right"))},"右侧")])]),ce("aside",{class:oa({expanded:e.value}),onPointerdown:c[5]||(c[5]=io(()=>{},["stop"])),onTouchstart:c[6]||(c[6]=io(()=>{},["stop"])),onWheel:c[7]||(c[7]=io(()=>{},["stop"]))},[ce("button",{class:"panel-toggle",onClick:c[3]||(c[3]=u=>e.value=!e.value),"aria-expanded":e.value},[ei(Qe(e.value?"收起面板":"展开控制面板")+" ",1),c[11]||(c[11]=ce("span",null,"⌃",-1))],8,IA),ce("div",NA,[mn(bx,{ready:a.value},null,8,["ready"]),mn(Ub,{ready:a.value},null,8,["ready"]),mn($b),mn(Gb,{baseline:Ue(t),onInspect:c[4]||(c[4]=u=>{Ue(i).setAll(1),Ue(o)?.view("mesh-front")})},null,8,["baseline"])])],34)])]))}});ab(UA).use(cb()).mount("#app");
