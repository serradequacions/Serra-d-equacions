(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function YE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qd={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function cb(){if(av)return wl;av=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var g in o)g!=="key"&&(u[g]=o[g])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:f,ref:o!==void 0?o:null,props:u}}return wl.Fragment=t,wl.jsx=n,wl.jsxs=n,wl}var ov;function hb(){return ov||(ov=1,qd.exports=cb()),qd.exports}var q=hb(),Hd={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function fb(){if(lv)return At;lv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),M=Symbol.iterator;function G(O){return O===null||typeof O!="object"?null:(O=M&&O[M]||O["@@iterator"],typeof O=="function"?O:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},it=Object.assign,W={};function ft(O,K,nt){this.props=O,this.context=K,this.refs=W,this.updater=nt||Z}ft.prototype.isReactComponent={},ft.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},ft.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function pt(){}pt.prototype=ft.prototype;function mt(O,K,nt){this.props=O,this.context=K,this.refs=W,this.updater=nt||Z}var bt=mt.prototype=new pt;bt.constructor=mt,it(bt,ft.prototype),bt.isPureReactComponent=!0;var Bt=Array.isArray;function Ct(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(O,K,nt){var st=nt.ref;return{$$typeof:s,type:O,key:K,ref:st!==void 0?st:null,props:nt}}function V(O,K){return C(O.type,K,O.props)}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function U(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(nt){return K[nt]})}var R=/\/+/g;function Zt(O,K){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):K.toString(36)}function ge(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Ct,Ct):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function H(O,K,nt,st,vt){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var Nt=!1;if(O===null)Nt=!0;else switch(Et){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(O.$$typeof){case s:case t:Nt=!0;break;case A:return Nt=O._init,H(Nt(O._payload),K,nt,st,vt)}}if(Nt)return vt=vt(O),Nt=st===""?"."+Zt(O,0):st,Bt(vt)?(nt="",Nt!=null&&(nt=Nt.replace(R,"$&/")+"/"),H(vt,K,nt,"",function(Yn){return Yn})):vt!=null&&(N(vt)&&(vt=V(vt,nt+(vt.key==null||O&&O.key===vt.key?"":(""+vt.key).replace(R,"$&/")+"/")+Nt)),K.push(vt)),1;Nt=0;var pe=st===""?".":st+":";if(Bt(O))for(var Qt=0;Qt<O.length;Qt++)st=O[Qt],Et=pe+Zt(st,Qt),Nt+=H(st,K,nt,Et,vt);else if(Qt=G(O),typeof Qt=="function")for(O=Qt.call(O),Qt=0;!(st=O.next()).done;)st=st.value,Et=pe+Zt(st,Qt++),Nt+=H(st,K,nt,Et,vt);else if(Et==="object"){if(typeof O.then=="function")return H(ge(O),K,nt,st,vt);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function et(O,K,nt){if(O==null)return O;var st=[],vt=0;return H(O,st,"","",function(Et){return K.call(nt,Et,vt++)}),st}function ct(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(nt){(O._status===0||O._status===-1)&&(O._status=1,O._result=nt)},function(nt){(O._status===0||O._status===-1)&&(O._status=2,O._result=nt)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var Vt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},qt={map:et,forEach:function(O,K,nt){et(O,function(){K.apply(this,arguments)},nt)},count:function(O){var K=0;return et(O,function(){K++}),K},toArray:function(O){return et(O,function(K){return K})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return At.Activity=S,At.Children=qt,At.Component=ft,At.Fragment=n,At.Profiler=o,At.PureComponent=mt,At.StrictMode=r,At.Suspense=_,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,At.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},At.cache=function(O){return function(){return O.apply(null,arguments)}},At.cacheSignal=function(){return null},At.cloneElement=function(O,K,nt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var st=it({},O.props),vt=O.key;if(K!=null)for(Et in K.key!==void 0&&(vt=""+K.key),K)!b.call(K,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&K.ref===void 0||(st[Et]=K[Et]);var Et=arguments.length-2;if(Et===1)st.children=nt;else if(1<Et){for(var Nt=Array(Et),pe=0;pe<Et;pe++)Nt[pe]=arguments[pe+2];st.children=Nt}return C(O.type,vt,st)},At.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},At.createElement=function(O,K,nt){var st,vt={},Et=null;if(K!=null)for(st in K.key!==void 0&&(Et=""+K.key),K)b.call(K,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(vt[st]=K[st]);var Nt=arguments.length-2;if(Nt===1)vt.children=nt;else if(1<Nt){for(var pe=Array(Nt),Qt=0;Qt<Nt;Qt++)pe[Qt]=arguments[Qt+2];vt.children=pe}if(O&&O.defaultProps)for(st in Nt=O.defaultProps,Nt)vt[st]===void 0&&(vt[st]=Nt[st]);return C(O,Et,vt)},At.createRef=function(){return{current:null}},At.forwardRef=function(O){return{$$typeof:g,render:O}},At.isValidElement=N,At.lazy=function(O){return{$$typeof:A,_payload:{_status:-1,_result:O},_init:ct}},At.memo=function(O,K){return{$$typeof:y,type:O,compare:K===void 0?null:K}},At.startTransition=function(O){var K=I.T,nt={};I.T=nt;try{var st=O(),vt=I.S;vt!==null&&vt(nt,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(Ct,Vt)}catch(Et){Vt(Et)}finally{K!==null&&nt.types!==null&&(K.types=nt.types),I.T=K}},At.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},At.use=function(O){return I.H.use(O)},At.useActionState=function(O,K,nt){return I.H.useActionState(O,K,nt)},At.useCallback=function(O,K){return I.H.useCallback(O,K)},At.useContext=function(O){return I.H.useContext(O)},At.useDebugValue=function(){},At.useDeferredValue=function(O,K){return I.H.useDeferredValue(O,K)},At.useEffect=function(O,K){return I.H.useEffect(O,K)},At.useEffectEvent=function(O){return I.H.useEffectEvent(O)},At.useId=function(){return I.H.useId()},At.useImperativeHandle=function(O,K,nt){return I.H.useImperativeHandle(O,K,nt)},At.useInsertionEffect=function(O,K){return I.H.useInsertionEffect(O,K)},At.useLayoutEffect=function(O,K){return I.H.useLayoutEffect(O,K)},At.useMemo=function(O,K){return I.H.useMemo(O,K)},At.useOptimistic=function(O,K){return I.H.useOptimistic(O,K)},At.useReducer=function(O,K,nt){return I.H.useReducer(O,K,nt)},At.useRef=function(O){return I.H.useRef(O)},At.useState=function(O){return I.H.useState(O)},At.useSyncExternalStore=function(O,K,nt){return I.H.useSyncExternalStore(O,K,nt)},At.useTransition=function(){return I.H.useTransition()},At.version="19.2.5",At}var uv;function Lm(){return uv||(uv=1,Hd.exports=fb()),Hd.exports}var le=Lm();const db=YE(le);var Fd={exports:{}},Il={},Gd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function mb(){return cv||(cv=1,(function(s){function t(H,et){var ct=H.length;H.push(et);t:for(;0<ct;){var Vt=ct-1>>>1,qt=H[Vt];if(0<o(qt,et))H[Vt]=et,H[ct]=qt,ct=Vt;else break t}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var et=H[0],ct=H.pop();if(ct!==et){H[0]=ct;t:for(var Vt=0,qt=H.length,O=qt>>>1;Vt<O;){var K=2*(Vt+1)-1,nt=H[K],st=K+1,vt=H[st];if(0>o(nt,ct))st<qt&&0>o(vt,nt)?(H[Vt]=vt,H[st]=ct,Vt=st):(H[Vt]=nt,H[K]=ct,Vt=K);else if(st<qt&&0>o(vt,ct))H[Vt]=vt,H[st]=ct,Vt=st;else break t}}return et}function o(H,et){var ct=H.sortIndex-et.sortIndex;return ct!==0?ct:H.id-et.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();s.unstable_now=function(){return f.now()-g}}var _=[],y=[],A=1,S=null,M=3,G=!1,Z=!1,it=!1,W=!1,ft=typeof setTimeout=="function"?setTimeout:null,pt=typeof clearTimeout=="function"?clearTimeout:null,mt=typeof setImmediate<"u"?setImmediate:null;function bt(H){for(var et=n(y);et!==null;){if(et.callback===null)r(y);else if(et.startTime<=H)r(y),et.sortIndex=et.expirationTime,t(_,et);else break;et=n(y)}}function Bt(H){if(it=!1,bt(H),!Z)if(n(_)!==null)Z=!0,Ct||(Ct=!0,U());else{var et=n(y);et!==null&&ge(Bt,et.startTime-H)}}var Ct=!1,I=-1,b=5,C=-1;function V(){return W?!0:!(s.unstable_now()-C<b)}function N(){if(W=!1,Ct){var H=s.unstable_now();C=H;var et=!0;try{t:{Z=!1,it&&(it=!1,pt(I),I=-1),G=!0;var ct=M;try{e:{for(bt(H),S=n(_);S!==null&&!(S.expirationTime>H&&V());){var Vt=S.callback;if(typeof Vt=="function"){S.callback=null,M=S.priorityLevel;var qt=Vt(S.expirationTime<=H);if(H=s.unstable_now(),typeof qt=="function"){S.callback=qt,bt(H),et=!0;break e}S===n(_)&&r(_),bt(H)}else r(_);S=n(_)}if(S!==null)et=!0;else{var O=n(y);O!==null&&ge(Bt,O.startTime-H),et=!1}}break t}finally{S=null,M=ct,G=!1}et=void 0}}finally{et?U():Ct=!1}}}var U;if(typeof mt=="function")U=function(){mt(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Zt=R.port2;R.port1.onmessage=N,U=function(){Zt.postMessage(null)}}else U=function(){ft(N,0)};function ge(H,et){I=ft(function(){H(s.unstable_now())},et)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return M},s.unstable_next=function(H){switch(M){case 1:case 2:case 3:var et=3;break;default:et=M}var ct=M;M=et;try{return H()}finally{M=ct}},s.unstable_requestPaint=function(){W=!0},s.unstable_runWithPriority=function(H,et){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ct=M;M=H;try{return et()}finally{M=ct}},s.unstable_scheduleCallback=function(H,et,ct){var Vt=s.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?Vt+ct:Vt):ct=Vt,H){case 1:var qt=-1;break;case 2:qt=250;break;case 5:qt=1073741823;break;case 4:qt=1e4;break;default:qt=5e3}return qt=ct+qt,H={id:A++,callback:et,priorityLevel:H,startTime:ct,expirationTime:qt,sortIndex:-1},ct>Vt?(H.sortIndex=ct,t(y,H),n(_)===null&&H===n(y)&&(it?(pt(I),I=-1):it=!0,ge(Bt,ct-Vt))):(H.sortIndex=qt,t(_,H),Z||G||(Z=!0,Ct||(Ct=!0,U()))),H},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(H){var et=M;return function(){var ct=M;M=et;try{return H.apply(this,arguments)}finally{M=ct}}}})(Kd)),Kd}var hv;function gb(){return hv||(hv=1,Gd.exports=mb()),Gd.exports}var Qd={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function pb(){if(fv)return en;fv=1;var s=Lm();function t(_){var y="https://react.dev/errors/"+_;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+_+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(_,y,A){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:_,containerInfo:y,implementation:A}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,y){if(_==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,en.createPortal=function(_,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(_,y,null,A)},en.flushSync=function(_){var y=f.T,A=r.p;try{if(f.T=null,r.p=2,_)return _()}finally{f.T=y,r.p=A,r.d.f()}},en.preconnect=function(_,y){typeof _=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(_,y))},en.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},en.preinit=function(_,y){if(typeof _=="string"&&y&&typeof y.as=="string"){var A=y.as,S=g(A,y.crossOrigin),M=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?r.d.S(_,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:G}):A==="script"&&r.d.X(_,{crossOrigin:S,integrity:M,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},en.preinitModule=function(_,y){if(typeof _=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=g(y.as,y.crossOrigin);r.d.M(_,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(_)},en.preload=function(_,y){if(typeof _=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,S=g(A,y.crossOrigin);r.d.L(_,A,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},en.preloadModule=function(_,y){if(typeof _=="string")if(y){var A=g(y.as,y.crossOrigin);r.d.m(_,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(_)},en.requestFormReset=function(_){r.d.r(_)},en.unstable_batchedUpdates=function(_,y){return _(y)},en.useFormState=function(_,y,A){return f.H.useFormState(_,y,A)},en.useFormStatus=function(){return f.H.useHostTransitionStatus()},en.version="19.2.5",en}var dv;function _b(){if(dv)return Qd.exports;dv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qd.exports=pb(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function yb(){if(mv)return Il;mv=1;var s=gb(),t=Lm(),n=_b();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function _(e){if(u(e)!==e)throw Error(r(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return _(h),e;if(d===l)return _(h),i;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=h,l=d;else{for(var p=!1,E=h.child;E;){if(E===a){p=!0,a=h,l=d;break}if(E===l){p=!0,l=h,a=d;break}E=E.sibling}if(!p){for(E=d.child;E;){if(E===a){p=!0,a=d,l=h;break}if(E===l){p=!0,l=d,a=h;break}E=E.sibling}if(!p)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function A(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=A(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,M=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),mt=Symbol.for("react.context"),bt=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function Zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case it:return"Fragment";case ft:return"Profiler";case W:return"StrictMode";case Bt:return"Suspense";case Ct:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case mt:return e.displayName||"Context";case pt:return(e._context.displayName||"Context")+".Consumer";case bt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:Zt(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Zt(e(i))}catch{}}return null}var ge=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},Vt=[],qt=-1;function O(e){return{current:e}}function K(e){0>qt||(e.current=Vt[qt],Vt[qt]=null,qt--)}function nt(e,i){qt++,Vt[qt]=e.current,e.current=i}var st=O(null),vt=O(null),Et=O(null),Nt=O(null);function pe(e,i){switch(nt(Et,i),nt(vt,e),nt(st,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Ny(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Ny(i),e=Dy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(st),nt(st,e)}function Qt(){K(st),K(vt),K(Et)}function Yn(e){e.memoizedState!==null&&nt(Nt,e);var i=st.current,a=Dy(i,e.type);i!==a&&(nt(vt,e),nt(st,a))}function Gi(e){vt.current===e&&(K(st),K(vt)),Nt.current===e&&(K(Nt),Al._currentValue=ct)}var As,Ss;function Nn(e){if(As===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);As=i&&i[1]||"",Ss=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+As+e+Ss}var bs=!1;function Ki(e,i){if(!e||bs)return"";bs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(j){var z=j}Reflect.construct(e,[],X)}else{try{X.call()}catch(j){z=j}e.call(X.prototype)}}else{try{throw Error()}catch(j){z=j}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),p=d[0],E=d[1];if(p&&E){var w=p.split(`
`),P=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===P.length)for(l=w.length-1,h=P.length-1;1<=l&&0<=h&&w[l]!==P[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==P[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==P[h]){var F=`
`+w[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{bs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Nn(a):""}function Qi(e,i){switch(e.tag){case 26:case 27:case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return e.child!==i&&i!==null?Nn("Suspense Fallback"):Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return Nn("Activity");default:return""}}function Xn(e){try{var i="",a=null;do i+=Qi(e,a),a=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var de=Object.prototype.hasOwnProperty,_e=s.unstable_scheduleCallback,Y=s.unstable_cancelCallback,at=s.unstable_shouldYield,Wt=s.unstable_requestPaint,Pt=s.unstable_now,se=s.unstable_getCurrentPriorityLevel,Dn=s.unstable_ImmediatePriority,wo=s.unstable_UserBlockingPriority,Rs=s.unstable_NormalPriority,Fh=s.unstable_LowPriority,hu=s.unstable_IdlePriority,fu=s.log,du=s.unstable_setDisableYieldValue,Jn=null,Ke=null;function On(e){if(typeof fu=="function"&&du(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Jn,e)}catch{}}var Ae=Math.clz32?Math.clz32:gu,mu=Math.log,va=Math.LN2;function gu(e){return e>>>=0,e===0?32:31-(mu(e)/va|0)|0}var di=256,br=262144,Ie=4194304;function mi(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gi(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=mi(l):(p&=E,p!==0?h=mi(p):a||(a=E&~e,a!==0&&(h=mi(a))))):(E=l&~d,E!==0?h=mi(E):p!==0?h=mi(p):a||(a=l&~e,a!==0&&(h=mi(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function $n(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Gh(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pu(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function pi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Rr(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kh(e,i,a,l,h,d){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,P=e.hiddenUpdates;for(a=p&~a;0<a;){var F=31-Ae(a),X=1<<F;E[F]=0,w[F]=-1;var z=P[F];if(z!==null)for(P[F]=null,F=0;F<z.length;F++){var j=z[F];j!==null&&(j.lane&=-536870913)}a&=~X}l!==0&&wr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(p&~i))}function wr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ae(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Io(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ae(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Co(e,i){var a=i&-i;return a=(a&42)!==0?1:Ir(a),(a&(e.suspendedLanes|i))!==0?0:a}function Ir(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _u(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:Wy(e.type))}function Zn(e,i){var a=et.p;try{return et.p=e,i()}finally{et.p=a}}var Wn=Math.random().toString(36).slice(2),Ce="__reactFiber$"+Wn,qe="__reactProps$"+Wn,_i="__reactContainer$"+Wn,Ea="__reactEvents$"+Wn,Qh="__reactListeners$"+Wn,yu="__reactHandles$"+Wn,vu="__reactResources$"+Wn,yi="__reactMarker$"+Wn;function Ta(e){delete e[Ce],delete e[qe],delete e[Ea],delete e[Qh],delete e[yu]}function vi(e){var i=e[Ce];if(i)return i;for(var a=e.parentNode;a;){if(i=a[_i]||a[Ce]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ly(e);e!==null;){if(a=e[Ce])return a;e=Ly(e)}return i}e=a,a=e.parentNode}return null}function Vn(e){if(e=e[Ce]||e[_i]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function vn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Ei(e){var i=e[vu];return i||(i=e[vu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ne(e){e[yi]=!0}var No=new Set,Do={};function Ti(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(Do[e]=i,e=0;e<i.length;e++)No.add(i[e])}var Oo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},Mo={};function Eu(e){return de.call(Mo,e)?!0:de.call(Vo,e)?!1:Oo.test(e)?Mo[e]=!0:(Vo[e]=!0,!1)}function Aa(e,i,a){if(Eu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function En(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function De(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function He(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xo(e,i,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(p){a=""+p,d.call(this,p)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xt(e){if(!e._valueTracker){var i=ws(e)?"checked":"value";e._valueTracker=xo(e,i,""+e[i])}}function Cr(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=ws(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nr=/[\n"\\]/g;function cn(e){return e.replace(Nr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sa(e,i,a,l,h,d,p,E){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),i!=null?p==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+He(i)):e.value!==""+He(i)&&(e.value=""+He(i)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),i!=null?Uo(e,p,He(i)):a!=null?Uo(e,p,He(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+He(E):e.removeAttribute("name")}function Tu(e,i,a,l,h,d,p,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Xt(e);return}a=a!=null?""+He(a):"",i=i!=null?""+He(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Xt(e)}function Uo(e,i,a){i==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Is(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+He(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Au(e,i,a){if(i!=null&&(i=""+He(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+He(a):""}function Cs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(r(92));if(ge(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=He(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Xt(e)}function hn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Su=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||Su.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Lo(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&ko(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&ko(e,d,i[d])}function ba(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ns=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(e){return Ns.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ti(){}var Po=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,bi=null;function Dr(e){var i=Vn(e);if(i&&(e=i.stateNode)){var a=e[qe]||null;t:switch(e=i.stateNode,i.type){case"input":if(Sa(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[qe]||null;if(!h)throw Error(r(90));Sa(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Cr(l)}break t;case"textarea":Au(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Is(e,!!a.multiple,i,!1)}}}var wa=!1;function Os(e,i,a){if(wa)return e(i,a);wa=!0;try{var l=e(i);return l}finally{if(wa=!1,(Ds!==null||bi!==null)&&(_c(),Ds&&(i=Ds,e=bi,bi=Ds=null,Dr(i),e)))for(i=0;i<e.length;i++)Dr(e[i])}}function ei(e,i){var a=e.stateNode;if(a===null)return null;var l=a[qe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Or=!1;if(xn)try{var te={};Object.defineProperty(te,"passive",{get:function(){Or=!0}}),window.addEventListener("test",te,te),window.removeEventListener("test",te,te)}catch{Or=!1}var Ri=null,zo=null,Vr=null;function Bo(){if(Vr)return Vr;var e,i=zo,a=i.length,l,h="value"in Ri?Ri.value:Ri.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var p=a-e;for(l=1;l<=p&&i[a-l]===h[d-l];l++);return Vr=h.slice(e,1<l?1-l:void 0)}function Mr(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function ni(){return!1}function Qe(e){function i(a,l,h,d,p){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xi:ni,this.isPropagationStopped=ni,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),i}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Qe(Ji),Vs=S({},Ji,{view:0,detail:0}),jo=Qe(Vs),Ms,Ia,Ii,Ca=S({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(Ms=e.screenX-Ii.screenX,Ia=e.screenY-Ii.screenY):Ia=Ms=0,Ii=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Ia}}),qo=Qe(Ca),xr=S({},Ca,{dataTransfer:0}),Ru=Qe(xr),wu=S({},Vs,{relatedTarget:0}),Ur=Qe(wu),Ho=S({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=Qe(Ho),Na=S({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cu=Qe(Na),Nu=S({},Ji,{data:0}),Ci=Qe(Nu),Du={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Vu[e])?!!i[e]:!1}function xs(){return Mu}var on=S({},Vs,{key:function(e){if(e.key){var i=Du[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ou[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=Qe(on),Uu=S({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$i=Qe(Uu),c=S({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),m=Qe(c),v=S({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),T=Qe(v),k=S({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B=Qe(k),tt=S({},Ji,{newState:0,oldState:0}),Rt=Qe(tt),Se=[9,13,27,32],Gt=xn&&"CompositionEvent"in window,he=null;xn&&"documentMode"in document&&(he=document.documentMode);var Un=xn&&"TextEvent"in window&&!he,Ni=xn&&(!Gt||he&&8<he&&11>=he),ii=" ",si=!1;function kr(e,i){switch(e){case"keyup":return Se.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function x0(e,i){switch(e){case"compositionend":return Da(i);case"keypress":return i.which!==32?null:(si=!0,ii);case"textInput":return e=i.data,e===ii&&si?null:e;default:return null}}function U0(e,i){if(Oa)return e==="compositionend"||!Gt&&kr(e,i)?(e=Bo(),Vr=zo=Ri=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ni&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!k0[e.type]:i==="textarea"}function jg(e,i,a,l){Ds?bi?bi.push(l):bi=[l]:Ds=l,i=bc(i,"onChange"),0<i.length&&(a=new wi("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Fo=null,Go=null;function L0(e){Sy(e,0)}function ku(e){var i=vn(e);if(Cr(i))return e}function qg(e,i){if(e==="change")return i}var Hg=!1;if(xn){var Yh;if(xn){var Xh="oninput"in document;if(!Xh){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Xh=typeof Fg.oninput=="function"}Yh=Xh}else Yh=!1;Hg=Yh&&(!document.documentMode||9<document.documentMode)}function Gg(){Fo&&(Fo.detachEvent("onpropertychange",Kg),Go=Fo=null)}function Kg(e){if(e.propertyName==="value"&&ku(Go)){var i=[];jg(i,Go,e,Mn(e)),Os(L0,i)}}function P0(e,i,a){e==="focusin"?(Gg(),Fo=i,Go=a,Fo.attachEvent("onpropertychange",Kg)):e==="focusout"&&Gg()}function z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ku(Go)}function B0(e,i){if(e==="click")return ku(i)}function j0(e,i){if(e==="input"||e==="change")return ku(i)}function q0(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Tn=typeof Object.is=="function"?Object.is:q0;function Ko(e,i){if(Tn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!de.call(i,h)||!Tn(e[h],i[h]))return!1}return!0}function Qg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yg(e,i){var a=Qg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qg(a)}}function Xg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Xg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Jg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Si(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Si(e.document)}return i}function Jh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var H0=xn&&"documentMode"in document&&11>=document.documentMode,Va=null,$h=null,Qo=null,Zh=!1;function $g(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zh||Va==null||Va!==Si(l)||(l=Va,"selectionStart"in l&&Jh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qo&&Ko(Qo,l)||(Qo=l,l=bc($h,"onSelect"),0<l.length&&(i=new wi("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=Va)))}function Lr(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ma={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionrun:Lr("Transition","TransitionRun"),transitionstart:Lr("Transition","TransitionStart"),transitioncancel:Lr("Transition","TransitionCancel"),transitionend:Lr("Transition","TransitionEnd")},Wh={},Zg={};xn&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Pr(e){if(Wh[e])return Wh[e];if(!Ma[e])return e;var i=Ma[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zg)return Wh[e]=i[a];return e}var Wg=Pr("animationend"),tp=Pr("animationiteration"),ep=Pr("animationstart"),F0=Pr("transitionrun"),G0=Pr("transitionstart"),K0=Pr("transitioncancel"),np=Pr("transitionend"),ip=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function ri(e,i){ip.set(e,i),Ti(i,[e])}var Lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kn=[],xa=0,ef=0;function Pu(){for(var e=xa,i=ef=xa=0;i<e;){var a=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var d=kn[i];if(kn[i++]=null,l!==null&&h!==null){var p=l.pending;p===null?h.next=h:(h.next=p.next,p.next=h),l.pending=h}d!==0&&sp(a,h,d)}}function zu(e,i,a,l){kn[xa++]=e,kn[xa++]=i,kn[xa++]=a,kn[xa++]=l,ef|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nf(e,i,a,l){return zu(e,i,a,l),Bu(e)}function zr(e,i){return zu(e,null,null,i),Bu(e)}function sp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ae(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Bu(e){if(50<gl)throw gl=0,fd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ua={};function Q0(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,i,a,l){return new Q0(e,i,a,l)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,i){var a=e.alternate;return a===null?(a=An(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function ju(e,i,a,l,h,d){var p=0;if(l=e,typeof e=="function")sf(e)&&(p=1);else if(typeof e=="string")p=ZS(e,a,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=An(31,a,i,h),e.elementType=C,e.lanes=d,e;case it:return Br(a.children,h,d,i);case W:p=8,h|=24;break;case ft:return e=An(12,a,i,h|2),e.elementType=ft,e.lanes=d,e;case Bt:return e=An(13,a,i,h),e.elementType=Bt,e.lanes=d,e;case Ct:return e=An(19,a,i,h),e.elementType=Ct,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mt:p=10;break t;case pt:p=9;break t;case bt:p=11;break t;case I:p=14;break t;case b:p=16,l=null;break t}p=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=An(p,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Br(e,i,a,l){return e=An(7,e,l,i),e.lanes=a,e}function rf(e,i,a){return e=An(6,e,null,i),e.lanes=a,e}function ap(e){var i=An(18,null,null,0);return i.stateNode=e,i}function af(e,i,a){return i=An(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var op=new WeakMap;function Ln(e,i){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Xn(i)},op.set(e,i),i)}return{value:e,source:i,stack:Xn(i)}}var ka=[],La=0,qu=null,Yo=0,Pn=[],zn=0,Us=null,Di=1,Oi="";function Wi(e,i){ka[La++]=Yo,ka[La++]=qu,qu=e,Yo=i}function lp(e,i,a){Pn[zn++]=Di,Pn[zn++]=Oi,Pn[zn++]=Us,Us=e;var l=Di;e=Oi;var h=32-Ae(l)-1;l&=~(1<<h),a+=1;var d=32-Ae(i)+h;if(30<d){var p=h-h%5;d=(l&(1<<p)-1).toString(32),l>>=p,h-=p,Di=1<<32-Ae(i)+h|a<<h|l,Oi=d+e}else Di=1<<d|a<<h|l,Oi=e}function of(e){e.return!==null&&(Wi(e,1),lp(e,1,0))}function lf(e){for(;e===qu;)qu=ka[--La],ka[La]=null,Yo=ka[--La],ka[La]=null;for(;e===Us;)Us=Pn[--zn],Pn[zn]=null,Oi=Pn[--zn],Pn[zn]=null,Di=Pn[--zn],Pn[zn]=null}function up(e,i){Pn[zn++]=Di,Pn[zn++]=Oi,Pn[zn++]=Us,Di=i.id,Oi=i.overflow,Us=e}var Ye=null,ae=null,zt=!1,ks=null,Bn=!1,uf=Error(r(519));function Ls(e){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Ln(i,e)),uf}function cp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ce]=e,i[qe]=l,a){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(a=0;a<_l.length;a++)Ot(_l[a],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Ot("invalid",i),Tu(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ot("invalid",i);break;case"textarea":Ot("invalid",i),Cs(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Iy(i.textContent,a)?(l.popover!=null&&(Ot("beforetoggle",i),Ot("toggle",i)),l.onScroll!=null&&Ot("scroll",i),l.onScrollEnd!=null&&Ot("scrollend",i),l.onClick!=null&&(i.onclick=ti),i=!0):i=!1,i||Ls(e,!0)}function hp(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Ye=Ye.return}}function Pa(e){if(e!==Ye)return!1;if(!zt)return hp(e),zt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Id(e.type,e.memoizedProps)),a=!a),a&&ae&&Ls(e),hp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ae=ky(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ae=ky(e)}else i===27?(i=ae,$s(e.type)?(e=Vd,Vd=null,ae=e):ae=i):ae=Ye?qn(e.stateNode.nextSibling):null;return!0}function jr(){ae=Ye=null,zt=!1}function cf(){var e=ks;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),ks=null),e}function Xo(e){ks===null?ks=[e]:ks.push(e)}var hf=O(null),qr=null,ts=null;function Ps(e,i,a){nt(hf,i._currentValue),i._currentValue=a}function es(e){e._currentValue=hf.current,K(hf)}function ff(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function df(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var p=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),ff(d.return,a,e),l||(p=null);break t}d=E.next}}else if(h.tag===18){if(p=h.return,p===null)throw Error(r(341));p.lanes|=a,d=p.alternate,d!==null&&(d.lanes|=a),ff(p,a,e),p=null}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===e){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}}function za(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var p=h.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var E=h.type;Tn(h.pendingProps.value,p.value)||(e!==null?e.push(E):e=[E])}}else if(h===Nt.current){if(p=h.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&df(i,e,a,l),i.flags|=262144}function Hu(e){for(e=e.firstContext;e!==null;){if(!Tn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hr(e){qr=e,ts=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return fp(qr,e)}function Fu(e,i){return qr===null&&Hr(e),fp(e,i)}function fp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ts===null){if(e===null)throw Error(r(308));ts=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ts=ts.next=i;return a}var Y0=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},X0=s.unstable_scheduleCallback,J0=s.unstable_NormalPriority,Oe={$$typeof:mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new Y0,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&X0(J0,function(){e.controller.abort()})}var $o=null,gf=0,Ba=0,ja=null;function $0(e,i){if($o===null){var a=$o=[];gf=0,Ba=yd(),ja={status:"pending",value:void 0,then:function(l){a.push(l)}}}return gf++,i.then(dp,dp),i}function dp(){if(--gf===0&&$o!==null){ja!==null&&(ja.status="fulfilled");var e=$o;$o=null,Ba=0,ja=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Z0(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var mp=H.S;H.S=function(e,i){$_=Pt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&$0(e,i),mp!==null&&mp(e,i)};var Fr=O(null);function pf(){var e=Fr.current;return e!==null?e:re.pooledCache}function Gu(e,i){i===null?nt(Fr,Fr.current):nt(Fr,i.pool)}function gp(){var e=pf();return e===null?null:{parent:Oe._currentValue,pool:e}}var qa=Error(r(460)),_f=Error(r(474)),Ku=Error(r(542)),Qu={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _p(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ti,ti),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vp(e),e;default:if(typeof i.status=="string")i.then(ti,ti);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vp(e),e}throw Kr=i,qa}}function Gr(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Kr=a,qa):a}}var Kr=null;function yp(){if(Kr===null)throw Error(r(459));var e=Kr;return Kr=null,e}function vp(e){if(e===qa||e===Ku)throw Error(r(483))}var Ha=null,Zo=0;function Yu(e){var i=Zo;return Zo+=1,Ha===null&&(Ha=[]),_p(Ha,e,i)}function Wo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===M?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Ep(e){function i(x,D){if(e){var L=x.deletions;L===null?(x.deletions=[D],x.flags|=16):L.push(D)}}function a(x,D){if(!e)return null;for(;D!==null;)i(x,D),D=D.sibling;return null}function l(x){for(var D=new Map;x!==null;)x.key!==null?D.set(x.key,x):D.set(x.index,x),x=x.sibling;return D}function h(x,D){return x=Zi(x,D),x.index=0,x.sibling=null,x}function d(x,D,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<D?(x.flags|=67108866,D):L):(x.flags|=67108866,D)):(x.flags|=1048576,D)}function p(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,D,L,Q){return D===null||D.tag!==6?(D=rf(L,x.mode,Q),D.return=x,D):(D=h(D,L),D.return=x,D)}function w(x,D,L,Q){var ht=L.type;return ht===it?F(x,D,L.props.children,Q,L.key):D!==null&&(D.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===b&&Gr(ht)===D.type)?(D=h(D,L.props),Wo(D,L),D.return=x,D):(D=ju(L.type,L.key,L.props,null,x.mode,Q),Wo(D,L),D.return=x,D)}function P(x,D,L,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=af(L,x.mode,Q),D.return=x,D):(D=h(D,L.children||[]),D.return=x,D)}function F(x,D,L,Q,ht){return D===null||D.tag!==7?(D=Br(L,x.mode,Q,ht),D.return=x,D):(D=h(D,L),D.return=x,D)}function X(x,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=rf(""+D,x.mode,L),D.return=x,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return L=ju(D.type,D.key,D.props,null,x.mode,L),Wo(L,D),L.return=x,L;case Z:return D=af(D,x.mode,L),D.return=x,D;case b:return D=Gr(D),X(x,D,L)}if(ge(D)||U(D))return D=Br(D,x.mode,L,null),D.return=x,D;if(typeof D.then=="function")return X(x,Yu(D),L);if(D.$$typeof===mt)return X(x,Fu(x,D),L);Xu(x,D)}return null}function z(x,D,L,Q){var ht=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ht!==null?null:E(x,D,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case G:return L.key===ht?w(x,D,L,Q):null;case Z:return L.key===ht?P(x,D,L,Q):null;case b:return L=Gr(L),z(x,D,L,Q)}if(ge(L)||U(L))return ht!==null?null:F(x,D,L,Q,null);if(typeof L.then=="function")return z(x,D,Yu(L),Q);if(L.$$typeof===mt)return z(x,D,Fu(x,L),Q);Xu(x,L)}return null}function j(x,D,L,Q,ht){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return x=x.get(L)||null,E(D,x,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case G:return x=x.get(Q.key===null?L:Q.key)||null,w(D,x,Q,ht);case Z:return x=x.get(Q.key===null?L:Q.key)||null,P(D,x,Q,ht);case b:return Q=Gr(Q),j(x,D,L,Q,ht)}if(ge(Q)||U(Q))return x=x.get(L)||null,F(D,x,Q,ht,null);if(typeof Q.then=="function")return j(x,D,L,Yu(Q),ht);if(Q.$$typeof===mt)return j(x,D,L,Fu(D,Q),ht);Xu(D,Q)}return null}function ot(x,D,L,Q){for(var ht=null,Ht=null,lt=D,It=D=0,xt=null;lt!==null&&It<L.length;It++){lt.index>It?(xt=lt,lt=null):xt=lt.sibling;var Ft=z(x,lt,L[It],Q);if(Ft===null){lt===null&&(lt=xt);break}e&&lt&&Ft.alternate===null&&i(x,lt),D=d(Ft,D,It),Ht===null?ht=Ft:Ht.sibling=Ft,Ht=Ft,lt=xt}if(It===L.length)return a(x,lt),zt&&Wi(x,It),ht;if(lt===null){for(;It<L.length;It++)lt=X(x,L[It],Q),lt!==null&&(D=d(lt,D,It),Ht===null?ht=lt:Ht.sibling=lt,Ht=lt);return zt&&Wi(x,It),ht}for(lt=l(lt);It<L.length;It++)xt=j(lt,x,It,L[It],Q),xt!==null&&(e&&xt.alternate!==null&&lt.delete(xt.key===null?It:xt.key),D=d(xt,D,It),Ht===null?ht=xt:Ht.sibling=xt,Ht=xt);return e&&lt.forEach(function(nr){return i(x,nr)}),zt&&Wi(x,It),ht}function gt(x,D,L,Q){if(L==null)throw Error(r(151));for(var ht=null,Ht=null,lt=D,It=D=0,xt=null,Ft=L.next();lt!==null&&!Ft.done;It++,Ft=L.next()){lt.index>It?(xt=lt,lt=null):xt=lt.sibling;var nr=z(x,lt,Ft.value,Q);if(nr===null){lt===null&&(lt=xt);break}e&&lt&&nr.alternate===null&&i(x,lt),D=d(nr,D,It),Ht===null?ht=nr:Ht.sibling=nr,Ht=nr,lt=xt}if(Ft.done)return a(x,lt),zt&&Wi(x,It),ht;if(lt===null){for(;!Ft.done;It++,Ft=L.next())Ft=X(x,Ft.value,Q),Ft!==null&&(D=d(Ft,D,It),Ht===null?ht=Ft:Ht.sibling=Ft,Ht=Ft);return zt&&Wi(x,It),ht}for(lt=l(lt);!Ft.done;It++,Ft=L.next())Ft=j(lt,x,It,Ft.value,Q),Ft!==null&&(e&&Ft.alternate!==null&&lt.delete(Ft.key===null?It:Ft.key),D=d(Ft,D,It),Ht===null?ht=Ft:Ht.sibling=Ft,Ht=Ft);return e&&lt.forEach(function(ub){return i(x,ub)}),zt&&Wi(x,It),ht}function ie(x,D,L,Q){if(typeof L=="object"&&L!==null&&L.type===it&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case G:t:{for(var ht=L.key;D!==null;){if(D.key===ht){if(ht=L.type,ht===it){if(D.tag===7){a(x,D.sibling),Q=h(D,L.props.children),Q.return=x,x=Q;break t}}else if(D.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===b&&Gr(ht)===D.type){a(x,D.sibling),Q=h(D,L.props),Wo(Q,L),Q.return=x,x=Q;break t}a(x,D);break}else i(x,D);D=D.sibling}L.type===it?(Q=Br(L.props.children,x.mode,Q,L.key),Q.return=x,x=Q):(Q=ju(L.type,L.key,L.props,null,x.mode,Q),Wo(Q,L),Q.return=x,x=Q)}return p(x);case Z:t:{for(ht=L.key;D!==null;){if(D.key===ht)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(x,D.sibling),Q=h(D,L.children||[]),Q.return=x,x=Q;break t}else{a(x,D);break}else i(x,D);D=D.sibling}Q=af(L,x.mode,Q),Q.return=x,x=Q}return p(x);case b:return L=Gr(L),ie(x,D,L,Q)}if(ge(L))return ot(x,D,L,Q);if(U(L)){if(ht=U(L),typeof ht!="function")throw Error(r(150));return L=ht.call(L),gt(x,D,L,Q)}if(typeof L.then=="function")return ie(x,D,Yu(L),Q);if(L.$$typeof===mt)return ie(x,D,Fu(x,L),Q);Xu(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(x,D.sibling),Q=h(D,L),Q.return=x,x=Q):(a(x,D),Q=rf(L,x.mode,Q),Q.return=x,x=Q),p(x)):a(x,D)}return function(x,D,L,Q){try{Zo=0;var ht=ie(x,D,L,Q);return Ha=null,ht}catch(lt){if(lt===qa||lt===Ku)throw lt;var Ht=An(29,lt,null,x.mode);return Ht.lanes=Q,Ht.return=x,Ht}finally{}}}var Qr=Ep(!0),Tp=Ep(!1),zs=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function js(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Kt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Bu(e),sp(e,null,a),i}return zu(e,l,i,a),Bu(e)}function tl(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Io(e,a)}}function Ef(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=p:d=d.next=p,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Tf=!1;function el(){if(Tf){var e=ja;if(e!==null)throw e}}function nl(e,i,a,l){Tf=!1;var h=e.updateQueue;zs=!1;var d=h.firstBaseUpdate,p=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,P=w.next;w.next=null,p===null?d=P:p.next=P,p=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==p&&(E===null?F.firstBaseUpdate=P:E.next=P,F.lastBaseUpdate=w))}if(d!==null){var X=h.baseState;p=0,F=P=w=null,E=d;do{var z=E.lane&-536870913,j=z!==E.lane;if(j?(Mt&z)===z:(l&z)===z){z!==0&&z===Ba&&(Tf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ot=e,gt=E;z=i;var ie=a;switch(gt.tag){case 1:if(ot=gt.payload,typeof ot=="function"){X=ot.call(ie,X,z);break t}X=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=gt.payload,z=typeof ot=="function"?ot.call(ie,X,z):ot,z==null)break t;X=S({},X,z);break t;case 2:zs=!0}}z=E.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(P=F=j,w=X):F=F.next=j,p|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;j=E,E=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);F===null&&(w=X),h.baseState=w,h.firstBaseUpdate=P,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),Ks|=p,e.lanes=p,e.memoizedState=X}}function Ap(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Sp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],i)}var Fa=O(null),Ju=O(0);function bp(e,i){e=cs,nt(Ju,e),nt(Fa,i),cs=e|i.baseLanes}function Af(){nt(Ju,cs),nt(Fa,Fa.current)}function Sf(){cs=Ju.current,K(Fa),K(Ju)}var Sn=O(null),jn=null;function qs(e){var i=e.alternate;nt(be,be.current&1),nt(Sn,e),jn===null&&(i===null||Fa.current!==null||i.memoizedState!==null)&&(jn=e)}function bf(e){nt(be,be.current),nt(Sn,e),jn===null&&(jn=e)}function Rp(e){e.tag===22?(nt(be,be.current),nt(Sn,e),jn===null&&(jn=e)):Hs()}function Hs(){nt(be,be.current),nt(Sn,Sn.current)}function bn(e){K(Sn),jn===e&&(jn=null),K(be)}var be=O(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dd(a)||Od(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ns=0,wt=null,ee=null,Ve=null,Zu=!1,Ga=!1,Yr=!1,Wu=0,il=0,Ka=null,W0=0;function ye(){throw Error(r(321))}function Rf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Tn(e[a],i[a]))return!1;return!0}function wf(e,i,a,l,h,d){return ns=d,wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?l_:jf,Yr=!1,d=a(l,h),Yr=!1,Ga&&(d=Ip(i,a,l,h)),wp(e),d}function wp(e){H.H=al;var i=ee!==null&&ee.next!==null;if(ns=0,Ve=ee=wt=null,Zu=!1,il=0,Ka=null,i)throw Error(r(300));e===null||Me||(e=e.dependencies,e!==null&&Hu(e)&&(Me=!0))}function Ip(e,i,a,l){wt=e;var h=0;do{if(Ga&&(Ka=null),il=0,Ga=!1,25<=h)throw Error(r(301));if(h+=1,Ve=ee=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=u_,d=i(a,l)}while(Ga);return d}function tS(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?sl(i):i,e=e.useState()[0],(ee!==null?ee.memoizedState:null)!==e&&(wt.flags|=1024),i}function If(){var e=Wu!==0;return Wu=0,e}function Cf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Nf(e){if(Zu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zu=!1}ns=0,Ve=ee=wt=null,Ga=!1,il=Wu=0,Ka=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?wt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Re(){if(ee===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var i=Ve===null?wt.memoizedState:Ve.next;if(i!==null)Ve=i,ee=e;else{if(e===null)throw wt.alternate===null?Error(r(467)):Error(r(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},Ve===null?wt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var i=il;return il+=1,Ka===null&&(Ka=[]),e=_p(Ka,e,i),i=wt,(Ve===null?i.memoizedState:Ve.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?l_:jf),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===mt)return Xe(e)}throw Error(r(438,String(e)))}function Df(e){var i=null,a=wt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=wt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=tc(),wt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function is(e,i){return typeof i=="function"?i(e):i}function nc(e){var i=Re();return Of(i,ee,e)}function Of(e,i,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var p=h.next;h.next=d.next,d.next=p}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=p=null,w=null,P=i,F=!1;do{var X=P.lane&-536870913;if(X!==P.lane?(Mt&X)===X:(ns&X)===X){var z=P.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),X===Ba&&(F=!0);else if((ns&z)===z){P=P.next,z===Ba&&(F=!0);continue}else X={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},w===null?(E=w=X,p=d):w=w.next=X,wt.lanes|=z,Ks|=z;X=P.action,Yr&&a(d,X),d=P.hasEagerState?P.eagerState:a(d,X)}else z={lane:X,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},w===null?(E=w=z,p=d):w=w.next=z,wt.lanes|=X,Ks|=X;P=P.next}while(P!==null&&P!==i);if(w===null?p=d:w.next=E,!Tn(d,e.memoizedState)&&(Me=!0,F&&(a=ja,a!==null)))throw a;e.memoizedState=d,e.baseState=p,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vf(e){var i=Re(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var p=h=h.next;do d=e(d,p.action),p=p.next;while(p!==h);Tn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Cp(e,i,a){var l=wt,h=Re(),d=zt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var p=!Tn((ee||h).memoizedState,a);if(p&&(h.memoizedState=a,Me=!0),h=h.queue,Uf(Op.bind(null,l,h,e),[e]),h.getSnapshot!==i||p||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,Qa(9,{destroy:void 0},Dp.bind(null,l,h,a,i),null),re===null)throw Error(r(349));d||(ns&127)!==0||Np(l,i,a)}return a}function Np(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=wt.updateQueue,i===null?(i=tc(),wt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Dp(e,i,a,l){i.value=a,i.getSnapshot=l,Vp(i)&&Mp(e)}function Op(e,i,a){return a(function(){Vp(i)&&Mp(e)})}function Vp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Tn(e,a)}catch{return!0}}function Mp(e){var i=zr(e,2);i!==null&&pn(i,e,2)}function Mf(e){var i=ln();if(typeof e=="function"){var a=e;if(e=a(),Yr){On(!0);try{a()}finally{On(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},i}function xp(e,i,a,l){return e.baseState=a,Of(e,ee,typeof l=="function"?l:is)}function eS(e,i,a,l,h){if(rc(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Up(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Up(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,p={};H.T=p;try{var E=a(h,l),w=H.S;w!==null&&w(p,E),kp(e,i,E)}catch(P){xf(e,i,P)}finally{d!==null&&p.types!==null&&(d.types=p.types),H.T=d}}else try{d=a(h,l),kp(e,i,d)}catch(P){xf(e,i,P)}}function kp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Lp(e,i,l)},function(l){return xf(e,i,l)}):Lp(e,i,a)}function Lp(e,i,a){i.status="fulfilled",i.value=a,Pp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Up(e,a)))}function xf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Pp(i),i=i.next;while(i!==l)}e.action=null}function Pp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function zp(e,i){return i}function Bp(e,i){if(zt){var a=re.formState;if(a!==null){t:{var l=wt;if(zt){if(ae){e:{for(var h=ae,d=Bn;h.nodeType!==8;){if(!d){h=null;break e}if(h=qn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ae=qn(h.nextSibling),l=h.data==="F!";break t}}Ls(l)}l=!1}l&&(i=a[0])}}return a=ln(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:i},a.queue=l,a=r_.bind(null,wt,l),l.dispatch=a,l=Mf(!1),d=Bf.bind(null,wt,!1,l.queue),l=ln(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=eS.bind(null,wt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function jp(e){var i=Re();return qp(i,ee,e)}function qp(e,i,a){if(i=Of(e,i,zp)[0],e=nc(is)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=sl(i)}catch(p){throw p===qa?Ku:p}else l=i;i=Re();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(wt.flags|=2048,Qa(9,{destroy:void 0},nS.bind(null,h,a),null)),[l,d,e]}function nS(e,i){e.action=i}function Hp(e){var i=Re(),a=ee;if(a!==null)return qp(i,a,e);Re(),i=i.memoizedState,a=Re();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Qa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=wt.updateQueue,i===null&&(i=tc(),wt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Fp(){return Re().memoizedState}function ic(e,i,a,l){var h=ln();wt.flags|=e,h.memoizedState=Qa(1|i,{destroy:void 0},a,l===void 0?null:l)}function sc(e,i,a,l){var h=Re();l=l===void 0?null:l;var d=h.memoizedState.inst;ee!==null&&l!==null&&Rf(l,ee.memoizedState.deps)?h.memoizedState=Qa(i,d,a,l):(wt.flags|=e,h.memoizedState=Qa(1|i,d,a,l))}function Gp(e,i){ic(8390656,8,e,i)}function Uf(e,i){sc(2048,8,e,i)}function iS(e){wt.flags|=4;var i=wt.updateQueue;if(i===null)i=tc(),wt.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Kp(e){var i=Re().memoizedState;return iS({ref:i,nextImpl:e}),function(){if((Kt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Qp(e,i){return sc(4,2,e,i)}function Yp(e,i){return sc(4,4,e,i)}function Xp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Jp(e,i,a){a=a!=null?a.concat([e]):null,sc(4,4,Xp.bind(null,i,e),a)}function kf(){}function $p(e,i){var a=Re();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Rf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Zp(e,i){var a=Re();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Rf(i,l[1]))return l[0];if(l=e(),Yr){On(!0);try{e()}finally{On(!1)}}return a.memoizedState=[l,i],l}function Lf(e,i,a){return a===void 0||(ns&1073741824)!==0&&(Mt&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=W_(),wt.lanes|=e,Ks|=e,a)}function Wp(e,i,a,l){return Tn(a,i)?a:Fa.current!==null?(e=Lf(e,a,l),Tn(e,i)||(Me=!0),e):(ns&42)===0||(ns&1073741824)!==0&&(Mt&261930)===0?(Me=!0,e.memoizedState=a):(e=W_(),wt.lanes|=e,Ks|=e,i)}function t_(e,i,a,l,h){var d=et.p;et.p=d!==0&&8>d?d:8;var p=H.T,E={};H.T=E,Bf(e,!1,i,a);try{var w=h(),P=H.S;if(P!==null&&P(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=Z0(w,l);rl(e,i,F,In(e))}else rl(e,i,l,In(e))}catch(X){rl(e,i,{then:function(){},status:"rejected",reason:X},In())}finally{et.p=d,p!==null&&E.types!==null&&(p.types=E.types),H.T=p}}function sS(){}function Pf(e,i,a,l){if(e.tag!==5)throw Error(r(476));var h=e_(e).queue;t_(e,h,i,ct,a===null?sS:function(){return n_(e),a(l)})}function e_(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:ct},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function n_(e){var i=e_(e);i.next===null&&(i=e.alternate.memoizedState),rl(e,i.next.queue,{},In())}function zf(){return Xe(Al)}function i_(){return Re().memoizedState}function s_(){return Re().memoizedState}function rS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=In();e=Bs(a);var l=js(i,e,a);l!==null&&(pn(l,i,a),tl(l,i,a)),i={cache:mf()},e.payload=i;return}i=i.return}}function aS(e,i,a){var l=In();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(e)?a_(i,a):(a=nf(e,i,a,l),a!==null&&(pn(a,e,l),o_(a,i,l)))}function r_(e,i,a){var l=In();rl(e,i,a,l)}function rl(e,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(e))a_(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var p=i.lastRenderedState,E=d(p,a);if(h.hasEagerState=!0,h.eagerState=E,Tn(E,p))return zu(e,i,h,0),re===null&&Pu(),!1}catch{}finally{}if(a=nf(e,i,h,l),a!==null)return pn(a,e,l),o_(a,i,l),!0}return!1}function Bf(e,i,a,l){if(l={lane:2,revertLane:yd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(i)throw Error(r(479))}else i=nf(e,a,l,2),i!==null&&pn(i,e,2)}function rc(e){var i=e.alternate;return e===wt||i!==null&&i===wt}function a_(e,i){Ga=Zu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function o_(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Io(e,a)}}var al={readContext:Xe,use:ec,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};al.useEffectEvent=ye;var l_={readContext:Xe,use:ec,useCallback:function(e,i){return ln().memoizedState=[e,i===void 0?null:i],e},useContext:Xe,useEffect:Gp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ic(4194308,4,Xp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ic(4194308,4,e,i)},useInsertionEffect:function(e,i){ic(4,2,e,i)},useMemo:function(e,i){var a=ln();i=i===void 0?null:i;var l=e();if(Yr){On(!0);try{e()}finally{On(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=ln();if(a!==void 0){var h=a(i);if(Yr){On(!0);try{a(i)}finally{On(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=aS.bind(null,wt,e),[l.memoizedState,e]},useRef:function(e){var i=ln();return e={current:e},i.memoizedState=e},useState:function(e){e=Mf(e);var i=e.queue,a=r_.bind(null,wt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:kf,useDeferredValue:function(e,i){var a=ln();return Lf(a,e,i)},useTransition:function(){var e=Mf(!1);return e=t_.bind(null,wt,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=wt,h=ln();if(zt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),re===null)throw Error(r(349));(Mt&127)!==0||Np(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Gp(Op.bind(null,l,d,e),[e]),l.flags|=2048,Qa(9,{destroy:void 0},Dp.bind(null,l,d,a,i),null),a},useId:function(){var e=ln(),i=re.identifierPrefix;if(zt){var a=Oi,l=Di;a=(l&~(1<<32-Ae(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Wu++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=W0++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:zf,useFormState:Bp,useActionState:Bp,useOptimistic:function(e){var i=ln();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Bf.bind(null,wt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Df,useCacheRefresh:function(){return ln().memoizedState=rS.bind(null,wt)},useEffectEvent:function(e){var i=ln(),a={impl:e};return i.memoizedState=a,function(){if((Kt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},jf={readContext:Xe,use:ec,useCallback:$p,useContext:Xe,useEffect:Uf,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:Zp,useReducer:nc,useRef:Fp,useState:function(){return nc(is)},useDebugValue:kf,useDeferredValue:function(e,i){var a=Re();return Wp(a,ee.memoizedState,e,i)},useTransition:function(){var e=nc(is)[0],i=Re().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:Cp,useId:i_,useHostTransitionStatus:zf,useFormState:jp,useActionState:jp,useOptimistic:function(e,i){var a=Re();return xp(a,ee,e,i)},useMemoCache:Df,useCacheRefresh:s_};jf.useEffectEvent=Kp;var u_={readContext:Xe,use:ec,useCallback:$p,useContext:Xe,useEffect:Uf,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:Zp,useReducer:Vf,useRef:Fp,useState:function(){return Vf(is)},useDebugValue:kf,useDeferredValue:function(e,i){var a=Re();return ee===null?Lf(a,e,i):Wp(a,ee.memoizedState,e,i)},useTransition:function(){var e=Vf(is)[0],i=Re().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:Cp,useId:i_,useHostTransitionStatus:zf,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,i){var a=Re();return ee!==null?xp(a,ee,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Df,useCacheRefresh:s_};u_.useEffectEvent=Kp;function qf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:S({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=In(),h=Bs(l);h.payload=i,a!=null&&(h.callback=a),i=js(e,h,l),i!==null&&(pn(i,e,l),tl(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=In(),h=Bs(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=js(e,h,l),i!==null&&(pn(i,e,l),tl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=In(),l=Bs(a);l.tag=2,i!=null&&(l.callback=i),i=js(e,l,a),i!==null&&(pn(i,e,a),tl(i,e,a))}};function c_(e,i,a,l,h,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,p):i.prototype&&i.prototype.isPureReactComponent?!Ko(a,l)||!Ko(h,d):!0}function h_(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Hf.enqueueReplaceState(i,i.state,null)}function Xr(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=S({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function f_(e){Lu(e)}function d_(e){console.error(e)}function m_(e){Lu(e)}function ac(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function g_(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ff(e,i,a){return a=Bs(a),a.tag=3,a.payload={element:null},a.callback=function(){ac(e,i)},a}function p_(e){return e=Bs(e),e.tag=3,e}function __(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){g_(i,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){g_(i,a,l),typeof h!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function oS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&za(i,a,h,!0),a=Sn.current,a!==null){switch(a.tag){case 31:case 13:return jn===null?yc():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Qu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),gd(e,l,h)),!1;case 22:return a.flags|=65536,l===Qu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),gd(e,l,h)),!1}throw Error(r(435,a.tag))}return gd(e,l,h),yc(),!1}if(zt)return i=Sn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==uf&&(e=Error(r(422),{cause:l}),Xo(Ln(e,a)))):(l!==uf&&(i=Error(r(423),{cause:l}),Xo(Ln(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ln(l,a),h=Ff(e.stateNode,l,h),Ef(e,h),ve!==4&&(ve=2)),!1;var d=Error(r(520),{cause:l});if(d=Ln(d,a),ml===null?ml=[d]:ml.push(d),ve!==4&&(ve=2),i===null)return!0;l=Ln(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Ff(a.stateNode,l,e),Ef(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Qs===null||!Qs.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=p_(h),__(h,e,a,l),Ef(a,h),!1}a=a.return}while(a!==null);return!1}var Gf=Error(r(461)),Me=!1;function Je(e,i,a,l){i.child=e===null?Tp(i,null,a,l):Qr(i,e.child,a,l)}function y_(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var p={};for(var E in l)E!=="ref"&&(p[E]=l[E])}else p=l;return Hr(i),l=wf(e,i,a,p,d,h),E=If(),e!==null&&!Me?(Cf(e,i,h),ss(e,i,h)):(zt&&E&&of(i),i.flags|=1,Je(e,i,l,h),i.child)}function v_(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!sf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,E_(e,i,d,l,h)):(e=ju(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Wf(e,h)){var p=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ko,a(p,l)&&e.ref===i.ref)return ss(e,i,h)}return i.flags|=1,e=Zi(d,l),e.ref=i.ref,e.return=i,i.child=e}function E_(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Ko(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,Wf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,ss(e,i,h)}return Kf(e,i,a,l,h)}function T_(e,i,a,l){var h=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return A_(e,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(i,d!==null?d.cachePool:null),d!==null?bp(i,d):Af(),Rp(i);else return l=i.lanes=536870912,A_(e,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Gu(i,d.cachePool),bp(i,d),Hs(),i.memoizedState=null):(e!==null&&Gu(i,null),Af(),Hs());return Je(e,i,h,a),i.child}function ol(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function A_(e,i,a,l,h){var d=pf();return d=d===null?null:{parent:Oe._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Gu(i,null),Af(),Rp(i),e!==null&&za(e,i,l,!0),i.childLanes=h,null}function oc(e,i){return i=uc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function S_(e,i,a){return Qr(i,e.child,null,a),e=oc(i,i.pendingProps),e.flags|=2,bn(i),i.memoizedState=null,e}function lS(e,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(zt){if(l.mode==="hidden")return e=oc(i,l),i.lanes=536870912,ol(null,e);if(bf(i),(e=ae)?(e=Uy(e,Bn),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Us!==null?{id:Di,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=i,i.child=a,Ye=i,ae=null)):e=null,e===null)throw Ls(i);return i.lanes=536870912,null}return oc(i,l)}var d=e.memoizedState;if(d!==null){var p=d.dehydrated;if(bf(i),h)if(i.flags&256)i.flags&=-257,i=S_(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(r(558));else if(Me||za(e,i,a,!1),h=(a&e.childLanes)!==0,Me||h){if(l=re,l!==null&&(p=Co(l,a),p!==0&&p!==d.retryLane))throw d.retryLane=p,zr(e,p),pn(l,e,p),Gf;yc(),i=S_(e,i,a)}else e=d.treeContext,ae=qn(p.nextSibling),Ye=i,zt=!0,ks=null,Bn=!1,e!==null&&up(i,e),i=oc(i,l),i.flags|=4096;return i}return e=Zi(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function lc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Kf(e,i,a,l,h){return Hr(i),a=wf(e,i,a,l,void 0,h),l=If(),e!==null&&!Me?(Cf(e,i,h),ss(e,i,h)):(zt&&l&&of(i),i.flags|=1,Je(e,i,a,h),i.child)}function b_(e,i,a,l,h,d){return Hr(i),i.updateQueue=null,a=Ip(i,l,a,h),wp(e),l=If(),e!==null&&!Me?(Cf(e,i,d),ss(e,i,d)):(zt&&l&&of(i),i.flags|=1,Je(e,i,a,d),i.child)}function R_(e,i,a,l,h){if(Hr(i),i.stateNode===null){var d=Ua,p=a.contextType;typeof p=="object"&&p!==null&&(d=Xe(p)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Hf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},yf(i),p=a.contextType,d.context=typeof p=="object"&&p!==null?Xe(p):Ua,d.state=i.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(qf(i,a,p,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&Hf.enqueueReplaceState(d,d.state,null),nl(i,l,d,h),el(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Xr(a,E);d.props=w;var P=d.context,F=a.contextType;p=Ua,typeof F=="object"&&F!==null&&(p=Xe(F));var X=a.getDerivedStateFromProps;F=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||P!==p)&&h_(i,d,l,p),zs=!1;var z=i.memoizedState;d.state=z,nl(i,l,d,h),el(),P=i.memoizedState,E||z!==P||zs?(typeof X=="function"&&(qf(i,a,X,l),P=i.memoizedState),(w=zs||c_(i,a,w,l,z,P,p))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=P),d.props=l,d.state=P,d.context=p,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,vf(e,i),p=i.memoizedProps,F=Xr(a,p),d.props=F,X=i.pendingProps,z=d.context,P=a.contextType,w=Ua,typeof P=="object"&&P!==null&&(w=Xe(P)),E=a.getDerivedStateFromProps,(P=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==X||z!==w)&&h_(i,d,l,w),zs=!1,z=i.memoizedState,d.state=z,nl(i,l,d,h),el();var j=i.memoizedState;p!==X||z!==j||zs||e!==null&&e.dependencies!==null&&Hu(e.dependencies)?(typeof E=="function"&&(qf(i,a,E,l),j=i.memoizedState),(F=zs||c_(i,a,F,l,z,j,w)||e!==null&&e.dependencies!==null&&Hu(e.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,lc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Qr(i,e.child,null,h),i.child=Qr(i,null,a,h)):Je(e,i,a,h),i.memoizedState=d.state,e=i.child):e=ss(e,i,h),e}function w_(e,i,a,l){return jr(),i.flags|=256,Je(e,i,a,l),i.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:gp()}}function Xf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=wn),e}function I_(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(be.current&2)!==0),p&&(h=!0,i.flags&=-129),p=(i.flags&32)!==0,i.flags&=-33,e===null){if(zt){if(h?qs(i):Hs(),(e=ae)?(e=Uy(e,Bn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Us!==null?{id:Di,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=ap(e),a.return=i,i.child=a,Ye=i,ae=null)):e=null,e===null)throw Ls(i);return Od(e)?i.lanes=32:i.lanes=536870912,null}var E=l.children;return l=l.fallback,h?(Hs(),h=i.mode,E=uc({mode:"hidden",children:E},h),l=Br(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,l=i.child,l.memoizedState=Yf(a),l.childLanes=Xf(e,p,a),i.memoizedState=Qf,ol(null,l)):(qs(i),Jf(i,E))}var w=e.memoizedState;if(w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(qs(i),i.flags&=-257,i=$f(e,i,a)):i.memoizedState!==null?(Hs(),i.child=e.child,i.flags|=128,i=null):(Hs(),E=l.fallback,h=i.mode,l=uc({mode:"visible",children:l.children},h),E=Br(E,h,a,null),E.flags|=2,l.return=i,E.return=i,l.sibling=E,i.child=l,Qr(i,e.child,null,a),l=i.child,l.memoizedState=Yf(a),l.childLanes=Xf(e,p,a),i.memoizedState=Qf,i=ol(null,l));else if(qs(i),Od(E)){if(p=E.nextSibling&&E.nextSibling.dataset,p)var P=p.dgst;p=P,l=Error(r(419)),l.stack="",l.digest=p,Xo({value:l,source:null,stack:null}),i=$f(e,i,a)}else if(Me||za(e,i,a,!1),p=(a&e.childLanes)!==0,Me||p){if(p=re,p!==null&&(l=Co(p,a),l!==0&&l!==w.retryLane))throw w.retryLane=l,zr(e,l),pn(p,e,l),Gf;Dd(E)||yc(),i=$f(e,i,a)}else Dd(E)?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,ae=qn(E.nextSibling),Ye=i,zt=!0,ks=null,Bn=!1,e!==null&&up(i,e),i=Jf(i,l.children),i.flags|=4096);return i}return h?(Hs(),E=l.fallback,h=i.mode,w=e.child,P=w.sibling,l=Zi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,P!==null?E=Zi(P,E):(E=Br(E,h,a,null),E.flags|=2),E.return=i,l.return=i,l.sibling=E,i.child=l,ol(null,l),l=i.child,E=e.child.memoizedState,E===null?E=Yf(a):(h=E.cachePool,h!==null?(w=Oe._currentValue,h=h.parent!==w?{parent:w,pool:w}:h):h=gp(),E={baseLanes:E.baseLanes|a,cachePool:h}),l.memoizedState=E,l.childLanes=Xf(e,p,a),i.memoizedState=Qf,ol(e.child,l)):(qs(i),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(p=i.deletions,p===null?(i.deletions=[e],i.flags|=16):p.push(e)),i.child=a,i.memoizedState=null,a)}function Jf(e,i){return i=uc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function uc(e,i){return e=An(22,e,null,i),e.lanes=0,e}function $f(e,i,a){return Qr(i,e.child,null,a),e=Jf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function C_(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ff(e.return,i,a)}function Zf(e,i,a,l,h,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=h,p.treeForkCount=d)}function N_(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var p=be.current,E=(p&2)!==0;if(E?(p=p&1|2,i.flags|=128):p&=1,nt(be,p),Je(e,i,l,a),l=zt?Yo:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&C_(e,a,i);else if(e.tag===19)C_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Zf(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Zf(i,!0,a,null,d,l);break;case"together":Zf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ss(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ks|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(za(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=Zi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Hu(e)))}function uS(e,i,a){switch(i.tag){case 3:pe(i,i.stateNode.containerInfo),Ps(i,Oe,e.memoizedState.cache),jr();break;case 27:case 5:Yn(i);break;case 4:pe(i,i.stateNode.containerInfo);break;case 10:Ps(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qs(i),i.flags|=128,null):(a&i.child.childLanes)!==0?I_(e,i,a):(qs(i),e=ss(e,i,a),e!==null?e.sibling:null);qs(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(za(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return N_(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nt(be,be.current),l)break;return null;case 22:return i.lanes=0,T_(e,i,a,i.pendingProps);case 24:Ps(i,Oe,e.memoizedState.cache)}return ss(e,i,a)}function D_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!Wf(e,a)&&(i.flags&128)===0)return Me=!1,uS(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,zt&&(i.flags&1048576)!==0&&lp(i,Yo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Gr(i.elementType),i.type=e,typeof e=="function")sf(e)?(l=Xr(e,l),i.tag=1,i=R_(null,i,e,l,a)):(i.tag=0,i=Kf(null,i,e,l,a));else{if(e!=null){var h=e.$$typeof;if(h===bt){i.tag=11,i=y_(null,i,e,l,a);break t}else if(h===I){i.tag=14,i=v_(null,i,e,l,a);break t}}throw i=Zt(e)||e,Error(r(306,i,""))}}return i;case 0:return Kf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Xr(l,i.pendingProps),R_(e,i,l,h,a);case 3:t:{if(pe(i,i.stateNode.containerInfo),e===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,vf(e,i),nl(i,l,null,a);var p=i.memoizedState;if(l=p.cache,Ps(i,Oe,l),l!==d.cache&&df(i,[Oe],a,!0),el(),l=p.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:p.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=w_(e,i,l,a);break t}else if(l!==h){h=Ln(Error(r(424)),i),Xo(h),i=w_(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=qn(e.firstChild),Ye=i,zt=!0,ks=null,Bn=!0,a=Tp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(jr(),l===h){i=ss(e,i,a);break t}Je(e,i,l,a)}i=i.child}return i;case 26:return lc(e,i),e===null?(a=jy(i.type,null,i.pendingProps,null))?i.memoizedState=a:zt||(a=i.type,e=i.pendingProps,l=Rc(Et.current).createElement(a),l[Ce]=i,l[qe]=e,$e(l,a,e),Ne(l),i.stateNode=l):i.memoizedState=jy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yn(i),e===null&&zt&&(l=i.stateNode=Py(i.type,i.pendingProps,Et.current),Ye=i,Bn=!0,h=ae,$s(i.type)?(Vd=h,ae=qn(l.firstChild)):ae=h),Je(e,i,i.pendingProps.children,a),lc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&zt&&((h=l=ae)&&(l=zS(l,i.type,i.pendingProps,Bn),l!==null?(i.stateNode=l,Ye=i,ae=qn(l.firstChild),Bn=!1,h=!0):h=!1),h||Ls(i)),Yn(i),h=i.type,d=i.pendingProps,p=e!==null?e.memoizedProps:null,l=d.children,Id(h,d)?l=null:p!==null&&Id(h,p)&&(i.flags|=32),i.memoizedState!==null&&(h=wf(e,i,tS,null,null,a),Al._currentValue=h),lc(e,i),Je(e,i,l,a),i.child;case 6:return e===null&&zt&&((e=a=ae)&&(a=BS(a,i.pendingProps,Bn),a!==null?(i.stateNode=a,Ye=i,ae=null,e=!0):e=!1),e||Ls(i)),null;case 13:return I_(e,i,a);case 4:return pe(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Qr(i,null,l,a):Je(e,i,l,a),i.child;case 11:return y_(e,i,i.type,i.pendingProps,a);case 7:return Je(e,i,i.pendingProps,a),i.child;case 8:return Je(e,i,i.pendingProps.children,a),i.child;case 12:return Je(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ps(i,i.type,l.value),Je(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Hr(i),h=Xe(h),l=l(h),i.flags|=1,Je(e,i,l,a),i.child;case 14:return v_(e,i,i.type,i.pendingProps,a);case 15:return E_(e,i,i.type,i.pendingProps,a);case 19:return N_(e,i,a);case 31:return lS(e,i,a);case 22:return T_(e,i,a,i.pendingProps);case 24:return Hr(i),l=Xe(Oe),e===null?(h=pf(),h===null&&(h=re,d=mf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},yf(i),Ps(i,Oe,h)):((e.lanes&a)!==0&&(vf(e,i),nl(i,null,null,a),el()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ps(i,Oe,l)):(l=d.cache,Ps(i,Oe,l),l!==h.cache&&df(i,[Oe],a,!0))),Je(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function rs(e){e.flags|=4}function td(e,i,a,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(iy())e.flags|=8192;else throw Kr=Qu,_f}else e.flags&=-16777217}function O_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ky(i))if(iy())e.flags|=8192;else throw Kr=Qu,_f}function cc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?pu():536870912,e.lanes|=i,$a|=i)}function ll(e,i){if(!zt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function cS(e,i,a){var l=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(i),null;case 1:return oe(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),es(Oe),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pa(i)?rs(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cf())),oe(i),null;case 26:var h=i.type,d=i.memoizedState;return e===null?(rs(i),d!==null?(oe(i),O_(i,d)):(oe(i),td(i,h,null,l,a))):d?d!==e.memoizedState?(rs(i),oe(i),O_(i,d)):(oe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&rs(i),oe(i),td(i,h,e,l,a)),null;case 27:if(Gi(i),a=Et.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&rs(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return oe(i),null}e=st.current,Pa(i)?cp(i):(e=Py(h,l,a),i.stateNode=e,rs(i))}return oe(i),null;case 5:if(Gi(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&rs(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return oe(i),null}if(d=st.current,Pa(i))cp(i);else{var p=Rc(Et.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?p.createElement(h,{is:l.is}):p.createElement(h)}}d[Ce]=i,d[qe]=l;t:for(p=i.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===i)break t;for(;p.sibling===null;){if(p.return===null||p.return===i)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}i.stateNode=d;t:switch($e(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&rs(i)}}return oe(i),td(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&rs(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=Et.current,Pa(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Ye,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ce]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Iy(e.nodeValue,a)),e||Ls(i,!0)}else e=Rc(e).createTextNode(l),e[Ce]=i,i.stateNode=e}return oe(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(l=Pa(i),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ce]=i}else jr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;oe(i),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(bn(i),i):(bn(i),null);if((i.flags&128)!==0)throw Error(r(558))}return oe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Pa(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Ce]=i}else jr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;oe(i),h=!1}else h=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(bn(i),i):(bn(i),null)}return bn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),cc(i,i.updateQueue),oe(i),null);case 4:return Qt(),e===null&&Ad(i.stateNode.containerInfo),oe(i),null;case 10:return es(i.type),oe(i),null;case 19:if(K(be),l=i.memoizedState,l===null)return oe(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)ll(l,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=$u(e),d!==null){for(i.flags|=128,ll(l,!1),e=d.updateQueue,i.updateQueue=e,cc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)rp(a,e),a=a.sibling;return nt(be,be.current&1|2),zt&&Wi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Pt()>gc&&(i.flags|=128,h=!0,ll(l,!1),i.lanes=4194304)}else{if(!h)if(e=$u(d),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,cc(i,e),ll(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!zt)return oe(i),null}else 2*Pt()-l.renderingStartTime>gc&&a!==536870912&&(i.flags|=128,h=!0,ll(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Pt(),e.sibling=null,a=be.current,nt(be,h?a&1|2:a&1),zt&&Wi(i,l.treeForkCount),e):(oe(i),null);case 22:case 23:return bn(i),Sf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(oe(i),i.subtreeFlags&6&&(i.flags|=8192)):oe(i),a=i.updateQueue,a!==null&&cc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&K(Fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),es(Oe),oe(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function hS(e,i){switch(lf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return es(Oe),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Gi(i),null;case 31:if(i.memoizedState!==null){if(bn(i),i.alternate===null)throw Error(r(340));jr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(bn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));jr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(be),null;case 4:return Qt(),null;case 10:return es(i.type),null;case 22:case 23:return bn(i),Sf(),e!==null&&K(Fr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return es(Oe),null;case 25:return null;default:return null}}function V_(e,i){switch(lf(i),i.tag){case 3:es(Oe),Qt();break;case 26:case 27:case 5:Gi(i);break;case 4:Qt();break;case 31:i.memoizedState!==null&&bn(i);break;case 13:bn(i);break;case 19:K(be);break;case 10:es(i.type);break;case 22:case 23:bn(i),Sf(),e!==null&&K(Fr);break;case 24:es(Oe)}}function ul(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,p=a.inst;l=d(),p.destroy=l}a=a.next}while(a!==h)}}catch(E){$t(i,i.return,E)}}function Fs(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var p=l.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,h=i;var w=a,P=E;try{P()}catch(F){$t(h,w,F)}}}l=l.next}while(l!==d)}}catch(F){$t(i,i.return,F)}}function M_(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Sp(i,a)}catch(l){$t(e,e.return,l)}}}function x_(e,i,a){a.props=Xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$t(e,i,l)}}function cl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){$t(e,i,h)}}function Vi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function U_(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function ed(e,i,a){try{var l=e.stateNode;MS(l,e.type,a,i),l[qe]=i}catch(h){$t(e,e.return,h)}}function k_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$s(e.type)||e.tag===4}function nd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ti));else if(l!==4&&(l===27&&$s(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(id(e,i,a),e=e.sibling;e!==null;)id(e,i,a),e=e.sibling}function hc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&$s(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(hc(e,i,a),e=e.sibling;e!==null;)hc(e,i,a),e=e.sibling}function L_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);$e(i,l,a),i[Ce]=e,i[qe]=a}catch(d){$t(e,e.return,d)}}var as=!1,xe=!1,sd=!1,P_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function fS(e,i){if(e=e.containerInfo,Rd=Vc,e=Jg(e),Jh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var p=0,E=-1,w=-1,P=0,F=0,X=e,z=null;e:for(;;){for(var j;X!==a||h!==0&&X.nodeType!==3||(E=p+h),X!==d||l!==0&&X.nodeType!==3||(w=p+l),X.nodeType===3&&(p+=X.nodeValue.length),(j=X.firstChild)!==null;)z=X,X=j;for(;;){if(X===e)break e;if(z===a&&++P===h&&(E=p),z===d&&++F===l&&(w=p),(j=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=j}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(wd={focusedElem:e,selectionRange:a},Vc=!1,Fe=i;Fe!==null;)if(i=Fe,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Fe=e;else for(;Fe!==null;){switch(i=Fe,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ot=Xr(a.type,h);e=l.getSnapshotBeforeUpdate(ot,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(gt){$t(a,a.return,gt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Fe=e;break}Fe=i.return}}function z_(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ls(e,a),l&4&&ul(5,a);break;case 1:if(ls(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(p){$t(a,a.return,p)}else{var h=Xr(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(p){$t(a,a.return,p)}}l&64&&M_(a),l&512&&cl(a,a.return);break;case 3:if(ls(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Sp(e,i)}catch(p){$t(a,a.return,p)}}break;case 27:i===null&&l&4&&L_(a);case 26:case 5:ls(e,a),i===null&&l&4&&U_(a),l&512&&cl(a,a.return);break;case 12:ls(e,a);break;case 31:ls(e,a),l&4&&q_(e,a);break;case 13:ls(e,a),l&4&&H_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=TS.bind(null,a),jS(e,a))));break;case 22:if(l=a.memoizedState!==null||as,!l){i=i!==null&&i.memoizedState!==null||xe,h=as;var d=xe;as=l,(xe=i)&&!d?us(e,a,(a.subtreeFlags&8772)!==0):ls(e,a),as=h,xe=d}break;case 30:break;default:ls(e,a)}}function B_(e){var i=e.alternate;i!==null&&(e.alternate=null,B_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ta(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,fn=!1;function os(e,i,a){for(a=a.child;a!==null;)j_(e,i,a),a=a.sibling}function j_(e,i,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Jn,a)}catch{}switch(a.tag){case 26:xe||Vi(a,i),os(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xe||Vi(a,i);var l=fe,h=fn;$s(a.type)&&(fe=a.stateNode,fn=!1),os(e,i,a),vl(a.stateNode),fe=l,fn=h;break;case 5:xe||Vi(a,i);case 6:if(l=fe,h=fn,fe=null,os(e,i,a),fe=l,fn=h,fe!==null)if(fn)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{fe.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:fe!==null&&(fn?(e=fe,My(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ro(e)):My(fe,a.stateNode));break;case 4:l=fe,h=fn,fe=a.stateNode.containerInfo,fn=!0,os(e,i,a),fe=l,fn=h;break;case 0:case 11:case 14:case 15:Fs(2,a,i),xe||Fs(4,a,i),os(e,i,a);break;case 1:xe||(Vi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&x_(a,i,l)),os(e,i,a);break;case 21:os(e,i,a);break;case 22:xe=(l=xe)||a.memoizedState!==null,os(e,i,a),xe=l;break;default:os(e,i,a)}}function q_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ro(e)}catch(a){$t(i,i.return,a)}}}function H_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ro(e)}catch(a){$t(i,i.return,a)}}function dS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new P_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new P_),i;default:throw Error(r(435,e.tag))}}function fc(e,i){var a=dS(e);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=AS.bind(null,e,l);l.then(h,h)}})}function dn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,p=i,E=p;t:for(;E!==null;){switch(E.tag){case 27:if($s(E.type)){fe=E.stateNode,fn=!1;break t}break;case 5:fe=E.stateNode,fn=!1;break t;case 3:case 4:fe=E.stateNode.containerInfo,fn=!0;break t}E=E.return}if(fe===null)throw Error(r(160));j_(d,p,h),fe=null,fn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)F_(i,e),i=i.sibling}var ai=null;function F_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(i,e),mn(e),l&4&&(Fs(3,e,e.return),ul(3,e),Fs(5,e,e.return));break;case 1:dn(i,e),mn(e),l&512&&(xe||a===null||Vi(a,a.return)),l&64&&as&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ai;if(dn(i,e),mn(e),l&512&&(xe||a===null||Vi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[yi]||d[Ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),$e(d,l,a),d[Ce]=e,Ne(d),l=d;break t;case"link":var p=Fy("link","href",h).get(l+(a.href||""));if(p){for(var E=0;E<p.length;E++)if(d=p[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(E,1);break e}}d=h.createElement(l),$e(d,l,a),h.head.appendChild(d);break;case"meta":if(p=Fy("meta","content",h).get(l+(a.content||""))){for(E=0;E<p.length;E++)if(d=p[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(E,1);break e}}d=h.createElement(l),$e(d,l,a),h.head.appendChild(d);break;default:throw Error(r(468,l))}d[Ce]=e,Ne(d),l=d}e.stateNode=l}else Gy(h,e.type,e.stateNode);else e.stateNode=Hy(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Gy(h,e.type,e.stateNode):Hy(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ed(e,e.memoizedProps,a.memoizedProps)}break;case 27:dn(i,e),mn(e),l&512&&(xe||a===null||Vi(a,a.return)),a!==null&&l&4&&ed(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dn(i,e),mn(e),l&512&&(xe||a===null||Vi(a,a.return)),e.flags&32){h=e.stateNode;try{hn(h,"")}catch(ot){$t(e,e.return,ot)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,ed(e,h,a!==null?a.memoizedProps:h)),l&1024&&(sd=!0);break;case 6:if(dn(i,e),mn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ot){$t(e,e.return,ot)}}break;case 3:if(Cc=null,h=ai,ai=wc(i.containerInfo),dn(i,e),ai=h,mn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(ot){$t(e,e.return,ot)}sd&&(sd=!1,G_(e));break;case 4:l=ai,ai=wc(e.stateNode.containerInfo),dn(i,e),mn(e),ai=l;break;case 12:dn(i,e),mn(e);break;case 31:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 13:dn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mc=Pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,P=as,F=xe;if(as=P||h,xe=F||w,dn(i,e),xe=F,as=P,mn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||as||xe||Jr(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{E=w.stateNode;var X=w.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ot){$t(w,w.return,ot)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(ot){$t(w,w.return,ot)}}}else if(i.tag===18){if(a===null){w=i;try{var j=w.stateNode;h?xy(j,!0):xy(w.stateNode,!1)}catch(ot){$t(w,w.return,ot)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,fc(e,a))));break;case 19:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:dn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(k_(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,d=nd(e);hc(e,d,h);break;case 5:var p=a.stateNode;a.flags&32&&(hn(p,""),a.flags&=-33);var E=nd(e);hc(e,E,p);break;case 3:case 4:var w=a.stateNode.containerInfo,P=nd(e);id(e,P,w);break;default:throw Error(r(161))}}catch(F){$t(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function G_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;G_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ls(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)z_(e,i.alternate,i),i=i.sibling}function Jr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Fs(4,i,i.return),Jr(i);break;case 1:Vi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&x_(i,i.return,a),Jr(i);break;case 27:vl(i.stateNode);case 26:case 5:Vi(i,i.return),Jr(i);break;case 22:i.memoizedState===null&&Jr(i);break;case 30:Jr(i);break;default:Jr(i)}e=e.sibling}}function us(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,p=d.flags;switch(d.tag){case 0:case 11:case 15:us(h,d,a),ul(4,d);break;case 1:if(us(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){$t(l,l.return,P)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Ap(w[h],E)}catch(P){$t(l,l.return,P)}}a&&p&64&&M_(d),cl(d,d.return);break;case 27:L_(d);case 26:case 5:us(h,d,a),a&&l===null&&p&4&&U_(d),cl(d,d.return);break;case 12:us(h,d,a);break;case 31:us(h,d,a),a&&p&4&&q_(h,d);break;case 13:us(h,d,a),a&&p&4&&H_(h,d);break;case 22:d.memoizedState===null&&us(h,d,a),cl(d,d.return);break;case 30:break;default:us(h,d,a)}i=i.sibling}}function rd(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jo(a))}function ad(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Jo(e))}function oi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)K_(e,i,a,l),i=i.sibling}function K_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:oi(e,i,a,l),h&2048&&ul(9,i);break;case 1:oi(e,i,a,l);break;case 3:oi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Jo(e)));break;case 12:if(h&2048){oi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,p=d.id,E=d.onPostCommit;typeof E=="function"&&E(p,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(i,i.return,w)}}else oi(e,i,a,l);break;case 31:oi(e,i,a,l);break;case 13:oi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,p=i.alternate,i.memoizedState!==null?d._visibility&2?oi(e,i,a,l):hl(e,i):d._visibility&2?oi(e,i,a,l):(d._visibility|=2,Ya(e,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&rd(p,i);break;case 24:oi(e,i,a,l),h&2048&&ad(i.alternate,i);break;default:oi(e,i,a,l)}}function Ya(e,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,p=i,E=a,w=l,P=p.flags;switch(p.tag){case 0:case 11:case 15:Ya(d,p,E,w,h),ul(8,p);break;case 23:break;case 22:var F=p.stateNode;p.memoizedState!==null?F._visibility&2?Ya(d,p,E,w,h):hl(d,p):(F._visibility|=2,Ya(d,p,E,w,h)),h&&P&2048&&rd(p.alternate,p);break;case 24:Ya(d,p,E,w,h),h&&P&2048&&ad(p.alternate,p);break;default:Ya(d,p,E,w,h)}i=i.sibling}}function hl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:hl(a,l),h&2048&&rd(l.alternate,l);break;case 24:hl(a,l),h&2048&&ad(l.alternate,l);break;default:hl(a,l)}i=i.sibling}}var fl=8192;function Xa(e,i,a){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)Q_(e,i,a),e=e.sibling}function Q_(e,i,a){switch(e.tag){case 26:Xa(e,i,a),e.flags&fl&&e.memoizedState!==null&&WS(a,ai,e.memoizedState,e.memoizedProps);break;case 5:Xa(e,i,a);break;case 3:case 4:var l=ai;ai=wc(e.stateNode.containerInfo),Xa(e,i,a),ai=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fl,fl=16777216,Xa(e,i,a),fl=l):Xa(e,i,a));break;default:Xa(e,i,a)}}function Y_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Fe=l,J_(l,e)}Y_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X_(e),e=e.sibling}function X_(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&Fs(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,dc(e)):dl(e);break;default:dl(e)}}function dc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Fe=l,J_(l,e)}Y_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Fs(8,i,i.return),dc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,dc(i));break;default:dc(i)}e=e.sibling}}function J_(e,i){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:Fs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Fe=l;else t:for(a=e;Fe!==null;){l=Fe;var h=l.sibling,d=l.return;if(B_(l),l===a){Fe=null;break t}if(h!==null){h.return=d,Fe=h;break t}Fe=d}}}var mS={getCacheForType:function(e){var i=Xe(Oe),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Xe(Oe).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Kt=0,re=null,Dt=null,Mt=0,Jt=0,Rn=null,Gs=!1,Ja=!1,od=!1,cs=0,ve=0,Ks=0,$r=0,ld=0,wn=0,$a=0,ml=null,gn=null,ud=!1,mc=0,$_=0,gc=1/0,pc=null,Qs=null,Pe=0,Ys=null,Za=null,hs=0,cd=0,hd=null,Z_=null,gl=0,fd=null;function In(){return(Kt&2)!==0&&Mt!==0?Mt&-Mt:H.T!==null?yd():_u()}function W_(){if(wn===0)if((Mt&536870912)===0||zt){var e=br;br<<=1,(br&3932160)===0&&(br=262144),wn=e}else wn=536870912;return e=Sn.current,e!==null&&(e.flags|=32),wn}function pn(e,i,a){(e===re&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)&&(Wa(e,0),Xs(e,Mt,wn,!1)),Rr(e,a),((Kt&2)===0||e!==re)&&(e===re&&((Kt&2)===0&&($r|=a),ve===4&&Xs(e,Mt,wn,!1)),Mi(e))}function ty(e,i,a){if((Kt&6)!==0)throw Error(r(327));var l=!a&&(i&127)===0&&(i&e.expiredLanes)===0||$n(e,i),h=l?yS(e,i):md(e,i,!0),d=l;do{if(h===0){Ja&&!l&&Xs(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!pS(a)){h=md(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){i=p;t:{var E=e;h=ml;var w=E.current.memoizedState.isDehydrated;if(w&&(Wa(E,p).flags|=256),p=md(E,p,!1),p!==2){if(od&&!w){E.errorRecoveryDisabledLanes|=d,$r|=d,h=4;break t}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=p}if(d=!1,h!==2)continue}}if(h===1){Wa(e,0),Xs(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Xs(l,i,wn,!Gs);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=mc+300-Pt(),10<h)){if(Xs(l,i,wn,!Gs),gi(l,0,!0)!==0)break t;hs=i,l.timeoutHandle=Oy(ey.bind(null,l,a,gn,pc,ud,i,wn,$r,$a,Gs,d,"Throttled",-0,0),h);break t}ey(l,a,gn,pc,ud,i,wn,$r,$a,Gs,d,null,-0,0)}}break}while(!0);Mi(e)}function ey(e,i,a,l,h,d,p,E,w,P,F,X,z,j){if(e.timeoutHandle=-1,X=i.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ti},Q_(i,d,X);var ot=(d&62914560)===d?mc-Pt():(d&4194048)===d?$_-Pt():0;if(ot=tb(X,ot),ot!==null){hs=d,e.cancelPendingCommit=ot(uy.bind(null,e,i,d,a,l,h,p,E,w,F,X,null,z,j)),Xs(e,d,p,!P);return}}uy(e,i,d,a,l,h,p,E,w)}function pS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!Tn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xs(e,i,a,l){i&=~ld,i&=~$r,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ae(h),p=1<<d;l[d]=-1,h&=~p}a!==0&&wr(e,a,i)}function _c(){return(Kt&6)===0?(pl(0),!1):!0}function dd(){if(Dt!==null){if(Jt===0)var e=Dt.return;else e=Dt,ts=qr=null,Nf(e),Ha=null,Zo=0,e=Dt;for(;e!==null;)V_(e.alternate,e),e=e.return;Dt=null}}function Wa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),hs=0,dd(),re=e,Dt=a=Zi(e.current,null),Mt=i,Jt=0,Rn=null,Gs=!1,Ja=$n(e,i),od=!1,$a=wn=ld=$r=Ks=ve=0,gn=ml=null,ud=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ae(l),d=1<<h;i|=e[h],l&=~d}return cs=i,Pu(),a}function ny(e,i){wt=null,H.H=al,i===qa||i===Ku?(i=yp(),Jt=3):i===_f?(i=yp(),Jt=4):Jt=i===Gf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Rn=i,Dt===null&&(ve=1,ac(e,Ln(i,e.current)))}function iy(){var e=Sn.current;return e===null?!0:(Mt&4194048)===Mt?jn===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?e===jn:!1}function sy(){var e=H.H;return H.H=al,e===null?al:e}function ry(){var e=H.A;return H.A=mS,e}function yc(){ve=4,Gs||(Mt&4194048)!==Mt&&Sn.current!==null||(Ja=!0),(Ks&134217727)===0&&($r&134217727)===0||re===null||Xs(re,Mt,wn,!1)}function md(e,i,a){var l=Kt;Kt|=2;var h=sy(),d=ry();(re!==e||Mt!==i)&&(pc=null,Wa(e,i)),i=!1;var p=ve;t:do try{if(Jt!==0&&Dt!==null){var E=Dt,w=Rn;switch(Jt){case 8:dd(),p=6;break t;case 3:case 2:case 9:case 6:Sn.current===null&&(i=!0);var P=Jt;if(Jt=0,Rn=null,to(e,E,w,P),a&&Ja){p=0;break t}break;default:P=Jt,Jt=0,Rn=null,to(e,E,w,P)}}_S(),p=ve;break}catch(F){ny(e,F)}while(!0);return i&&e.shellSuspendCounter++,ts=qr=null,Kt=l,H.H=h,H.A=d,Dt===null&&(re=null,Mt=0,Pu()),p}function _S(){for(;Dt!==null;)ay(Dt)}function yS(e,i){var a=Kt;Kt|=2;var l=sy(),h=ry();re!==e||Mt!==i?(pc=null,gc=Pt()+500,Wa(e,i)):Ja=$n(e,i);t:do try{if(Jt!==0&&Dt!==null){i=Dt;var d=Rn;e:switch(Jt){case 1:Jt=0,Rn=null,to(e,i,d,1);break;case 2:case 9:if(pp(d)){Jt=0,Rn=null,oy(i);break}i=function(){Jt!==2&&Jt!==9||re!==e||(Jt=7),Mi(e)},d.then(i,i);break t;case 3:Jt=7;break t;case 4:Jt=5;break t;case 7:pp(d)?(Jt=0,Rn=null,oy(i)):(Jt=0,Rn=null,to(e,i,d,7));break;case 5:var p=null;switch(Dt.tag){case 26:p=Dt.memoizedState;case 5:case 27:var E=Dt;if(p?Ky(p):E.stateNode.complete){Jt=0,Rn=null;var w=E.sibling;if(w!==null)Dt=w;else{var P=E.return;P!==null?(Dt=P,vc(P)):Dt=null}break e}}Jt=0,Rn=null,to(e,i,d,5);break;case 6:Jt=0,Rn=null,to(e,i,d,6);break;case 8:dd(),ve=6;break t;default:throw Error(r(462))}}vS();break}catch(F){ny(e,F)}while(!0);return ts=qr=null,H.H=l,H.A=h,Kt=a,Dt!==null?0:(re=null,Mt=0,Pu(),ve)}function vS(){for(;Dt!==null&&!at();)ay(Dt)}function ay(e){var i=D_(e.alternate,e,cs);e.memoizedProps=e.pendingProps,i===null?vc(e):Dt=i}function oy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=b_(a,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=b_(a,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:Nf(i);default:V_(a,i),i=Dt=rp(i,cs),i=D_(a,i,cs)}e.memoizedProps=e.pendingProps,i===null?vc(e):Dt=i}function to(e,i,a,l){ts=qr=null,Nf(i),Ha=null,Zo=0;var h=i.return;try{if(oS(e,h,i,a,Mt)){ve=1,ac(e,Ln(a,e.current)),Dt=null;return}}catch(d){if(h!==null)throw Dt=h,d;ve=1,ac(e,Ln(a,e.current)),Dt=null;return}i.flags&32768?(zt||l===1?e=!0:Ja||(Mt&536870912)!==0?e=!1:(Gs=e=!0,(l===2||l===9||l===3||l===6)&&(l=Sn.current,l!==null&&l.tag===13&&(l.flags|=16384))),ly(i,e)):vc(i)}function vc(e){var i=e;do{if((i.flags&32768)!==0){ly(i,Gs);return}e=i.return;var a=cS(i.alternate,i,cs);if(a!==null){Dt=a;return}if(i=i.sibling,i!==null){Dt=i;return}Dt=i=e}while(i!==null);ve===0&&(ve=5)}function ly(e,i){do{var a=hS(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);ve=6,Dt=null}function uy(e,i,a,l,h,d,p,E,w){e.cancelPendingCommit=null;do Ec();while(Pe!==0);if((Kt&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=ef,Kh(e,a,d,p,E,w),e===re&&(Dt=re=null,Mt=0),Za=i,Ys=e,hs=a,cd=d,hd=h,Z_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,SS(Rs,function(){return my(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=et.p,et.p=2,p=Kt,Kt|=4;try{fS(e,i,a)}finally{Kt=p,et.p=h,H.T=l}}Pe=1,cy(),hy(),fy()}}function cy(){if(Pe===1){Pe=0;var e=Ys,i=Za,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=et.p;et.p=2;var h=Kt;Kt|=4;try{F_(i,e);var d=wd,p=Jg(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(p!==E&&E&&E.ownerDocument&&Xg(E.ownerDocument.documentElement,E)){if(w!==null&&Jh(E)){var P=w.start,F=w.end;if(F===void 0&&(F=P),"selectionStart"in E)E.selectionStart=P,E.selectionEnd=Math.min(F,E.value.length);else{var X=E.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var j=z.getSelection(),ot=E.textContent.length,gt=Math.min(w.start,ot),ie=w.end===void 0?gt:Math.min(w.end,ot);!j.extend&&gt>ie&&(p=ie,ie=gt,gt=p);var x=Yg(E,gt),D=Yg(E,ie);if(x&&D&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==D.node||j.focusOffset!==D.offset)){var L=X.createRange();L.setStart(x.node,x.offset),j.removeAllRanges(),gt>ie?(j.addRange(L),j.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),j.addRange(L))}}}}for(X=[],j=E;j=j.parentNode;)j.nodeType===1&&X.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<X.length;E++){var Q=X[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Vc=!!Rd,wd=Rd=null}finally{Kt=h,et.p=l,H.T=a}}e.current=i,Pe=2}}function hy(){if(Pe===2){Pe=0;var e=Ys,i=Za,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=et.p;et.p=2;var h=Kt;Kt|=4;try{z_(e,i.alternate,i)}finally{Kt=h,et.p=l,H.T=a}}Pe=3}}function fy(){if(Pe===4||Pe===3){Pe=0,Wt();var e=Ys,i=Za,a=hs,l=Z_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pe=5:(Pe=0,Za=Ys=null,dy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Qs=null),Yi(a),i=i.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Jn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=et.p,et.p=2,H.T=null;try{for(var d=e.onRecoverableError,p=0;p<l.length;p++){var E=l[p];d(E.value,{componentStack:E.stack})}}finally{H.T=i,et.p=h}}(hs&3)!==0&&Ec(),Mi(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===fd?gl++:(gl=0,fd=e):gl=0,pl(0)}}function dy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Jo(i)))}function Ec(){return cy(),hy(),fy(),my()}function my(){if(Pe!==5)return!1;var e=Ys,i=cd;cd=0;var a=Yi(hs),l=H.T,h=et.p;try{et.p=32>a?32:a,H.T=null,a=hd,hd=null;var d=Ys,p=hs;if(Pe=0,Za=Ys=null,hs=0,(Kt&6)!==0)throw Error(r(331));var E=Kt;if(Kt|=4,X_(d.current),K_(d,d.current,p,a),Kt=E,pl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Jn,d)}catch{}return!0}finally{et.p=h,H.T=l,dy(e,i)}}function gy(e,i,a){i=Ln(a,i),i=Ff(e.stateNode,i,2),e=js(e,i,2),e!==null&&(Rr(e,2),Mi(e))}function $t(e,i,a){if(e.tag===3)gy(e,e,a);else for(;i!==null;){if(i.tag===3){gy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qs===null||!Qs.has(l))){e=Ln(a,e),a=p_(2),l=js(i,a,2),l!==null&&(__(a,l,i,e),Rr(l,2),Mi(l));break}}i=i.return}}function gd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new gS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(od=!0,h.add(a),e=ES.bind(null,e,i,a),i.then(e,e))}function ES(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,re===e&&(Mt&a)===a&&(ve===4||ve===3&&(Mt&62914560)===Mt&&300>Pt()-mc?(Kt&2)===0&&Wa(e,0):ld|=a,$a===Mt&&($a=0)),Mi(e)}function py(e,i){i===0&&(i=pu()),e=zr(e,i),e!==null&&(Rr(e,i),Mi(e))}function TS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),py(e,a)}function AS(e,i){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),py(e,a)}function SS(e,i){return _e(e,i)}var Tc=null,eo=null,pd=!1,Ac=!1,_d=!1,Js=0;function Mi(e){e!==eo&&e.next===null&&(eo===null?Tc=eo=e:eo=eo.next=e),Ac=!0,pd||(pd=!0,RS())}function pl(e,i){if(!_d&&Ac){_d=!0;do for(var a=!1,l=Tc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var p=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ae(42|e)+1)-1,d&=h&~(p&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Ey(l,d))}else d=Mt,d=gi(l,l===re?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||$n(l,d)||(a=!0,Ey(l,d));l=l.next}while(a);_d=!1}}function bS(){_y()}function _y(){Ac=pd=!1;var e=0;Js!==0&&US()&&(e=Js);for(var i=Pt(),a=null,l=Tc;l!==null;){var h=l.next,d=yy(l,i);d===0?(l.next=null,a===null?Tc=h:a.next=h,h===null&&(eo=a)):(a=l,(e!==0||(d&3)!==0)&&(Ac=!0)),l=h}Pe!==0&&Pe!==5||pl(e),Js!==0&&(Js=0)}function yy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var p=31-Ae(d),E=1<<p,w=h[p];w===-1?((E&a)===0||(E&l)!==0)&&(h[p]=Gh(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=re,a=Mt,a=gi(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Y(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$n(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Y(l),Yi(a)){case 2:case 8:a=wo;break;case 32:a=Rs;break;case 268435456:a=hu;break;default:a=Rs}return l=vy.bind(null,e),a=_e(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Y(l),e.callbackPriority=2,e.callbackNode=null,2}function vy(e,i){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ec()&&e.callbackNode!==a)return null;var l=Mt;return l=gi(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ty(e,l,i),yy(e,Pt()),e.callbackNode!=null&&e.callbackNode===a?vy.bind(null,e):null)}function Ey(e,i){if(Ec())return null;ty(e,i,!0)}function RS(){LS(function(){(Kt&6)!==0?_e(Dn,bS):_y()})}function yd(){if(Js===0){var e=Ba;e===0&&(e=di,di<<=1,(di&261888)===0&&(di=256)),Js=e}return Js}function Ty(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ra(""+e)}function Ay(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function wS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Ty((h[qe]||null).action),p=l.submitter;p&&(i=(i=p[qe]||null)?Ty(i.formAction):p.getAttribute("formAction"),i!==null&&(d=i,p=null));var E=new wi("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Js!==0){var w=p?Ay(h,p):new FormData(h);Pf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=p?Ay(h,p):new FormData(h),Pf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var vd=0;vd<tf.length;vd++){var Ed=tf[vd],IS=Ed.toLowerCase(),CS=Ed[0].toUpperCase()+Ed.slice(1);ri(IS,"on"+CS)}ri(Wg,"onAnimationEnd"),ri(tp,"onAnimationIteration"),ri(ep,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(F0,"onTransitionRun"),ri(G0,"onTransitionStart"),ri(K0,"onTransitionCancel"),ri(np,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function Sy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var p=l.length-1;0<=p;p--){var E=l[p],w=E.instance,P=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch(F){Lu(F)}h.currentTarget=null,d=w}else for(p=0;p<l.length;p++){if(E=l[p],w=E.instance,P=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch(F){Lu(F)}h.currentTarget=null,d=w}}}}function Ot(e,i){var a=i[Ea];a===void 0&&(a=i[Ea]=new Set);var l=e+"__bubble";a.has(l)||(by(i,e,2,!1),a.add(l))}function Td(e,i,a){var l=0;i&&(l|=4),by(a,e,l,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Ad(e){if(!e[Sc]){e[Sc]=!0,No.forEach(function(a){a!=="selectionchange"&&(NS.has(a)||Td(a,!1,e),Td(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,Td("selectionchange",!1,i))}}function by(e,i,a,l){switch(Wy(i)){case 2:var h=ib;break;case 8:h=sb;break;default:h=Ld}a=h.bind(null,i,a,e),h=void 0,!Or||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Sd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var E=l.stateNode.containerInfo;if(E===h)break;if(p===4)for(p=l.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===h)return;p=p.return}for(;E!==null;){if(p=vi(E),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){l=d=p;continue t}E=E.parentNode}}l=l.return}Os(function(){var P=d,F=Mn(a),X=[];t:{var z=ip.get(e);if(z!==void 0){var j=wi,ot=e;switch(e){case"keypress":if(Mr(a)===0)break t;case"keydown":case"keyup":j=xu;break;case"focusin":ot="focus",j=Ur;break;case"focusout":ot="blur",j=Ur;break;case"beforeblur":case"afterblur":j=Ur;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=m;break;case Wg:case tp:case ep:j=Iu;break;case np:j=T;break;case"scroll":case"scrollend":j=jo;break;case"wheel":j=B;break;case"copy":case"cut":case"paste":j=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=$i;break;case"toggle":case"beforetoggle":j=Rt}var gt=(i&4)!==0,ie=!gt&&(e==="scroll"||e==="scrollend"),x=gt?z!==null?z+"Capture":null:z;gt=[];for(var D=P,L;D!==null;){var Q=D;if(L=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||L===null||x===null||(Q=ei(D,x),Q!=null&&gt.push(yl(D,Q,L))),ie)break;D=D.return}0<gt.length&&(z=new j(z,ot,null,a,F),X.push({event:z,listeners:gt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Po&&(ot=a.relatedTarget||a.fromElement)&&(vi(ot)||ot[_i]))break t;if((j||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,j?(ot=a.relatedTarget||a.toElement,j=P,ot=ot?vi(ot):null,ot!==null&&(ie=u(ot),gt=ot.tag,ot!==ie||gt!==5&&gt!==27&&gt!==6)&&(ot=null)):(j=null,ot=P),j!==ot)){if(gt=qo,Q="onMouseLeave",x="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(gt=$i,Q="onPointerLeave",x="onPointerEnter",D="pointer"),ie=j==null?z:vn(j),L=ot==null?z:vn(ot),z=new gt(Q,D+"leave",j,a,F),z.target=ie,z.relatedTarget=L,Q=null,vi(F)===P&&(gt=new gt(x,D+"enter",ot,a,F),gt.target=L,gt.relatedTarget=ie,Q=gt),ie=Q,j&&ot)e:{for(gt=DS,x=j,D=ot,L=0,Q=x;Q;Q=gt(Q))L++;Q=0;for(var ht=D;ht;ht=gt(ht))Q++;for(;0<L-Q;)x=gt(x),L--;for(;0<Q-L;)D=gt(D),Q--;for(;L--;){if(x===D||D!==null&&x===D.alternate){gt=x;break e}x=gt(x),D=gt(D)}gt=null}else gt=null;j!==null&&Ry(X,z,j,gt,!1),ot!==null&&ie!==null&&Ry(X,ie,ot,gt,!0)}}t:{if(z=P?vn(P):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var Ht=qg;else if(Bg(z))if(Hg)Ht=j0;else{Ht=z0;var lt=P0}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?P&&ba(P.elementType)&&(Ht=qg):Ht=B0;if(Ht&&(Ht=Ht(e,P))){jg(X,Ht,a,F);break t}lt&&lt(e,z,P),e==="focusout"&&P&&z.type==="number"&&P.memoizedProps.value!=null&&Uo(z,"number",z.value)}switch(lt=P?vn(P):window,e){case"focusin":(Bg(lt)||lt.contentEditable==="true")&&(Va=lt,$h=P,Qo=null);break;case"focusout":Qo=$h=Va=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,$g(X,a,F);break;case"selectionchange":if(H0)break;case"keydown":case"keyup":$g(X,a,F)}var It;if(Gt)t:{switch(e){case"compositionstart":var xt="onCompositionStart";break t;case"compositionend":xt="onCompositionEnd";break t;case"compositionupdate":xt="onCompositionUpdate";break t}xt=void 0}else Oa?kr(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Ni&&a.locale!=="ko"&&(Oa||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Oa&&(It=Bo()):(Ri=F,zo="value"in Ri?Ri.value:Ri.textContent,Oa=!0)),lt=bc(P,xt),0<lt.length&&(xt=new Ci(xt,e,null,a,F),X.push({event:xt,listeners:lt}),It?xt.data=It:(It=Da(a),It!==null&&(xt.data=It)))),(It=Un?x0(e,a):U0(e,a))&&(xt=bc(P,"onBeforeInput"),0<xt.length&&(lt=new Ci("onBeforeInput","beforeinput",null,a,F),X.push({event:lt,listeners:xt}),lt.data=It)),wS(X,e,P,a,F)}Sy(X,i)})}function yl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function bc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ei(e,a),h!=null&&l.unshift(yl(e,h,d)),h=ei(e,i),h!=null&&l.push(yl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function DS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ry(e,i,a,l,h){for(var d=i._reactName,p=[];a!==null&&a!==l;){var E=a,w=E.alternate,P=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||P===null||(w=P,h?(P=ei(a,d),P!=null&&p.unshift(yl(a,P,w))):h||(P=ei(a,d),P!=null&&p.push(yl(a,P,w)))),a=a.return}p.length!==0&&e.push({event:i,listeners:p})}var OS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function wy(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(VS,"")}function Iy(e,i){return i=wy(i),wy(e)===i}function ne(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||hn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&hn(e,""+l);break;case"className":En(e,"class",l);break;case"tabIndex":En(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":En(e,a,l);break;case"style":Lo(e,l,d);break;case"data":if(i!=="object"){En(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ra(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&ne(e,i,"name",h.name,h,null),ne(e,i,"formEncType",h.formEncType,h,null),ne(e,i,"formMethod",h.formMethod,h,null),ne(e,i,"formTarget",h.formTarget,h,null)):(ne(e,i,"encType",h.encType,h,null),ne(e,i,"method",h.method,h,null),ne(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ra(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ti);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ra(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ot("beforetoggle",e),Ot("toggle",e),Aa(e,"popover",l);break;case"xlinkActuate":De(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":De(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":De(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":De(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":De(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":De(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":De(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":De(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":De(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Aa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bu.get(a)||a,Aa(e,a,l))}}function bd(e,i,a,l,h,d){switch(a){case"style":Lo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?hn(e,l):(typeof l=="number"||typeof l=="bigint")&&hn(e,""+l);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[qe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Aa(e,a,l)}}}function $e(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",e),Ot("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var p=a[d];if(p!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:ne(e,i,d,p,a,null)}}h&&ne(e,i,"srcSet",a.srcSet,a,null),l&&ne(e,i,"src",a.src,a,null);return;case"input":Ot("invalid",e);var E=d=p=h=null,w=null,P=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":p=F;break;case"checked":w=F;break;case"defaultChecked":P=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:ne(e,i,l,F,a,null)}}Tu(e,d,E,w,P,p,h,!1);return;case"select":Ot("invalid",e),l=p=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":p=E;break;case"multiple":l=E;default:ne(e,i,h,E,a,null)}i=d,a=p,e.multiple=!!l,i!=null?Is(e,!!l,i,!1):a!=null&&Is(e,!!l,a,!0);return;case"textarea":Ot("invalid",e),d=h=l=null;for(p in a)if(a.hasOwnProperty(p)&&(E=a[p],E!=null))switch(p){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:ne(e,i,p,E,a,null)}Cs(e,l,h,d);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ne(e,i,w,l,a,null)}return;case"dialog":Ot("beforetoggle",e),Ot("toggle",e),Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":Ot("load",e);break;case"video":case"audio":for(l=0;l<_l.length;l++)Ot(_l[l],e);break;case"image":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"embed":case"source":case"link":Ot("error",e),Ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(l=a[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:ne(e,i,P,l,a,null)}return;default:if(ba(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&bd(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&ne(e,i,E,l,a,null))}function MS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,p=null,E=null,w=null,P=null,F=null;for(j in a){var X=a[j];if(a.hasOwnProperty(j)&&X!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=X;default:l.hasOwnProperty(j)||ne(e,i,j,null,l,X)}}for(var z in l){var j=l[z];if(X=a[z],l.hasOwnProperty(z)&&(j!=null||X!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":P=j;break;case"defaultChecked":F=j;break;case"value":p=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,i));break;default:j!==X&&ne(e,i,z,j,l,X)}}Sa(e,p,E,w,P,F,d,h);return;case"select":j=p=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||ne(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":p=d;default:d!==w&&ne(e,i,h,d,l,w)}i=E,a=p,l=j,z!=null?Is(e,!!a,z,!1):!!l!=!!a&&(i!=null?Is(e,!!a,i,!0):Is(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ne(e,i,E,null,l,h)}for(p in l)if(h=l[p],d=a[p],l.hasOwnProperty(p)&&(h!=null||d!=null))switch(p){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==d&&ne(e,i,p,h,l,d)}Au(e,z,j);return;case"option":for(var ot in a)if(z=a[ot],a.hasOwnProperty(ot)&&z!=null&&!l.hasOwnProperty(ot))switch(ot){case"selected":e.selected=!1;break;default:ne(e,i,ot,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ne(e,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt)&&ne(e,i,gt,null,l,z);for(P in l)if(z=l[P],j=a[P],l.hasOwnProperty(P)&&z!==j&&(z!=null||j!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,i));break;default:ne(e,i,P,z,l,j)}return;default:if(ba(i)){for(var ie in a)z=a[ie],a.hasOwnProperty(ie)&&z!==void 0&&!l.hasOwnProperty(ie)&&bd(e,i,ie,void 0,l,z);for(F in l)z=l[F],j=a[F],!l.hasOwnProperty(F)||z===j||z===void 0&&j===void 0||bd(e,i,F,z,l,j);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&ne(e,i,x,null,l,z);for(X in l)z=l[X],j=a[X],!l.hasOwnProperty(X)||z===j||z==null&&j==null||ne(e,i,X,z,l,j)}function Cy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,p=h.initiatorType,E=h.duration;if(d&&E&&Cy(p)){for(p=0,E=h.responseEnd,l+=1;l<a.length;l++){var w=a[l],P=w.startTime;if(P>E)break;var F=w.transferSize,X=w.initiatorType;F&&Cy(X)&&(w=w.responseEnd,p+=F*(w<E?1:(E-P)/(w-P)))}if(--l,i+=8*(d+p)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rd=null,wd=null;function Rc(e){return e.nodeType===9?e:e.ownerDocument}function Ny(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Id(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cd=null;function US(){var e=window.event;return e&&e.type==="popstate"?e===Cd?!1:(Cd=e,!0):(Cd=null,!1)}var Oy=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,Vy=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof Vy<"u"?function(e){return Vy.resolve(null).then(e).catch(PS)}:Oy;function PS(e){setTimeout(function(){throw e})}function $s(e){return e==="head"}function My(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(h),ro(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")vl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vl(a);for(var d=a.firstChild;d;){var p=d.nextSibling,E=d.nodeName;d[yi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=p}}else a==="body"&&vl(e.ownerDocument.body);a=h}while(a);ro(i)}function xy(e,i){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Nd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nd(a),Ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[yi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function BS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qn(e.nextSibling),e===null))return null;return e}function Uy(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=qn(e.nextSibling),e===null))return null;return e}function Dd(e){return e.data==="$?"||e.data==="$~"}function Od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jS(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function qn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Vd=null;function ky(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return qn(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Ly(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Py(e,i,a){switch(i=Rc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ta(e)}var Hn=new Map,zy=new Set;function wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fs=et.d;et.d={f:qS,r:HS,D:FS,C:GS,L:KS,m:QS,X:XS,S:YS,M:JS};function qS(){var e=fs.f(),i=_c();return e||i}function HS(e){var i=Vn(e);i!==null&&i.tag===5&&i.type==="form"?n_(i):fs.r(e)}var no=typeof document>"u"?null:document;function By(e,i,a){var l=no;if(l&&typeof i=="string"&&i){var h=cn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),zy.has(h)||(zy.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),$e(i,"link",e),Ne(i),l.head.appendChild(i)))}}function FS(e){fs.D(e),By("dns-prefetch",e,null)}function GS(e,i){fs.C(e,i),By("preconnect",e,i)}function KS(e,i,a){fs.L(e,i,a);var l=no;if(l&&e&&i){var h='link[rel="preload"][as="'+cn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+cn(a.imageSizes)+'"]')):h+='[href="'+cn(e)+'"]';var d=h;switch(i){case"style":d=io(e);break;case"script":d=so(e)}Hn.has(d)||(e=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Hn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(El(d))||i==="script"&&l.querySelector(Tl(d))||(i=l.createElement("link"),$e(i,"link",e),Ne(i),l.head.appendChild(i)))}}function QS(e,i){fs.m(e,i);var a=no;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+cn(l)+'"][href="'+cn(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=so(e)}if(!Hn.has(d)&&(e=S({rel:"modulepreload",href:e},i),Hn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tl(d)))return}l=a.createElement("link"),$e(l,"link",e),Ne(l),a.head.appendChild(l)}}}function YS(e,i,a){fs.S(e,i,a);var l=no;if(l&&e){var h=Ei(l).hoistableStyles,d=io(e);i=i||"default";var p=h.get(d);if(!p){var E={loading:0,preload:null};if(p=l.querySelector(El(d)))E.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Hn.get(d))&&Md(e,a);var w=p=l.createElement("link");Ne(w),$e(w,"link",e),w._p=new Promise(function(P,F){w.onload=P,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ic(p,i,l)}p={type:"stylesheet",instance:p,count:1,state:E},h.set(d,p)}}}function XS(e,i){fs.X(e,i);var a=no;if(a&&e){var l=Ei(a).hoistableScripts,h=so(e),d=l.get(h);d||(d=a.querySelector(Tl(h)),d||(e=S({src:e,async:!0},i),(i=Hn.get(h))&&xd(e,i),d=a.createElement("script"),Ne(d),$e(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function JS(e,i){fs.M(e,i);var a=no;if(a&&e){var l=Ei(a).hoistableScripts,h=so(e),d=l.get(h);d||(d=a.querySelector(Tl(h)),d||(e=S({src:e,async:!0,type:"module"},i),(i=Hn.get(h))&&xd(e,i),d=a.createElement("script"),Ne(d),$e(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function jy(e,i,a,l){var h=(h=Et.current)?wc(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=io(a.href),a=Ei(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=io(a.href);var d=Ei(h).hoistableStyles,p=d.get(e);if(p||(h=h.ownerDocument||h,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,p),(d=h.querySelector(El(e)))&&!d._p&&(p.instance=d,p.state.loading=5),Hn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hn.set(e,a),d||$S(h,e,a,p.state))),i&&l===null)throw Error(r(528,""));return p}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=so(a),a=Ei(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function io(e){return'href="'+cn(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function qy(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),$e(i,"link",a),Ne(i),e.head.appendChild(i))}function so(e){return'[src="'+cn(e)+'"]'}function Tl(e){return"script[async]"+e}function Hy(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+cn(a.href)+'"]');if(l)return i.instance=l,Ne(l),l;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ne(l),$e(l,"style",h),Ic(l,a.precedence,e),i.instance=l;case"stylesheet":h=io(a.href);var d=e.querySelector(El(h));if(d)return i.state.loading|=4,i.instance=d,Ne(d),d;l=qy(a),(h=Hn.get(h))&&Md(l,h),d=(e.ownerDocument||e).createElement("link"),Ne(d);var p=d;return p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),$e(d,"link",l),i.state.loading|=4,Ic(d,a.precedence,e),i.instance=d;case"script":return d=so(a.src),(h=e.querySelector(Tl(d)))?(i.instance=h,Ne(h),h):(l=a,(h=Hn.get(d))&&(l=S({},a),xd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ne(h),$e(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,a.precedence,e));return i.instance}function Ic(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,p=0;p<l.length;p++){var E=l[p];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Md(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function xd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Cc=null;function Fy(e,i,a){if(Cc===null){var l=new Map,h=Cc=new Map;h.set(a,l)}else h=Cc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[yi]||d[Ce]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(i)||"";p=e+p;var E=l.get(p);E?E.push(d):l.set(p,[d])}}return l}function Gy(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function ZS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ky(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WS(e,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=io(l.href),d=i.querySelector(El(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Nc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,Ne(d);return}d=i.ownerDocument||i,l=qy(l),(h=Hn.get(h))&&Md(l,h),d=d.createElement("link"),Ne(d);var p=d;p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),$e(d,"link",l),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Nc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var Ud=0;function tb(e,i){return e.stylesheets&&e.count===0&&Oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Ud===0&&(Ud=62500*xS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ud?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Oc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,i.forEach(eb,e),Dc=null,Nc.call(e))}function eb(e,i){if(!(i.state.loading&4)){var a=Dc.get(e);if(a)var l=a.get(null);else{a=new Map,Dc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var p=h[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}h=i.instance,p=h.getAttribute("data-precedence"),d=a.get(p)||l,d===l&&a.set(null,h),a.set(p,h),this.count++,l=Nc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Al={$$typeof:mt,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function nb(e,i,a,l,h,d,p,E,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Qy(e,i,a,l,h,d,p,E,w,P,F,X){return e=new nb(e,i,a,p,w,P,F,X,E),i=1,d===!0&&(i|=24),d=An(3,null,null,i),e.current=d,d.stateNode=e,i=mf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},yf(d),e}function Yy(e){return e?(e=Ua,e):Ua}function Xy(e,i,a,l,h,d){h=Yy(h),l.context===null?l.context=h:l.pendingContext=h,l=Bs(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=js(e,l,i),a!==null&&(pn(a,e,i),tl(a,e,i))}function Jy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function kd(e,i){Jy(e,i),(e=e.alternate)&&Jy(e,i)}function $y(e){if(e.tag===13||e.tag===31){var i=zr(e,67108864);i!==null&&pn(i,e,67108864),kd(e,67108864)}}function Zy(e){if(e.tag===13||e.tag===31){var i=In();i=Ir(i);var a=zr(e,i);a!==null&&pn(a,e,i),kd(e,i)}}var Vc=!0;function ib(e,i,a,l){var h=H.T;H.T=null;var d=et.p;try{et.p=2,Ld(e,i,a,l)}finally{et.p=d,H.T=h}}function sb(e,i,a,l){var h=H.T;H.T=null;var d=et.p;try{et.p=8,Ld(e,i,a,l)}finally{et.p=d,H.T=h}}function Ld(e,i,a,l){if(Vc){var h=Pd(l);if(h===null)Sd(e,i,l,Mc,a),tv(e,l);else if(ab(h,e,i,a,l))l.stopPropagation();else if(tv(e,l),i&4&&-1<rb.indexOf(e)){for(;h!==null;){var d=Vn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=mi(d.pendingLanes);if(p!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var w=1<<31-Ae(p);E.entanglements[1]|=w,p&=~w}Mi(d),(Kt&6)===0&&(gc=Pt()+500,pl(0))}}break;case 31:case 13:E=zr(d,2),E!==null&&pn(E,d,2),_c(),kd(d,2)}if(d=Pd(l),d===null&&Sd(e,i,l,Mc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Sd(e,i,l,null,a)}}function Pd(e){return e=Mn(e),zd(e)}var Mc=null;function zd(e){if(Mc=null,e=vi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=g(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mc=e,null}function Wy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case Dn:return 2;case wo:return 8;case Rs:case Fh:return 32;case hu:return 268435456;default:return 32}default:return 32}}var Bd=!1,Zs=null,Ws=null,tr=null,Sl=new Map,bl=new Map,er=[],rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(e,i){switch(e){case"focusin":case"focusout":Zs=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(i.pointerId)}}function Rl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Vn(i),i!==null&&$y(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function ab(e,i,a,l,h){switch(i){case"focusin":return Zs=Rl(Zs,e,i,a,l,h),!0;case"dragenter":return Ws=Rl(Ws,e,i,a,l,h),!0;case"mouseover":return tr=Rl(tr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Sl.set(d,Rl(Sl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,bl.set(d,Rl(bl.get(d)||null,e,i,a,l,h)),!0}return!1}function ev(e){var i=vi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Zn(e.priority,function(){Zy(a)});return}}else if(i===31){if(i=g(a),i!==null){e.blockedOn=i,Zn(e.priority,function(){Zy(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Po=l,a.target.dispatchEvent(l),Po=null}else return i=Vn(a),i!==null&&$y(i),e.blockedOn=a,!1;i.shift()}return!0}function nv(e,i,a){xc(e)&&a.delete(i)}function ob(){Bd=!1,Zs!==null&&xc(Zs)&&(Zs=null),Ws!==null&&xc(Ws)&&(Ws=null),tr!==null&&xc(tr)&&(tr=null),Sl.forEach(nv),bl.forEach(nv)}function Uc(e,i){e.blockedOn===i&&(e.blockedOn=null,Bd||(Bd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ob)))}var kc=null;function iv(e){kc!==e&&(kc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){kc===e&&(kc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(zd(l||a)===null)continue;break}var d=Vn(a);d!==null&&(e.splice(i,3),i-=3,Pf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function ro(e){function i(w){return Uc(w,e)}Zs!==null&&Uc(Zs,e),Ws!==null&&Uc(Ws,e),tr!==null&&Uc(tr,e),Sl.forEach(i),bl.forEach(i);for(var a=0;a<er.length;a++){var l=er[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)ev(a),a.blockedOn===null&&er.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],p=h[qe]||null;if(typeof d=="function")p||iv(a);else if(p){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,p=d[qe]||null)E=p.formAction;else if(zd(h)!==null)continue}else E=p.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),iv(a)}}}function sv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return h=p})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function jd(e){this._internalRoot=e}Lc.prototype.render=jd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,l=In();Xy(a,l,e,i,null,null)},Lc.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Xy(e.current,2,null,e,null,null),_c(),i[_i]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var i=_u();e={blockedOn:null,target:e,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,e),a===0&&ev(e)}};var rv=t.version;if(rv!=="19.2.5")throw Error(r(527,rv,"19.2.5"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=y(i),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var lb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{Jn=Pc.inject(lb),Ke=Pc}catch{}}return Il.createRoot=function(e,i){if(!o(e))throw Error(r(299));var a=!1,l="",h=f_,d=d_,p=m_;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Qy(e,1,!1,null,null,a,l,null,h,d,p,sv),e[_i]=i.current,Ad(e),new jd(i)},Il.hydrateRoot=function(e,i,a){if(!o(e))throw Error(r(299));var l=!1,h="",d=f_,p=d_,E=m_,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),i=Qy(e,1,!0,i,a??null,l,h,w,d,p,E,sv),i.context=Yy(null),a=i.current,l=In(),l=Ir(l),h=Bs(l),h.callback=null,js(a,h,l),a=l,i.current.lanes=a,Rr(i,a),Mi(i),e[_i]=i.current,Ad(e),new Lc(i)},Il.version="19.2.5",Il}var gv;function vb(){if(gv)return Fd.exports;gv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Fd.exports=yb(),Fd.exports}var Eb=vb();const Tb=YE(Eb),Ab=()=>{};var pv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=function(s){const t=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Sb=function(s){const t=[];let n=0,r=0;for(;n<s.length;){const o=s[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[n++];t[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[n++],f=s[n++],g=s[n++],_=((o&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[r++]=String.fromCharCode(55296+(_>>10)),t[r++]=String.fromCharCode(56320+(_&1023))}else{const u=s[n++],f=s[n++];t[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},JE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],f=o+1<s.length,g=f?s[o+1]:0,_=o+2<s.length,y=_?s[o+2]:0,A=u>>2,S=(u&3)<<4|g>>4;let M=(g&15)<<2|y>>6,G=y&63;_||(G=64,f||(M=64)),r.push(n[A],n[S],n[M],n[G])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(XE(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):Sb(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=n[s.charAt(o++)],g=o<s.length?n[s.charAt(o)]:0;++o;const y=o<s.length?n[s.charAt(o)]:64;++o;const S=o<s.length?n[s.charAt(o)]:64;if(++o,u==null||g==null||y==null||S==null)throw new bb;const M=u<<2|g>>4;if(r.push(M),y!==64){const G=g<<4&240|y>>2;if(r.push(G),S!==64){const Z=y<<6&192|S;r.push(Z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rb=function(s){const t=XE(s);return JE.encodeByteArray(t,!0)},sh=function(s){return Rb(s).replace(/\./g,"")},$E=function(s){try{return JE.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ib=()=>wb().__FIREBASE_DEFAULTS__,Cb=()=>{if(typeof process>"u"||typeof pv>"u")return;const s=pv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Nb=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&$E(s[1]);return t&&JSON.parse(t)},bh=()=>{try{return Ab()||Ib()||Cb()||Nb()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},ZE=s=>{var t,n;return(n=(t=bh())==null?void 0:t.emulatorHosts)==null?void 0:n[s]},WE=s=>{const t=ZE(s);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},tT=()=>{var s;return(s=bh())==null?void 0:s.config},eT=s=>{var t;return(t=bh())==null?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function nT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[sh(JSON.stringify(n)),sh(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ob(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function Vb(){var t;const s=(t=bh())==null?void 0:t.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xb(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Ub(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kb(){const s=an();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Lb(){return!Vb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pb(){try{return typeof indexedDB=="object"}catch{return!1}}function zb(){return new Promise((s,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="FirebaseError";class Fi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Bb,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wl.prototype.create)}}class Wl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?jb(u,r):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Fi(o,g,r)}}function jb(s,t){return s.replace(qb,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const qb=/\{\$([^}]+)}/g;function Hb(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function ra(s,t){if(s===t)return!0;const n=Object.keys(s),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const u=s[o],f=t[o];if(_v(u)&&_v(f)){if(!ra(u,f))return!1}else if(u!==f)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function _v(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(s){const t=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ol(s){const t={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Vl(s){const t=s.indexOf("?");if(!t)return"";const n=s.indexOf("#",t);return s.substring(t,n>0?n:void 0)}function Fb(s,t){const n=new Gb(s,t);return n.subscribe.bind(n)}class Gb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=Yd),o.error===void 0&&(o.error=Yd),o.complete===void 0&&(o.complete=Yd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(s,t){if(typeof s!="object"||s===null)return!1;for(const n of t)if(n in s&&typeof s[n]=="function")return!0;return!1}function Yd(){}/**
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
 */function je(s){return s&&s._delegate?s._delegate:s}/**
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
 */function da(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pm(s){return(await fetch(s,{credentials:"include"})).ok}class dr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class Qb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Db;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xb(t))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(t=Wr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wr){return this.instances.has(t)}getOptions(t=Wr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);r===g&&f.resolve(o)}return o}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const u=this.instances.get(r);return u&&t(u,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Wr){return this.component?this.component.multipleInstances?t:Wr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(s){return s===Wr?void 0:s}function Xb(s){return s.instantiationMode==="EAGER"}/**
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
 */class Jb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Qb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ut||(Ut={}));const $b={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},Zb=Ut.INFO,Wb={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},tR=(s,t,...n)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=Wb[t];if(o)console[o](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zm{constructor(t){this.name=t,this._logLevel=Zb,this._logHandler=tR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...t),this._logHandler(this,Ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...t),this._logHandler(this,Ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...t),this._logHandler(this,Ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...t),this._logHandler(this,Ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...t),this._logHandler(this,Ut.ERROR,...t)}}const eR=(s,t)=>t.some(n=>s instanceof n);let yv,vv;function nR(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iR(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iT=new WeakMap,hm=new WeakMap,sT=new WeakMap,Xd=new WeakMap,Bm=new WeakMap;function sR(s){const t=new Promise((n,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",f)},u=()=>{n(ur(s.result)),o()},f=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&iT.set(n,s)}).catch(()=>{}),Bm.set(t,s),t}function rR(s){if(hm.has(s))return;const t=new Promise((n,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",f),s.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",f),s.addEventListener("abort",f)});hm.set(s,t)}let fm={get(s,t,n){if(s instanceof IDBTransaction){if(t==="done")return hm.get(s);if(t==="objectStoreNames")return s.objectStoreNames||sT.get(s);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(s[t])},set(s,t,n){return s[t]=n,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function aR(s){fm=s(fm)}function oR(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=s.call(Jd(this),t,...n);return sT.set(r,t.sort?t.sort():[t]),ur(r)}:iR().includes(s)?function(...t){return s.apply(Jd(this),t),ur(iT.get(this))}:function(...t){return ur(s.apply(Jd(this),t))}}function lR(s){return typeof s=="function"?oR(s):(s instanceof IDBTransaction&&rR(s),eR(s,nR())?new Proxy(s,fm):s)}function ur(s){if(s instanceof IDBRequest)return sR(s);if(Xd.has(s))return Xd.get(s);const t=lR(s);return t!==s&&(Xd.set(s,t),Bm.set(t,s)),t}const Jd=s=>Bm.get(s);function uR(s,t,{blocked:n,upgrade:r,blocking:o,terminated:u}={}){const f=indexedDB.open(s,t),g=ur(f);return r&&f.addEventListener("upgradeneeded",_=>{r(ur(f.result),_.oldVersion,_.newVersion,ur(f.transaction),_)}),n&&f.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),g.then(_=>{u&&_.addEventListener("close",()=>u()),o&&_.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const cR=["get","getKey","getAll","getAllKeys","count"],hR=["put","add","delete","clear"],$d=new Map;function Ev(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if($d.get(t))return $d.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=hR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||cR.includes(n)))return;const u=async function(f,...g){const _=this.transaction(f,o?"readwrite":"readonly");let y=_.store;return r&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&_.done]))[0]};return $d.set(t,u),u}aR(s=>({...s,get:(t,n,r)=>Ev(t,n)||s.get(t,n,r),has:(t,n)=>!!Ev(t,n)||s.has(t,n)}));/**
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
 */class fR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dR(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const dm="@firebase/app",Tv="0.14.11";/**
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
 */const ys=new zm("@firebase/app"),mR="@firebase/app-compat",gR="@firebase/analytics-compat",pR="@firebase/analytics",_R="@firebase/app-check-compat",yR="@firebase/app-check",vR="@firebase/auth",ER="@firebase/auth-compat",TR="@firebase/database",AR="@firebase/data-connect",SR="@firebase/database-compat",bR="@firebase/functions",RR="@firebase/functions-compat",wR="@firebase/installations",IR="@firebase/installations-compat",CR="@firebase/messaging",NR="@firebase/messaging-compat",DR="@firebase/performance",OR="@firebase/performance-compat",VR="@firebase/remote-config",MR="@firebase/remote-config-compat",xR="@firebase/storage",UR="@firebase/storage-compat",kR="@firebase/firestore",LR="@firebase/ai",PR="@firebase/firestore-compat",zR="firebase",BR="12.12.0";/**
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
 */const mm="[DEFAULT]",jR={[dm]:"fire-core",[mR]:"fire-core-compat",[pR]:"fire-analytics",[gR]:"fire-analytics-compat",[yR]:"fire-app-check",[_R]:"fire-app-check-compat",[vR]:"fire-auth",[ER]:"fire-auth-compat",[TR]:"fire-rtdb",[AR]:"fire-data-connect",[SR]:"fire-rtdb-compat",[bR]:"fire-fn",[RR]:"fire-fn-compat",[wR]:"fire-iid",[IR]:"fire-iid-compat",[CR]:"fire-fcm",[NR]:"fire-fcm-compat",[DR]:"fire-perf",[OR]:"fire-perf-compat",[VR]:"fire-rc",[MR]:"fire-rc-compat",[xR]:"fire-gcs",[UR]:"fire-gcs-compat",[kR]:"fire-fst",[PR]:"fire-fst-compat",[LR]:"fire-vertex","fire-js":"fire-js",[zR]:"fire-js-all"};/**
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
 */const rh=new Map,qR=new Map,gm=new Map;function Av(s,t){try{s.container.addComponent(t)}catch(n){ys.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,n)}}function aa(s){const t=s.name;if(gm.has(t))return ys.debug(`There were multiple attempts to register component ${t}.`),!1;gm.set(t,s);for(const n of rh.values())Av(n,s);for(const n of qR.values())Av(n,s);return!0}function Rh(s,t){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(t)}function yn(s){return s==null?!1:s.settings!==void 0}/**
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
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Wl("app","Firebase",HR);/**
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
 */class FR{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const ma=BR;function rT(s,t={}){let n=s;typeof t!="object"&&(t={name:t});const r={name:mm,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw cr.create("bad-app-name",{appName:String(o)});if(n||(n=tT()),!n)throw cr.create("no-options");const u=rh.get(o);if(u){if(ra(n,u.options)&&ra(r,u.config))return u;throw cr.create("duplicate-app",{appName:o})}const f=new Jb(o);for(const _ of gm.values())f.addComponent(_);const g=new FR(n,r,f);return rh.set(o,g),g}function jm(s=mm){const t=rh.get(s);if(!t&&s===mm&&tT())return rT();if(!t)throw cr.create("no-app",{appName:s});return t}function Li(s,t,n){let r=jR[s]??s;n&&(r+=`-${n}`);const o=r.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${r}" with version "${t}":`];o&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ys.warn(f.join(" "));return}aa(new dr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const GR="firebase-heartbeat-database",KR=1,Hl="firebase-heartbeat-store";let Zd=null;function aT(){return Zd||(Zd=uR(GR,KR,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Hl)}catch(n){console.warn(n)}}}}).catch(s=>{throw cr.create("idb-open",{originalErrorMessage:s.message})})),Zd}async function QR(s){try{const n=(await aT()).transaction(Hl),r=await n.objectStore(Hl).get(oT(s));return await n.done,r}catch(t){if(t instanceof Fi)ys.warn(t.message);else{const n=cr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ys.warn(n.message)}}}async function Sv(s,t){try{const r=(await aT()).transaction(Hl,"readwrite");await r.objectStore(Hl).put(t,oT(s)),await r.done}catch(n){if(n instanceof Fi)ys.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ys.warn(r.message)}}}function oT(s){return`${s.name}!${s.options.appId}`}/**
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
 */const YR=1024,XR=30;class JR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=bv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>XR){const f=WR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ys.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bv(),{heartbeatsToSend:r,unsentEntries:o}=$R(this._heartbeatsCache.heartbeats),u=sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ys.warn(n),""}}}function bv(){return new Date().toISOString().substring(0,10)}function $R(s,t=YR){const n=[];let r=s.slice();for(const o of s){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Rv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rv(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pb()?zb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Rv(s){return sh(JSON.stringify({version:2,heartbeats:s})).length}function WR(s){if(s.length===0)return-1;let t=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,t=r);return t}/**
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
 */function tw(s){aa(new dr("platform-logger",t=>new fR(t),"PRIVATE")),aa(new dr("heartbeat",t=>new JR(t),"PRIVATE")),Li(dm,Tv,s),Li(dm,Tv,"esm2020"),Li("fire-js","")}tw("");var ew="firebase",nw="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li(ew,nw,"app");var wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,lT;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,b){function C(){}C.prototype=b.prototype,I.F=b.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(V,N,U){for(var R=Array(arguments.length-2),Zt=2;Zt<arguments.length;Zt++)R[Zt-2]=arguments[Zt];return b.prototype[N].apply(V,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,b,C){C||(C=0);const V=Array(16);if(typeof b=="string")for(var N=0;N<16;++N)V[N]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(N=0;N<16;++N)V[N]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=I.g[0],C=I.g[1],N=I.g[2];let U=I.g[3],R;R=b+(U^C&(N^U))+V[0]+3614090360&4294967295,b=C+(R<<7&4294967295|R>>>25),R=U+(N^b&(C^N))+V[1]+3905402710&4294967295,U=b+(R<<12&4294967295|R>>>20),R=N+(C^U&(b^C))+V[2]+606105819&4294967295,N=U+(R<<17&4294967295|R>>>15),R=C+(b^N&(U^b))+V[3]+3250441966&4294967295,C=N+(R<<22&4294967295|R>>>10),R=b+(U^C&(N^U))+V[4]+4118548399&4294967295,b=C+(R<<7&4294967295|R>>>25),R=U+(N^b&(C^N))+V[5]+1200080426&4294967295,U=b+(R<<12&4294967295|R>>>20),R=N+(C^U&(b^C))+V[6]+2821735955&4294967295,N=U+(R<<17&4294967295|R>>>15),R=C+(b^N&(U^b))+V[7]+4249261313&4294967295,C=N+(R<<22&4294967295|R>>>10),R=b+(U^C&(N^U))+V[8]+1770035416&4294967295,b=C+(R<<7&4294967295|R>>>25),R=U+(N^b&(C^N))+V[9]+2336552879&4294967295,U=b+(R<<12&4294967295|R>>>20),R=N+(C^U&(b^C))+V[10]+4294925233&4294967295,N=U+(R<<17&4294967295|R>>>15),R=C+(b^N&(U^b))+V[11]+2304563134&4294967295,C=N+(R<<22&4294967295|R>>>10),R=b+(U^C&(N^U))+V[12]+1804603682&4294967295,b=C+(R<<7&4294967295|R>>>25),R=U+(N^b&(C^N))+V[13]+4254626195&4294967295,U=b+(R<<12&4294967295|R>>>20),R=N+(C^U&(b^C))+V[14]+2792965006&4294967295,N=U+(R<<17&4294967295|R>>>15),R=C+(b^N&(U^b))+V[15]+1236535329&4294967295,C=N+(R<<22&4294967295|R>>>10),R=b+(N^U&(C^N))+V[1]+4129170786&4294967295,b=C+(R<<5&4294967295|R>>>27),R=U+(C^N&(b^C))+V[6]+3225465664&4294967295,U=b+(R<<9&4294967295|R>>>23),R=N+(b^C&(U^b))+V[11]+643717713&4294967295,N=U+(R<<14&4294967295|R>>>18),R=C+(U^b&(N^U))+V[0]+3921069994&4294967295,C=N+(R<<20&4294967295|R>>>12),R=b+(N^U&(C^N))+V[5]+3593408605&4294967295,b=C+(R<<5&4294967295|R>>>27),R=U+(C^N&(b^C))+V[10]+38016083&4294967295,U=b+(R<<9&4294967295|R>>>23),R=N+(b^C&(U^b))+V[15]+3634488961&4294967295,N=U+(R<<14&4294967295|R>>>18),R=C+(U^b&(N^U))+V[4]+3889429448&4294967295,C=N+(R<<20&4294967295|R>>>12),R=b+(N^U&(C^N))+V[9]+568446438&4294967295,b=C+(R<<5&4294967295|R>>>27),R=U+(C^N&(b^C))+V[14]+3275163606&4294967295,U=b+(R<<9&4294967295|R>>>23),R=N+(b^C&(U^b))+V[3]+4107603335&4294967295,N=U+(R<<14&4294967295|R>>>18),R=C+(U^b&(N^U))+V[8]+1163531501&4294967295,C=N+(R<<20&4294967295|R>>>12),R=b+(N^U&(C^N))+V[13]+2850285829&4294967295,b=C+(R<<5&4294967295|R>>>27),R=U+(C^N&(b^C))+V[2]+4243563512&4294967295,U=b+(R<<9&4294967295|R>>>23),R=N+(b^C&(U^b))+V[7]+1735328473&4294967295,N=U+(R<<14&4294967295|R>>>18),R=C+(U^b&(N^U))+V[12]+2368359562&4294967295,C=N+(R<<20&4294967295|R>>>12),R=b+(C^N^U)+V[5]+4294588738&4294967295,b=C+(R<<4&4294967295|R>>>28),R=U+(b^C^N)+V[8]+2272392833&4294967295,U=b+(R<<11&4294967295|R>>>21),R=N+(U^b^C)+V[11]+1839030562&4294967295,N=U+(R<<16&4294967295|R>>>16),R=C+(N^U^b)+V[14]+4259657740&4294967295,C=N+(R<<23&4294967295|R>>>9),R=b+(C^N^U)+V[1]+2763975236&4294967295,b=C+(R<<4&4294967295|R>>>28),R=U+(b^C^N)+V[4]+1272893353&4294967295,U=b+(R<<11&4294967295|R>>>21),R=N+(U^b^C)+V[7]+4139469664&4294967295,N=U+(R<<16&4294967295|R>>>16),R=C+(N^U^b)+V[10]+3200236656&4294967295,C=N+(R<<23&4294967295|R>>>9),R=b+(C^N^U)+V[13]+681279174&4294967295,b=C+(R<<4&4294967295|R>>>28),R=U+(b^C^N)+V[0]+3936430074&4294967295,U=b+(R<<11&4294967295|R>>>21),R=N+(U^b^C)+V[3]+3572445317&4294967295,N=U+(R<<16&4294967295|R>>>16),R=C+(N^U^b)+V[6]+76029189&4294967295,C=N+(R<<23&4294967295|R>>>9),R=b+(C^N^U)+V[9]+3654602809&4294967295,b=C+(R<<4&4294967295|R>>>28),R=U+(b^C^N)+V[12]+3873151461&4294967295,U=b+(R<<11&4294967295|R>>>21),R=N+(U^b^C)+V[15]+530742520&4294967295,N=U+(R<<16&4294967295|R>>>16),R=C+(N^U^b)+V[2]+3299628645&4294967295,C=N+(R<<23&4294967295|R>>>9),R=b+(N^(C|~U))+V[0]+4096336452&4294967295,b=C+(R<<6&4294967295|R>>>26),R=U+(C^(b|~N))+V[7]+1126891415&4294967295,U=b+(R<<10&4294967295|R>>>22),R=N+(b^(U|~C))+V[14]+2878612391&4294967295,N=U+(R<<15&4294967295|R>>>17),R=C+(U^(N|~b))+V[5]+4237533241&4294967295,C=N+(R<<21&4294967295|R>>>11),R=b+(N^(C|~U))+V[12]+1700485571&4294967295,b=C+(R<<6&4294967295|R>>>26),R=U+(C^(b|~N))+V[3]+2399980690&4294967295,U=b+(R<<10&4294967295|R>>>22),R=N+(b^(U|~C))+V[10]+4293915773&4294967295,N=U+(R<<15&4294967295|R>>>17),R=C+(U^(N|~b))+V[1]+2240044497&4294967295,C=N+(R<<21&4294967295|R>>>11),R=b+(N^(C|~U))+V[8]+1873313359&4294967295,b=C+(R<<6&4294967295|R>>>26),R=U+(C^(b|~N))+V[15]+4264355552&4294967295,U=b+(R<<10&4294967295|R>>>22),R=N+(b^(U|~C))+V[6]+2734768916&4294967295,N=U+(R<<15&4294967295|R>>>17),R=C+(U^(N|~b))+V[13]+1309151649&4294967295,C=N+(R<<21&4294967295|R>>>11),R=b+(N^(C|~U))+V[4]+4149444226&4294967295,b=C+(R<<6&4294967295|R>>>26),R=U+(C^(b|~N))+V[11]+3174756917&4294967295,U=b+(R<<10&4294967295|R>>>22),R=N+(b^(U|~C))+V[2]+718787259&4294967295,N=U+(R<<15&4294967295|R>>>17),R=C+(U^(N|~b))+V[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+N&4294967295,I.g[3]=I.g[3]+U&4294967295}r.prototype.v=function(I,b){b===void 0&&(b=I.length);const C=b-this.blockSize,V=this.C;let N=this.h,U=0;for(;U<b;){if(N==0)for(;U<=C;)o(this,I,U),U+=this.blockSize;if(typeof I=="string"){for(;U<b;)if(V[N++]=I.charCodeAt(U++),N==this.blockSize){o(this,V),N=0;break}}else for(;U<b;)if(V[N++]=I[U++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=b},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;b=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=b&255,b/=256;for(this.v(I),I=Array(16),b=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)I[b++]=this.g[C]>>>V&255;return I};function u(I,b){var C=g;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=b(I)}function f(I,b){this.h=b;const C=[];let V=!0;for(let N=I.length-1;N>=0;N--){const U=I[N]|0;V&&U==b||(C[N]=U,V=!1)}this.g=C}var g={};function _(I){return-128<=I&&I<128?u(I,function(b){return new f([b|0],b<0?-1:0)}):new f([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return S;if(I<0)return W(y(-I));const b=[];let C=1;for(let V=0;I>=C;V++)b[V]=I/C|0,C*=4294967296;return new f(b,0)}function A(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return W(A(I.substring(1),b));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(b,8));let V=S;for(let U=0;U<I.length;U+=8){var N=Math.min(8,I.length-U);const R=parseInt(I.substring(U,U+N),b);N<8?(N=y(Math.pow(b,N)),V=V.j(N).add(y(R))):(V=V.j(C),V=V.add(y(R)))}return V}var S=_(0),M=_(1),G=_(16777216);s=f.prototype,s.m=function(){if(it(this))return-W(this).m();let I=0,b=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);I+=(V>=0?V:4294967296+V)*b,b*=4294967296}return I},s.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(Z(this))return"0";if(it(this))return"-"+W(this).toString(I);const b=y(Math.pow(I,6));var C=this;let V="";for(;;){const N=bt(C,b).g;C=ft(C,N.j(b));let U=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=N,Z(C))return U+V;for(;U.length<6;)U="0"+U;V=U+V}},s.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function Z(I){if(I.h!=0)return!1;for(let b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function it(I){return I.h==-1}s.l=function(I){return I=ft(this,I),it(I)?-1:Z(I)?0:1};function W(I){const b=I.g.length,C=[];for(let V=0;V<b;V++)C[V]=~I.g[V];return new f(C,~I.h).add(M)}s.abs=function(){return it(this)?W(this):this},s.add=function(I){const b=Math.max(this.g.length,I.g.length),C=[];let V=0;for(let N=0;N<=b;N++){let U=V+(this.i(N)&65535)+(I.i(N)&65535),R=(U>>>16)+(this.i(N)>>>16)+(I.i(N)>>>16);V=R>>>16,U&=65535,R&=65535,C[N]=R<<16|U}return new f(C,C[C.length-1]&-2147483648?-1:0)};function ft(I,b){return I.add(W(b))}s.j=function(I){if(Z(this)||Z(I))return S;if(it(this))return it(I)?W(this).j(W(I)):W(W(this).j(I));if(it(I))return W(this.j(W(I)));if(this.l(G)<0&&I.l(G)<0)return y(this.m()*I.m());const b=this.g.length+I.g.length,C=[];for(var V=0;V<2*b;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<I.g.length;N++){const U=this.i(V)>>>16,R=this.i(V)&65535,Zt=I.i(N)>>>16,ge=I.i(N)&65535;C[2*V+2*N]+=R*ge,pt(C,2*V+2*N),C[2*V+2*N+1]+=U*ge,pt(C,2*V+2*N+1),C[2*V+2*N+1]+=R*Zt,pt(C,2*V+2*N+1),C[2*V+2*N+2]+=U*Zt,pt(C,2*V+2*N+2)}for(I=0;I<b;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=b;I<2*b;I++)C[I]=0;return new f(C,0)};function pt(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function mt(I,b){this.g=I,this.h=b}function bt(I,b){if(Z(b))throw Error("division by zero");if(Z(I))return new mt(S,S);if(it(I))return b=bt(W(I),b),new mt(W(b.g),W(b.h));if(it(b))return b=bt(I,W(b)),new mt(W(b.g),b.h);if(I.g.length>30){if(it(I)||it(b))throw Error("slowDivide_ only works with positive integers.");for(var C=M,V=b;V.l(I)<=0;)C=Bt(C),V=Bt(V);var N=Ct(C,1),U=Ct(V,1);for(V=Ct(V,2),C=Ct(C,2);!Z(V);){var R=U.add(V);R.l(I)<=0&&(N=N.add(C),U=R),V=Ct(V,1),C=Ct(C,1)}return b=ft(I,N.j(b)),new mt(N,b)}for(N=S;I.l(b)>=0;){for(C=Math.max(1,Math.floor(I.m()/b.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),U=y(C),R=U.j(b);it(R)||R.l(I)>0;)C-=V,U=y(C),R=U.j(b);Z(U)&&(U=M),N=N.add(U),I=ft(I,R)}return new mt(N,I)}s.B=function(I){return bt(this,I).h},s.and=function(I){const b=Math.max(this.g.length,I.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)&I.i(V);return new f(C,this.h&I.h)},s.or=function(I){const b=Math.max(this.g.length,I.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)|I.i(V);return new f(C,this.h|I.h)},s.xor=function(I){const b=Math.max(this.g.length,I.g.length),C=[];for(let V=0;V<b;V++)C[V]=this.i(V)^I.i(V);return new f(C,this.h^I.h)};function Bt(I){const b=I.g.length+1,C=[];for(let V=0;V<b;V++)C[V]=I.i(V)<<1|I.i(V-1)>>>31;return new f(C,I.h)}function Ct(I,b){const C=b>>5;b%=32;const V=I.g.length-C,N=[];for(let U=0;U<V;U++)N[U]=b>0?I.i(U+C)>>>b|I.i(U+C+1)<<32-b:I.i(U+C);return new f(N,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lT=r,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,hr=f}).apply(typeof wv<"u"?wv:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uT,Ml,cT,Qc,pm,hT,fT,dT;(function(){var s,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function o(c,m){if(m)t:{var v=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var k=c[T];if(!(k in v))break t;v=v[k]}c=c[c.length-1],T=v[c],m=m(T),m!=T&&m!=null&&t(v,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var v=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&v.push([T,m[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function _(c,m,v){return c.call.apply(c.bind,arguments)}function y(c,m,v){return y=_,y.apply(null,arguments)}function A(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(T,k,B){for(var tt=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)tt[Rt-2]=arguments[Rt];return m.prototype[k].apply(T,tt)}}var M=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function G(c){const m=c.length;if(m>0){const v=Array(m);for(let T=0;T<m;T++)v[T]=c[T];return v}return[]}function Z(c,m){for(let T=1;T<arguments.length;T++){const k=arguments[T];var v=typeof k;if(v=v!="object"?v:k?Array.isArray(k)?"array":v:"null",v=="array"||v=="object"&&typeof k.length=="number"){v=c.length||0;const B=k.length||0;c.length=v+B;for(let tt=0;tt<B;tt++)c[v+tt]=k[tt]}else c.push(k)}}class it{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function W(c){f.setTimeout(()=>{throw c},0)}function ft(){var c=I;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class pt{constructor(){this.h=this.g=null}add(m,v){const T=mt.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var mt=new it(()=>new bt,c=>c.reset());class bt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,Ct=!1,I=new pt,b=()=>{const c=Promise.resolve(void 0);Bt=()=>{c.then(C)}};function C(){for(var c;c=ft();){try{c.h.call(c.g)}catch(v){W(v)}var m=mt;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}Ct=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function Zt(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(Zt,N),Zt.prototype.init=function(c,m){const v=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Zt.Z.h.call(this)},Zt.prototype.h=function(){Zt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),H=0;function et(c,m,v,T,k){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=k,this.key=++H,this.da=this.fa=!1}function ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vt(c,m,v){for(const T in c)m.call(v,c[T],T,c)}function qt(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function O(c){const m={};for(const v in c)m[v]=c[v];return m}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let v,T;for(let k=1;k<arguments.length;k++){T=arguments[k];for(v in T)c[v]=T[v];for(let B=0;B<K.length;B++)v=K[B],Object.prototype.hasOwnProperty.call(T,v)&&(c[v]=T[v])}}function st(c){this.src=c,this.g={},this.h=0}st.prototype.add=function(c,m,v,T,k){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const tt=Et(c,m,T,k);return tt>-1?(m=c[tt],v||(m.fa=!1)):(m=new et(m,this.src,B,!!T,k),m.fa=v,c.push(m)),m};function vt(c,m){const v=m.type;if(v in c.g){var T=c.g[v],k=Array.prototype.indexOf.call(T,m,void 0),B;(B=k>=0)&&Array.prototype.splice.call(T,k,1),B&&(ct(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Et(c,m,v,T){for(let k=0;k<c.length;++k){const B=c[k];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==T)return k}return-1}var Nt="closure_lm_"+(Math.random()*1e6|0),pe={};function Qt(c,m,v,T,k){if(Array.isArray(m)){for(let B=0;B<m.length;B++)Qt(c,m[B],v,T,k);return null}return v=Xn(v),c&&c[ge]?c.J(m,v,g(T)?!!T.capture:!1,k):Yn(c,m,v,!1,T,k)}function Yn(c,m,v,T,k,B){if(!m)throw Error("Invalid event type");const tt=g(k)?!!k.capture:!!k;let Rt=Ki(c);if(Rt||(c[Nt]=Rt=new st(c)),v=Rt.add(m,v,T,tt,B),v.proxy)return v;if(T=Gi(),v.proxy=T,T.src=c,T.listener=v,c.addEventListener)U||(k=tt),k===void 0&&(k=!1),c.addEventListener(m.toString(),T,k);else if(c.attachEvent)c.attachEvent(Nn(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Gi(){function c(v){return m.call(c.src,c.listener,v)}const m=bs;return c}function As(c,m,v,T,k){if(Array.isArray(m))for(var B=0;B<m.length;B++)As(c,m[B],v,T,k);else T=g(T)?!!T.capture:!!T,v=Xn(v),c&&c[ge]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],v=Et(m,v,T,k),v>-1&&(ct(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=Ki(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Et(m,v,T,k)),(v=c>-1?m[c]:null)&&Ss(v))}function Ss(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ge])vt(m.i,c);else{var v=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(v,T,c.capture):m.detachEvent?m.detachEvent(Nn(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Ki(m))?(vt(v,c),v.h==0&&(v.src=null,m[Nt]=null)):ct(c)}}}function Nn(c){return c in pe?pe[c]:pe[c]="on"+c}function bs(c,m){if(c.da)c=!0;else{m=new Zt(m,this);const v=c.listener,T=c.ha||c.src;c.fa&&Ss(c),c=v.call(T,m)}return c}function Ki(c){return c=c[Nt],c instanceof st?c:null}var Qi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xn(c){return typeof c=="function"?c:(c[Qi]||(c[Qi]=function(m){return c.handleEvent(m)}),c[Qi])}function de(){V.call(this),this.i=new st(this),this.M=this,this.G=null}S(de,V),de.prototype[ge]=!0,de.prototype.removeEventListener=function(c,m,v,T){As(this,c,m,v,T)};function _e(c,m){var v,T=c.G;if(T)for(v=[];T;T=T.G)v.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var k=m;m=new N(T,c),nt(m,k)}k=!0;let B,tt;if(v)for(tt=v.length-1;tt>=0;tt--)B=m.g=v[tt],k=Y(B,T,!0,m)&&k;if(B=m.g=c,k=Y(B,T,!0,m)&&k,k=Y(B,T,!1,m)&&k,v)for(tt=0;tt<v.length;tt++)B=m.g=v[tt],k=Y(B,T,!1,m)&&k}de.prototype.N=function(){if(de.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let T=0;T<v.length;T++)ct(v[T]);delete c.g[m],c.h--}}this.G=null},de.prototype.J=function(c,m,v,T){return this.i.add(String(c),m,!1,v,T)},de.prototype.K=function(c,m,v,T){return this.i.add(String(c),m,!0,v,T)};function Y(c,m,v,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let k=!0;for(let B=0;B<m.length;++B){const tt=m[B];if(tt&&!tt.da&&tt.capture==v){const Rt=tt.listener,Se=tt.ha||tt.src;tt.fa&&vt(c.i,tt),k=Rt.call(Se,T)!==!1&&k}}return k&&!T.defaultPrevented}function at(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function Wt(c){c.g=at(()=>{c.g=null,c.i&&(c.i=!1,Wt(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Pt extends V{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(c){V.call(this),this.h=c,this.g={}}S(se,V);var Dn=[];function wo(c){Vt(c.g,function(m,v){this.g.hasOwnProperty(v)&&Ss(m)},c),c.g={}}se.prototype.N=function(){se.Z.N.call(this),wo(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rs=f.JSON.stringify,Fh=f.JSON.parse,hu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function fu(){}function du(){}var Jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ke(){N.call(this,"d")}S(Ke,N);function On(){N.call(this,"c")}S(On,N);var Ae={},mu=null;function va(){return mu=mu||new de}Ae.Ia="serverreachability";function gu(c){N.call(this,Ae.Ia,c)}S(gu,N);function di(c){const m=va();_e(m,new gu(m))}Ae.STAT_EVENT="statevent";function br(c,m){N.call(this,Ae.STAT_EVENT,c),this.stat=m}S(br,N);function Ie(c){const m=va();_e(m,new br(m,c))}Ae.Ja="timingevent";function mi(c,m){N.call(this,Ae.Ja,c),this.size=m}S(mi,N);function gi(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function Gh(c,m,v,T,k,B){c.info(function(){if(c.g)if(B){var tt="",Rt=B.split("&");for(let Gt=0;Gt<Rt.length;Gt++){var Se=Rt[Gt].split("=");if(Se.length>1){const he=Se[0];Se=Se[1];const Un=he.split("_");tt=Un.length>=2&&Un[1]=="type"?tt+(he+"="+Se+"&"):tt+(he+"=redacted&")}}}else tt=null;else tt=B;return"XMLHTTP REQ ("+T+") [attempt "+k+"]: "+m+`
`+v+`
`+tt})}function pu(c,m,v,T,k,B,tt){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+k+"]: "+m+`
`+v+`
`+B+" "+tt})}function pi(c,m,v,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Kh(c,v)+(T?" "+T:"")})}function Rr(c,m){c.info(function(){return"TIMEOUT: "+m})}$n.prototype.info=function(){};function Kh(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var v=B[c];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var k=T[0];if(k!="noop"&&k!="stop"&&k!="close")for(let tt=1;tt<T.length;tt++)T[tt]=""}}}}return Rs(B)}catch{return m}}var wr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Io={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Co;function Ir(){}S(Ir,fu),Ir.prototype.g=function(){return new XMLHttpRequest},Co=new Ir;function Yi(c){return encodeURIComponent(String(c))}function _u(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function Zn(c,m,v,T){this.j=c,this.i=m,this.l=v,this.S=T||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wn}function Wn(){this.i=null,this.g="",this.h=!1}var Ce={},qe={};function _i(c,m,v){c.M=1,c.A=Cr(De(m)),c.u=v,c.R=!0,Ea(c,null)}function Ea(c,m){c.F=Date.now(),yi(c),c.B=De(c.A);var v=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),ba(v.i,"t",T),c.C=0,v=c.j.L,c.h=new Wn,c.g=Vu(c.j,v?m:null,!c.u),c.P>0&&(c.O=new Pt(y(c.Y,c,c.g),c.P)),m=c.V,v=c.g,T=c.ba;var k="readystatechange";Array.isArray(k)||(k&&(Dn[0]=k.toString()),k=Dn);for(let B=0;B<k.length;B++){const tt=Qt(v,k[B],T||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.J?O(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),di(),Gh(c.i,c.v,c.B,c.l,c.S,c.u)}Zn.prototype.ba=function(c){c=c.target;const m=this.O;m&&ni(c)==3?m.j():this.Y(c)},Zn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=ni(this.g),Se=this.g.ya(),Gt=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||Qe(this.g)))){this.K||Rt!=4||Se==7||(Se==8||Gt<=0?di(3):di(2)),vi(this);var m=this.g.ca();this.X=m;var v=Qh(this);if(this.o=m==200,pu(this.i,this.v,this.B,this.l,this.S,Rt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var T,k=this.g;if((T=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(T)){var B=T;break e}}B=null}if(c=B)pi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ei(this,c);else{this.o=!1,this.m=3,Ie(12),vn(this),Vn(this);break t}}if(this.R){c=!0;let he;for(;!this.K&&this.C<v.length;)if(he=vu(this,v),he==qe){Rt==4&&(this.m=4,Ie(14),c=!1),pi(this.i,this.l,null,"[Incomplete Response]");break}else if(he==Ce){this.m=4,Ie(15),pi(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else pi(this.i,this.l,he,null),Ei(this,he);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||v.length!=0||this.h.h||(this.m=1,Ie(16),c=!1),this.o=this.o&&c,!c)pi(this.i,this.l,v,"[Invalid Chunked Response]"),vn(this),Vn(this);else if(v.length>0&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.aa&&!tt.P&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Ho(tt),tt.P=!0,Ie(11))}}else pi(this.i,this.l,v,null),Ei(this,v);Rt==4&&vn(this),this.o&&!this.K&&(Rt==4?Cu(this.j,this):(this.o=!1,yi(this)))}else Ji(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),vn(this),Vn(this)}}}catch{}finally{}};function Qh(c){if(!yu(c))return c.g.la();const m=Qe(c.g);if(m==="")return"";let v="";const T=m.length,k=ni(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return vn(c),Vn(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<T;B++)c.h.h=!0,v+=c.h.i.decode(m[B],{stream:!(k&&B==T-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function yu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function vu(c,m){var v=c.C,T=m.indexOf(`
`,v);return T==-1?qe:(v=Number(m.substring(v,T)),isNaN(v)?Ce:(T+=1,T+v>m.length?qe:(m=m.slice(T,T+v),c.C=T+v,m)))}Zn.prototype.cancel=function(){this.K=!0,vn(this)};function yi(c){c.T=Date.now()+c.H,Ta(c,c.H)}function Ta(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=gi(y(c.aa,c),m)}function vi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Zn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Rr(this.i,this.B),this.M!=2&&(di(),Ie(17)),vn(this),this.m=2,Vn(this)):Ta(this,this.T-c)};function Vn(c){c.j.I==0||c.K||Cu(c.j,c)}function vn(c){vi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,wo(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function Ei(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||Ai(v.h,c))){if(!c.L&&Ai(v.h,c)&&v.I==3){try{var T=v.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var k=T;if(k[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)Na(v),Ms(v);else break t;Ur(v),Ie(18)}}else v.xa=k[1],0<v.xa-v.K&&k[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=gi(y(v.Va,v),6e3));Ti(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ci(v,11)}else if((c.L||v.g==c)&&Na(v),!R(m))for(k=v.Ba.g.parse(m),m=0;m<k.length;m++){let Gt=k[m];const he=Gt[0];if(!(he<=v.K))if(v.K=he,Gt=Gt[1],v.I==2)if(Gt[0]=="c"){v.M=Gt[1],v.ba=Gt[2];const Un=Gt[3];Un!=null&&(v.ka=Un,v.j.info("VER="+v.ka));const Ni=Gt[4];Ni!=null&&(v.za=Ni,v.j.info("SVER="+v.za));const ii=Gt[5];ii!=null&&typeof ii=="number"&&ii>0&&(T=1.5*ii,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const si=c.g;if(si){const kr=si.g?si.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var B=T.h;B.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Oo(B,B.h),B.h=null))}if(T.G){const Da=si.g?si.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(T.wa=Da,Xt(T.J,T.G,Da))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var tt=c;if(T.na=Ou(T,T.L?T.ba:null,T.W),tt.L){Vo(T.h,tt);var Rt=tt,Se=T.O;Se&&(Rt.H=Se),Rt.D&&(vi(Rt),yi(Rt)),T.g=tt}else wu(T);v.i.length>0&&Ii(v)}else Gt[0]!="stop"&&Gt[0]!="close"||Ci(v,7);else v.I==3&&(Gt[0]=="stop"||Gt[0]=="close"?Gt[0]=="stop"?Ci(v,7):jo(v):Gt[0]!="noop"&&v.l&&v.l.qa(Gt),v.A=0)}}di(4)}catch{}}var Ne=class{constructor(c,m){this.g=c,this.map=m}};function No(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Do(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ti(c){return c.h?1:c.g?c.g.size:0}function Ai(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Oo(c,m){c.g?c.g.add(m):c.h=m}function Vo(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}No.prototype.cancel=function(){if(this.i=Mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Mo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return G(c.i)}var Eu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Aa(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const T=c[v].indexOf("=");let k,B=null;T>=0?(k=c[v].substring(0,T),B=c[v].substring(T+1)):k=c[v],m(k,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function En(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof En?(this.l=c.l,He(this,c.j),this.o=c.o,this.g=c.g,ws(this,c.u),this.h=c.h,xo(this,bu(c.i)),this.m=c.m):c&&(m=String(c).match(Eu))?(this.l=!1,He(this,m[1]||"",!0),this.o=Si(m[2]||""),this.g=Si(m[3]||"",!0),ws(this,m[4]),this.h=Si(m[5]||"",!0),xo(this,m[6]||"",!0),this.m=Si(m[7]||"")):(this.l=!1,this.i=new Cs(null,this.l))}En.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(Nr(m,Sa,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Nr(m,Sa,!0),"@"),c.push(Yi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Nr(v,v.charAt(0)=="/"?Uo:Tu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Nr(v,Au)),c.join("")},En.prototype.resolve=function(c){const m=De(this);let v=!!c.j;v?He(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var T=c.h;if(v)ws(m,c.u);else if(v=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var k=m.h.lastIndexOf("/");k!=-1&&(T=m.h.slice(0,k+1)+T)}if(k=T,k==".."||k==".")T="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){T=k.lastIndexOf("/",0)==0,k=k.split("/");const B=[];for(let tt=0;tt<k.length;){const Rt=k[tt++];Rt=="."?T&&tt==k.length&&B.push(""):Rt==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&tt==k.length&&B.push("")):(B.push(Rt),T=!0)}T=B.join("/")}else T=k}return v?m.h=T:v=c.i.toString()!=="",v?xo(m,bu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function De(c){return new En(c)}function He(c,m,v){c.j=v?Si(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function ws(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function xo(c,m,v){m instanceof Cs?(c.i=m,Ra(c.i,c.l)):(v||(m=Nr(m,Is)),c.i=new Cs(m,c.l))}function Xt(c,m,v){c.i.set(m,v)}function Cr(c){return Xt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Si(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Nr(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,cn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Sa=/[#\/\?@]/g,Tu=/[#\?:]/g,Uo=/[#\?]/g,Is=/[#\?@]/g,Au=/#/g;function Cs(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function hn(c){c.g||(c.g=new Map,c.h=0,c.i&&Aa(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}s=Cs.prototype,s.add=function(c,m){hn(this),this.i=null,c=Ns(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function Su(c,m){hn(c),m=Ns(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function ko(c,m){return hn(c),m=Ns(c,m),c.g.has(m)}s.forEach=function(c,m){hn(this),this.g.forEach(function(v,T){v.forEach(function(k){c.call(m,k,T,this)},this)},this)};function Lo(c,m){hn(c);let v=[];if(typeof m=="string")ko(c,m)&&(v=v.concat(c.g.get(Ns(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}s.set=function(c,m){return hn(this),this.i=null,c=Ns(this,c),ko(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},s.get=function(c,m){return c?(c=Lo(this,c),c.length>0?String(c[0]):m):m};function ba(c,m,v){Su(c,m),v.length>0&&(c.i=null,c.g.set(Ns(c,m),G(v)),c.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var v=m[T];const k=Yi(v);v=Lo(this,v);for(let B=0;B<v.length;B++){let tt=k;v[B]!==""&&(tt+="="+Yi(v[B])),c.push(tt)}}return this.i=c.join("&")};function bu(c){const m=new Cs;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Ns(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Ra(c,m){m&&!c.j&&(hn(c),c.i=null,c.g.forEach(function(v,T){const k=T.toLowerCase();T!=k&&(Su(this,T),ba(this,k,v))},c)),c.j=m}function ti(c,m){const v=new $n;if(f.Image){const T=new Image;T.onload=A(Mn,v,"TestLoadImage: loaded",!0,m,T),T.onerror=A(Mn,v,"TestLoadImage: error",!1,m,T),T.onabort=A(Mn,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=A(Mn,v,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function Po(c,m){const v=new $n,T=new AbortController,k=setTimeout(()=>{T.abort(),Mn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(B=>{clearTimeout(k),B.ok?Mn(v,"TestPingServer: ok",!0,m):Mn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),Mn(v,"TestPingServer: error",!1,m)})}function Mn(c,m,v,T,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),T(v)}catch{}}function Ds(){this.g=new hu}function bi(c){this.i=c.Sb||null,this.h=c.ab||!1}S(bi,fu),bi.prototype.g=function(){return new Dr(this.i,this.h)};function Dr(c,m){de.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Dr,de),s=Dr.prototype,s.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,ei(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wa(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function wa(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Os(this):ei(this),this.readyState==3&&wa(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,Os(this))},s.Na=function(c){this.g&&(this.response=c,Os(this))},s.ga=function(){this.g&&Os(this)};function Os(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ei(c)}s.setRequestHeader=function(c,m){this.A.append(c,m)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function ei(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function xn(c){let m="";return Vt(c,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function Or(c,m,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=xn(v),typeof c=="string"?v!=null&&Yi(v):Xt(c,m,v))}function te(c){de.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(te,de);var Ri=/^https?$/i,zo=["POST","PUT"];s=te.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Co.g(),this.g.onreadystatechange=M(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){Vr(this,B);return}if(c=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var k in T)v.set(k,T[k]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())v.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),k=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(zo,m,void 0)>=0)||T||k||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,tt]of v)this.g.setRequestHeader(B,tt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){Vr(this,B)}};function Vr(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,Bo(c),Xi(c)}function Bo(c){c.A||(c.A=!0,_e(c,"complete"),_e(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,_e(this,"complete"),_e(this,"abort"),Xi(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xi(this,!0)),te.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Mr(this):this.Xa())},s.Xa=function(){Mr(this)};function Mr(c){if(c.h&&typeof u<"u"){if(c.v&&ni(c)==4)setTimeout(c.Ca.bind(c),0);else if(_e(c,"readystatechange"),ni(c)==4){c.h=!1;try{const B=c.ca();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var T;if(T=B===0){let tt=String(c.D).match(Eu)[1]||null;!tt&&f.self&&f.self.location&&(tt=f.self.location.protocol.slice(0,-1)),T=!Ri.test(tt?tt.toLowerCase():"")}v=T}if(v)_e(c,"complete"),_e(c,"success");else{c.o=6;try{var k=ni(c)>2?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.ca()+"]",Bo(c)}}finally{Xi(c)}}}}function Xi(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||_e(c,"ready");try{v.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function ni(c){return c.g?c.g.readyState:0}s.ca=function(){try{return ni(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Fh(m)}};function Qe(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ji(c){const m={};c=(c.g&&ni(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(R(c[T]))continue;var v=_u(c[T]);const k=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[k]||[];m[k]=B,B.push(v)}qt(m,function(T){return T.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Vs(c){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,c),this.Za=wi("retryDelaySeedMs",1e4,c),this.Ta=wi("forwardChannelMaxRetries",2,c),this.va=wi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new No(c&&c.concurrentRequestLimit),this.Ba=new Ds,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Vs.prototype,s.ka=8,s.I=1,s.connect=function(c,m,v,T){Ie(0),this.W=c,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=Ou(this,null,this.W),Ii(this)};function jo(c){if(Ia(c),c.I==3){var m=c.V++,v=De(c.J);if(Xt(v,"SID",c.M),Xt(v,"RID",m),Xt(v,"TYPE","terminate"),xr(c,v),m=new Zn(c,c.j,m),m.M=2,m.A=Cr(De(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Vu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),yi(m)}Du(c)}function Ms(c){c.g&&(Ho(c),c.g.cancel(),c.g=null)}function Ia(c){Ms(c),c.v&&(f.clearTimeout(c.v),c.v=null),Na(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ii(c){if(!Do(c.h)&&!c.m){c.m=!0;var m=c.Ea;Bt||b(),Ct||(Bt(),Ct=!0),I.add(m,c),c.D=0}}function Ca(c,m){return Ti(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=gi(y(c.Ea,c,m),Nu(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const k=new Zn(this,this.j,c);let B=this.o;if(this.U&&(B?(B=O(B),nt(B,this.U)):B=this.U),this.u!==null||this.R||(k.J=B,B=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=Ru(this,k,m),v=De(this.J),Xt(v,"RID",c),Xt(v,"CVER",22),this.G&&Xt(v,"X-HTTP-Session-Id",this.G),xr(this,v),B&&(this.R?m="headers="+Yi(xn(B))+"&"+m:this.u&&Or(v,this.u,B)),Oo(this.h,k),this.Ra&&Xt(v,"TYPE","init"),this.S?(Xt(v,"$req",m),Xt(v,"SID","null"),k.U=!0,_i(k,v,null)):_i(k,v,m),this.I=2}}else this.I==3&&(c?qo(this,c):this.i.length==0||Do(this.h)||qo(this))};function qo(c,m){var v;m?v=m.l:v=c.V++;const T=De(c.J);Xt(T,"SID",c.M),Xt(T,"RID",v),Xt(T,"AID",c.K),xr(c,T),c.u&&c.o&&Or(T,c.u,c.o),v=new Zn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Ru(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Oo(c.h,v),_i(v,T,m)}function xr(c,m){c.H&&Vt(c.H,function(v,T){Xt(m,T,v)}),c.l&&Vt({},function(v,T){Xt(m,T,v)})}function Ru(c,m,v){v=Math.min(c.i.length,v);const T=c.l?y(c.l.Ka,c.l,c):null;t:{var k=c.i;let Rt=-1;for(;;){const Se=["count="+v];Rt==-1?v>0?(Rt=k[0].g,Se.push("ofs="+Rt)):Rt=0:Se.push("ofs="+Rt);let Gt=!0;for(let he=0;he<v;he++){var B=k[he].g;const Un=k[he].map;if(B-=Rt,B<0)Rt=Math.max(0,k[he].g-100),Gt=!1;else try{B="req"+B+"_"||"";try{var tt=Un instanceof Map?Un:Object.entries(Un);for(const[Ni,ii]of tt){let si=ii;g(ii)&&(si=Rs(ii)),Se.push(B+Ni+"="+encodeURIComponent(si))}}catch(Ni){throw Se.push(B+"type="+encodeURIComponent("_badmap")),Ni}}catch{T&&T(Un)}}if(Gt){tt=Se.join("&");break t}}tt=void 0}return c=c.i.splice(0,v),m.G=c,tt}function wu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;Bt||b(),Ct||(Bt(),Ct=!0),I.add(m,c),c.A=0}}function Ur(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=gi(y(c.Da,c),Nu(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,Iu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=gi(y(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),Ms(this),Iu(this))};function Ho(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Iu(c){c.g=new Zn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=De(c.na);Xt(m,"RID","rpc"),Xt(m,"SID",c.M),Xt(m,"AID",c.K),Xt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Xt(m,"TO",c.ia),Xt(m,"TYPE","xmlhttp"),xr(c,m),c.u&&c.o&&Or(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Cr(De(m)),v.u=null,v.R=!0,Ea(v,c)}s.Va=function(){this.C!=null&&(this.C=null,Ms(this),Ur(this),Ie(19))};function Na(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Cu(c,m){var v=null;if(c.g==m){Na(c),Ho(c),c.g=null;var T=2}else if(Ai(c.h,m))v=m.G,Vo(c.h,m),T=1;else return;if(c.I!=0){if(m.o)if(T==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var k=c.D;T=va(),_e(T,new mi(T,v)),Ii(c)}else wu(c);else if(k=m.m,k==3||k==0&&m.X>0||!(T==1&&Ca(c,m)||T==2&&Ur(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),k){case 1:Ci(c,5);break;case 4:Ci(c,10);break;case 3:Ci(c,6);break;default:Ci(c,2)}}}function Nu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Ci(c,m){if(c.j.info("Error code "+m),m==2){var v=y(c.bb,c),T=c.Ua;const k=!T;T=new En(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||He(T,"https"),Cr(T),k?ti(T.toString(),v):Po(T.toString(),v)}else Ie(2);c.I=0,c.l&&c.l.pa(m),Du(c),Ia(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function Du(c){if(c.I=0,c.ja=[],c.l){const m=Mo(c.h);(m.length!=0||c.i.length!=0)&&(Z(c.ja,m),Z(c.ja,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.oa()}}function Ou(c,m,v){var T=v instanceof En?De(v):new En(v);if(T.g!="")m&&(T.g=m+"."+T.g),ws(T,T.u);else{var k=f.location;T=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;const B=new En(null);T&&He(B,T),m&&(B.g=m),k&&ws(B,k),v&&(B.h=v),T=B}return v=c.G,m=c.wa,v&&m&&Xt(T,v,m),Xt(T,"VER",c.ka),xr(c,T),T}function Vu(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new te(new bi({ab:v})):new te(c.ma),m.Fa(c.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}s=Mu.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function xs(){}xs.prototype.g=function(c,m){return new on(c,m)};function on(c,m){de.call(this),this.g=new Vs(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!R(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new $i(this)}S(on,de),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){jo(this.g)},on.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=Rs(c),c=v);m.i.push(new Ne(m.Ya++,c)),m.I==3&&Ii(m)},on.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,on.Z.N.call(this)};function xu(c){Ke.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const v in m){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(xu,Ke);function Uu(){On.call(this),this.status=1}S(Uu,On);function $i(c){this.g=c}S($i,Mu),$i.prototype.ra=function(){_e(this.g,"a")},$i.prototype.qa=function(c){_e(this.g,new xu(c))},$i.prototype.pa=function(c){_e(this.g,new Uu)},$i.prototype.oa=function(){_e(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,dT=function(){return new xs},fT=function(){return va()},hT=Ae,pm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,Qc=wr,Io.COMPLETE="complete",cT=Io,du.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",de.prototype.listen=de.prototype.J,Ml=du,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,uT=te}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="12.12.0";function iw(s){To=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const oa=new zm("@firebase/firestore");function ao(){return oa.logLevel}function rt(s,...t){if(oa.logLevel<=Ut.DEBUG){const n=t.map(qm);oa.debug(`Firestore (${To}): ${s}`,...n)}}function vs(s,...t){if(oa.logLevel<=Ut.ERROR){const n=t.map(qm);oa.error(`Firestore (${To}): ${s}`,...n)}}function la(s,...t){if(oa.logLevel<=Ut.WARN){const n=t.map(qm);oa.warn(`Firestore (${To}): ${s}`,...n)}}function qm(s){if(typeof s=="string")return s;try{return(function(n){return JSON.stringify(n)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(s,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,mT(s,r,n)}function mT(s,t,n){let r=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw vs(r),new Error(r)}function Yt(s,t,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,s||mT(t,o,r)}function St(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ut extends Fi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(sn.UNAUTHENTICATED)))}shutdown(){}}class rw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class aw{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Yt(this.o===void 0,42304);let r=this.i;const o=_=>this.i!==r?(r=this.i,n(_)):Promise.resolve();let u=new ps;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ps,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const _=u;t.enqueueRetryable((async()=>{await _.promise,await o(this.currentUser)}))},g=_=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((_=>g(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?g(_):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ps)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yt(typeof r.accessToken=="string",31837,{l:r}),new gT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string",2055,{h:t}),new sn(t)}}class ow{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lw{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new ow(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Iv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Yt(this.o===void 0,3512);const r=u=>{u.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>r(u)))};const o=u=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Iv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Yt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Iv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=cw(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<n&&(r+=t.charAt(o[u]%62))}return r}}function kt(s,t){return s<t?-1:s>t?1:0}function _m(s,t){const n=Math.min(s.length,t.length);for(let r=0;r<n;r++){const o=s.charAt(r),u=t.charAt(r);if(o!==u)return Wd(o)===Wd(u)?kt(o,u):Wd(o)?1:-1}return kt(s.length,t.length)}const hw=55296,fw=57343;function Wd(s){const t=s.charCodeAt(0);return t>=hw&&t<=fw}function po(s,t,n){return s.length===t.length&&s.every(((r,o)=>n(r,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__name__";class Ui{constructor(t,n,r){n===void 0?n=0:n>t.length&&yt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&yt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ui?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let o=0;o<r;o++){const u=Ui.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return kt(t.length,n.length)}static compareSegments(t,n){const r=Ui.isNumericId(t),o=Ui.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?Ui.extractNumericId(t).compare(Ui.extractNumericId(n)):_m(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return hr.fromString(t.substring(4,t.length-2))}}class ue extends Ui{construct(t,n,r){return new ue(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ut($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((o=>o.length>0)))}return new ue(n)}static emptyPath(){return new ue([])}}const dw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ui{construct(t,n,r){return new We(t,n,r)}static isValidIdentifier(t){return dw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cv}static keyField(){return new We([Cv])}static fromServerFormat(t){const n=[];let r="",o=0;const u=()=>{if(r.length===0)throw new ut($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new ut($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ut($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=_,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(r+=g,o++):(u(),o++)}if(u(),f)throw new ut($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(ue.fromString(t))}static fromName(t){return new dt(ue.fromString(t).popFirst(5))}static empty(){return new dt(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ue.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ue.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new ue(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(s,t,n){if(!n)throw new ut($.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function mw(s,t,n,r){if(t===!0&&r===!0)throw new ut($.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function Nv(s){if(!dt.isDocumentKey(s))throw new ut($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Dv(s){if(dt.isDocumentKey(s))throw new ut($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function _T(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Fm(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":yt(12329,{type:typeof s})}function Kn(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new ut($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fm(s);throw new ut($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return s}/**
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
 */function ke(s,t){const n={typeString:s};return t&&(n.value=t),n}function eu(s,t){if(!_T(s))throw new ut($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const o=t[r].typeString,u="value"in t[r]?{value:t[r].value}:void 0;if(!(r in s)){n=`JSON missing required field: '${r}'`;break}const f=s[r];if(o&&typeof f!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${r}' field to equal '${u.value}'`;break}}if(n)throw new ut($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=-62135596800,Vv=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(t){return ce.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Vv);return new ce(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ut($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ut($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Ov)throw new ut($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ut($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vv}_compareTo(t){return this.seconds===t.seconds?kt(this.nanoseconds,t.nanoseconds):kt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(eu(t,ce._jsonSchema))return new ce(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ov;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:ke("string",ce._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new ce(0,0))}static max(){return new Tt(new ce(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fl=-1;function gw(s,t){const n=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(r===1e9?new ce(n+1,0):new ce(n,r));return new mr(o,dt.empty(),t)}function pw(s){return new mr(s.readTime,s.key,Fl)}class mr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(Tt.min(),dt.empty(),Fl)}static max(){return new mr(Tt.max(),dt.empty(),Fl)}}function _w(s,t){let n=s.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(s.documentKey,t.documentKey),n!==0?n:kt(s.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(s){if(s.code!==$.FAILED_PRECONDITION||s.message!==yw)throw s;rt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&yt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new J(((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):J.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):J.reject(n)}static resolve(t){return new J(((n,r)=>{n(t)}))}static reject(t){return new J(((n,r)=>{r(t)}))}static waitFor(t){return new J(((n,r)=>{let o=0,u=0,f=!1;t.forEach((g=>{++o,g.next((()=>{++u,f&&u===o&&n()}),(_=>r(_)))})),f=!0,u===o&&n()}))}static or(t){let n=J.resolve(!1);for(const r of t)n=n.next((o=>o?J.resolve(o):r()));return n}static forEach(t,n){const r=[];return t.forEach(((o,u)=>{r.push(n.call(this,o,u))})),this.waitFor(r)}static mapArray(t,n){return new J(((r,o)=>{const u=t.length,f=new Array(u);let g=0;for(let _=0;_<u;_++){const y=_;n(t[y]).next((A=>{f[y]=A,++g,g===u&&r(f)}),(A=>o(A)))}}))}static doWhile(t,n){return new J(((r,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):r()};u()}))}}function Ew(s){const t=s.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function So(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class wh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}wh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=-1;function Ih(s){return s==null}function ah(s){return s===0&&1/s==-1/0}function Tw(s){return typeof s=="number"&&Number.isInteger(s)&&!ah(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="";function Aw(s){let t="";for(let n=0;n<s.length;n++)t.length>0&&(t=Mv(t)),t=Sw(s.get(n),t);return Mv(t)}function Sw(s,t){let n=t;const r=s.length;for(let o=0;o<r;o++){const u=s.charAt(o);switch(u){case"\0":n+="";break;case yT:n+="";break;default:n+=u}}return n}function Mv(s){return s+yT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(s){let t=0;for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t++;return t}function ga(s,t){for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t(n,s[n])}function vT(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,n){this.comparator=t,this.root=n||Ze.EMPTY}insert(t,n){return new me(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(t,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bc(this.root,t,this.comparator,!0)}}class Bc{constructor(t,n,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?r(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ze{constructor(t,n,r,o,u){this.key=t,this.value=n,this.color=r??Ze.RED,this.left=o??Ze.EMPTY,this.right=u??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,o,u){return new Ze(t??this.key,n??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let o=this;const u=r(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,r),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Ze.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw yt(27949);return t+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(t,n,r,o,u){return this}insert(t,n,r){return new Ze(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uv(this.data.getIterator())}getIteratorFrom(t){return new Uv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Be)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Be(this.comparator);return n.data=t,n}}class Uv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new li([])}unionWith(t){let n=new Be(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new li(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return po(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class ET extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new ET("Invalid base64 string: "+u):u}})(t);return new tn(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new tn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return kt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const bw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(s){if(Yt(!!s,39018),typeof s=="string"){let t=0;const n=bw.exec(s);if(Yt(!!n,46558,{timestamp:s}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:we(s.seconds),nanos:we(s.nanos)}}function we(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function pr(s){return typeof s=="string"?tn.fromBase64String(s):tn.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="server_timestamp",AT="__type__",ST="__previous_value__",bT="__local_write_time__";function Km(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[AT])==null?void 0:r.stringValue)===TT}function Ch(s){const t=s.mapValue.fields[ST];return Km(t)?Ch(t):t}function Gl(s){const t=gr(s.mapValue.fields[bT].timestampValue);return new ce(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(t,n,r,o,u,f,g,_,y,A,S){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=_,this.useFetchStreams=y,this.isUsingEmulator=A,this.apiKey=S}}const oh="(default)";class Kl{constructor(t,n){this.projectId=t,this.database=n||oh}static empty(){return new Kl("","")}get isDefaultDatabase(){return this.database===oh}isEqual(t){return t instanceof Kl&&t.projectId===this.projectId&&t.database===this.database}}function ww(s,t){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ut($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kl(s.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="__type__",Iw="__max__",jc={mapValue:{}},wT="__vector__",lh="value";function _r(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Km(s)?4:Nw(s)?9007199254740991:Cw(s)?10:11:yt(28295,{value:s})}function qi(s,t){if(s===t)return!0;const n=_r(s);if(n!==_r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return Gl(s).isEqual(Gl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=gr(o.timestampValue),g=gr(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos})(s,t);case 5:return s.stringValue===t.stringValue;case 6:return(function(o,u){return pr(o.bytesValue).isEqual(pr(u.bytesValue))})(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return(function(o,u){return we(o.geoPointValue.latitude)===we(u.geoPointValue.latitude)&&we(o.geoPointValue.longitude)===we(u.geoPointValue.longitude)})(s,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return we(o.integerValue)===we(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=we(o.doubleValue),g=we(u.doubleValue);return f===g?ah(f)===ah(g):isNaN(f)&&isNaN(g)}return!1})(s,t);case 9:return po(s.arrayValue.values||[],t.arrayValue.values||[],qi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},g=u.mapValue.fields||{};if(xv(f)!==xv(g))return!1;for(const _ in f)if(f.hasOwnProperty(_)&&(g[_]===void 0||!qi(f[_],g[_])))return!1;return!0})(s,t);default:return yt(52216,{left:s})}}function Ql(s,t){return(s.values||[]).find((n=>qi(n,t)))!==void 0}function _o(s,t){if(s===t)return 0;const n=_r(s),r=_r(t);if(n!==r)return kt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return kt(s.booleanValue,t.booleanValue);case 2:return(function(u,f){const g=we(u.integerValue||u.doubleValue),_=we(f.integerValue||f.doubleValue);return g<_?-1:g>_?1:g===_?0:isNaN(g)?isNaN(_)?0:-1:1})(s,t);case 3:return kv(s.timestampValue,t.timestampValue);case 4:return kv(Gl(s),Gl(t));case 5:return _m(s.stringValue,t.stringValue);case 6:return(function(u,f){const g=pr(u),_=pr(f);return g.compareTo(_)})(s.bytesValue,t.bytesValue);case 7:return(function(u,f){const g=u.split("/"),_=f.split("/");for(let y=0;y<g.length&&y<_.length;y++){const A=kt(g[y],_[y]);if(A!==0)return A}return kt(g.length,_.length)})(s.referenceValue,t.referenceValue);case 8:return(function(u,f){const g=kt(we(u.latitude),we(f.latitude));return g!==0?g:kt(we(u.longitude),we(f.longitude))})(s.geoPointValue,t.geoPointValue);case 9:return Lv(s.arrayValue,t.arrayValue);case 10:return(function(u,f){var M,G,Z,it;const g=u.fields||{},_=f.fields||{},y=(M=g[lh])==null?void 0:M.arrayValue,A=(G=_[lh])==null?void 0:G.arrayValue,S=kt(((Z=y==null?void 0:y.values)==null?void 0:Z.length)||0,((it=A==null?void 0:A.values)==null?void 0:it.length)||0);return S!==0?S:Lv(y,A)})(s.mapValue,t.mapValue);case 11:return(function(u,f){if(u===jc.mapValue&&f===jc.mapValue)return 0;if(u===jc.mapValue)return 1;if(f===jc.mapValue)return-1;const g=u.fields||{},_=Object.keys(g),y=f.fields||{},A=Object.keys(y);_.sort(),A.sort();for(let S=0;S<_.length&&S<A.length;++S){const M=_m(_[S],A[S]);if(M!==0)return M;const G=_o(g[_[S]],y[A[S]]);if(G!==0)return G}return kt(_.length,A.length)})(s.mapValue,t.mapValue);default:throw yt(23264,{he:n})}}function kv(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return kt(s,t);const n=gr(s),r=gr(t),o=kt(n.seconds,r.seconds);return o!==0?o:kt(n.nanos,r.nanos)}function Lv(s,t){const n=s.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const u=_o(n[o],r[o]);if(u)return u}return kt(n.length,r.length)}function yo(s){return ym(s)}function ym(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(n){return pr(n).toBase64()})(s.bytesValue):"referenceValue"in s?(function(n){return dt.fromName(n).toString()})(s.referenceValue):"geoPointValue"in s?(function(n){return`geo(${n.latitude},${n.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(n){let r="[",o=!0;for(const u of n.values||[])o?o=!1:r+=",",r+=ym(u);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of r)u?u=!1:o+=",",o+=`${f}:${ym(n.fields[f])}`;return o+"}"})(s.mapValue):yt(61005,{value:s})}function Yc(s){switch(_r(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ch(s);return t?16+Yc(t):16;case 5:return 2*s.stringValue.length;case 6:return pr(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,u)=>o+Yc(u)),0)})(s.arrayValue);case 10:case 11:return(function(r){let o=0;return ga(r.fields,((u,f)=>{o+=u.length+Yc(f)})),o})(s.mapValue);default:throw yt(13486,{value:s})}}function vm(s){return!!s&&"integerValue"in s}function Qm(s){return!!s&&"arrayValue"in s}function Pv(s){return!!s&&"nullValue"in s}function zv(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Xc(s){return!!s&&"mapValue"in s}function Cw(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[RT])==null?void 0:r.stringValue)===wT}function Ll(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const t={mapValue:{fields:{}}};return ga(s.mapValue.fields,((n,r)=>t.mapValue.fields[n]=Ll(r))),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(s.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ll(s.arrayValue.values[n]);return t}return{...s}}function Nw(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Iw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.value=t}static empty(){return new Fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Xc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ll(n)}setAll(t){let n=We.emptyPath(),r={},o=[];t.forEach(((f,g)=>{if(!n.isImmediateParentOf(g)){const _=this.getFieldsMap(n);this.applyChanges(_,r,o),r={},o=[],n=g.popLast()}f?r[g.lastSegment()]=Ll(f):o.push(g.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,r,o)}delete(t){const n=this.field(t.popLast());Xc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return qi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let o=n.mapValue.fields[t.get(r)];Xc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,r){ga(n,((o,u)=>t[o]=u));for(const o of r)delete t[o]}clone(){return new Fn(Ll(this.value))}}function IT(s){const t=[];return ga(s.fields,((n,r)=>{const o=new We([n]);if(Xc(r)){const u=IT(r.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new li(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n,r,o,u,f,g){this.key=t,this.documentType=n,this.version=r,this.readTime=o,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new rn(t,0,Tt.min(),Tt.min(),Tt.min(),Fn.empty(),0)}static newFoundDocument(t,n,r,o){return new rn(t,1,n,Tt.min(),r,o,0)}static newNoDocument(t,n){return new rn(t,2,n,Tt.min(),Tt.min(),Fn.empty(),0)}static newUnknownDocument(t,n){return new rn(t,3,n,Tt.min(),Tt.min(),Fn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uh{constructor(t,n){this.position=t,this.inclusive=n}}function Bv(s,t,n){let r=0;for(let o=0;o<s.position.length;o++){const u=t[o],f=s.position[o];if(u.field.isKeyField()?r=dt.comparator(dt.fromName(f.referenceValue),n.key):r=_o(f,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function jv(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let n=0;n<s.position.length;n++)if(!qi(s.position[n],t.position[n]))return!1;return!0}/**
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
 */class ch{constructor(t,n="asc"){this.field=t,this.dir=n}}function Dw(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
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
 */class CT{}class ze extends CT{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Vw(t,n,r):n==="array-contains"?new Uw(t,r):n==="in"?new kw(t,r):n==="not-in"?new Lw(t,r):n==="array-contains-any"?new Pw(t,r):new ze(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Mw(t,r):new xw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_o(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hi extends CT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Hi(t,n)}matches(t){return NT(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function NT(s){return s.op==="and"}function DT(s){return Ow(s)&&NT(s)}function Ow(s){for(const t of s.filters)if(t instanceof Hi)return!1;return!0}function Em(s){if(s instanceof ze)return s.field.canonicalString()+s.op.toString()+yo(s.value);if(DT(s))return s.filters.map((t=>Em(t))).join(",");{const t=s.filters.map((n=>Em(n))).join(",");return`${s.op}(${t})`}}function OT(s,t){return s instanceof ze?(function(r,o){return o instanceof ze&&r.op===o.op&&r.field.isEqual(o.field)&&qi(r.value,o.value)})(s,t):s instanceof Hi?(function(r,o){return o instanceof Hi&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((u,f,g)=>u&&OT(f,o.filters[g])),!0):!1})(s,t):void yt(19439)}function VT(s){return s instanceof ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`})(s):s instanceof Hi?(function(n){return n.op.toString()+" {"+n.getFilters().map(VT).join(" ,")+"}"})(s):"Filter"}class Vw extends ze{constructor(t,n,r){super(t,n,r),this.key=dt.fromName(r.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class Mw extends ze{constructor(t,n){super(t,"in",n),this.keys=MT("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class xw extends ze{constructor(t,n){super(t,"not-in",n),this.keys=MT("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function MT(s,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((r=>dt.fromName(r.referenceValue)))}class Uw extends ze{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Qm(n)&&Ql(n.arrayValue,this.value)}}class kw extends ze{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ql(this.value.arrayValue,n)}}class Lw extends ze{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ql(this.value.arrayValue,n)}}class Pw extends ze{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ql(this.value.arrayValue,r)))}}/**
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
 */class zw{constructor(t,n=null,r=[],o=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=f,this.endAt=g,this.Te=null}}function qv(s,t=null,n=[],r=[],o=null,u=null,f=null){return new zw(s,t,n,r,o,u,f)}function Ym(s){const t=St(s);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>Em(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(u){return u.field.canonicalString()+u.dir})(r))).join(","),Ih(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>yo(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>yo(r))).join(",")),t.Te=n}return t.Te}function Xm(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<s.orderBy.length;n++)if(!Dw(s.orderBy[n],t.orderBy[n]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let n=0;n<s.filters.length;n++)if(!OT(s.filters[n],t.filters[n]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!jv(s.startAt,t.startAt)&&jv(s.endAt,t.endAt)}function Tm(s){return dt.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n=null,r=[],o=[],u=null,f="F",g=null,_=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=_,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Bw(s,t,n,r,o,u,f,g){return new Nh(s,t,n,r,o,u,f,g)}function Dh(s){return new Nh(s)}function Hv(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function jw(s){return dt.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function qw(s){return s.collectionGroup!==null}function Pl(s){const t=St(s);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Be(We.comparator);return f.filters.forEach((_=>{_.getFlattenedFilters().forEach((y=>{y.isInequality()&&(g=g.add(y.field))}))})),g})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new ch(u,r))})),n.has(We.keyField().canonicalString())||t.Ee.push(new ch(We.keyField(),r))}return t.Ee}function Pi(s){const t=St(s);return t.Ie||(t.Ie=Hw(t,Pl(s))),t.Ie}function Hw(s,t){if(s.limitType==="F")return qv(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new ch(o.field,u)}));const n=s.endAt?new uh(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new uh(s.startAt.position,s.startAt.inclusive):null;return qv(s.path,s.collectionGroup,t,s.filters,s.limit,n,r)}}function Am(s,t,n){return new Nh(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,n,s.startAt,s.endAt)}function Oh(s,t){return Xm(Pi(s),Pi(t))&&s.limitType===t.limitType}function xT(s){return`${Ym(Pi(s))}|lt:${s.limitType}`}function oo(s){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((o=>VT(o))).join(", ")}]`),Ih(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((o=>yo(o))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((o=>yo(o))).join(",")),`Target(${r})`})(Pi(s))}; limitType=${s.limitType})`}function Vh(s,t){return t.isFoundDocument()&&(function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):dt.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)})(s,t)&&(function(r,o){for(const u of Pl(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(s,t)&&(function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0})(s,t)&&(function(r,o){return!(r.startAt&&!(function(f,g,_){const y=Bv(f,g,_);return f.inclusive?y<=0:y<0})(r.startAt,Pl(r),o)||r.endAt&&!(function(f,g,_){const y=Bv(f,g,_);return f.inclusive?y>=0:y>0})(r.endAt,Pl(r),o))})(s,t)}function Fw(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function UT(s){return(t,n)=>{let r=!1;for(const o of Pl(s)){const u=Gw(o,t,n);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function Gw(s,t,n){const r=s.field.isKeyField()?dt.comparator(t.key,n.key):(function(u,f,g){const _=f.data.field(u),y=g.data.field(u);return _!==null&&y!==null?_o(_,y):yt(42886)})(s.field,t,n);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return yt(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),o=this.inner[r];if(o===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ga(this.inner,((n,r)=>{for(const[o,u]of r)t(o,u)}))}isEmpty(){return vT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new me(dt.comparator);function Es(){return Kw}const kT=new me(dt.comparator);function xl(...s){let t=kT;for(const n of s)t=t.insert(n.key,n);return t}function LT(s){let t=kT;return s.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function ta(){return zl()}function PT(){return zl()}function zl(){return new pa((s=>s.toString()),((s,t)=>s.isEqual(t)))}const Qw=new me(dt.comparator),Yw=new Be(dt.comparator);function Lt(...s){let t=Yw;for(const n of s)t=t.add(n);return t}const Xw=new Be(kt);function Jw(){return Xw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(t)?"-0":t}}function zT(s){return{integerValue:""+s}}function $w(s,t){return Tw(t)?zT(t):Jm(s,t)}/**
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
 */class Mh{constructor(){this._=void 0}}function Zw(s,t,n){return s instanceof Yl?(function(o,u){const f={fields:{[AT]:{stringValue:TT},[bT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Km(u)&&(u=Ch(u)),u&&(f.fields[ST]=u),{mapValue:f}})(n,t):s instanceof Xl?jT(s,t):s instanceof Jl?qT(s,t):(function(o,u){const f=BT(o,u),g=Fv(f)+Fv(o.Ae);return vm(f)&&vm(o.Ae)?zT(g):Jm(o.serializer,g)})(s,t)}function Ww(s,t,n){return s instanceof Xl?jT(s,t):s instanceof Jl?qT(s,t):n}function BT(s,t){return s instanceof hh?(function(r){return vm(r)||(function(u){return!!u&&"doubleValue"in u})(r)})(t)?t:{integerValue:0}:null}class Yl extends Mh{}class Xl extends Mh{constructor(t){super(),this.elements=t}}function jT(s,t){const n=HT(t);for(const r of s.elements)n.some((o=>qi(o,r)))||n.push(r);return{arrayValue:{values:n}}}class Jl extends Mh{constructor(t){super(),this.elements=t}}function qT(s,t){let n=HT(t);for(const r of s.elements)n=n.filter((o=>!qi(o,r)));return{arrayValue:{values:n}}}class hh extends Mh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Fv(s){return we(s.integerValue||s.doubleValue)}function HT(s){return Qm(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n){this.field=t,this.transform=n}}function eI(s,t){return s.field.isEqual(t.field)&&(function(r,o){return r instanceof Xl&&o instanceof Xl||r instanceof Jl&&o instanceof Jl?po(r.elements,o.elements,qi):r instanceof hh&&o instanceof hh?qi(r.Ae,o.Ae):r instanceof Yl&&o instanceof Yl})(s.transform,t.transform)}class nI{constructor(t,n){this.version=t,this.transformResults=n}}class ci{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ci}static exists(t){return new ci(void 0,t)}static updateTime(t){return new ci(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class xh{}function FT(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new $m(s.key,ci.none()):new nu(s.key,s.data,ci.none());{const n=s.data,r=Fn.empty();let o=new Be(We.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?r.delete(u):r.set(u,f),o=o.add(u)}return new _a(s.key,r,new li(o.toArray()),ci.none())}}function iI(s,t,n){s instanceof nu?(function(o,u,f){const g=o.value.clone(),_=Kv(o.fieldTransforms,u,f.transformResults);g.setAll(_),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(s,t,n):s instanceof _a?(function(o,u,f){if(!Jc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const g=Kv(o.fieldTransforms,u,f.transformResults),_=u.data;_.setAll(GT(o)),_.setAll(g),u.convertToFoundDocument(f.version,_).setHasCommittedMutations()})(s,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Bl(s,t,n,r){return s instanceof nu?(function(u,f,g,_){if(!Jc(u.precondition,f))return g;const y=u.value.clone(),A=Qv(u.fieldTransforms,_,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(s,t,n,r):s instanceof _a?(function(u,f,g,_){if(!Jc(u.precondition,f))return g;const y=Qv(u.fieldTransforms,_,f),A=f.data;return A.setAll(GT(u)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(s,t,n,r):(function(u,f,g){return Jc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g})(s,t,n)}function sI(s,t){let n=null;for(const r of s.fieldTransforms){const o=t.data.field(r.field),u=BT(r.transform,o||null);u!=null&&(n===null&&(n=Fn.empty()),n.set(r.field,u))}return n||null}function Gv(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&po(r,o,((u,f)=>eI(u,f)))})(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class nu extends xh{constructor(t,n,r,o=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _a extends xh{constructor(t,n,r,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function GT(s){const t=new Map;return s.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=s.data.field(n);t.set(n,r)}})),t}function Kv(s,t,n){const r=new Map;Yt(s.length===n.length,32656,{Ve:n.length,de:s.length});for(let o=0;o<n.length;o++){const u=s[o],f=u.transform,g=t.data.field(u.field);r.set(u.field,Ww(f,g,n[o]))}return r}function Qv(s,t,n){const r=new Map;for(const o of s){const u=o.transform,f=n.data.field(o.field);r.set(o.field,Zw(u,f,t))}return r}class $m extends xh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rI extends xh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(t,n,r,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&iI(u,t,r[o])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Bl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Bl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=PT();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(o.key)?null:g;const _=FT(f,g);_!==null&&r.set(o.key,_),f.isValidDocument()||f.convertToNoDocument(Tt.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Lt())}isEqual(t){return this.batchId===t.batchId&&po(this.mutations,t.mutations,((n,r)=>Gv(n,r)))&&po(this.baseMutations,t.baseMutations,((n,r)=>Gv(n,r)))}}class Zm{constructor(t,n,r,o){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(t,n,r){Yt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let o=(function(){return Qw})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,r[f].version);return new Zm(t,n,r,o)}}/**
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
 */class oI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class lI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,jt;function uI(s){switch(s){case $.OK:return yt(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return yt(15467,{code:s})}}function KT(s){if(s===void 0)return vs("GRPC error has no .code"),$.UNKNOWN;switch(s){case Ue.OK:return $.OK;case Ue.CANCELLED:return $.CANCELLED;case Ue.UNKNOWN:return $.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return $.INTERNAL;case Ue.UNAVAILABLE:return $.UNAVAILABLE;case Ue.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ue.NOT_FOUND:return $.NOT_FOUND;case Ue.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ue.ABORTED:return $.ABORTED;case Ue.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ue.DATA_LOSS:return $.DATA_LOSS;default:return yt(39323,{code:s})}}(jt=Ue||(Ue={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cI(){return new TextEncoder}/**
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
 */const hI=new hr([4294967295,4294967295],0);function Yv(s){const t=cI().encode(s),n=new lT;return n.update(t),new Uint8Array(n.digest())}function Xv(s){const t=new DataView(s.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new hr([n,r],0),new hr([o,u],0)]}class Wm{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ul(`Invalid padding: ${n}`);if(r<0)throw new Ul(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ul(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ul(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=hr.fromNumber(this.ge)}ye(t,n,r){let o=t.add(n.multiply(hr.fromNumber(r)));return o.compare(hI)===1&&(o=new hr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Yv(t),[r,o]=Xv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);if(!this.we(f))return!1}return!0}static create(t,n,r){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Wm(u,o,n);return r.forEach((g=>f.insert(g))),f}insert(t){if(this.ge===0)return;const n=Yv(t),[r,o]=Xv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,n,r,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const o=new Map;return o.set(t,iu.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Uh(Tt.min(),o,new me(kt),Es(),Lt())}}class iu{constructor(t,n,r,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new iu(r,n,Lt(),Lt(),Lt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n,r,o){this.be=t,this.removedTargetIds=n,this.key=r,this.De=o}}class QT{constructor(t,n){this.targetId=t,this.Ce=n}}class YT{constructor(t,n,r=tn.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=o}}class Jv{constructor(){this.ve=0,this.Fe=$v(),this.Me=tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Lt(),n=Lt(),r=Lt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:yt(38017,{changeType:u})}})),new iu(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=$v()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Yt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fI{constructor(t){this.Ge=t,this.ze=new Map,this.je=Es(),this.Je=qc(),this.He=qc(),this.Ze=new me(kt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:yt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,r=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Tm(u))if(r===0){const f=new dt(u.path);this.et(n,f,rn.newNoDocument(f,Tt.min()))}else Yt(r===1,20013,{expectedCount:r});else{const f=this._t(n);if(f!==r){const g=this.ut(t),_=g?this.ct(g,t,f):1;if(_!==0){this.it(n);const y=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=n;let f,g;try{f=pr(r).toUint8Array()}catch(_){if(_ instanceof ET)return la("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{g=new Wm(f,o,u)}catch(_){return la(_ instanceof Ul?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return g.ge===0?null:g}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let o=0;return r.forEach((u=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const g=this.ot(f);if(g){if(u.current&&Tm(g.target)){const _=new dt(g.target.path);this.Et(_).has(f)||this.It(f,_)||this.et(f,_,rn.newNoDocument(_,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let r=Lt();this.He.forEach(((u,f)=>{let g=!0;f.forEachWhile((_=>{const y=this.ot(_);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(r=r.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Uh(t,n,this.Ze,this.je,r);return this.je=Es(),this.Je=qc(),this.He=qc(),this.Ze=new me(kt),o}Ye(t,n){if(!this.rt(t))return;const r=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const o=this.nt(t);this.It(t,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new Jv,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Be(kt),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Be(kt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Jv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function qc(){return new me(dt.comparator)}function $v(){return new me(dt.comparator)}const dI={asc:"ASCENDING",desc:"DESCENDING"},mI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gI={and:"AND",or:"OR"};class pI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Sm(s,t){return s.useProto3Json||Ih(t)?t:{value:t}}function fh(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function XT(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function _I(s,t){return fh(s,t.toTimestamp())}function zi(s){return Yt(!!s,49232),Tt.fromTimestamp((function(n){const r=gr(n);return new ce(r.seconds,r.nanos)})(s))}function tg(s,t){return bm(s,t).canonicalString()}function bm(s,t){const n=(function(o){return new ue(["projects",o.projectId,"databases",o.database])})(s).child("documents");return t===void 0?n:n.child(t)}function JT(s){const t=ue.fromString(s);return Yt(eA(t),10190,{key:t.toString()}),t}function Rm(s,t){return tg(s.databaseId,t.path)}function tm(s,t){const n=JT(t);if(n.get(1)!==s.databaseId.projectId)throw new ut($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+s.databaseId.projectId);if(n.get(3)!==s.databaseId.database)throw new ut($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+s.databaseId.database);return new dt(ZT(n))}function $T(s,t){return tg(s.databaseId,t)}function yI(s){const t=JT(s);return t.length===4?ue.emptyPath():ZT(t)}function wm(s){return new ue(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function ZT(s){return Yt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Zv(s,t,n){return{name:Rm(s,t),fields:n.value.mapValue.fields}}function vI(s,t){let n;if("targetChange"in t){t.targetChange;const r=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:yt(39313,{state:y})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(y,A){return y.useProto3Json?(Yt(A===void 0||typeof A=="string",58123),tn.fromBase64String(A||"")):(Yt(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),tn.fromUint8Array(A||new Uint8Array))})(s,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&(function(y){const A=y.code===void 0?$.UNKNOWN:KT(y.code);return new ut(A,y.message||"")})(f);n=new YT(r,o,u,g||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=tm(s,r.document.name),u=zi(r.document.updateTime),f=r.document.createTime?zi(r.document.createTime):Tt.min(),g=new Fn({mapValue:{fields:r.document.fields}}),_=rn.newFoundDocument(o,u,f,g),y=r.targetIds||[],A=r.removedTargetIds||[];n=new $c(y,A,_.key,_)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=tm(s,r.document),u=r.readTime?zi(r.readTime):Tt.min(),f=rn.newNoDocument(o,u),g=r.removedTargetIds||[];n=new $c([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=tm(s,r.document),u=r.removedTargetIds||[];n=new $c([],u,o,null)}else{if(!("filter"in t))return yt(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,f=new lI(o,u),g=r.targetId;n=new QT(g,f)}}return n}function EI(s,t){let n;if(t instanceof nu)n={update:Zv(s,t.key,t.value)};else if(t instanceof $m)n={delete:Rm(s,t.key)};else if(t instanceof _a)n={update:Zv(s,t.key,t.data),updateMask:NI(t.fieldMask)};else{if(!(t instanceof rI))return yt(16599,{dt:t.type});n={verify:Rm(s,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(u,f){const g=f.transform;if(g instanceof Yl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Xl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Jl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof hh)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw yt(20930,{transform:f.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:_I(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:yt(27497)})(s,t.precondition)),n}function TI(s,t){return s&&s.length>0?(Yt(t!==void 0,14353),s.map((n=>(function(o,u){let f=o.updateTime?zi(o.updateTime):zi(u);return f.isEqual(Tt.min())&&(f=zi(u)),new nI(f,o.transformResults||[])})(n,t)))):[]}function AI(s,t){return{documents:[$T(s,t.path)]}}function SI(s,t){const n={structuredQuery:{}},r=t.path;let o;t.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$T(s,o);const u=(function(y){if(y.length!==0)return tA(Hi.create(y,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((A=>(function(M){return{field:lo(M.field),direction:wI(M.dir)}})(A)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=Sm(s,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ft:n,parent:o}}function bI(s){let t=yI(s.parent);const n=s.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Yt(r===1,65062);const A=n.from[0];A.allDescendants?o=A.collectionId:t=t.child(A.collectionId)}let u=[];n.where&&(u=(function(S){const M=WT(S);return M instanceof Hi&&DT(M)?M.getFilters():[M]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((M=>(function(Z){return new ch(uo(Z.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(M)))})(n.orderBy));let g=null;n.limit&&(g=(function(S){let M;return M=typeof S=="object"?S.value:S,Ih(M)?null:M})(n.limit));let _=null;n.startAt&&(_=(function(S){const M=!!S.before,G=S.values||[];return new uh(G,M)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const M=!S.before,G=S.values||[];return new uh(G,M)})(n.endAt)),Bw(t,o,f,u,g,"F",_,y)}function RI(s,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function WT(s){return s.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=uo(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=uo(n.unaryFilter.field);return ze.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=uo(n.unaryFilter.field);return ze.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=uo(n.unaryFilter.field);return ze.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return yt(61313);default:return yt(60726)}})(s):s.fieldFilter!==void 0?(function(n){return ze.create(uo(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return yt(58110);default:return yt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(n){return Hi.create(n.compositeFilter.filters.map((r=>WT(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return yt(1026)}})(n.compositeFilter.op))})(s):yt(30097,{filter:s})}function wI(s){return dI[s]}function II(s){return mI[s]}function CI(s){return gI[s]}function lo(s){return{fieldPath:s.canonicalString()}}function uo(s){return We.fromServerFormat(s.fieldPath)}function tA(s){return s instanceof ze?(function(n){if(n.op==="=="){if(zv(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NAN"}};if(Pv(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zv(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NOT_NAN"}};if(Pv(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(n.field),op:II(n.op),value:n.value}}})(s):s instanceof Hi?(function(n){const r=n.getFilters().map((o=>tA(o)));return r.length===1?r[0]:{compositeFilter:{op:CI(n.op),filters:r}}})(s):yt(54877,{filter:s})}function NI(s){const t=[];return s.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function eA(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function nA(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,n,r,o,u=Tt.min(),f=Tt.min(),g=tn.EMPTY_BYTE_STRING,_=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=_}withSequenceNumber(t){return new lr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.yt=t}}function OI(s){const t=bI({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Am(t,t.limit,"L"):t}/**
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
 */class VI{constructor(){this.bn=new MI}addToCollectionParentIndex(t,n){return this.bn.add(n),J.resolve()}getCollectionParents(t,n){return J.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return J.resolve()}deleteFieldIndex(t,n){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,n){return J.resolve()}getDocumentsMatchingTarget(t,n){return J.resolve(null)}getIndexType(t,n){return J.resolve(0)}getFieldIndexes(t,n){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,n){return J.resolve(mr.min())}getMinOffsetFromCollectionGroup(t,n){return J.resolve(mr.min())}updateCollectionGroup(t,n,r){return J.resolve()}updateIndexEntries(t,n){return J.resolve()}}class MI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n]||new Be(ue.comparator),u=!o.has(r);return this.index[n]=o.add(r),u}has(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(t){return(this.index[t]||new Be(ue.comparator)).toArray()}}/**
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
 */const Wv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iA=41943040;class _n{static withCacheSize(t){return new _n(t,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(iA,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new vo(0)}static ar(){return new vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="LruGarbageCollector",xI=1048576;function eE([s,t],[n,r]){const o=kt(s,n);return o===0?kt(t,r):o}class UI{constructor(t){this.Pr=t,this.buffer=new Be(eE),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();eE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){rt(tE,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){So(n)?rt(tE,"Ignoring IndexedDB error during garbage collection: ",n):await Ao(n)}await this.Ar(3e5)}))}}class LI{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return J.resolve(wh.ce);const r=new UI(n);return this.Vr.forEachTarget(t,(o=>r.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(t,(o=>r.Ir(o))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Wv)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wv):this.gr(t,n)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let r,o,u,f,g,_,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o)))).next((S=>(r=S,g=Date.now(),this.removeTargets(t,r,n)))).next((S=>(u=S,_=Date.now(),this.removeOrphanedDocuments(t,r)))).next((S=>(y=Date.now(),ao()<=Ut.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${u} targets in `+(_-g)+`ms
	Removed ${S} documents in `+(y-_)+`ms
Total Duration: ${y-A}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function PI(s,t){return new LI(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.changes=new pa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n,r,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(r=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(r!==null&&Bl(r.mutation,o,li.empty(),ce.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,Lt()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=Lt()){const o=ta();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,r).next((u=>{let f=xl();return u.forEach(((g,_)=>{f=f.insert(g,_.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const r=ta();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,Lt())))}populateOverlays(t,n,r){const o=[];return r.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,g)=>{n.set(f,g)}))}))}computeViews(t,n,r,o){let u=Es();const f=zl(),g=(function(){return zl()})();return n.forEach(((_,y)=>{const A=r.get(y.key);o.has(y.key)&&(A===void 0||A.mutation instanceof _a)?u=u.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),Bl(A.mutation,y,A.mutation.getFieldMask(),ce.now())):f.set(y.key,li.empty())})),this.recalculateAndSaveOverlays(t,u).next((_=>(_.forEach(((y,A)=>f.set(y,A))),n.forEach(((y,A)=>g.set(y,new BI(A,f.get(y)??null)))),g)))}recalculateAndSaveOverlays(t,n){const r=zl();let o=new me(((f,g)=>f-g)),u=Lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const g of f)g.keys().forEach((_=>{const y=n.get(_);if(y===null)return;let A=r.get(_)||li.empty();A=g.applyToLocalView(y,A),r.set(_,A);const S=(o.get(g.batchId)||Lt()).add(_);o=o.insert(g.batchId,S)}))})).next((()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const _=g.getNext(),y=_.key,A=_.value,S=PT();A.forEach((M=>{if(!u.has(M)){const G=FT(n.get(M),r.get(M));G!==null&&S.set(M,G),u=u.add(M)}})),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return J.waitFor(f)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,o){return jw(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,o):this.getDocumentsMatchingCollectionQuery(t,n,r,o)}getNextDocuments(t,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,o-u.size):J.resolve(ta());let g=Fl,_=u;return f.next((y=>J.forEach(y,((A,S)=>(g<S.largestBatchId&&(g=S.largestBatchId),u.get(A)?J.resolve():this.remoteDocumentCache.getEntry(t,A).next((M=>{_=_.insert(A,M)}))))).next((()=>this.populateOverlays(t,y,u))).next((()=>this.computeViews(t,_,y,Lt()))).next((A=>({batchId:g,changes:LT(A)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next((r=>{let o=xl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,o){const u=n.collectionGroup;let f=xl();return this.indexManager.getCollectionParents(t,u).next((g=>J.forEach(g,(_=>{const y=(function(S,M){return new Nh(M,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,_.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,r,o).next((A=>{A.forEach(((S,M)=>{f=f.insert(S,M)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,u,o)))).next((f=>{u.forEach(((_,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,rn.newInvalidDocument(A)))}));let g=xl();return f.forEach(((_,y)=>{const A=u.get(_);A!==void 0&&Bl(A.mutation,y,li.empty(),ce.now()),Vh(n,y)&&(g=g.insert(_,y))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return J.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:zi(o.createTime)}})(n)),J.resolve()}getNamedQuery(t,n){return J.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:OI(o.bundledQuery),readTime:zi(o.readTime)}})(n)),J.resolve()}}/**
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
 */class HI{constructor(){this.overlays=new me(dt.comparator),this.Lr=new Map}getOverlay(t,n){return J.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ta();return J.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&r.set(o,u)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((o,u)=>{this.St(t,n,u)})),J.resolve()}removeOverlaysForBatchId(t,n,r){const o=this.Lr.get(r);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(r)),J.resolve()}getOverlaysForCollection(t,n,r){const o=ta(),u=n.length+1,f=new dt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const _=g.getNext().value,y=_.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&_.largestBatchId>r&&o.set(_.getKey(),_)}return J.resolve(o)}getOverlaysForCollectionGroup(t,n,r,o){let u=new me(((y,A)=>y-A));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>r){let A=u.get(y.largestBatchId);A===null&&(A=ta(),u=u.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const g=ta(),_=u.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((y,A)=>g.set(y,A))),!(g.size()>=o)););return J.resolve(g)}St(t,n,r){const o=this.overlays.get(r.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(r.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(r.key,new oI(n,r));let u=this.Lr.get(n);u===void 0&&(u=Lt(),this.Lr.set(n,u)),this.Lr.set(n,u.add(r.key))}}/**
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
 */class FI{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.kr=new Be(Ge.qr),this.Kr=new Be(Ge.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const r=new Ge(t,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Wr(new Ge(t,n))}Qr(t,n){t.forEach((r=>this.removeReference(r,n)))}Gr(t){const n=new dt(new ue([])),r=new Ge(n,t),o=new Ge(n,t+1),u=[];return this.Kr.forEachInRange([r,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new dt(new ue([])),r=new Ge(n,t),o=new Ge(n,t+1);let u=Lt();return this.Kr.forEachInRange([r,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Ge(t,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ge{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return dt.comparator(t.key,n.key)||kt(t.Jr,n.Jr)}static Ur(t,n){return kt(t.Jr,n.Jr)||dt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Be(Ge.qr)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new aI(u,n,r,o);this.mutationQueue.push(f);for(const g of o)this.Hr=this.Hr.add(new Ge(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return J.resolve(f)}lookupMutationBatch(t,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,o=this.Xr(r),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Gm:this.Yn-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ge(n,0),o=new Ge(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([r,o],(f=>{const g=this.Zr(f.Jr);u.push(g)})),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Be(kt);return n.forEach((o=>{const u=new Ge(o,0),f=new Ge(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(g=>{r=r.add(g.Jr)}))})),J.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,o=r.length+1;let u=r;dt.isDocumentKey(u)||(u=u.child(""));const f=new Ge(new dt(u),0);let g=new Be(kt);return this.Hr.forEachWhile((_=>{const y=_.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(g=g.add(_.Jr)),!0)}),f),J.resolve(this.Yr(g))}Yr(t){const n=[];return t.forEach((r=>{const o=this.Zr(r);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Yt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return J.forEach(n.mutations,(o=>{const u=new Ge(o.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Hr=r}))}nr(t){}containsKey(t,n){const r=new Ge(n,0),o=this.Hr.firstAfterOrEqual(r);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t){this.ti=t,this.docs=(function(){return new me(dt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,o=this.docs.get(r),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(n))}getEntries(t,n){let r=Es();return n.forEach((o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():rn.newInvalidDocument(o))})),J.resolve(r)}getDocumentsMatchingQuery(t,n,r,o){let u=Es();const f=n.path,g=new dt(f.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(g);for(;_.hasNext();){const{key:y,value:{document:A}}=_.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||_w(pw(A),r)<=0||(o.has(A.key)||Vh(n,A))&&(u=u.insert(A.key,A.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(t,n,r,o){yt(9500)}ni(t,n){return J.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new QI(this)}getSize(t){return J.resolve(this.size)}}class QI extends zI{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(t,o)):this.Mr.removeEntry(r)})),J.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t){this.persistence=t,this.ri=new pa((n=>Ym(n)),Xm),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.ii=0,this.si=new eg,this.targetCount=0,this.oi=vo._r()}forEachTarget(t,n){return this.ri.forEach(((r,o)=>n(o))),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),J.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new vo(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,J.resolve()}updateTargetData(t,n){return this.lr(n),J.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,n,r){let o=0;const u=[];return this.ri.forEach(((f,g)=>{g.sequenceNumber<=n&&r.get(g.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)})),J.waitFor(u).next((()=>o))}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,n){const r=this.ri.get(n)||null;return J.resolve(r)}addMatchingKeys(t,n,r){return this.si.$r(n,r),J.resolve()}removeMatchingKeys(t,n,r){this.si.Qr(n,r);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),J.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),J.resolve()}getMatchingKeysForTargetId(t,n){const r=this.si.jr(n);return J.resolve(r)}containsKey(t,n){return J.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(t,n){this._i={},this.overlays={},this.ai=new wh(0),this.ui=!1,this.ui=!0,this.ci=new FI,this.referenceDelegate=t(this),this.li=new YI(this),this.indexManager=new VI,this.remoteDocumentCache=(function(o){return new KI(o)})((r=>this.referenceDelegate.hi(r))),this.serializer=new DI(n),this.Pi=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new HI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this._i[t.toKey()];return r||(r=new GI(n,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,r){rt("MemoryPersistence","Starting transaction:",t);const o=new XI(this.ai.next());return this.referenceDelegate.Ti(),r(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(t,n){return J.or(Object.values(this._i).map((r=>()=>r.containsKey(t,n))))}}class XI extends vw{constructor(t){super(),this.currentSequenceNumber=t}}class ng{constructor(t){this.persistence=t,this.Ri=new eg,this.Ai=null}static Vi(t){return new ng(t)}get di(){if(this.Ai)return this.Ai;throw yt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),J.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),J.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),J.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>r.removeTargetData(t,n)))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,(r=>{const o=dt.fromPath(r);return this.mi(t,o).next((u=>{u||n.removeEntry(o,Tt.min())}))})).next((()=>(this.Ai=null,n.apply(t))))}updateLimboDocument(t,n){return this.mi(t,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(t){return 0}mi(t,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class dh{constructor(t,n){this.persistence=t,this.fi=new pa((r=>Aw(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=PI(this,n)}static Vi(t,n){return new dh(t,n)}Ti(){}Ei(t){return J.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((o=>r+o))))}pr(t){let n=0;return this.mr(t,(r=>{n++})).next((()=>n))}mr(t,n){return J.forEach(this.fi,((r,o)=>this.wr(t,r,o).next((u=>u?J.resolve():n(o)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(t,(f=>this.wr(t,f,n).next((g=>{g||(r++,u.removeEntry(f,Tt.min()))})))).next((()=>u.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),J.resolve()}removeReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Yc(t.data.value)),n}wr(t,n,r){return J.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.fi.get(n);return J.resolve(o!==void 0&&o>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n,r,o){this.targetId=t,this.fromCache=n,this.Ts=r,this.Es=o}static Is(t,n){let r=Lt(),o=Lt();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ig(t,n.fromCache,r,o)}}/**
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
 */class JI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $I{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Lb()?8:Ew(an())>0?6:4})()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,o){const u={result:null};return this.gs(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(t,n,o,r).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new JI;return this.ys(t,n,f).next((g=>{if(u.result=g,this.As)return this.ws(t,n,f,g.size)}))})).next((()=>u.result))}ws(t,n,r,o){return r.documentReadCount<this.Vs?(ao()<=Ut.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",oo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(ao()<=Ut.DEBUG&&rt("QueryEngine","Query:",oo(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ds*o?(ao()<=Ut.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",oo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pi(n))):J.resolve())}gs(t,n){if(Hv(n))return J.resolve(null);let r=Pi(n);return this.indexManager.getIndexType(t,r).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Am(n,null,"F"),r=Pi(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((u=>{const f=Lt(...u);return this.fs.getDocuments(t,f).next((g=>this.indexManager.getMinOffset(t,r).next((_=>{const y=this.Ss(n,g);return this.bs(n,y,f,_.readTime)?this.gs(t,Am(n,null,"F")):this.Ds(t,y,n,_)}))))})))))}ps(t,n,r,o){return Hv(n)||o.isEqual(Tt.min())?J.resolve(null):this.fs.getDocuments(t,r).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,r,o)?J.resolve(null):(ao()<=Ut.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(n)),this.Ds(t,f,n,gw(o,Fl)).next((g=>g)))}))}Ss(t,n){let r=new Be(UT(t));return n.forEach(((o,u)=>{Vh(t,u)&&(r=r.add(u))})),r}bs(t,n,r,o){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(t,n,r){return ao()<=Ut.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",oo(n)),this.fs.getDocumentsMatchingQuery(t,n,mr.min(),r)}Ds(t,n,r,o){return this.fs.getDocumentsMatchingQuery(t,r,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="LocalStore",ZI=3e8;class WI{constructor(t,n,r,o){this.persistence=t,this.Cs=n,this.serializer=o,this.vs=new me(kt),this.Fs=new pa((u=>Ym(u)),Xm),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.vs)))}}function t1(s,t,n,r){return new WI(s,t,n,r)}async function rA(s,t){const n=St(s);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next((u=>(o=u,n.Os(t),n.mutationQueue.getAllMutationBatches(r)))).next((u=>{const f=[],g=[];let _=Lt();for(const y of o){f.push(y.batchId);for(const A of y.mutations)_=_.add(A.key)}for(const y of u){g.push(y.batchId);for(const A of y.mutations)_=_.add(A.key)}return n.localDocuments.getDocuments(r,_).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:g})))}))}))}function e1(s,t){const n=St(s);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=t.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(g,_,y,A){const S=y.batch,M=S.keys();let G=J.resolve();return M.forEach((Z=>{G=G.next((()=>A.getEntry(_,Z))).next((it=>{const W=y.docVersions.get(Z);Yt(W!==null,48541),it.version.compareTo(W)<0&&(S.applyToRemoteDocument(it,y),it.isValidDocument()&&(it.setReadTime(y.commitVersion),A.addEntry(it)))}))})),G.next((()=>g.mutationQueue.removeMutationBatch(_,S)))})(n,r,t,u).next((()=>u.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(g){let _=Lt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(_=_.add(g.batch.mutations[y].key));return _})(t)))).next((()=>n.localDocuments.getDocuments(r,o)))}))}function aA(s){const t=St(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.li.getLastRemoteSnapshotVersion(n)))}function n1(s,t){const n=St(s),r=t.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const g=[];t.targetChanges.forEach(((A,S)=>{const M=o.get(S);if(!M)return;g.push(n.li.removeMatchingKeys(u,A.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,A.addedDocuments,S))));let G=M.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?G=G.withResumeToken(tn.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):A.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(A.resumeToken,r)),o=o.insert(S,G),(function(it,W,ft){return it.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-it.snapshotVersion.toMicroseconds()>=ZI?!0:ft.addedDocuments.size+ft.modifiedDocuments.size+ft.removedDocuments.size>0})(M,G,A)&&g.push(n.li.updateTargetData(u,G))}));let _=Es(),y=Lt();if(t.documentUpdates.forEach((A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,A))})),g.push(i1(u,f,t.documentUpdates).next((A=>{_=A.Bs,y=A.Ls}))),!r.isEqual(Tt.min())){const A=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,r)));g.push(A)}return J.waitFor(g).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,_,y))).next((()=>_))})).then((u=>(n.vs=o,u)))}function i1(s,t,n){let r=Lt(),o=Lt();return n.forEach((u=>r=r.add(u))),t.getEntries(s,r).next((u=>{let f=Es();return n.forEach(((g,_)=>{const y=u.get(g);_.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),_.isNoDocument()&&_.version.isEqual(Tt.min())?(t.removeEntry(g,_.readTime),f=f.insert(g,_)):!y.isValidDocument()||_.version.compareTo(y.version)>0||_.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(_),f=f.insert(g,_)):rt(sg,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",_.version)})),{Bs:f,Ls:o}}))}function s1(s,t){const n=St(s);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Gm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function r1(s,t){const n=St(s);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return n.li.getTargetData(r,t).next((u=>u?(o=u,J.resolve(o)):n.li.allocateTargetId(r).next((f=>(o=new lr(t,f,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=n.vs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(t,r.targetId)),r}))}async function Im(s,t,n){const r=St(s),o=r.vs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,(f=>r.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!So(f))throw f;rt(sg,`Failed to update sequence numbers for target ${t}: ${f}`)}r.vs=r.vs.remove(t),r.Fs.delete(o.target)}function nE(s,t,n){const r=St(s);let o=Tt.min(),u=Lt();return r.persistence.runTransaction("Execute query","readwrite",(f=>(function(_,y,A){const S=St(_),M=S.Fs.get(A);return M!==void 0?J.resolve(S.vs.get(M)):S.li.getTargetData(y,A)})(r,f,Pi(t)).next((g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(f,g.targetId).next((_=>{u=_}))})).next((()=>r.Cs.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Lt()))).next((g=>(a1(r,Fw(t),g),{documents:g,ks:u})))))}function a1(s,t,n){let r=s.Ms.get(t)||Tt.min();n.forEach(((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)})),s.Ms.set(t,r)}class iE{constructor(){this.activeTargetIds=Jw()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class o1{constructor(){this.vo=new iE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,r){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new iE,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class l1{Mo(t){}shutdown(){}}/**
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
 */const sE="ConnectivityMonitor";class rE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){rt(sE,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){rt(sE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hc=null;function Cm(){return Hc===null?Hc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hc++,"0x"+Hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="RestConnection",u1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class c1{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${r}/databases/${o}`,this.$o=this.databaseId.database===oh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(t,n,r,o,u){const f=Cm(),g=this.Qo(t,n.toUriEncodedString());rt(em,`Sending RPC '${t}' ${f}:`,g,r);const _={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(_,o,u);const{host:y}=new URL(g),A=da(y);return this.zo(t,g,_,r,A).then((S=>(rt(em,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw la(em,`RPC '${t}' ${f} failed with error: `,S,"url: ",g,"request:",r),S}))}jo(t,n,r,o,u,f){return this.Wo(t,n,r,o,u)}Go(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),r&&r.headers.forEach(((o,u)=>t[u]=o))}Qo(t,n){const r=u1[t];let o=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection",Cl=(s,t,n)=>{s.listen(t,(r=>{try{n(r)}catch(o){setTimeout((()=>{throw o}),0)}}))};class co extends c1{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!co.c_){const t=fT();Cl(t,hT.STAT_EVENT,(n=>{n.stat===pm.PROXY?rt(nn,"STAT_EVENT: detected buffering proxy"):n.stat===pm.NOPROXY&&rt(nn,"STAT_EVENT: detected no buffering proxy")})),co.c_=!0}}zo(t,n,r,o,u){const f=Cm();return new Promise(((g,_)=>{const y=new uT;y.setWithCredentials(!0),y.listenOnce(cT.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Qc.NO_ERROR:const S=y.getResponseJson();rt(nn,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),g(S);break;case Qc.TIMEOUT:rt(nn,`RPC '${t}' ${f} timed out`),_(new ut($.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const M=y.getStatus();if(rt(nn,`RPC '${t}' ${f} failed with status:`,M,"response text:",y.getResponseText()),M>0){let G=y.getResponseJson();Array.isArray(G)&&(G=G[0]);const Z=G==null?void 0:G.error;if(Z&&Z.status&&Z.message){const it=(function(ft){const pt=ft.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(pt)>=0?pt:$.UNKNOWN})(Z.status);_(new ut(it,Z.message))}else _(new ut($.UNKNOWN,"Server responded with status "+y.getStatus()))}else _(new ut($.UNAVAILABLE,"Connection failed."));break;default:yt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{rt(nn,`RPC '${t}' ${f} completed.`)}}));const A=JSON.stringify(o);rt(nn,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",A,r,15)}))}T_(t,n,r){const o=Cm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=this.createWebChannelTransport(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Go(g.initMessageHeaders,n,r),g.encodeInitMessageHeaders=!0;const y=u.join("");rt(nn,`Creating RPC '${t}' stream ${o}: ${y}`,g);const A=f.createWebChannel(y,g);this.E_(A);let S=!1,M=!1;const G=new h1({Jo:Z=>{M?rt(nn,`Not sending because RPC '${t}' stream ${o} is closed:`,Z):(S||(rt(nn,`Opening RPC '${t}' stream ${o} transport.`),A.open(),S=!0),rt(nn,`RPC '${t}' stream ${o} sending:`,Z),A.send(Z))},Ho:()=>A.close()});return Cl(A,Ml.EventType.OPEN,(()=>{M||(rt(nn,`RPC '${t}' stream ${o} transport opened.`),G.i_())})),Cl(A,Ml.EventType.CLOSE,(()=>{M||(M=!0,rt(nn,`RPC '${t}' stream ${o} transport closed`),G.o_(),this.I_(A))})),Cl(A,Ml.EventType.ERROR,(Z=>{M||(M=!0,la(nn,`RPC '${t}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),G.o_(new ut($.UNAVAILABLE,"The operation could not be completed")))})),Cl(A,Ml.EventType.MESSAGE,(Z=>{var it;if(!M){const W=Z.data[0];Yt(!!W,16349);const ft=W,pt=(ft==null?void 0:ft.error)||((it=ft[0])==null?void 0:it.error);if(pt){rt(nn,`RPC '${t}' stream ${o} received error:`,pt);const mt=pt.status;let bt=(function(I){const b=Ue[I];if(b!==void 0)return KT(b)})(mt),Bt=pt.message;mt==="NOT_FOUND"&&Bt.includes("database")&&Bt.includes("does not exist")&&Bt.includes(this.databaseId.database)&&la(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),bt===void 0&&(bt=$.INTERNAL,Bt="Unknown error status: "+mt+" with message "+pt.message),M=!0,G.o_(new ut(bt,Bt)),A.close()}else rt(nn,`RPC '${t}' stream ${o} received:`,W),G.__(W)}})),co.u_(),setTimeout((()=>{G.s_()}),0),G}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter((n=>n===t))}Go(t,n,r){super.Go(t,n,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return dT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(s){return new co(s)}function nm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(s){return new pI(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.c_=!1;class oA{constructor(t,n,r=1e3,o=1.5,u=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&rt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="PersistentStream";class lA{constructor(t,n,r,o,u,f,g,_){this.Ci=t,this.S_=r,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new oA(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(vs(n.toString()),vs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===n&&this.G_(r,o)}),(r=>{t((()=>{const o=new ut($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(t,n){const r=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return rt(aE,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget((()=>this.D_===t?n():(rt(aE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class d1 extends lA{constructor(t,n,r,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=vI(this.serializer,t),r=(function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?zi(f.readTime):Tt.min()})(t);return this.listener.H_(n,r)}Z_(t){const n={};n.database=wm(this.serializer),n.addTarget=(function(u,f){let g;const _=f.target;if(g=Tm(_)?{documents:AI(u,_)}:{query:SI(u,_).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=XT(u,f.resumeToken);const y=Sm(u,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(Tt.min())>0){g.readTime=fh(u,f.snapshotVersion.toTimestamp());const y=Sm(u,f.expectedCount);y!==null&&(g.expectedCount=y)}return g})(this.serializer,t);const r=RI(this.serializer,t);r&&(n.labels=r),this.q_(n)}X_(t){const n={};n.database=wm(this.serializer),n.removeTarget=t,this.q_(n)}}class m1 extends lA{constructor(t,n,r,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Yt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Yt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=TI(t.writeResults,t.commitTime),r=zi(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=wm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>EI(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{}class p1 extends g1{constructor(t,n,r,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ut($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(t,bm(n,r),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ut($.UNKNOWN,u.toString())}))}jo(t,n,r,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,g])=>this.connection.jo(t,bm(n,r),o,f,g,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ut($.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function _1(s,t,n,r){return new p1(s,t,n,r)}class y1{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vs(n),this.aa=!1):rt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="RemoteStore";class v1{constructor(t,n,r,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{r.enqueueAndForget((async()=>{ya(this)&&(rt(ua,"Restarting streams for network reachability change."),await(async function(_){const y=St(_);y.Ia.add(4),await su(y),y.Va.set("Unknown"),y.Ia.delete(4),await Lh(y)})(this))}))})),this.Va=new y1(r,o)}}async function Lh(s){if(ya(s))for(const t of s.Ra)await t(!0)}async function su(s){for(const t of s.Ra)await t(!1)}function uA(s,t){const n=St(s);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),lg(n)?og(n):bo(n).O_()&&ag(n,t))}function rg(s,t){const n=St(s),r=bo(n);n.Ea.delete(t),r.O_()&&cA(n,t),n.Ea.size===0&&(r.O_()?r.L_():ya(n)&&n.Va.set("Unknown"))}function ag(s,t){if(s.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=s.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}bo(s).Z_(t)}function cA(s,t){s.da.$e(t),bo(s).X_(t)}function og(s){s.da=new fI({getRemoteKeysForTarget:t=>s.remoteSyncer.getRemoteKeysForTarget(t),At:t=>s.Ea.get(t)||null,ht:()=>s.datastore.serializer.databaseId}),bo(s).start(),s.Va.ua()}function lg(s){return ya(s)&&!bo(s).x_()&&s.Ea.size>0}function ya(s){return St(s).Ia.size===0}function hA(s){s.da=void 0}async function E1(s){s.Va.set("Online")}async function T1(s){s.Ea.forEach(((t,n)=>{ag(s,t)}))}async function A1(s,t){hA(s),lg(s)?(s.Va.ha(t),og(s)):s.Va.set("Unknown")}async function S1(s,t,n){if(s.Va.set("Online"),t instanceof YT&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const g of u.targetIds)o.Ea.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ea.delete(g),o.da.removeTarget(g))})(s,t)}catch(r){rt(ua,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await mh(s,r)}else if(t instanceof $c?s.da.Xe(t):t instanceof QT?s.da.st(t):s.da.tt(t),!n.isEqual(Tt.min()))try{const r=await aA(s.localStore);n.compareTo(r)>=0&&await(function(u,f){const g=u.da.Tt(f);return g.targetChanges.forEach(((_,y)=>{if(_.resumeToken.approximateByteSize()>0){const A=u.Ea.get(y);A&&u.Ea.set(y,A.withResumeToken(_.resumeToken,f))}})),g.targetMismatches.forEach(((_,y)=>{const A=u.Ea.get(_);if(!A)return;u.Ea.set(_,A.withResumeToken(tn.EMPTY_BYTE_STRING,A.snapshotVersion)),cA(u,_);const S=new lr(A.target,_,y,A.sequenceNumber);ag(u,S)})),u.remoteSyncer.applyRemoteEvent(g)})(s,n)}catch(r){rt(ua,"Failed to raise snapshot:",r),await mh(s,r)}}async function mh(s,t,n){if(!So(t))throw t;s.Ia.add(1),await su(s),s.Va.set("Offline"),n||(n=()=>aA(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{rt(ua,"Retrying IndexedDB access"),await n(),s.Ia.delete(1),await Lh(s)}))}function fA(s,t){return t().catch((n=>mh(s,n,t)))}async function Ph(s){const t=St(s),n=yr(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Gm;for(;b1(t);)try{const o=await s1(t.localStore,r);if(o===null){t.Ta.length===0&&n.L_();break}r=o.batchId,R1(t,o)}catch(o){await mh(t,o)}dA(t)&&mA(t)}function b1(s){return ya(s)&&s.Ta.length<10}function R1(s,t){s.Ta.push(t);const n=yr(s);n.O_()&&n.Y_&&n.ea(t.mutations)}function dA(s){return ya(s)&&!yr(s).x_()&&s.Ta.length>0}function mA(s){yr(s).start()}async function w1(s){yr(s).ra()}async function I1(s){const t=yr(s);for(const n of s.Ta)t.ea(n.mutations)}async function C1(s,t,n){const r=s.Ta.shift(),o=Zm.from(r,t,n);await fA(s,(()=>s.remoteSyncer.applySuccessfulWrite(o))),await Ph(s)}async function N1(s,t){t&&yr(s).Y_&&await(async function(r,o){if((function(f){return uI(f)&&f!==$.ABORTED})(o.code)){const u=r.Ta.shift();yr(r).B_(),await fA(r,(()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ph(r)}})(s,t),dA(s)&&mA(s)}async function oE(s,t){const n=St(s);n.asyncQueue.verifyOperationInProgress(),rt(ua,"RemoteStore received new credentials");const r=ya(n);n.Ia.add(3),await su(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Lh(n)}async function D1(s,t){const n=St(s);t?(n.Ia.delete(2),await Lh(n)):t||(n.Ia.add(2),await su(n),n.Va.set("Unknown"))}function bo(s){return s.ma||(s.ma=(function(n,r,o){const u=St(n);return u.sa(),new d1(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Zo:E1.bind(null,s),Yo:T1.bind(null,s),t_:A1.bind(null,s),H_:S1.bind(null,s)}),s.Ra.push((async t=>{t?(s.ma.B_(),lg(s)?og(s):s.Va.set("Unknown")):(await s.ma.stop(),hA(s))}))),s.ma}function yr(s){return s.fa||(s.fa=(function(n,r,o){const u=St(n);return u.sa(),new m1(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Zo:()=>Promise.resolve(),Yo:w1.bind(null,s),t_:N1.bind(null,s),ta:I1.bind(null,s),na:C1.bind(null,s)}),s.Ra.push((async t=>{t?(s.fa.B_(),await Ph(s)):(await s.fa.stop(),s.Ta.length>0&&(rt(ua,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n,r,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,o,u){const f=Date.now()+r,g=new ug(t,n,f,o,u);return g.start(r),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ut($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(s,t){if(vs("AsyncQueue",`${t}: ${s}`),So(s))return new ut($.UNAVAILABLE,`${t}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static emptySet(t){return new ho(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||dt.comparator(n.key,r.key):(n,r)=>dt.comparator(n.key,r.key),this.keyedMap=xl(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ho)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ho;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.ga=new me(dt.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):yt(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class Eo{constructor(t,n,r,o,u,f,g,_,y){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=_,this.hasCachedResults=y}static fromInitialDocuments(t,n,r,o,u){const f=[];return n.forEach((g=>{f.push({type:0,doc:g})})),new Eo(t,n,ho.emptySet(n),f,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class V1{constructor(){this.queries=uE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const o=St(n),u=o.queries;o.queries=uE(),u.forEach(((f,g)=>{for(const _ of g.Sa)_.onError(r)}))})(this,new ut($.ABORTED,"Firestore shutting down"))}}function uE(){return new pa((s=>xT(s)),Oh)}async function hg(s,t){const n=St(s);let r=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(r=2):(u=new O1,r=t.Da()?0:1);try{switch(r){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=cg(f,`Initialization of query '${oo(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&dg(n)}async function fg(s,t){const n=St(s),r=t.query;let o=3;const u=n.queries.get(r);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function M1(s,t){const n=St(s);let r=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const g of f.Sa)g.Fa(o)&&(r=!0);f.wa=o}}r&&dg(n)}function x1(s,t,n){const r=St(s),o=r.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);r.queries.delete(t)}function dg(s){s.Ca.forEach((t=>{t.next()}))}var Nm,cE;(cE=Nm||(Nm={})).Ma="default",cE.Cache="cache";class mg{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const o of t.docChanges)o.type!==3&&r.push(o);t=new Eo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Eo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(t){this.key=t}}class pA{constructor(t){this.key=t}}class U1{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Lt(),this.mutatedKeys=Lt(),this.eu=UT(t),this.tu=new ho(this.eu)}get nu(){return this.Za}ru(t,n){const r=n?n.iu:new lE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const _=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((A,S)=>{const M=o.get(A),G=Vh(this.query,S)?S:null,Z=!!M&&this.mutatedKeys.has(M.key),it=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let W=!1;M&&G?M.data.isEqual(G.data)?Z!==it&&(r.track({type:3,doc:G}),W=!0):this.su(M,G)||(r.track({type:2,doc:G}),W=!0,(_&&this.eu(G,_)>0||y&&this.eu(G,y)<0)&&(g=!0)):!M&&G?(r.track({type:0,doc:G}),W=!0):M&&!G&&(r.track({type:1,doc:M}),W=!0,(_||y)&&(g=!0)),W&&(G?(f=f.add(G),u=it?u.add(A):u.delete(A)):(f=f.delete(A),u=u.delete(A)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),u=u.delete(A.key),r.track({type:1,doc:A})}return{tu:f,iu:r,bs:g,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((A,S)=>(function(G,Z){const it=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yt(20277,{Vt:W})}};return it(G)-it(Z)})(A.type,S.type)||this.eu(A.doc,S.doc))),this.ou(r),o=o??!1;const g=n&&!o?this._u():[],_=this.Ya.size===0&&this.current&&!o?1:0,y=_!==this.Xa;return this.Xa=_,f.length!==0||y?{snapshot:new Eo(this.query,t.tu,u,f,t.mutatedKeys,_===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=Lt(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return t.forEach((r=>{this.Ya.has(r)||n.push(new pA(r))})),this.Ya.forEach((r=>{t.has(r)||n.push(new gA(r))})),n}cu(t){this.Za=t.ks,this.Ya=Lt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gg="SyncEngine";class k1{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class L1{constructor(t){this.key=t,this.hu=!1}}class P1{constructor(t,n,r,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new pa((g=>xT(g)),Oh),this.Eu=new Map,this.Iu=new Set,this.Ru=new me(dt.comparator),this.Au=new Map,this.Vu=new eg,this.du={},this.mu=new Map,this.fu=vo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function z1(s,t,n=!0){const r=AA(s);let o;const u=r.Tu.get(t);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await _A(r,t,n,!0),o}async function B1(s,t){const n=AA(s);await _A(n,t,!0,!1)}async function _A(s,t,n,r){const o=await r1(s.localStore,Pi(t)),u=o.targetId,f=s.sharedClientState.addLocalQueryTarget(u,n);let g;return r&&(g=await j1(s,t,u,f==="current",o.resumeToken)),s.isPrimaryClient&&n&&uA(s.remoteStore,o),g}async function j1(s,t,n,r,o){s.pu=(S,M,G)=>(async function(it,W,ft,pt){let mt=W.view.ru(ft);mt.bs&&(mt=await nE(it.localStore,W.query,!1).then((({documents:I})=>W.view.ru(I,mt))));const bt=pt&&pt.targetChanges.get(W.targetId),Bt=pt&&pt.targetMismatches.get(W.targetId)!=null,Ct=W.view.applyChanges(mt,it.isPrimaryClient,bt,Bt);return fE(it,W.targetId,Ct.au),Ct.snapshot})(s,S,M,G);const u=await nE(s.localStore,t,!0),f=new U1(t,u.ks),g=f.ru(u.documents),_=iu.createSynthesizedTargetChangeForCurrentChange(n,r&&s.onlineState!=="Offline",o),y=f.applyChanges(g,s.isPrimaryClient,_);fE(s,n,y.au);const A=new k1(t,n,f);return s.Tu.set(t,A),s.Eu.has(n)?s.Eu.get(n).push(t):s.Eu.set(n,[t]),y.snapshot}async function q1(s,t,n){const r=St(s),o=r.Tu.get(t),u=r.Eu.get(o.targetId);if(u.length>1)return r.Eu.set(o.targetId,u.filter((f=>!Oh(f,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Im(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&rg(r.remoteStore,o.targetId),Dm(r,o.targetId)})).catch(Ao)):(Dm(r,o.targetId),await Im(r.localStore,o.targetId,!0))}async function H1(s,t){const n=St(s),r=n.Tu.get(t),o=n.Eu.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rg(n.remoteStore,r.targetId))}async function F1(s,t,n){const r=$1(s);try{const o=await(function(f,g){const _=St(f),y=ce.now(),A=g.reduce(((G,Z)=>G.add(Z.key)),Lt());let S,M;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let Z=Es(),it=Lt();return _.xs.getEntries(G,A).next((W=>{Z=W,Z.forEach(((ft,pt)=>{pt.isValidDocument()||(it=it.add(ft))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,Z))).next((W=>{S=W;const ft=[];for(const pt of g){const mt=sI(pt,S.get(pt.key).overlayedDocument);mt!=null&&ft.push(new _a(pt.key,mt,IT(mt.value.mapValue),ci.exists(!0)))}return _.mutationQueue.addMutationBatch(G,y,ft,g)})).next((W=>{M=W;const ft=W.applyToLocalDocumentSet(S,it);return _.documentOverlayCache.saveOverlays(G,W.batchId,ft)}))})).then((()=>({batchId:M.batchId,changes:LT(S)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),(function(f,g,_){let y=f.du[f.currentUser.toKey()];y||(y=new me(kt)),y=y.insert(g,_),f.du[f.currentUser.toKey()]=y})(r,o.batchId,n),await ru(r,o.changes),await Ph(r.remoteStore)}catch(o){const u=cg(o,"Failed to persist write");n.reject(u)}}async function yA(s,t){const n=St(s);try{const r=await n1(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Yt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Yt(f.hu,14607):o.removedDocuments.size>0&&(Yt(f.hu,42227),f.hu=!1))})),await ru(n,r,t)}catch(r){await Ao(r)}}function hE(s,t,n){const r=St(s);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Tu.forEach(((u,f)=>{const g=f.view.va(t);g.snapshot&&o.push(g.snapshot)})),(function(f,g){const _=St(f);_.onlineState=g;let y=!1;_.queries.forEach(((A,S)=>{for(const M of S.Sa)M.va(g)&&(y=!0)})),y&&dg(_)})(r.eventManager,t),o.length&&r.Pu.H_(o),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function G1(s,t,n){const r=St(s);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Au.get(t),u=o&&o.key;if(u){let f=new me(dt.comparator);f=f.insert(u,rn.newNoDocument(u,Tt.min()));const g=Lt().add(u),_=new Uh(Tt.min(),new Map,new me(kt),f,g);await yA(r,_),r.Ru=r.Ru.remove(u),r.Au.delete(t),pg(r)}else await Im(r.localStore,t,!1).then((()=>Dm(r,t,n))).catch(Ao)}async function K1(s,t){const n=St(s),r=t.batch.batchId;try{const o=await e1(n.localStore,t);EA(n,r,null),vA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ru(n,o)}catch(o){await Ao(o)}}async function Q1(s,t,n){const r=St(s);try{const o=await(function(f,g){const _=St(f);return _.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let A;return _.mutationQueue.lookupMutationBatch(y,g).next((S=>(Yt(S!==null,37113),A=S.keys(),_.mutationQueue.removeMutationBatch(y,S)))).next((()=>_.mutationQueue.performConsistencyCheck(y))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(y,A,g))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A))).next((()=>_.localDocuments.getDocuments(y,A)))}))})(r.localStore,t);EA(r,t,n),vA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ru(r,o)}catch(o){await Ao(o)}}function vA(s,t){(s.mu.get(t)||[]).forEach((n=>{n.resolve()})),s.mu.delete(t)}function EA(s,t,n){const r=St(s);let o=r.du[r.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),r.du[r.currentUser.toKey()]=o}}function Dm(s,t,n=null){s.sharedClientState.removeLocalQueryTarget(t);for(const r of s.Eu.get(t))s.Tu.delete(r),n&&s.Pu.yu(r,n);s.Eu.delete(t),s.isPrimaryClient&&s.Vu.Gr(t).forEach((r=>{s.Vu.containsKey(r)||TA(s,r)}))}function TA(s,t){s.Iu.delete(t.path.canonicalString());const n=s.Ru.get(t);n!==null&&(rg(s.remoteStore,n),s.Ru=s.Ru.remove(t),s.Au.delete(n),pg(s))}function fE(s,t,n){for(const r of n)r instanceof gA?(s.Vu.addReference(r.key,t),Y1(s,r)):r instanceof pA?(rt(gg,"Document no longer in limbo: "+r.key),s.Vu.removeReference(r.key,t),s.Vu.containsKey(r.key)||TA(s,r.key)):yt(19791,{wu:r})}function Y1(s,t){const n=t.key,r=n.path.canonicalString();s.Ru.get(n)||s.Iu.has(r)||(rt(gg,"New document in limbo: "+n),s.Iu.add(r),pg(s))}function pg(s){for(;s.Iu.size>0&&s.Ru.size<s.maxConcurrentLimboResolutions;){const t=s.Iu.values().next().value;s.Iu.delete(t);const n=new dt(ue.fromString(t)),r=s.fu.next();s.Au.set(r,new L1(n)),s.Ru=s.Ru.insert(n,r),uA(s.remoteStore,new lr(Pi(Dh(n.path)),r,"TargetPurposeLimboResolution",wh.ce))}}async function ru(s,t,n){const r=St(s),o=[],u=[],f=[];r.Tu.isEmpty()||(r.Tu.forEach(((g,_)=>{f.push(r.pu(_,t,n).then((y=>{var A;if((y||n)&&r.isPrimaryClient){const S=y?!y.fromCache:(A=n==null?void 0:n.targetChanges.get(_.targetId))==null?void 0:A.current;r.sharedClientState.updateQueryState(_.targetId,S?"current":"not-current")}if(y){o.push(y);const S=ig.Is(_.targetId,y);u.push(S)}})))})),await Promise.all(f),r.Pu.H_(o),await(async function(_,y){const A=St(_);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>J.forEach(y,(M=>J.forEach(M.Ts,(G=>A.persistence.referenceDelegate.addReference(S,M.targetId,G))).next((()=>J.forEach(M.Es,(G=>A.persistence.referenceDelegate.removeReference(S,M.targetId,G)))))))))}catch(S){if(!So(S))throw S;rt(sg,"Failed to update sequence numbers: "+S)}for(const S of y){const M=S.targetId;if(!S.fromCache){const G=A.vs.get(M),Z=G.snapshotVersion,it=G.withLastLimboFreeSnapshotVersion(Z);A.vs=A.vs.insert(M,it)}}})(r.localStore,u))}async function X1(s,t){const n=St(s);if(!n.currentUser.isEqual(t)){rt(gg,"User change. New user:",t.toKey());const r=await rA(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((g=>{g.forEach((_=>{_.reject(new ut($.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ru(n,r.Ns)}}function J1(s,t){const n=St(s),r=n.Au.get(t);if(r&&r.hu)return Lt().add(r.key);{let o=Lt();const u=n.Eu.get(t);if(!u)return o;for(const f of u){const g=n.Tu.get(f);o=o.unionWith(g.view.nu)}return o}}function AA(s){const t=St(s);return t.remoteStore.remoteSyncer.applyRemoteEvent=yA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=J1.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=G1.bind(null,t),t.Pu.H_=M1.bind(null,t.eventManager),t.Pu.yu=x1.bind(null,t.eventManager),t}function $1(s){const t=St(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=K1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Q1.bind(null,t),t}class gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=kh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return t1(this.persistence,new $I,t.initialUser,this.serializer)}Cu(t){return new sA(ng.Vi,this.serializer)}Du(t){return new o1}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gh.provider={build:()=>new gh};class Z1 extends gh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Yt(this.persistence.referenceDelegate instanceof dh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kI(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new sA((r=>dh.Vi(r,n)),this.serializer)}}class Om{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X1.bind(null,this.syncEngine),await D1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new V1})()}createDatastore(t){const n=kh(t.databaseInfo.databaseId),r=f1(t.databaseInfo);return _1(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,o,u,f,g){return new v1(r,o,u,f,g)})(this.localStore,this.datastore,t.asyncQueue,(n=>hE(this.syncEngine,n,0)),(function(){return rE.v()?new rE:new l1})())}createSyncEngine(t,n){return(function(o,u,f,g,_,y,A){const S=new P1(o,u,f,g,_,y);return A&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(o){const u=St(o);rt(ua,"RemoteStore shutting down."),u.Ia.add(5),await su(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Om.provider={build:()=>new Om};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _g{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):vs("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirestoreClient";class W1{constructor(t,n,r,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=Hm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,(async f=>{rt(vr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(r,(f=>(rt(vr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=cg(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function im(s,t){s.asyncQueue.verifyOperationInProgress(),rt(vr,"Initializing OfflineComponentProvider");const n=s.configuration;await t.initialize(n);let r=n.initialUser;s.setCredentialChangeListener((async o=>{r.isEqual(o)||(await rA(t.localStore,o),r=o)})),t.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=t}async function dE(s,t){s.asyncQueue.verifyOperationInProgress();const n=await tC(s);rt(vr,"Initializing OnlineComponentProvider"),await t.initialize(n,s.configuration),s.setCredentialChangeListener((r=>oE(t.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,o)=>oE(t.remoteStore,o))),s._onlineComponents=t}async function tC(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){rt(vr,"Using user provided OfflineComponentProvider");try{await im(s,s._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;la("Error using user provided cache. Falling back to memory cache: "+n),await im(s,new gh)}}else rt(vr,"Using default OfflineComponentProvider"),await im(s,new Z1(void 0));return s._offlineComponents}async function SA(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(rt(vr,"Using user provided OnlineComponentProvider"),await dE(s,s._uninitializedComponentsProvider._online)):(rt(vr,"Using default OnlineComponentProvider"),await dE(s,new Om))),s._onlineComponents}function eC(s){return SA(s).then((t=>t.syncEngine))}async function ph(s){const t=await SA(s),n=t.eventManager;return n.onListen=z1.bind(null,t.syncEngine),n.onUnlisten=q1.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=B1.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=H1.bind(null,t.syncEngine),n}function nC(s,t,n,r){const o=new _g(r),u=new mg(t,o,n);return s.asyncQueue.enqueueAndForget((async()=>hg(await ph(s),u))),()=>{o.Nu(),s.asyncQueue.enqueueAndForget((async()=>fg(await ph(s),u)))}}function iC(s,t,n={}){const r=new ps;return s.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,_,y){const A=new _g({next:M=>{A.Nu(),f.enqueueAndForget((()=>fg(u,S)));const G=M.docs.has(g);!G&&M.fromCache?y.reject(new ut($.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&M.fromCache&&_&&_.source==="server"?y.reject(new ut($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(M)},error:M=>y.reject(M)}),S=new mg(Dh(g.path),A,{includeMetadataChanges:!0,qa:!0});return hg(u,S)})(await ph(s),s.asyncQueue,t,n,r))),r.promise}function sC(s,t,n={}){const r=new ps;return s.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,_,y){const A=new _g({next:M=>{A.Nu(),f.enqueueAndForget((()=>fg(u,S))),M.fromCache&&_.source==="server"?y.reject(new ut($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(M)},error:M=>y.reject(M)}),S=new mg(g,A,{includeMetadataChanges:!0,qa:!0});return hg(u,S)})(await ph(s),s.asyncQueue,t,n,r))),r.promise}function rC(s,t){const n=new ps;return s.asyncQueue.enqueueAndForget((async()=>F1(await eC(s),t,n))),n.promise}/**
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
 */function bA(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="ComponentProvider",mE=new Map;function oC(s,t,n,r,o){return new Rw(s,t,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,bA(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firestore.googleapis.com",gE=!0;class pE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ut($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=RA,this.ssl=gE}else this.host=t.host,this.ssl=t.ssl??gE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=iA;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<xI)throw new ut($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bA(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ut($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ut($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ut($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zh{constructor(t,n,r,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ut($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ut($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sw;switch(r.type){case"firstParty":return new lw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ut($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=mE.get(n);r&&(rt(aC,"Removing Datastore"),mE.delete(n),r.terminate())})(this),Promise.resolve()}}function lC(s,t,n,r={}){var y;s=Kn(s,zh);const o=da(t),u=s._getSettings(),f={...u,emulatorOptions:s._getEmulatorOptions()},g=`${t}:${n}`;o&&Pm(`https://${g}`),u.host!==RA&&u.host!==g&&la("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...u,host:g,ssl:o,emulatorOptions:r};if(!ra(_,f)&&(s._setSettings(_),r.mockUserToken)){let A,S;if(typeof r.mockUserToken=="string")A=r.mockUserToken,S=sn.MOCK_USER;else{A=nT(r.mockUserToken,(y=s._app)==null?void 0:y.options.projectId);const M=r.mockUserToken.sub||r.mockUserToken.user_id;if(!M)throw new ut($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new sn(M)}s._authCredentials=new rw(new gT(A,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new au(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(eu(n,Le._jsonSchema))return new Le(t,r||null,new dt(ue.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:ke("string",Le._jsonSchemaVersion),referencePath:ke("string")};class fr extends au{constructor(t,n,r){super(t,n,Dh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new dt(t))}withConverter(t){return new fr(this.firestore,t,this._path)}}function Zr(s,t,...n){if(s=je(s),pT("collection","path",t),s instanceof zh){const r=ue.fromString(t,...n);return Dv(r),new fr(s,null,r)}{if(!(s instanceof Le||s instanceof fr))throw new ut($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ue.fromString(t,...n));return Dv(r),new fr(s.firestore,null,r)}}function Zc(s,t,...n){if(s=je(s),arguments.length===1&&(t=Hm.newId()),pT("doc","path",t),s instanceof zh){const r=ue.fromString(t,...n);return Nv(r),new Le(s,null,new dt(r))}{if(!(s instanceof Le||s instanceof fr))throw new ut($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ue.fromString(t,...n));return Nv(r),new Le(s.firestore,s instanceof fr?s.converter:null,new dt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="AsyncQueue";class yE{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new oA(this,"async_queue_retry"),this._c=()=>{const r=nm();r&&rt(_E,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=nm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=nm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ps;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!So(t))throw t;rt(_E,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,vs("INTERNAL UNHANDLED ERROR: ",vE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=ug.createAndSchedule(this,t,n,r,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&yt(47125,{Pc:vE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function vE(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),t}class Er extends zh{constructor(t,n,r,o){super(t,n,r,o),this.type="firestore",this._queue=new yE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yE(t),this._firestoreClient=void 0,await t}}}function uC(s,t){const n=typeof s=="object"?s:jm(),r=typeof s=="string"?s:oh,o=Rh(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=WE("firestore");u&&lC(o,...u)}return o}function Bh(s){if(s._terminated)throw new ut($.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||cC(s),s._firestoreClient}function cC(s){var r,o,u,f;const t=s._freezeSettings(),n=oC(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,(o=s._app)==null?void 0:o.options.apiKey,t);s._componentsProvider||(u=t.localCache)!=null&&u._offlineComponentProvider&&((f=t.localCache)!=null&&f._onlineComponentProvider)&&(s._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),s._firestoreClient=new W1(s._authCredentials,s._appCheckCredentials,s._queue,n,s._componentsProvider&&(function(_){const y=_==null?void 0:_._online.build();return{_offline:_==null?void 0:_._offline.build(y),_online:y}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gn(tn.fromBase64String(t))}catch(n){throw new ut($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Gn(tn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(eu(t,Gn._jsonSchema))return Gn.fromBase64String(t.bytes)}}Gn._jsonSchemaVersion="firestore/bytes/1.0",Gn._jsonSchema={type:ke("string",Gn._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ut($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ut($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ut($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return kt(this._lat,t._lat)||kt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bi._jsonSchemaVersion}}static fromJSON(t){if(eu(t,Bi._jsonSchema))return new Bi(t.latitude,t.longitude)}}Bi._jsonSchemaVersion="firestore/geoPoint/1.0",Bi._jsonSchema={type:ke("string",Bi._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class hi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:hi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(eu(t,hi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new hi(t.vectorValues);throw new ut($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hi._jsonSchemaVersion="firestore/vectorValue/1.0",hi._jsonSchema={type:ke("string",hi._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=/^__.*__$/;class fC{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new _a(t,this.data,this.fieldMask,n,this.fieldTransforms):new nu(t,this.data,n,this.fieldTransforms)}}function IA(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{dataSource:s})}}class vg{constructor(t,n,r,o,u,f){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new vg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var o;const n=(o=this.path)==null?void 0:o.child(t),r=this.i({path:n,arrayElement:!1});return r.mc(t),r}fc(t){var o;const n=(o=this.path)==null?void 0:o.child(t),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return _h(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(IA(this.dataSource)&&hC.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class dC{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||kh(t)}I(t,n,r,o=!1){return new vg({dataSource:t,methodName:n,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CA(s){const t=s._freezeSettings(),n=kh(s._databaseId);return new dC(s._databaseId,!!t.ignoreUndefinedProperties,n)}function NA(s,t,n,r,o,u={}){const f=s.I(u.merge||u.mergeFields?2:0,t,n,o);MA("Data must be an object, but it was:",f,r);const g=OA(r,f);let _,y;if(u.merge)_=new li(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const A=[];for(const S of u.mergeFields){const M=Tg(t,S,n);if(!f.contains(M))throw new ut($.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);pC(A,M)||A.push(M)}_=new li(A),y=f.fieldTransforms.filter((S=>_.covers(S.field)))}else _=null,y=f.fieldTransforms;return new fC(new Fn(g),_,y)}class Eg extends yg{_toFieldTransform(t){return new tI(t.path,new Yl)}isEqual(t){return t instanceof Eg}}function DA(s,t){if(VA(s=je(s)))return MA("Unsupported field value:",t,s),OA(s,t);if(s instanceof yg)return(function(r,o){if(!IA(o.dataSource))throw o.yc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return(function(r,o){const u=[];let f=0;for(const g of r){let _=DA(g,o.gc(f));_==null&&(_={nullValue:"NULL_VALUE"}),u.push(_),f++}return{arrayValue:{values:u}}})(s,t)}return(function(r,o){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $w(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=ce.fromDate(r);return{timestampValue:fh(o.serializer,u)}}if(r instanceof ce){const u=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fh(o.serializer,u)}}if(r instanceof Bi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:XT(o.serializer,r._byteString)};if(r instanceof Le){const u=o.databaseId,f=r.firestore._databaseId;if(!f.isEqual(u))throw o.yc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:tg(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof hi)return(function(f,g){const _=f instanceof hi?f.toArray():f;return{mapValue:{fields:{[RT]:{stringValue:wT},[lh]:{arrayValue:{values:_.map((A=>{if(typeof A!="number")throw g.yc("VectorValues must only contain numeric values.");return Jm(g.serializer,A)}))}}}}}})(r,o);if(nA(r))return r._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Fm(r)}`)})(s,t)}function OA(s,t){const n={};return vT(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ga(s,((r,o)=>{const u=DA(o,t.dc(r));u!=null&&(n[r]=u)})),{mapValue:{fields:n}}}function VA(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ce||s instanceof Bi||s instanceof Gn||s instanceof Le||s instanceof yg||s instanceof hi||nA(s))}function MA(s,t,n){if(!VA(n)||!_T(n)){const r=Fm(n);throw r==="an object"?t.yc(s+" a custom object"):t.yc(s+" "+r)}}function Tg(s,t,n){if((t=je(t))instanceof wA)return t._internalPath;if(typeof t=="string")return gC(s,t);throw _h("Field path arguments must be of type string or ",s,!1,void 0,n)}const mC=new RegExp("[~\\*/\\[\\]]");function gC(s,t,n){if(t.search(mC)>=0)throw _h(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,n);try{return new wA(...t.split("."))._internalPath}catch{throw _h(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,n)}}function _h(s,t,n,r,o){const u=r&&!r.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let _="";return(u||f)&&(_+=" (found",u&&(_+=` in field ${r}`),f&&(_+=` in document ${o}`),_+=")"),new ut($.INVALID_ARGUMENT,g+s+_)}function pC(s,t){return s.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{convertValue(t,n="none"){switch(_r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return we(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(pr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw yt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ga(t,((o,u)=>{r[o]=this.convertValue(u,n)})),r}convertVectorValue(t){var r,o,u;const n=(u=(o=(r=t.fields)==null?void 0:r[lh].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>we(f.doubleValue)));return new hi(n)}convertGeoPoint(t){return new Bi(we(t.latitude),we(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ch(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gl(t));default:return null}}convertTimestamp(t){const n=gr(t);return new ce(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ue.fromString(t);Yt(eA(r),9688,{name:t});const o=new Kl(r.get(1),r.get(3)),u=new dt(r.popFirst(5));return o.isEqual(n)||vs(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class Ag extends _C{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function sm(){return new Eg("serverTimestamp")}const EE="@firebase/firestore",TE="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(s){return(function(n,r){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of r)if(u in o&&typeof o[u]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(t,n,r,o,u){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yC extends xA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new ut($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function kA(s,t,n){let r;return r=s?s.toFirestore(t):t,r}class kl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class na extends xA{constructor(t,n,r,o,u,f){super(t,n,r,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Tg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ut($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=na._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}na._jsonSchemaVersion="firestore/documentSnapshot/1.0",na._jsonSchema={type:ke("string",na._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Wc extends na{data(t={}){return super.data(t)}}class ia{constructor(t,n,r,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new kl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new Wc(this._firestore,this._userDataWriter,r.key,r,new kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ut($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((g=>{const _=new Wc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new kl(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:_,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((g=>u||g.type!==3)).map((g=>{const _=new Wc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new kl(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,A=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),A=f.indexOf(g.doc.key)),{type:vC(g.type),doc:_,oldIndex:y,newIndex:A}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ut($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ia._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Hm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),r.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function vC(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yt(61501,{type:s})}}/**
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
 */ia._jsonSchemaVersion="firestore/querySnapshot/1.0",ia._jsonSchema={type:ke("string",ia._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(s){s=Kn(s,Le);const t=Kn(s.firestore,Er),n=Bh(t);return iC(n,s._key).then((r=>LA(t,s,r)))}function TC(s){s=Kn(s,au);const t=Kn(s.firestore,Er),n=Bh(t),r=new Ag(t);return UA(s._query),sC(n,s._query).then((o=>new ia(t,r,s,o)))}function AC(s,t,n){s=Kn(s,Le);const r=Kn(s.firestore,Er),o=kA(s.converter,t),u=CA(r);return Sg(r,[NA(u,"setDoc",s._key,o,s.converter!==null,n).toMutation(s._key,ci.none())])}function SC(s){return Sg(Kn(s.firestore,Er),[new $m(s._key,ci.none())])}function rm(s,t){const n=Kn(s.firestore,Er),r=Zc(s),o=kA(s.converter,t),u=CA(s.firestore);return Sg(n,[NA(u,"addDoc",r._key,o,s.converter!==null,{}).toMutation(r._key,ci.exists(!1))]).then((()=>r))}function am(s,...t){var y,A,S;s=je(s);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||AE(t[r])||(n=t[r++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(AE(t[r])){const M=t[r];t[r]=(y=M.next)==null?void 0:y.bind(M),t[r+1]=(A=M.error)==null?void 0:A.bind(M),t[r+2]=(S=M.complete)==null?void 0:S.bind(M)}let u,f,g;if(s instanceof Le)f=Kn(s.firestore,Er),g=Dh(s._key.path),u={next:M=>{t[r]&&t[r](LA(f,s,M))},error:t[r+1],complete:t[r+2]};else{const M=Kn(s,au);f=Kn(M.firestore,Er),g=M._query;const G=new Ag(f);u={next:Z=>{t[r]&&t[r](new ia(f,G,M,Z))},error:t[r+1],complete:t[r+2]},UA(s._query)}const _=Bh(f);return nC(_,g,o,u)}function Sg(s,t){const n=Bh(s);return rC(n,t)}function LA(s,t,n){const r=n.docs.get(t._key),o=new Ag(s);return new na(s,o,t._key,r,new kl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){iw(ma),aa(new dr("firestore",((r,{instanceIdentifier:o,options:u})=>{const f=r.getProvider("app").getImmediate(),g=new Er(new aw(r.getProvider("auth-internal")),new uw(f,r.getProvider("app-check-internal")),ww(f,o),f);return u={useFetchStreams:n,...u},g._setSettings(u),g}),"PUBLIC").setMultipleInstances(!0)),Li(EE,TE,t),Li(EE,TE,"esm2020")})();function PA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bC=PA,zA=new Wl("auth","Firebase",PA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new zm("@firebase/auth");function RC(s,...t){yh.logLevel<=Ut.WARN&&yh.warn(`Auth (${ma}): ${s}`,...t)}function th(s,...t){yh.logLevel<=Ut.ERROR&&yh.error(`Auth (${ma}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(s,...t){throw Rg(s,...t)}function fi(s,...t){return Rg(s,...t)}function bg(s,t,n){const r={...bC(),[t]:n};return new Wl("auth","Firebase",r).create(t,{appName:s.name})}function _s(s){return bg(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wC(s,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qn(s,"argument-error"),bg(s,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rg(s,...t){if(typeof s!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return zA.create(s,...t)}function _t(s,t,...n){if(!s)throw Rg(t,...n)}function ms(s){const t="INTERNAL ASSERTION FAILED: "+s;throw th(t),new Error(t)}function Ts(s,t){s||ms(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function IC(){return SE()==="http:"||SE()==="https:"}function SE(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IC()||xb()||"connection"in navigator)?navigator.onLine:!0}function NC(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ts(n>t,"Short delay should be less than long delay!"),this.isMobile=Ob()||Ub()}get(){return CC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(s,t){Ts(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VC=new ou(3e4,6e4);function Tr(s,t){return s.tenantId&&!t.tenantId?{...t,tenantId:s.tenantId}:t}async function Ar(s,t,n,r,o={}){return jA(s,o,async()=>{let u={},f={};r&&(t==="GET"?f=r:u={body:JSON.stringify(r)});const g=tu({key:s.config.apiKey,...f}).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const y={method:t,headers:_,...u};return Mb()||(y.referrerPolicy="no-referrer"),s.emulatorConfig&&da(s.emulatorConfig.host)&&(y.credentials="include"),BA.fetch()(await qA(s,s.config.apiHost,n,g),y)})}async function jA(s,t,n){s._canInitEmulator=!1;const r={...DC,...t};try{const o=new xC(s),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Fc(s,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[_,y]=g.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fc(s,"credential-already-in-use",f);if(_==="EMAIL_EXISTS")throw Fc(s,"email-already-in-use",f);if(_==="USER_DISABLED")throw Fc(s,"user-disabled",f);const A=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw bg(s,A,y);Qn(s,A)}}catch(o){if(o instanceof Fi)throw o;Qn(s,"network-request-failed",{message:String(o)})}}async function lu(s,t,n,r,o={}){const u=await Ar(s,t,n,r,o);return"mfaPendingCredential"in u&&Qn(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function qA(s,t,n,r){const o=`${t}${n}?${r}`,u=s,f=u.config.emulator?wg(s.config,o):`${s.config.apiScheme}://${o}`;return OC.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function MC(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fi(this.auth,"network-request-failed")),VC.get())})}}function Fc(s,t,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=fi(s,t,r);return o.customData._tokenResponse=n,o}function bE(s){return s!==void 0&&s.enterprise!==void 0}class UC{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return MC(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kC(s,t){return Ar(s,"GET","/v2/recaptchaConfig",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(s,t){return Ar(s,"POST","/v1/accounts:delete",t)}async function vh(s,t){return Ar(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function PC(s,t=!1){const n=je(s),r=await n.getIdToken(t),o=Ig(r);_t(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:jl(om(o.auth_time)),issuedAtTime:jl(om(o.iat)),expirationTime:jl(om(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function om(s){return Number(s)*1e3}function Ig(s){const[t,n,r]=s.split(".");if(t===void 0||n===void 0||r===void 0)return th("JWT malformed, contained fewer than 3 sections"),null;try{const o=$E(n);return o?JSON.parse(o):(th("Failed to decode base64 JWT payload"),null)}catch(o){return th("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function RE(s){const t=Ig(s);return _t(t,"internal-error"),_t(typeof t.exp<"u","internal-error"),_t(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(s,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Fi&&zC(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function zC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jl(this.lastLoginAt),this.creationTime=jl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eh(s){var S;const t=s.auth,n=await s.getIdToken(),r=await $l(s,vh(t,{idToken:n}));_t(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?HA(o.providerUserInfo):[],f=qC(s.providerData,u),g=s.isAnonymous,_=!(s.email&&o.passwordHash)&&!(f!=null&&f.length),y=g?_:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(s,A)}async function jC(s){const t=je(s);await Eh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qC(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function HA(s){return s.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(s,t){const n=await jA(s,{},async()=>{const r=tu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,f=await qA(s,o,"/v1/token",`key=${u}`),g=await s._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:g,body:r};return s.emulatorConfig&&da(s.emulatorConfig.host)&&(_.credentials="include"),BA.fetch()(f,_)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FC(s,t){return Ar(s,"POST","/v2/accounts:revokeToken",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_t(t.idToken,"internal-error"),_t(typeof t.idToken<"u","internal-error"),_t(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):RE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){_t(t.length!==0,"internal-error");const n=RE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_t(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:o,expiresIn:u}=await HC(t,n);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:o,expirationTime:u}=n,f=new fo;return r&&(_t(typeof r=="string","internal-error",{appName:t}),f.refreshToken=r),o&&(_t(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(_t(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(s,t){_t(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class ui{constructor({uid:t,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new BC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Mm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await $l(this,this.stsTokenManager.getToken(this.auth,t));return _t(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return PC(this,t)}reload(){return jC(this)}_assign(t){this!==t&&(_t(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ui({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Eh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(_s(this.auth));const t=await this.getIdToken();return await $l(this,LC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,g=n.tenantId??void 0,_=n._redirectEventId??void 0,y=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:S,emailVerified:M,isAnonymous:G,providerData:Z,stsTokenManager:it}=n;_t(S&&it,t,"internal-error");const W=fo.fromJSON(this.name,it);_t(typeof S=="string",t,"internal-error"),ir(r,t.name),ir(o,t.name),_t(typeof M=="boolean",t,"internal-error"),_t(typeof G=="boolean",t,"internal-error"),ir(u,t.name),ir(f,t.name),ir(g,t.name),ir(_,t.name),ir(y,t.name),ir(A,t.name);const ft=new ui({uid:S,auth:t,email:o,emailVerified:M,displayName:r,isAnonymous:G,photoURL:f,phoneNumber:u,tenantId:g,stsTokenManager:W,createdAt:y,lastLoginAt:A});return Z&&Array.isArray(Z)&&(ft.providerData=Z.map(pt=>({...pt}))),_&&(ft._redirectEventId=_),ft}static async _fromIdTokenResponse(t,n,r=!1){const o=new fo;o.updateFromServerResponse(n);const u=new ui({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Eh(u),u}static async _fromGetAccountInfoResponse(t,n,r){const o=n.users[0];_t(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?HA(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),g=new fo;g.updateFromIdToken(r);const _=new ui({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(_,y),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;function gs(s){Ts(s instanceof Function,"Expected a class definition");let t=wE.get(s);return t?(Ts(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,wE.set(s,t),t)}/**
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
 */class FA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}FA.type="NONE";const IE=FA;/**
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
 */function eh(s,t,n){return`firebase:${s}:${t}:${n}`}class mo{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=eh(this.userKey,o.apiKey,u),this.fullPersistenceKey=eh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await vh(this.auth,{idToken:t}).catch(()=>{});return n?ui._fromGetAccountInfoResponse(this.auth,n,t):null}return ui._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new mo(gs(IE),t,r);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||gs(IE);const f=eh(r,t.config.apiKey,t.name);let g=null;for(const y of n)try{const A=await y._get(f);if(A){let S;if(typeof A=="string"){const M=await vh(t,{idToken:A}).catch(()=>{});if(!M)break;S=await ui._fromGetAccountInfoResponse(t,M,A)}else S=ui._fromJSON(t,A);y!==u&&(g=S),u=y;break}}catch{}const _=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!_.length?new mo(u,t,r):(u=_[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new mo(u,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(GA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(JA(t))return"Blackberry";if($A(t))return"Webos";if(KA(t))return"Safari";if((t.includes("chrome/")||QA(t))&&!t.includes("edge/"))return"Chrome";if(XA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GA(s=an()){return/firefox\//i.test(s)}function KA(s=an()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function QA(s=an()){return/crios\//i.test(s)}function YA(s=an()){return/iemobile/i.test(s)}function XA(s=an()){return/android/i.test(s)}function JA(s=an()){return/blackberry/i.test(s)}function $A(s=an()){return/webos/i.test(s)}function Cg(s=an()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function GC(s=an()){var t;return Cg(s)&&!!((t=window.navigator)!=null&&t.standalone)}function KC(){return kb()&&document.documentMode===10}function ZA(s=an()){return Cg(s)||XA(s)||$A(s)||JA(s)||/windows phone/i.test(s)||YA(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s,t=[]){let n;switch(s){case"Browser":n=CE(an());break;case"Worker":n=`${CE(an())}-${s}`;break;default:n=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ma}/${r}`}/**
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
 */class QC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=u=>new Promise((f,g)=>{try{const _=t(u);f(_)}catch(_){g(_)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YC(s,t={}){return Ar(s,"GET","/v2/passwordPolicy",Tr(s,t))}/**
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
 */const XC=6;class JC{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(t,n,r,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new NE(this),this.idTokenSubscription=new NE(this),this.beforeStateQueue=new QC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=gs(n)),this._initializationPromise=this.queue(async()=>{var r,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await vh(this,{idToken:t}),r=await ui._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(yn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,g=r==null?void 0:r._redirectEventId,_=await this.tryRedirectSignIn(t);(!f||f===g)&&(_!=null&&_.user)&&(r=_.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(f){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Eh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=NC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yn(this.app))return Promise.reject(_s(this));const n=t?je(t):null;return n&&_t(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&_t(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yn(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await YC(this),n=new JC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Wl("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FC(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&gs(t)||this._popupRedirectResolver;_t(n,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const _=t.addObserver(n,r,o);return()=>{f=!0,_()}}else{const _=t.addObserver(n);return()=>{f=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=WA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&RC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sr(s){return je(s)}class NE{constructor(t){this.auth=t,this.observer=null,this.addObserver=Fb(n=>this.observer=n)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZC(s){jh=s}function t0(s){return jh.loadJS(s)}function WC(){return jh.recaptchaEnterpriseScript}function tN(){return jh.gapiScript}function eN(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class nN{constructor(){this.enterprise=new iN}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class iN{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const sN="recaptcha-enterprise",e0="NO_RECAPTCHA";class rN{constructor(t){this.type=sN,this.auth=Sr(t)}async verify(t="verify",n=!1){async function r(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,g)=>{kC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const y=new UC(_);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(_=>{g(_)})})}function o(u,f,g){const _=window.grecaptcha;bE(_)?_.enterprise.ready(()=>{_.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(e0)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nN().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{r(this.auth).then(g=>{if(!n&&bE(window.grecaptcha))o(g,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let _=WC();_.length!==0&&(_+=g),t0(_).then(()=>{o(g,u,f)}).catch(y=>{f(y)})}}).catch(g=>{f(g)})})}}async function DE(s,t,n,r=!1,o=!1){const u=new rN(s);let f;if(o)f=e0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const g={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const _=g.phoneEnrollmentInfo.phoneNumber,y=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const _=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return r?Object.assign(g,{captchaResp:f}):Object.assign(g,{captchaResponse:f}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function xm(s,t,n,r,o){var u;if((u=s._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await DE(s,t,n,n==="getOobCode");return r(s,f)}else return r(s,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await DE(s,t,n,n==="getOobCode");return r(s,g)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(s,t){const n=Rh(s,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ra(u,t??{}))return o;Qn(o,"already-initialized")}return n.initialize({options:t})}function oN(s,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gs);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lN(s,t,n){const r=Sr(s);_t(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,u=n0(t),{host:f,port:g}=uN(t),_=g===null?"":`:${g}`,y={url:`${u}//${f}${_}/`},A=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){_t(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),_t(ra(y,r.config.emulator)&&ra(A,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=A,r.settings.appVerificationDisabledForTesting=!0,da(f)?Pm(`${u}//${f}${_}`):cN()}function n0(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function uN(s){const t=n0(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:OE(r.substr(u.length+1))}}else{const[u,f]=r.split(":");return{host:u,port:OE(f)}}}function OE(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function cN(){function s(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ms("not implemented")}_getIdTokenResponse(t){return ms("not implemented")}_linkToIdToken(t,n){return ms("not implemented")}_getReauthenticationResolver(t){return ms("not implemented")}}async function hN(s,t){return Ar(s,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(s,t){return lu(s,"POST","/v1/accounts:signInWithPassword",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(s,t){return lu(s,"POST","/v1/accounts:signInWithEmailLink",Tr(s,t))}async function mN(s,t){return lu(s,"POST","/v1/accounts:signInWithEmailLink",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Ng{constructor(t,n,r,o=null){super("password",r),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Zl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Zl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(t,n,"signInWithPassword",fN);case"emailLink":return dN(t,{email:this._email,oobCode:this._password});default:Qn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(t,r,"signUpPassword",hN);case"emailLink":return mN(t,{idToken:n,email:this._email,oobCode:this._password});default:Qn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(s,t){return lu(s,"POST","/v1/accounts:signInWithIdp",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="http://localhost";class ca extends Ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ca(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o,...u}=n;if(!r||!o)return null;const f=new ca(r,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return go(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,go(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,go(t,n)}buildRequest(){const t={requestUri:gN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=tu(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _N(s){const t=Ol(Vl(s)).link,n=t?Ol(Vl(t)).deep_link_id:null,r=Ol(Vl(s)).deep_link_id;return(r?Ol(Vl(r)).link:null)||r||n||t||s}class Dg{constructor(t){const n=Ol(Vl(t)),r=n.apiKey??null,o=n.oobCode??null,u=pN(n.mode??null);_t(r&&o&&u,"argument-error"),this.apiKey=r,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=_N(t);try{return new Dg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(t,n){return Zl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Dg.parseLink(n);return _t(r,"argument-error"),Zl._fromEmailAndCode(t,r.code,r.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uu extends Og{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends uu{constructor(){super("facebook.com")}static credential(t){return ca._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends uu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ca._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ds.credentialFromTaggedObject(t)}static credentialFromError(t){return ds.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ds.credential(n,r)}catch{return null}}}ds.GOOGLE_SIGN_IN_METHOD="google.com";ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends uu{constructor(){super("github.com")}static credential(t){return ca._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rr.credentialFromTaggedObject(t)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends uu{constructor(){super("twitter.com")}static credential(t,n){return ca._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(s,t){return lu(s,"POST","/v1/accounts:signUp",Tr(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,o=!1){const u=await ui._fromIdTokenResponse(t,r,o),f=VE(r);return new ha({user:u,providerId:f,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const o=VE(r);return new ha({user:t,providerId:o,_tokenResponse:r,operationType:n})}}function VE(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends Fi{constructor(t,n,r,o){super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Th.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,o){return new Th(t,n,r,o)}}function i0(s,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Th._fromErrorAndOperation(s,u,t,r):u})}async function vN(s,t,n=!1){const r=await $l(s,t._linkToIdToken(s.auth,await s.getIdToken()),n);return ha._forOperation(s,"link",r)}/**
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
 */async function EN(s,t,n=!1){const{auth:r}=s;if(yn(r.app))return Promise.reject(_s(r));const o="reauthenticate";try{const u=await $l(s,i0(r,o,t,s),n);_t(u.idToken,r,"internal-error");const f=Ig(u.idToken);_t(f,r,"internal-error");const{sub:g}=f;return _t(s.uid===g,r,"user-mismatch"),ha._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qn(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(s,t,n=!1){if(yn(s.app))return Promise.reject(_s(s));const r="signIn",o=await i0(s,r,t),u=await ha._fromIdTokenResponse(s,r,o);return n||await s._updateCurrentUser(u.user),u}async function TN(s,t){return s0(Sr(s),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(s){const t=Sr(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function AN(s,t,n){if(yn(s.app))return Promise.reject(_s(s));const r=Sr(s),f=await xm(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yN).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&r0(s),_}),g=await ha._fromIdTokenResponse(r,"signIn",f);return await r._updateCurrentUser(g.user),g}function SN(s,t,n){return yn(s.app)?Promise.reject(_s(s)):TN(je(s),Ro.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&r0(s),r})}function bN(s,t,n,r){return je(s).onIdTokenChanged(t,n,r)}function RN(s,t,n){return je(s).beforeAuthStateChanged(t,n)}function wN(s,t,n,r){return je(s).onAuthStateChanged(t,n,r)}function IN(s){return je(s).signOut()}const Ah="__sak";/**
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
 */class a0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=1e3,NN=10;class o0 extends a0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&t(n,o,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,_)=>{this.notifyListeners(f,_)});return}const r=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(r);!n&&this.localCache[r]===f||this.notifyListeners(r,f)},u=this.storage.getItem(r);KC()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,NN):o()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}o0.type="LOCAL";const DN=o0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0 extends a0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}l0.type="SESSION";const u0=l0;/**
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
 */function ON(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const r=new qh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,u)),_=await ON(g);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(s="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return s+n}/**
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
 */class VN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((g,_)=>{const y=Vg("",20);o.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},r);f={messageChannel:o,onMessage(S){const M=S;if(M.data.eventId===y)switch(M.data.status){case"ack":clearTimeout(A),u=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(M.data.response);break;default:clearTimeout(A),clearTimeout(u),_(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}function MN(s){ji().location.href=s}/**
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
 */function c0(){return typeof ji().WorkerGlobalScope<"u"&&typeof ji().importScripts=="function"}async function xN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UN(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function kN(){return c0()?self:null}/**
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
 */const h0="firebaseLocalStorageDb",LN=1,Sh="firebaseLocalStorage",f0="fbase_key";class cu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hh(s,t){return s.transaction([Sh],t?"readwrite":"readonly").objectStore(Sh)}function PN(){const s=indexedDB.deleteDatabase(h0);return new cu(s).toPromise()}function Um(){const s=indexedDB.open(h0,LN);return new Promise((t,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Sh,{keyPath:f0})}catch(o){n(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Sh)?t(r):(r.close(),await PN(),t(await Um()))})})}async function ME(s,t,n){const r=Hh(s,!0).put({[f0]:t,value:n});return new cu(r).toPromise()}async function zN(s,t){const n=Hh(s,!1).get(t),r=await new cu(n).toPromise();return r===void 0?null:r.value}function xE(s,t){const n=Hh(s,!0).delete(t);return new cu(n).toPromise()}const BN=800,jN=3;class d0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Um(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qh._getInstance(kN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await xN(),!this.activeServiceWorker)return;this.sender=new VN(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||UN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Um();return await ME(t,Ah,"1"),await xE(t,Ah),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ME(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>zN(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Hh(o,!1).getAll();return new cu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d0.type="LOCAL";const qN=d0;new ou(3e4,6e4);/**
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
 */function m0(s,t){return t?gs(t):(_t(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Mg extends Ng{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return go(t,this._buildIdpRequest())}_linkToIdToken(t,n){return go(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return go(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function HN(s){return s0(s.auth,new Mg(s),s.bypassAuthState)}function FN(s){const{auth:t,user:n}=s;return _t(n,t,"internal-error"),EN(n,new Mg(s),s.bypassAuthState)}async function GN(s){const{auth:t,user:n}=s;return _t(n,t,"internal-error"),vN(n,new Mg(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n,r,o,u=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:o,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const _={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(_))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return HN;case"linkViaPopup":case"linkViaRedirect":return GN;case"reauthViaPopup":case"reauthViaRedirect":return FN;default:Qn(this.auth,"internal-error")}}resolve(t){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=new ou(2e3,1e4);async function QN(s,t,n){if(yn(s.app))return Promise.reject(fi(s,"operation-not-supported-in-this-environment"));const r=Sr(s);wC(s,t,Og);const o=m0(r,n);return new ea(r,"signInViaPopup",t,o).executeNotNull()}class ea extends g0{constructor(t,n,r,o,u){super(t,n,o,u),this.provider=r,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _t(t,this.auth,"internal-error"),t}async onExecution(){Ts(this.filter.length===1,"Popup operations only handle one event");const t=Vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,KN.get())};t()}}ea.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="pendingRedirect",nh=new Map;class XN extends g0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=nh.get(this.auth._key());if(!t){try{const r=await JN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}nh.set(this.auth._key(),t)}return this.bypassAuthState||nh.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JN(s,t){const n=WN(t),r=ZN(s);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function $N(s,t){nh.set(s._key(),t)}function ZN(s){return gs(s._redirectPersistence)}function WN(s){return eh(YN,s.config.apiKey,s.name)}async function tD(s,t,n=!1){if(yn(s.app))return Promise.reject(_s(s));const r=Sr(s),o=m0(r,t),f=await new XN(r,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await r._persistUserIfCurrent(f.user),await r._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=600*1e3;class nD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!iD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!p0(t)){const o=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=eD&&this.cachedEventUids.clear(),this.cachedEventUids.has(UE(t))}saveEventToCache(t){this.cachedEventUids.add(UE(t)),this.lastProcessedEventTime=Date.now()}}function UE(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function p0({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function iD(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p0(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(s,t={}){return Ar(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aD=/^https?/;async function oD(s){if(s.config.emulator)return;const{authorizedDomains:t}=await sD(s);for(const n of t)try{if(lD(n))return}catch{}Qn(s,"unauthorized-domain")}function lD(s){const t=Vm(),{protocol:n,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const f=new URL(s);return f.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===r}if(!aD.test(n))return!1;if(rD.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const uD=new ou(3e4,6e4);function kE(){const s=ji().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function cD(s){return new Promise((t,n)=>{var o,u,f;function r(){kE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kE(),n(fi(s,"network-request-failed"))},timeout:uD.get()})}if((u=(o=ji().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=ji().gapi)!=null&&f.load)r();else{const g=eN("iframefcb");return ji()[g]=()=>{gapi.load?r():n(fi(s,"network-request-failed"))},t0(`${tN()}?onload=${g}`).catch(_=>n(_))}}).catch(t=>{throw ih=null,t})}let ih=null;function hD(s){return ih=ih||cD(s),ih}/**
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
 */const fD=new ou(5e3,15e3),dD="__/auth/iframe",mD="emulator/auth/iframe",gD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _D(s){const t=s.config;_t(t.authDomain,s,"auth-domain-config-required");const n=t.emulator?wg(t,mD):`https://${s.config.authDomain}/${dD}`,r={apiKey:t.apiKey,appName:s.name,v:ma},o=pD.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${tu(r).slice(1)}`}async function yD(s){const t=await hD(s),n=ji().gapi;return _t(n,s,"internal-error"),t.open({where:document.body,url:_D(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gD,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const f=fi(s,"network-request-failed"),g=ji().setTimeout(()=>{u(f)},fD.get());function _(){ji().clearTimeout(g),o(r)}r.ping(_).then(_,()=>{u(f)})}))}/**
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
 */const vD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ED=500,TD=600,AD="_blank",SD="http://localhost";class LE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bD(s,t,n,r=ED,o=TD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-r)/2,0).toString();let g="";const _={...vD,width:r.toString(),height:o.toString(),top:u,left:f},y=an().toLowerCase();n&&(g=QA(y)?AD:n),GA(y)&&(t=t||SD,_.scrollbars="yes");const A=Object.entries(_).reduce((M,[G,Z])=>`${M}${G}=${Z},`,"");if(GC(y)&&g!=="_self")return RD(t||"",g),new LE(null);const S=window.open(t||"",g,A);_t(S,s,"popup-blocked");try{S.focus()}catch{}return new LE(S)}function RD(s,t){const n=document.createElement("a");n.href=s,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wD="__/auth/handler",ID="emulator/auth/handler",CD=encodeURIComponent("fac");async function PE(s,t,n,r,o,u){_t(s.config.authDomain,s,"auth-domain-config-required"),_t(s.config.apiKey,s,"invalid-api-key");const f={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:ma,eventId:o};if(t instanceof Og){t.setDefaultLanguage(s.languageCode),f.providerId=t.providerId||"",Hb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,S]of Object.entries({}))f[A]=S}if(t instanceof uu){const A=t.getScopes().filter(S=>S!=="");A.length>0&&(f.scopes=A.join(","))}s.tenantId&&(f.tid=s.tenantId);const g=f;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const _=await s._getAppCheckToken(),y=_?`#${CD}=${encodeURIComponent(_)}`:"";return`${ND(s)}?${tu(g).slice(1)}${y}`}function ND({config:s}){return s.emulator?wg(s,ID):`https://${s.authDomain}/${wD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="webStorageSupport";class DD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u0,this._completeRedirectFn=tD,this._overrideRedirectResult=$N}async _openPopup(t,n,r,o){var f;Ts((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await PE(t,n,r,Vm(),o);return bD(t,u,Vg())}async _openRedirect(t,n,r,o){await this._originValidation(t);const u=await PE(t,n,r,Vm(),o);return MN(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Ts(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await yD(t),r=new nD(t);return n.register("authEvent",o=>(_t(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(lm,{type:lm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[lm];u!==void 0&&n(!!u),Qn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZA()||KA()||Cg()}}const OD=DD;var zE="@firebase/auth",BE="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xD(s){aa(new dr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=r.options;_t(f&&!f.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:f,authDomain:g,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WA(s)},y=new $C(r,o,u,_);return oN(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),aa(new dr("auth-internal",t=>{const n=Sr(t.getProvider("auth").getImmediate());return(r=>new VD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Li(zE,BE,MD(s)),Li(zE,BE,"esm2020")}/**
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
 */const UD=300,kD=eT("authIdTokenMaxAge")||UD;let jE=null;const LD=s=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kD)return;const o=n==null?void 0:n.token;jE!==o&&(jE=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function PD(s=jm()){const t=Rh(s,"auth");if(t.isInitialized())return t.getImmediate();const n=aN(s,{popupRedirectResolver:OD,persistence:[qN,DN,u0]}),r=eT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const f=LD(u.toString());RN(n,f,()=>f(n.currentUser)),bN(n,g=>f(g))}}const o=ZE("auth");return o&&lN(n,`http://${o}`),n}function zD(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}ZC({loadJS(s){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},r.type="text/javascript",r.charset="UTF-8",zD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xD("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebasestorage.googleapis.com",y0="storageBucket",BD=120*1e3,jD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Fi{constructor(t,n,r=0){super(um(t),`Firebase Storage: ${n} (${um(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return um(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function um(s){return"storage/"+s}function xg(){const s="An unknown error occurred, please check the error payload for server response.";return new Te(Ee.UNKNOWN,s)}function qD(s){return new Te(Ee.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}function HD(s){return new Te(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FD(){const s="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ee.UNAUTHENTICATED,s)}function GD(){return new Te(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KD(s){return new Te(Ee.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")}function QD(){return new Te(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YD(){return new Te(Ee.CANCELED,"User canceled the upload/download.")}function XD(s){return new Te(Ee.INVALID_URL,"Invalid URL '"+s+"'.")}function JD(s){return new Te(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function $D(){return new Te(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+y0+"' property when initializing the app?")}function ZD(){return new Te(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WD(){return new Te(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function t2(s){return new Te(Ee.UNSUPPORTED_ENVIRONMENT,`${s} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function km(s){return new Te(Ee.INVALID_ARGUMENT,s)}function v0(){return new Te(Ee.APP_DELETED,"The Firebase app was deleted.")}function e2(s){return new Te(Ee.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ql(s,t){return new Te(Ee.INVALID_FORMAT,"String does not match format '"+s+"': "+t)}function Nl(s){throw new Te(Ee.INTERNAL_ERROR,"Internal error: "+s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Cn.makeFromUrl(t,n)}catch{return new Cn(t,"")}if(r.path==="")return r;throw JD(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function u(bt){bt.path.charAt(bt.path.length-1)==="/"&&(bt.path_=bt.path_.slice(0,-1))}const f="(/(.*))?$",g=new RegExp("^gs://"+o+f,"i"),_={bucket:1,path:3};function y(bt){bt.path_=decodeURIComponent(bt.path)}const A="v[A-Za-z0-9_]+",S=n.replace(/[.]/g,"\\."),M="(/([^?#]*).*)?$",G=new RegExp(`^https?://${S}/${A}/b/${o}/o${M}`,"i"),Z={bucket:1,path:3},it=n===_0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,W="([^?#]*)",ft=new RegExp(`^https?://${it}/${o}/${W}`,"i"),mt=[{regex:g,indices:_,postModify:u},{regex:G,indices:Z,postModify:y},{regex:ft,indices:{bucket:1,path:2},postModify:y}];for(let bt=0;bt<mt.length;bt++){const Bt=mt[bt],Ct=Bt.regex.exec(t);if(Ct){const I=Ct[Bt.indices.bucket];let b=Ct[Bt.indices.path];b||(b=""),r=new Cn(I,b),Bt.postModify(r);break}}if(r==null)throw XD(t);return r}}class n2{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(s,t,n){let r=1,o=null,u=null,f=!1,g=0;function _(){return g===2}let y=!1;function A(...W){y||(y=!0,t.apply(null,W))}function S(W){o=setTimeout(()=>{o=null,s(G,_())},W)}function M(){u&&clearTimeout(u)}function G(W,...ft){if(y){M();return}if(W){M(),A.call(null,W,...ft);return}if(_()||f){M(),A.call(null,W,...ft);return}r<64&&(r*=2);let mt;g===1?(g=2,mt=0):mt=(r+Math.random())*1e3,S(mt)}let Z=!1;function it(W){Z||(Z=!0,M(),!y&&(o!==null?(W||(g=2),clearTimeout(o),S(0)):W||(g=1)))}return S(0),u=setTimeout(()=>{f=!0,it(!0)},n),it}function s2(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(s){return s!==void 0}function a2(s){return typeof s=="object"&&!Array.isArray(s)}function Ug(s){return typeof s=="string"||s instanceof String}function qE(s){return kg()&&s instanceof Blob}function kg(){return typeof Blob<"u"}function HE(s,t,n,r){if(r<t)throw km(`Invalid value for '${s}'. Expected ${t} or greater.`);if(r>n)throw km(`Invalid value for '${s}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(s,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${s}`}function E0(s){const t=encodeURIComponent;let n="?";for(const r in s)if(s.hasOwnProperty(r)){const o=t(r)+"="+t(s[r]);n=n+o+"&"}return n=n.slice(0,-1),n}var sa;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(sa||(sa={}));/**
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
 */function o2(s,t){const n=s>=500&&s<600,o=[408,429].indexOf(s)!==-1,u=t.indexOf(s)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(t,n,r,o,u,f,g,_,y,A,S,M=!0,G=!1){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=g,this.errorCallback_=_,this.timeout_=y,this.progressCallback_=A,this.connectionFactory_=S,this.retry=M,this.isUsingEmulator=G,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Z,it)=>{this.resolve_=Z,this.reject_=it,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new Gc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=g=>{const _=g.loaded,y=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const g=u.getErrorCode()===sa.NO_ERROR,_=u.getStatus();if(!g||o2(_,this.additionalRetryCodes_)&&this.retry){const A=u.getErrorCode()===sa.ABORT;r(!1,new Gc(!1,null,A));return}const y=this.successCodes_.indexOf(_)!==-1;r(!0,new Gc(y,u))})},n=(r,o)=>{const u=this.resolve_,f=this.reject_,g=o.connection;if(o.wasSuccessCode)try{const _=this.callback_(g,g.getResponse());r2(_)?u(_):u()}catch(_){f(_)}else if(g!==null){const _=xg();_.serverResponse=g.getErrorText(),this.errorCallback_?f(this.errorCallback_(g,_)):f(_)}else if(o.canceled){const _=this.appDelete_?v0():YD();f(_)}else{const _=QD();f(_)}};this.canceled_?n(!1,new Gc(!1,null,!0)):this.backoffId_=i2(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&s2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gc{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function u2(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function c2(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function h2(s,t){t&&(s["X-Firebase-GMPID"]=t)}function f2(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function d2(s,t,n,r,o,u,f=!0,g=!1){const _=E0(s.urlParams),y=s.url+_,A=Object.assign({},s.headers);return h2(A,t),u2(A,n),c2(A,u),f2(A,r),new l2(y,s.method,A,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,o,f,g)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function g2(...s){const t=m2();if(t!==void 0){const n=new t;for(let r=0;r<s.length;r++)n.append(s[r]);return n.getBlob()}else{if(kg())return new Blob(s);throw new Te(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function p2(s,t,n){return s.webkitSlice?s.webkitSlice(t,n):s.mozSlice?s.mozSlice(t,n):s.slice?s.slice(t,n):null}/**
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
 */function _2(s){if(typeof atob>"u")throw t2("base-64");return atob(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cm{constructor(t,n){this.data=t,this.contentType=n||null}}function y2(s,t){switch(s){case ki.RAW:return new cm(T0(t));case ki.BASE64:case ki.BASE64URL:return new cm(A0(s,t));case ki.DATA_URL:return new cm(E2(t),T2(t))}throw xg()}function T0(s){const t=[];for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<s.length-1&&(s.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=r,f=s.charCodeAt(++n);r=65536|(u&1023)<<10|f&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function v2(s){let t;try{t=decodeURIComponent(s)}catch{throw ql(ki.DATA_URL,"Malformed data URL.")}return T0(t)}function A0(s,t){switch(s){case ki.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw ql(s,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ki.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw ql(s,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_2(t)}catch(o){throw o.message.includes("polyfill")?o:ql(s,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class S0{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ql(ki.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=A2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function E2(s){const t=new S0(s);return t.base64?A0(ki.BASE64,t.rest):v2(t.rest)}function T2(s){return new S0(s).contentType}function A2(s,t){return s.length>=t.length?s.substring(s.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n){let r=0,o="";qE(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(qE(this.data_)){const r=this.data_,o=p2(r,t,n);return o===null?null:new or(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new or(r,!0)}}static getBlob(...t){if(kg()){const n=t.map(r=>r instanceof or?r.data_:r);return new or(g2.apply(null,n))}else{const n=t.map(f=>Ug(f)?y2(ki.RAW,f).data:f.data_);let r=0;n.forEach(f=>{r+=f.byteLength});const o=new Uint8Array(r);let u=0;return n.forEach(f=>{for(let g=0;g<f.length;g++)o[u++]=f[g]}),new or(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(s){let t;try{t=JSON.parse(s)}catch{return null}return a2(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function b2(s,t){const n=t.split("/").filter(r=>r.length>0).join("/");return s.length===0?n:s+"/"+n}function R0(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(s,t){return t}class un{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||R2}}let Kc=null;function w2(s){return!Ug(s)||s.length<2?s:R0(s)}function w0(){if(Kc)return Kc;const s=[];s.push(new un("bucket")),s.push(new un("generation")),s.push(new un("metageneration")),s.push(new un("name","fullPath",!0));function t(u,f){return w2(f)}const n=new un("name");n.xform=t,s.push(n);function r(u,f){return f!==void 0?Number(f):f}const o=new un("size");return o.xform=r,s.push(o),s.push(new un("timeCreated")),s.push(new un("updated")),s.push(new un("md5Hash",null,!0)),s.push(new un("cacheControl",null,!0)),s.push(new un("contentDisposition",null,!0)),s.push(new un("contentEncoding",null,!0)),s.push(new un("contentLanguage",null,!0)),s.push(new un("contentType",null,!0)),s.push(new un("metadata","customMetadata",!0)),Kc=s,Kc}function I2(s,t){function n(){const r=s.bucket,o=s.fullPath,u=new Cn(r,o);return t._makeStorageReference(u)}Object.defineProperty(s,"ref",{get:n})}function C2(s,t,n){const r={};r.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];r[f.local]=f.xform(r,t[f.server])}return I2(r,s),r}function I0(s,t,n){const r=b0(t);return r===null?null:C2(s,r,n)}function N2(s,t,n,r){const o=b0(t);if(o===null||!Ug(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(y=>{const A=s.bucket,S=s.fullPath,M="/b/"+f(A)+"/o/"+f(S),G=Lg(M,n,r),Z=E0({alt:"media",token:y});return G+Z})[0]}function D2(s,t){const n={},r=t.length;for(let o=0;o<r;o++){const u=t[o];u.writable&&(n[u.server]=s[u.local])}return JSON.stringify(n)}class C0{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(s){if(!s)throw xg()}function O2(s,t){function n(r,o){const u=I0(s,o,t);return N0(u!==null),u}return n}function V2(s,t){function n(r,o){const u=I0(s,o,t);return N0(u!==null),N2(u,o,s.host,s._protocol)}return n}function D0(s){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=GD():o=FD():n.getStatus()===402?o=HD(s.bucket):n.getStatus()===403?o=KD(s.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function M2(s){const t=D0(s);function n(r,o){let u=t(r,o);return r.getStatus()===404&&(u=qD(s.path)),u.serverResponse=o.serverResponse,u}return n}function x2(s,t,n){const r=t.fullServerUrl(),o=Lg(r,s.host,s._protocol),u="GET",f=s.maxOperationRetryTime,g=new C0(o,u,V2(s,n),f);return g.errorHandler=M2(t),g}function U2(s,t){return s&&s.contentType||t&&t.type()||"application/octet-stream"}function k2(s,t,n){const r=Object.assign({},n);return r.fullPath=s.path,r.size=t.size(),r.contentType||(r.contentType=U2(null,t)),r}function L2(s,t,n,r,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function g(){let mt="";for(let bt=0;bt<2;bt++)mt=mt+Math.random().toString().slice(2);return mt}const _=g();f["Content-Type"]="multipart/related; boundary="+_;const y=k2(t,r,o),A=D2(y,n),S="--"+_+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+A+`\r
--`+_+`\r
Content-Type: `+y.contentType+`\r
\r
`,M=`\r
--`+_+"--",G=or.getBlob(S,r,M);if(G===null)throw ZD();const Z={name:y.fullPath},it=Lg(u,s.host,s._protocol),W="POST",ft=s.maxUploadRetryTime,pt=new C0(it,W,O2(s,n),ft);return pt.urlParams=Z,pt.headers=f,pt.body=G.uploadData(),pt.errorHandler=D0(t),pt}class P2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=sa.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=sa.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=sa.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o,u){if(this.sent_)throw Nl("cannot .send() more than once");if(da(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Nl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Nl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Nl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Nl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class z2 extends P2{initXhr(){this.xhr_.responseType="text"}}function O0(){return new z2}/**
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
 */class fa{constructor(t,n){this._service=t,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new fa(t,n)}get root(){const t=new Cn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return R0(this._location.path)}get storage(){return this._service}get parent(){const t=S2(this._location.path);if(t===null)return null;const n=new Cn(this._location.bucket,t);return new fa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw e2(t)}}function B2(s,t,n){s._throwIfRoot("uploadBytes");const r=L2(s.storage,s._location,w0(),new or(t,!0),n);return s.storage.makeRequestWithTokens(r,O0).then(o=>({metadata:o,ref:s}))}function j2(s){s._throwIfRoot("getDownloadURL");const t=x2(s.storage,s._location,w0());return s.storage.makeRequestWithTokens(t,O0).then(n=>{if(n===null)throw WD();return n})}function q2(s,t){const n=b2(s._location.path,t),r=new Cn(s._location.bucket,n);return new fa(s.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(s){return/^[A-Za-z]+:\/\//.test(s)}function F2(s,t){return new fa(s,t)}function V0(s,t){if(s instanceof Pg){const n=s;if(n._bucket==null)throw $D();const r=new fa(n,n._bucket);return t!=null?V0(r,t):r}else return t!==void 0?q2(s,t):s}function G2(s,t){if(t&&H2(t)){if(s instanceof Pg)return F2(s,t);throw km("To use ref(service, url), the first argument must be a Storage instance.")}else return V0(s,t)}function FE(s,t){const n=t==null?void 0:t[y0];return n==null?null:Cn.makeFromBucketSpec(n,s)}function K2(s,t,n,r={}){s.host=`${t}:${n}`;const o=da(t);o&&Pm(`https://${s.host}/b`),s._isUsingEmulator=!0,s._protocol=o?"https":"http";const{mockUserToken:u}=r;u&&(s._overrideAuthToken=typeof u=="string"?u:nT(u,s.app.options.projectId))}class Pg{constructor(t,n,r,o,u,f=!1){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=_0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BD,this._maxUploadRetryTime=jD,this._requests=new Set,o!=null?this._bucket=Cn.makeFromBucketSpec(o,this._host):this._bucket=FE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,t):this._bucket=FE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){HE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){HE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new fa(this,t)}_makeRequest(t,n,r,o,u=!0){if(this._deleted)return new n2(v0());{const f=d2(t,this._appId,r,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const GE="@firebase/storage",KE="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="storage";function Q2(s,t,n){return s=je(s),B2(s,t,n)}function Y2(s){return s=je(s),j2(s)}function X2(s,t){return s=je(s),G2(s,t)}function J2(s=jm(),t){s=je(s);const r=Rh(s,M0).getImmediate({identifier:t}),o=WE("storage");return o&&$2(r,...o),r}function $2(s,t,n,r={}){K2(s,t,n,r)}function Z2(s,{instanceIdentifier:t}){const n=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),o=s.getProvider("app-check-internal");return new Pg(n,r,o,t,ma)}function W2(){aa(new dr(M0,Z2,"PUBLIC").setMultipleInstances(!0)),Li(GE,KE,""),Li(GE,KE,"esm2020")}W2();const tO={apiKey:void 0,authDomain:"app-mates.firebaseapp.com",projectId:"app-mates",storageBucket:"app-mates.firebasestorage.app",messagingSenderId:"165327798812",appId:"1:165327798812:web:796094047d0632cc4dd5d9",measurementId:"G-7B6WJXEFNG"},zg=rT(tO),xi=uC(zg),Dl=PD(zg),eO=J2(zg),QE="/Serra-d-equacions/assets/logo-Dt7NwLxQ.png",nO="/Serra-d-equacions/assets/logo-instagram-C5Rwnc89.png";function iO(){const[s,t]=le.useState(null),[n,r]=le.useState(null),[o,u]=le.useState(!1),[f,g]=le.useState(""),[_,y]=le.useState(""),[A,S]=le.useState("1r ESO"),[M,G]=le.useState(""),[Z,it]=le.useState([]),[W,ft]=le.useState([]),[pt,mt]=le.useState([]),[bt,Bt]=le.useState(!0),[Ct,I]=le.useState(!1),[b,C]=le.useState(!0),[V,N]=le.useState("1r ESO"),[U,R]=le.useState(""),[Zt,ge]=le.useState([]),[H,et]=le.useState(""),[ct,Vt]=le.useState(""),[qt,O]=le.useState(""),[K,nt]=le.useState(""),[st,vt]=le.useState("Teoria"),[Et,Nt]=le.useState([]),pe="serradequacions@gmail.com",Qt=["1r ESO","2n ESO","3r ESO","4t ESO A","4t ESO B","1r BATX CCSS","1r BATX CIEN.","1r BATX GENERAL","2n BATX CCSS","2n BATX CIEN"],Yn={Teoria:"📚",Exercici:"📝",Vídeo:"🎥",Examen:"🏁"};le.useEffect(()=>{const Y=wN(Dl,async at=>{if(at){t(at);const Wt=await EC(Zc(xi,"usuaris",at.uid));if(Wt.exists()){const Pt=Wt.data();r(Pt),N(Pt.curs||"1r ESO")}else r({email:at.email,curs:"1r ESO"})}else t(null),r(null);Bt(!1)});return()=>Y()},[]),le.useEffect(()=>{if(s){const Y=am(Zr(xi,"materials"),Pt=>{it(Pt.docs.map(se=>({id:se.id,...se.data()})))}),at=am(Zr(xi,"avisos"),Pt=>{ft(Pt.docs.map(se=>({id:se.id,...se.data()})))}),Wt=am(Zr(xi,"entregues"),Pt=>{const se=Pt.docs.map(Dn=>({id:Dn.id,...Dn.data()}));mt(s.email===pe?se:se.filter(Dn=>Dn.alumneEmail===s.email))});return()=>{Y(),at(),Wt()}}},[s]);const Gi=async(Y,at)=>{try{const Pt=(await TC(Zr(xi,"usuaris"))).docs.map(se=>se.data()).filter(se=>se.curs===Y).map(se=>({email:se.email}));Pt.length>0&&await fetch("https://brevo-proxy.serradequacions.workers.dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({destinataris:Pt,curs:Y,text:at})})}catch(Wt){console.error("Error Brevo:",Wt)}},As=async(Y,at,Wt)=>{const Pt=Y.target.files[0];if(Pt){I(!0);try{const se=X2(eO,`entregues/${s.uid}_${at}_${Pt.name}`);await Q2(se,Pt);const Dn=await Y2(se);await rm(Zr(xi,"entregues"),{materialId:at,materialNom:Wt,alumneEmail:s.email,alumneNom:s.displayName||s.email,curs:n.curs,fitxerUrl:Dn,dataEntrega:new Date().toLocaleString("ca-ES"),createdAt:sm()}),alert("✅ Tasca entregada correctament!")}catch(se){alert("Error en la pujada: "+se.message)}finally{I(!1)}}},Ss=async Y=>{Y.preventDefault();const at=K==="nou"||!K?qt:K;if(!at)return alert("Defineix un tema!");for(const Wt of Et)await rm(Zr(xi,"materials"),{nom:H,url:ct,tema:at,categoria:Wt,tipus:st,createdAt:sm()}),Gi(Wt,`Nou material: ${H}`);et(""),Vt(""),O(""),nt(""),Nt([]),alert("🚀 Material publicat i correus enviats!")},Nn=async Y=>{Y.preventDefault();const at=Zt.length>0?Zt:["General"];for(const Wt of at)await rm(Zr(xi,"avisos"),{text:U,curs:Wt,data:new Date().toLocaleDateString("ca-ES"),createdAt:sm()}),Wt!=="General"&&Gi(Wt,U);R(""),ge([]),alert("📢 Avisos enviats!")},bs=async(Y,at)=>{window.confirm("Vols eliminar-ho definitivament?")&&await SC(Zc(xi,Y,at))},Ki=async Y=>{Y.preventDefault();try{if(o){const at=await AN(Dl,f,_);await AC(Zc(xi,"usuaris",at.user.uid),{email:f,curs:A})}else await SN(Dl,f,_)}catch(at){alert(at.message)}};if(bt)return q.jsx("div",{className:"loader-container",children:q.jsx("h2",{children:"Carregant Serra d'Equacions..."})});if(!s)return q.jsx("div",{className:"login-container",children:q.jsxs("div",{className:"login-card",children:[q.jsx("img",{src:QE,alt:"Logo",style:{width:"100px",marginBottom:"20px"}}),q.jsx("h2",{children:o?"Registre Nou Usuari":"Inici de Sessió"}),q.jsxs("button",{onClick:()=>QN(Dl,new ds),className:"login-button google-auth",children:[q.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:""})," Entra amb Google"]}),q.jsx("div",{className:"separator",children:"o amb el teu correu"}),q.jsxs("form",{onSubmit:Ki,children:[q.jsx("input",{className:"login-input",type:"email",placeholder:"Correu electrònic",onChange:Y=>g(Y.target.value),required:!0}),q.jsx("input",{className:"login-input",type:"password",placeholder:"Contrasenya",onChange:Y=>y(Y.target.value),required:!0}),o&&q.jsx("select",{className:"login-input",value:A,onChange:Y=>S(Y.target.value),children:Qt.map(Y=>q.jsx("option",{value:Y,children:Y},Y))}),q.jsx("button",{className:"login-button",type:"submit",children:o?"CREAR COMPTE":"ENTRAR"})]}),q.jsx("p",{onClick:()=>u(!o),className:"toggle-auth-text",children:o?"Ja tens compte? Entra":"Ets nou? Registra't aquí"})]})});const Qi=s.email===pe,Xn=Qi&&!b?V:n==null?void 0:n.curs,de=Z.filter(Y=>Y.categoria===Xn&&(Y.nom||"").toLowerCase().includes(M.toLowerCase())),_e=[...new Set(Z.filter(Y=>Et.includes(Y.categoria)).map(Y=>Y.tema))];return q.jsxs("div",{className:"app-wrapper",children:[q.jsxs("header",{className:"main-header",children:[q.jsxs("div",{className:"top-nav",children:[q.jsxs("div",{className:"logo-section",children:[q.jsx("img",{src:QE,alt:"Logo",className:"header-logo"}),q.jsxs("div",{children:[q.jsx("h1",{children:"Serra d'Equacions"}),q.jsxs("p",{className:"user-badge",children:[s.email," | ",(n==null?void 0:n.curs)||"Admin"]})]})]}),q.jsx("button",{className:"logout-btn",onClick:()=>IN(Dl),children:"Tancar Sessió"})]}),Qi&&q.jsxs("div",{className:"admin-quick-nav",children:[q.jsxs("select",{className:"mode-toggle",value:b?"admin":"alumne",onChange:Y=>C(Y.target.value==="admin"),children:[q.jsx("option",{value:"admin",children:"🔧 PANEL DE GESTIÓ"}),q.jsx("option",{value:"alumne",children:"🎓 VISTA ALUMNE"})]}),!b&&q.jsxs("div",{className:"simulator-box",children:[q.jsx("span",{children:"Simulant curs:"}),q.jsx("select",{value:V,onChange:Y=>N(Y.target.value),children:Qt.map(Y=>q.jsx("option",{value:Y,children:Y},Y))})]})]}),q.jsx("div",{className:"search-container",children:q.jsx("input",{className:"search-bar",type:"text",placeholder:"🔍 Cerca temes, exercicis, vídeos...",onChange:Y=>G(Y.target.value)})})]}),q.jsx("main",{className:"content-area",children:Qi&&b?q.jsxs("section",{className:"admin-dashboard",children:[q.jsxs("div",{className:"dashboard-card full-width",children:[q.jsx("div",{className:"card-header",children:q.jsx("h3",{children:"📥 Bústia d'Entregues (PDFs Alumnes)"})}),q.jsx("div",{className:"table-wrapper",children:q.jsxs("table",{className:"admin-table",children:[q.jsx("thead",{children:q.jsxs("tr",{children:[q.jsx("th",{children:"Data"}),q.jsx("th",{children:"Alumne"}),q.jsx("th",{children:"Curs"}),q.jsx("th",{children:"Activitat"}),q.jsx("th",{children:"Fitxer"})]})}),q.jsx("tbody",{children:pt.sort((Y,at)=>at.createdAt-Y.createdAt).map(Y=>q.jsxs("tr",{children:[q.jsx("td",{children:Y.dataEntrega}),q.jsx("td",{className:"bold",children:Y.alumneEmail}),q.jsx("td",{children:q.jsx("span",{className:"badge-curs",children:Y.curs})}),q.jsx("td",{children:Y.materialNom}),q.jsx("td",{children:q.jsx("a",{href:Y.fitxerUrl,target:"_blank",rel:"noreferrer",className:"view-link",children:"Obrir PDF"})})]},Y.id))})]})})]}),q.jsxs("div",{className:"dashboard-grid",children:[q.jsxs("div",{className:"dashboard-card",children:[q.jsx("h3",{children:"📢 Publicar Avís"}),q.jsx("textarea",{className:"admin-input",value:U,onChange:Y=>R(Y.target.value),placeholder:"Escriu aquí el missatge per als alumnes..."}),q.jsx("p",{className:"small-label",children:"Enviar a:"}),q.jsx("div",{className:"checkbox-selector",children:Qt.map(Y=>q.jsxs("label",{className:"check-item",children:[q.jsx("input",{type:"checkbox",checked:Zt.includes(Y),onChange:()=>{ge(at=>at.includes(Y)?at.filter(Wt=>Wt!==Y):[...at,Y])}})," ",Y]},Y))}),q.jsx("button",{onClick:Nn,className:"btn-primary",children:"ENVIAR AVÍS"})]}),q.jsxs("div",{className:"dashboard-card",children:[q.jsx("h3",{children:"📚 Penjar Nou Material"}),q.jsxs("form",{onSubmit:Ss,className:"admin-form",children:[q.jsx("input",{type:"text",placeholder:"Títol del recurs",value:H,onChange:Y=>et(Y.target.value),required:!0}),q.jsx("input",{type:"text",placeholder:"Enllaç (Drive/Web)",value:ct,onChange:Y=>Vt(Y.target.value),required:!0}),q.jsxs("div",{className:"form-row",children:[q.jsx("select",{value:st,onChange:Y=>vt(Y.target.value),children:Object.keys(Yn).map(Y=>q.jsx("option",{value:Y,children:Y},Y))}),q.jsxs("select",{value:K,onChange:Y=>nt(Y.target.value),children:[q.jsx("option",{value:"",children:"-- Tria tema --"}),q.jsx("option",{value:"nou",children:"+ CREAR NOU"}),_e.map(Y=>q.jsx("option",{value:Y,children:Y},Y))]})]}),(K==="nou"||_e.length===0)&&q.jsx("input",{type:"text",placeholder:"Nom del nou tema",value:qt,onChange:Y=>O(Y.target.value),required:!0}),q.jsx("p",{className:"small-label",children:"Cursos destinataris:"}),q.jsx("div",{className:"checkbox-selector",children:Qt.map(Y=>q.jsxs("label",{className:"check-item",children:[q.jsx("input",{type:"checkbox",checked:Et.includes(Y),onChange:()=>{Nt(at=>at.includes(Y)?at.filter(Wt=>Wt!==Y):[...at,Y])}})," ",Y]},Y))}),q.jsx("button",{type:"submit",className:"btn-primary btn-success",children:"PUBLICAR RECURS"})]})]})]}),q.jsxs("div",{className:"dashboard-card full-width",children:[q.jsx("h3",{children:"📦 Inventari de continguts"}),q.jsx("div",{className:"accordion-container",children:Qt.map(Y=>q.jsxs("details",{className:"admin-accordion",children:[q.jsxs("summary",{children:[q.jsx("strong",{children:Y}),q.jsxs("span",{children:["(",Z.filter(at=>at.categoria===Y).length," fitxers)"]})]}),q.jsxs("div",{className:"accordion-content",children:[Z.filter(at=>at.categoria===Y).map(at=>q.jsxs("div",{className:"manage-row",children:[q.jsxs("span",{children:[Yn[at.tipus]," ",q.jsx("strong",{children:at.nom})," ",q.jsxs("small",{children:["(",at.tema,")"]})]}),q.jsx("button",{onClick:()=>bs("materials",at.id),className:"btn-mini-delete",children:"Eliminar"})]},at.id)),W.filter(at=>at.curs===Y).map(at=>q.jsxs("div",{className:"manage-row aviso-row",children:[q.jsxs("span",{children:["📢 ",at.text.substring(0,40),"..."]}),q.jsx("button",{onClick:()=>bs("avisos",at.id),className:"btn-mini-delete",children:"Eliminar"})]},at.id))]})]},Y))})]})]}):q.jsxs("div",{className:"student-layout",children:[q.jsxs("section",{className:"avisos-section",children:[q.jsx("h2",{className:"section-title",children:"📢 Avisos de classe"}),q.jsx("div",{className:"avisos-grid",children:W.filter(Y=>Y.curs===Xn||Y.curs==="General").length===0?q.jsxs("p",{className:"no-data",children:["No hi ha avisos recents per a ",Xn,"."]}):W.filter(Y=>Y.curs===Xn||Y.curs==="General").map(Y=>q.jsxs("div",{className:"aviso-card",children:[q.jsxs("div",{className:"aviso-header",children:[q.jsx("span",{className:"aviso-tag",children:Y.curs}),q.jsx("span",{className:"aviso-date",children:Y.data})]}),q.jsx("p",{children:Y.text})]},Y.id))})]}),q.jsxs("section",{className:"materials-section",children:[q.jsxs("h2",{className:"section-title",children:["📚 Recursos de ",Xn]}),[...new Set(de.map(Y=>Y.tema||"General"))].sort().map(Y=>q.jsxs("div",{className:"topic-group",children:[q.jsx("h3",{className:"topic-header",children:Y}),q.jsx("div",{className:"materials-list",children:de.filter(at=>(at.tema||"General")===Y).map(at=>{const Wt=pt.find(Pt=>Pt.materialId===at.id);return q.jsxs("div",{className:"material-card",children:[q.jsxs("div",{className:"material-main",onClick:()=>window.open(at.url,"_blank"),children:[q.jsx("div",{className:"type-icon",children:Yn[at.tipus]}),q.jsxs("div",{className:"material-info",children:[q.jsx("h4",{children:at.nom}),q.jsx("p",{children:at.tipus})]})]}),(at.tipus==="Exercici"||at.tipus==="Examen")&&q.jsx("div",{className:"delivery-box",children:Wt?q.jsxs("div",{className:"delivery-status ok",children:[q.jsx("span",{children:"✅ Entregat"}),q.jsx("small",{children:Wt.dataEntrega})]}):q.jsxs("label",{className:"upload-trigger",children:[Ct?"Pujant...":"📤 Enviar la meva feina",q.jsx("input",{type:"file",onChange:Pt=>As(Pt,at.id,at.nom),disabled:Ct,style:{display:"none"}})]})})]},at.id)})})]},Y))]})]})}),q.jsx("footer",{className:"main-footer",children:q.jsxs("div",{className:"footer-content",children:[q.jsxs("div",{className:"footer-links",children:[q.jsxs("a",{href:"https://www.instagram.com/serradequacions/",target:"_blank",rel:"noreferrer",className:"ig-link",children:[q.jsx("img",{src:nO,alt:"Instagram"})," @serradequacions"]}),q.jsx("a",{href:"mailto:serradequacions@gmail.com",className:"mail-link",children:"✉️ Contacte"})]}),q.jsx("div",{className:"footer-info",children:q.jsx("p",{children:"© 2026 Serra d'Equacions | Matemàtiques per a tothom"})})]})})]})}"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(s=>{for(const t of s)t.unregister()}),"caches"in window&&caches.keys().then(s=>{s.forEach(t=>caches.delete(t))}));Tb.createRoot(document.getElementById("root")).render(q.jsx(db.StrictMode,{children:q.jsx(iO,{})}));
