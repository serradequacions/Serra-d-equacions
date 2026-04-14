(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $E(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jd={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function rS(){if(ov)return Hl;ov=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Hl.Fragment=e,Hl.jsx=i,Hl.jsxs=i,Hl}var lv;function aS(){return lv||(lv=1,Jd.exports=rS()),Jd.exports}var E=aS(),$d={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function oS(){if(uv)return Se;uv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.iterator;function Y(V){return V===null||typeof V!="object"?null:(V=M&&V[M]||V["@@iterator"],typeof V=="function"?V:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,re={};function _e(V,X,ne){this.props=V,this.context=X,this.refs=re,this.updater=ne||ee}_e.prototype.isReactComponent={},_e.prototype.setState=function(V,X){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,X,"setState")},_e.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function xe(){}xe.prototype=_e.prototype;function ge(V,X,ne){this.props=V,this.context=X,this.refs=re,this.updater=ne||ee}var it=ge.prototype=new xe;it.constructor=ge,se(it,_e.prototype),it.isPureReactComponent=!0;var Ke=Array.isArray;function Re(){}var N={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function x(V,X,ne){var le=ne.ref;return{$$typeof:s,type:V,key:X,ref:le!==void 0?le:null,props:ne}}function j(V,X){return x(V.type,X,V.props)}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function P(V){var X={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ne){return X[ne]})}var I=/\/+/g;function Ze(V,X){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):X.toString(36)}function Tt(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(Re,Re):(V.status="pending",V.then(function(X){V.status==="pending"&&(V.status="fulfilled",V.value=X)},function(X){V.status==="pending"&&(V.status="rejected",V.reason=X)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function Q(V,X,ne,le,Te){var be=typeof V;(be==="undefined"||be==="boolean")&&(V=null);var Oe=!1;if(V===null)Oe=!0;else switch(be){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(V.$$typeof){case s:case e:Oe=!0;break;case b:return Oe=V._init,Q(Oe(V._payload),X,ne,le,Te)}}if(Oe)return Te=Te(V),Oe=le===""?"."+Ze(V,0):le,Ke(Te)?(ne="",Oe!=null&&(ne=Oe.replace(I,"$&/")+"/"),Q(Te,X,ne,"",function(Vi){return Vi})):Te!=null&&(D(Te)&&(Te=j(Te,ne+(Te.key==null||V&&V.key===Te.key?"":(""+Te.key).replace(I,"$&/")+"/")+Oe)),X.push(Te)),1;Oe=0;var bt=le===""?".":le+":";if(Ke(V))for(var st=0;st<V.length;st++)le=V[st],be=bt+Ze(le,st),Oe+=Q(le,X,ne,be,Te);else if(st=Y(V),typeof st=="function")for(V=st.call(V),st=0;!(le=V.next()).done;)le=le.value,be=bt+Ze(le,st++),Oe+=Q(le,X,ne,be,Te);else if(be==="object"){if(typeof V.then=="function")return Q(Tt(V),X,ne,le,Te);throw X=String(V),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function ie(V,X,ne){if(V==null)return V;var le=[],Te=0;return Q(V,le,"","",function(be){return X.call(ne,be,Te++)}),le}function he(V){if(V._status===-1){var X=V._result;X=X(),X.then(function(ne){(V._status===0||V._status===-1)&&(V._status=1,V._result=ne)},function(ne){(V._status===0||V._status===-1)&&(V._status=2,V._result=ne)}),V._status===-1&&(V._status=0,V._result=X)}if(V._status===1)return V._result.default;throw V._result}var qe=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},Ge={map:ie,forEach:function(V,X,ne){ie(V,function(){X.apply(this,arguments)},ne)},count:function(V){var X=0;return ie(V,function(){X++}),X},toArray:function(V){return ie(V,function(X){return X})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return Se.Activity=R,Se.Children=Ge,Se.Component=_e,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=ge,Se.StrictMode=r,Se.Suspense=g,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,Se.__COMPILER_RUNTIME={__proto__:null,c:function(V){return N.H.useMemoCache(V)}},Se.cache=function(V){return function(){return V.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(V,X,ne){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var le=se({},V.props),Te=V.key;if(X!=null)for(be in X.key!==void 0&&(Te=""+X.key),X)!S.call(X,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&X.ref===void 0||(le[be]=X[be]);var be=arguments.length-2;if(be===1)le.children=ne;else if(1<be){for(var Oe=Array(be),bt=0;bt<be;bt++)Oe[bt]=arguments[bt+2];le.children=Oe}return x(V.type,Te,le)},Se.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},Se.createElement=function(V,X,ne){var le,Te={},be=null;if(X!=null)for(le in X.key!==void 0&&(be=""+X.key),X)S.call(X,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(Te[le]=X[le]);var Oe=arguments.length-2;if(Oe===1)Te.children=ne;else if(1<Oe){for(var bt=Array(Oe),st=0;st<Oe;st++)bt[st]=arguments[st+2];Te.children=bt}if(V&&V.defaultProps)for(le in Oe=V.defaultProps,Oe)Te[le]===void 0&&(Te[le]=Oe[le]);return x(V,be,Te)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:p,render:V}},Se.isValidElement=D,Se.lazy=function(V){return{$$typeof:b,_payload:{_status:-1,_result:V},_init:he}},Se.memo=function(V,X){return{$$typeof:_,type:V,compare:X===void 0?null:X}},Se.startTransition=function(V){var X=N.T,ne={};N.T=ne;try{var le=V(),Te=N.S;Te!==null&&Te(ne,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Re,qe)}catch(be){qe(be)}finally{X!==null&&ne.types!==null&&(X.types=ne.types),N.T=X}},Se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},Se.use=function(V){return N.H.use(V)},Se.useActionState=function(V,X,ne){return N.H.useActionState(V,X,ne)},Se.useCallback=function(V,X){return N.H.useCallback(V,X)},Se.useContext=function(V){return N.H.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V,X){return N.H.useDeferredValue(V,X)},Se.useEffect=function(V,X){return N.H.useEffect(V,X)},Se.useEffectEvent=function(V){return N.H.useEffectEvent(V)},Se.useId=function(){return N.H.useId()},Se.useImperativeHandle=function(V,X,ne){return N.H.useImperativeHandle(V,X,ne)},Se.useInsertionEffect=function(V,X){return N.H.useInsertionEffect(V,X)},Se.useLayoutEffect=function(V,X){return N.H.useLayoutEffect(V,X)},Se.useMemo=function(V,X){return N.H.useMemo(V,X)},Se.useOptimistic=function(V,X){return N.H.useOptimistic(V,X)},Se.useReducer=function(V,X,ne){return N.H.useReducer(V,X,ne)},Se.useRef=function(V){return N.H.useRef(V)},Se.useState=function(V){return N.H.useState(V)},Se.useSyncExternalStore=function(V,X,ne){return N.H.useSyncExternalStore(V,X,ne)},Se.useTransition=function(){return N.H.useTransition()},Se.version="19.2.5",Se}var cv;function Fm(){return cv||(cv=1,$d.exports=oS()),$d.exports}var me=Fm();const lS=$E(me);var Zd={exports:{}},Fl={},Wd={exports:{}},em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function uS(){return hv||(hv=1,(function(s){function e(Q,ie){var he=Q.length;Q.push(ie);e:for(;0<he;){var qe=he-1>>>1,Ge=Q[qe];if(0<l(Ge,ie))Q[qe]=ie,Q[he]=Ge,he=qe;else break e}}function i(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var ie=Q[0],he=Q.pop();if(he!==ie){Q[0]=he;e:for(var qe=0,Ge=Q.length,V=Ge>>>1;qe<V;){var X=2*(qe+1)-1,ne=Q[X],le=X+1,Te=Q[le];if(0>l(ne,he))le<Ge&&0>l(Te,ne)?(Q[qe]=Te,Q[le]=he,qe=le):(Q[qe]=ne,Q[X]=he,qe=X);else if(le<Ge&&0>l(Te,he))Q[qe]=Te,Q[le]=he,qe=le;else break e}}return ie}function l(Q,ie){var he=Q.sortIndex-ie.sortIndex;return he!==0?he:Q.id-ie.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var g=[],_=[],b=1,R=null,M=3,Y=!1,ee=!1,se=!1,re=!1,_e=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function it(Q){for(var ie=i(_);ie!==null;){if(ie.callback===null)r(_);else if(ie.startTime<=Q)r(_),ie.sortIndex=ie.expirationTime,e(g,ie);else break;ie=i(_)}}function Ke(Q){if(se=!1,it(Q),!ee)if(i(g)!==null)ee=!0,Re||(Re=!0,P());else{var ie=i(_);ie!==null&&Tt(Ke,ie.startTime-Q)}}var Re=!1,N=-1,S=5,x=-1;function j(){return re?!0:!(s.unstable_now()-x<S)}function D(){if(re=!1,Re){var Q=s.unstable_now();x=Q;var ie=!0;try{e:{ee=!1,se&&(se=!1,xe(N),N=-1),Y=!0;var he=M;try{t:{for(it(Q),R=i(g);R!==null&&!(R.expirationTime>Q&&j());){var qe=R.callback;if(typeof qe=="function"){R.callback=null,M=R.priorityLevel;var Ge=qe(R.expirationTime<=Q);if(Q=s.unstable_now(),typeof Ge=="function"){R.callback=Ge,it(Q),ie=!0;break t}R===i(g)&&r(g),it(Q)}else r(g);R=i(g)}if(R!==null)ie=!0;else{var V=i(_);V!==null&&Tt(Ke,V.startTime-Q),ie=!1}}break e}finally{R=null,M=he,Y=!1}ie=void 0}}finally{ie?P():Re=!1}}}var P;if(typeof ge=="function")P=function(){ge(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ze=I.port2;I.port1.onmessage=D,P=function(){Ze.postMessage(null)}}else P=function(){_e(D,0)};function Tt(Q,ie){N=_e(function(){Q(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return M},s.unstable_next=function(Q){switch(M){case 1:case 2:case 3:var ie=3;break;default:ie=M}var he=M;M=ie;try{return Q()}finally{M=he}},s.unstable_requestPaint=function(){re=!0},s.unstable_runWithPriority=function(Q,ie){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var he=M;M=Q;try{return ie()}finally{M=he}},s.unstable_scheduleCallback=function(Q,ie,he){var qe=s.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?qe+he:qe):he=qe,Q){case 1:var Ge=-1;break;case 2:Ge=250;break;case 5:Ge=1073741823;break;case 4:Ge=1e4;break;default:Ge=5e3}return Ge=he+Ge,Q={id:b++,callback:ie,priorityLevel:Q,startTime:he,expirationTime:Ge,sortIndex:-1},he>qe?(Q.sortIndex=he,e(_,Q),i(g)===null&&Q===i(_)&&(se?(xe(N),N=-1):se=!0,Tt(Ke,he-qe))):(Q.sortIndex=Ge,e(g,Q),ee||Y||(ee=!0,Re||(Re=!0,P()))),Q},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Q){var ie=M;return function(){var he=M;M=ie;try{return Q.apply(this,arguments)}finally{M=he}}}})(em)),em}var fv;function cS(){return fv||(fv=1,Wd.exports=uS()),Wd.exports}var tm={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function hS(){if(dv)return cn;dv=1;var s=Fm();function e(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)_+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,_,b){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:R==null?null:""+R,children:g,containerInfo:_,implementation:b}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,cn.createPortal=function(g,_){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return c(g,_,null,b)},cn.flushSync=function(g){var _=d.T,b=r.p;try{if(d.T=null,r.p=2,g)return g()}finally{d.T=_,r.p=b,r.d.f()}},cn.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(g,_))},cn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},cn.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var b=_.as,R=p(b,_.crossOrigin),M=typeof _.integrity=="string"?_.integrity:void 0,Y=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;b==="style"?r.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:R,integrity:M,fetchPriority:Y}):b==="script"&&r.d.X(g,{crossOrigin:R,integrity:M,fetchPriority:Y,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},cn.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var b=p(_.as,_.crossOrigin);r.d.M(g,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(g)},cn.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var b=_.as,R=p(b,_.crossOrigin);r.d.L(g,b,{crossOrigin:R,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},cn.preloadModule=function(g,_){if(typeof g=="string")if(_){var b=p(_.as,_.crossOrigin);r.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(g)},cn.requestFormReset=function(g){r.d.r(g)},cn.unstable_batchedUpdates=function(g,_){return g(_)},cn.useFormState=function(g,_,b){return d.H.useFormState(g,_,b)},cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},cn.version="19.2.5",cn}var mv;function fS(){if(mv)return tm.exports;mv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),tm.exports=hS(),tm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function dS(){if(pv)return Fl;pv=1;var s=cS(),e=Fm(),i=fS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return g(h),t;if(f===o)return g(h),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=h,o=f;else{for(var y=!1,T=h.child;T;){if(T===a){y=!0,a=h,o=f;break}if(T===o){y=!0,o=h,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,o=h;break}if(T===o){y=!0,o=f,a=h;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var R=Object.assign,M=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),xe=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function Ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case se:return"Fragment";case _e:return"Profiler";case re:return"StrictMode";case Ke:return"Suspense";case Re:return"SuspenseList";case x:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ee:return"Portal";case ge:return t.displayName||"Context";case xe:return(t._context.displayName||"Context")+".Consumer";case it:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:Ze(t.type)||"Memo";case S:n=t._payload,t=t._init;try{return Ze(t(n))}catch{}}return null}var Tt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},qe=[],Ge=-1;function V(t){return{current:t}}function X(t){0>Ge||(t.current=qe[Ge],qe[Ge]=null,Ge--)}function ne(t,n){Ge++,qe[Ge]=t.current,t.current=n}var le=V(null),Te=V(null),be=V(null),Oe=V(null);function bt(t,n){switch(ne(be,n),ne(Te,t),ne(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N_(n),t=D_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(le),ne(le,t)}function st(){X(le),X(Te),X(be)}function Vi(t){t.memoizedState!==null&&ne(Oe,t);var n=le.current,a=D_(n,t.type);n!==a&&(ne(Te,t),ne(le,a))}function Mi(t){Te.current===t&&(X(le),X(Te)),Oe.current===t&&(X(Oe),Ul._currentValue=he)}var ss,ji;function gn(t){if(ss===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ss=n&&n[1]||"",ji=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ss+t+ji}var Qr=!1;function gi(t,n){if(!t||Qr)return"";Qr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(F){var B=F}Reflect.construct(t,[],$)}else{try{$.call()}catch(F){B=F}t.call($.prototype)}}else{try{throw Error()}catch(F){B=F}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var C=y.split(`
`),z=T.split(`
`);for(h=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(o===C.length||h===z.length)for(o=C.length-1,h=z.length-1;1<=o&&0<=h&&C[o]!==z[h];)h--;for(;1<=o&&0<=h;o--,h--)if(C[o]!==z[h]){if(o!==1||h!==1)do if(o--,h--,0>h||C[o]!==z[h]){var G=`
`+C[o].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=o&&0<=h);break}}}finally{Qr=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gn(a):""}function qs(t,n){switch(t.tag){case 26:case 27:case 5:return gn(t.type);case 16:return gn("Lazy");case 13:return t.child!==n&&n!==null?gn("Suspense Fallback"):gn("Suspense");case 19:return gn("SuspenseList");case 0:case 15:return gi(t.type,!1);case 11:return gi(t.type.render,!1);case 1:return gi(t.type,!0);case 31:return gn("Activity");default:return""}}function yi(t){try{var n="",a=null;do n+=qs(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var At=Object.prototype.hasOwnProperty,St=s.unstable_scheduleCallback,_i=s.unstable_cancelCallback,ka=s.unstable_shouldYield,Yr=s.unstable_requestPaint,De=s.unstable_now,jt=s.unstable_getCurrentPriorityLevel,ki=s.unstable_ImmediatePriority,rs=s.unstable_UserBlockingPriority,Vn=s.unstable_NormalPriority,Kr=s.unstable_LowPriority,ln=s.unstable_IdlePriority,Zt=s.log,vi=s.unstable_setDisableYieldValue,un=null,wt=null;function Tn(t){if(typeof Zt=="function"&&vi(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(un,t)}catch{}}var mt=Math.clz32?Math.clz32:Xr,Hs=Math.log,as=Math.LN2;function Xr(t){return t>>>=0,t===0?32:31-(Hs(t)/as|0)|0}var Mn=256,Pi=262144,Rt=4194304;function jn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kn(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var h=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?h=jn(o):(y&=T,y!==0?h=jn(y):a||(a=T&~t,a!==0&&(h=jn(a))))):(T=o&~f,T!==0?h=jn(T):y!==0?h=jn(y):a||(a=o&~t,a!==0&&(h=jn(a)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:h}function yn(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function os(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Kn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ls(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xo(t,n,a,o,h,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,z=t.hiddenUpdates;for(a=y&~a;0<a;){var G=31-mt(a),$=1<<G;T[G]=0,C[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var F=B[G];F!==null&&(F.lane&=-536870913)}a&=~$}o!==0&&us(t,o,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function us(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-mt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Fs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-mt(a),h=1<<o;h&n|t[o]&n&&(t[o]|=n),a&=~h}}function $r(t,n){var a=n&-n;return a=(a&42)!==0?1:cs(a),(a&(t.suspendedLanes|n))!==0?0:a}function cs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zr(){var t=ie.p;return t!==0?t:(t=window.event,t===void 0?32:ev(t.type))}function Pn(t,n){var a=ie.p;try{return ie.p=t,n()}finally{ie.p=a}}var Ln=Math.random().toString(36).slice(2),It="__reactFiber$"+Ln,kt="__reactProps$"+Ln,Jn="__reactContainer$"+Ln,Gs="__reactEvents$"+Ln,Jo="__reactListeners$"+Ln,Pa="__reactHandles$"+Ln,La="__reactResources$"+Ln,$n="__reactMarker$"+Ln;function Qs(t){delete t[It],delete t[kt],delete t[Gs],delete t[Jo],delete t[Pa]}function Zn(t){var n=t[It];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Jn]||a[It]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=L_(t);t!==null;){if(a=t[It])return a;t=L_(t)}return n}t=a,a=t.parentNode}return null}function bn(t){if(t=t[It]||t[Jn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _n(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Wn(t){var n=t[La];return n||(n=t[La]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pt(t){t[$n]=!0}var w=new Set,q={};function W(t,n){ae(t,n),ae(t+"Capture",n)}function ae(t,n){for(q[t]=n,t=0;t<n.length;t++)w.add(n[t])}var je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},_t={};function An(t){return At.call(_t,t)?!0:At.call(ke,t)?!1:je.test(t)?_t[t]=!0:(ke[t]=!0,!1)}function Ei(t,n,a){if(An(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function vt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ys(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $o(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function et(t){if(!t._valueTracker){var n=Ys(t)?"checked":"value";t._valueTracker=$o(t,n,""+t[n])}}function Wr(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ys(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ea=/[\n"\\]/g;function Sn(t){return t.replace(ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ua(t,n,a,o,h,f,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Kt(n)):t.value!==""+Kt(n)&&(t.value=""+Kt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Zo(t,y,Kt(n)):a!=null?Zo(t,y,Kt(a)):o!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Kt(T):t.removeAttribute("name")}function Ou(t,n,a,o,h,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){et(t);return}a=a!=null?""+Kt(a):"",n=n!=null?""+Kt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),et(t)}function Zo(t,n,a){n==="number"&&Li(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ks(t,n,a,o){if(t=t.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=n.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Kt(a),n=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,o&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function Vu(t,n,a){if(n!=null&&(n=""+Kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Kt(a):""}function Xs(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Tt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Kt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),et(t)}function wn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wo(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Mu.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function el(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&Wo(t,h,o)}else for(var f in n)n.hasOwnProperty(f)&&Wo(t,f,n[f])}function za(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Js=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ba(t){return Js.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ti(){}var tl=null;function ei(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,Ui=null;function ta(t){var n=bn(t);if(n&&(t=n.stateNode)){var a=t[kt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ua(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var h=o[kt]||null;if(!h)throw Error(r(90));Ua(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Wr(o)}break e;case"textarea":Vu(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ks(t,!!a.multiple,n,!1)}}}var qa=!1;function Zs(t,n,a){if(qa)return t(n,a);qa=!0;try{var o=t(n);return o}finally{if(qa=!1,($s!==null||Ui!==null)&&(Cc(),$s&&(n=$s,t=Ui,Ui=$s=null,ta(n),t)))for(n=0;n<t.length;n++)ta(t[n])}}function bi(t,n){var a=t.stateNode;if(a===null)return null;var o=a[kt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=!1;if(ti)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){na=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{na=!1}var zi=null,nl=null,ia=null;function il(){if(ia)return ia;var t,n=nl,a=n.length,o,h="value"in zi?zi.value:zi.textContent,f=h.length;for(t=0;t<a&&n[t]===h[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===h[f-o];o++);return ia=h.slice(t,1<o?1-o:void 0)}function sa(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hs(){return!0}function Ai(){return!1}function Wt(t){function n(a,o,h,f,y){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hs:Ai,this.isPropagationStopped=Ai,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Wt(fs),Ws=R({},fs,{view:0,detail:0}),sl=Wt(Ws),er,Ha,qi,Fa=R({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(er=t.screenX-qi.screenX,Ha=t.screenY-qi.screenY):Ha=er=0,qi=t),er)},movementY:function(t){return"movementY"in t?t.movementY:Ha}}),rl=Wt(Fa),ra=R({},Fa,{dataTransfer:0}),ku=Wt(ra),Pu=R({},Ws,{relatedTarget:0}),aa=Wt(Pu),al=R({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lu=Wt(al),Ga=R({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uu=Wt(Ga),zu=R({},fs,{data:0}),Hi=Wt(zu),Bu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fu(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hu[t])?!!n[t]:!1}function tr(){return Fu}var vn=R({},Ws,{key:function(t){if(t.key){var n=Bu[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gu=Wt(vn),Qu=R({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=Wt(Qu),u=R({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),m=Wt(u),v=R({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Wt(v),L=R({},Fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H=Wt(L),te=R({},fs,{newState:0,oldState:0}),Ie=Wt(te),Dt=[9,13,27,32],Xe=ti&&"CompositionEvent"in window,gt=null;ti&&"documentMode"in document&&(gt=document.documentMode);var ni=ti&&"TextEvent"in window&&!gt,Fi=ti&&(!Xe||gt&&8<gt&&11>=gt),Si=" ",wi=!1;function oa(t,n){switch(t){case"keyup":return Dt.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function xb(t,n){switch(t){case"compositionend":return Qa(n);case"keypress":return n.which!==32?null:(wi=!0,Si);case"textInput":return t=n.data,t===Si&&wi?null:t;default:return null}}function Nb(t,n){if(Ya)return t==="compositionend"||!Xe&&oa(t,n)?(t=il(),ia=nl=zi=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fi&&n.locale!=="ko"?null:n.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Db[t.type]:n==="textarea"}function qp(t,n,a,o){$s?Ui?Ui.push(o):Ui=[o]:$s=o,n=jc(n,"onChange"),0<n.length&&(a=new Bi("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ol=null,ll=null;function Ob(t){S_(t,0)}function Yu(t){var n=_n(t);if(Wr(n))return t}function Hp(t,n){if(t==="change")return n}var Fp=!1;if(ti){var nf;if(ti){var sf="oninput"in document;if(!sf){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),sf=typeof Gp.oninput=="function"}nf=sf}else nf=!1;Fp=nf&&(!document.documentMode||9<document.documentMode)}function Qp(){ol&&(ol.detachEvent("onpropertychange",Yp),ll=ol=null)}function Yp(t){if(t.propertyName==="value"&&Yu(ll)){var n=[];qp(n,ll,t,ei(t)),Zs(Ob,n)}}function Vb(t,n,a){t==="focusin"?(Qp(),ol=n,ll=a,ol.attachEvent("onpropertychange",Yp)):t==="focusout"&&Qp()}function Mb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(ll)}function jb(t,n){if(t==="click")return Yu(n)}function kb(t,n){if(t==="input"||t==="change")return Yu(n)}function Pb(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Un=typeof Object.is=="function"?Object.is:Pb;function ul(t,n){if(Un(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!At.call(n,h)||!Un(t[h],n[h]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,n){var a=Kp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Li(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Li(t.document)}return n}function rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Lb=ti&&"documentMode"in document&&11>=document.documentMode,Ka=null,af=null,cl=null,of=!1;function Zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||Ka==null||Ka!==Li(o)||(o=Ka,"selectionStart"in o&&rf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),cl&&ul(cl,o)||(cl=o,o=jc(af,"onSelect"),0<o.length&&(n=new Bi("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ka)))}function la(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xa={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},lf={},Wp={};ti&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function ua(t){if(lf[t])return lf[t];if(!Xa[t])return t;var n=Xa[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return lf[t]=n[a];return t}var eg=ua("animationend"),tg=ua("animationiteration"),ng=ua("animationstart"),Ub=ua("transitionrun"),zb=ua("transitionstart"),Bb=ua("transitioncancel"),ig=ua("transitionend"),sg=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function Ri(t,n){sg.set(t,n),W(n,[t])}var Ku=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Ja=0,cf=0;function Xu(){for(var t=Ja,n=cf=Ja=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var h=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&h!==null){var y=o.pending;y===null?h.next=h:(h.next=y.next,y.next=h),o.pending=h}f!==0&&rg(a,h,f)}}function Ju(t,n,a,o){ii[Ja++]=t,ii[Ja++]=n,ii[Ja++]=a,ii[Ja++]=o,cf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function hf(t,n,a,o){return Ju(t,n,a,o),$u(t)}function ca(t,n){return Ju(t,null,null,n),$u(t)}function rg(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&n!==null&&(h=31-mt(a),t=f.hiddenUpdates,o=t[h],o===null?t[h]=[n]:o.push(n),n.lane=a|536870912),f):null}function $u(t){if(50<Ol)throw Ol=0,Ed=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $a={};function qb(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,n,a,o){return new qb(t,n,a,o)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ms(t,n){var a=t.alternate;return a===null?(a=zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ag(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zu(t,n,a,o,h,f){var y=0;if(o=t,typeof t=="function")ff(t)&&(y=1);else if(typeof t=="string")y=YA(t,a,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case x:return t=zn(31,a,n,h),t.elementType=x,t.lanes=f,t;case se:return ha(a.children,h,f,n);case re:y=8,h|=24;break;case _e:return t=zn(12,a,n,h|2),t.elementType=_e,t.lanes=f,t;case Ke:return t=zn(13,a,n,h),t.elementType=Ke,t.lanes=f,t;case Re:return t=zn(19,a,n,h),t.elementType=Re,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:y=10;break e;case xe:y=9;break e;case it:y=11;break e;case N:y=14;break e;case S:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=zn(y,a,n,h),n.elementType=t,n.type=o,n.lanes=f,n}function ha(t,n,a,o){return t=zn(7,t,o,n),t.lanes=a,t}function df(t,n,a){return t=zn(6,t,null,n),t.lanes=a,t}function og(t){var n=zn(18,null,null,0);return n.stateNode=t,n}function mf(t,n,a){return n=zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lg=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=lg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:yi(n)},lg.set(t,n),n)}return{value:t,source:n,stack:yi(n)}}var Za=[],Wa=0,Wu=null,hl=0,ri=[],ai=0,nr=null,Gi=1,Qi="";function ps(t,n){Za[Wa++]=hl,Za[Wa++]=Wu,Wu=t,hl=n}function ug(t,n,a){ri[ai++]=Gi,ri[ai++]=Qi,ri[ai++]=nr,nr=t;var o=Gi;t=Qi;var h=32-mt(o)-1;o&=~(1<<h),a+=1;var f=32-mt(n)+h;if(30<f){var y=h-h%5;f=(o&(1<<y)-1).toString(32),o>>=y,h-=y,Gi=1<<32-mt(n)+h|a<<h|o,Qi=f+t}else Gi=1<<f|a<<h|o,Qi=t}function pf(t){t.return!==null&&(ps(t,1),ug(t,1,0))}function gf(t){for(;t===Wu;)Wu=Za[--Wa],Za[Wa]=null,hl=Za[--Wa],Za[Wa]=null;for(;t===nr;)nr=ri[--ai],ri[ai]=null,Qi=ri[--ai],ri[ai]=null,Gi=ri[--ai],ri[ai]=null}function cg(t,n){ri[ai++]=Gi,ri[ai++]=Qi,ri[ai++]=nr,Gi=n.id,Qi=n.overflow,nr=t}var en=null,ht=null,He=!1,ir=null,oi=!1,yf=Error(r(519));function sr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(si(n,t)),yf}function hg(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[It]=t,n[kt]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)Me(Ml[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Ou(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Xs(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Ti),n=!0):n=!1,n||sr(t,!0)}function fg(t){for(en=t.return;en;)switch(en.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:en=en.return}}function eo(t){if(t!==en)return!1;if(!He)return fg(t),He=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jd(t.type,t.memoizedProps)),a=!a),a&&ht&&sr(t),fg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ht=P_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ht=P_(t)}else n===27?(n=ht,_r(t.type)?(t=zd,zd=null,ht=t):ht=n):ht=en?ui(t.stateNode.nextSibling):null;return!0}function fa(){ht=en=null,He=!1}function _f(){var t=ir;return t!==null&&(xn===null?xn=t:xn.push.apply(xn,t),ir=null),t}function fl(t){ir===null?ir=[t]:ir.push(t)}var vf=V(null),da=null,gs=null;function rr(t,n,a){ne(vf,n._currentValue),n._currentValue=a}function ys(t){t._currentValue=vf.current,X(vf)}function Ef(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Tf(t,n,a,o){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var y=h.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=h;for(var C=0;C<n.length;C++)if(T.context===n[C]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ef(f.return,a,t),o||(y=null);break e}f=T.next}}else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ef(y,a,t),y=null}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}}function to(t,n,a,o){t=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var y=h.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=h.type;Un(h.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(h===Oe.current){if(y=h.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}h=h.return}t!==null&&Tf(n,t,a,o),n.flags|=262144}function ec(t){for(t=t.firstContext;t!==null;){if(!Un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ma(t){da=t,gs=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function tn(t){return dg(da,t)}function tc(t,n){return da===null&&ma(t),dg(t,n)}function dg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},gs===null){if(t===null)throw Error(r(308));gs=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else gs=gs.next=n;return a}var Hb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Fb=s.unstable_scheduleCallback,Gb=s.unstable_NormalPriority,Pt={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new Hb,data:new Map,refCount:0}}function dl(t){t.refCount--,t.refCount===0&&Fb(Gb,function(){t.controller.abort()})}var ml=null,Af=0,no=0,io=null;function Qb(t,n){if(ml===null){var a=ml=[];Af=0,no=Rd(),io={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Af++,n.then(mg,mg),n}function mg(){if(--Af===0&&ml!==null){io!==null&&(io.status="fulfilled");var t=ml;ml=null,no=0,io=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Yb(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var pg=Q.S;Q.S=function(t,n){Zy=De(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qb(t,n),pg!==null&&pg(t,n)};var pa=V(null);function Sf(){var t=pa.current;return t!==null?t:ut.pooledCache}function nc(t,n){n===null?ne(pa,pa.current):ne(pa,n.pool)}function gg(){var t=Sf();return t===null?null:{parent:Pt._currentValue,pool:t}}var so=Error(r(460)),wf=Error(r(474)),ic=Error(r(542)),sc={then:function(){}};function yg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _g(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ti,Ti),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Eg(t),t;default:if(typeof n.status=="string")n.then(Ti,Ti);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Eg(t),t}throw ya=n,so}}function ga(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ya=a,so):a}}var ya=null;function vg(){if(ya===null)throw Error(r(459));var t=ya;return ya=null,t}function Eg(t){if(t===so||t===ic)throw Error(r(483))}var ro=null,pl=0;function rc(t){var n=pl;return pl+=1,ro===null&&(ro=[]),_g(ro,t,n)}function gl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===M?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Tg(t){function n(k,O){if(t){var U=k.deletions;U===null?(k.deletions=[O],k.flags|=16):U.push(O)}}function a(k,O){if(!t)return null;for(;O!==null;)n(k,O),O=O.sibling;return null}function o(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=ms(k,O),k.index=0,k.sibling=null,k}function f(k,O,U){return k.index=U,t?(U=k.alternate,U!==null?(U=U.index,U<O?(k.flags|=67108866,O):U):(k.flags|=67108866,O)):(k.flags|=1048576,O)}function y(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function T(k,O,U,K){return O===null||O.tag!==6?(O=df(U,k.mode,K),O.return=k,O):(O=h(O,U),O.return=k,O)}function C(k,O,U,K){var de=U.type;return de===se?G(k,O,U.props.children,K,U.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===S&&ga(de)===O.type)?(O=h(O,U.props),gl(O,U),O.return=k,O):(O=Zu(U.type,U.key,U.props,null,k.mode,K),gl(O,U),O.return=k,O)}function z(k,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=mf(U,k.mode,K),O.return=k,O):(O=h(O,U.children||[]),O.return=k,O)}function G(k,O,U,K,de){return O===null||O.tag!==7?(O=ha(U,k.mode,K,de),O.return=k,O):(O=h(O,U),O.return=k,O)}function $(k,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=df(""+O,k.mode,U),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Y:return U=Zu(O.type,O.key,O.props,null,k.mode,U),gl(U,O),U.return=k,U;case ee:return O=mf(O,k.mode,U),O.return=k,O;case S:return O=ga(O),$(k,O,U)}if(Tt(O)||P(O))return O=ha(O,k.mode,U,null),O.return=k,O;if(typeof O.then=="function")return $(k,rc(O),U);if(O.$$typeof===ge)return $(k,tc(k,O),U);ac(k,O)}return null}function B(k,O,U,K){var de=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return de!==null?null:T(k,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Y:return U.key===de?C(k,O,U,K):null;case ee:return U.key===de?z(k,O,U,K):null;case S:return U=ga(U),B(k,O,U,K)}if(Tt(U)||P(U))return de!==null?null:G(k,O,U,K,null);if(typeof U.then=="function")return B(k,O,rc(U),K);if(U.$$typeof===ge)return B(k,O,tc(k,U),K);ac(k,U)}return null}function F(k,O,U,K,de){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return k=k.get(U)||null,T(O,k,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Y:return k=k.get(K.key===null?U:K.key)||null,C(O,k,K,de);case ee:return k=k.get(K.key===null?U:K.key)||null,z(O,k,K,de);case S:return K=ga(K),F(k,O,U,K,de)}if(Tt(K)||P(K))return k=k.get(U)||null,G(O,k,K,de,null);if(typeof K.then=="function")return F(k,O,U,rc(K),de);if(K.$$typeof===ge)return F(k,O,U,tc(O,K),de);ac(O,K)}return null}function ce(k,O,U,K){for(var de=null,Qe=null,fe=O,Ne=O=0,Le=null;fe!==null&&Ne<U.length;Ne++){fe.index>Ne?(Le=fe,fe=null):Le=fe.sibling;var Ye=B(k,fe,U[Ne],K);if(Ye===null){fe===null&&(fe=Le);break}t&&fe&&Ye.alternate===null&&n(k,fe),O=f(Ye,O,Ne),Qe===null?de=Ye:Qe.sibling=Ye,Qe=Ye,fe=Le}if(Ne===U.length)return a(k,fe),He&&ps(k,Ne),de;if(fe===null){for(;Ne<U.length;Ne++)fe=$(k,U[Ne],K),fe!==null&&(O=f(fe,O,Ne),Qe===null?de=fe:Qe.sibling=fe,Qe=fe);return He&&ps(k,Ne),de}for(fe=o(fe);Ne<U.length;Ne++)Le=F(fe,k,Ne,U[Ne],K),Le!==null&&(t&&Le.alternate!==null&&fe.delete(Le.key===null?Ne:Le.key),O=f(Le,O,Ne),Qe===null?de=Le:Qe.sibling=Le,Qe=Le);return t&&fe.forEach(function(Ar){return n(k,Ar)}),He&&ps(k,Ne),de}function ye(k,O,U,K){if(U==null)throw Error(r(151));for(var de=null,Qe=null,fe=O,Ne=O=0,Le=null,Ye=U.next();fe!==null&&!Ye.done;Ne++,Ye=U.next()){fe.index>Ne?(Le=fe,fe=null):Le=fe.sibling;var Ar=B(k,fe,Ye.value,K);if(Ar===null){fe===null&&(fe=Le);break}t&&fe&&Ar.alternate===null&&n(k,fe),O=f(Ar,O,Ne),Qe===null?de=Ar:Qe.sibling=Ar,Qe=Ar,fe=Le}if(Ye.done)return a(k,fe),He&&ps(k,Ne),de;if(fe===null){for(;!Ye.done;Ne++,Ye=U.next())Ye=$(k,Ye.value,K),Ye!==null&&(O=f(Ye,O,Ne),Qe===null?de=Ye:Qe.sibling=Ye,Qe=Ye);return He&&ps(k,Ne),de}for(fe=o(fe);!Ye.done;Ne++,Ye=U.next())Ye=F(fe,k,Ne,Ye.value,K),Ye!==null&&(t&&Ye.alternate!==null&&fe.delete(Ye.key===null?Ne:Ye.key),O=f(Ye,O,Ne),Qe===null?de=Ye:Qe.sibling=Ye,Qe=Ye);return t&&fe.forEach(function(sS){return n(k,sS)}),He&&ps(k,Ne),de}function lt(k,O,U,K){if(typeof U=="object"&&U!==null&&U.type===se&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Y:e:{for(var de=U.key;O!==null;){if(O.key===de){if(de=U.type,de===se){if(O.tag===7){a(k,O.sibling),K=h(O,U.props.children),K.return=k,k=K;break e}}else if(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===S&&ga(de)===O.type){a(k,O.sibling),K=h(O,U.props),gl(K,U),K.return=k,k=K;break e}a(k,O);break}else n(k,O);O=O.sibling}U.type===se?(K=ha(U.props.children,k.mode,K,U.key),K.return=k,k=K):(K=Zu(U.type,U.key,U.props,null,k.mode,K),gl(K,U),K.return=k,k=K)}return y(k);case ee:e:{for(de=U.key;O!==null;){if(O.key===de)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(k,O.sibling),K=h(O,U.children||[]),K.return=k,k=K;break e}else{a(k,O);break}else n(k,O);O=O.sibling}K=mf(U,k.mode,K),K.return=k,k=K}return y(k);case S:return U=ga(U),lt(k,O,U,K)}if(Tt(U))return ce(k,O,U,K);if(P(U)){if(de=P(U),typeof de!="function")throw Error(r(150));return U=de.call(U),ye(k,O,U,K)}if(typeof U.then=="function")return lt(k,O,rc(U),K);if(U.$$typeof===ge)return lt(k,O,tc(k,U),K);ac(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(k,O.sibling),K=h(O,U),K.return=k,k=K):(a(k,O),K=df(U,k.mode,K),K.return=k,k=K),y(k)):a(k,O)}return function(k,O,U,K){try{pl=0;var de=lt(k,O,U,K);return ro=null,de}catch(fe){if(fe===so||fe===ic)throw fe;var Qe=zn(29,fe,null,k.mode);return Qe.lanes=K,Qe.return=k,Qe}finally{}}}var _a=Tg(!0),bg=Tg(!1),ar=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function or(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function lr(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=$u(t),rg(t,null,a),n}return Ju(t,o,n,a),$u(t)}function yl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fs(t,a)}}function Cf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?h=f=n:f=f.next=n}else h=f=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xf=!1;function _l(){if(xf){var t=io;if(t!==null)throw t}}function vl(t,n,a,o){xf=!1;var h=t.updateQueue;ar=!1;var f=h.firstBaseUpdate,y=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,z=C.next;C.next=null,y===null?f=z:y.next=z,y=C;var G=t.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==y&&(T===null?G.firstBaseUpdate=z:T.next=z,G.lastBaseUpdate=C))}if(f!==null){var $=h.baseState;y=0,G=z=C=null,T=f;do{var B=T.lane&-536870913,F=B!==T.lane;if(F?(Pe&B)===B:(o&B)===B){B!==0&&B===no&&(xf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ce=t,ye=T;B=n;var lt=a;switch(ye.tag){case 1:if(ce=ye.payload,typeof ce=="function"){$=ce.call(lt,$,B);break e}$=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ye.payload,B=typeof ce=="function"?ce.call(lt,$,B):ce,B==null)break e;$=R({},$,B);break e;case 2:ar=!0}}B=T.callback,B!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[B]:F.push(B))}else F={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(z=G=F,C=$):G=G.next=F,y|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;F=T,T=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);G===null&&(C=$),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=G,f===null&&(h.shared.lanes=0),dr|=y,t.lanes=y,t.memoizedState=$}}function Ag(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ag(a[t],n)}var ao=V(null),oc=V(0);function wg(t,n){t=Rs,ne(oc,t),ne(ao,n),Rs=t|n.baseLanes}function Nf(){ne(oc,Rs),ne(ao,ao.current)}function Df(){Rs=oc.current,X(ao),X(oc)}var Bn=V(null),li=null;function ur(t){var n=t.alternate;ne(Ot,Ot.current&1),ne(Bn,t),li===null&&(n===null||ao.current!==null||n.memoizedState!==null)&&(li=t)}function Of(t){ne(Ot,Ot.current),ne(Bn,t),li===null&&(li=t)}function Rg(t){t.tag===22?(ne(Ot,Ot.current),ne(Bn,t),li===null&&(li=t)):cr()}function cr(){ne(Ot,Ot.current),ne(Bn,Bn.current)}function qn(t){X(Bn),li===t&&(li=null),X(Ot)}var Ot=V(0);function lc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ld(a)||Ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _s=0,Ce=null,at=null,Lt=null,uc=!1,oo=!1,va=!1,cc=0,El=0,lo=null,Kb=0;function Ct(){throw Error(r(321))}function Vf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Un(t[a],n[a]))return!1;return!0}function Mf(t,n,a,o,h,f){return _s=f,Ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Q.H=t===null||t.memoizedState===null?uy:Xf,va=!1,f=a(o,h),va=!1,oo&&(f=Cg(n,a,o,h)),Ig(t),f}function Ig(t){Q.H=Al;var n=at!==null&&at.next!==null;if(_s=0,Lt=at=Ce=null,uc=!1,El=0,lo=null,n)throw Error(r(300));t===null||Ut||(t=t.dependencies,t!==null&&ec(t)&&(Ut=!0))}function Cg(t,n,a,o){Ce=t;var h=0;do{if(oo&&(lo=null),El=0,oo=!1,25<=h)throw Error(r(301));if(h+=1,Lt=at=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Q.H=cy,f=n(a,o)}while(oo);return f}function Xb(){var t=Q.H,n=t.useState()[0];return n=typeof n.then=="function"?Tl(n):n,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(Ce.flags|=1024),n}function jf(){var t=cc!==0;return cc=0,t}function kf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pf(t){if(uc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uc=!1}_s=0,Lt=at=Ce=null,oo=!1,El=cc=0,lo=null}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Ce.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Vt(){if(at===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var n=Lt===null?Ce.memoizedState:Lt.next;if(n!==null)Lt=n,at=t;else{if(t===null)throw Ce.alternate===null?Error(r(467)):Error(r(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Lt===null?Ce.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(t){var n=El;return El+=1,lo===null&&(lo=[]),t=_g(lo,t,n),n=Ce,(Lt===null?n.memoizedState:Lt.next)===null&&(n=n.alternate,Q.H=n===null||n.memoizedState===null?uy:Xf),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Tl(t);if(t.$$typeof===ge)return tn(t)}throw Error(r(438,String(t)))}function Lf(t){var n=null,a=Ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hc(),Ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=j;return n.index++,a}function vs(t,n){return typeof n=="function"?n(t):n}function dc(t){var n=Vt();return Uf(n,at,t)}function Uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var h=t.baseQueue,f=o.pending;if(f!==null){if(h!==null){var y=h.next;h.next=f.next,f.next=y}n.baseQueue=h=f,o.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{n=h.next;var T=y=null,C=null,z=n,G=!1;do{var $=z.lane&-536870913;if($!==z.lane?(Pe&$)===$:(_s&$)===$){var B=z.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),$===no&&(G=!0);else if((_s&B)===B){z=z.next,B===no&&(G=!0);continue}else $={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=$,y=f):C=C.next=$,Ce.lanes|=B,dr|=B;$=z.action,va&&a(f,$),f=z.hasEagerState?z.eagerState:a(f,$)}else B={lane:$,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=B,y=f):C=C.next=B,Ce.lanes|=$,dr|=$;z=z.next}while(z!==null&&z!==n);if(C===null?y=f:C.next=T,!Un(f,t.memoizedState)&&(Ut=!0,G&&(a=io,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=C,o.lastRenderedState=f}return h===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function zf(t){var n=Vt(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,h=a.pending,f=n.memoizedState;if(h!==null){a.pending=null;var y=h=h.next;do f=t(f,y.action),y=y.next;while(y!==h);Un(f,n.memoizedState)||(Ut=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function xg(t,n,a){var o=Ce,h=Vt(),f=He;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Un((at||h).memoizedState,a);if(y&&(h.memoizedState=a,Ut=!0),h=h.queue,Hf(Og.bind(null,o,h,t),[t]),h.getSnapshot!==n||y||Lt!==null&&Lt.memoizedState.tag&1){if(o.flags|=2048,uo(9,{destroy:void 0},Dg.bind(null,o,h,a,n),null),ut===null)throw Error(r(349));f||(_s&127)!==0||Ng(o,n,a)}return a}function Ng(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ce.updateQueue,n===null?(n=hc(),Ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Dg(t,n,a,o){n.value=a,n.getSnapshot=o,Vg(n)&&Mg(t)}function Og(t,n,a){return a(function(){Vg(n)&&Mg(t)})}function Vg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Un(t,a)}catch{return!0}}function Mg(t){var n=ca(t,2);n!==null&&Nn(n,t,2)}function Bf(t){var n=En();if(typeof t=="function"){var a=t;if(t=a(),va){Tn(!0);try{a()}finally{Tn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},n}function jg(t,n,a,o){return t.baseState=a,Uf(t,at,typeof o=="function"?o:vs)}function Jb(t,n,a,o,h){if(gc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};Q.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,kg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kg(t,n){var a=n.action,o=n.payload,h=t.state;if(n.isTransition){var f=Q.T,y={};Q.T=y;try{var T=a(h,o),C=Q.S;C!==null&&C(y,T),Pg(t,n,T)}catch(z){qf(t,n,z)}finally{f!==null&&y.types!==null&&(f.types=y.types),Q.T=f}}else try{f=a(h,o),Pg(t,n,f)}catch(z){qf(t,n,z)}}function Pg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lg(t,n,o)},function(o){return qf(t,n,o)}):Lg(t,n,a)}function Lg(t,n,a){n.status="fulfilled",n.value=a,Ug(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kg(t,a)))}function qf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ug(n),n=n.next;while(n!==o)}t.action=null}function Ug(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zg(t,n){return n}function Bg(t,n){if(He){var a=ut.formState;if(a!==null){e:{var o=Ce;if(He){if(ht){t:{for(var h=ht,f=oi;h.nodeType!==8;){if(!f){h=null;break t}if(h=ui(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ht=ui(h.nextSibling),o=h.data==="F!";break e}}sr(o)}o=!1}o&&(n=a[0])}}return a=En(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:n},a.queue=o,a=ay.bind(null,Ce,o),o.dispatch=a,o=Bf(!1),f=Kf.bind(null,Ce,!1,o.queue),o=En(),h={state:n,dispatch:null,action:t,pending:null},o.queue=h,a=Jb.bind(null,Ce,h,f,a),h.dispatch=a,o.memoizedState=t,[n,a,!1]}function qg(t){var n=Vt();return Hg(n,at,t)}function Hg(t,n,a){if(n=Uf(t,n,zg)[0],t=dc(vs)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Tl(n)}catch(y){throw y===so?ic:y}else o=n;n=Vt();var h=n.queue,f=h.dispatch;return a!==n.memoizedState&&(Ce.flags|=2048,uo(9,{destroy:void 0},$b.bind(null,h,a),null)),[o,f,t]}function $b(t,n){t.action=n}function Fg(t){var n=Vt(),a=at;if(a!==null)return Hg(n,a,t);Vt(),n=n.memoizedState,a=Vt();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function uo(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Ce.updateQueue,n===null&&(n=hc(),Ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gg(){return Vt().memoizedState}function mc(t,n,a,o){var h=En();Ce.flags|=t,h.memoizedState=uo(1|n,{destroy:void 0},a,o===void 0?null:o)}function pc(t,n,a,o){var h=Vt();o=o===void 0?null:o;var f=h.memoizedState.inst;at!==null&&o!==null&&Vf(o,at.memoizedState.deps)?h.memoizedState=uo(n,f,a,o):(Ce.flags|=t,h.memoizedState=uo(1|n,f,a,o))}function Qg(t,n){mc(8390656,8,t,n)}function Hf(t,n){pc(2048,8,t,n)}function Zb(t){Ce.flags|=4;var n=Ce.updateQueue;if(n===null)n=hc(),Ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Yg(t){var n=Vt().memoizedState;return Zb({ref:n,nextImpl:t}),function(){if((Je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Kg(t,n){return pc(4,2,t,n)}function Xg(t,n){return pc(4,4,t,n)}function Jg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $g(t,n,a){a=a!=null?a.concat([t]):null,pc(4,4,Jg.bind(null,n,t),a)}function Ff(){}function Zg(t,n){var a=Vt();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Wg(t,n){var a=Vt();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vf(n,o[1]))return o[0];if(o=t(),va){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[o,n],o}function Gf(t,n,a){return a===void 0||(_s&1073741824)!==0&&(Pe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=e_(),Ce.lanes|=t,dr|=t,a)}function ey(t,n,a,o){return Un(a,n)?a:ao.current!==null?(t=Gf(t,a,o),Un(t,n)||(Ut=!0),t):(_s&42)===0||(_s&1073741824)!==0&&(Pe&261930)===0?(Ut=!0,t.memoizedState=a):(t=e_(),Ce.lanes|=t,dr|=t,n)}function ty(t,n,a,o,h){var f=ie.p;ie.p=f!==0&&8>f?f:8;var y=Q.T,T={};Q.T=T,Kf(t,!1,n,a);try{var C=h(),z=Q.S;if(z!==null&&z(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=Yb(C,o);bl(t,n,G,Gn(t))}else bl(t,n,o,Gn(t))}catch($){bl(t,n,{then:function(){},status:"rejected",reason:$},Gn())}finally{ie.p=f,y!==null&&T.types!==null&&(y.types=T.types),Q.T=y}}function Wb(){}function Qf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var h=ny(t).queue;ty(t,h,n,he,a===null?Wb:function(){return iy(t),a(o)})}function ny(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:he},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function iy(t){var n=ny(t);n.next===null&&(n=t.alternate.memoizedState),bl(t,n.next.queue,{},Gn())}function Yf(){return tn(Ul)}function sy(){return Vt().memoizedState}function ry(){return Vt().memoizedState}function eA(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Gn();t=or(a);var o=lr(n,t,a);o!==null&&(Nn(o,n,a),yl(o,n,a)),n={cache:bf()},t.payload=n;return}n=n.return}}function tA(t,n,a){var o=Gn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(t)?oy(n,a):(a=hf(t,n,a,o),a!==null&&(Nn(a,t,o),ly(a,n,o)))}function ay(t,n,a){var o=Gn();bl(t,n,a,o)}function bl(t,n,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(t))oy(n,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(h.hasEagerState=!0,h.eagerState=T,Un(T,y))return Ju(t,n,h,0),ut===null&&Xu(),!1}catch{}finally{}if(a=hf(t,n,h,o),a!==null)return Nn(a,t,o),ly(a,n,o),!0}return!1}function Kf(t,n,a,o){if(o={lane:2,revertLane:Rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(n)throw Error(r(479))}else n=hf(t,a,o,2),n!==null&&Nn(n,t,2)}function gc(t){var n=t.alternate;return t===Ce||n!==null&&n===Ce}function oy(t,n){oo=uc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ly(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fs(t,a)}}var Al={readContext:tn,use:fc,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct};Al.useEffectEvent=Ct;var uy={readContext:tn,use:fc,useCallback:function(t,n){return En().memoizedState=[t,n===void 0?null:n],t},useContext:tn,useEffect:Qg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,mc(4194308,4,Jg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return mc(4194308,4,t,n)},useInsertionEffect:function(t,n){mc(4,2,t,n)},useMemo:function(t,n){var a=En();n=n===void 0?null:n;var o=t();if(va){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=En();if(a!==void 0){var h=a(n);if(va){Tn(!0);try{a(n)}finally{Tn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},o.queue=t,t=t.dispatch=tA.bind(null,Ce,t),[o.memoizedState,t]},useRef:function(t){var n=En();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,a=ay.bind(null,Ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,n){var a=En();return Gf(a,t,n)},useTransition:function(){var t=Bf(!1);return t=ty.bind(null,Ce,t.queue,!0,!1),En().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Ce,h=En();if(He){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ut===null)throw Error(r(349));(Pe&127)!==0||Ng(o,n,a)}h.memoizedState=a;var f={value:a,getSnapshot:n};return h.queue=f,Qg(Og.bind(null,o,f,t),[t]),o.flags|=2048,uo(9,{destroy:void 0},Dg.bind(null,o,f,a,n),null),a},useId:function(){var t=En(),n=ut.identifierPrefix;if(He){var a=Qi,o=Gi;a=(o&~(1<<32-mt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kb++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yf,useFormState:Bg,useActionState:Bg,useOptimistic:function(t){var n=En();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kf.bind(null,Ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lf,useCacheRefresh:function(){return En().memoizedState=eA.bind(null,Ce)},useEffectEvent:function(t){var n=En(),a={impl:t};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Xf={readContext:tn,use:fc,useCallback:Zg,useContext:tn,useEffect:Hf,useImperativeHandle:$g,useInsertionEffect:Kg,useLayoutEffect:Xg,useMemo:Wg,useReducer:dc,useRef:Gg,useState:function(){return dc(vs)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=Vt();return ey(a,at.memoizedState,t,n)},useTransition:function(){var t=dc(vs)[0],n=Vt().memoizedState;return[typeof t=="boolean"?t:Tl(t),n]},useSyncExternalStore:xg,useId:sy,useHostTransitionStatus:Yf,useFormState:qg,useActionState:qg,useOptimistic:function(t,n){var a=Vt();return jg(a,at,t,n)},useMemoCache:Lf,useCacheRefresh:ry};Xf.useEffectEvent=Yg;var cy={readContext:tn,use:fc,useCallback:Zg,useContext:tn,useEffect:Hf,useImperativeHandle:$g,useInsertionEffect:Kg,useLayoutEffect:Xg,useMemo:Wg,useReducer:zf,useRef:Gg,useState:function(){return zf(vs)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=Vt();return at===null?Gf(a,t,n):ey(a,at.memoizedState,t,n)},useTransition:function(){var t=zf(vs)[0],n=Vt().memoizedState;return[typeof t=="boolean"?t:Tl(t),n]},useSyncExternalStore:xg,useId:sy,useHostTransitionStatus:Yf,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,n){var a=Vt();return at!==null?jg(a,at,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:ry};cy.useEffectEvent=Yg;function Jf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:R({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $f={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Gn(),h=or(o);h.payload=n,a!=null&&(h.callback=a),n=lr(t,h,o),n!==null&&(Nn(n,t,o),yl(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Gn(),h=or(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=lr(t,h,o),n!==null&&(Nn(n,t,o),yl(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Gn(),o=or(a);o.tag=2,n!=null&&(o.callback=n),n=lr(t,o,a),n!==null&&(Nn(n,t,a),yl(n,t,a))}};function hy(t,n,a,o,h,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!ul(a,o)||!ul(h,f):!0}function fy(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&$f.enqueueReplaceState(n,n.state,null)}function Ea(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=R({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function dy(t){Ku(t)}function my(t){console.error(t)}function py(t){Ku(t)}function yc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gy(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Zf(t,n,a){return a=or(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(t,n)},a}function yy(t){return t=or(t),t.tag=3,t}function _y(t,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;t.payload=function(){return h(f)},t.callback=function(){gy(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){gy(n,a,o),typeof h!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function nA(t,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&to(n,a,h,!0),a=Bn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?xc():a.alternate===null&&xt===0&&(xt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ad(t,o,h)),!1;case 22:return a.flags|=65536,o===sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ad(t,o,h)),!1}throw Error(r(435,a.tag))}return Ad(t,o,h),xc(),!1}if(He)return n=Bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==yf&&(t=Error(r(422),{cause:o}),fl(si(t,a)))):(o!==yf&&(n=Error(r(423),{cause:o}),fl(si(n,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,o=si(o,a),h=Zf(t.stateNode,o,h),Cf(t,h),xt!==4&&(xt=2)),!1;var f=Error(r(520),{cause:o});if(f=si(f,a),Dl===null?Dl=[f]:Dl.push(f),xt!==4&&(xt=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Zf(a.stateNode,o,t),Cf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mr===null||!mr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=yy(h),_y(h,t,a,o),Cf(a,h),!1}a=a.return}while(a!==null);return!1}var Wf=Error(r(461)),Ut=!1;function nn(t,n,a,o){n.child=t===null?bg(n,null,a,o):_a(n,t.child,a,o)}function vy(t,n,a,o,h){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return ma(n),o=Mf(t,n,a,y,f,h),T=jf(),t!==null&&!Ut?(kf(t,n,h),Es(t,n,h)):(He&&T&&pf(n),n.flags|=1,nn(t,n,o,h),n.child)}function Ey(t,n,a,o,h){if(t===null){var f=a.type;return typeof f=="function"&&!ff(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ty(t,n,f,o,h)):(t=Zu(a.type,null,o,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!od(t,h)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ul,a(y,o)&&t.ref===n.ref)return Es(t,n,h)}return n.flags|=1,t=ms(f,o),t.ref=n.ref,t.return=n,n.child=t}function Ty(t,n,a,o,h){if(t!==null){var f=t.memoizedProps;if(ul(f,o)&&t.ref===n.ref)if(Ut=!1,n.pendingProps=o=f,od(t,h))(t.flags&131072)!==0&&(Ut=!0);else return n.lanes=t.lanes,Es(t,n,h)}return ed(t,n,a,o,h)}function by(t,n,a,o){var h=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return Ay(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nc(n,f!==null?f.cachePool:null),f!==null?wg(n,f):Nf(),Rg(n);else return o=n.lanes=536870912,Ay(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(nc(n,f.cachePool),wg(n,f),cr(),n.memoizedState=null):(t!==null&&nc(n,null),Nf(),cr());return nn(t,n,h,a),n.child}function Sl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ay(t,n,a,o,h){var f=Sf();return f=f===null?null:{parent:Pt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nc(n,null),Nf(),Rg(n),t!==null&&to(t,n,o,!0),n.childLanes=h,null}function _c(t,n){return n=Ec({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sy(t,n,a){return _a(n,t.child,null,a),t=_c(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function iA(t,n,a){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(He){if(o.mode==="hidden")return t=_c(n,o),n.lanes=536870912,Sl(null,t);if(Of(n),(t=ht)?(t=k_(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:nr!==null?{id:Gi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=og(t),a.return=n,n.child=a,en=n,ht=null)):t=null,t===null)throw sr(n);return n.lanes=536870912,null}return _c(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Of(n),h)if(n.flags&256)n.flags&=-257,n=Sy(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ut||to(t,n,a,!1),h=(a&t.childLanes)!==0,Ut||h){if(o=ut,o!==null&&(y=$r(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ca(t,y),Nn(o,t,y),Wf;xc(),n=Sy(t,n,a)}else t=f.treeContext,ht=ui(y.nextSibling),en=n,He=!0,ir=null,oi=!1,t!==null&&cg(n,t),n=_c(n,o),n.flags|=4096;return n}return t=ms(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ed(t,n,a,o,h){return ma(n),a=Mf(t,n,a,o,void 0,h),o=jf(),t!==null&&!Ut?(kf(t,n,h),Es(t,n,h)):(He&&o&&pf(n),n.flags|=1,nn(t,n,a,h),n.child)}function wy(t,n,a,o,h,f){return ma(n),n.updateQueue=null,a=Cg(n,o,a,h),Ig(t),o=jf(),t!==null&&!Ut?(kf(t,n,f),Es(t,n,f)):(He&&o&&pf(n),n.flags|=1,nn(t,n,a,f),n.child)}function Ry(t,n,a,o,h){if(ma(n),n.stateNode===null){var f=$a,y=a.contextType;typeof y=="object"&&y!==null&&(f=tn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$f,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Rf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?tn(y):$a,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Jf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&$f.enqueueReplaceState(f,f.state,null),vl(n,o,f,h),_l(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,C=Ea(a,T);f.props=C;var z=f.context,G=a.contextType;y=$a,typeof G=="object"&&G!==null&&(y=tn(G));var $=a.getDerivedStateFromProps;G=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||z!==y)&&fy(n,f,o,y),ar=!1;var B=n.memoizedState;f.state=B,vl(n,o,f,h),_l(),z=n.memoizedState,T||B!==z||ar?(typeof $=="function"&&(Jf(n,a,$,o),z=n.memoizedState),(C=ar||hy(n,a,C,o,B,z,y))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=z),f.props=o,f.state=z,f.context=y,o=C):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,If(t,n),y=n.memoizedProps,G=Ea(a,y),f.props=G,$=n.pendingProps,B=f.context,z=a.contextType,C=$a,typeof z=="object"&&z!==null&&(C=tn(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==$||B!==C)&&fy(n,f,o,C),ar=!1,B=n.memoizedState,f.state=B,vl(n,o,f,h),_l();var F=n.memoizedState;y!==$||B!==F||ar||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof T=="function"&&(Jf(n,a,T,o),F=n.memoizedState),(G=ar||hy(n,a,G,o,B,F,C)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,F,C),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,F,C)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=F),f.props=o,f.state=F,f.context=C,o=G):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,vc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=_a(n,t.child,null,h),n.child=_a(n,null,a,h)):nn(t,n,a,h),n.memoizedState=f.state,t=n.child):t=Es(t,n,h),t}function Iy(t,n,a,o){return fa(),n.flags|=256,nn(t,n,a,o),n.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(t){return{baseLanes:t,cachePool:gg()}}function id(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Fn),t}function Cy(t,n,a){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),y&&(h=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(He){if(h?ur(n):cr(),(t=ht)?(t=k_(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:nr!==null?{id:Gi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=og(t),a.return=n,n.child=a,en=n,ht=null)):t=null,t===null)throw sr(n);return Ud(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,h?(cr(),h=n.mode,T=Ec({mode:"hidden",children:T},h),o=ha(o,h,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=nd(a),o.childLanes=id(t,y,a),n.memoizedState=td,Sl(null,o)):(ur(n),sd(n,T))}var C=t.memoizedState;if(C!==null&&(T=C.dehydrated,T!==null)){if(f)n.flags&256?(ur(n),n.flags&=-257,n=rd(t,n,a)):n.memoizedState!==null?(cr(),n.child=t.child,n.flags|=128,n=null):(cr(),T=o.fallback,h=n.mode,o=Ec({mode:"visible",children:o.children},h),T=ha(T,h,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,_a(n,t.child,null,a),o=n.child,o.memoizedState=nd(a),o.childLanes=id(t,y,a),n.memoizedState=td,n=Sl(null,o));else if(ur(n),Ud(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var z=y.dgst;y=z,o=Error(r(419)),o.stack="",o.digest=y,fl({value:o,source:null,stack:null}),n=rd(t,n,a)}else if(Ut||to(t,n,a,!1),y=(a&t.childLanes)!==0,Ut||y){if(y=ut,y!==null&&(o=$r(y,a),o!==0&&o!==C.retryLane))throw C.retryLane=o,ca(t,o),Nn(y,t,o),Wf;Ld(T)||xc(),n=rd(t,n,a)}else Ld(T)?(n.flags|=192,n.child=t.child,n=null):(t=C.treeContext,ht=ui(T.nextSibling),en=n,He=!0,ir=null,oi=!1,t!==null&&cg(n,t),n=sd(n,o.children),n.flags|=4096);return n}return h?(cr(),T=o.fallback,h=n.mode,C=t.child,z=C.sibling,o=ms(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,z!==null?T=ms(z,T):(T=ha(T,h,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,Sl(null,o),o=n.child,T=t.child.memoizedState,T===null?T=nd(a):(h=T.cachePool,h!==null?(C=Pt._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=gg(),T={baseLanes:T.baseLanes|a,cachePool:h}),o.memoizedState=T,o.childLanes=id(t,y,a),n.memoizedState=td,Sl(t.child,o)):(ur(n),a=t.child,t=a.sibling,a=ms(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function sd(t,n){return n=Ec({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ec(t,n){return t=zn(22,t,null,n),t.lanes=0,t}function rd(t,n,a){return _a(n,t.child,null,a),t=sd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xy(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ef(t.return,n,a)}function ad(t,n,a,o,h,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=h,y.treeForkCount=f)}function Ny(t,n,a){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var y=Ot.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,ne(Ot,y),nn(t,n,o,a),o=He?hl:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xy(t,a,n);else if(t.tag===19)xy(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=n.child,h=null;a!==null;)t=a.alternate,t!==null&&lc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),ad(n,!1,h,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&lc(t)===null){n.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}ad(n,!0,a,null,f,o);break;case"together":ad(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Es(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),dr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(to(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ms(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ms(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function od(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function sA(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),rr(n,Pt,t.memoizedState.cache),fa();break;case 27:case 5:Vi(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:rr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ur(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cy(t,n,a):(ur(n),t=Es(t,n,a),t!==null?t.sibling:null);ur(n);break;case 19:var h=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(to(t,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return Ny(t,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ne(Ot,Ot.current),o)break;return null;case 22:return n.lanes=0,by(t,n,a,n.pendingProps);case 24:rr(n,Pt,t.memoizedState.cache)}return Es(t,n,a)}function Dy(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ut=!0;else{if(!od(t,a)&&(n.flags&128)===0)return Ut=!1,sA(t,n,a);Ut=(t.flags&131072)!==0}else Ut=!1,He&&(n.flags&1048576)!==0&&ug(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ga(n.elementType),n.type=t,typeof t=="function")ff(t)?(o=Ea(t,o),n.tag=1,n=Ry(null,n,t,o,a)):(n.tag=0,n=ed(null,n,t,o,a));else{if(t!=null){var h=t.$$typeof;if(h===it){n.tag=11,n=vy(null,n,t,o,a);break e}else if(h===N){n.tag=14,n=Ey(null,n,t,o,a);break e}}throw n=Ze(t)||t,Error(r(306,n,""))}}return n;case 0:return ed(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Ea(o,n.pendingProps),Ry(t,n,o,h,a);case 3:e:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,If(t,n),vl(n,o,null,a);var y=n.memoizedState;if(o=y.cache,rr(n,Pt,o),o!==f.cache&&Tf(n,[Pt],a,!0),_l(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Iy(t,n,o,a);break e}else if(o!==h){h=si(Error(r(424)),n),fl(h),n=Iy(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=ui(t.firstChild),en=n,He=!0,ir=null,oi=!0,a=bg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fa(),o===h){n=Es(t,n,a);break e}nn(t,n,o,a)}n=n.child}return n;case 26:return vc(t,n),t===null?(a=q_(n.type,null,n.pendingProps,null))?n.memoizedState=a:He||(a=n.type,t=n.pendingProps,o=kc(be.current).createElement(a),o[It]=n,o[kt]=t,sn(o,a,t),pt(o),n.stateNode=o):n.memoizedState=q_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vi(n),t===null&&He&&(o=n.stateNode=U_(n.type,n.pendingProps,be.current),en=n,oi=!0,h=ht,_r(n.type)?(zd=h,ht=ui(o.firstChild)):ht=h),nn(t,n,n.pendingProps.children,a),vc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&He&&((h=o=ht)&&(o=MA(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,en=n,ht=ui(o.firstChild),oi=!1,h=!0):h=!1),h||sr(n)),Vi(n),h=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,jd(h,f)?o=null:y!==null&&jd(h,y)&&(n.flags|=32),n.memoizedState!==null&&(h=Mf(t,n,Xb,null,null,a),Ul._currentValue=h),vc(t,n),nn(t,n,o,a),n.child;case 6:return t===null&&He&&((t=a=ht)&&(a=jA(a,n.pendingProps,oi),a!==null?(n.stateNode=a,en=n,ht=null,t=!0):t=!1),t||sr(n)),null;case 13:return Cy(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=_a(n,null,o,a):nn(t,n,o,a),n.child;case 11:return vy(t,n,n.type,n.pendingProps,a);case 7:return nn(t,n,n.pendingProps,a),n.child;case 8:return nn(t,n,n.pendingProps.children,a),n.child;case 12:return nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,rr(n,n.type,o.value),nn(t,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,ma(n),h=tn(h),o=o(h),n.flags|=1,nn(t,n,o,a),n.child;case 14:return Ey(t,n,n.type,n.pendingProps,a);case 15:return Ty(t,n,n.type,n.pendingProps,a);case 19:return Ny(t,n,a);case 31:return iA(t,n,a);case 22:return by(t,n,a,n.pendingProps);case 24:return ma(n),o=tn(Pt),t===null?(h=Sf(),h===null&&(h=ut,f=bf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),n.memoizedState={parent:o,cache:h},Rf(n),rr(n,Pt,h)):((t.lanes&a)!==0&&(If(t,n),vl(n,null,null,a),_l()),h=t.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),rr(n,Pt,o)):(o=f.cache,rr(n,Pt,o),o!==h.cache&&Tf(n,[Pt],a,!0))),nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ts(t){t.flags|=4}function ld(t,n,a,o,h){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(s_())t.flags|=8192;else throw ya=sc,wf}else t.flags&=-16777217}function Oy(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y_(n))if(s_())t.flags|=8192;else throw ya=sc,wf}function Tc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Jr():536870912,t.lanes|=n,mo|=n)}function wl(t,n){if(!He)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ft(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function rA(t,n,a){var o=n.pendingProps;switch(gf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(n),null;case 1:return ft(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ys(Pt),st(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(eo(n)?Ts(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),ft(n),null;case 26:var h=n.type,f=n.memoizedState;return t===null?(Ts(n),f!==null?(ft(n),Oy(n,f)):(ft(n),ld(n,h,null,o,a))):f?f!==t.memoizedState?(Ts(n),ft(n),Oy(n,f)):(ft(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ts(n),ft(n),ld(n,h,t,o,a)),null;case 27:if(Mi(n),a=be.current,h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ts(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ft(n),null}t=le.current,eo(n)?hg(n):(t=U_(h,o,a),n.stateNode=t,Ts(n))}return ft(n),null;case 5:if(Mi(n),h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ts(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ft(n),null}if(f=le.current,eo(n))hg(n);else{var y=kc(be.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(h,{is:o.is}):y.createElement(h)}}f[It]=n,f[kt]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(sn(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ts(n)}}return ft(n),ld(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ts(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,eo(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,h=en,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}t[It]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C_(t.nodeValue,a)),t||sr(n,!0)}else t=kc(t).createTextNode(o),t[It]=n,n.stateNode=t}return ft(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=eo(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[It]=n}else fa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ft(n),t=!1}else a=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ft(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=eo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!h)throw Error(r(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[It]=n}else fa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ft(n),h=!1}else h=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tc(n,n.updateQueue),ft(n),null);case 4:return st(),t===null&&Nd(n.stateNode.containerInfo),ft(n),null;case 10:return ys(n.type),ft(n),null;case 19:if(X(Ot),o=n.memoizedState,o===null)return ft(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)wl(o,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=lc(t),f!==null){for(n.flags|=128,wl(o,!1),t=f.updateQueue,n.updateQueue=t,Tc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ag(a,t),a=a.sibling;return ne(Ot,Ot.current&1|2),He&&ps(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&De()>Rc&&(n.flags|=128,h=!0,wl(o,!1),n.lanes=4194304)}else{if(!h)if(t=lc(f),t!==null){if(n.flags|=128,h=!0,t=t.updateQueue,n.updateQueue=t,Tc(n,t),wl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!He)return ft(n),null}else 2*De()-o.renderingStartTime>Rc&&a!==536870912&&(n.flags|=128,h=!0,wl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=De(),t.sibling=null,a=Ot.current,ne(Ot,h?a&1|2:a&1),He&&ps(n,o.treeForkCount),t):(ft(n),null);case 22:case 23:return qn(n),Df(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ft(n),n.subtreeFlags&6&&(n.flags|=8192)):ft(n),a=n.updateQueue,a!==null&&Tc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&X(pa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ys(Pt),ft(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function aA(t,n){switch(gf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ys(Pt),st(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Mi(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));fa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(Ot),null;case 4:return st(),null;case 10:return ys(n.type),null;case 22:case 23:return qn(n),Df(),t!==null&&X(pa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ys(Pt),null;case 25:return null;default:return null}}function Vy(t,n){switch(gf(n),n.tag){case 3:ys(Pt),st();break;case 26:case 27:case 5:Mi(n);break;case 4:st();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:X(Ot);break;case 10:ys(n.type);break;case 22:case 23:qn(n),Df(),t!==null&&X(pa);break;case 24:ys(Pt)}}function Rl(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==h)}}catch(T){nt(n,n.return,T)}}function hr(t,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&t)===t){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,h=n;var C=a,z=T;try{z()}catch(G){nt(h,C,G)}}}o=o.next}while(o!==f)}}catch(G){nt(n,n.return,G)}}function My(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sg(n,a)}catch(o){nt(t,t.return,o)}}}function jy(t,n,a){a.props=Ea(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){nt(t,n,o)}}function Il(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(h){nt(t,n,h)}}function Yi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){nt(t,n,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){nt(t,n,h)}else a.current=null}function ky(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){nt(t,t.return,h)}}function ud(t,n,a){try{var o=t.stateNode;CA(o,t.type,a,n),o[kt]=n}catch(h){nt(t,t.return,h)}}function Py(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_r(t.type)||t.tag===4}function cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Py(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_r(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ti));else if(o!==4&&(o===27&&_r(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hd(t,n,a),t=t.sibling;t!==null;)hd(t,n,a),t=t.sibling}function bc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&_r(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bc(t,n,a),t=t.sibling;t!==null;)bc(t,n,a),t=t.sibling}function Ly(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);sn(n,o,a),n[It]=t,n[kt]=a}catch(f){nt(t,t.return,f)}}var bs=!1,zt=!1,fd=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function oA(t,n){if(t=t.containerInfo,Vd=Hc,t=$p(t),rf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,T=-1,C=-1,z=0,G=0,$=t,B=null;t:for(;;){for(var F;$!==a||h!==0&&$.nodeType!==3||(T=y+h),$!==f||o!==0&&$.nodeType!==3||(C=y+o),$.nodeType===3&&(y+=$.nodeValue.length),(F=$.firstChild)!==null;)B=$,$=F;for(;;){if($===t)break t;if(B===a&&++z===h&&(T=y),B===f&&++G===o&&(C=y),(F=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=F}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Md={focusedElem:t,selectionRange:a},Hc=!1,Xt=n;Xt!==null;)if(n=Xt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Xt=t;else for(;Xt!==null;){switch(n=Xt,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ce=Ea(a.type,h);t=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ye){nt(a,a.return,ye)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Xt=t;break}Xt=n.return}}function zy(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ss(t,a),o&4&&Rl(5,a);break;case 1:if(Ss(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){nt(a,a.return,y)}else{var h=Ea(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(h,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){nt(a,a.return,y)}}o&64&&My(a),o&512&&Il(a,a.return);break;case 3:if(Ss(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sg(t,n)}catch(y){nt(a,a.return,y)}}break;case 27:n===null&&o&4&&Ly(a);case 26:case 5:Ss(t,a),n===null&&o&4&&ky(a),o&512&&Il(a,a.return);break;case 12:Ss(t,a);break;case 31:Ss(t,a),o&4&&Hy(t,a);break;case 13:Ss(t,a),o&4&&Fy(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gA.bind(null,a),kA(t,a))));break;case 22:if(o=a.memoizedState!==null||bs,!o){n=n!==null&&n.memoizedState!==null||zt,h=bs;var f=zt;bs=o,(zt=n)&&!f?ws(t,a,(a.subtreeFlags&8772)!==0):Ss(t,a),bs=h,zt=f}break;case 30:break;default:Ss(t,a)}}function By(t){var n=t.alternate;n!==null&&(t.alternate=null,By(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,Rn=!1;function As(t,n,a){for(a=a.child;a!==null;)qy(t,n,a),a=a.sibling}function qy(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(un,a)}catch{}switch(a.tag){case 26:zt||Yi(a,n),As(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:zt||Yi(a,n);var o=yt,h=Rn;_r(a.type)&&(yt=a.stateNode,Rn=!1),As(t,n,a),kl(a.stateNode),yt=o,Rn=h;break;case 5:zt||Yi(a,n);case 6:if(o=yt,h=Rn,yt=null,As(t,n,a),yt=o,Rn=h,yt!==null)if(Rn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(f){nt(a,n,f)}else try{yt.removeChild(a.stateNode)}catch(f){nt(a,n,f)}break;case 18:yt!==null&&(Rn?(t=yt,M_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bo(t)):M_(yt,a.stateNode));break;case 4:o=yt,h=Rn,yt=a.stateNode.containerInfo,Rn=!0,As(t,n,a),yt=o,Rn=h;break;case 0:case 11:case 14:case 15:hr(2,a,n),zt||hr(4,a,n),As(t,n,a);break;case 1:zt||(Yi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jy(a,n,o)),As(t,n,a);break;case 21:As(t,n,a);break;case 22:zt=(o=zt)||a.memoizedState!==null,As(t,n,a),zt=o;break;default:As(t,n,a)}}function Hy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bo(t)}catch(a){nt(n,n.return,a)}}}function Fy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bo(t)}catch(a){nt(n,n.return,a)}}function lA(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Uy),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Uy),n;default:throw Error(r(435,t.tag))}}function Ac(t,n){var a=lA(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var h=yA.bind(null,t,o);o.then(h,h)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=t,y=n,T=y;e:for(;T!==null;){switch(T.tag){case 27:if(_r(T.type)){yt=T.stateNode,Rn=!1;break e}break;case 5:yt=T.stateNode,Rn=!1;break e;case 3:case 4:yt=T.stateNode.containerInfo,Rn=!0;break e}T=T.return}if(yt===null)throw Error(r(160));qy(f,y,h),yt=null,Rn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gy(n,t),n=n.sibling}var Ii=null;function Gy(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Cn(t),o&4&&(hr(3,t,t.return),Rl(3,t),hr(5,t,t.return));break;case 1:In(n,t),Cn(t),o&512&&(zt||a===null||Yi(a,a.return)),o&64&&bs&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Ii;if(In(n,t),Cn(t),o&512&&(zt||a===null||Yi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[$n]||f[It]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),sn(f,o,a),f[It]=t,pt(f),o=f;break e;case"link":var y=G_("link","href",h).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break t}}f=h.createElement(o),sn(f,o,a),h.head.appendChild(f);break;case"meta":if(y=G_("meta","content",h).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break t}}f=h.createElement(o),sn(f,o,a),h.head.appendChild(f);break;default:throw Error(r(468,o))}f[It]=t,pt(f),o=f}t.stateNode=o}else Q_(h,t.type,t.stateNode);else t.stateNode=F_(h,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Q_(h,t.type,t.stateNode):F_(h,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ud(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Cn(t),o&512&&(zt||a===null||Yi(a,a.return)),a!==null&&o&4&&ud(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Cn(t),o&512&&(zt||a===null||Yi(a,a.return)),t.flags&32){h=t.stateNode;try{wn(h,"")}catch(ce){nt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(h=t.memoizedProps,ud(t,h,a!==null?a.memoizedProps:h)),o&1024&&(fd=!0);break;case 6:if(In(n,t),Cn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){nt(t,t.return,ce)}}break;case 3:if(Uc=null,h=Ii,Ii=Pc(n.containerInfo),In(n,t),Ii=h,Cn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(ce){nt(t,t.return,ce)}fd&&(fd=!1,Qy(t));break;case 4:o=Ii,Ii=Pc(t.stateNode.containerInfo),In(n,t),Cn(t),Ii=o;break;case 12:In(n,t),Cn(t);break;case 31:In(n,t),Cn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ac(t,o)));break;case 13:In(n,t),Cn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wc=De()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ac(t,o)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,z=bs,G=zt;if(bs=z||h,zt=G||C,In(n,t),zt=G,bs=z,Cn(t),o&8192)e:for(n=t.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(a===null||C||bs||zt||Ta(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){C=a=n;try{if(f=C.stateNode,h)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ce){nt(C,C.return,ce)}}}else if(n.tag===6){if(a===null){C=n;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ce){nt(C,C.return,ce)}}}else if(n.tag===18){if(a===null){C=n;try{var F=C.stateNode;h?j_(F,!0):j_(C.stateNode,!1)}catch(ce){nt(C,C.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ac(t,a))));break;case 19:In(n,t),Cn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ac(t,o)));break;case 30:break;case 21:break;default:In(n,t),Cn(t)}}function Cn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Py(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,f=cd(t);bc(t,f,h);break;case 5:var y=a.stateNode;a.flags&32&&(wn(y,""),a.flags&=-33);var T=cd(t);bc(t,T,y);break;case 3:case 4:var C=a.stateNode.containerInfo,z=cd(t);hd(t,z,C);break;default:throw Error(r(161))}}catch(G){nt(t,t.return,G)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ss(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zy(t,n.alternate,n),n=n.sibling}function Ta(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:hr(4,n,n.return),Ta(n);break;case 1:Yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jy(n,n.return,a),Ta(n);break;case 27:kl(n.stateNode);case 26:case 5:Yi(n,n.return),Ta(n);break;case 22:n.memoizedState===null&&Ta(n);break;case 30:Ta(n);break;default:Ta(n)}t=t.sibling}}function ws(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ws(h,f,a),Rl(4,f);break;case 1:if(ws(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){nt(o,o.return,z)}if(o=f,h=o.updateQueue,h!==null){var T=o.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Ag(C[h],T)}catch(z){nt(o,o.return,z)}}a&&y&64&&My(f),Il(f,f.return);break;case 27:Ly(f);case 26:case 5:ws(h,f,a),a&&o===null&&y&4&&ky(f),Il(f,f.return);break;case 12:ws(h,f,a);break;case 31:ws(h,f,a),a&&y&4&&Hy(h,f);break;case 13:ws(h,f,a),a&&y&4&&Fy(h,f);break;case 22:f.memoizedState===null&&ws(h,f,a),Il(f,f.return);break;case 30:break;default:ws(h,f,a)}n=n.sibling}}function dd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&dl(a))}function md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&dl(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yy(t,n,a,o),n=n.sibling}function Yy(t,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),h&2048&&Rl(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),h&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&dl(t)));break;case 12:if(h&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){nt(n,n.return,C)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Cl(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,co(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&dd(y,n);break;case 24:Ci(t,n,a,o),h&2048&&md(n.alternate,n);break;default:Ci(t,n,a,o)}}function co(t,n,a,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,T=a,C=o,z=y.flags;switch(y.tag){case 0:case 11:case 15:co(f,y,T,C,h),Rl(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?co(f,y,T,C,h):Cl(f,y):(G._visibility|=2,co(f,y,T,C,h)),h&&z&2048&&dd(y.alternate,y);break;case 24:co(f,y,T,C,h),h&&z&2048&&md(y.alternate,y);break;default:co(f,y,T,C,h)}n=n.sibling}}function Cl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,h=o.flags;switch(o.tag){case 22:Cl(a,o),h&2048&&dd(o.alternate,o);break;case 24:Cl(a,o),h&2048&&md(o.alternate,o);break;default:Cl(a,o)}n=n.sibling}}var xl=8192;function ho(t,n,a){if(t.subtreeFlags&xl)for(t=t.child;t!==null;)Ky(t,n,a),t=t.sibling}function Ky(t,n,a){switch(t.tag){case 26:ho(t,n,a),t.flags&xl&&t.memoizedState!==null&&KA(a,Ii,t.memoizedState,t.memoizedProps);break;case 5:ho(t,n,a);break;case 3:case 4:var o=Ii;Ii=Pc(t.stateNode.containerInfo),ho(t,n,a),Ii=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=xl,xl=16777216,ho(t,n,a),xl=o):ho(t,n,a));break;default:ho(t,n,a)}}function Xy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Xt=o,$y(o,t)}Xy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jy(t),t=t.sibling}function Jy(t){switch(t.tag){case 0:case 11:case 15:Nl(t),t.flags&2048&&hr(9,t,t.return);break;case 3:Nl(t);break;case 12:Nl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sc(t)):Nl(t);break;default:Nl(t)}}function Sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Xt=o,$y(o,t)}Xy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:hr(8,n,n.return),Sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sc(n));break;default:Sc(n)}t=t.sibling}}function $y(t,n){for(;Xt!==null;){var a=Xt;switch(a.tag){case 0:case 11:case 15:hr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:dl(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Xt=o;else e:for(a=t;Xt!==null;){o=Xt;var h=o.sibling,f=o.return;if(By(o),o===a){Xt=null;break e}if(h!==null){h.return=f,Xt=h;break e}Xt=f}}}var uA={getCacheForType:function(t){var n=tn(Pt),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return tn(Pt).controller.signal}},cA=typeof WeakMap=="function"?WeakMap:Map,Je=0,ut=null,Ve=null,Pe=0,tt=0,Hn=null,fr=!1,fo=!1,pd=!1,Rs=0,xt=0,dr=0,ba=0,gd=0,Fn=0,mo=0,Dl=null,xn=null,yd=!1,wc=0,Zy=0,Rc=1/0,Ic=null,mr=null,Gt=0,pr=null,po=null,Is=0,_d=0,vd=null,Wy=null,Ol=0,Ed=null;function Gn(){return(Je&2)!==0&&Pe!==0?Pe&-Pe:Q.T!==null?Rd():Zr()}function e_(){if(Fn===0)if((Pe&536870912)===0||He){var t=Pi;Pi<<=1,(Pi&3932160)===0&&(Pi=262144),Fn=t}else Fn=536870912;return t=Bn.current,t!==null&&(t.flags|=32),Fn}function Nn(t,n,a){(t===ut&&(tt===2||tt===9)||t.cancelPendingCommit!==null)&&(go(t,0),gr(t,Pe,Fn,!1)),ls(t,a),((Je&2)===0||t!==ut)&&(t===ut&&((Je&2)===0&&(ba|=a),xt===4&&gr(t,Pe,Fn,!1)),Ki(t))}function t_(t,n,a){if((Je&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||yn(t,n),h=o?dA(t,n):bd(t,n,!0),f=o;do{if(h===0){fo&&!o&&gr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!hA(a)){h=bd(t,n,!1),f=!1;continue}if(h===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var T=t;h=Dl;var C=T.current.memoizedState.isDehydrated;if(C&&(go(T,y).flags|=256),y=bd(T,y,!1),y!==2){if(pd&&!C){T.errorRecoveryDisabledLanes|=f,ba|=f,h=4;break e}f=xn,xn=h,f!==null&&(xn===null?xn=f:xn.push.apply(xn,f))}h=y}if(f=!1,h!==2)continue}}if(h===1){go(t,0),gr(t,n,0,!0);break}e:{switch(o=t,f=h,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:gr(o,n,Fn,!fr);break e;case 2:xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(h=wc+300-De(),10<h)){if(gr(o,n,Fn,!fr),kn(o,0,!0)!==0)break e;Is=n,o.timeoutHandle=O_(n_.bind(null,o,a,xn,Ic,yd,n,Fn,ba,mo,fr,f,"Throttled",-0,0),h);break e}n_(o,a,xn,Ic,yd,n,Fn,ba,mo,fr,f,null,-0,0)}}break}while(!0);Ki(t)}function n_(t,n,a,o,h,f,y,T,C,z,G,$,B,F){if(t.timeoutHandle=-1,$=n.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ti},Ky(n,f,$);var ce=(f&62914560)===f?wc-De():(f&4194048)===f?Zy-De():0;if(ce=XA($,ce),ce!==null){Is=f,t.cancelPendingCommit=ce(c_.bind(null,t,n,f,a,o,h,y,T,C,G,$,null,B,F)),gr(t,f,y,!z);return}}c_(t,n,f,a,o,h,y,T,C)}function hA(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!Un(f(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gr(t,n,a,o){n&=~gd,n&=~ba,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var h=n;0<h;){var f=31-mt(h),y=1<<f;o[f]=-1,h&=~y}a!==0&&us(t,a,n)}function Cc(){return(Je&6)===0?(Vl(0),!1):!0}function Td(){if(Ve!==null){if(tt===0)var t=Ve.return;else t=Ve,gs=da=null,Pf(t),ro=null,pl=0,t=Ve;for(;t!==null;)Vy(t.alternate,t),t=t.return;Ve=null}}function go(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,DA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Is=0,Td(),ut=t,Ve=a=ms(t.current,null),Pe=n,tt=0,Hn=null,fr=!1,fo=yn(t,n),pd=!1,mo=Fn=gd=ba=dr=xt=0,xn=Dl=null,yd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var h=31-mt(o),f=1<<h;n|=t[h],o&=~f}return Rs=n,Xu(),a}function i_(t,n){Ce=null,Q.H=Al,n===so||n===ic?(n=vg(),tt=3):n===wf?(n=vg(),tt=4):tt=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,Ve===null&&(xt=1,yc(t,si(n,t.current)))}function s_(){var t=Bn.current;return t===null?!0:(Pe&4194048)===Pe?li===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?t===li:!1}function r_(){var t=Q.H;return Q.H=Al,t===null?Al:t}function a_(){var t=Q.A;return Q.A=uA,t}function xc(){xt=4,fr||(Pe&4194048)!==Pe&&Bn.current!==null||(fo=!0),(dr&134217727)===0&&(ba&134217727)===0||ut===null||gr(ut,Pe,Fn,!1)}function bd(t,n,a){var o=Je;Je|=2;var h=r_(),f=a_();(ut!==t||Pe!==n)&&(Ic=null,go(t,n)),n=!1;var y=xt;e:do try{if(tt!==0&&Ve!==null){var T=Ve,C=Hn;switch(tt){case 8:Td(),y=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(n=!0);var z=tt;if(tt=0,Hn=null,yo(t,T,C,z),a&&fo){y=0;break e}break;default:z=tt,tt=0,Hn=null,yo(t,T,C,z)}}fA(),y=xt;break}catch(G){i_(t,G)}while(!0);return n&&t.shellSuspendCounter++,gs=da=null,Je=o,Q.H=h,Q.A=f,Ve===null&&(ut=null,Pe=0,Xu()),y}function fA(){for(;Ve!==null;)o_(Ve)}function dA(t,n){var a=Je;Je|=2;var o=r_(),h=a_();ut!==t||Pe!==n?(Ic=null,Rc=De()+500,go(t,n)):fo=yn(t,n);e:do try{if(tt!==0&&Ve!==null){n=Ve;var f=Hn;t:switch(tt){case 1:tt=0,Hn=null,yo(t,n,f,1);break;case 2:case 9:if(yg(f)){tt=0,Hn=null,l_(n);break}n=function(){tt!==2&&tt!==9||ut!==t||(tt=7),Ki(t)},f.then(n,n);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:yg(f)?(tt=0,Hn=null,l_(n)):(tt=0,Hn=null,yo(t,n,f,7));break;case 5:var y=null;switch(Ve.tag){case 26:y=Ve.memoizedState;case 5:case 27:var T=Ve;if(y?Y_(y):T.stateNode.complete){tt=0,Hn=null;var C=T.sibling;if(C!==null)Ve=C;else{var z=T.return;z!==null?(Ve=z,Nc(z)):Ve=null}break t}}tt=0,Hn=null,yo(t,n,f,5);break;case 6:tt=0,Hn=null,yo(t,n,f,6);break;case 8:Td(),xt=6;break e;default:throw Error(r(462))}}mA();break}catch(G){i_(t,G)}while(!0);return gs=da=null,Q.H=o,Q.A=h,Je=a,Ve!==null?0:(ut=null,Pe=0,Xu(),xt)}function mA(){for(;Ve!==null&&!ka();)o_(Ve)}function o_(t){var n=Dy(t.alternate,t,Rs);t.memoizedProps=t.pendingProps,n===null?Nc(t):Ve=n}function l_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=wy(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=wy(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:Pf(n);default:Vy(a,n),n=Ve=ag(n,Rs),n=Dy(a,n,Rs)}t.memoizedProps=t.pendingProps,n===null?Nc(t):Ve=n}function yo(t,n,a,o){gs=da=null,Pf(n),ro=null,pl=0;var h=n.return;try{if(nA(t,h,n,a,Pe)){xt=1,yc(t,si(a,t.current)),Ve=null;return}}catch(f){if(h!==null)throw Ve=h,f;xt=1,yc(t,si(a,t.current)),Ve=null;return}n.flags&32768?(He||o===1?t=!0:fo||(Pe&536870912)!==0?t=!1:(fr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),u_(n,t)):Nc(n)}function Nc(t){var n=t;do{if((n.flags&32768)!==0){u_(n,fr);return}t=n.return;var a=rA(n.alternate,n,Rs);if(a!==null){Ve=a;return}if(n=n.sibling,n!==null){Ve=n;return}Ve=n=t}while(n!==null);xt===0&&(xt=5)}function u_(t,n){do{var a=aA(t.alternate,t);if(a!==null){a.flags&=32767,Ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ve=t;return}Ve=t=a}while(t!==null);xt=6,Ve=null}function c_(t,n,a,o,h,f,y,T,C){t.cancelPendingCommit=null;do Dc();while(Gt!==0);if((Je&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cf,Xo(t,a,f,y,T,C),t===ut&&(Ve=ut=null,Pe=0),po=n,pr=t,Is=a,_d=f,vd=h,Wy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_A(Vn,function(){return p_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null,h=ie.p,ie.p=2,y=Je,Je|=4;try{oA(t,n,a)}finally{Je=y,ie.p=h,Q.T=o}}Gt=1,h_(),f_(),d_()}}function h_(){if(Gt===1){Gt=0;var t=pr,n=po,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var o=ie.p;ie.p=2;var h=Je;Je|=4;try{Gy(n,t);var f=Md,y=$p(t.containerInfo),T=f.focusedElem,C=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&Jp(T.ownerDocument.documentElement,T)){if(C!==null&&rf(T)){var z=C.start,G=C.end;if(G===void 0&&(G=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(G,T.value.length);else{var $=T.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var F=B.getSelection(),ce=T.textContent.length,ye=Math.min(C.start,ce),lt=C.end===void 0?ye:Math.min(C.end,ce);!F.extend&&ye>lt&&(y=lt,lt=ye,ye=y);var k=Xp(T,ye),O=Xp(T,lt);if(k&&O&&(F.rangeCount!==1||F.anchorNode!==k.node||F.anchorOffset!==k.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var U=$.createRange();U.setStart(k.node,k.offset),F.removeAllRanges(),ye>lt?(F.addRange(U),F.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),F.addRange(U))}}}}for($=[],F=T;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<$.length;T++){var K=$[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Hc=!!Vd,Md=Vd=null}finally{Je=h,ie.p=o,Q.T=a}}t.current=n,Gt=2}}function f_(){if(Gt===2){Gt=0;var t=pr,n=po,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var o=ie.p;ie.p=2;var h=Je;Je|=4;try{zy(t,n.alternate,n)}finally{Je=h,ie.p=o,Q.T=a}}Gt=3}}function d_(){if(Gt===4||Gt===3){Gt=0,Yr();var t=pr,n=po,a=Is,o=Wy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Gt=5:(Gt=0,po=pr=null,m_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(mr=null),Xn(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(un,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=Q.T,h=ie.p,ie.p=2,Q.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var T=o[y];f(T.value,{componentStack:T.stack})}}finally{Q.T=n,ie.p=h}}(Is&3)!==0&&Dc(),Ki(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Ed?Ol++:(Ol=0,Ed=t):Ol=0,Vl(0)}}function m_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,dl(n)))}function Dc(){return h_(),f_(),d_(),p_()}function p_(){if(Gt!==5)return!1;var t=pr,n=_d;_d=0;var a=Xn(Is),o=Q.T,h=ie.p;try{ie.p=32>a?32:a,Q.T=null,a=vd,vd=null;var f=pr,y=Is;if(Gt=0,po=pr=null,Is=0,(Je&6)!==0)throw Error(r(331));var T=Je;if(Je|=4,Jy(f.current),Yy(f,f.current,y,a),Je=T,Vl(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(un,f)}catch{}return!0}finally{ie.p=h,Q.T=o,m_(t,n)}}function g_(t,n,a){n=si(a,n),n=Zf(t.stateNode,n,2),t=lr(t,n,2),t!==null&&(ls(t,2),Ki(t))}function nt(t,n,a){if(t.tag===3)g_(t,t,a);else for(;n!==null;){if(n.tag===3){g_(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mr===null||!mr.has(o))){t=si(a,t),a=yy(2),o=lr(n,a,2),o!==null&&(_y(a,o,n,t),ls(o,2),Ki(o));break}}n=n.return}}function Ad(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new cA;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(pd=!0,h.add(a),t=pA.bind(null,t,n,a),n.then(t,t))}function pA(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(Pe&a)===a&&(xt===4||xt===3&&(Pe&62914560)===Pe&&300>De()-wc?(Je&2)===0&&go(t,0):gd|=a,mo===Pe&&(mo=0)),Ki(t)}function y_(t,n){n===0&&(n=Jr()),t=ca(t,n),t!==null&&(ls(t,n),Ki(t))}function gA(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),y_(t,a)}function yA(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),y_(t,a)}function _A(t,n){return St(t,n)}var Oc=null,_o=null,Sd=!1,Vc=!1,wd=!1,yr=0;function Ki(t){t!==_o&&t.next===null&&(_o===null?Oc=_o=t:_o=_o.next=t),Vc=!0,Sd||(Sd=!0,EA())}function Vl(t,n){if(!wd&&Vc){wd=!0;do for(var a=!1,o=Oc;o!==null;){if(t!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var y=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-mt(42|t)+1)-1,f&=h&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T_(o,f))}else f=Pe,f=kn(o,o===ut?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||yn(o,f)||(a=!0,T_(o,f));o=o.next}while(a);wd=!1}}function vA(){__()}function __(){Vc=Sd=!1;var t=0;yr!==0&&NA()&&(t=yr);for(var n=De(),a=null,o=Oc;o!==null;){var h=o.next,f=v_(o,n);f===0?(o.next=null,a===null?Oc=h:a.next=h,h===null&&(_o=a)):(a=o,(t!==0||(f&3)!==0)&&(Vc=!0)),o=h}Gt!==0&&Gt!==5||Vl(t),yr!==0&&(yr=0)}function v_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-mt(f),T=1<<y,C=h[y];C===-1?((T&a)===0||(T&o)!==0)&&(h[y]=os(T,n)):C<=n&&(t.expiredLanes|=T),f&=~T}if(n=ut,a=Pe,a=kn(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(tt===2||tt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&_i(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||yn(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&_i(o),Xn(a)){case 2:case 8:a=rs;break;case 32:a=Vn;break;case 268435456:a=ln;break;default:a=Vn}return o=E_.bind(null,t),a=St(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&_i(o),t.callbackPriority=2,t.callbackNode=null,2}function E_(t,n){if(Gt!==0&&Gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dc()&&t.callbackNode!==a)return null;var o=Pe;return o=kn(t,t===ut?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(t_(t,o,n),v_(t,De()),t.callbackNode!=null&&t.callbackNode===a?E_.bind(null,t):null)}function T_(t,n){if(Dc())return null;t_(t,n,!0)}function EA(){OA(function(){(Je&6)!==0?St(ki,vA):__()})}function Rd(){if(yr===0){var t=no;t===0&&(t=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),yr=t}return yr}function b_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ba(""+t)}function A_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function TA(t,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var f=b_((h[kt]||null).action),y=o.submitter;y&&(n=(n=y[kt]||null)?b_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Bi("action","action",null,o,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yr!==0){var C=y?A_(h,y):new FormData(h);Qf(a,{pending:!0,data:C,method:h.method,action:f},null,C)}}else typeof f=="function"&&(T.preventDefault(),C=y?A_(h,y):new FormData(h),Qf(a,{pending:!0,data:C,method:h.method,action:f},f,C))},currentTarget:h}]})}}for(var Id=0;Id<uf.length;Id++){var Cd=uf[Id],bA=Cd.toLowerCase(),AA=Cd[0].toUpperCase()+Cd.slice(1);Ri(bA,"on"+AA)}Ri(eg,"onAnimationEnd"),Ri(tg,"onAnimationIteration"),Ri(ng,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Ub,"onTransitionRun"),Ri(zb,"onTransitionStart"),Ri(Bb,"onTransitionCancel"),Ri(ig,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function S_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],h=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],C=T.instance,z=T.currentTarget;if(T=T.listener,C!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=z;try{f(h)}catch(G){Ku(G)}h.currentTarget=null,f=C}else for(y=0;y<o.length;y++){if(T=o[y],C=T.instance,z=T.currentTarget,T=T.listener,C!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=z;try{f(h)}catch(G){Ku(G)}h.currentTarget=null,f=C}}}}function Me(t,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=t+"__bubble";a.has(o)||(w_(n,t,2,!1),a.add(o))}function xd(t,n,a){var o=0;n&&(o|=4),w_(a,t,o,n)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Nd(t){if(!t[Mc]){t[Mc]=!0,w.forEach(function(a){a!=="selectionchange"&&(SA.has(a)||xd(a,!1,t),xd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Mc]||(n[Mc]=!0,xd("selectionchange",!1,n))}}function w_(t,n,a,o){switch(ev(n)){case 2:var h=ZA;break;case 8:h=WA;break;default:h=Gd}a=h.bind(null,n,a,t),h=void 0,!na||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?t.addEventListener(n,a,{capture:!0,passive:h}):t.addEventListener(n,a,!0):h!==void 0?t.addEventListener(n,a,{passive:h}):t.addEventListener(n,a,!1)}function Dd(t,n,a,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===h)break;if(y===4)for(y=o.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===h)return;y=y.return}for(;T!==null;){if(y=Zn(T),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){o=f=y;continue e}T=T.parentNode}}o=o.return}Zs(function(){var z=f,G=ei(a),$=[];e:{var B=sg.get(t);if(B!==void 0){var F=Bi,ce=t;switch(t){case"keypress":if(sa(a)===0)break e;case"keydown":case"keyup":F=Gu;break;case"focusin":ce="focus",F=aa;break;case"focusout":ce="blur",F=aa;break;case"beforeblur":case"afterblur":F=aa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=m;break;case eg:case tg:case ng:F=Lu;break;case ig:F=A;break;case"scroll":case"scrollend":F=sl;break;case"wheel":F=H;break;case"copy":case"cut":case"paste":F=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ds;break;case"toggle":case"beforetoggle":F=Ie}var ye=(n&4)!==0,lt=!ye&&(t==="scroll"||t==="scrollend"),k=ye?B!==null?B+"Capture":null:B;ye=[];for(var O=z,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||k===null||(K=bi(O,k),K!=null&&ye.push(jl(O,K,U))),lt)break;O=O.return}0<ye.length&&(B=new F(B,ce,null,a,G),$.push({event:B,listeners:ye}))}}if((n&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",B&&a!==tl&&(ce=a.relatedTarget||a.fromElement)&&(Zn(ce)||ce[Jn]))break e;if((F||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,F?(ce=a.relatedTarget||a.toElement,F=z,ce=ce?Zn(ce):null,ce!==null&&(lt=c(ce),ye=ce.tag,ce!==lt||ye!==5&&ye!==27&&ye!==6)&&(ce=null)):(F=null,ce=z),F!==ce)){if(ye=rl,K="onMouseLeave",k="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(ye=ds,K="onPointerLeave",k="onPointerEnter",O="pointer"),lt=F==null?B:_n(F),U=ce==null?B:_n(ce),B=new ye(K,O+"leave",F,a,G),B.target=lt,B.relatedTarget=U,K=null,Zn(G)===z&&(ye=new ye(k,O+"enter",ce,a,G),ye.target=U,ye.relatedTarget=lt,K=ye),lt=K,F&&ce)t:{for(ye=wA,k=F,O=ce,U=0,K=k;K;K=ye(K))U++;K=0;for(var de=O;de;de=ye(de))K++;for(;0<U-K;)k=ye(k),U--;for(;0<K-U;)O=ye(O),K--;for(;U--;){if(k===O||O!==null&&k===O.alternate){ye=k;break t}k=ye(k),O=ye(O)}ye=null}else ye=null;F!==null&&R_($,B,F,ye,!1),ce!==null&&lt!==null&&R_($,lt,ce,ye,!0)}}e:{if(B=z?_n(z):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var Qe=Hp;else if(Bp(B))if(Fp)Qe=kb;else{Qe=Mb;var fe=Vb}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&za(z.elementType)&&(Qe=Hp):Qe=jb;if(Qe&&(Qe=Qe(t,z))){qp($,Qe,a,G);break e}fe&&fe(t,B,z),t==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Zo(B,"number",B.value)}switch(fe=z?_n(z):window,t){case"focusin":(Bp(fe)||fe.contentEditable==="true")&&(Ka=fe,af=z,cl=null);break;case"focusout":cl=af=Ka=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Zp($,a,G);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":Zp($,a,G)}var Ne;if(Xe)e:{switch(t){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ya?oa(t,a)&&(Le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Fi&&a.locale!=="ko"&&(Ya||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ya&&(Ne=il()):(zi=G,nl="value"in zi?zi.value:zi.textContent,Ya=!0)),fe=jc(z,Le),0<fe.length&&(Le=new Hi(Le,t,null,a,G),$.push({event:Le,listeners:fe}),Ne?Le.data=Ne:(Ne=Qa(a),Ne!==null&&(Le.data=Ne)))),(Ne=ni?xb(t,a):Nb(t,a))&&(Le=jc(z,"onBeforeInput"),0<Le.length&&(fe=new Hi("onBeforeInput","beforeinput",null,a,G),$.push({event:fe,listeners:Le}),fe.data=Ne)),TA($,t,z,a,G)}S_($,n)})}function jl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jc(t,n){for(var a=n+"Capture",o=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=bi(t,a),h!=null&&o.unshift(jl(t,h,f)),h=bi(t,n),h!=null&&o.push(jl(t,h,f))),t.tag===3)return o;t=t.return}return[]}function wA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function R_(t,n,a,o,h){for(var f=n._reactName,y=[];a!==null&&a!==o;){var T=a,C=T.alternate,z=T.stateNode;if(T=T.tag,C!==null&&C===o)break;T!==5&&T!==26&&T!==27||z===null||(C=z,h?(z=bi(a,f),z!=null&&y.unshift(jl(a,z,C))):h||(z=bi(a,f),z!=null&&y.push(jl(a,z,C)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var RA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function I_(t){return(typeof t=="string"?t:""+t).replace(RA,`
`).replace(IA,"")}function C_(t,n){return n=I_(n),I_(t)===n}function ot(t,n,a,o,h,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wn(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":el(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ba(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ot(t,n,"name",h.name,h,null),ot(t,n,"formEncType",h.formEncType,h,null),ot(t,n,"formMethod",h.formMethod,h,null),ot(t,n,"formTarget",h.formTarget,h,null)):(ot(t,n,"encType",h.encType,h,null),ot(t,n,"method",h.method,h,null),ot(t,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ba(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ti);break;case"onScroll":o!=null&&Me("scroll",t);break;case"onScrollEnd":o!=null&&Me("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ba(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Ei(t,"popover",o);break;case"xlinkActuate":vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":vt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":vt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":vt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":vt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ei(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ju.get(a)||a,Ei(t,a,o))}}function Od(t,n,a,o,h,f){switch(a){case"style":el(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?wn(t,o):(typeof o=="number"||typeof o=="bigint")&&wn(t,""+o);break;case"onScroll":o!=null&&Me("scroll",t);break;case"onScrollEnd":o!=null&&Me("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!q.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),f=t[kt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,h);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ei(t,a,o)}}}function sn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ot(t,n,f,y,a,null)}}h&&ot(t,n,"srcSet",a.srcSet,a,null),o&&ot(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var T=f=y=h=null,C=null,z=null;for(o in a)if(a.hasOwnProperty(o)){var G=a[o];if(G!=null)switch(o){case"name":h=G;break;case"type":y=G;break;case"checked":C=G;break;case"defaultChecked":z=G;break;case"value":f=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,n));break;default:ot(t,n,o,G,a,null)}}Ou(t,f,T,C,z,y,h,!1);return;case"select":Me("invalid",t),o=y=f=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:ot(t,n,h,T,a,null)}n=f,a=y,t.multiple=!!o,n!=null?Ks(t,!!o,n,!1):a!=null&&Ks(t,!!o,a,!0);return;case"textarea":Me("invalid",t),f=h=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ot(t,n,y,T,a,null)}Xs(t,o,h,f);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(o=a[C],o!=null))switch(C){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ot(t,n,C,o,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(o=0;o<Ml.length;o++)Me(Ml[o],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ot(t,n,z,o,a,null)}return;default:if(za(n)){for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!==void 0&&Od(t,n,G,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&ot(t,n,T,o,a,null))}function CA(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,y=null,T=null,C=null,z=null,G=null;for(F in a){var $=a[F];if(a.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=$;default:o.hasOwnProperty(F)||ot(t,n,F,null,o,$)}}for(var B in o){var F=o[B];if($=a[B],o.hasOwnProperty(B)&&(F!=null||$!=null))switch(B){case"type":f=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":y=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,n));break;default:F!==$&&ot(t,n,B,F,o,$)}}Ua(t,y,T,C,z,G,f,h);return;case"select":F=y=T=B=null;for(f in a)if(C=a[f],a.hasOwnProperty(f)&&C!=null)switch(f){case"value":break;case"multiple":F=C;default:o.hasOwnProperty(f)||ot(t,n,f,null,o,C)}for(h in o)if(f=o[h],C=a[h],o.hasOwnProperty(h)&&(f!=null||C!=null))switch(h){case"value":B=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==C&&ot(t,n,h,f,o,C)}n=T,a=y,o=F,B!=null?Ks(t,!!a,B,!1):!!o!=!!a&&(n!=null?Ks(t,!!a,n,!0):Ks(t,!!a,a?[]:"",!1));return;case"textarea":F=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ot(t,n,T,null,o,h)}for(y in o)if(h=o[y],f=a[y],o.hasOwnProperty(y)&&(h!=null||f!=null))switch(y){case"value":B=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==f&&ot(t,n,y,h,o,f)}Vu(t,B,F);return;case"option":for(var ce in a)if(B=a[ce],a.hasOwnProperty(ce)&&B!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:ot(t,n,ce,null,o,B)}for(C in o)if(B=o[C],F=a[C],o.hasOwnProperty(C)&&B!==F&&(B!=null||F!=null))switch(C){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:ot(t,n,C,B,o,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)B=a[ye],a.hasOwnProperty(ye)&&B!=null&&!o.hasOwnProperty(ye)&&ot(t,n,ye,null,o,B);for(z in o)if(B=o[z],F=a[z],o.hasOwnProperty(z)&&B!==F&&(B!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,n));break;default:ot(t,n,z,B,o,F)}return;default:if(za(n)){for(var lt in a)B=a[lt],a.hasOwnProperty(lt)&&B!==void 0&&!o.hasOwnProperty(lt)&&Od(t,n,lt,void 0,o,B);for(G in o)B=o[G],F=a[G],!o.hasOwnProperty(G)||B===F||B===void 0&&F===void 0||Od(t,n,G,B,o,F);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!o.hasOwnProperty(k)&&ot(t,n,k,null,o,B);for($ in o)B=o[$],F=a[$],!o.hasOwnProperty($)||B===F||B==null&&F==null||ot(t,n,$,B,o,F)}function x_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],f=h.transferSize,y=h.initiatorType,T=h.duration;if(f&&T&&x_(y)){for(y=0,T=h.responseEnd,o+=1;o<a.length;o++){var C=a[o],z=C.startTime;if(z>T)break;var G=C.transferSize,$=C.initiatorType;G&&x_($)&&(C=C.responseEnd,y+=G*(C<T?1:(T-z)/(C-z)))}if(--o,n+=8*(f+y)/(h.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vd=null,Md=null;function kc(t){return t.nodeType===9?t:t.ownerDocument}function N_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kd=null;function NA(){var t=window.event;return t&&t.type==="popstate"?t===kd?!1:(kd=t,!0):(kd=null,!1)}var O_=typeof setTimeout=="function"?setTimeout:void 0,DA=typeof clearTimeout=="function"?clearTimeout:void 0,V_=typeof Promise=="function"?Promise:void 0,OA=typeof queueMicrotask=="function"?queueMicrotask:typeof V_<"u"?function(t){return V_.resolve(null).then(t).catch(VA)}:O_;function VA(t){setTimeout(function(){throw t})}function _r(t){return t==="head"}function M_(t,n){var a=n,o=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(h),bo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")kl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,kl(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[$n]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&kl(t.ownerDocument.body);a=h}while(a);bo(n)}function j_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pd(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function MA(t,n,a,o){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[$n])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function jA(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function k_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Ld(t){return t.data==="$?"||t.data==="$~"}function Ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kA(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zd=null;function P_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function L_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function U_(t,n,a){switch(n=kc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function kl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qs(t)}var ci=new Map,z_=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Cs=ie.d;ie.d={f:PA,r:LA,D:UA,C:zA,L:BA,m:qA,X:FA,S:HA,M:GA};function PA(){var t=Cs.f(),n=Cc();return t||n}function LA(t){var n=bn(t);n!==null&&n.tag===5&&n.type==="form"?iy(n):Cs.r(t)}var vo=typeof document>"u"?null:document;function B_(t,n,a){var o=vo;if(o&&typeof n=="string"&&n){var h=Sn(n);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),z_.has(h)||(z_.add(h),t={rel:t,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),sn(n,"link",t),pt(n),o.head.appendChild(n)))}}function UA(t){Cs.D(t),B_("dns-prefetch",t,null)}function zA(t,n){Cs.C(t,n),B_("preconnect",t,n)}function BA(t,n,a){Cs.L(t,n,a);var o=vo;if(o&&t&&n){var h='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Sn(a.imageSizes)+'"]')):h+='[href="'+Sn(t)+'"]';var f=h;switch(n){case"style":f=Eo(t);break;case"script":f=To(t)}ci.has(f)||(t=R({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),o.querySelector(h)!==null||n==="style"&&o.querySelector(Pl(f))||n==="script"&&o.querySelector(Ll(f))||(n=o.createElement("link"),sn(n,"link",t),pt(n),o.head.appendChild(n)))}}function qA(t,n){Cs.m(t,n);var a=vo;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(t)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=To(t)}if(!ci.has(f)&&(t=R({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}o=a.createElement("link"),sn(o,"link",t),pt(o),a.head.appendChild(o)}}}function HA(t,n,a){Cs.S(t,n,a);var o=vo;if(o&&t){var h=Wn(o).hoistableStyles,f=Eo(t);n=n||"default";var y=h.get(f);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(Pl(f)))T.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Bd(t,a);var C=y=o.createElement("link");pt(C),sn(C,"link",t),C._p=new Promise(function(z,G){C.onload=z,C.onerror=G}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Lc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},h.set(f,y)}}}function FA(t,n){Cs.X(t,n);var a=vo;if(a&&t){var o=Wn(a).hoistableScripts,h=To(t),f=o.get(h);f||(f=a.querySelector(Ll(h)),f||(t=R({src:t,async:!0},n),(n=ci.get(h))&&qd(t,n),f=a.createElement("script"),pt(f),sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function GA(t,n){Cs.M(t,n);var a=vo;if(a&&t){var o=Wn(a).hoistableScripts,h=To(t),f=o.get(h);f||(f=a.querySelector(Ll(h)),f||(t=R({src:t,async:!0,type:"module"},n),(n=ci.get(h))&&qd(t,n),f=a.createElement("script"),pt(f),sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function q_(t,n,a,o){var h=(h=be.current)?Pc(h):null;if(!h)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Eo(a.href),a=Wn(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Eo(a.href);var f=Wn(h).hoistableStyles,y=f.get(t);if(y||(h=h.ownerDocument||h,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=h.querySelector(Pl(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||QA(h,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=To(a),a=Wn(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Eo(t){return'href="'+Sn(t)+'"'}function Pl(t){return'link[rel="stylesheet"]['+t+"]"}function H_(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function QA(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),sn(n,"link",a),pt(n),t.head.appendChild(n))}function To(t){return'[src="'+Sn(t)+'"]'}function Ll(t){return"script[async]"+t}function F_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,pt(o),o;var h=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),pt(o),sn(o,"style",h),Lc(o,a.precedence,t),n.instance=o;case"stylesheet":h=Eo(a.href);var f=t.querySelector(Pl(h));if(f)return n.state.loading|=4,n.instance=f,pt(f),f;o=H_(a),(h=ci.get(h))&&Bd(o,h),f=(t.ownerDocument||t).createElement("link"),pt(f);var y=f;return y._p=new Promise(function(T,C){y.onload=T,y.onerror=C}),sn(f,"link",o),n.state.loading|=4,Lc(f,a.precedence,t),n.instance=f;case"script":return f=To(a.src),(h=t.querySelector(Ll(f)))?(n.instance=h,pt(h),h):(o=a,(h=ci.get(f))&&(o=R({},a),qd(o,h)),t=t.ownerDocument||t,h=t.createElement("script"),pt(h),sn(h,"link",o),t.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Lc(o,a.precedence,t));return n.instance}function Lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uc=null;function G_(t,n,a){if(Uc===null){var o=new Map,h=Uc=new Map;h.set(a,o)}else h=Uc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var f=a[h];if(!(f[$n]||f[It]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var T=o.get(y);T?T.push(f):o.set(y,[f])}}return o}function Q_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function YA(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function KA(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Eo(o.href),f=n.querySelector(Pl(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,pt(f);return}f=n.ownerDocument||n,o=H_(o),(h=ci.get(h))&&Bd(o,h),f=f.createElement("link"),pt(f);var y=f;y._p=new Promise(function(T,C){y.onload=T,y.onerror=C}),sn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hd=0;function XA(t,n){return t.stylesheets&&t.count===0&&qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Hd===0&&(Hd=62500*xA());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Hd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bc=null;function qc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bc=new Map,n.forEach(JA,t),Bc=null,zc.call(t))}function JA(t,n){if(!(n.state.loading&4)){var a=Bc.get(t);if(a)var o=a.get(null);else{a=new Map,Bc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var y=h[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}h=n.instance,y=h.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,h),a.set(y,h),this.count++,o=zc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),n.state.loading|=4}}var Ul={$$typeof:ge,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function $A(t,n,a,o,h,f,y,T,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.hiddenUpdates=Kn(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function K_(t,n,a,o,h,f,y,T,C,z,G,$){return t=new $A(t,n,a,y,C,z,G,$,T),n=1,f===!0&&(n|=24),f=zn(3,null,null,n),t.current=f,f.stateNode=t,n=bf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Rf(f),t}function X_(t){return t?(t=$a,t):$a}function J_(t,n,a,o,h,f){h=X_(h),o.context===null?o.context=h:o.pendingContext=h,o=or(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=lr(t,o,n),a!==null&&(Nn(a,t,n),yl(a,t,n))}function $_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Fd(t,n){$_(t,n),(t=t.alternate)&&$_(t,n)}function Z_(t){if(t.tag===13||t.tag===31){var n=ca(t,67108864);n!==null&&Nn(n,t,67108864),Fd(t,67108864)}}function W_(t){if(t.tag===13||t.tag===31){var n=Gn();n=cs(n);var a=ca(t,n);a!==null&&Nn(a,t,n),Fd(t,n)}}var Hc=!0;function ZA(t,n,a,o){var h=Q.T;Q.T=null;var f=ie.p;try{ie.p=2,Gd(t,n,a,o)}finally{ie.p=f,Q.T=h}}function WA(t,n,a,o){var h=Q.T;Q.T=null;var f=ie.p;try{ie.p=8,Gd(t,n,a,o)}finally{ie.p=f,Q.T=h}}function Gd(t,n,a,o){if(Hc){var h=Qd(o);if(h===null)Dd(t,n,o,Fc,a),tv(t,o);else if(tS(h,t,n,a,o))o.stopPropagation();else if(tv(t,o),n&4&&-1<eS.indexOf(t)){for(;h!==null;){var f=bn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=jn(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var C=1<<31-mt(y);T.entanglements[1]|=C,y&=~C}Ki(f),(Je&6)===0&&(Rc=De()+500,Vl(0))}}break;case 31:case 13:T=ca(f,2),T!==null&&Nn(T,f,2),Cc(),Fd(f,2)}if(f=Qd(o),f===null&&Dd(t,n,o,Fc,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else Dd(t,n,o,null,a)}}function Qd(t){return t=ei(t),Yd(t)}var Fc=null;function Yd(t){if(Fc=null,t=Zn(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fc=t,null}function ev(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jt()){case ki:return 2;case rs:return 8;case Vn:case Kr:return 32;case ln:return 268435456;default:return 32}default:return 32}}var Kd=!1,vr=null,Er=null,Tr=null,zl=new Map,Bl=new Map,br=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(t,n){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":zl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function ql(t,n,a,o,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=bn(n),n!==null&&Z_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function tS(t,n,a,o,h){switch(n){case"focusin":return vr=ql(vr,t,n,a,o,h),!0;case"dragenter":return Er=ql(Er,t,n,a,o,h),!0;case"mouseover":return Tr=ql(Tr,t,n,a,o,h),!0;case"pointerover":var f=h.pointerId;return zl.set(f,ql(zl.get(f)||null,t,n,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,Bl.set(f,ql(Bl.get(f)||null,t,n,a,o,h)),!0}return!1}function nv(t){var n=Zn(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Pn(t.priority,function(){W_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Pn(t.priority,function(){W_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);tl=o,a.target.dispatchEvent(o),tl=null}else return n=bn(a),n!==null&&Z_(n),t.blockedOn=a,!1;n.shift()}return!0}function iv(t,n,a){Gc(t)&&a.delete(n)}function nS(){Kd=!1,vr!==null&&Gc(vr)&&(vr=null),Er!==null&&Gc(Er)&&(Er=null),Tr!==null&&Gc(Tr)&&(Tr=null),zl.forEach(iv),Bl.forEach(iv)}function Qc(t,n){t.blockedOn===n&&(t.blockedOn=null,Kd||(Kd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,nS)))}var Yc=null;function sv(t){Yc!==t&&(Yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],h=t[n+2];if(typeof o!="function"){if(Yd(o||a)===null)continue;break}var f=bn(a);f!==null&&(t.splice(n,3),n-=3,Qf(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function bo(t){function n(C){return Qc(C,t)}vr!==null&&Qc(vr,t),Er!==null&&Qc(Er,t),Tr!==null&&Qc(Tr,t),zl.forEach(n),Bl.forEach(n);for(var a=0;a<br.length;a++){var o=br[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<br.length&&(a=br[0],a.blockedOn===null);)nv(a),a.blockedOn===null&&br.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],y=h[kt]||null;if(typeof f=="function")y||sv(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,y=f[kt]||null)T=y.formAction;else if(Yd(h)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),sv(a)}}}function rv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return h=y})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function Xd(t){this._internalRoot=t}Kc.prototype.render=Xd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Gn();J_(a,o,t,n,null,null)},Kc.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;J_(t.current,2,null,t,null,null),Cc(),n[Jn]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<br.length&&n!==0&&n<br[a].priority;a++);br.splice(a,0,t),a===0&&nv(t)}};var av=e.version;if(av!=="19.2.5")throw Error(r(527,av,"19.2.5"));ie.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var iS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{un=Xc.inject(iS),wt=Xc}catch{}}return Fl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",h=dy,f=my,y=py;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=K_(t,1,!1,null,null,a,o,null,h,f,y,rv),t[Jn]=n.current,Nd(t),new Xd(n)},Fl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,h="",f=dy,y=my,T=py,C=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),n=K_(t,1,!0,n,a??null,o,h,C,f,y,T,rv),n.context=X_(null),a=n.current,o=Gn(),o=cs(o),h=or(o),h.callback=null,lr(a,h,o),a=o,n.current.lanes=a,ls(n,a),Ki(n),t[Jn]=n.current,Nd(t),new Kc(n)},Fl.version="19.2.5",Fl}var gv;function mS(){if(gv)return Zd.exports;gv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zd.exports=dS(),Zd.exports}var pS=mS();const gS=$E(pS),yS=()=>{};var yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=function(s){const e=[];let i=0;for(let r=0;r<s.length;r++){let l=s.charCodeAt(r);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++r)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},_S=function(s){const e=[];let i=0,r=0;for(;i<s.length;){const l=s[i++];if(l<128)e[r++]=String.fromCharCode(l);else if(l>191&&l<224){const c=s[i++];e[r++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=s[i++],d=s[i++],p=s[i++],g=((l&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=s[i++],d=s[i++];e[r++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},WE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let l=0;l<s.length;l+=3){const c=s[l],d=l+1<s.length,p=d?s[l+1]:0,g=l+2<s.length,_=g?s[l+2]:0,b=c>>2,R=(c&3)<<4|p>>4;let M=(p&15)<<2|_>>6,Y=_&63;g||(Y=64,d||(M=64)),r.push(i[b],i[R],i[M],i[Y])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(ZE(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):_S(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let l=0;l<s.length;){const c=i[s.charAt(l++)],p=l<s.length?i[s.charAt(l)]:0;++l;const _=l<s.length?i[s.charAt(l)]:64;++l;const R=l<s.length?i[s.charAt(l)]:64;if(++l,c==null||p==null||_==null||R==null)throw new vS;const M=c<<2|p>>4;if(r.push(M),_!==64){const Y=p<<4&240|_>>2;if(r.push(Y),R!==64){const ee=_<<6&192|R;r.push(ee)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class vS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ES=function(s){const e=ZE(s);return WE.encodeByteArray(e,!0)},gh=function(s){return ES(s).replace(/\./g,"")},eT=function(s){try{return WE.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bS=()=>TS().__FIREBASE_DEFAULTS__,AS=()=>{if(typeof process>"u"||typeof yv>"u")return;const s=yv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},SS=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&eT(s[1]);return e&&JSON.parse(e)},jh=()=>{try{return yS()||bS()||AS()||SS()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},tT=s=>{var e,i;return(i=(e=jh())==null?void 0:e.emulatorHosts)==null?void 0:i[s]},wS=s=>{const e=tT(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},nT=()=>{var s;return(s=jh())==null?void 0:s.config},iT=s=>{var e;return(e=jh())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function IS(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",l=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${r}`,aud:r,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[gh(JSON.stringify(i)),gh(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function xS(){var e;const s=(e=jh())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DS(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function OS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VS(){const s=pn();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function MS(){return!xS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jS(){try{return typeof indexedDB=="object"}catch{return!1}}function kS(){return new Promise((s,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(r);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;e(((c=l.error)==null?void 0:c.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="FirebaseError";class Us extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=PS,Object.setPrototypeOf(this,Us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_u.prototype.create)}}class _u{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?LS(c,r):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Us(l,p,r)}}function LS(s,e){return s.replace(US,(i,r)=>{const l=e[r];return l!=null?String(l):`<${r}?>`})}const US=/\{\$([^}]+)}/g;function zS(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ia(s,e){if(s===e)return!0;const i=Object.keys(s),r=Object.keys(e);for(const l of i){if(!r.includes(l))return!1;const c=s[l],d=e[l];if(_v(c)&&_v(d)){if(!Ia(c,d))return!1}else if(c!==d)return!1}for(const l of r)if(!i.includes(l))return!1;return!0}function _v(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(s){const e=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jl(s){const e={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[l,c]=r.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function $l(s){const e=s.indexOf("?");if(!e)return"";const i=s.indexOf("#",e);return s.substring(e,i>0?i:void 0)}function BS(s,e){const i=new qS(s,e);return i.subscribe.bind(i)}class qS{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let l;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");HS(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:r},l.next===void 0&&(l.next=nm),l.error===void 0&&(l.error=nm),l.complete===void 0&&(l.complete=nm);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HS(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function nm(){}/**
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
 */function Ft(s){return s&&s._delegate?s._delegate:s}/**
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
 */function Eu(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sT(s){return(await fetch(s,{credentials:"include"})).ok}class Ca{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Aa="[DEFAULT]";/**
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
 */class FS{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new RS;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&r.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(r)return null;throw l}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QS(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});r.resolve(c)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&d.resolve(l)}return l}onInit(e,i){const r=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(r)??new Set;l.add(e),this.onInitCallbacks.set(r,l);const c=this.instances.get(r);return c&&e(c,r),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const l of r)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(s){return s===Aa?void 0:s}function QS(s){return s.instantiationMode==="EAGER"}/**
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
 */class YS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new FS(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ue||(Ue={}));const KS={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},XS=Ue.INFO,JS={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},$S=(s,e,...i)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),l=JS[e];if(l)console[l](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gm{constructor(e){this.name=e,this._logLevel=XS,this._logHandler=$S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const ZS=(s,e)=>e.some(i=>s instanceof i);let vv,Ev;function WS(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e1(){return Ev||(Ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,vm=new WeakMap,aT=new WeakMap,im=new WeakMap,Qm=new WeakMap;function t1(s){const e=new Promise((i,r)=>{const l=()=>{s.removeEventListener("success",c),s.removeEventListener("error",d)},c=()=>{i(Nr(s.result)),l()},d=()=>{r(s.error),l()};s.addEventListener("success",c),s.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&rT.set(i,s)}).catch(()=>{}),Qm.set(e,s),e}function n1(s){if(vm.has(s))return;const e=new Promise((i,r)=>{const l=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",d),s.removeEventListener("abort",d)},c=()=>{i(),l()},d=()=>{r(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",c),s.addEventListener("error",d),s.addEventListener("abort",d)});vm.set(s,e)}let Em={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return vm.get(s);if(e==="objectStoreNames")return s.objectStoreNames||aT.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Nr(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function i1(s){Em=s(Em)}function s1(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=s.call(sm(this),e,...i);return aT.set(r,e.sort?e.sort():[e]),Nr(r)}:e1().includes(s)?function(...e){return s.apply(sm(this),e),Nr(rT.get(this))}:function(...e){return Nr(s.apply(sm(this),e))}}function r1(s){return typeof s=="function"?s1(s):(s instanceof IDBTransaction&&n1(s),ZS(s,WS())?new Proxy(s,Em):s)}function Nr(s){if(s instanceof IDBRequest)return t1(s);if(im.has(s))return im.get(s);const e=r1(s);return e!==s&&(im.set(s,e),Qm.set(e,s)),e}const sm=s=>Qm.get(s);function a1(s,e,{blocked:i,upgrade:r,blocking:l,terminated:c}={}){const d=indexedDB.open(s,e),p=Nr(d);return r&&d.addEventListener("upgradeneeded",g=>{r(Nr(d.result),g.oldVersion,g.newVersion,Nr(d.transaction),g)}),i&&d.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const o1=["get","getKey","getAll","getAllKeys","count"],l1=["put","add","delete","clear"],rm=new Map;function Tv(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(rm.get(e))return rm.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,l=l1.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(l||o1.includes(i)))return;const c=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let _=g.store;return r&&(_=_.index(p.shift())),(await Promise.all([_[i](...p),l&&g.done]))[0]};return rm.set(e,c),c}i1(s=>({...s,get:(e,i,r)=>Tv(e,i)||s.get(e,i,r),has:(e,i)=>!!Tv(e,i)||s.has(e,i)}));/**
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
 */class u1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(c1(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function c1(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tm="@firebase/app",bv="0.14.11";/**
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
 */const js=new Gm("@firebase/app"),h1="@firebase/app-compat",f1="@firebase/analytics-compat",d1="@firebase/analytics",m1="@firebase/app-check-compat",p1="@firebase/app-check",g1="@firebase/auth",y1="@firebase/auth-compat",_1="@firebase/database",v1="@firebase/data-connect",E1="@firebase/database-compat",T1="@firebase/functions",b1="@firebase/functions-compat",A1="@firebase/installations",S1="@firebase/installations-compat",w1="@firebase/messaging",R1="@firebase/messaging-compat",I1="@firebase/performance",C1="@firebase/performance-compat",x1="@firebase/remote-config",N1="@firebase/remote-config-compat",D1="@firebase/storage",O1="@firebase/storage-compat",V1="@firebase/firestore",M1="@firebase/ai",j1="@firebase/firestore-compat",k1="firebase",P1="12.12.0";/**
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
 */const bm="[DEFAULT]",L1={[Tm]:"fire-core",[h1]:"fire-core-compat",[d1]:"fire-analytics",[f1]:"fire-analytics-compat",[p1]:"fire-app-check",[m1]:"fire-app-check-compat",[g1]:"fire-auth",[y1]:"fire-auth-compat",[_1]:"fire-rtdb",[v1]:"fire-data-connect",[E1]:"fire-rtdb-compat",[T1]:"fire-fn",[b1]:"fire-fn-compat",[A1]:"fire-iid",[S1]:"fire-iid-compat",[w1]:"fire-fcm",[R1]:"fire-fcm-compat",[I1]:"fire-perf",[C1]:"fire-perf-compat",[x1]:"fire-rc",[N1]:"fire-rc-compat",[D1]:"fire-gcs",[O1]:"fire-gcs-compat",[V1]:"fire-fst",[j1]:"fire-fst-compat",[M1]:"fire-vertex","fire-js":"fire-js",[k1]:"fire-js-all"};/**
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
 */const yh=new Map,U1=new Map,Am=new Map;function Av(s,e){try{s.container.addComponent(e)}catch(i){js.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function Mo(s){const e=s.name;if(Am.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;Am.set(e,s);for(const i of yh.values())Av(i,s);for(const i of U1.values())Av(i,s);return!0}function Ym(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function Qn(s){return s==null?!1:s.settings!==void 0}/**
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
 */const z1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new _u("app","Firebase",z1);/**
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
 */class B1{constructor(e,i,r){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ca("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const qo=P1;function oT(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const r={name:bm,automaticDataCollectionEnabled:!0,...e},l=r.name;if(typeof l!="string"||!l)throw Dr.create("bad-app-name",{appName:String(l)});if(i||(i=nT()),!i)throw Dr.create("no-options");const c=yh.get(l);if(c){if(Ia(i,c.options)&&Ia(r,c.config))return c;throw Dr.create("duplicate-app",{appName:l})}const d=new YS(l);for(const g of Am.values())d.addComponent(g);const p=new B1(i,r,d);return yh.set(l,p),p}function lT(s=bm){const e=yh.get(s);if(!e&&s===bm&&nT())return oT();if(!e)throw Dr.create("no-app",{appName:s});return e}function Or(s,e,i){let r=L1[s]??s;i&&(r+=`-${i}`);const l=r.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${r}" with version "${e}":`];l&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(d.join(" "));return}Mo(new Ca(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const q1="firebase-heartbeat-database",H1=1,ou="firebase-heartbeat-store";let am=null;function uT(){return am||(am=a1(q1,H1,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(ou)}catch(i){console.warn(i)}}}}).catch(s=>{throw Dr.create("idb-open",{originalErrorMessage:s.message})})),am}async function F1(s){try{const i=(await uT()).transaction(ou),r=await i.objectStore(ou).get(cT(s));return await i.done,r}catch(e){if(e instanceof Us)js.warn(e.message);else{const i=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(i.message)}}}async function Sv(s,e){try{const r=(await uT()).transaction(ou,"readwrite");await r.objectStore(ou).put(e,cT(s)),await r.done}catch(i){if(i instanceof Us)js.warn(i.message);else{const r=Dr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});js.warn(r.message)}}}function cT(s){return`${s.name}!${s.options.appId}`}/**
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
 */const G1=1024,Q1=30;class Y1{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new X1(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=wv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Q1){const d=J1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){js.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=wv(),{heartbeatsToSend:r,unsentEntries:l}=K1(this._heartbeatsCache.heartbeats),c=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return js.warn(i),""}}}function wv(){return new Date().toISOString().substring(0,10)}function K1(s,e=G1){const i=[];let r=s.slice();for(const l of s){const c=i.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),Rv(i)>e){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Rv(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class X1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jS()?kS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await F1(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rv(s){return gh(JSON.stringify({version:2,heartbeats:s})).length}function J1(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,e=r);return e}/**
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
 */function $1(s){Mo(new Ca("platform-logger",e=>new u1(e),"PRIVATE")),Mo(new Ca("heartbeat",e=>new Y1(e),"PRIVATE")),Or(Tm,bv,s),Or(Tm,bv,"esm2020"),Or("fire-js","")}$1("");var Z1="firebase",W1="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or(Z1,W1,"app");function hT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ew=hT,fT=new _u("auth","Firebase",hT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Gm("@firebase/auth");function tw(s,...e){_h.logLevel<=Ue.WARN&&_h.warn(`Auth (${qo}): ${s}`,...e)}function rh(s,...e){_h.logLevel<=Ue.ERROR&&_h.error(`Auth (${qo}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(s,...e){throw Xm(s,...e)}function Ni(s,...e){return Xm(s,...e)}function Km(s,e,i){const r={...ew(),[e]:i};return new _u("auth","Firebase",r).create(e,{appName:s.name})}function Ms(s){return Km(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nw(s,e,i){const r=i;if(!(e instanceof r))throw r.name!==e.constructor.name&&pi(s,"argument-error"),Km(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xm(s,...e){if(typeof s!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return fT.create(s,...e)}function ve(s,e,...i){if(!s)throw Xm(e,...i)}function Os(s){const e="INTERNAL ASSERTION FAILED: "+s;throw rh(e),new Error(e)}function ks(s,e){s||Os(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function iw(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iw()||DS()||"connection"in navigator)?navigator.onLine:!0}function rw(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,i){this.shortDelay=e,this.longDelay=i,ks(i>e,"Short delay should be less than long delay!"),this.isMobile=CS()||OS()}get(){return sw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(s,e){ks(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lw=new Tu(3e4,6e4);function zs(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function is(s,e,i,r,l={}){return mT(s,l,async()=>{let c={},d={};r&&(e==="GET"?d=r:c={body:JSON.stringify(r)});const p=vu({key:s.config.apiKey,...d}).slice(1),g=await s._getAdditionalHeaders();g["Content-Type"]="application/json",s.languageCode&&(g["X-Firebase-Locale"]=s.languageCode);const _={method:e,headers:g,...c};return NS()||(_.referrerPolicy="no-referrer"),s.emulatorConfig&&Eu(s.emulatorConfig.host)&&(_.credentials="include"),dT.fetch()(await pT(s,s.config.apiHost,i,p),_)})}async function mT(s,e,i){s._canInitEmulator=!1;const r={...aw,...e};try{const l=new cw(s),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Jc(s,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jc(s,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Jc(s,"email-already-in-use",d);if(g==="USER_DISABLED")throw Jc(s,"user-disabled",d);const b=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Km(s,b,_);pi(s,b)}}catch(l){if(l instanceof Us)throw l;pi(s,"network-request-failed",{message:String(l)})}}async function bu(s,e,i,r,l={}){const c=await is(s,e,i,r,l);return"mfaPendingCredential"in c&&pi(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function pT(s,e,i,r){const l=`${e}${i}?${r}`,c=s,d=c.config.emulator?Jm(s.config,l):`${s.config.apiScheme}://${l}`;return ow.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function uw(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(Ni(this.auth,"network-request-failed")),lw.get())})}}function Jc(s,e,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const l=Ni(s,e,r);return l.customData._tokenResponse=i,l}function Cv(s){return s!==void 0&&s.enterprise!==void 0}class hw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return uw(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fw(s,e){return is(s,"GET","/v2/recaptchaConfig",zs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(s,e){return is(s,"POST","/v1/accounts:delete",e)}async function vh(s,e){return is(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mw(s,e=!1){const i=Ft(s),r=await i.getIdToken(e),l=$m(r);ve(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:l,token:r,authTime:nu(om(l.auth_time)),issuedAtTime:nu(om(l.iat)),expirationTime:nu(om(l.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function om(s){return Number(s)*1e3}function $m(s){const[e,i,r]=s.split(".");if(e===void 0||i===void 0||r===void 0)return rh("JWT malformed, contained fewer than 3 sections"),null;try{const l=eT(i);return l?JSON.parse(l):(rh("Failed to decode base64 JWT payload"),null)}catch(l){return rh("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function xv(s){const e=$m(s);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(s,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof Us&&pw(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function pw({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=nu(this.lastLoginAt),this.creationTime=nu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eh(s){var R;const e=s.auth,i=await s.getIdToken(),r=await jo(s,vh(e,{idToken:i}));ve(r==null?void 0:r.users.length,e,"internal-error");const l=r.users[0];s._notifyReloadListener(l);const c=(R=l.providerUserInfo)!=null&&R.length?gT(l.providerUserInfo):[],d=_w(s.providerData,c),p=s.isAnonymous,g=!(s.email&&l.passwordHash)&&!(d!=null&&d.length),_=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new wm(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(s,b)}async function yw(s){const e=Ft(s);await Eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _w(s,e){return[...s.filter(r=>!e.some(l=>l.providerId===r.providerId)),...e]}function gT(s){return s.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(s,e){const i=await mT(s,{},async()=>{const r=vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=s.config,d=await pT(s,l,"/v1/token",`key=${c}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:r};return s.emulatorConfig&&Eu(s.emulatorConfig.host)&&(g.credentials="include"),dT.fetch()(d,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ew(s,e){return is(s,"POST","/v2/accounts:revokeToken",zs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const i=xv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:l,expiresIn:c}=await vw(e,i);this.updateTokensAndExpiration(r,l,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:l,expirationTime:c}=i,d=new Co;return r&&(ve(typeof r=="string","internal-error",{appName:e}),d.refreshToken=r),l&&(ve(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),c&&(ve(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(s,e){ve(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class xi{constructor({uid:e,auth:i,stsTokenManager:r,...l}){this.providerId="firebase",this.proactiveRefresh=new gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new wm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await jo(this,this.stsTokenManager.getToken(this.auth,e));return ve(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return mw(this,e)}reload(){return yw(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new xi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Eh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Ms(this.auth));const e=await this.getIdToken();return await jo(this,dw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const r=i.displayName??void 0,l=i.email??void 0,c=i.phoneNumber??void 0,d=i.photoURL??void 0,p=i.tenantId??void 0,g=i._redirectEventId??void 0,_=i.createdAt??void 0,b=i.lastLoginAt??void 0,{uid:R,emailVerified:M,isAnonymous:Y,providerData:ee,stsTokenManager:se}=i;ve(R&&se,e,"internal-error");const re=Co.fromJSON(this.name,se);ve(typeof R=="string",e,"internal-error"),Sr(r,e.name),Sr(l,e.name),ve(typeof M=="boolean",e,"internal-error"),ve(typeof Y=="boolean",e,"internal-error"),Sr(c,e.name),Sr(d,e.name),Sr(p,e.name),Sr(g,e.name),Sr(_,e.name),Sr(b,e.name);const _e=new xi({uid:R,auth:e,email:l,emailVerified:M,displayName:r,isAnonymous:Y,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:re,createdAt:_,lastLoginAt:b});return ee&&Array.isArray(ee)&&(_e.providerData=ee.map(xe=>({...xe}))),g&&(_e._redirectEventId=g),_e}static async _fromIdTokenResponse(e,i,r=!1){const l=new Co;l.updateFromServerResponse(i);const c=new xi({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:r});return await Eh(c),c}static async _fromGetAccountInfoResponse(e,i,r){const l=i.users[0];ve(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?gT(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),p=new Co;p.updateFromIdToken(r);const g=new xi({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new wm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Map;function Vs(s){ks(s instanceof Function,"Expected a class definition");let e=Nv.get(s);return e?(ks(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Nv.set(s,e),e)}/**
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
 */class yT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}yT.type="NONE";const Dv=yT;/**
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
 */function ah(s,e,i){return`firebase:${s}:${e}:${i}`}class xo{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:l,name:c}=this.auth;this.fullUserKey=ah(this.userKey,l.apiKey,c),this.fullPersistenceKey=ah("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await vh(this.auth,{idToken:e}).catch(()=>{});return i?xi._fromGetAccountInfoResponse(this.auth,i,e):null}return xi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new xo(Vs(Dv),e,r);const l=(await Promise.all(i.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||Vs(Dv);const d=ah(r,e.config.apiKey,e.name);let p=null;for(const _ of i)try{const b=await _._get(d);if(b){let R;if(typeof b=="string"){const M=await vh(e,{idToken:b}).catch(()=>{});if(!M)break;R=await xi._fromGetAccountInfoResponse(e,M,b)}else R=xi._fromJSON(e,b);_!==c&&(p=R),c=_;break}}catch{}const g=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new xo(c,e,r):(c=g[0],p&&await c._set(d,p.toJSON()),await Promise.all(i.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new xo(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AT(e))return"Blackberry";if(ST(e))return"Webos";if(vT(e))return"Safari";if((e.includes("chrome/")||ET(e))&&!e.includes("edge/"))return"Chrome";if(bT(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _T(s=pn()){return/firefox\//i.test(s)}function vT(s=pn()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ET(s=pn()){return/crios\//i.test(s)}function TT(s=pn()){return/iemobile/i.test(s)}function bT(s=pn()){return/android/i.test(s)}function AT(s=pn()){return/blackberry/i.test(s)}function ST(s=pn()){return/webos/i.test(s)}function Zm(s=pn()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Tw(s=pn()){var e;return Zm(s)&&!!((e=window.navigator)!=null&&e.standalone)}function bw(){return VS()&&document.documentMode===10}function wT(s=pn()){return Zm(s)||bT(s)||ST(s)||AT(s)||/windows phone/i.test(s)||TT(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(s,e=[]){let i;switch(s){case"Browser":i=Ov(pn());break;case"Worker":i=`${Ov(pn())}-${s}`;break;default:i=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${qo}/${r}`}/**
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
 */class Aw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((d,p)=>{try{const g=e(c);d(g)}catch(g){p(g)}});r.onAbort=i,this.queue.push(r);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sw(s,e={}){return is(s,"GET","/v2/passwordPolicy",zs(s,e))}/**
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
 */const ww=6;class Rw{constructor(e){var r;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??ww,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let l=0;l<e.length;l++)r=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,i,r,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new Aw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Vs(i)),this._initializationPromise=this.queue(async()=>{var r,l,c;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await vh(this,{idToken:e}),r=await xi._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Qn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(c=this.redirectUser)==null?void 0:c._redirectEventId,p=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(e);(!d||d===p)&&(g!=null&&g.user)&&(r=g.user,l=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(r)}catch(d){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Eh(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Ms(this));const i=e?Ft(e):null;return i&&ve(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sw(this),i=new Rw(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _u("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ew(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Vs(e)||this._popupRedirectResolver;ve(i,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Vs(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,r,l);return()=>{d=!0,g()}}else{const g=e.addObserver(i);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var i;if(Qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return e!=null&&e.error&&tw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bs(s){return Ft(s)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=BS(i=>this.observer=i)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cw(s){kh=s}function IT(s){return kh.loadJS(s)}function xw(){return kh.recaptchaEnterpriseScript}function Nw(){return kh.gapiScript}function Dw(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Ow{constructor(){this.enterprise=new Vw}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class Vw{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const Mw="recaptcha-enterprise",CT="NO_RECAPTCHA";class jw{constructor(e){this.type=Mw,this.auth=Bs(e)}async verify(e="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,p)=>{fw(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new hw(g);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(g=>{p(g)})})}function l(c,d,p){const g=window.grecaptcha;Cv(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(CT)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ow().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{r(this.auth).then(p=>{if(!i&&Cv(window.grecaptcha))l(p,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=xw();g.length!==0&&(g+=p),IT(g).then(()=>{l(p,c,d)}).catch(_=>{d(_)})}}).catch(p=>{d(p)})})}}async function Mv(s,e,i,r=!1,l=!1){const c=new jw(s);let d;if(l)d=CT;else try{d=await c.verify(i)}catch{d=await c.verify(i,!0)}const p={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Th(s,e,i,r,l){var c;if((c=s._getRecaptchaConfig())!=null&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Mv(s,e,i,i==="getOobCode");return r(s,d)}else return r(s,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Mv(s,e,i,i==="getOobCode");return r(s,p)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(s,e){const i=Ym(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Ia(c,e??{}))return l;pi(l,"already-initialized")}return i.initialize({options:e})}function Pw(s,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Vs);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lw(s,e,i){const r=Bs(s);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const l=!1,c=xT(e),{host:d,port:p}=Uw(e),g=p===null?"":`:${p}`,_={url:`${c}//${d}${g}/`},b=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve(Ia(_,r.config.emulator)&&Ia(b,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=b,r.settings.appVerificationDisabledForTesting=!0,Eu(d)?sT(`${c}//${d}${g}`):zw()}function xT(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Uw(s){const e=xT(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(r);if(l){const c=l[1];return{host:c,port:jv(r.substr(c.length+1))}}else{const[c,d]=r.split(":");return{host:c,port:jv(d)}}}function jv(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function zw(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Os("not implemented")}_getIdTokenResponse(e){return Os("not implemented")}_linkToIdToken(e,i){return Os("not implemented")}_getReauthenticationResolver(e){return Os("not implemented")}}async function Bw(s,e){return is(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(s,e){return bu(s,"POST","/v1/accounts:signInWithPassword",zs(s,e))}async function Hw(s,e){return is(s,"POST","/v1/accounts:sendOobCode",zs(s,e))}async function Fw(s,e){return Hw(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(s,e){return bu(s,"POST","/v1/accounts:signInWithEmailLink",zs(s,e))}async function Qw(s,e){return bu(s,"POST","/v1/accounts:signInWithEmailLink",zs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends Wm{constructor(e,i,r,l=null){super("password",r),this._email=e,this._password=i,this._tenantId=l}static _fromEmailAndPassword(e,i){return new lu(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new lu(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,i,"signInWithPassword",qw);case"emailLink":return Gw(e,{email:this._email,oobCode:this._password});default:pi(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,r,"signUpPassword",Bw);case"emailLink":return Qw(e,{idToken:i,email:this._email,oobCode:this._password});default:pi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(s,e){return bu(s,"POST","/v1/accounts:signInWithIdp",zs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="http://localhost";class xa extends Wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new xa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):pi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:l,...c}=i;if(!r||!l)return null;const d=new xa(r,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return No(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,No(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,No(e,i)}buildRequest(){const e={requestUri:Yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=vu(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xw(s){const e=Jl($l(s)).link,i=e?Jl($l(e)).deep_link_id:null,r=Jl($l(s)).deep_link_id;return(r?Jl($l(r)).link:null)||r||i||e||s}class ep{constructor(e){const i=Jl($l(e)),r=i.apiKey??null,l=i.oobCode??null,c=Kw(i.mode??null);ve(r&&l&&c,"argument-error"),this.apiKey=r,this.operation=c,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=Xw(e);try{return new ep(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,i){return lu._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=ep.parseLink(i);return ve(r,"argument-error"),lu._fromEmailAndCode(e,r.code,r.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Au extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Au{constructor(){super("facebook.com")}static credential(e){return xa._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return xa._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Ds.credential(i,r)}catch{return null}}}Ds.GOOGLE_SIGN_IN_METHOD="google.com";Ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Au{constructor(){super("github.com")}static credential(e){return xa._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Au{constructor(){super("twitter.com")}static credential(e,i){return xa._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Cr.credential(i,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(s,e){return bu(s,"POST","/v1/accounts:signUp",zs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,l=!1){const c=await xi._fromIdTokenResponse(e,r,l),d=kv(r);return new Na({user:c,providerId:d,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const l=kv(r);return new Na({user:e,providerId:l,_tokenResponse:r,operationType:i})}}function kv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends Us{constructor(e,i,r,l){super(i.code,i.message),this.operationType=r,this.user=l,Object.setPrototypeOf(this,bh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,l){return new bh(e,i,r,l)}}function NT(s,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?bh._fromErrorAndOperation(s,c,e,r):c})}async function $w(s,e,i=!1){const r=await jo(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return Na._forOperation(s,"link",r)}/**
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
 */async function Zw(s,e,i=!1){const{auth:r}=s;if(Qn(r.app))return Promise.reject(Ms(r));const l="reauthenticate";try{const c=await jo(s,NT(r,l,e,s),i);ve(c.idToken,r,"internal-error");const d=$m(c.idToken);ve(d,r,"internal-error");const{sub:p}=d;return ve(s.uid===p,r,"user-mismatch"),Na._forOperation(s,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&pi(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(s,e,i=!1){if(Qn(s.app))return Promise.reject(Ms(s));const r="signIn",l=await NT(s,r,e),c=await Na._fromIdTokenResponse(s,r,l);return i||await s._updateCurrentUser(c.user),c}async function Ww(s,e){return DT(Bs(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(s){const e=Bs(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eR(s,e,i){const r=Bs(s);await Th(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fw)}async function tR(s,e,i){if(Qn(s.app))return Promise.reject(Ms(s));const r=Bs(s),d=await Th(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jw).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&OT(s),g}),p=await Na._fromIdTokenResponse(r,"signIn",d);return await r._updateCurrentUser(p.user),p}function nR(s,e,i){return Qn(s.app)?Promise.reject(Ms(s)):Ww(Ft(s),Ho.credential(e,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OT(s),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(s,e){return is(s,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(s,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const r=Ft(s),c={idToken:await r.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},d=await jo(r,iR(r.auth,c));r.displayName=d.displayName||null,r.photoURL=d.photoUrl||null;const p=r.providerData.find(({providerId:g})=>g==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(d)}function rR(s,e,i,r){return Ft(s).onIdTokenChanged(e,i,r)}function aR(s,e,i){return Ft(s).beforeAuthStateChanged(e,i)}function oR(s,e,i,r){return Ft(s).onAuthStateChanged(e,i,r)}function lR(s){return Ft(s).signOut()}const Ah="__sak";/**
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
 */class VT{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=1e3,cR=10;class MT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),l=this.localCache[i];r!==l&&e(i,l,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const r=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(r);!i&&this.localCache[r]===d||this.notifyListeners(r,d)},c=this.storage.getItem(r);bw()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,cR):l()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const l of Array.from(r))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}MT.type="LOCAL";const hR=MT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}jT.type="SESSION";const kT=jT;/**
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
 */function fR(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const r=new Ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:l,data:c}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:l});const p=Array.from(d).map(async _=>_(i.origin,c)),g=await fR(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:l,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(s="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class dR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((p,g)=>{const _=np("",20);l.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},r);d={messageChannel:l,onMessage(R){const M=R;if(M.data.eventId===_)switch(M.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(M.data.response);break;default:clearTimeout(b),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){return window}function mR(s){Zi().location.href=s}/**
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
 */function PT(){return typeof Zi().WorkerGlobalScope<"u"&&typeof Zi().importScripts=="function"}async function pR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function yR(){return PT()?self:null}/**
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
 */const LT="firebaseLocalStorageDb",_R=1,Sh="firebaseLocalStorage",UT="fbase_key";class Su{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Lh(s,e){return s.transaction([Sh],e?"readwrite":"readonly").objectStore(Sh)}function vR(){const s=indexedDB.deleteDatabase(LT);return new Su(s).toPromise()}function Rm(){const s=indexedDB.open(LT,_R);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Sh,{keyPath:UT})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Sh)?e(r):(r.close(),await vR(),e(await Rm()))})})}async function Pv(s,e,i){const r=Lh(s,!0).put({[UT]:e,value:i});return new Su(r).toPromise()}async function ER(s,e){const i=Lh(s,!1).get(e),r=await new Su(i).toPromise();return r===void 0?null:r.value}function Lv(s,e){const i=Lh(s,!0).delete(e);return new Su(i).toPromise()}const TR=800,bR=3;class zT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>bR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var i,r;if(this.activeServiceWorker=await pR(),!this.activeServiceWorker)return;this.sender=new dR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(i=e[0])!=null&&i.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await Pv(e,Ah,"1"),await Lv(e,Ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>ER(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lv(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Lh(l,!1).getAll();return new Su(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)r.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!r.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const l of Array.from(r))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zT.type="LOCAL";const AR=zT;new Tu(3e4,6e4);/**
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
 */function BT(s,e){return e?Vs(e):(ve(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class ip extends Wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,i){return No(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function SR(s){return DT(s.auth,new ip(s),s.bypassAuthState)}function wR(s){const{auth:e,user:i}=s;return ve(i,e,"internal-error"),Zw(i,new ip(s),s.bypassAuthState)}async function RR(s){const{auth:e,user:i}=s;return ve(i,e,"internal-error"),$w(i,new ip(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,i,r,l,c=!1){this.auth=e,this.resolver=r,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:l,tenantId:c,error:d,type:p}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return wR;default:pi(this.auth,"internal-error")}}resolve(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Tu(2e3,1e4);async function CR(s,e,i){if(Qn(s.app))return Promise.reject(Ni(s,"operation-not-supported-in-this-environment"));const r=Bs(s);nw(s,e,tp);const l=BT(r,i);return new Sa(r,"signInViaPopup",e,l).executeNotNull()}class Sa extends qT{constructor(e,i,r,l,c){super(e,i,l,c),this.provider=r,this.authWindow=null,this.pollId=null,Sa.currentPopupAction&&Sa.currentPopupAction.cancel(),Sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ks(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if((r=(i=this.authWindow)==null?void 0:i.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}Sa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="pendingRedirect",oh=new Map;class NR extends qT{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=oh.get(this.auth._key());if(!e){try{const r=await DR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}oh.set(this.auth._key(),e)}return this.bypassAuthState||oh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DR(s,e){const i=MR(e),r=VR(s);if(!await r._isAvailable())return!1;const l=await r._get(i)==="true";return await r._remove(i),l}function OR(s,e){oh.set(s._key(),e)}function VR(s){return Vs(s._redirectPersistence)}function MR(s){return ah(xR,s.config.apiKey,s.name)}async function jR(s,e,i=!1){if(Qn(s.app))return Promise.reject(Ms(s));const r=Bs(s),l=BT(r,e),d=await new NR(r,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await r._persistUserIfCurrent(d.user),await r._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=600*1e3;class PR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LR(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!HT(e)){const l=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";i.onError(Ni(this.auth,l))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(e))}saveEventToCache(e){this.cachedEventUids.add(Uv(e)),this.lastProcessedEventTime=Date.now()}}function Uv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function HT({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LR(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HT(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(s,e={}){return is(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BR=/^https?/;async function qR(s){if(s.config.emulator)return;const{authorizedDomains:e}=await UR(s);for(const i of e)try{if(HR(i))return}catch{}pi(s,"unauthorized-domain")}function HR(s){const e=Sm(),{protocol:i,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===r}if(!BR.test(i))return!1;if(zR.test(s))return r===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(r)}/**
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
 */const FR=new Tu(3e4,6e4);function zv(){const s=Zi().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function GR(s){return new Promise((e,i)=>{var l,c,d;function r(){zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zv(),i(Ni(s,"network-request-failed"))},timeout:FR.get()})}if((c=(l=Zi().gapi)==null?void 0:l.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((d=Zi().gapi)!=null&&d.load)r();else{const p=Dw("iframefcb");return Zi()[p]=()=>{gapi.load?r():i(Ni(s,"network-request-failed"))},IT(`${Nw()}?onload=${p}`).catch(g=>i(g))}}).catch(e=>{throw lh=null,e})}let lh=null;function QR(s){return lh=lh||GR(s),lh}/**
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
 */const YR=new Tu(5e3,15e3),KR="__/auth/iframe",XR="emulator/auth/iframe",JR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZR(s){const e=s.config;ve(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?Jm(e,XR):`https://${s.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:s.name,v:qo},l=$R.get(s.config.apiHost);l&&(r.eid=l);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${vu(r).slice(1)}`}async function WR(s){const e=await QR(s),i=Zi().gapi;return ve(i,s,"internal-error"),e.open({where:document.body,url:ZR(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JR,dontclear:!0},r=>new Promise(async(l,c)=>{await r.restyle({setHideOnLeave:!1});const d=Ni(s,"network-request-failed"),p=Zi().setTimeout(()=>{c(d)},YR.get());function g(){Zi().clearTimeout(p),l(r)}r.ping(g).then(g,()=>{c(d)})}))}/**
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
 */const eI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,nI=600,iI="_blank",sI="http://localhost";class Bv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rI(s,e,i,r=tI,l=nI){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const g={...eI,width:r.toString(),height:l.toString(),top:c,left:d},_=pn().toLowerCase();i&&(p=ET(_)?iI:i),_T(_)&&(e=e||sI,g.scrollbars="yes");const b=Object.entries(g).reduce((M,[Y,ee])=>`${M}${Y}=${ee},`,"");if(Tw(_)&&p!=="_self")return aI(e||"",p),new Bv(null);const R=window.open(e||"",p,b);ve(R,s,"popup-blocked");try{R.focus()}catch{}return new Bv(R)}function aI(s,e){const i=document.createElement("a");i.href=s,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const oI="__/auth/handler",lI="emulator/auth/handler",uI=encodeURIComponent("fac");async function qv(s,e,i,r,l,c){ve(s.config.authDomain,s,"auth-domain-config-required"),ve(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:qo,eventId:l};if(e instanceof tp){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",zS(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,R]of Object.entries({}))d[b]=R}if(e instanceof Au){const b=e.getScopes().filter(R=>R!=="");b.length>0&&(d.scopes=b.join(","))}s.tenantId&&(d.tid=s.tenantId);const p=d;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const g=await s._getAppCheckToken(),_=g?`#${uI}=${encodeURIComponent(g)}`:"";return`${cI(s)}?${vu(p).slice(1)}${_}`}function cI({config:s}){return s.emulator?Jm(s,lI):`https://${s.authDomain}/${oI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=jR,this._overrideRedirectResult=OR}async _openPopup(e,i,r,l){var d;ks((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const c=await qv(e,i,r,Sm(),l);return rI(e,c,np())}async _openRedirect(e,i,r,l){await this._originValidation(e);const c=await qv(e,i,r,Sm(),l);return mR(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(ks(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await WR(e),r=new PR(e);return i.register("authEvent",l=>(ve(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:r.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(lm,{type:lm},l=>{var d;const c=(d=l==null?void 0:l[0])==null?void 0:d[lm];c!==void 0&&i(!!c),pi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=qR(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return wT()||vT()||Zm()}}const fI=hI;var Hv="@firebase/auth",Fv="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pI(s){Mo(new Ca("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=r.options;ve(d&&!d.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:d,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RT(s)},_=new Iw(r,l,c,g);return Pw(_,i),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Mo(new Ca("auth-internal",e=>{const i=Bs(e.getProvider("auth").getImmediate());return(r=>new dI(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(Hv,Fv,mI(s)),Or(Hv,Fv,"esm2020")}/**
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
 */const gI=300,yI=iT("authIdTokenMaxAge")||gI;let Gv=null;const _I=s=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>yI)return;const l=i==null?void 0:i.token;Gv!==l&&(Gv=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function vI(s=lT()){const e=Ym(s,"auth");if(e.isInitialized())return e.getImmediate();const i=kw(s,{popupRedirectResolver:fI,persistence:[AR,hR,kT]}),r=iT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const d=_I(c.toString());aR(i,d,()=>d(i.currentUser)),rR(i,p=>d(p))}}const l=tT("auth");return l&&Lw(i,`http://${l}`),i}function EI(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Cw({loadJS(s){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=l=>{const c=Ni("internal-error");c.customData=l,i(c)},r.type="text/javascript",r.charset="UTF-8",EI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pI("Browser");var Qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,FT;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function x(){}x.prototype=S.prototype,N.F=S.prototype,N.prototype=new x,N.prototype.constructor=N,N.D=function(j,D,P){for(var I=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)I[Ze-2]=arguments[Ze];return S.prototype[D].apply(j,I)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,i),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,S,x){x||(x=0);const j=Array(16);if(typeof S=="string")for(var D=0;D<16;++D)j[D]=S.charCodeAt(x++)|S.charCodeAt(x++)<<8|S.charCodeAt(x++)<<16|S.charCodeAt(x++)<<24;else for(D=0;D<16;++D)j[D]=S[x++]|S[x++]<<8|S[x++]<<16|S[x++]<<24;S=N.g[0],x=N.g[1],D=N.g[2];let P=N.g[3],I;I=S+(P^x&(D^P))+j[0]+3614090360&4294967295,S=x+(I<<7&4294967295|I>>>25),I=P+(D^S&(x^D))+j[1]+3905402710&4294967295,P=S+(I<<12&4294967295|I>>>20),I=D+(x^P&(S^x))+j[2]+606105819&4294967295,D=P+(I<<17&4294967295|I>>>15),I=x+(S^D&(P^S))+j[3]+3250441966&4294967295,x=D+(I<<22&4294967295|I>>>10),I=S+(P^x&(D^P))+j[4]+4118548399&4294967295,S=x+(I<<7&4294967295|I>>>25),I=P+(D^S&(x^D))+j[5]+1200080426&4294967295,P=S+(I<<12&4294967295|I>>>20),I=D+(x^P&(S^x))+j[6]+2821735955&4294967295,D=P+(I<<17&4294967295|I>>>15),I=x+(S^D&(P^S))+j[7]+4249261313&4294967295,x=D+(I<<22&4294967295|I>>>10),I=S+(P^x&(D^P))+j[8]+1770035416&4294967295,S=x+(I<<7&4294967295|I>>>25),I=P+(D^S&(x^D))+j[9]+2336552879&4294967295,P=S+(I<<12&4294967295|I>>>20),I=D+(x^P&(S^x))+j[10]+4294925233&4294967295,D=P+(I<<17&4294967295|I>>>15),I=x+(S^D&(P^S))+j[11]+2304563134&4294967295,x=D+(I<<22&4294967295|I>>>10),I=S+(P^x&(D^P))+j[12]+1804603682&4294967295,S=x+(I<<7&4294967295|I>>>25),I=P+(D^S&(x^D))+j[13]+4254626195&4294967295,P=S+(I<<12&4294967295|I>>>20),I=D+(x^P&(S^x))+j[14]+2792965006&4294967295,D=P+(I<<17&4294967295|I>>>15),I=x+(S^D&(P^S))+j[15]+1236535329&4294967295,x=D+(I<<22&4294967295|I>>>10),I=S+(D^P&(x^D))+j[1]+4129170786&4294967295,S=x+(I<<5&4294967295|I>>>27),I=P+(x^D&(S^x))+j[6]+3225465664&4294967295,P=S+(I<<9&4294967295|I>>>23),I=D+(S^x&(P^S))+j[11]+643717713&4294967295,D=P+(I<<14&4294967295|I>>>18),I=x+(P^S&(D^P))+j[0]+3921069994&4294967295,x=D+(I<<20&4294967295|I>>>12),I=S+(D^P&(x^D))+j[5]+3593408605&4294967295,S=x+(I<<5&4294967295|I>>>27),I=P+(x^D&(S^x))+j[10]+38016083&4294967295,P=S+(I<<9&4294967295|I>>>23),I=D+(S^x&(P^S))+j[15]+3634488961&4294967295,D=P+(I<<14&4294967295|I>>>18),I=x+(P^S&(D^P))+j[4]+3889429448&4294967295,x=D+(I<<20&4294967295|I>>>12),I=S+(D^P&(x^D))+j[9]+568446438&4294967295,S=x+(I<<5&4294967295|I>>>27),I=P+(x^D&(S^x))+j[14]+3275163606&4294967295,P=S+(I<<9&4294967295|I>>>23),I=D+(S^x&(P^S))+j[3]+4107603335&4294967295,D=P+(I<<14&4294967295|I>>>18),I=x+(P^S&(D^P))+j[8]+1163531501&4294967295,x=D+(I<<20&4294967295|I>>>12),I=S+(D^P&(x^D))+j[13]+2850285829&4294967295,S=x+(I<<5&4294967295|I>>>27),I=P+(x^D&(S^x))+j[2]+4243563512&4294967295,P=S+(I<<9&4294967295|I>>>23),I=D+(S^x&(P^S))+j[7]+1735328473&4294967295,D=P+(I<<14&4294967295|I>>>18),I=x+(P^S&(D^P))+j[12]+2368359562&4294967295,x=D+(I<<20&4294967295|I>>>12),I=S+(x^D^P)+j[5]+4294588738&4294967295,S=x+(I<<4&4294967295|I>>>28),I=P+(S^x^D)+j[8]+2272392833&4294967295,P=S+(I<<11&4294967295|I>>>21),I=D+(P^S^x)+j[11]+1839030562&4294967295,D=P+(I<<16&4294967295|I>>>16),I=x+(D^P^S)+j[14]+4259657740&4294967295,x=D+(I<<23&4294967295|I>>>9),I=S+(x^D^P)+j[1]+2763975236&4294967295,S=x+(I<<4&4294967295|I>>>28),I=P+(S^x^D)+j[4]+1272893353&4294967295,P=S+(I<<11&4294967295|I>>>21),I=D+(P^S^x)+j[7]+4139469664&4294967295,D=P+(I<<16&4294967295|I>>>16),I=x+(D^P^S)+j[10]+3200236656&4294967295,x=D+(I<<23&4294967295|I>>>9),I=S+(x^D^P)+j[13]+681279174&4294967295,S=x+(I<<4&4294967295|I>>>28),I=P+(S^x^D)+j[0]+3936430074&4294967295,P=S+(I<<11&4294967295|I>>>21),I=D+(P^S^x)+j[3]+3572445317&4294967295,D=P+(I<<16&4294967295|I>>>16),I=x+(D^P^S)+j[6]+76029189&4294967295,x=D+(I<<23&4294967295|I>>>9),I=S+(x^D^P)+j[9]+3654602809&4294967295,S=x+(I<<4&4294967295|I>>>28),I=P+(S^x^D)+j[12]+3873151461&4294967295,P=S+(I<<11&4294967295|I>>>21),I=D+(P^S^x)+j[15]+530742520&4294967295,D=P+(I<<16&4294967295|I>>>16),I=x+(D^P^S)+j[2]+3299628645&4294967295,x=D+(I<<23&4294967295|I>>>9),I=S+(D^(x|~P))+j[0]+4096336452&4294967295,S=x+(I<<6&4294967295|I>>>26),I=P+(x^(S|~D))+j[7]+1126891415&4294967295,P=S+(I<<10&4294967295|I>>>22),I=D+(S^(P|~x))+j[14]+2878612391&4294967295,D=P+(I<<15&4294967295|I>>>17),I=x+(P^(D|~S))+j[5]+4237533241&4294967295,x=D+(I<<21&4294967295|I>>>11),I=S+(D^(x|~P))+j[12]+1700485571&4294967295,S=x+(I<<6&4294967295|I>>>26),I=P+(x^(S|~D))+j[3]+2399980690&4294967295,P=S+(I<<10&4294967295|I>>>22),I=D+(S^(P|~x))+j[10]+4293915773&4294967295,D=P+(I<<15&4294967295|I>>>17),I=x+(P^(D|~S))+j[1]+2240044497&4294967295,x=D+(I<<21&4294967295|I>>>11),I=S+(D^(x|~P))+j[8]+1873313359&4294967295,S=x+(I<<6&4294967295|I>>>26),I=P+(x^(S|~D))+j[15]+4264355552&4294967295,P=S+(I<<10&4294967295|I>>>22),I=D+(S^(P|~x))+j[6]+2734768916&4294967295,D=P+(I<<15&4294967295|I>>>17),I=x+(P^(D|~S))+j[13]+1309151649&4294967295,x=D+(I<<21&4294967295|I>>>11),I=S+(D^(x|~P))+j[4]+4149444226&4294967295,S=x+(I<<6&4294967295|I>>>26),I=P+(x^(S|~D))+j[11]+3174756917&4294967295,P=S+(I<<10&4294967295|I>>>22),I=D+(S^(P|~x))+j[2]+718787259&4294967295,D=P+(I<<15&4294967295|I>>>17),I=x+(P^(D|~S))+j[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(D+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+P&4294967295}r.prototype.v=function(N,S){S===void 0&&(S=N.length);const x=S-this.blockSize,j=this.C;let D=this.h,P=0;for(;P<S;){if(D==0)for(;P<=x;)l(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<S;)if(j[D++]=N.charCodeAt(P++),D==this.blockSize){l(this,j),D=0;break}}else for(;P<S;)if(j[D++]=N[P++],D==this.blockSize){l(this,j),D=0;break}}this.h=D,this.o+=S},r.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;S=this.o*8;for(var x=N.length-8;x<N.length;++x)N[x]=S&255,S/=256;for(this.v(N),N=Array(16),S=0,x=0;x<4;++x)for(let j=0;j<32;j+=8)N[S++]=this.g[x]>>>j&255;return N};function c(N,S){var x=p;return Object.prototype.hasOwnProperty.call(x,N)?x[N]:x[N]=S(N)}function d(N,S){this.h=S;const x=[];let j=!0;for(let D=N.length-1;D>=0;D--){const P=N[D]|0;j&&P==S||(x[D]=P,j=!1)}this.g=x}var p={};function g(N){return-128<=N&&N<128?c(N,function(S){return new d([S|0],S<0?-1:0)}):new d([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return R;if(N<0)return re(_(-N));const S=[];let x=1;for(let j=0;N>=x;j++)S[j]=N/x|0,x*=4294967296;return new d(S,0)}function b(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return re(b(N.substring(1),S));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=_(Math.pow(S,8));let j=R;for(let P=0;P<N.length;P+=8){var D=Math.min(8,N.length-P);const I=parseInt(N.substring(P,P+D),S);D<8?(D=_(Math.pow(S,D)),j=j.j(D).add(_(I))):(j=j.j(x),j=j.add(_(I)))}return j}var R=g(0),M=g(1),Y=g(16777216);s=d.prototype,s.m=function(){if(se(this))return-re(this).m();let N=0,S=1;for(let x=0;x<this.g.length;x++){const j=this.i(x);N+=(j>=0?j:4294967296+j)*S,S*=4294967296}return N},s.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(ee(this))return"0";if(se(this))return"-"+re(this).toString(N);const S=_(Math.pow(N,6));var x=this;let j="";for(;;){const D=it(x,S).g;x=_e(x,D.j(S));let P=((x.g.length>0?x.g[0]:x.h)>>>0).toString(N);if(x=D,ee(x))return P+j;for(;P.length<6;)P="0"+P;j=P+j}},s.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function ee(N){if(N.h!=0)return!1;for(let S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function se(N){return N.h==-1}s.l=function(N){return N=_e(this,N),se(N)?-1:ee(N)?0:1};function re(N){const S=N.g.length,x=[];for(let j=0;j<S;j++)x[j]=~N.g[j];return new d(x,~N.h).add(M)}s.abs=function(){return se(this)?re(this):this},s.add=function(N){const S=Math.max(this.g.length,N.g.length),x=[];let j=0;for(let D=0;D<=S;D++){let P=j+(this.i(D)&65535)+(N.i(D)&65535),I=(P>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);j=I>>>16,P&=65535,I&=65535,x[D]=I<<16|P}return new d(x,x[x.length-1]&-2147483648?-1:0)};function _e(N,S){return N.add(re(S))}s.j=function(N){if(ee(this)||ee(N))return R;if(se(this))return se(N)?re(this).j(re(N)):re(re(this).j(N));if(se(N))return re(this.j(re(N)));if(this.l(Y)<0&&N.l(Y)<0)return _(this.m()*N.m());const S=this.g.length+N.g.length,x=[];for(var j=0;j<2*S;j++)x[j]=0;for(j=0;j<this.g.length;j++)for(let D=0;D<N.g.length;D++){const P=this.i(j)>>>16,I=this.i(j)&65535,Ze=N.i(D)>>>16,Tt=N.i(D)&65535;x[2*j+2*D]+=I*Tt,xe(x,2*j+2*D),x[2*j+2*D+1]+=P*Tt,xe(x,2*j+2*D+1),x[2*j+2*D+1]+=I*Ze,xe(x,2*j+2*D+1),x[2*j+2*D+2]+=P*Ze,xe(x,2*j+2*D+2)}for(N=0;N<S;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=S;N<2*S;N++)x[N]=0;return new d(x,0)};function xe(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ge(N,S){this.g=N,this.h=S}function it(N,S){if(ee(S))throw Error("division by zero");if(ee(N))return new ge(R,R);if(se(N))return S=it(re(N),S),new ge(re(S.g),re(S.h));if(se(S))return S=it(N,re(S)),new ge(re(S.g),S.h);if(N.g.length>30){if(se(N)||se(S))throw Error("slowDivide_ only works with positive integers.");for(var x=M,j=S;j.l(N)<=0;)x=Ke(x),j=Ke(j);var D=Re(x,1),P=Re(j,1);for(j=Re(j,2),x=Re(x,2);!ee(j);){var I=P.add(j);I.l(N)<=0&&(D=D.add(x),P=I),j=Re(j,1),x=Re(x,1)}return S=_e(N,D.j(S)),new ge(D,S)}for(D=R;N.l(S)>=0;){for(x=Math.max(1,Math.floor(N.m()/S.m())),j=Math.ceil(Math.log(x)/Math.LN2),j=j<=48?1:Math.pow(2,j-48),P=_(x),I=P.j(S);se(I)||I.l(N)>0;)x-=j,P=_(x),I=P.j(S);ee(P)&&(P=M),D=D.add(P),N=_e(N,I)}return new ge(D,N)}s.B=function(N){return it(this,N).h},s.and=function(N){const S=Math.max(this.g.length,N.g.length),x=[];for(let j=0;j<S;j++)x[j]=this.i(j)&N.i(j);return new d(x,this.h&N.h)},s.or=function(N){const S=Math.max(this.g.length,N.g.length),x=[];for(let j=0;j<S;j++)x[j]=this.i(j)|N.i(j);return new d(x,this.h|N.h)},s.xor=function(N){const S=Math.max(this.g.length,N.g.length),x=[];for(let j=0;j<S;j++)x[j]=this.i(j)^N.i(j);return new d(x,this.h^N.h)};function Ke(N){const S=N.g.length+1,x=[];for(let j=0;j<S;j++)x[j]=N.i(j)<<1|N.i(j-1)>>>31;return new d(x,N.h)}function Re(N,S){const x=S>>5;S%=32;const j=N.g.length-x,D=[];for(let P=0;P<j;P++)D[P]=S>0?N.i(P+x)>>>S|N.i(P+x+1)<<32-S:N.i(P+x);return new d(D,N.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,FT=r,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=b,Vr=d}).apply(typeof Qv<"u"?Qv:typeof self<"u"?self:typeof window<"u"?window:{});var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GT,Zl,QT,uh,Im,YT,KT,XT;(function(){var s,e=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $c=="object"&&$c];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=i(this);function l(u,m){if(m)e:{var v=r;u=u.split(".");for(var A=0;A<u.length-1;A++){var L=u[A];if(!(L in v))break e;v=v[L]}u=u[u.length-1],A=v[u],m=m(A),m!=A&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,v){return u.call.apply(u.bind,arguments)}function _(u,m,v){return _=g,_.apply(null,arguments)}function b(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function R(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(A,L,H){for(var te=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)te[Ie-2]=arguments[Ie];return m.prototype[L].apply(A,te)}}var M=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function Y(u){const m=u.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=u[A];return v}return[]}function ee(u,m){for(let A=1;A<arguments.length;A++){const L=arguments[A];var v=typeof L;if(v=v!="object"?v:L?Array.isArray(L)?"array":v:"null",v=="array"||v=="object"&&typeof L.length=="number"){v=u.length||0;const H=L.length||0;u.length=v+H;for(let te=0;te<H;te++)u[v+te]=L[te]}else u.push(L)}}class se{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function re(u){d.setTimeout(()=>{throw u},0)}function _e(){var u=N;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class xe{constructor(){this.h=this.g=null}add(m,v){const A=ge.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ge=new se(()=>new it,u=>u.reset());class it{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,Re=!1,N=new xe,S=()=>{const u=Promise.resolve(void 0);Ke=()=>{u.then(x)}};function x(){for(var u;u=_e();){try{u.h.call(u.g)}catch(v){re(v)}var m=ge;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Re=!1}function j(){this.u=this.u,this.C=this.C}j.prototype.u=!1,j.prototype.dispose=function(){this.u||(this.u=!0,this.N())},j.prototype[Symbol.dispose]=function(){this.dispose()},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function I(u){return/^[\s\xa0]*$/.test(u)}function Ze(u,m){D.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}R(Ze,D),Ze.prototype.init=function(u,m){const v=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Ze.Z.h.call(this)},Ze.prototype.h=function(){Ze.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Tt="closure_listenable_"+(Math.random()*1e6|0),Q=0;function ie(u,m,v,A,L){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=L,this.key=++Q,this.da=this.fa=!1}function he(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function qe(u,m,v){for(const A in u)m.call(v,u[A],A,u)}function Ge(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function V(u){const m={};for(const v in u)m[v]=u[v];return m}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(u,m){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)u[v]=A[v];for(let H=0;H<X.length;H++)v=X[H],Object.prototype.hasOwnProperty.call(A,v)&&(u[v]=A[v])}}function le(u){this.src=u,this.g={},this.h=0}le.prototype.add=function(u,m,v,A,L){const H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);const te=be(u,m,A,L);return te>-1?(m=u[te],v||(m.fa=!1)):(m=new ie(m,this.src,H,!!A,L),m.fa=v,u.push(m)),m};function Te(u,m){const v=m.type;if(v in u.g){var A=u.g[v],L=Array.prototype.indexOf.call(A,m,void 0),H;(H=L>=0)&&Array.prototype.splice.call(A,L,1),H&&(he(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function be(u,m,v,A){for(let L=0;L<u.length;++L){const H=u[L];if(!H.da&&H.listener==m&&H.capture==!!v&&H.ha==A)return L}return-1}var Oe="closure_lm_"+(Math.random()*1e6|0),bt={};function st(u,m,v,A,L){if(Array.isArray(m)){for(let H=0;H<m.length;H++)st(u,m[H],v,A,L);return null}return v=yi(v),u&&u[Tt]?u.J(m,v,p(A)?!!A.capture:!1,L):Vi(u,m,v,!1,A,L)}function Vi(u,m,v,A,L,H){if(!m)throw Error("Invalid event type");const te=p(L)?!!L.capture:!!L;let Ie=gi(u);if(Ie||(u[Oe]=Ie=new le(u)),v=Ie.add(m,v,A,te,H),v.proxy)return v;if(A=Mi(),v.proxy=A,A.src=u,A.listener=v,u.addEventListener)P||(L=te),L===void 0&&(L=!1),u.addEventListener(m.toString(),A,L);else if(u.attachEvent)u.attachEvent(gn(m.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Mi(){function u(v){return m.call(u.src,u.listener,v)}const m=Qr;return u}function ss(u,m,v,A,L){if(Array.isArray(m))for(var H=0;H<m.length;H++)ss(u,m[H],v,A,L);else A=p(A)?!!A.capture:!!A,v=yi(v),u&&u[Tt]?(u=u.i,H=String(m).toString(),H in u.g&&(m=u.g[H],v=be(m,v,A,L),v>-1&&(he(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[H],u.h--)))):u&&(u=gi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=be(m,v,A,L)),(v=u>-1?m[u]:null)&&ji(v))}function ji(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Tt])Te(m.i,u);else{var v=u.type,A=u.proxy;m.removeEventListener?m.removeEventListener(v,A,u.capture):m.detachEvent?m.detachEvent(gn(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=gi(m))?(Te(v,u),v.h==0&&(v.src=null,m[Oe]=null)):he(u)}}}function gn(u){return u in bt?bt[u]:bt[u]="on"+u}function Qr(u,m){if(u.da)u=!0;else{m=new Ze(m,this);const v=u.listener,A=u.ha||u.src;u.fa&&ji(u),u=v.call(A,m)}return u}function gi(u){return u=u[Oe],u instanceof le?u:null}var qs="__closure_events_fn_"+(Math.random()*1e9>>>0);function yi(u){return typeof u=="function"?u:(u[qs]||(u[qs]=function(m){return u.handleEvent(m)}),u[qs])}function At(){j.call(this),this.i=new le(this),this.M=this,this.G=null}R(At,j),At.prototype[Tt]=!0,At.prototype.removeEventListener=function(u,m,v,A){ss(this,u,m,v,A)};function St(u,m){var v,A=u.G;if(A)for(v=[];A;A=A.G)v.push(A);if(u=u.M,A=m.type||m,typeof m=="string")m=new D(m,u);else if(m instanceof D)m.target=m.target||u;else{var L=m;m=new D(A,u),ne(m,L)}L=!0;let H,te;if(v)for(te=v.length-1;te>=0;te--)H=m.g=v[te],L=_i(H,A,!0,m)&&L;if(H=m.g=u,L=_i(H,A,!0,m)&&L,L=_i(H,A,!1,m)&&L,v)for(te=0;te<v.length;te++)H=m.g=v[te],L=_i(H,A,!1,m)&&L}At.prototype.N=function(){if(At.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let A=0;A<v.length;A++)he(v[A]);delete u.g[m],u.h--}}this.G=null},At.prototype.J=function(u,m,v,A){return this.i.add(String(u),m,!1,v,A)},At.prototype.K=function(u,m,v,A){return this.i.add(String(u),m,!0,v,A)};function _i(u,m,v,A){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let L=!0;for(let H=0;H<m.length;++H){const te=m[H];if(te&&!te.da&&te.capture==v){const Ie=te.listener,Dt=te.ha||te.src;te.fa&&Te(u.i,te),L=Ie.call(Dt,A)!==!1&&L}}return L&&!A.defaultPrevented}function ka(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:d.setTimeout(u,m||0)}function Yr(u){u.g=ka(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class De extends j{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(u){j.call(this),this.h=u,this.g={}}R(jt,j);var ki=[];function rs(u){qe(u.g,function(m,v){this.g.hasOwnProperty(v)&&ji(m)},u),u.g={}}jt.prototype.N=function(){jt.Z.N.call(this),rs(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vn=d.JSON.stringify,Kr=d.JSON.parse,ln=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Zt(){}function vi(){}var un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wt(){D.call(this,"d")}R(wt,D);function Tn(){D.call(this,"c")}R(Tn,D);var mt={},Hs=null;function as(){return Hs=Hs||new At}mt.Ia="serverreachability";function Xr(u){D.call(this,mt.Ia,u)}R(Xr,D);function Mn(u){const m=as();St(m,new Xr(m))}mt.STAT_EVENT="statevent";function Pi(u,m){D.call(this,mt.STAT_EVENT,u),this.stat=m}R(Pi,D);function Rt(u){const m=as();St(m,new Pi(m,u))}mt.Ja="timingevent";function jn(u,m){D.call(this,mt.Ja,u),this.size=m}R(jn,D);function kn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function yn(){this.g=!0}yn.prototype.ua=function(){this.g=!1};function os(u,m,v,A,L,H){u.info(function(){if(u.g)if(H){var te="",Ie=H.split("&");for(let Xe=0;Xe<Ie.length;Xe++){var Dt=Ie[Xe].split("=");if(Dt.length>1){const gt=Dt[0];Dt=Dt[1];const ni=gt.split("_");te=ni.length>=2&&ni[1]=="type"?te+(gt+"="+Dt+"&"):te+(gt+"=redacted&")}}}else te=null;else te=H;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+m+`
`+v+`
`+te})}function Jr(u,m,v,A,L,H,te){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+m+`
`+v+`
`+H+" "+te})}function Kn(u,m,v,A){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Xo(u,v)+(A?" "+A:"")})}function ls(u,m){u.info(function(){return"TIMEOUT: "+m})}yn.prototype.info=function(){};function Xo(u,m){if(!u.g)return m;if(!m)return null;try{const H=JSON.parse(m);if(H){for(u=0;u<H.length;u++)if(Array.isArray(H[u])){var v=H[u];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var L=A[0];if(L!="noop"&&L!="stop"&&L!="close")for(let te=1;te<A.length;te++)A[te]=""}}}}return Vn(H)}catch{return m}}var us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Fs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$r;function cs(){}R(cs,Zt),cs.prototype.g=function(){return new XMLHttpRequest},$r=new cs;function Xn(u){return encodeURIComponent(String(u))}function Zr(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function Pn(u,m,v,A){this.j=u,this.i=m,this.l=v,this.S=A||1,this.V=new jt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ln}function Ln(){this.i=null,this.g="",this.h=!1}var It={},kt={};function Jn(u,m,v){u.M=1,u.A=Wr(vt(m)),u.u=v,u.R=!0,Gs(u,null)}function Gs(u,m){u.F=Date.now(),$n(u),u.B=vt(u.A);var v=u.B,A=u.S;Array.isArray(A)||(A=[String(A)]),za(v.i,"t",A),u.C=0,v=u.j.L,u.h=new Ln,u.g=Hu(u.j,v?m:null,!u.u),u.P>0&&(u.O=new De(_(u.Y,u,u.g),u.P)),m=u.V,v=u.g,A=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(ki[0]=L.toString()),L=ki);for(let H=0;H<L.length;H++){const te=st(v,L[H],A||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Mn(),os(u.i,u.v,u.B,u.l,u.S,u.u)}Pn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Ai(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const Ie=Ai(this.g),Dt=this.g.ya(),Xe=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Wt(this.g)))){this.K||Ie!=4||Dt==7||(Dt==8||Xe<=0?Mn(3):Mn(2)),Zn(this);var m=this.g.ca();this.X=m;var v=Jo(this);if(this.o=m==200,Jr(this.i,this.v,this.B,this.l,this.S,Ie,m),this.o){if(this.U&&!this.L){t:{if(this.g){var A,L=this.g;if((A=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(A)){var H=A;break t}}H=null}if(u=H)Kn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wn(this,u);else{this.o=!1,this.m=3,Rt(12),_n(this),bn(this);break e}}if(this.R){u=!0;let gt;for(;!this.K&&this.C<v.length;)if(gt=La(this,v),gt==kt){Ie==4&&(this.m=4,Rt(14),u=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(gt==It){this.m=4,Rt(15),Kn(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else Kn(this.i,this.l,gt,null),Wn(this,gt);if(Pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||v.length!=0||this.h.h||(this.m=1,Rt(16),u=!1),this.o=this.o&&u,!u)Kn(this.i,this.l,v,"[Invalid Chunked Response]"),_n(this),bn(this);else if(v.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),al(te),te.P=!0,Rt(11))}}else Kn(this.i,this.l,v,null),Wn(this,v);Ie==4&&_n(this),this.o&&!this.K&&(Ie==4?Uu(this.j,this):(this.o=!1,$n(this)))}else fs(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),_n(this),bn(this)}}}catch{}finally{}};function Jo(u){if(!Pa(u))return u.g.la();const m=Wt(u.g);if(m==="")return"";let v="";const A=m.length,L=Ai(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return _n(u),bn(u),"";u.h.i=new d.TextDecoder}for(let H=0;H<A;H++)u.h.h=!0,v+=u.h.i.decode(m[H],{stream:!(L&&H==A-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function Pa(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function La(u,m){var v=u.C,A=m.indexOf(`
`,v);return A==-1?kt:(v=Number(m.substring(v,A)),isNaN(v)?It:(A+=1,A+v>m.length?kt:(m=m.slice(A,A+v),u.C=A+v,m)))}Pn.prototype.cancel=function(){this.K=!0,_n(this)};function $n(u){u.T=Date.now()+u.H,Qs(u,u.H)}function Qs(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=kn(_(u.aa,u),m)}function Zn(u){u.D&&(d.clearTimeout(u.D),u.D=null)}Pn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(ls(this.i,this.B),this.M!=2&&(Mn(),Rt(17)),_n(this),this.m=2,bn(this)):Qs(this,this.T-u)};function bn(u){u.j.I==0||u.K||Uu(u.j,u)}function _n(u){Zn(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,rs(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Wn(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||ae(v.h,u))){if(!u.L&&ae(v.h,u)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)Ga(v),er(v);else break e;aa(v),Rt(18)}}else v.xa=L[1],0<v.xa-v.K&&L[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=kn(_(v.Va,v),6e3));W(v.h)<=1&&v.ta&&(v.ta=void 0)}else Hi(v,11)}else if((u.L||v.g==u)&&Ga(v),!I(m))for(L=v.Ba.g.parse(m),m=0;m<L.length;m++){let Xe=L[m];const gt=Xe[0];if(!(gt<=v.K))if(v.K=gt,Xe=Xe[1],v.I==2)if(Xe[0]=="c"){v.M=Xe[1],v.ba=Xe[2];const ni=Xe[3];ni!=null&&(v.ka=ni,v.j.info("VER="+v.ka));const Fi=Xe[4];Fi!=null&&(v.za=Fi,v.j.info("SVER="+v.za));const Si=Xe[5];Si!=null&&typeof Si=="number"&&Si>0&&(A=1.5*Si,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const wi=u.g;if(wi){const oa=wi.g?wi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var H=A.h;H.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(je(H,H.h),H.h=null))}if(A.G){const Qa=wi.g?wi.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(A.wa=Qa,et(A.J,A.G,Qa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var te=u;if(A.na=qu(A,A.L?A.ba:null,A.W),te.L){ke(A.h,te);var Ie=te,Dt=A.O;Dt&&(Ie.H=Dt),Ie.D&&(Zn(Ie),$n(Ie)),A.g=te}else Pu(A);v.i.length>0&&qi(v)}else Xe[0]!="stop"&&Xe[0]!="close"||Hi(v,7);else v.I==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Hi(v,7):sl(v):Xe[0]!="noop"&&v.l&&v.l.qa(Xe),v.A=0)}}Mn(4)}catch{}}var pt=class{constructor(u,m){this.g=u,this.map=m}};function w(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function q(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function W(u){return u.h?1:u.g?u.g.size:0}function ae(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function je(u,m){u.g?u.g.add(m):u.h=m}function ke(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}w.prototype.cancel=function(){if(this.i=_t(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function _t(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return Y(u.i)}var An=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ei(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const A=u[v].indexOf("=");let L,H=null;A>=0?(L=u[v].substring(0,A),H=u[v].substring(A+1)):L=u[v],m(L,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function We(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof We?(this.l=u.l,Kt(this,u.j),this.o=u.o,this.g=u.g,Ys(this,u.u),this.h=u.h,$o(this,ju(u.i)),this.m=u.m):u&&(m=String(u).match(An))?(this.l=!1,Kt(this,m[1]||"",!0),this.o=Li(m[2]||""),this.g=Li(m[3]||"",!0),Ys(this,m[4]),this.h=Li(m[5]||"",!0),$o(this,m[6]||"",!0),this.m=Li(m[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}We.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(ea(m,Ua,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ea(m,Ua,!0),"@"),u.push(Xn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ea(v,v.charAt(0)=="/"?Zo:Ou,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ea(v,Vu)),u.join("")},We.prototype.resolve=function(u){const m=vt(this);let v=!!u.j;v?Kt(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var A=u.h;if(v)Ys(m,u.u);else if(v=!!u.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var L=m.h.lastIndexOf("/");L!=-1&&(A=m.h.slice(0,L+1)+A)}if(L=A,L==".."||L==".")A="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){A=L.lastIndexOf("/",0)==0,L=L.split("/");const H=[];for(let te=0;te<L.length;){const Ie=L[te++];Ie=="."?A&&te==L.length&&H.push(""):Ie==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),A&&te==L.length&&H.push("")):(H.push(Ie),A=!0)}A=H.join("/")}else A=L}return v?m.h=A:v=u.i.toString()!=="",v?$o(m,ju(u.i)):v=!!u.m,v&&(m.m=u.m),m};function vt(u){return new We(u)}function Kt(u,m,v){u.j=v?Li(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Ys(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function $o(u,m,v){m instanceof Xs?(u.i=m,Ba(u.i,u.l)):(v||(m=ea(m,Ks)),u.i=new Xs(m,u.l))}function et(u,m,v){u.i.set(m,v)}function Wr(u){return et(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Li(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ea(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Sn),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sn(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ua=/[#\/\?@]/g,Ou=/[#\?:]/g,Zo=/[#\?]/g,Ks=/[#\?@]/g,Vu=/#/g;function Xs(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function wn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ei(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}s=Xs.prototype,s.add=function(u,m){wn(this),this.i=null,u=Js(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Mu(u,m){wn(u),m=Js(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Wo(u,m){return wn(u),m=Js(u,m),u.g.has(m)}s.forEach=function(u,m){wn(this),this.g.forEach(function(v,A){v.forEach(function(L){u.call(m,L,A,this)},this)},this)};function el(u,m){wn(u);let v=[];if(typeof m=="string")Wo(u,m)&&(v=v.concat(u.g.get(Js(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}s.set=function(u,m){return wn(this),this.i=null,u=Js(this,u),Wo(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},s.get=function(u,m){return u?(u=el(this,u),u.length>0?String(u[0]):m):m};function za(u,m,v){Mu(u,m),v.length>0&&(u.i=null,u.g.set(Js(u,m),Y(v)),u.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const L=Xn(v);v=el(this,v);for(let H=0;H<v.length;H++){let te=L;v[H]!==""&&(te+="="+Xn(v[H])),u.push(te)}}return this.i=u.join("&")};function ju(u){const m=new Xs;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Js(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Ba(u,m){m&&!u.j&&(wn(u),u.i=null,u.g.forEach(function(v,A){const L=A.toLowerCase();A!=L&&(Mu(this,A),za(this,L,v))},u)),u.j=m}function Ti(u,m){const v=new yn;if(d.Image){const A=new Image;A.onload=b(ei,v,"TestLoadImage: loaded",!0,m,A),A.onerror=b(ei,v,"TestLoadImage: error",!1,m,A),A.onabort=b(ei,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=b(ei,v,"TestLoadImage: timeout",!1,m,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else m(!1)}function tl(u,m){const v=new yn,A=new AbortController,L=setTimeout(()=>{A.abort(),ei(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:A.signal}).then(H=>{clearTimeout(L),H.ok?ei(v,"TestPingServer: ok",!0,m):ei(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),ei(v,"TestPingServer: error",!1,m)})}function ei(u,m,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function $s(){this.g=new ln}function Ui(u){this.i=u.Sb||null,this.h=u.ab||!1}R(Ui,Zt),Ui.prototype.g=function(){return new ta(this.i,this.h)};function ta(u,m){At.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}R(ta,At),s=ta.prototype,s.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,bi(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||d).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},s.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qa(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function qa(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}s.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zs(this):bi(this),this.readyState==3&&qa(this)}},s.Oa=function(u){this.g&&(this.response=this.responseText=u,Zs(this))},s.Na=function(u){this.g&&(this.response=u,Zs(this))},s.ga=function(){this.g&&Zs(this)};function Zs(u){u.readyState=4,u.l=null,u.j=null,u.B=null,bi(u)}s.setRequestHeader=function(u,m){this.A.append(u,m)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function bi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ti(u){let m="";return qe(u,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function na(u,m,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=ti(v),typeof u=="string"?v!=null&&Xn(v):et(u,m,v))}function rt(u){At.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}R(rt,At);var zi=/^https?$/i,nl=["POST","PUT"];s=rt.prototype,s.Fa=function(u){this.H=u},s.ea=function(u,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$r.g(),this.g.onreadystatechange=M(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){ia(this,H);return}if(u=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())v.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(nl,m,void 0)>=0)||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of v)this.g.setRequestHeader(H,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(H){ia(this,H)}};function ia(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,il(u),hs(u)}function il(u){u.A||(u.A=!0,St(u,"complete"),St(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,St(this,"complete"),St(this,"abort"),hs(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),rt.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?sa(this):this.Xa())},s.Xa=function(){sa(this)};function sa(u){if(u.h&&typeof c<"u"){if(u.v&&Ai(u)==4)setTimeout(u.Ca.bind(u),0);else if(St(u,"readystatechange"),Ai(u)==4){u.h=!1;try{const H=u.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var A;if(A=H===0){let te=String(u.D).match(An)[1]||null;!te&&d.self&&d.self.location&&(te=d.self.location.protocol.slice(0,-1)),A=!zi.test(te?te.toLowerCase():"")}v=A}if(v)St(u,"complete"),St(u,"success");else{u.o=6;try{var L=Ai(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",il(u)}}finally{hs(u)}}}}function hs(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||St(u,"ready");try{v.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Ai(u){return u.g?u.g.readyState:0}s.ca=function(){try{return Ai(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Kr(m)}};function Wt(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fs(u){const m={};u=(u.g&&Ai(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(I(u[A]))continue;var v=Zr(u[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=m[L]||[];m[L]=H,H.push(v)}Ge(m,function(A){return A.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ws(u){this.za=0,this.i=[],this.j=new yn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bi("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bi("baseRetryDelayMs",5e3,u),this.Za=Bi("retryDelaySeedMs",1e4,u),this.Ta=Bi("forwardChannelMaxRetries",2,u),this.va=Bi("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new w(u&&u.concurrentRequestLimit),this.Ba=new $s,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ws.prototype,s.ka=8,s.I=1,s.connect=function(u,m,v,A){Rt(0),this.W=u,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=qu(this,null,this.W),qi(this)};function sl(u){if(Ha(u),u.I==3){var m=u.V++,v=vt(u.J);if(et(v,"SID",u.M),et(v,"RID",m),et(v,"TYPE","terminate"),ra(u,v),m=new Pn(u,u.j,m),m.M=2,m.A=Wr(vt(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.A,v=!0),v||(m.g=Hu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),$n(m)}Bu(u)}function er(u){u.g&&(al(u),u.g.cancel(),u.g=null)}function Ha(u){er(u),u.v&&(d.clearTimeout(u.v),u.v=null),Ga(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function qi(u){if(!q(u.h)&&!u.m){u.m=!0;var m=u.Ea;Ke||S(),Re||(Ke(),Re=!0),N.add(m,u),u.D=0}}function Fa(u,m){return W(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=kn(_(u.Ea,u,m),zu(u,u.D)),u.D++,!0)}s.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new Pn(this,this.j,u);let H=this.o;if(this.U&&(H?(H=V(H),ne(H,this.U)):H=this.U),this.u!==null||this.R||(L.J=H,H=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ku(this,L,m),v=vt(this.J),et(v,"RID",u),et(v,"CVER",22),this.G&&et(v,"X-HTTP-Session-Id",this.G),ra(this,v),H&&(this.R?m="headers="+Xn(ti(H))+"&"+m:this.u&&na(v,this.u,H)),je(this.h,L),this.Ra&&et(v,"TYPE","init"),this.S?(et(v,"$req",m),et(v,"SID","null"),L.U=!0,Jn(L,v,null)):Jn(L,v,m),this.I=2}}else this.I==3&&(u?rl(this,u):this.i.length==0||q(this.h)||rl(this))};function rl(u,m){var v;m?v=m.l:v=u.V++;const A=vt(u.J);et(A,"SID",u.M),et(A,"RID",v),et(A,"AID",u.K),ra(u,A),u.u&&u.o&&na(A,u.u,u.o),v=new Pn(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ku(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),je(u.h,v),Jn(v,A,m)}function ra(u,m){u.H&&qe(u.H,function(v,A){et(m,A,v)}),u.l&&qe({},function(v,A){et(m,A,v)})}function ku(u,m,v){v=Math.min(u.i.length,v);const A=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let Ie=-1;for(;;){const Dt=["count="+v];Ie==-1?v>0?(Ie=L[0].g,Dt.push("ofs="+Ie)):Ie=0:Dt.push("ofs="+Ie);let Xe=!0;for(let gt=0;gt<v;gt++){var H=L[gt].g;const ni=L[gt].map;if(H-=Ie,H<0)Ie=Math.max(0,L[gt].g-100),Xe=!1;else try{H="req"+H+"_"||"";try{var te=ni instanceof Map?ni:Object.entries(ni);for(const[Fi,Si]of te){let wi=Si;p(Si)&&(wi=Vn(Si)),Dt.push(H+Fi+"="+encodeURIComponent(wi))}}catch(Fi){throw Dt.push(H+"type="+encodeURIComponent("_badmap")),Fi}}catch{A&&A(ni)}}if(Xe){te=Dt.join("&");break e}}te=void 0}return u=u.i.splice(0,v),m.G=u,te}function Pu(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;Ke||S(),Re||(Ke(),Re=!0),N.add(m,u),u.A=0}}function aa(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=kn(_(u.Da,u),zu(u,u.A)),u.A++,!0)}s.Da=function(){if(this.v=null,Lu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=kn(_(this.Wa,this),u)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),er(this),Lu(this))};function al(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function Lu(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=vt(u.na);et(m,"RID","rpc"),et(m,"SID",u.M),et(m,"AID",u.K),et(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&et(m,"TO",u.ia),et(m,"TYPE","xmlhttp"),ra(u,m),u.u&&u.o&&na(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Wr(vt(m)),v.u=null,v.R=!0,Gs(v,u)}s.Va=function(){this.C!=null&&(this.C=null,er(this),aa(this),Rt(19))};function Ga(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Uu(u,m){var v=null;if(u.g==m){Ga(u),al(u),u.g=null;var A=2}else if(ae(u.h,m))v=m.G,ke(u.h,m),A=1;else return;if(u.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var L=u.D;A=as(),St(A,new jn(A,v)),qi(u)}else Pu(u);else if(L=m.m,L==3||L==0&&m.X>0||!(A==1&&Fa(u,m)||A==2&&aa(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),L){case 1:Hi(u,5);break;case 4:Hi(u,10);break;case 3:Hi(u,6);break;default:Hi(u,2)}}}function zu(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function Hi(u,m){if(u.j.info("Error code "+m),m==2){var v=_(u.bb,u),A=u.Ua;const L=!A;A=new We(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Kt(A,"https"),Wr(A),L?Ti(A.toString(),v):tl(A.toString(),v)}else Rt(2);u.I=0,u.l&&u.l.pa(m),Bu(u),Ha(u)}s.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Bu(u){if(u.I=0,u.ja=[],u.l){const m=_t(u.h);(m.length!=0||u.i.length!=0)&&(ee(u.ja,m),ee(u.ja,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.oa()}}function qu(u,m,v){var A=v instanceof We?vt(v):new We(v);if(A.g!="")m&&(A.g=m+"."+A.g),Ys(A,A.u);else{var L=d.location;A=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;const H=new We(null);A&&Kt(H,A),m&&(H.g=m),L&&Ys(H,L),v&&(H.h=v),A=H}return v=u.G,m=u.wa,v&&m&&et(A,v,m),et(A,"VER",u.ka),ra(u,A),A}function Hu(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new rt(new Ui({ab:v})):new rt(u.ma),m.Fa(u.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}s=Fu.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function tr(){}tr.prototype.g=function(u,m){return new vn(u,m)};function vn(u,m){At.call(this),this.g=new Ws(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!I(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!I(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ds(this)}R(vn,At),vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){sl(this.g)},vn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=Vn(u),u=v);m.i.push(new pt(m.Ya++,u)),m.I==3&&qi(m)},vn.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,vn.Z.N.call(this)};function Gu(u){wt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}R(Gu,wt);function Qu(){Tn.call(this),this.status=1}R(Qu,Tn);function ds(u){this.g=u}R(ds,Fu),ds.prototype.ra=function(){St(this.g,"a")},ds.prototype.qa=function(u){St(this.g,new Gu(u))},ds.prototype.pa=function(u){St(this.g,new Qu)},ds.prototype.oa=function(){St(this.g,"b")},tr.prototype.createWebChannel=tr.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,XT=function(){return new tr},KT=function(){return as()},YT=mt,Im={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,uh=us,Fs.COMPLETE="complete",QT=Fs,vi.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",At.prototype.listen=At.prototype.J,Zl=vi,rt.prototype.listenOnce=rt.prototype.K,rt.prototype.getLastError=rt.prototype.Ha,rt.prototype.getLastErrorCode=rt.prototype.ya,rt.prototype.getStatus=rt.prototype.ca,rt.prototype.getResponseJson=rt.prototype.La,rt.prototype.getResponseText=rt.prototype.la,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Fa,GT=rt}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="12.12.0";function TI(s){Fo=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Da=new Gm("@firebase/firestore");function So(){return Da.logLevel}function ue(s,...e){if(Da.logLevel<=Ue.DEBUG){const i=e.map(sp);Da.debug(`Firestore (${Fo}): ${s}`,...i)}}function Ps(s,...e){if(Da.logLevel<=Ue.ERROR){const i=e.map(sp);Da.error(`Firestore (${Fo}): ${s}`,...i)}}function Oa(s,...e){if(Da.logLevel<=Ue.WARN){const i=e.map(sp);Da.warn(`Firestore (${Fo}): ${s}`,...i)}}function sp(s){if(typeof s=="string")return s;try{return(function(i){return JSON.stringify(i)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(s,e,i){let r="Unexpected state";typeof e=="string"?r=e:i=e,JT(s,r,i)}function JT(s,e,i){let r=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(i!==void 0)try{r+=" CONTEXT: "+JSON.stringify(i)}catch{r+=" CONTEXT: "+i}throw Ps(r),new Error(r)}function $e(s,e,i,r){let l="Unexpected state";typeof i=="string"?l=i:r=i,s||JT(e,l,r)}function we(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Us{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(dn.UNAUTHENTICATED)))}shutdown(){}}class AI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class SI{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){$e(this.o===void 0,42304);let r=this.i;const l=g=>this.i!==r?(r=this.i,i(g)):Promise.resolve();let c=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Mr,e.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},p=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Mr)}}),0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string",31837,{l:r}),new $T(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class wI{constructor(e,i,r){this.P=e,this.T=i,this.I=r,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class RI{constructor(e,i,r){this.P=e,this.T=i,this.I=r}getToken(){return Promise.resolve(new wI(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(dn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class II{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){$e(this.o===void 0,3512);const r=c=>{c.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,ue("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const l=c=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?($e(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Yv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<s;r++)i[r]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const l=CI(40);for(let c=0;c<l.length;++c)r.length<20&&l[c]<i&&(r+=e.charAt(l[c]%62))}return r}}function ze(s,e){return s<e?-1:s>e?1:0}function Cm(s,e){const i=Math.min(s.length,e.length);for(let r=0;r<i;r++){const l=s.charAt(r),c=e.charAt(r);if(l!==c)return um(l)===um(c)?ze(l,c):um(l)?1:-1}return ze(s.length,e.length)}const xI=55296,NI=57343;function um(s){const e=s.charCodeAt(0);return e>=xI&&e<=NI}function ko(s,e,i){return s.length===e.length&&s.every(((r,l)=>i(r,e[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="__name__";class $i{constructor(e,i,r){i===void 0?i=0:i>e.length&&Ee(637,{offset:i,range:e.length}),r===void 0?r=e.length-i:r>e.length-i&&Ee(1746,{length:r,range:e.length-i}),this.segments=e,this.offset=i,this.len=r}get length(){return this.len}isEqual(e){return $i.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof $i?e.forEach((r=>{i.push(r)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,r=this.limit();i<r;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const r=Math.min(e.length,i.length);for(let l=0;l<r;l++){const c=$i.compareSegments(e.get(l),i.get(l));if(c!==0)return c}return ze(e.length,i.length)}static compareSegments(e,i){const r=$i.isNumericId(e),l=$i.isNumericId(i);return r&&!l?-1:!r&&l?1:r&&l?$i.extractNumericId(e).compare($i.extractNumericId(i)):Cm(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vr.fromString(e.substring(4,e.length-2))}}class ct extends $i{construct(e,i,r){return new ct(e,i,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);i.push(...r.split("/").filter((l=>l.length>0)))}return new ct(i)}static emptyPath(){return new ct([])}}const DI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends $i{construct(e,i,r){return new an(e,i,r)}static isValidIdentifier(e){return DI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kv}static keyField(){return new an([Kv])}static fromServerFormat(e){const i=[];let r="",l=0;const c=()=>{if(r.length===0)throw new oe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(r),r=""};let d=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new oe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new oe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(r+=p,l++):(c(),l++)}if(c(),d)throw new oe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(i)}static emptyPath(){return new an([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ct.fromString(e))}static fromName(e){return new pe(ct.fromString(e).popFirst(5))}static empty(){return new pe(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return ct.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ct(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(s,e,i){if(!i)throw new oe(J.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function OI(s,e,i,r){if(e===!0&&r===!0)throw new oe(J.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function Xv(s){if(!pe.isDocumentKey(s))throw new oe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Jv(s){if(pe.isDocumentKey(s))throw new oe(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function WT(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Uh(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Ee(12329,{type:typeof s})}function di(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new oe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Uh(s);throw new oe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
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
 */function Ht(s,e){const i={typeString:s};return e&&(i.value=e),i}function wu(s,e){if(!WT(s))throw new oe(J.INVALID_ARGUMENT,"JSON must be an object");let i;for(const r in e)if(e[r]){const l=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){i=`JSON missing required field: '${r}'`;break}const d=s[r];if(l&&typeof d!==l){i=`JSON field '${r}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){i=`Expected '${r}' field to equal '${c.value}'`;break}}if(i)throw new oe(J.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=-62135596800,Zv=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),r=Math.floor((e-1e3*i)*Zv);return new dt(i,r)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new oe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new oe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<$v)throw new oe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zv}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wu(e,dt._jsonSchema))return new dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$v;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:Ht("string",dt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new dt(0,0))}static max(){return new Ae(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const uu=-1;function VI(s,e){const i=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,l=Ae.fromTimestamp(r===1e9?new dt(i+1,0):new dt(i,r));return new kr(l,pe.empty(),e)}function MI(s){return new kr(s.readTime,s.key,uu)}class kr{constructor(e,i,r){this.readTime=e,this.documentKey=i,this.largestBatchId=r}static min(){return new kr(Ae.min(),pe.empty(),uu)}static max(){return new kr(Ae.max(),pe.empty(),uu)}}function jI(s,e){let i=s.readTime.compareTo(e.readTime);return i!==0?i:(i=pe.comparator(s.documentKey,e.documentKey),i!==0?i:ze(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(s){if(s.code!==J.FAILED_PRECONDITION||s.message!==kI)throw s;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new Z(((r,l)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(r,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(r,l)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof Z?i:Z.resolve(i)}catch(i){return Z.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):Z.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):Z.reject(i)}static resolve(e){return new Z(((i,r)=>{i(e)}))}static reject(e){return new Z(((i,r)=>{r(e)}))}static waitFor(e){return new Z(((i,r)=>{let l=0,c=0,d=!1;e.forEach((p=>{++l,p.next((()=>{++c,d&&c===l&&i()}),(g=>r(g)))})),d=!0,c===l&&i()}))}static or(e){let i=Z.resolve(!1);for(const r of e)i=i.next((l=>l?Z.resolve(l):r()));return i}static forEach(e,i){const r=[];return e.forEach(((l,c)=>{r.push(i.call(this,l,c))})),this.waitFor(r)}static mapArray(e,i){return new Z(((r,l)=>{const c=e.length,d=new Array(c);let p=0;for(let g=0;g<c;g++){const _=g;i(e[_]).next((b=>{d[_]=b,++p,p===c&&r(d)}),(b=>l(b)))}}))}static doWhile(e,i){return new Z(((r,l)=>{const c=()=>{e()===!0?i().next((()=>{c()}),l):r()};c()}))}}function LI(s){const e=s.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Qo(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class zh{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>i.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=-1;function Bh(s){return s==null}function wh(s){return s===0&&1/s==-1/0}function UI(s){return typeof s=="number"&&Number.isInteger(s)&&!wh(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="";function zI(s){let e="";for(let i=0;i<s.length;i++)e.length>0&&(e=Wv(e)),e=BI(s.get(i),e);return Wv(e)}function BI(s,e){let i=e;const r=s.length;for(let l=0;l<r;l++){const c=s.charAt(l);switch(c){case"\0":i+="";break;case e0:i+="";break;default:i+=c}}return i}function Wv(s){return s+e0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(s){let e=0;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e++;return e}function Hr(s,e){for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e(i,s[i])}function t0(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,i){this.comparator=e,this.root=i||rn.EMPTY}insert(e,i){return new Et(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rn.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return i.value;r<0?i=i.left:r>0&&(i=i.right)}return null}indexOf(e){let i=0,r=this.root;for(;!r.isEmpty();){const l=this.comparator(e,r.key);if(l===0)return i+r.left.size;l<0?r=r.left:(i+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,r)=>(e(i,r),!1)))}toString(){const e=[];return this.inorderTraversal(((i,r)=>(e.push(`${i}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zc(this.root,e,this.comparator,!0)}}class Zc{constructor(e,i,r,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=i?r(e.key,i):1,i&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rn{constructor(e,i,r,l,c){this.key=e,this.value=i,this.color=r??rn.RED,this.left=l??rn.EMPTY,this.right=c??rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,r,l,c){return new rn(e??this.key,i??this.value,r??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let l=this;const c=r(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,i,r),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(e,i,r)),l.fixUp()}removeMin(){if(this.left.isEmpty())return rn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let r,l=this;if(i(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(e,l.key)===0){if(l.right.isEmpty())return rn.EMPTY;r=l.right.min(),l=l.copy(r.key,r.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1;rn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,i,r,l,c){return this}insert(e,i,r){return new rn(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,r)=>(e(i),!1)))}forEachInRange(e,i){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const l=r.getNext();if(this.comparator(l.key,e[1])>=0)return;i(l.key)}}forEachWhile(e,i){let r;for(r=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new tE(this.data.getIterator())}getIteratorFrom(e){return new tE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((r=>{i=i.add(r)})),i}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const i=this.data.getIterator(),r=e.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=r.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new Yt(this.comparator);return i.data=e,i}}class tE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new Yn([])}unionWith(e){let i=new Yt(an.comparator);for(const r of this.fields)i=i.add(r);for(const r of e)i=i.add(r);return new Yn(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,((i,r)=>i.isEqual(r)))}}/**
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
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new n0("Invalid base64 string: "+c):c}})(e);return new on(i)}static fromUint8Array(e){const i=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(e);return new on(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const r=new Uint8Array(i.length);for(let l=0;l<i.length;l++)r[l]=i.charCodeAt(l);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const qI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(s){if($e(!!s,39018),typeof s=="string"){let e=0;const i=qI.exec(s);if($e(!!i,46558,{timestamp:s}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),e=Number(l)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Mt(s.seconds),nanos:Mt(s.nanos)}}function Mt(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Lr(s){return typeof s=="string"?on.fromBase64String(s):on.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="server_timestamp",s0="__type__",r0="__previous_value__",a0="__local_write_time__";function op(s){var i,r;return((r=(((i=s==null?void 0:s.mapValue)==null?void 0:i.fields)||{})[s0])==null?void 0:r.stringValue)===i0}function qh(s){const e=s.mapValue.fields[r0];return op(e)?qh(e):e}function cu(s){const e=Pr(s.mapValue.fields[a0].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,i,r,l,c,d,p,g,_,b,R){this.databaseId=e,this.appId=i,this.persistenceKey=r,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=b,this.apiKey=R}}const Rh="(default)";class hu{constructor(e,i){this.projectId=e,this.database=i||Rh}static empty(){return new hu("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof hu&&e.projectId===this.projectId&&e.database===this.database}}function FI(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new oe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hu(s.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="__type__",GI="__max__",Wc={mapValue:{}},l0="__vector__",Ih="value";function Ur(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?op(s)?4:YI(s)?9007199254740991:QI(s)?10:11:Ee(28295,{value:s})}function ns(s,e){if(s===e)return!0;const i=Ur(s);if(i!==Ur(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return cu(s).isEqual(cu(e));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=Pr(l.timestampValue),p=Pr(c.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(l,c){return Lr(l.bytesValue).isEqual(Lr(c.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(l,c){return Mt(l.geoPointValue.latitude)===Mt(c.geoPointValue.latitude)&&Mt(l.geoPointValue.longitude)===Mt(c.geoPointValue.longitude)})(s,e);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return Mt(l.integerValue)===Mt(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=Mt(l.doubleValue),p=Mt(c.doubleValue);return d===p?wh(d)===wh(p):isNaN(d)&&isNaN(p)}return!1})(s,e);case 9:return ko(s.arrayValue.values||[],e.arrayValue.values||[],ns);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},p=c.mapValue.fields||{};if(eE(d)!==eE(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!ns(d[g],p[g])))return!1;return!0})(s,e);default:return Ee(52216,{left:s})}}function fu(s,e){return(s.values||[]).find((i=>ns(i,e)))!==void 0}function Po(s,e){if(s===e)return 0;const i=Ur(s),r=Ur(e);if(i!==r)return ze(i,r);switch(i){case 0:case 9007199254740991:return 0;case 1:return ze(s.booleanValue,e.booleanValue);case 2:return(function(c,d){const p=Mt(c.integerValue||c.doubleValue),g=Mt(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(s,e);case 3:return nE(s.timestampValue,e.timestampValue);case 4:return nE(cu(s),cu(e));case 5:return Cm(s.stringValue,e.stringValue);case 6:return(function(c,d){const p=Lr(c),g=Lr(d);return p.compareTo(g)})(s.bytesValue,e.bytesValue);case 7:return(function(c,d){const p=c.split("/"),g=d.split("/");for(let _=0;_<p.length&&_<g.length;_++){const b=ze(p[_],g[_]);if(b!==0)return b}return ze(p.length,g.length)})(s.referenceValue,e.referenceValue);case 8:return(function(c,d){const p=ze(Mt(c.latitude),Mt(d.latitude));return p!==0?p:ze(Mt(c.longitude),Mt(d.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return iE(s.arrayValue,e.arrayValue);case 10:return(function(c,d){var M,Y,ee,se;const p=c.fields||{},g=d.fields||{},_=(M=p[Ih])==null?void 0:M.arrayValue,b=(Y=g[Ih])==null?void 0:Y.arrayValue,R=ze(((ee=_==null?void 0:_.values)==null?void 0:ee.length)||0,((se=b==null?void 0:b.values)==null?void 0:se.length)||0);return R!==0?R:iE(_,b)})(s.mapValue,e.mapValue);case 11:return(function(c,d){if(c===Wc.mapValue&&d===Wc.mapValue)return 0;if(c===Wc.mapValue)return 1;if(d===Wc.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),_=d.fields||{},b=Object.keys(_);g.sort(),b.sort();for(let R=0;R<g.length&&R<b.length;++R){const M=Cm(g[R],b[R]);if(M!==0)return M;const Y=Po(p[g[R]],_[b[R]]);if(Y!==0)return Y}return ze(g.length,b.length)})(s.mapValue,e.mapValue);default:throw Ee(23264,{he:i})}}function nE(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ze(s,e);const i=Pr(s),r=Pr(e),l=ze(i.seconds,r.seconds);return l!==0?l:ze(i.nanos,r.nanos)}function iE(s,e){const i=s.values||[],r=e.values||[];for(let l=0;l<i.length&&l<r.length;++l){const c=Po(i[l],r[l]);if(c)return c}return ze(i.length,r.length)}function Lo(s){return xm(s)}function xm(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(i){const r=Pr(i);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(i){return Lr(i).toBase64()})(s.bytesValue):"referenceValue"in s?(function(i){return pe.fromName(i).toString()})(s.referenceValue):"geoPointValue"in s?(function(i){return`geo(${i.latitude},${i.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(i){let r="[",l=!0;for(const c of i.values||[])l?l=!1:r+=",",r+=xm(c);return r+"]"})(s.arrayValue):"mapValue"in s?(function(i){const r=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const d of r)c?c=!1:l+=",",l+=`${d}:${xm(i.fields[d])}`;return l+"}"})(s.mapValue):Ee(61005,{value:s})}function ch(s){switch(Ur(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qh(s);return e?16+ch(e):16;case 5:return 2*s.stringValue.length;case 6:return Lr(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((l,c)=>l+ch(c)),0)})(s.arrayValue);case 10:case 11:return(function(r){let l=0;return Hr(r.fields,((c,d)=>{l+=c.length+ch(d)})),l})(s.mapValue);default:throw Ee(13486,{value:s})}}function sE(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Nm(s){return!!s&&"integerValue"in s}function lp(s){return!!s&&"arrayValue"in s}function rE(s){return!!s&&"nullValue"in s}function aE(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function hh(s){return!!s&&"mapValue"in s}function QI(s){var i,r;return((r=(((i=s==null?void 0:s.mapValue)==null?void 0:i.fields)||{})[o0])==null?void 0:r.stringValue)===l0}function iu(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Hr(s.mapValue.fields,((i,r)=>e.mapValue.fields[i]=iu(r))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(s.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=iu(s.arrayValue.values[i]);return e}return{...s}}function YI(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===GI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let r=0;r<e.length-1;++r)if(i=(i.mapValue.fields||{})[e.get(r)],!hh(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=iu(i)}setAll(e){let i=an.emptyPath(),r={},l=[];e.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const g=this.getFieldsMap(i);this.applyChanges(g,r,l),r={},l=[],i=p.popLast()}d?r[p.lastSegment()]=iu(d):l.push(p.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,r,l)}delete(e){const i=this.field(e.popLast());hh(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return ns(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let r=0;r<e.length;++r){let l=i.mapValue.fields[e.get(r)];hh(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[e.get(r)]=l),i=l}return i.mapValue.fields}applyChanges(e,i,r){Hr(i,((l,c)=>e[l]=c));for(const l of r)delete e[l]}clone(){return new On(iu(this.value))}}function u0(s){const e=[];return Hr(s.fields,((i,r)=>{const l=new an([i]);if(hh(r)){const c=u0(r.mapValue).fields;if(c.length===0)e.push(l);else for(const d of c)e.push(l.child(d))}else e.push(l)})),new Yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,i,r,l,c,d,p){this.key=e,this.documentType=i,this.version=r,this.readTime=l,this.createTime=c,this.data=d,this.documentState=p}static newInvalidDocument(e){return new mn(e,0,Ae.min(),Ae.min(),Ae.min(),On.empty(),0)}static newFoundDocument(e,i,r,l){return new mn(e,1,i,Ae.min(),r,l,0)}static newNoDocument(e,i){return new mn(e,2,i,Ae.min(),Ae.min(),On.empty(),0)}static newUnknownDocument(e,i){return new mn(e,3,i,Ae.min(),Ae.min(),On.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ch{constructor(e,i){this.position=e,this.inclusive=i}}function oE(s,e,i){let r=0;for(let l=0;l<s.position.length;l++){const c=e[l],d=s.position[l];if(c.field.isKeyField()?r=pe.comparator(pe.fromName(d.referenceValue),i.key):r=Po(d,i.data.field(c.field)),c.dir==="desc"&&(r*=-1),r!==0)break}return r}function lE(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let i=0;i<s.position.length;i++)if(!ns(s.position[i],e.position[i]))return!1;return!0}/**
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
 */class du{constructor(e,i="asc"){this.field=e,this.dir=i}}function KI(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class c0{}class qt extends c0{constructor(e,i,r){super(),this.field=e,this.op=i,this.value=r}static create(e,i,r){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,r):new JI(e,i,r):i==="array-contains"?new WI(e,r):i==="in"?new eC(e,r):i==="not-in"?new tC(e,r):i==="array-contains-any"?new nC(e,r):new qt(e,i,r)}static createKeyFieldInFilter(e,i,r){return i==="in"?new $I(e,r):new ZI(e,r)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(Po(i,this.value)):i!==null&&Ur(this.value)===Ur(i)&&this.matchesComparison(Po(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oi extends c0{constructor(e,i){super(),this.filters=e,this.op=i,this.Pe=null}static create(e,i){return new Oi(e,i)}matches(e){return h0(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h0(s){return s.op==="and"}function f0(s){return XI(s)&&h0(s)}function XI(s){for(const e of s.filters)if(e instanceof Oi)return!1;return!0}function Dm(s){if(s instanceof qt)return s.field.canonicalString()+s.op.toString()+Lo(s.value);if(f0(s))return s.filters.map((e=>Dm(e))).join(",");{const e=s.filters.map((i=>Dm(i))).join(",");return`${s.op}(${e})`}}function d0(s,e){return s instanceof qt?(function(r,l){return l instanceof qt&&r.op===l.op&&r.field.isEqual(l.field)&&ns(r.value,l.value)})(s,e):s instanceof Oi?(function(r,l){return l instanceof Oi&&r.op===l.op&&r.filters.length===l.filters.length?r.filters.reduce(((c,d,p)=>c&&d0(d,l.filters[p])),!0):!1})(s,e):void Ee(19439)}function m0(s){return s instanceof qt?(function(i){return`${i.field.canonicalString()} ${i.op} ${Lo(i.value)}`})(s):s instanceof Oi?(function(i){return i.op.toString()+" {"+i.getFilters().map(m0).join(" ,")+"}"})(s):"Filter"}class JI extends qt{constructor(e,i,r){super(e,i,r),this.key=pe.fromName(r.referenceValue)}matches(e){const i=pe.comparator(e.key,this.key);return this.matchesComparison(i)}}class $I extends qt{constructor(e,i){super(e,"in",i),this.keys=p0("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class ZI extends qt{constructor(e,i){super(e,"not-in",i),this.keys=p0("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function p0(s,e){var i;return(((i=e.arrayValue)==null?void 0:i.values)||[]).map((r=>pe.fromName(r.referenceValue)))}class WI extends qt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return lp(i)&&fu(i.arrayValue,this.value)}}class eC extends qt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&fu(this.value.arrayValue,i)}}class tC extends qt{constructor(e,i){super(e,"not-in",i)}matches(e){if(fu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&i.nullValue===void 0&&!fu(this.value.arrayValue,i)}}class nC extends qt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!lp(i)||!i.arrayValue.values)&&i.arrayValue.values.some((r=>fu(this.value.arrayValue,r)))}}/**
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
 */class iC{constructor(e,i=null,r=[],l=[],c=null,d=null,p=null){this.path=e,this.collectionGroup=i,this.orderBy=r,this.filters=l,this.limit=c,this.startAt=d,this.endAt=p,this.Te=null}}function uE(s,e=null,i=[],r=[],l=null,c=null,d=null){return new iC(s,e,i,r,l,c,d)}function up(s){const e=we(s);if(e.Te===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((r=>Dm(r))).join(","),i+="|ob:",i+=e.orderBy.map((r=>(function(c){return c.field.canonicalString()+c.dir})(r))).join(","),Bh(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((r=>Lo(r))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((r=>Lo(r))).join(",")),e.Te=i}return e.Te}function cp(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<s.orderBy.length;i++)if(!KI(s.orderBy[i],e.orderBy[i]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let i=0;i<s.filters.length;i++)if(!d0(s.filters[i],e.filters[i]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!lE(s.startAt,e.startAt)&&lE(s.endAt,e.endAt)}function Om(s){return pe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,i=null,r=[],l=[],c=null,d="F",p=null,g=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=r,this.filters=l,this.limit=c,this.limitType=d,this.startAt=p,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function sC(s,e,i,r,l,c,d,p){return new Yo(s,e,i,r,l,c,d,p)}function Hh(s){return new Yo(s)}function cE(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function rC(s){return pe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function g0(s){return s.collectionGroup!==null}function su(s){const e=we(s);if(e.Ee===null){e.Ee=[];const i=new Set;for(const c of e.explicitOrderBy)e.Ee.push(c),i.add(c.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Yt(an.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||e.Ee.push(new du(c,r))})),i.has(an.keyField().canonicalString())||e.Ee.push(new du(an.keyField(),r))}return e.Ee}function Wi(s){const e=we(s);return e.Ie||(e.Ie=aC(e,su(s))),e.Ie}function aC(s,e){if(s.limitType==="F")return uE(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new du(l.field,c)}));const i=s.endAt?new Ch(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new Ch(s.startAt.position,s.startAt.inclusive):null;return uE(s.path,s.collectionGroup,e,s.filters,s.limit,i,r)}}function Vm(s,e){const i=s.filters.concat([e]);return new Yo(s.path,s.collectionGroup,s.explicitOrderBy.slice(),i,s.limit,s.limitType,s.startAt,s.endAt)}function oC(s,e){const i=s.explicitOrderBy.concat([e]);return new Yo(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}function xh(s,e,i){return new Yo(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,i,s.startAt,s.endAt)}function Fh(s,e){return cp(Wi(s),Wi(e))&&s.limitType===e.limitType}function y0(s){return`${up(Wi(s))}|lt:${s.limitType}`}function wo(s){return`Query(target=${(function(i){let r=i.path.canonicalString();return i.collectionGroup!==null&&(r+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(r+=`, filters: [${i.filters.map((l=>m0(l))).join(", ")}]`),Bh(i.limit)||(r+=", limit: "+i.limit),i.orderBy.length>0&&(r+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(r+=", startAt: ",r+=i.startAt.inclusive?"b:":"a:",r+=i.startAt.position.map((l=>Lo(l))).join(",")),i.endAt&&(r+=", endAt: ",r+=i.endAt.inclusive?"a:":"b:",r+=i.endAt.position.map((l=>Lo(l))).join(",")),`Target(${r})`})(Wi(s))}; limitType=${s.limitType})`}function Gh(s,e){return e.isFoundDocument()&&(function(r,l){const c=l.key.path;return r.collectionGroup!==null?l.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(c):pe.isDocumentKey(r.path)?r.path.isEqual(c):r.path.isImmediateParentOf(c)})(s,e)&&(function(r,l){for(const c of su(r))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(s,e)&&(function(r,l){for(const c of r.filters)if(!c.matches(l))return!1;return!0})(s,e)&&(function(r,l){return!(r.startAt&&!(function(d,p,g){const _=oE(d,p,g);return d.inclusive?_<=0:_<0})(r.startAt,su(r),l)||r.endAt&&!(function(d,p,g){const _=oE(d,p,g);return d.inclusive?_>=0:_>0})(r.endAt,su(r),l))})(s,e)}function lC(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function _0(s){return(e,i)=>{let r=!1;for(const l of su(s)){const c=uC(l,e,i);if(c!==0)return c;r=r||l.field.isKeyField()}return 0}}function uC(s,e,i){const r=s.field.isKeyField()?pe.comparator(e.key,i.key):(function(c,d,p){const g=d.data.field(c),_=p.data.field(c);return g!==null&&_!==null?Po(g,_):Ee(42886)})(s.field,e,i);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return Ee(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(const[l,c]of r)if(this.equalsFn(l,e))return c}}has(e){return this.get(e)!==void 0}set(e,i){const r=this.mapKeyFn(e),l=this.inner[r];if(l===void 0)return this.inner[r]=[[e,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],e))return void(l[c]=[e,i]);l.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return!1;for(let l=0;l<r.length;l++)if(this.equalsFn(r[l][0],e))return r.length===1?delete this.inner[i]:r.splice(l,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,((i,r)=>{for(const[l,c]of r)e(l,c)}))}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Et(pe.comparator);function Ls(){return cC}const v0=new Et(pe.comparator);function Wl(...s){let e=v0;for(const i of s)e=e.insert(i.key,i);return e}function E0(s){let e=v0;return s.forEach(((i,r)=>e=e.insert(i,r.overlayedDocument))),e}function wa(){return ru()}function T0(){return ru()}function ru(){return new Ma((s=>s.toString()),((s,e)=>s.isEqual(e)))}const hC=new Et(pe.comparator),fC=new Yt(pe.comparator);function Be(...s){let e=fC;for(const i of s)e=e.add(i);return e}const dC=new Yt(ze);function mC(){return dC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wh(e)?"-0":e}}function b0(s){return{integerValue:""+s}}function A0(s,e){return UI(e)?b0(e):hp(s,e)}/**
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
 */class Qh{constructor(){this._=void 0}}function pC(s,e,i){return s instanceof mu?(function(l,c){const d={fields:{[s0]:{stringValue:i0},[a0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&op(c)&&(c=qh(c)),c&&(d.fields[r0]=c),{mapValue:d}})(i,e):s instanceof pu?w0(s,e):s instanceof gu?R0(s,e):(function(l,c){const d=S0(l,c),p=hE(d)+hE(l.Ae);return Nm(d)&&Nm(l.Ae)?b0(p):hp(l.serializer,p)})(s,e)}function gC(s,e,i){return s instanceof pu?w0(s,e):s instanceof gu?R0(s,e):i}function S0(s,e){return s instanceof yu?(function(r){return Nm(r)||(function(c){return!!c&&"doubleValue"in c})(r)})(e)?e:{integerValue:0}:null}class mu extends Qh{}class pu extends Qh{constructor(e){super(),this.elements=e}}function w0(s,e){const i=I0(e);for(const r of s.elements)i.some((l=>ns(l,r)))||i.push(r);return{arrayValue:{values:i}}}class gu extends Qh{constructor(e){super(),this.elements=e}}function R0(s,e){let i=I0(e);for(const r of s.elements)i=i.filter((l=>!ns(l,r)));return{arrayValue:{values:i}}}class yu extends Qh{constructor(e,i){super(),this.serializer=e,this.Ae=i}}function hE(s){return Mt(s.integerValue||s.doubleValue)}function I0(s){return lp(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,i){this.field=e,this.transform=i}}function yC(s,e){return s.field.isEqual(e.field)&&(function(r,l){return r instanceof pu&&l instanceof pu||r instanceof gu&&l instanceof gu?ko(r.elements,l.elements,ns):r instanceof yu&&l instanceof yu?ns(r.Ae,l.Ae):r instanceof mu&&l instanceof mu})(s.transform,e.transform)}class _C{constructor(e,i){this.version=e,this.transformResults=i}}class mi{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new mi}static exists(e){return new mi(void 0,e)}static updateTime(e){return new mi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fh(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Yh{}function x0(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new fp(s.key,mi.none()):new Ru(s.key,s.data,mi.none());{const i=s.data,r=On.empty();let l=new Yt(an.comparator);for(let c of e.fields)if(!l.has(c)){let d=i.field(c);d===null&&c.length>1&&(c=c.popLast(),d=i.field(c)),d===null?r.delete(c):r.set(c,d),l=l.add(c)}return new Fr(s.key,r,new Yn(l.toArray()),mi.none())}}function vC(s,e,i){s instanceof Ru?(function(l,c,d){const p=l.value.clone(),g=dE(l.fieldTransforms,c,d.transformResults);p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(s,e,i):s instanceof Fr?(function(l,c,d){if(!fh(l.precondition,c))return void c.convertToUnknownDocument(d.version);const p=dE(l.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(N0(l)),g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(s,e,i):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,i)}function au(s,e,i,r){return s instanceof Ru?(function(c,d,p,g){if(!fh(c.precondition,d))return p;const _=c.value.clone(),b=mE(c.fieldTransforms,g,d);return _.setAll(b),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null})(s,e,i,r):s instanceof Fr?(function(c,d,p,g){if(!fh(c.precondition,d))return p;const _=mE(c.fieldTransforms,g,d),b=d.data;return b.setAll(N0(c)),b.setAll(_),d.convertToFoundDocument(d.version,b).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((R=>R.field)))})(s,e,i,r):(function(c,d,p){return fh(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(s,e,i)}function EC(s,e){let i=null;for(const r of s.fieldTransforms){const l=e.data.field(r.field),c=S0(r.transform,l||null);c!=null&&(i===null&&(i=On.empty()),i.set(r.field,c))}return i||null}function fE(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(r,l){return r===void 0&&l===void 0||!(!r||!l)&&ko(r,l,((c,d)=>yC(c,d)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Ru extends Yh{constructor(e,i,r,l=[]){super(),this.key=e,this.value=i,this.precondition=r,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Fr extends Yh{constructor(e,i,r,l,c=[]){super(),this.key=e,this.data=i,this.fieldMask=r,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function N0(s){const e=new Map;return s.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const r=s.data.field(i);e.set(i,r)}})),e}function dE(s,e,i){const r=new Map;$e(s.length===i.length,32656,{Ve:i.length,de:s.length});for(let l=0;l<i.length;l++){const c=s[l],d=c.transform,p=e.data.field(c.field);r.set(c.field,gC(d,p,i[l]))}return r}function mE(s,e,i){const r=new Map;for(const l of s){const c=l.transform,d=i.data.field(l.field);r.set(l.field,pC(c,d,e))}return r}class fp extends Yh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TC extends Yh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,i,r,l){this.batchId=e,this.localWriteTime=i,this.baseMutations=r,this.mutations=l}applyToRemoteDocument(e,i){const r=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(e.key)&&vC(c,e,r[l])}}applyToLocalView(e,i){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(i=au(r,e,i,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(i=au(r,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const r=T0();return this.mutations.forEach((l=>{const c=e.get(l.key),d=c.overlayedDocument;let p=this.applyToLocalView(d,c.mutatedFields);p=i.has(l.key)?null:p;const g=x0(d,p);g!==null&&r.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(Ae.min())})),r}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),Be())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,((i,r)=>fE(i,r)))&&ko(this.baseMutations,e.baseMutations,((i,r)=>fE(i,r)))}}class dp{constructor(e,i,r,l){this.batch=e,this.commitVersion=i,this.mutationResults=r,this.docVersions=l}static from(e,i,r){$e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let l=(function(){return hC})();const c=e.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,r[d].version);return new dp(e,i,r,l)}}/**
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
 */class AC{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SC{constructor(e,i){this.count=e,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt,Fe;function wC(s){switch(s){case J.OK:return Ee(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Ee(15467,{code:s})}}function D0(s){if(s===void 0)return Ps("GRPC error has no .code"),J.UNKNOWN;switch(s){case Bt.OK:return J.OK;case Bt.CANCELLED:return J.CANCELLED;case Bt.UNKNOWN:return J.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return J.INTERNAL;case Bt.UNAVAILABLE:return J.UNAVAILABLE;case Bt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Bt.NOT_FOUND:return J.NOT_FOUND;case Bt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Bt.ABORTED:return J.ABORTED;case Bt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Bt.DATA_LOSS:return J.DATA_LOSS;default:return Ee(39323,{code:s})}}(Fe=Bt||(Bt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RC(){return new TextEncoder}/**
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
 */const IC=new Vr([4294967295,4294967295],0);function pE(s){const e=RC().encode(s),i=new FT;return i.update(e),new Uint8Array(i.digest())}function gE(s){const e=new DataView(s.buffer),i=e.getUint32(0,!0),r=e.getUint32(4,!0),l=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Vr([i,r],0),new Vr([l,c],0)]}class mp{constructor(e,i,r){if(this.bitmap=e,this.padding=i,this.hashCount=r,i<0||i>=8)throw new eu(`Invalid padding: ${i}`);if(r<0)throw new eu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eu(`Invalid hash count: ${r}`);if(e.length===0&&i!==0)throw new eu(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*e.length-i,this.pe=Vr.fromNumber(this.ge)}ye(e,i,r){let l=e.add(i.multiply(Vr.fromNumber(r)));return l.compare(IC)===1&&(l=new Vr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const i=pE(e),[r,l]=gE(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(r,l,c);if(!this.we(d))return!1}return!0}static create(e,i,r){const l=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),d=new mp(c,l,i);return r.forEach((p=>d.insert(p))),d}insert(e){if(this.ge===0)return;const i=pE(e),[r,l]=gE(i);for(let c=0;c<this.hashCount;c++){const d=this.ye(r,l,c);this.Se(d)}}Se(e){const i=Math.floor(e/8),r=e%8;this.bitmap[i]|=1<<r}}class eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,i,r,l,c){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=r,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,i,r){const l=new Map;return l.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,i,r)),new Kh(Ae.min(),l,new Et(ze),Ls(),Be())}}class Iu{constructor(e,i,r,l,c){this.resumeToken=e,this.current=i,this.addedDocuments=r,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,i,r){return new Iu(r,i,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,i,r,l){this.be=e,this.removedTargetIds=i,this.key=r,this.De=l}}class O0{constructor(e,i){this.targetId=e,this.Ce=i}}class V0{constructor(e,i,r=on.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=i,this.resumeToken=r,this.cause=l}}class yE{constructor(){this.ve=0,this.Fe=_E(),this.Me=on.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),i=Be(),r=Be();return this.Fe.forEach(((l,c)=>{switch(c){case 0:e=e.add(l);break;case 2:i=i.add(l);break;case 1:r=r.add(l);break;default:Ee(38017,{changeType:c})}})),new Iu(this.Me,this.xe,e,i,r)}qe(){this.Oe=!1,this.Fe=_E()}Ke(e,i){this.Oe=!0,this.Fe=this.Fe.insert(e,i)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class CC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ls(),this.Je=eh(),this.He=eh(),this.Ze=new Et(ze)}Xe(e){for(const i of e.be)e.De&&e.De.isFoundDocument()?this.Ye(i,e.De):this.et(i,e.key,e.De);for(const i of e.removedTargetIds)this.et(i,e.key,e.De)}tt(e){this.forEachTarget(e,(i=>{const r=this.nt(i);switch(e.state){case 0:this.rt(i)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(i)&&(this.it(i),r.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.ze.forEach(((r,l)=>{this.rt(l)&&i(l)}))}st(e){const i=e.targetId,r=e.Ce.count,l=this.ot(i);if(l){const c=l.target;if(Om(c))if(r===0){const d=new pe(c.path);this.et(i,d,mn.newNoDocument(d,Ae.min()))}else $e(r===1,20013,{expectedCount:r});else{const d=this._t(i);if(d!==r){const p=this.ut(e),g=p?this.ct(p,e,d):1;if(g!==0){this.it(i);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(i,_)}}}}}ut(e){const i=e.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:r="",padding:l=0},hashCount:c=0}=i;let d,p;try{d=Lr(r).toUint8Array()}catch(g){if(g instanceof n0)return Oa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new mp(d,l,c)}catch(g){return Oa(g instanceof eu?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,i,r){return i.Ce.count===r-this.Pt(e,i.targetId)?0:2}Pt(e,i){const r=this.Ge.getRemoteKeysForTarget(i);let l=0;return r.forEach((c=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(i,c,null),l++)})),l}Tt(e){const i=new Map;this.ze.forEach(((c,d)=>{const p=this.ot(d);if(p){if(c.current&&Om(p.target)){const g=new pe(p.target.path);this.Et(g).has(d)||this.It(d,g)||this.et(d,g,mn.newNoDocument(g,e))}c.Be&&(i.set(d,c.ke()),c.qe())}}));let r=Be();this.He.forEach(((c,d)=>{let p=!0;d.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(e)));const l=new Kh(e,i,this.Ze,this.je,r);return this.je=Ls(),this.Je=eh(),this.He=eh(),this.Ze=new Et(ze),l}Ye(e,i){if(!this.rt(e))return;const r=this.It(e,i.key)?2:0;this.nt(e).Ke(i.key,r),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.Et(i.key).add(e)),this.He=this.He.insert(i.key,this.Rt(i.key).add(e))}et(e,i,r){if(!this.rt(e))return;const l=this.nt(e);this.It(e,i)?l.Ke(i,1):l.Ue(i),this.He=this.He.insert(i,this.Rt(i).delete(e)),this.He=this.He.insert(i,this.Rt(i).add(e)),r&&(this.je=this.je.insert(i,r))}removeTarget(e){this.ze.delete(e)}_t(e){const i=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let i=this.ze.get(e);return i||(i=new yE,this.ze.set(e,i)),i}Rt(e){let i=this.He.get(e);return i||(i=new Yt(ze),this.He=this.He.insert(e,i)),i}Et(e){let i=this.Je.get(e);return i||(i=new Yt(ze),this.Je=this.Je.insert(e,i)),i}rt(e){const i=this.ot(e)!==null;return i||ue("WatchChangeAggregator","Detected inactive target",e),i}ot(e){const i=this.ze.get(e);return i&&i.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yE),this.Ge.getRemoteKeysForTarget(e).forEach((i=>{this.et(e,i,null)}))}It(e,i){return this.Ge.getRemoteKeysForTarget(e).has(i)}}function eh(){return new Et(pe.comparator)}function _E(){return new Et(pe.comparator)}const xC={asc:"ASCENDING",desc:"DESCENDING"},NC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DC={and:"AND",or:"OR"};class OC{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function Mm(s,e){return s.useProto3Json||Bh(e)?e:{value:e}}function Nh(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M0(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function VC(s,e){return Nh(s,e.toTimestamp())}function es(s){return $e(!!s,49232),Ae.fromTimestamp((function(i){const r=Pr(i);return new dt(r.seconds,r.nanos)})(s))}function pp(s,e){return jm(s,e).canonicalString()}function jm(s,e){const i=(function(l){return new ct(["projects",l.projectId,"databases",l.database])})(s).child("documents");return e===void 0?i:i.child(e)}function j0(s){const e=ct.fromString(s);return $e(z0(e),10190,{key:e.toString()}),e}function km(s,e){return pp(s.databaseId,e.path)}function cm(s,e){const i=j0(e);if(i.get(1)!==s.databaseId.projectId)throw new oe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+s.databaseId.projectId);if(i.get(3)!==s.databaseId.database)throw new oe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+s.databaseId.database);return new pe(P0(i))}function k0(s,e){return pp(s.databaseId,e)}function MC(s){const e=j0(s);return e.length===4?ct.emptyPath():P0(e)}function Pm(s){return new ct(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function P0(s){return $e(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function vE(s,e,i){return{name:km(s,e),fields:i.value.mapValue.fields}}function jC(s,e){let i;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ee(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],c=(function(_,b){return _.useProto3Json?($e(b===void 0||typeof b=="string",58123),on.fromBase64String(b||"")):($e(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),on.fromUint8Array(b||new Uint8Array))})(s,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(_){const b=_.code===void 0?J.UNKNOWN:D0(_.code);return new oe(b,_.message||"")})(d);i=new V0(r,l,c,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const l=cm(s,r.document.name),c=es(r.document.updateTime),d=r.document.createTime?es(r.document.createTime):Ae.min(),p=new On({mapValue:{fields:r.document.fields}}),g=mn.newFoundDocument(l,c,d,p),_=r.targetIds||[],b=r.removedTargetIds||[];i=new dh(_,b,g.key,g)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const l=cm(s,r.document),c=r.readTime?es(r.readTime):Ae.min(),d=mn.newNoDocument(l,c),p=r.removedTargetIds||[];i=new dh([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const l=cm(s,r.document),c=r.removedTargetIds||[];i=new dh([],c,l,null)}else{if(!("filter"in e))return Ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:l=0,unchangedNames:c}=r,d=new SC(l,c),p=r.targetId;i=new O0(p,d)}}return i}function kC(s,e){let i;if(e instanceof Ru)i={update:vE(s,e.key,e.value)};else if(e instanceof fp)i={delete:km(s,e.key)};else if(e instanceof Fr)i={update:vE(s,e.key,e.data),updateMask:GC(e.fieldMask)};else{if(!(e instanceof TC))return Ee(16599,{dt:e.type});i={verify:km(s,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((r=>(function(c,d){const p=d.transform;if(p instanceof mu)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof pu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof gu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof yu)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw Ee(20930,{transform:d.transform})})(0,r)))),e.precondition.isNone||(i.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:VC(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ee(27497)})(s,e.precondition)),i}function PC(s,e){return s&&s.length>0?($e(e!==void 0,14353),s.map((i=>(function(l,c){let d=l.updateTime?es(l.updateTime):es(c);return d.isEqual(Ae.min())&&(d=es(c)),new _C(d,l.transformResults||[])})(i,e)))):[]}function LC(s,e){return{documents:[k0(s,e.path)]}}function UC(s,e){const i={structuredQuery:{}},r=e.path;let l;e.collectionGroup!==null?(l=r,i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=r.popLast(),i.structuredQuery.from=[{collectionId:r.lastSegment()}]),i.parent=k0(s,l);const c=(function(_){if(_.length!==0)return U0(Oi.create(_,"and"))})(e.filters);c&&(i.structuredQuery.where=c);const d=(function(_){if(_.length!==0)return _.map((b=>(function(M){return{field:Ro(M.field),direction:qC(M.dir)}})(b)))})(e.orderBy);d&&(i.structuredQuery.orderBy=d);const p=Mm(s,e.limit);return p!==null&&(i.structuredQuery.limit=p),e.startAt&&(i.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(i.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:i,parent:l}}function zC(s){let e=MC(s.parent);const i=s.structuredQuery,r=i.from?i.from.length:0;let l=null;if(r>0){$e(r===1,65062);const b=i.from[0];b.allDescendants?l=b.collectionId:e=e.child(b.collectionId)}let c=[];i.where&&(c=(function(R){const M=L0(R);return M instanceof Oi&&f0(M)?M.getFilters():[M]})(i.where));let d=[];i.orderBy&&(d=(function(R){return R.map((M=>(function(ee){return new du(Io(ee.field),(function(re){switch(re){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(ee.direction))})(M)))})(i.orderBy));let p=null;i.limit&&(p=(function(R){let M;return M=typeof R=="object"?R.value:R,Bh(M)?null:M})(i.limit));let g=null;i.startAt&&(g=(function(R){const M=!!R.before,Y=R.values||[];return new Ch(Y,M)})(i.startAt));let _=null;return i.endAt&&(_=(function(R){const M=!R.before,Y=R.values||[];return new Ch(Y,M)})(i.endAt)),sC(e,l,d,c,p,"F",g,_)}function BC(s,e){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:l})}})(e.purpose);return i==null?null:{"goog-listen-tags":i}}function L0(s){return s.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const r=Io(i.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const l=Io(i.unaryFilter.field);return qt.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Io(i.unaryFilter.field);return qt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Io(i.unaryFilter.field);return qt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(s):s.fieldFilter!==void 0?(function(i){return qt.create(Io(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(i){return Oi.create(i.compositeFilter.filters.map((r=>L0(r))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(i.compositeFilter.op))})(s):Ee(30097,{filter:s})}function qC(s){return xC[s]}function HC(s){return NC[s]}function FC(s){return DC[s]}function Ro(s){return{fieldPath:s.canonicalString()}}function Io(s){return an.fromServerFormat(s.fieldPath)}function U0(s){return s instanceof qt?(function(i){if(i.op==="=="){if(aE(i.value))return{unaryFilter:{field:Ro(i.field),op:"IS_NAN"}};if(rE(i.value))return{unaryFilter:{field:Ro(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(aE(i.value))return{unaryFilter:{field:Ro(i.field),op:"IS_NOT_NAN"}};if(rE(i.value))return{unaryFilter:{field:Ro(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(i.field),op:HC(i.op),value:i.value}}})(s):s instanceof Oi?(function(i){const r=i.getFilters().map((l=>U0(l)));return r.length===1?r[0]:{compositeFilter:{op:FC(i.op),filters:r}}})(s):Ee(54877,{filter:s})}function GC(s){const e=[];return s.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function z0(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function B0(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,i,r,l,c=Ae.min(),d=Ae.min(),p=on.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=i,this.purpose=r,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.yt=e}}function YC(s){const e=zC({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
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
 */class KC{constructor(){this.bn=new XC}addToCollectionParentIndex(e,i){return this.bn.add(i),Z.resolve()}getCollectionParents(e,i){return Z.resolve(this.bn.getEntries(i))}addFieldIndex(e,i){return Z.resolve()}deleteFieldIndex(e,i){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,i){return Z.resolve()}getDocumentsMatchingTarget(e,i){return Z.resolve(null)}getIndexType(e,i){return Z.resolve(0)}getFieldIndexes(e,i){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,i){return Z.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,i){return Z.resolve(kr.min())}updateCollectionGroup(e,i,r){return Z.resolve()}updateIndexEntries(e,i){return Z.resolve()}}class XC{constructor(){this.index={}}add(e){const i=e.lastSegment(),r=e.popLast(),l=this.index[i]||new Yt(ct.comparator),c=!l.has(r);return this.index[i]=l.add(r),c}has(e){const i=e.lastSegment(),r=e.popLast(),l=this.index[i];return l&&l.has(r)}getEntries(e){return(this.index[e]||new Yt(ct.comparator)).toArray()}}/**
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
 */const EE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},q0=41943040;class Dn{static withCacheSize(e){return new Dn(e,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.DEFAULT_COLLECTION_PERCENTILE=10,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dn.DEFAULT=new Dn(q0,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dn.DISABLED=new Dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Uo(0)}static ar(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="LruGarbageCollector",JC=1048576;function bE([s,e],[i,r]){const l=ze(s,i);return l===0?ze(e,r):l}class $C{constructor(e){this.Pr=e,this.buffer=new Yt(bE),this.Tr=0}Er(){return++this.Tr}Ir(e){const i=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(i);else{const r=this.buffer.last();bE(i,r)<0&&(this.buffer=this.buffer.delete(r).add(i))}}get maxValue(){return this.buffer.last()[0]}}class ZC{constructor(e,i,r){this.garbageCollector=e,this.asyncQueue=i,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ue(TE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Qo(i)?ue(TE,"Ignoring IndexedDB error during garbage collection: ",i):await Go(i)}await this.Ar(3e5)}))}}class WC{constructor(e,i){this.Vr=e,this.params=i}calculateTargetCount(e,i){return this.Vr.dr(e).next((r=>Math.floor(i/100*r)))}nthSequenceNumber(e,i){if(i===0)return Z.resolve(zh.ce);const r=new $C(i);return this.Vr.forEachTarget(e,(l=>r.Ir(l.sequenceNumber))).next((()=>this.Vr.mr(e,(l=>r.Ir(l))))).next((()=>r.maxValue))}removeTargets(e,i,r){return this.Vr.removeTargets(e,i,r)}removeOrphanedDocuments(e,i){return this.Vr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(EE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),EE):this.gr(e,i)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,i){let r,l,c,d,p,g,_;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),l=this.params.maximumSequenceNumbersToCollect):l=R,d=Date.now(),this.nthSequenceNumber(e,l)))).next((R=>(r=R,p=Date.now(),this.removeTargets(e,r,i)))).next((R=>(c=R,g=Date.now(),this.removeOrphanedDocuments(e,r)))).next((R=>(_=Date.now(),So()<=Ue.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-b}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-b}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:R}))))}}function ex(s,e){return new WC(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.changes=new Ma((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,mn.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const r=this.changes.get(i);return r!==void 0?Z.resolve(r):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nx{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,i,r,l){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=r,this.indexManager=l}getDocument(e,i){let r=null;return this.documentOverlayCache.getOverlay(e,i).next((l=>(r=l,this.remoteDocumentCache.getEntry(e,i)))).next((l=>(r!==null&&au(r.mutation,l,Yn.empty(),dt.now()),l)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,i,r=Be()){const l=wa();return this.populateOverlays(e,l,i).next((()=>this.computeViews(e,i,l,r).next((c=>{let d=Wl();return c.forEach(((p,g)=>{d=d.insert(p,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,i){const r=wa();return this.populateOverlays(e,r,i).next((()=>this.computeViews(e,i,r,Be())))}populateOverlays(e,i,r){const l=[];return r.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(e,l).next((c=>{c.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(e,i,r,l){let c=Ls();const d=ru(),p=(function(){return ru()})();return i.forEach(((g,_)=>{const b=r.get(_.key);l.has(_.key)&&(b===void 0||b.mutation instanceof Fr)?c=c.insert(_.key,_):b!==void 0?(d.set(_.key,b.mutation.getFieldMask()),au(b.mutation,_,b.mutation.getFieldMask(),dt.now())):d.set(_.key,Yn.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((_,b)=>d.set(_,b))),i.forEach(((_,b)=>p.set(_,new nx(b,d.get(_)??null)))),p)))}recalculateAndSaveOverlays(e,i){const r=ru();let l=new Et(((d,p)=>d-p)),c=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((d=>{for(const p of d)p.keys().forEach((g=>{const _=i.get(g);if(_===null)return;let b=r.get(g)||Yn.empty();b=p.applyToLocalView(_,b),r.set(g,b);const R=(l.get(p.batchId)||Be()).add(g);l=l.insert(p.batchId,R)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,b=g.value,R=T0();b.forEach((M=>{if(!c.has(M)){const Y=x0(i.get(M),r.get(M));Y!==null&&R.set(M,Y),c=c.add(M)}})),d.push(this.documentOverlayCache.saveOverlays(e,_,R))}return Z.waitFor(d)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,i,r,l){return rC(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):g0(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,r,l):this.getDocumentsMatchingCollectionQuery(e,i,r,l)}getNextDocuments(e,i,r,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,r,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,r.largestBatchId,l-c.size):Z.resolve(wa());let p=uu,g=c;return d.next((_=>Z.forEach(_,((b,R)=>(p<R.largestBatchId&&(p=R.largestBatchId),c.get(b)?Z.resolve():this.remoteDocumentCache.getEntry(e,b).next((M=>{g=g.insert(b,M)}))))).next((()=>this.populateOverlays(e,_,c))).next((()=>this.computeViews(e,g,_,Be()))).next((b=>({batchId:p,changes:E0(b)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new pe(i)).next((r=>{let l=Wl();return r.isFoundDocument()&&(l=l.insert(r.key,r)),l}))}getDocumentsMatchingCollectionGroupQuery(e,i,r,l){const c=i.collectionGroup;let d=Wl();return this.indexManager.getCollectionParents(e,c).next((p=>Z.forEach(p,(g=>{const _=(function(R,M){return new Yo(M,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(i,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,_,r,l).next((b=>{b.forEach(((R,M)=>{d=d.insert(R,M)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,i,r,l){let c;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,r.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,r,c,l)))).next((d=>{c.forEach(((g,_)=>{const b=_.getKey();d.get(b)===null&&(d=d.insert(b,mn.newInvalidDocument(b)))}));let p=Wl();return d.forEach(((g,_)=>{const b=c.get(g);b!==void 0&&au(b.mutation,_,Yn.empty(),dt.now()),Gh(i,_)&&(p=p.insert(g,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,i){return Z.resolve(this.Nr.get(i))}saveBundleMetadata(e,i){return this.Nr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:es(l.createTime)}})(i)),Z.resolve()}getNamedQuery(e,i){return Z.resolve(this.Br.get(i))}saveNamedQuery(e,i){return this.Br.set(i.name,(function(l){return{name:l.name,query:YC(l.bundledQuery),readTime:es(l.readTime)}})(i)),Z.resolve()}}/**
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
 */class rx{constructor(){this.overlays=new Et(pe.comparator),this.Lr=new Map}getOverlay(e,i){return Z.resolve(this.overlays.get(i))}getOverlays(e,i){const r=wa();return Z.forEach(i,(l=>this.getOverlay(e,l).next((c=>{c!==null&&r.set(l,c)})))).next((()=>r))}saveOverlays(e,i,r){return r.forEach(((l,c)=>{this.St(e,i,c)})),Z.resolve()}removeOverlaysForBatchId(e,i,r){const l=this.Lr.get(r);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.Lr.delete(r)),Z.resolve()}getOverlaysForCollection(e,i,r){const l=wa(),c=i.length+1,d=new pe(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!i.isPrefixOf(_.path))break;_.path.length===c&&g.largestBatchId>r&&l.set(g.getKey(),g)}return Z.resolve(l)}getOverlaysForCollectionGroup(e,i,r,l){let c=new Et(((_,b)=>_-b));const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===i&&_.largestBatchId>r){let b=c.get(_.largestBatchId);b===null&&(b=wa(),c=c.insert(_.largestBatchId,b)),b.set(_.getKey(),_)}}const p=wa(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,b)=>p.set(_,b))),!(p.size()>=l)););return Z.resolve(p)}St(e,i,r){const l=this.overlays.get(r.key);if(l!==null){const d=this.Lr.get(l.largestBatchId).delete(r.key);this.Lr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(r.key,new AC(i,r));let c=this.Lr.get(i);c===void 0&&(c=Be(),this.Lr.set(i,c)),this.Lr.set(i,c.add(r.key))}}/**
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
 */class ax{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.kr=new Yt($t.qr),this.Kr=new Yt($t.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,i){const r=new $t(e,i);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,i){e.forEach((r=>this.addReference(r,i)))}removeReference(e,i){this.Wr(new $t(e,i))}Qr(e,i){e.forEach((r=>this.removeReference(r,i)))}Gr(e){const i=new pe(new ct([])),r=new $t(i,e),l=new $t(i,e+1),c=[];return this.Kr.forEachInRange([r,l],(d=>{this.Wr(d),c.push(d.key)})),c}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const i=new pe(new ct([])),r=new $t(i,e),l=new $t(i,e+1);let c=Be();return this.Kr.forEachInRange([r,l],(d=>{c=c.add(d.key)})),c}containsKey(e){const i=new $t(e,0),r=this.kr.firstAfterOrEqual(i);return r!==null&&e.isEqual(r.key)}}class $t{constructor(e,i){this.key=e,this.Jr=i}static qr(e,i){return pe.comparator(e.key,i.key)||ze(e.Jr,i.Jr)}static Ur(e,i){return ze(e.Jr,i.Jr)||pe.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.Yn=1,this.Hr=new Yt($t.qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,r,l){const c=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new bC(c,i,r,l);this.mutationQueue.push(d);for(const p of l)this.Hr=this.Hr.add(new $t(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Z.resolve(d)}lookupMutationBatch(e,i){return Z.resolve(this.Zr(i))}getNextMutationBatchAfterBatchId(e,i){const r=i+1,l=this.Xr(r),c=l<0?0:l;return Z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?ap:this.Yn-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const r=new $t(i,0),l=new $t(i,Number.POSITIVE_INFINITY),c=[];return this.Hr.forEachInRange([r,l],(d=>{const p=this.Zr(d.Jr);c.push(p)})),Z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,i){let r=new Yt(ze);return i.forEach((l=>{const c=new $t(l,0),d=new $t(l,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([c,d],(p=>{r=r.add(p.Jr)}))})),Z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,i){const r=i.path,l=r.length+1;let c=r;pe.isDocumentKey(c)||(c=c.child(""));const d=new $t(new pe(c),0);let p=new Yt(ze);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!r.isPrefixOf(_)&&(_.length===l&&(p=p.add(g.Jr)),!0)}),d),Z.resolve(this.Yr(p))}Yr(e){const i=[];return e.forEach((r=>{const l=this.Zr(r);l!==null&&i.push(l)})),i}removeMutationBatch(e,i){$e(this.ei(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return Z.forEach(i.mutations,(l=>{const c=new $t(l.key,i.batchId);return r=r.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,i){const r=new $t(i,0),l=this.Hr.firstAfterOrEqual(r);return Z.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ei(e,i){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const i=this.Xr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.ti=e,this.docs=(function(){return new Et(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const r=i.key,l=this.docs.get(r),c=l?l.size:0,d=this.ti(i);return this.docs=this.docs.insert(r,{document:i.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const r=this.docs.get(i);return Z.resolve(r?r.document.mutableCopy():mn.newInvalidDocument(i))}getEntries(e,i){let r=Ls();return i.forEach((l=>{const c=this.docs.get(l);r=r.insert(l,c?c.document.mutableCopy():mn.newInvalidDocument(l))})),Z.resolve(r)}getDocumentsMatchingQuery(e,i,r,l){let c=Ls();const d=i.path,p=new pe(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:b}}=g.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||jI(MI(b),r)<=0||(l.has(b.key)||Gh(i,b))&&(c=c.insert(b.key,b.mutableCopy()))}return Z.resolve(c)}getAllFromCollectionGroup(e,i,r,l){Ee(9500)}ni(e,i){return Z.forEach(this.docs,(r=>i(r)))}newChangeBuffer(e){return new ux(this)}getSize(e){return Z.resolve(this.size)}}class ux extends tx{constructor(e){super(),this.Mr=e}applyChanges(e){const i=[];return this.changes.forEach(((r,l)=>{l.isValidDocument()?i.push(this.Mr.addEntry(e,l)):this.Mr.removeEntry(r)})),Z.waitFor(i)}getFromCache(e,i){return this.Mr.getEntry(e,i)}getAllFromCache(e,i){return this.Mr.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.persistence=e,this.ri=new Ma((i=>up(i)),cp),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.ii=0,this.si=new gp,this.targetCount=0,this.oi=Uo._r()}forEachTarget(e,i){return this.ri.forEach(((r,l)=>i(l))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,i,r){return r&&(this.lastRemoteSnapshotVersion=r),i>this.ii&&(this.ii=i),Z.resolve()}lr(e){this.ri.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.oi=new Uo(i),this.highestTargetId=i),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,i){return this.lr(i),this.targetCount+=1,Z.resolve()}updateTargetData(e,i){return this.lr(i),Z.resolve()}removeTargetData(e,i){return this.ri.delete(i.target),this.si.Gr(i.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,i,r){let l=0;const c=[];return this.ri.forEach(((d,p)=>{p.sequenceNumber<=i&&r.get(p.targetId)===null&&(this.ri.delete(d),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)})),Z.waitFor(c).next((()=>l))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,i){const r=this.ri.get(i)||null;return Z.resolve(r)}addMatchingKeys(e,i,r){return this.si.$r(i,r),Z.resolve()}removeMatchingKeys(e,i,r){this.si.Qr(i,r);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((d=>{c.push(l.markPotentiallyOrphaned(e,d))})),Z.waitFor(c)}removeMatchingKeysForTargetId(e,i){return this.si.Gr(i),Z.resolve()}getMatchingKeysForTargetId(e,i){const r=this.si.jr(i);return Z.resolve(r)}containsKey(e,i){return Z.resolve(this.si.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,i){this._i={},this.overlays={},this.ai=new zh(0),this.ui=!1,this.ui=!0,this.ci=new ax,this.referenceDelegate=e(this),this.li=new cx(this),this.indexManager=new KC,this.remoteDocumentCache=(function(l){return new lx(l)})((r=>this.referenceDelegate.hi(r))),this.serializer=new QC(i),this.Pi=new sx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new rx,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let r=this._i[e.toKey()];return r||(r=new ox(i,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,i,r){ue("MemoryPersistence","Starting transaction:",e);const l=new hx(this.ai.next());return this.referenceDelegate.Ti(),r(l).next((c=>this.referenceDelegate.Ei(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ii(e,i){return Z.or(Object.values(this._i).map((r=>()=>r.containsKey(e,i))))}}class hx extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Ri=new gp,this.Ai=null}static Vi(e){return new yp(e)}get di(){if(this.Ai)return this.Ai;throw Ee(60996)}addReference(e,i,r){return this.Ri.addReference(r,i),this.di.delete(r.toString()),Z.resolve()}removeReference(e,i,r){return this.Ri.removeReference(r,i),this.di.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,i){return this.di.add(i.toString()),Z.resolve()}removeTarget(e,i){this.Ri.Gr(i.targetId).forEach((l=>this.di.add(l.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,i.targetId).next((l=>{l.forEach((c=>this.di.add(c.toString())))})).next((()=>r.removeTargetData(e,i)))}Ti(){this.Ai=new Set}Ei(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.di,(r=>{const l=pe.fromPath(r);return this.mi(e,l).next((c=>{c||i.removeEntry(l,Ae.min())}))})).next((()=>(this.Ai=null,i.apply(e))))}updateLimboDocument(e,i){return this.mi(e,i).next((r=>{r?this.di.delete(i.toString()):this.di.add(i.toString())}))}hi(e){return 0}mi(e,i){return Z.or([()=>Z.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Ii(e,i)])}}class Dh{constructor(e,i){this.persistence=e,this.fi=new Ma((r=>zI(r.path)),((r,l)=>r.isEqual(l))),this.garbageCollector=ex(this,i)}static Vi(e,i){return new Dh(e,i)}Ti(){}Ei(e){return Z.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}dr(e){const i=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>i.next((l=>r+l))))}pr(e){let i=0;return this.mr(e,(r=>{i++})).next((()=>i))}mr(e,i){return Z.forEach(this.fi,((r,l)=>this.wr(e,r,l).next((c=>c?Z.resolve():i(l)))))}removeTargets(e,i,r){return this.persistence.getTargetCache().removeTargets(e,i,r)}removeOrphanedDocuments(e,i){let r=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ni(e,(d=>this.wr(e,d,i).next((p=>{p||(r++,c.removeEntry(d,Ae.min()))})))).next((()=>c.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,i){return this.fi.set(i,e.currentSequenceNumber),Z.resolve()}removeTarget(e,i){const r=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,i,r){return this.fi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,i,r){return this.fi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,i){return this.fi.set(i,e.currentSequenceNumber),Z.resolve()}hi(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=ch(e.data.value)),i}wr(e,i,r){return Z.or([()=>this.persistence.Ii(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const l=this.fi.get(i);return Z.resolve(l!==void 0&&l>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,i,r,l){this.targetId=e,this.fromCache=i,this.Ts=r,this.Es=l}static Is(e,i){let r=Be(),l=Be();for(const c of i.docChanges)switch(c.type){case 0:r=r.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new _p(e,i.fromCache,r,l)}}/**
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
 */class fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return MS()?8:LI(pn())>0?6:4})()}initialize(e,i){this.fs=e,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(e,i,r,l){const c={result:null};return this.gs(e,i).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ps(e,i,l,r).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new fx;return this.ys(e,i,d).next((p=>{if(c.result=p,this.As)return this.ws(e,i,d,p.size)}))})).next((()=>c.result))}ws(e,i,r,l){return r.documentReadCount<this.Vs?(So()<=Ue.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",wo(i),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(So()<=Ue.DEBUG&&ue("QueryEngine","Query:",wo(i),"scans",r.documentReadCount,"local documents and returns",l,"documents as results."),r.documentReadCount>this.ds*l?(So()<=Ue.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",wo(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wi(i))):Z.resolve())}gs(e,i){if(cE(i))return Z.resolve(null);let r=Wi(i);return this.indexManager.getIndexType(e,r).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=xh(i,null,"F"),r=Wi(i)),this.indexManager.getDocumentsMatchingTarget(e,r).next((c=>{const d=Be(...c);return this.fs.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,r).next((g=>{const _=this.Ss(i,p);return this.bs(i,_,d,g.readTime)?this.gs(e,xh(i,null,"F")):this.Ds(e,_,i,g)}))))})))))}ps(e,i,r,l){return cE(i)||l.isEqual(Ae.min())?Z.resolve(null):this.fs.getDocuments(e,r).next((c=>{const d=this.Ss(i,c);return this.bs(i,d,r,l)?Z.resolve(null):(So()<=Ue.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),wo(i)),this.Ds(e,d,i,VI(l,uu)).next((p=>p)))}))}Ss(e,i){let r=new Yt(_0(e));return i.forEach(((l,c)=>{Gh(e,c)&&(r=r.add(c))})),r}bs(e,i,r,l){if(e.limit===null)return!1;if(r.size!==i.size)return!0;const c=e.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}ys(e,i,r){return So()<=Ue.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",wo(i)),this.fs.getDocumentsMatchingQuery(e,i,kr.min(),r)}Ds(e,i,r,l){return this.fs.getDocumentsMatchingQuery(e,r,l).next((c=>(i.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="LocalStore",mx=3e8;class px{constructor(e,i,r,l){this.persistence=e,this.Cs=i,this.serializer=l,this.vs=new Et(ze),this.Fs=new Ma((c=>up(c)),cp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ix(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.vs)))}}function gx(s,e,i,r){return new px(s,e,i,r)}async function F0(s,e){const i=we(s);return await i.persistence.runTransaction("Handle user change","readonly",(r=>{let l;return i.mutationQueue.getAllMutationBatches(r).next((c=>(l=c,i.Os(e),i.mutationQueue.getAllMutationBatches(r)))).next((c=>{const d=[],p=[];let g=Be();for(const _ of l){d.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}for(const _ of c){p.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}return i.localDocuments.getDocuments(r,g).next((_=>({Ns:_,removedBatchIds:d,addedBatchIds:p})))}))}))}function yx(s,e){const i=we(s);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const l=e.batch.keys(),c=i.xs.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,b){const R=_.batch,M=R.keys();let Y=Z.resolve();return M.forEach((ee=>{Y=Y.next((()=>b.getEntry(g,ee))).next((se=>{const re=_.docVersions.get(ee);$e(re!==null,48541),se.version.compareTo(re)<0&&(R.applyToRemoteDocument(se,_),se.isValidDocument()&&(se.setReadTime(_.commitVersion),b.addEntry(se)))}))})),Y.next((()=>p.mutationQueue.removeMutationBatch(g,R)))})(i,r,e,c).next((()=>c.apply(r))).next((()=>i.mutationQueue.performConsistencyCheck(r))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(r,l,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let g=Be();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>i.localDocuments.getDocuments(r,l)))}))}function G0(s){const e=we(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.li.getLastRemoteSnapshotVersion(i)))}function _x(s,e){const i=we(s),r=e.snapshotVersion;let l=i.vs;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=i.xs.newChangeBuffer({trackRemovals:!0});l=i.vs;const p=[];e.targetChanges.forEach(((b,R)=>{const M=l.get(R);if(!M)return;p.push(i.li.removeMatchingKeys(c,b.removedDocuments,R).next((()=>i.li.addMatchingKeys(c,b.addedDocuments,R))));let Y=M.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(R)!==null?Y=Y.withResumeToken(on.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):b.resumeToken.approximateByteSize()>0&&(Y=Y.withResumeToken(b.resumeToken,r)),l=l.insert(R,Y),(function(se,re,_e){return se.resumeToken.approximateByteSize()===0||re.snapshotVersion.toMicroseconds()-se.snapshotVersion.toMicroseconds()>=mx?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0})(M,Y,b)&&p.push(i.li.updateTargetData(c,Y))}));let g=Ls(),_=Be();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(c,b))})),p.push(vx(c,d,e.documentUpdates).next((b=>{g=b.Bs,_=b.Ls}))),!r.isEqual(Ae.min())){const b=i.li.getLastRemoteSnapshotVersion(c).next((R=>i.li.setTargetsMetadata(c,c.currentSequenceNumber,r)));p.push(b)}return Z.waitFor(p).next((()=>d.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,g,_))).next((()=>g))})).then((c=>(i.vs=l,c)))}function vx(s,e,i){let r=Be(),l=Be();return i.forEach((c=>r=r.add(c))),e.getEntries(s,r).next((c=>{let d=Ls();return i.forEach(((p,g)=>{const _=c.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(Ae.min())?(e.removeEntry(p,g.readTime),d=d.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),d=d.insert(p,g)):ue(vp,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{Bs:d,Ls:l}}))}function Ex(s,e){const i=we(s);return i.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ap),i.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Tx(s,e){const i=we(s);return i.persistence.runTransaction("Allocate target","readwrite",(r=>{let l;return i.li.getTargetData(r,e).next((c=>c?(l=c,Z.resolve(l)):i.li.allocateTargetId(r).next((d=>(l=new xr(e,d,"TargetPurposeListen",r.currentSequenceNumber),i.li.addTargetData(r,l).next((()=>l)))))))})).then((r=>{const l=i.vs.get(r.targetId);return(l===null||r.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.vs=i.vs.insert(r.targetId,r),i.Fs.set(e,r.targetId)),r}))}async function Lm(s,e,i){const r=we(s),l=r.vs.get(e),c=i?"readwrite":"readwrite-primary";try{i||await r.persistence.runTransaction("Release target",c,(d=>r.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!Qo(d))throw d;ue(vp,`Failed to update sequence numbers for target ${e}: ${d}`)}r.vs=r.vs.remove(e),r.Fs.delete(l.target)}function AE(s,e,i){const r=we(s);let l=Ae.min(),c=Be();return r.persistence.runTransaction("Execute query","readwrite",(d=>(function(g,_,b){const R=we(g),M=R.Fs.get(b);return M!==void 0?Z.resolve(R.vs.get(M)):R.li.getTargetData(_,b)})(r,d,Wi(e)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(d,p.targetId).next((g=>{c=g}))})).next((()=>r.Cs.getDocumentsMatchingQuery(d,e,i?l:Ae.min(),i?c:Be()))).next((p=>(bx(r,lC(e),p),{documents:p,ks:c})))))}function bx(s,e,i){let r=s.Ms.get(e)||Ae.min();i.forEach(((l,c)=>{c.readTime.compareTo(r)>0&&(r=c.readTime)})),s.Ms.set(e,r)}class SE{constructor(){this.activeTargetIds=mC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ax{constructor(){this.vo=new SE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,r){}addLocalQueryTarget(e,i=!0){return i&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,i,r){this.Fo[e]=i}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new SE,Promise.resolve()}handleUserChange(e,i,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sx{Mo(e){}shutdown(){}}/**
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
 */const wE="ConnectivityMonitor";class RE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ue(wE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ue(wE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let th=null;function Um(){return th===null?th=(function(){return 268435456+Math.round(2147483648*Math.random())})():th++,"0x"+th.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="RestConnection",wx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Rx{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Ko=i+"://"+e.host,this.Uo=`projects/${r}/databases/${l}`,this.$o=this.databaseId.database===Rh?`project_id=${r}`:`project_id=${r}&database_id=${l}`}Wo(e,i,r,l,c){const d=Um(),p=this.Qo(e,i.toUriEncodedString());ue(hm,`Sending RPC '${e}' ${d}:`,p,r);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,l,c);const{host:_}=new URL(p),b=Eu(_);return this.zo(e,p,g,r,b).then((R=>(ue(hm,`Received RPC '${e}' ${d}: `,R),R)),(R=>{throw Oa(hm,`RPC '${e}' ${d} failed with error: `,R,"url: ",p,"request:",r),R}))}jo(e,i,r,l,c,d){return this.Wo(e,i,r,l,c)}Go(e,i,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>e[c]=l)),r&&r.headers.forEach(((l,c)=>e[c]=l))}Qo(e,i){const r=wx[e];let l=`${this.Ko}/v1/${i}:${r}`;return this.databaseInfo.apiKey&&(l=`${l}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),l}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="WebChannelConnection",Gl=(s,e,i)=>{s.listen(e,(r=>{try{i(r)}catch(l){setTimeout((()=>{throw l}),0)}}))};class Do extends Rx{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Do.c_){const e=KT();Gl(e,YT.STAT_EVENT,(i=>{i.stat===Im.PROXY?ue(hn,"STAT_EVENT: detected buffering proxy"):i.stat===Im.NOPROXY&&ue(hn,"STAT_EVENT: detected no buffering proxy")})),Do.c_=!0}}zo(e,i,r,l,c){const d=Um();return new Promise(((p,g)=>{const _=new GT;_.setWithCredentials(!0),_.listenOnce(QT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case uh.NO_ERROR:const R=_.getResponseJson();ue(hn,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(R)),p(R);break;case uh.TIMEOUT:ue(hn,`RPC '${e}' ${d} timed out`),g(new oe(J.DEADLINE_EXCEEDED,"Request time out"));break;case uh.HTTP_ERROR:const M=_.getStatus();if(ue(hn,`RPC '${e}' ${d} failed with status:`,M,"response text:",_.getResponseText()),M>0){let Y=_.getResponseJson();Array.isArray(Y)&&(Y=Y[0]);const ee=Y==null?void 0:Y.error;if(ee&&ee.status&&ee.message){const se=(function(_e){const xe=_e.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(xe)>=0?xe:J.UNKNOWN})(ee.status);g(new oe(se,ee.message))}else g(new oe(J.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new oe(J.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:d,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ue(hn,`RPC '${e}' ${d} completed.`)}}));const b=JSON.stringify(l);ue(hn,`RPC '${e}' ${d} sending request:`,l),_.send(i,"POST",b,r,15)}))}T_(e,i,r){const l=Um(),c=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,i,r),p.encodeInitMessageHeaders=!0;const _=c.join("");ue(hn,`Creating RPC '${e}' stream ${l}: ${_}`,p);const b=d.createWebChannel(_,p);this.E_(b);let R=!1,M=!1;const Y=new Ix({Jo:ee=>{M?ue(hn,`Not sending because RPC '${e}' stream ${l} is closed:`,ee):(R||(ue(hn,`Opening RPC '${e}' stream ${l} transport.`),b.open(),R=!0),ue(hn,`RPC '${e}' stream ${l} sending:`,ee),b.send(ee))},Ho:()=>b.close()});return Gl(b,Zl.EventType.OPEN,(()=>{M||(ue(hn,`RPC '${e}' stream ${l} transport opened.`),Y.i_())})),Gl(b,Zl.EventType.CLOSE,(()=>{M||(M=!0,ue(hn,`RPC '${e}' stream ${l} transport closed`),Y.o_(),this.I_(b))})),Gl(b,Zl.EventType.ERROR,(ee=>{M||(M=!0,Oa(hn,`RPC '${e}' stream ${l} transport errored. Name:`,ee.name,"Message:",ee.message),Y.o_(new oe(J.UNAVAILABLE,"The operation could not be completed")))})),Gl(b,Zl.EventType.MESSAGE,(ee=>{var se;if(!M){const re=ee.data[0];$e(!!re,16349);const _e=re,xe=(_e==null?void 0:_e.error)||((se=_e[0])==null?void 0:se.error);if(xe){ue(hn,`RPC '${e}' stream ${l} received error:`,xe);const ge=xe.status;let it=(function(N){const S=Bt[N];if(S!==void 0)return D0(S)})(ge),Ke=xe.message;ge==="NOT_FOUND"&&Ke.includes("database")&&Ke.includes("does not exist")&&Ke.includes(this.databaseId.database)&&Oa(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),it===void 0&&(it=J.INTERNAL,Ke="Unknown error status: "+ge+" with message "+xe.message),M=!0,Y.o_(new oe(it,Ke)),b.close()}else ue(hn,`RPC '${e}' stream ${l} received:`,re),Y.__(re)}})),Do.u_(),setTimeout((()=>{Y.s_()}),0),Y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((i=>i===e))}Go(e,i,r){super.Go(e,i,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return XT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(s){return new Do(s)}function fm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(s){return new OC(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Do.c_=!1;class Q0{constructor(e,i,r=1e3,l=1.5,c=6e4){this.Ci=e,this.timerId=i,this.R_=r,this.A_=l,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const i=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-r);l>0&&ue("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.d_} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="PersistentStream";class Y0{constructor(e,i,r,l,c,d,p,g){this.Ci=e,this.S_=r,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Q0(e,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,i){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():i&&i.code===J.RESOURCE_EXHAUSTED?(Ps(i.toString()),Ps("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(i)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,l])=>{this.D_===i&&this.G_(r,l)}),(r=>{e((()=>{const l=new oe(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(l)}))}))}G_(e,i){const r=this.Q_(this.D_);this.stream=this.j_(e,i),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((l=>{r((()=>this.z_(l)))})),this.stream.onMessage((l=>{r((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ue(IE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return i=>{this.Ci.enqueueAndForget((()=>this.D_===e?i():(ue(IE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xx extends Y0{constructor(e,i,r,l,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,r,l,d),this.serializer=c}j_(e,i){return this.connection.T_("Listen",e,i)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const i=jC(this.serializer,e),r=(function(c){if(!("targetChange"in c))return Ae.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?Ae.min():d.readTime?es(d.readTime):Ae.min()})(e);return this.listener.H_(i,r)}Z_(e){const i={};i.database=Pm(this.serializer),i.addTarget=(function(c,d){let p;const g=d.target;if(p=Om(g)?{documents:LC(c,g)}:{query:UC(c,g).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=M0(c,d.resumeToken);const _=Mm(c,d.expectedCount);_!==null&&(p.expectedCount=_)}else if(d.snapshotVersion.compareTo(Ae.min())>0){p.readTime=Nh(c,d.snapshotVersion.toTimestamp());const _=Mm(c,d.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const r=BC(this.serializer,e);r&&(i.labels=r),this.q_(i)}X_(e){const i={};i.database=Pm(this.serializer),i.removeTarget=e,this.q_(i)}}class Nx extends Y0{constructor(e,i,r,l,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,r,l,d),this.serializer=c}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,i){return this.connection.T_("Write",e,i)}J_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const i=PC(e.writeResults,e.commitTime),r=es(e.commitTime);return this.listener.na(r,i)}ra(){const e={};e.database=Pm(this.serializer),this.q_(e)}ea(e){const i={streamToken:this.lastStreamToken,writes:e.map((r=>kC(this.serializer,r)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{}class Ox extends Dx{constructor(e,i,r,l){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=r,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new oe(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,i,r,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Wo(e,jm(i,r),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new oe(J.UNKNOWN,c.toString())}))}jo(e,i,r,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.jo(e,jm(i,r),l,d,p,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new oe(J.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Vx(s,e,i,r){return new Ox(s,e,i,r)}class Mx{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ps(i),this.aa=!1):ue("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="RemoteStore";class jx{constructor(e,i,r,l,c){this.localStore=e,this.datastore=i,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=c,this.Aa.Mo((d=>{r.enqueueAndForget((async()=>{ja(this)&&(ue(Va,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await Cu(_),_.Va.set("Unknown"),_.Ia.delete(4),await Jh(_)})(this))}))})),this.Va=new Mx(r,l)}}async function Jh(s){if(ja(s))for(const e of s.Ra)await e(!0)}async function Cu(s){for(const e of s.Ra)await e(!1)}function K0(s,e){const i=we(s);i.Ea.has(e.targetId)||(i.Ea.set(e.targetId,e),Ap(i)?bp(i):Ko(i).O_()&&Tp(i,e))}function Ep(s,e){const i=we(s),r=Ko(i);i.Ea.delete(e),r.O_()&&X0(i,e),i.Ea.size===0&&(r.O_()?r.L_():ja(i)&&i.Va.set("Unknown"))}function Tp(s,e){if(s.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const i=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(i)}Ko(s).Z_(e)}function X0(s,e){s.da.$e(e),Ko(s).X_(e)}function bp(s){s.da=new CC({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ea.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Ko(s).start(),s.Va.ua()}function Ap(s){return ja(s)&&!Ko(s).x_()&&s.Ea.size>0}function ja(s){return we(s).Ia.size===0}function J0(s){s.da=void 0}async function kx(s){s.Va.set("Online")}async function Px(s){s.Ea.forEach(((e,i)=>{Tp(s,e)}))}async function Lx(s,e){J0(s),Ap(s)?(s.Va.ha(e),bp(s)):s.Va.set("Unknown")}async function Ux(s,e,i){if(s.Va.set("Online"),e instanceof V0&&e.state===2&&e.cause)try{await(async function(l,c){const d=c.cause;for(const p of c.targetIds)l.Ea.has(p)&&(await l.remoteSyncer.rejectListen(p,d),l.Ea.delete(p),l.da.removeTarget(p))})(s,e)}catch(r){ue(Va,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oh(s,r)}else if(e instanceof dh?s.da.Xe(e):e instanceof O0?s.da.st(e):s.da.tt(e),!i.isEqual(Ae.min()))try{const r=await G0(s.localStore);i.compareTo(r)>=0&&await(function(c,d){const p=c.da.Tt(d);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const b=c.Ea.get(_);b&&c.Ea.set(_,b.withResumeToken(g.resumeToken,d))}})),p.targetMismatches.forEach(((g,_)=>{const b=c.Ea.get(g);if(!b)return;c.Ea.set(g,b.withResumeToken(on.EMPTY_BYTE_STRING,b.snapshotVersion)),X0(c,g);const R=new xr(b.target,g,_,b.sequenceNumber);Tp(c,R)})),c.remoteSyncer.applyRemoteEvent(p)})(s,i)}catch(r){ue(Va,"Failed to raise snapshot:",r),await Oh(s,r)}}async function Oh(s,e,i){if(!Qo(e))throw e;s.Ia.add(1),await Cu(s),s.Va.set("Offline"),i||(i=()=>G0(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{ue(Va,"Retrying IndexedDB access"),await i(),s.Ia.delete(1),await Jh(s)}))}function $0(s,e){return e().catch((i=>Oh(s,i,e)))}async function $h(s){const e=we(s),i=zr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ap;for(;zx(e);)try{const l=await Ex(e.localStore,r);if(l===null){e.Ta.length===0&&i.L_();break}r=l.batchId,Bx(e,l)}catch(l){await Oh(e,l)}Z0(e)&&W0(e)}function zx(s){return ja(s)&&s.Ta.length<10}function Bx(s,e){s.Ta.push(e);const i=zr(s);i.O_()&&i.Y_&&i.ea(e.mutations)}function Z0(s){return ja(s)&&!zr(s).x_()&&s.Ta.length>0}function W0(s){zr(s).start()}async function qx(s){zr(s).ra()}async function Hx(s){const e=zr(s);for(const i of s.Ta)e.ea(i.mutations)}async function Fx(s,e,i){const r=s.Ta.shift(),l=dp.from(r,e,i);await $0(s,(()=>s.remoteSyncer.applySuccessfulWrite(l))),await $h(s)}async function Gx(s,e){e&&zr(s).Y_&&await(async function(r,l){if((function(d){return wC(d)&&d!==J.ABORTED})(l.code)){const c=r.Ta.shift();zr(r).B_(),await $0(r,(()=>r.remoteSyncer.rejectFailedWrite(c.batchId,l))),await $h(r)}})(s,e),Z0(s)&&W0(s)}async function CE(s,e){const i=we(s);i.asyncQueue.verifyOperationInProgress(),ue(Va,"RemoteStore received new credentials");const r=ja(i);i.Ia.add(3),await Cu(i),r&&i.Va.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ia.delete(3),await Jh(i)}async function Qx(s,e){const i=we(s);e?(i.Ia.delete(2),await Jh(i)):e||(i.Ia.add(2),await Cu(i),i.Va.set("Unknown"))}function Ko(s){return s.ma||(s.ma=(function(i,r,l){const c=we(i);return c.sa(),new xx(r,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(s.datastore,s.asyncQueue,{Zo:kx.bind(null,s),Yo:Px.bind(null,s),t_:Lx.bind(null,s),H_:Ux.bind(null,s)}),s.Ra.push((async e=>{e?(s.ma.B_(),Ap(s)?bp(s):s.Va.set("Unknown")):(await s.ma.stop(),J0(s))}))),s.ma}function zr(s){return s.fa||(s.fa=(function(i,r,l){const c=we(i);return c.sa(),new Nx(r,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(s.datastore,s.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qx.bind(null,s),t_:Gx.bind(null,s),ta:Hx.bind(null,s),na:Fx.bind(null,s)}),s.Ra.push((async e=>{e?(s.fa.B_(),await $h(s)):(await s.fa.stop(),s.Ta.length>0&&(ue(Va,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,i,r,l,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=l,this.removalCallback=c,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,l,c){const d=Date.now()+r,p=new Sp(e,i,d,l,c);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(s,e){if(Ps("AsyncQueue",`${e}: ${s}`),Qo(s))return new oe(J.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{static emptySet(e){return new Oo(e.comparator)}constructor(e){this.comparator=e?(i,r)=>e(i,r)||pe.comparator(i.key,r.key):(i,r)=>pe.comparator(i.key,r.key),this.keyedMap=Wl(),this.sortedSet=new Et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((i,r)=>(e(i),!1)))}add(e){const i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){const i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const i=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=r.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((i=>{e.push(i.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,i){const r=new Oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=i,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.ga=new Et(pe.comparator)}track(e){const i=e.doc.key,r=this.ga.get(i);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(i,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(i,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(i,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(i):e.type===1&&r.type===2?this.ga=this.ga.insert(i,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(i,{type:2,doc:e.doc}):Ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(i,e)}ya(){const e=[];return this.ga.inorderTraversal(((i,r)=>{e.push(r)})),e}}class zo{constructor(e,i,r,l,c,d,p,g,_){this.query=e,this.docs=i,this.oldDocs=r,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,i,r,l,c){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new zo(e,i,Oo.emptySet(i),d,r,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const i=this.docChanges,r=e.docChanges;if(i.length!==r.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==r[l].type||!i[l].doc.isEqual(r[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Kx{constructor(){this.queries=NE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,r){const l=we(i),c=l.queries;l.queries=NE(),c.forEach(((d,p)=>{for(const g of p.Sa)g.onError(r)}))})(this,new oe(J.ABORTED,"Firestore shutting down"))}}function NE(){return new Ma((s=>y0(s)),Fh)}async function eb(s,e){const i=we(s);let r=3;const l=e.query;let c=i.queries.get(l);c?!c.ba()&&e.Da()&&(r=2):(c=new Yx,r=e.Da()?0:1);try{switch(r){case 0:c.wa=await i.onListen(l,!0);break;case 1:c.wa=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(d){const p=wp(d,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(p)}i.queries.set(l,c),c.Sa.push(e),e.va(i.onlineState),c.wa&&e.Fa(c.wa)&&Rp(i)}async function tb(s,e){const i=we(s),r=e.query;let l=3;const c=i.queries.get(r);if(c){const d=c.Sa.indexOf(e);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=e.Da()?0:1:!c.ba()&&e.Da()&&(l=2))}switch(l){case 0:return i.queries.delete(r),i.onUnlisten(r,!0);case 1:return i.queries.delete(r),i.onUnlisten(r,!1);case 2:return i.onLastRemoteStoreUnlisten(r);default:return}}function Xx(s,e){const i=we(s);let r=!1;for(const l of e){const c=l.query,d=i.queries.get(c);if(d){for(const p of d.Sa)p.Fa(l)&&(r=!0);d.wa=l}}r&&Rp(i)}function Jx(s,e,i){const r=we(s),l=r.queries.get(e);if(l)for(const c of l.Sa)c.onError(i);r.queries.delete(e)}function Rp(s){s.Ca.forEach((e=>{e.next()}))}var zm,DE;(DE=zm||(zm={})).Ma="default",DE.Cache="cache";class nb{constructor(e,i,r){this.query=e,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const l of e.docChanges)l.type!==3&&r.push(l);e=new zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),i=!0):this.La(e,this.onlineState)&&(this.ka(e),i=!0),this.Na=e,i}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),i=!0),i}La(e,i){if(!e.fromCache||!this.Da())return!0;const r=i!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||i==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.key=e}}class sb{constructor(e){this.key=e}}class $x{constructor(e,i){this.query=e,this.Za=i,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Be(),this.mutatedKeys=Be(),this.eu=_0(e),this.tu=new Oo(this.eu)}get nu(){return this.Za}ru(e,i){const r=i?i.iu:new xE,l=i?i.tu:this.tu;let c=i?i.mutatedKeys:this.mutatedKeys,d=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((b,R)=>{const M=l.get(b),Y=Gh(this.query,R)?R:null,ee=!!M&&this.mutatedKeys.has(M.key),se=!!Y&&(Y.hasLocalMutations||this.mutatedKeys.has(Y.key)&&Y.hasCommittedMutations);let re=!1;M&&Y?M.data.isEqual(Y.data)?ee!==se&&(r.track({type:3,doc:Y}),re=!0):this.su(M,Y)||(r.track({type:2,doc:Y}),re=!0,(g&&this.eu(Y,g)>0||_&&this.eu(Y,_)<0)&&(p=!0)):!M&&Y?(r.track({type:0,doc:Y}),re=!0):M&&!Y&&(r.track({type:1,doc:M}),re=!0,(g||_)&&(p=!0)),re&&(Y?(d=d.add(Y),c=se?c.add(b):c.delete(b)):(d=d.delete(b),c=c.delete(b)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const b=this.query.limitType==="F"?d.last():d.first();d=d.delete(b.key),c=c.delete(b.key),r.track({type:1,doc:b})}return{tu:d,iu:r,bs:p,mutatedKeys:c}}su(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,r,l){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((b,R)=>(function(Y,ee){const se=re=>{switch(re){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Vt:re})}};return se(Y)-se(ee)})(b.type,R.type)||this.eu(b.doc,R.doc))),this.ou(r),l=l??!1;const p=i&&!l?this._u():[],g=this.Ya.size===0&&this.current&&!l?1:0,_=g!==this.Xa;return this.Xa=g,d.length!==0||_?{snapshot:new zo(this.query,e.tu,c,d,e.mutatedKeys,g===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((i=>this.Za=this.Za.add(i))),e.modifiedDocuments.forEach((i=>{})),e.removedDocuments.forEach((i=>this.Za=this.Za.delete(i))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Be(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const i=[];return e.forEach((r=>{this.Ya.has(r)||i.push(new sb(r))})),this.Ya.forEach((r=>{e.has(r)||i.push(new ib(r))})),i}cu(e){this.Za=e.ks,this.Ya=Be();const i=this.ru(e.documents);return this.applyChanges(i,!0)}lu(){return zo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ip="SyncEngine";class Zx{constructor(e,i,r){this.query=e,this.targetId=i,this.view=r}}class Wx{constructor(e){this.key=e,this.hu=!1}}class eN{constructor(e,i,r,l,c,d){this.localStore=e,this.remoteStore=i,this.eventManager=r,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Ma((p=>y0(p)),Fh),this.Eu=new Map,this.Iu=new Set,this.Ru=new Et(pe.comparator),this.Au=new Map,this.Vu=new gp,this.du={},this.mu=new Map,this.fu=Uo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tN(s,e,i=!0){const r=cb(s);let l;const c=r.Tu.get(e);return c?(r.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await rb(r,e,i,!0),l}async function nN(s,e){const i=cb(s);await rb(i,e,!0,!1)}async function rb(s,e,i,r){const l=await Tx(s.localStore,Wi(e)),c=l.targetId,d=s.sharedClientState.addLocalQueryTarget(c,i);let p;return r&&(p=await iN(s,e,c,d==="current",l.resumeToken)),s.isPrimaryClient&&i&&K0(s.remoteStore,l),p}async function iN(s,e,i,r,l){s.pu=(R,M,Y)=>(async function(se,re,_e,xe){let ge=re.view.ru(_e);ge.bs&&(ge=await AE(se.localStore,re.query,!1).then((({documents:N})=>re.view.ru(N,ge))));const it=xe&&xe.targetChanges.get(re.targetId),Ke=xe&&xe.targetMismatches.get(re.targetId)!=null,Re=re.view.applyChanges(ge,se.isPrimaryClient,it,Ke);return VE(se,re.targetId,Re.au),Re.snapshot})(s,R,M,Y);const c=await AE(s.localStore,e,!0),d=new $x(e,c.ks),p=d.ru(c.documents),g=Iu.createSynthesizedTargetChangeForCurrentChange(i,r&&s.onlineState!=="Offline",l),_=d.applyChanges(p,s.isPrimaryClient,g);VE(s,i,_.au);const b=new Zx(e,i,d);return s.Tu.set(e,b),s.Eu.has(i)?s.Eu.get(i).push(e):s.Eu.set(i,[e]),_.snapshot}async function sN(s,e,i){const r=we(s),l=r.Tu.get(e),c=r.Eu.get(l.targetId);if(c.length>1)return r.Eu.set(l.targetId,c.filter((d=>!Fh(d,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(l.targetId),r.sharedClientState.isActiveQueryTarget(l.targetId)||await Lm(r.localStore,l.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(l.targetId),i&&Ep(r.remoteStore,l.targetId),Bm(r,l.targetId)})).catch(Go)):(Bm(r,l.targetId),await Lm(r.localStore,l.targetId,!0))}async function rN(s,e){const i=we(s),r=i.Tu.get(e),l=i.Eu.get(r.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(r.targetId),Ep(i.remoteStore,r.targetId))}async function aN(s,e,i){const r=dN(s);try{const l=await(function(d,p){const g=we(d),_=dt.now(),b=p.reduce(((Y,ee)=>Y.add(ee.key)),Be());let R,M;return g.persistence.runTransaction("Locally write mutations","readwrite",(Y=>{let ee=Ls(),se=Be();return g.xs.getEntries(Y,b).next((re=>{ee=re,ee.forEach(((_e,xe)=>{xe.isValidDocument()||(se=se.add(_e))}))})).next((()=>g.localDocuments.getOverlayedDocuments(Y,ee))).next((re=>{R=re;const _e=[];for(const xe of p){const ge=EC(xe,R.get(xe.key).overlayedDocument);ge!=null&&_e.push(new Fr(xe.key,ge,u0(ge.value.mapValue),mi.exists(!0)))}return g.mutationQueue.addMutationBatch(Y,_,_e,p)})).next((re=>{M=re;const _e=re.applyToLocalDocumentSet(R,se);return g.documentOverlayCache.saveOverlays(Y,re.batchId,_e)}))})).then((()=>({batchId:M.batchId,changes:E0(R)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(l.batchId),(function(d,p,g){let _=d.du[d.currentUser.toKey()];_||(_=new Et(ze)),_=_.insert(p,g),d.du[d.currentUser.toKey()]=_})(r,l.batchId,i),await xu(r,l.changes),await $h(r.remoteStore)}catch(l){const c=wp(l,"Failed to persist write");i.reject(c)}}async function ab(s,e){const i=we(s);try{const r=await _x(i.localStore,e);e.targetChanges.forEach(((l,c)=>{const d=i.Au.get(c);d&&($e(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?$e(d.hu,14607):l.removedDocuments.size>0&&($e(d.hu,42227),d.hu=!1))})),await xu(i,r,e)}catch(r){await Go(r)}}function OE(s,e,i){const r=we(s);if(r.isPrimaryClient&&i===0||!r.isPrimaryClient&&i===1){const l=[];r.Tu.forEach(((c,d)=>{const p=d.view.va(e);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const g=we(d);g.onlineState=p;let _=!1;g.queries.forEach(((b,R)=>{for(const M of R.Sa)M.va(p)&&(_=!0)})),_&&Rp(g)})(r.eventManager,e),l.length&&r.Pu.H_(l),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oN(s,e,i){const r=we(s);r.sharedClientState.updateQueryState(e,"rejected",i);const l=r.Au.get(e),c=l&&l.key;if(c){let d=new Et(pe.comparator);d=d.insert(c,mn.newNoDocument(c,Ae.min()));const p=Be().add(c),g=new Kh(Ae.min(),new Map,new Et(ze),d,p);await ab(r,g),r.Ru=r.Ru.remove(c),r.Au.delete(e),Cp(r)}else await Lm(r.localStore,e,!1).then((()=>Bm(r,e,i))).catch(Go)}async function lN(s,e){const i=we(s),r=e.batch.batchId;try{const l=await yx(i.localStore,e);lb(i,r,null),ob(i,r),i.sharedClientState.updateMutationState(r,"acknowledged"),await xu(i,l)}catch(l){await Go(l)}}async function uN(s,e,i){const r=we(s);try{const l=await(function(d,p){const g=we(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let b;return g.mutationQueue.lookupMutationBatch(_,p).next((R=>($e(R!==null,37113),b=R.keys(),g.mutationQueue.removeMutationBatch(_,R)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,b,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,b))).next((()=>g.localDocuments.getDocuments(_,b)))}))})(r.localStore,e);lb(r,e,i),ob(r,e),r.sharedClientState.updateMutationState(e,"rejected",i),await xu(r,l)}catch(l){await Go(l)}}function ob(s,e){(s.mu.get(e)||[]).forEach((i=>{i.resolve()})),s.mu.delete(e)}function lb(s,e,i){const r=we(s);let l=r.du[r.currentUser.toKey()];if(l){const c=l.get(e);c&&(i?c.reject(i):c.resolve(),l=l.remove(e)),r.du[r.currentUser.toKey()]=l}}function Bm(s,e,i=null){s.sharedClientState.removeLocalQueryTarget(e);for(const r of s.Eu.get(e))s.Tu.delete(r),i&&s.Pu.yu(r,i);s.Eu.delete(e),s.isPrimaryClient&&s.Vu.Gr(e).forEach((r=>{s.Vu.containsKey(r)||ub(s,r)}))}function ub(s,e){s.Iu.delete(e.path.canonicalString());const i=s.Ru.get(e);i!==null&&(Ep(s.remoteStore,i),s.Ru=s.Ru.remove(e),s.Au.delete(i),Cp(s))}function VE(s,e,i){for(const r of i)r instanceof ib?(s.Vu.addReference(r.key,e),cN(s,r)):r instanceof sb?(ue(Ip,"Document no longer in limbo: "+r.key),s.Vu.removeReference(r.key,e),s.Vu.containsKey(r.key)||ub(s,r.key)):Ee(19791,{wu:r})}function cN(s,e){const i=e.key,r=i.path.canonicalString();s.Ru.get(i)||s.Iu.has(r)||(ue(Ip,"New document in limbo: "+i),s.Iu.add(r),Cp(s))}function Cp(s){for(;s.Iu.size>0&&s.Ru.size<s.maxConcurrentLimboResolutions;){const e=s.Iu.values().next().value;s.Iu.delete(e);const i=new pe(ct.fromString(e)),r=s.fu.next();s.Au.set(r,new Wx(i)),s.Ru=s.Ru.insert(i,r),K0(s.remoteStore,new xr(Wi(Hh(i.path)),r,"TargetPurposeLimboResolution",zh.ce))}}async function xu(s,e,i){const r=we(s),l=[],c=[],d=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,g)=>{d.push(r.pu(g,e,i).then((_=>{var b;if((_||i)&&r.isPrimaryClient){const R=_?!_.fromCache:(b=i==null?void 0:i.targetChanges.get(g.targetId))==null?void 0:b.current;r.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){l.push(_);const R=_p.Is(g.targetId,_);c.push(R)}})))})),await Promise.all(d),r.Pu.H_(l),await(async function(g,_){const b=we(g);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>Z.forEach(_,(M=>Z.forEach(M.Ts,(Y=>b.persistence.referenceDelegate.addReference(R,M.targetId,Y))).next((()=>Z.forEach(M.Es,(Y=>b.persistence.referenceDelegate.removeReference(R,M.targetId,Y)))))))))}catch(R){if(!Qo(R))throw R;ue(vp,"Failed to update sequence numbers: "+R)}for(const R of _){const M=R.targetId;if(!R.fromCache){const Y=b.vs.get(M),ee=Y.snapshotVersion,se=Y.withLastLimboFreeSnapshotVersion(ee);b.vs=b.vs.insert(M,se)}}})(r.localStore,c))}async function hN(s,e){const i=we(s);if(!i.currentUser.isEqual(e)){ue(Ip,"User change. New user:",e.toKey());const r=await F0(i.localStore,e);i.currentUser=e,(function(c,d){c.mu.forEach((p=>{p.forEach((g=>{g.reject(new oe(J.CANCELLED,d))}))})),c.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xu(i,r.Ns)}}function fN(s,e){const i=we(s),r=i.Au.get(e);if(r&&r.hu)return Be().add(r.key);{let l=Be();const c=i.Eu.get(e);if(!c)return l;for(const d of c){const p=i.Tu.get(d);l=l.unionWith(p.view.nu)}return l}}function cb(s){const e=we(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oN.bind(null,e),e.Pu.H_=Xx.bind(null,e.eventManager),e.Pu.yu=Jx.bind(null,e.eventManager),e}function dN(s){const e=we(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uN.bind(null,e),e}class Vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,i){return null}Mu(e,i){return null}vu(e){return gx(this.persistence,new dx,e.initialUser,this.serializer)}Cu(e){return new H0(yp.Vi,this.serializer)}Du(e){return new Ax}async terminate(){var e,i;(e=this.gcScheduler)==null||e.stop(),(i=this.indexBackfillerScheduler)==null||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vh.provider={build:()=>new Vh};class mN extends Vh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,i){$e(this.persistence.referenceDelegate instanceof Dh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZC(r,e.asyncQueue,i)}Cu(e){const i=this.cacheSizeBytes!==void 0?Dn.withCacheSize(this.cacheSizeBytes):Dn.DEFAULT;return new H0((r=>Dh.Vi(r,i)),this.serializer)}}class qm{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>OE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hN.bind(null,this.syncEngine),await Qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Kx})()}createDatastore(e){const i=Xh(e.databaseInfo.databaseId),r=Cx(e.databaseInfo);return Vx(e.authCredentials,e.appCheckCredentials,r,i)}createRemoteStore(e){return(function(r,l,c,d,p){return new jx(r,l,c,d,p)})(this.localStore,this.datastore,e.asyncQueue,(i=>OE(this.syncEngine,i,0)),(function(){return RE.v()?new RE:new Sx})())}createSyncEngine(e,i){return(function(l,c,d,p,g,_,b){const R=new eN(l,c,d,p,g,_);return b&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await(async function(l){const c=we(l);ue(Va,"RemoteStore shutting down."),c.Ia.add(5),await Cu(c),c.Aa.shutdown(),c.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(i=this.eventManager)==null||i.terminate()}}qm.provider={build:()=>new qm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ps("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,i){setTimeout((()=>{this.muted||e(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class pN{constructor(e,i,r,l,c){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=r,this._databaseInfo=l,this.user=dn.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(r,(async d=>{ue(Br,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(r,(d=>(ue(Br,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const r=wp(i,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function dm(s,e){s.asyncQueue.verifyOperationInProgress(),ue(Br,"Initializing OfflineComponentProvider");const i=s.configuration;await e.initialize(i);let r=i.initialUser;s.setCredentialChangeListener((async l=>{r.isEqual(l)||(await F0(e.localStore,l),r=l)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function ME(s,e){s.asyncQueue.verifyOperationInProgress();const i=await gN(s);ue(Br,"Initializing OnlineComponentProvider"),await e.initialize(i,s.configuration),s.setCredentialChangeListener((r=>CE(e.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,l)=>CE(e.remoteStore,l))),s._onlineComponents=e}async function gN(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){ue(Br,"Using user provided OfflineComponentProvider");try{await dm(s,s._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(l){return l.name==="FirebaseError"?l.code===J.FAILED_PRECONDITION||l.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;Oa("Error using user provided cache. Falling back to memory cache: "+i),await dm(s,new Vh)}}else ue(Br,"Using default OfflineComponentProvider"),await dm(s,new mN(void 0));return s._offlineComponents}async function fb(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(ue(Br,"Using user provided OnlineComponentProvider"),await ME(s,s._uninitializedComponentsProvider._online)):(ue(Br,"Using default OnlineComponentProvider"),await ME(s,new qm))),s._onlineComponents}function yN(s){return fb(s).then((e=>e.syncEngine))}async function Hm(s){const e=await fb(s),i=e.eventManager;return i.onListen=tN.bind(null,e.syncEngine),i.onUnlisten=sN.bind(null,e.syncEngine),i.onFirstRemoteStoreListen=nN.bind(null,e.syncEngine),i.onLastRemoteStoreUnlisten=rN.bind(null,e.syncEngine),i}function _N(s,e,i,r){const l=new hb(r),c=new nb(e,l,i);return s.asyncQueue.enqueueAndForget((async()=>eb(await Hm(s),c))),()=>{l.Nu(),s.asyncQueue.enqueueAndForget((async()=>tb(await Hm(s),c)))}}function vN(s,e,i={}){const r=new Mr;return s.asyncQueue.enqueueAndForget((async()=>(function(c,d,p,g,_){const b=new hb({next:M=>{b.Nu(),d.enqueueAndForget((()=>tb(c,R)));const Y=M.docs.has(p);!Y&&M.fromCache?_.reject(new oe(J.UNAVAILABLE,"Failed to get document because the client is offline.")):Y&&M.fromCache&&g&&g.source==="server"?_.reject(new oe(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(M)},error:M=>_.reject(M)}),R=new nb(Hh(p.path),b,{includeMetadataChanges:!0,qa:!0});return eb(c,R)})(await Hm(s),s.asyncQueue,e,i,r))),r.promise}function EN(s,e){const i=new Mr;return s.asyncQueue.enqueueAndForget((async()=>aN(await yN(s),e,i))),i.promise}/**
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
 */function db(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="ComponentProvider",jE=new Map;function bN(s,e,i,r,l){return new HI(s,e,i,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,db(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="firestore.googleapis.com",kE=!0;class PE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mb,this.ssl=kE}else this.host=e.host,this.ssl=e.ssl??kE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=q0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JC)throw new oe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=db(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,l){return r.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zh{constructor(e,i,r,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new bI;switch(r.type){case"firstParty":return new RI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const r=jE.get(i);r&&(ue(TN,"Removing Datastore"),jE.delete(i),r.terminate())})(this),Promise.resolve()}}function AN(s,e,i,r={}){var _;s=di(s,Zh);const l=Eu(e),c=s._getSettings(),d={...c,emulatorOptions:s._getEmulatorOptions()},p=`${e}:${i}`;l&&sT(`https://${p}`),c.host!==mb&&c.host!==p&&Oa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:l,emulatorOptions:r};if(!Ia(g,d)&&(s._setSettings(g),r.mockUserToken)){let b,R;if(typeof r.mockUserToken=="string")b=r.mockUserToken,R=dn.MOCK_USER;else{b=IS(r.mockUserToken,(_=s._app)==null?void 0:_.options.projectId);const M=r.mockUserToken.sub||r.mockUserToken.user_id;if(!M)throw new oe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new dn(M)}s._authCredentials=new AI(new $T(b,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,i,r){this.converter=i,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class Nt{constructor(e,i,r){this.converter=i,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,r){if(wu(i,Nt._jsonSchema))return new Nt(e,r||null,new pe(ct.fromString(i.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:Ht("string",Nt._jsonSchemaVersion),referencePath:Ht("string")};class jr extends Gr{constructor(e,i,r){super(e,i,Hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new pe(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function xs(s,e,...i){if(s=Ft(s),ZT("collection","path",e),s instanceof Zh){const r=ct.fromString(e,...i);return Jv(r),new jr(s,null,r)}{if(!(s instanceof Nt||s instanceof jr))throw new oe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ct.fromString(e,...i));return Jv(r),new jr(s.firestore,null,r)}}function Ji(s,e,...i){if(s=Ft(s),arguments.length===1&&(e=rp.newId()),ZT("doc","path",e),s instanceof Zh){const r=ct.fromString(e,...i);return Xv(r),new Nt(s,null,new pe(r))}{if(!(s instanceof Nt||s instanceof jr))throw new oe(J.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ct.fromString(e,...i));return Xv(r),new Nt(s.firestore,s instanceof jr?s.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="AsyncQueue";class UE{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Q0(this,"async_queue_retry"),this._c=()=>{const r=fm();r&&ue(LE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const i=fm();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=fm();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Qo(e))throw e;ue(LE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ps("INTERNAL UNHANDLED ERROR: ",zE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=i,i}enqueueAfterDelay(e,i,r){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const l=Sp.createAndSchedule(this,e,i,r,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&Ee(47125,{Pc:zE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((i,r)=>i.targetTimeMs-r.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function zE(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class qr extends Zh{constructor(e,i,r,l){super(e,i,r,l),this.type="firestore",this._queue=new UE,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new UE(e),this._firestoreClient=void 0,await e}}}function SN(s,e){const i=typeof s=="object"?s:lT(),r=typeof s=="string"?s:Rh,l=Ym(i,"firestore").getImmediate({identifier:r});if(!l._initialized){const c=wS("firestore");c&&AN(l,...c)}return l}function xp(s){if(s._terminated)throw new oe(J.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||wN(s),s._firestoreClient}function wN(s){var r,l,c,d;const e=s._freezeSettings(),i=bN(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,(l=s._app)==null?void 0:l.options.apiKey,e);s._componentsProvider||(c=e.localCache)!=null&&c._offlineComponentProvider&&((d=e.localCache)!=null&&d._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new pN(s._authCredentials,s._appCheckCredentials,s._queue,i,s._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(on.fromBase64String(e))}catch(i){throw new oe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new fi(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wu(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:Ht("string",fi._jsonSchemaVersion),bytes:Ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new oe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new oe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new oe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ts._jsonSchemaVersion}}static fromJSON(e){if(wu(e,ts._jsonSchema))return new ts(e.latitude,e.longitude)}}ts._jsonSchemaVersion="firestore/geoPoint/1.0",ts._jsonSchema={type:Ht("string",ts._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Di{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,l){if(r.length!==l.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==l[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Di._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wu(e,Di._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new Di(e.vectorValues);throw new oe(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Di._jsonSchemaVersion="firestore/vectorValue/1.0",Di._jsonSchema={type:Ht("string",Di._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^__.*__$/;class IN{constructor(e,i,r){this.data=e,this.fieldMask=i,this.fieldTransforms=r}toMutation(e,i){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,i,this.fieldTransforms):new Ru(e,this.data,i,this.fieldTransforms)}}class pb{constructor(e,i,r){this.data=e,this.fieldMask=i,this.fieldTransforms=r}toMutation(e,i){return new Fr(e,this.data,this.fieldMask,i,this.fieldTransforms)}}function gb(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{dataSource:s})}}class Dp{constructor(e,i,r,l,c,d){this.settings=e,this.databaseId=i,this.serializer=r,this.ignoreUndefinedProperties=l,c===void 0&&this.Ac(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Dp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var l;const i=(l=this.path)==null?void 0:l.child(e),r=this.i({path:i,arrayElement:!1});return r.mc(e),r}fc(e){var l;const i=(l=this.path)==null?void 0:l.child(e),r=this.i({path:i,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Mh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(gb(this.dataSource)&&RN.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class CN{constructor(e,i,r){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=r||Xh(e)}I(e,i,r,l=!1){return new Dp({dataSource:e,methodName:i,targetDoc:r,path:an.emptyPath(),arrayElement:!1,hasConverter:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wh(s){const e=s._freezeSettings(),i=Xh(s._databaseId);return new CN(s._databaseId,!!e.ignoreUndefinedProperties,i)}function yb(s,e,i,r,l,c={}){const d=s.I(c.merge||c.mergeFields?2:0,e,i,l);Mp("Data must be an object, but it was:",d,r);const p=_b(r,d);let g,_;if(c.merge)g=new Yn(d.fieldMask),_=d.fieldTransforms;else if(c.mergeFields){const b=[];for(const R of c.mergeFields){const M=Bo(e,R,i);if(!d.contains(M))throw new oe(J.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);Tb(b,M)||b.push(M)}g=new Yn(b),_=d.fieldTransforms.filter((R=>g.covers(R.field)))}else g=null,_=d.fieldTransforms;return new IN(new On(p),g,_)}class ef extends Nu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ef}}class Op extends Nu{_toFieldTransform(e){return new C0(e.path,new mu)}isEqual(e){return e instanceof Op}}class Vp extends Nu{constructor(e,i){super(e),this.bc=i}_toFieldTransform(e){const i=new yu(e.serializer,A0(e.serializer,this.bc));return new C0(e.path,i)}isEqual(e){return e instanceof Vp&&this.bc===e.bc}}function xN(s,e,i,r){const l=s.I(1,e,i);Mp("Data must be an object, but it was:",l,r);const c=[],d=On.empty();Hr(r,((g,_)=>{const b=Eb(e,g,i);_=Ft(_);const R=l.fc(b);if(_ instanceof ef)c.push(b);else{const M=Du(_,R);M!=null&&(c.push(b),d.set(b,M))}}));const p=new Yn(c);return new pb(d,p,l.fieldTransforms)}function NN(s,e,i,r,l,c){const d=s.I(1,e,i),p=[Bo(e,r,i)],g=[l];if(c.length%2!=0)throw new oe(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let M=0;M<c.length;M+=2)p.push(Bo(e,c[M])),g.push(c[M+1]);const _=[],b=On.empty();for(let M=p.length-1;M>=0;--M)if(!Tb(_,p[M])){const Y=p[M];let ee=g[M];ee=Ft(ee);const se=d.fc(Y);if(ee instanceof ef)_.push(Y);else{const re=Du(ee,se);re!=null&&(_.push(Y),b.set(Y,re))}}const R=new Yn(_);return new pb(b,R,d.fieldTransforms)}function DN(s,e,i,r=!1){return Du(i,s.I(r?4:3,e))}function Du(s,e){if(vb(s=Ft(s)))return Mp("Unsupported field value:",e,s),_b(s,e);if(s instanceof Nu)return(function(r,l){if(!gb(l.dataSource))throw l.yc(`${r._methodName}() can only be used with update() and set()`);if(!l.path)throw l.yc(`${r._methodName}() is not currently supported inside arrays`);const c=r._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,l){const c=[];let d=0;for(const p of r){let g=Du(p,l.gc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}})(s,e)}return(function(r,l){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A0(l.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const c=dt.fromDate(r);return{timestampValue:Nh(l.serializer,c)}}if(r instanceof dt){const c=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nh(l.serializer,c)}}if(r instanceof ts)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:M0(l.serializer,r._byteString)};if(r instanceof Nt){const c=l.databaseId,d=r.firestore._databaseId;if(!d.isEqual(c))throw l.yc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:pp(r.firestore._databaseId||l.databaseId,r._key.path)}}if(r instanceof Di)return(function(d,p){const g=d instanceof Di?d.toArray():d;return{mapValue:{fields:{[o0]:{stringValue:l0},[Ih]:{arrayValue:{values:g.map((b=>{if(typeof b!="number")throw p.yc("VectorValues must only contain numeric values.");return hp(p.serializer,b)}))}}}}}})(r,l);if(B0(r))return r._toProto(l.serializer);throw l.yc(`Unsupported field value: ${Uh(r)}`)})(s,e)}function _b(s,e){const i={};return t0(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(s,((r,l)=>{const c=Du(l,e.dc(r));c!=null&&(i[r]=c)})),{mapValue:{fields:i}}}function vb(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof dt||s instanceof ts||s instanceof fi||s instanceof Nt||s instanceof Nu||s instanceof Di||B0(s))}function Mp(s,e,i){if(!vb(i)||!WT(i)){const r=Uh(i);throw r==="an object"?e.yc(s+" a custom object"):e.yc(s+" "+r)}}function Bo(s,e,i){if((e=Ft(e))instanceof Np)return e._internalPath;if(typeof e=="string")return Eb(s,e);throw Mh("Field path arguments must be of type string or ",s,!1,void 0,i)}const ON=new RegExp("[~\\*/\\[\\]]");function Eb(s,e,i){if(e.search(ON)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,i);try{return new Np(...e.split("."))._internalPath}catch{throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,i)}}function Mh(s,e,i,r,l){const c=r&&!r.isEmpty(),d=l!==void 0;let p=`Function ${e}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${r}`),d&&(g+=` in document ${l}`),g+=")"),new oe(J.INVALID_ARGUMENT,p+s+g)}function Tb(s,e){return s.some((i=>i.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{convertValue(e,i="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){const r={};return Hr(e,((l,c)=>{r[l]=this.convertValue(c,i)})),r}convertVectorValue(e){var r,l,c;const i=(c=(l=(r=e.fields)==null?void 0:r[Ih].arrayValue)==null?void 0:l.values)==null?void 0:c.map((d=>Mt(d.doubleValue)));return new Di(i)}convertGeoPoint(e){return new ts(Mt(e.latitude),Mt(e.longitude))}convertArray(e,i){return(e.values||[]).map((r=>this.convertValue(r,i)))}convertServerTimestamp(e,i){switch(i){case"previous":const r=qh(e);return r==null?null:this.convertValue(r,i);case"estimate":return this.convertTimestamp(cu(e));default:return null}}convertTimestamp(e){const i=Pr(e);return new dt(i.seconds,i.nanos)}convertDocumentKey(e,i){const r=ct.fromString(e);$e(z0(r),9688,{name:e});const l=new hu(r.get(1),r.get(3)),c=new pe(r.popFirst(5));return l.isEqual(i)||Ps(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */class bb extends VN{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const i=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,i)}}function Xi(){return new Op("serverTimestamp")}function BE(s){return new Vp("increment",s)}const qE="@firebase/firestore",HE="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(s){return(function(i,r){if(typeof i!="object"||i===null)return!1;const l=i;for(const c of r)if(c in l&&typeof l[c]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,i,r,l,c){this._firestore=e,this._userDataWriter=i,this._key=r,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const i=this._document.data.field(Bo("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class MN extends Ab{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new oe(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}class kp extends jp{}function Ql(s,e,...i){let r=[];e instanceof jp&&r.push(e),r=r.concat(i),(function(c){const d=c.filter((g=>g instanceof Lp)).length,p=c.filter((g=>g instanceof Pp)).length;if(d>1||d>0&&p>0)throw new oe(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const l of r)s=l._apply(s);return s}class Pp extends kp{constructor(e,i,r){super(),this._field=e,this._op=i,this._value=r,this.type="where"}static _create(e,i,r){return new Pp(e,i,r)}_apply(e){const i=this._parse(e);return Sb(e._query,i),new Gr(e.firestore,e.converter,Vm(e._query,i))}_parse(e){const i=Wh(e.firestore);return(function(c,d,p,g,_,b,R){let M;if(_.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new oe(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){QE(R,b);const ee=[];for(const se of R)ee.push(GE(g,c,se));M={arrayValue:{values:ee}}}else M=GE(g,c,R)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||QE(R,b),M=DN(p,d,R,b==="in"||b==="not-in");return qt.create(_,b,M)})(e._query,"where",i,e.firestore._databaseId,this._field,this._op,this._value)}}class Lp extends jp{constructor(e,i){super(),this.type=e,this._queryConstraints=i}static _create(e,i){return new Lp(e,i)}_parse(e){const i=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return i.length===1?i[0]:Oi.create(i,this._getOperator())}_apply(e){const i=this._parse(e);return i.getFilters().length===0?e:((function(l,c){let d=l;const p=c.getFlattenedFilters();for(const g of p)Sb(d,g),d=Vm(d,g)})(e._query,i),new Gr(e.firestore,e.converter,Vm(e._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends kp{constructor(e,i){super(),this._field=e,this._direction=i,this.type="orderBy"}static _create(e,i){return new Up(e,i)}_apply(e){const i=(function(l,c,d){if(l.startAt!==null)throw new oe(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new oe(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new du(c,d)})(e._query,this._field,this._direction);return new Gr(e.firestore,e.converter,oC(e._query,i))}}function Yl(s,e="asc"){const i=e,r=Bo("orderBy",s);return Up._create(r,i)}class zp extends kp{constructor(e,i,r){super(),this.type=e,this._limit=i,this._limitType=r}static _create(e,i,r){return new zp(e,i,r)}_apply(e){return new Gr(e.firestore,e.converter,xh(e._query,this._limit,this._limitType))}}function kN(s){return zp._create("limit",s,"F")}function GE(s,e,i){if(typeof(i=Ft(i))=="string"){if(i==="")throw new oe(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!g0(e)&&i.indexOf("/")!==-1)throw new oe(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const r=e.path.child(ct.fromString(i));if(!pe.isDocumentKey(r))throw new oe(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sE(s,new pe(r))}if(i instanceof Nt)return sE(s,i._key);throw new oe(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uh(i)}.`)}function QE(s,e){if(!Array.isArray(s)||s.length===0)throw new oe(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sb(s,e){const i=(function(l,c){for(const d of l)for(const p of d.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(s.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(i!==null)throw i===e.op?new oe(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${i.toString()}' filters.`)}function wb(s,e,i){let r;return r=s?i&&(i.merge||i.mergeFields)?s.toFirestore(e,i):s.toFirestore(e):e,r}class tu{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ra extends Ab{constructor(e,i,r,l,c,d){super(e,i,r,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new mh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const r=this._document.data.field(Bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Ra._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Ra._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ra._jsonSchema={type:Ht("string",Ra._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class mh extends Ra{data(e={}){return super.data(e)}}class Vo{constructor(e,i,r,l){this._firestore=e,this._userDataWriter=i,this._snapshot=l,this.metadata=new tu(l.hasPendingWrites,l.fromCache),this.query=r}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((r=>{e.call(i,new mh(this._firestore,this._userDataWriter,r.key,r,new tu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new oe(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const g=new mh(l._firestore,l._userDataWriter,p.doc.key,p.doc,new tu(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const g=new mh(l._firestore,l._userDataWriter,p.doc.key,p.doc,new tu(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,b=-1;return p.type!==0&&(_=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),b=d.indexOf(p.doc.key)),{type:PN(p.type),doc:g,oldIndex:_,newIndex:b}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],r=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(i.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PN(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:s})}}/**
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
 */Vo._jsonSchemaVersion="firestore/querySnapshot/1.0",Vo._jsonSchema={type:Ht("string",Vo._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(s){s=di(s,Nt);const e=di(s.firestore,qr),i=xp(e);return vN(i,s._key).then((r=>Rb(e,s,r)))}function mm(s,e,i){s=di(s,Nt);const r=di(s.firestore,qr),l=wb(s.converter,e,i),c=Wh(r);return tf(r,[yb(c,"setDoc",s._key,l,s.converter!==null,i).toMutation(s._key,mi.none())])}function pm(s,e,i,...r){s=di(s,Nt);const l=di(s.firestore,qr),c=Wh(l);let d;return d=typeof(e=Ft(e))=="string"||e instanceof Np?NN(c,"updateDoc",s._key,e,i,r):xN(c,"updateDoc",s._key,e),tf(l,[d.toMutation(s._key,mi.exists(!0))])}function gm(s){return tf(di(s.firestore,qr),[new fp(s._key,mi.none())])}function nh(s,e){const i=di(s.firestore,qr),r=Ji(s),l=wb(s.converter,e),c=Wh(s.firestore);return tf(i,[yb(c,"addDoc",r._key,l,s.converter!==null,{}).toMutation(r._key,mi.exists(!1))]).then((()=>r))}function Kl(s,...e){var _,b,R;s=Ft(s);let i={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||FE(e[r])||(i=e[r++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(FE(e[r])){const M=e[r];e[r]=(_=M.next)==null?void 0:_.bind(M),e[r+1]=(b=M.error)==null?void 0:b.bind(M),e[r+2]=(R=M.complete)==null?void 0:R.bind(M)}let c,d,p;if(s instanceof Nt)d=di(s.firestore,qr),p=Hh(s._key.path),c={next:M=>{e[r]&&e[r](Rb(d,s,M))},error:e[r+1],complete:e[r+2]};else{const M=di(s,Gr);d=di(M.firestore,qr),p=M._query;const Y=new bb(d);c={next:ee=>{e[r]&&e[r](new Vo(d,Y,M,ee))},error:e[r+1],complete:e[r+2]},jN(s._query)}const g=xp(d);return _N(g,p,l,c)}function tf(s,e){const i=xp(s);return EN(i,e)}function Rb(s,e,i){const r=i.docs.get(e._key),l=new bb(s);return new Ra(s,l,e._key,r,new tu(i.hasPendingWrites,i.fromCache),e.converter)}(function(e,i=!0){TI(qo),Mo(new Ca("firestore",((r,{instanceIdentifier:l,options:c})=>{const d=r.getProvider("app").getImmediate(),p=new qr(new SI(r.getProvider("auth-internal")),new II(d,r.getProvider("app-check-internal")),FI(d,l),d);return c={useFetchStreams:i,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),Or(qE,HE,e),Or(qE,HE,"esm2020")})();const ih="/Serra-d-equacions/assets/logo-Dt7NwLxQ.png",hi="serradequacions@gmail.com",wr="Serra d'Equacions",LN="ducevp5vb",UN="tasques_alumnes",ym=25,KE=["application/pdf","image/png","image/jpeg","image/webp"],zN={apiKey:"AIzaSyCYikRWiEEvEYlZFHQaWzE-2Ry5zWFcfC4",authDomain:"app-mates.firebaseapp.com",projectId:"app-mates",storageBucket:"app-mates.firebasestorage.app",messagingSenderId:"165327798812",appId:"1:165327798812:web:796094047d0632cc4dd5d9",measurementId:"G-7B6WJXEFNG"},Ib=oT(zN),Jt=SN(Ib),Ao=vI(Ib),fn=["1r ESO","2n ESO","3r ESO","4t ESO A","4t ESO B","1r BATX CCSS","1r BATX CIEN.","2n BATX CCSS","2n BATX CIEN"],Cb=[{value:"Teoria",label:"Teoria",icon:"📚"},{value:"Exercici",label:"Exercici",icon:"✍️"},{value:"Vídeo",label:"Vídeo",icon:"🎥"},{value:"Examen",label:"Examen",icon:"🏁"},{value:"Fitxa",label:"Fitxa",icon:"🧾"},{value:"Link",label:"Link",icon:"🔗"},{value:"Projecte",label:"Projecte",icon:"🧠"}],ph=["Aritmètica","Fraccions","Potències i arrels","Polinomis","Equacions","Sistemes","Funcions","Geometria","Estadística","Probabilitat"],BN=`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  --bg: #f3f7ff;
  --bg-2: #eef4ff;
  --card: rgba(255,255,255,0.88);
  --card-solid: #ffffff;
  --text: #0f172a;
  --text-soft: #475569;
  --muted: #94a3b8;
  --line: rgba(148, 163, 184, 0.22);
  --primary: #1e40af;
  --primary-2: #2563eb;
  --emerald: #059669;
  --emerald-2: #10b981;
  --danger: #dc2626;
  --warning: #d97706;
  --success: #16a34a;
  --shadow: 0 20px 55px rgba(15, 23, 42, 0.08);
  --shadow-soft: 0 10px 30px rgba(15, 23, 42, 0.06);
  --radius-xl: 28px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
}

* { box-sizing: border-box; }
html, body, #root { min-height: 100%; }
body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(37,99,235,0.12), transparent 24%),
    radial-gradient(circle at top right, rgba(5,150,105,0.10), transparent 26%),
    linear-gradient(180deg, var(--bg) 0%, #ffffff 100%);
  color: var(--text);
  overflow-x: hidden;
}

a { color: inherit; }
button, input, textarea, select { font: inherit; }
button { cursor: pointer; }
img { max-width: 100%; display: block; }

::selection { background: rgba(30,64,175,0.12); }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulseSoft {
  0%, 100% { transform: scale(1); opacity: 0.92; }
  50% { transform: scale(1.02); opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.82);
  border-bottom: 1px solid rgba(148,163,184,0.18);
}

.topbar-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  min-width: 0;
}

.brand-logo {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: var(--shadow-soft);
  background: white;
}

.brand-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.brand-title strong {
  font-size: 18px;
  letter-spacing: -0.03em;
}

.brand-title span {
  font-size: 12px;
  color: var(--text-soft);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.page {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 28px 24px 56px;
  flex: 1;
}

.hero-card, .glass-card, .panel-card, .detail-card, .auth-card, .admin-card, .metric-card {
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.62);
  box-shadow: var(--shadow);
  border-radius: var(--radius-xl);
}

.hero-card {
  padding: 24px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 18px;
  margin-bottom: 22px;
  overflow: hidden;
  position: relative;
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30,64,175,0.08), rgba(5,150,105,0.05));
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.5s ease both;
}

.hero-eyebrow {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(30,64,175,0.08);
  color: var(--primary);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
}

.hero-title {
  margin: 14px 0 8px;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-subtitle {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.7;
  font-size: 15px;
  max-width: 68ch;
}

.hero-side {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: stretch;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin: 18px 0 22px;
}

.metric-card {
  padding: 18px;
  animation: fadeInUp 0.5s ease both;
}

.metric-label { color: var(--text-soft); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.metric-value { font-size: 24px; font-weight: 800; letter-spacing: -0.04em; margin-top: 8px; }
.metric-help { margin-top: 4px; font-size: 12px; color: var(--muted); }

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin: 18px 0 20px;
}

.search-wrap {
  position: relative;
  flex: 1;
  min-width: min(100%, 420px);
}

.search-input, .text-input, .select-input, .textarea-input {
  width: 100%;
  border: 1px solid rgba(148,163,184,0.2);
  background: rgba(255,255,255,0.9);
  color: var(--text);
  border-radius: 18px;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus, .text-input:focus, .select-input:focus, .textarea-input:focus {
  border-color: rgba(30,64,175,0.45);
  box-shadow: 0 0 0 4px rgba(30,64,175,0.08);
  transform: translateY(-1px);
}

.search-input {
  padding: 16px 18px 16px 48px;
  font-size: 15px;
  box-shadow: var(--shadow-soft);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
}

.text-input, .select-input {
  padding: 13px 14px;
  min-height: 48px;
}

.textarea-input {
  padding: 14px;
  min-height: 130px;
  resize: vertical;
  line-height: 1.6;
}

.label {
  display: block;
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 800;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.helper {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.5;
}

.button {
  border: 0;
  outline: none;
  border-radius: 16px;
  padding: 13px 18px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-soft);
}

.button:hover { transform: translateY(-1px); }
.button:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.button-primary { background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: white; }
.button-emerald { background: linear-gradient(135deg, var(--emerald), var(--emerald-2)); color: white; }
.button-soft { background: rgba(255,255,255,0.92); color: var(--text); border: 1px solid rgba(148,163,184,0.18); }
.button-danger { background: rgba(220,38,38,0.09); color: var(--danger); }
.button-ghost { background: transparent; color: var(--text-soft); box-shadow: none; border: 1px solid rgba(148,163,184,0.18); }
.button-pill { border-radius: 999px; padding-inline: 16px; }

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(148,163,184,0.16);
  color: var(--text-soft);
  font-size: 12px;
  font-weight: 700;
}

.chip-primary { background: rgba(30,64,175,0.08); color: var(--primary); }
.chip-emerald { background: rgba(5,150,105,0.08); color: var(--emerald); }
.chip-muted { color: var(--muted); }

.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.stack { display: grid; gap: 14px; }

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;
  font-size: 18px;
  letter-spacing: -0.03em;
}

.section-title .line {
  width: 36px;
  height: 5px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--emerald));
  flex: 0 0 auto;
}

.section-title small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.panel-card, .auth-card, .detail-card, .admin-card {
  padding: 22px;
}

.auth-wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px;
  background:
    radial-gradient(circle at top left, rgba(30,64,175,0.12), transparent 24%),
    radial-gradient(circle at top right, rgba(5,150,105,0.10), transparent 26%),
    linear-gradient(180deg, #eef4ff 0%, #ffffff 100%);
}

.auth-card {
  width: min(560px, 100%);
  animation: fadeInUp 0.55s ease both;
}

.auth-header {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-bottom: 12px;
  text-align: center;
}

.auth-logo {
  width: 88px;
  height: 88px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: var(--shadow);
}

.auth-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.auth-tab {
  flex: 1;
  min-width: 120px;
  border-radius: 999px;
  padding: 12px 14px;
  border: 1px solid rgba(148,163,184,0.18);
  background: rgba(255,255,255,0.9);
  color: var(--text-soft);
  font-weight: 800;
}

.auth-tab.is-active {
  background: linear-gradient(135deg, rgba(30,64,175,0.1), rgba(5,150,105,0.08));
  color: var(--text);
  border-color: rgba(30,64,175,0.18);
}

.notice-bar {
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(30,64,175,0.08);
  border: 1px solid rgba(30,64,175,0.10);
  color: var(--text);
}

.notice-bar.warn {
  background: rgba(217,119,6,0.08);
  border-color: rgba(217,119,6,0.10);
}

.notice-bar.success {
  background: rgba(5,150,105,0.08);
  border-color: rgba(5,150,105,0.10);
}

.card-list {
  display: grid;
  gap: 14px;
}

.material-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,0.18);
  background: rgba(255,255,255,0.92);
  box-shadow: var(--shadow-soft);
  padding: 18px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.material-card:hover {
  transform: translateY(-2px);
  border-color: rgba(30,64,175,0.24);
  box-shadow: 0 16px 30px rgba(15,23,42,0.08);
}

.material-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30,64,175,0.03), transparent 35%, rgba(5,150,105,0.03));
  pointer-events: none;
}

.material-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  z-index: 1;
}

.material-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(30,64,175,0.12), rgba(5,150,105,0.10));
  font-size: 24px;
  flex: 0 0 auto;
}

.material-content { min-width: 0; flex: 1; }
.material-title {
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.03em;
  line-height: 1.3;
}
.material-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.material-desc {
  margin: 10px 0 0;
  color: var(--text-soft);
  line-height: 1.6;
  font-size: 14px;
}
.material-actions {
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.section-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(148,163,184,0.24), transparent);
  margin: 18px 0;
}

.theme-block {
  margin-bottom: 28px;
}

.theme-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.theme-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.theme-header .theme-line {
  flex: 1;
  height: 1px;
  background: rgba(148,163,184,0.22);
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 20px;
}

.detail-hero {
  display: grid;
  gap: 14px;
}

.detail-title {
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.05;
  letter-spacing: -0.05em;
  margin: 0;
}

.detail-longdesc {
  color: var(--text-soft);
  line-height: 1.8;
  font-size: 15px;
  white-space: pre-wrap;
}

.detail-aside {
  display: grid;
  gap: 16px;
}

.comment-panel {
  display: grid;
  gap: 14px;
}

.comment-list {
  display: grid;
  gap: 12px;
  max-height: 420px;
  overflow: auto;
  padding-right: 6px;
}

.comment-item {
  padding: 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(148,163,184,0.16);
}

.comment-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.comment-author { font-weight: 800; font-size: 13px; }
.comment-time { font-size: 12px; color: var(--muted); }
.comment-text { margin: 0; color: var(--text-soft); line-height: 1.6; white-space: pre-wrap; }

.upload-dropzone {
  border: 1.5px dashed rgba(30,64,175,0.35);
  background: linear-gradient(135deg, rgba(30,64,175,0.06), rgba(5,150,105,0.04));
  border-radius: 24px;
  padding: 22px;
  text-align: center;
  transition: all 0.2s ease;
}

.upload-dropzone:hover {
  transform: translateY(-1px);
  border-color: rgba(5,150,105,0.35);
}

.upload-dropzone input { display: none; }

.dropzone-icon {
  width: 62px;
  height: 62px;
  margin: 0 auto 12px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.95);
  box-shadow: var(--shadow-soft);
  font-size: 28px;
}

.table-wrap {
  overflow: auto;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,0.16);
  background: rgba(255,255,255,0.82);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

th, td {
  padding: 14px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.14);
  text-align: left;
  vertical-align: top;
}

th {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-soft);
  background: rgba(248,250,252,0.8);
}

td { font-size: 14px; color: var(--text); }
tr:hover td { background: rgba(30,64,175,0.03); }

.footer {
  border-top: 1px solid rgba(148,163,184,0.16);
  background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(239,244,255,0.92));
}

.footer-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px 24px 36px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 0.7fr;
  gap: 20px;
}

.footer-brand {
  display: grid;
  gap: 12px;
}

.footer-brand img {
  width: 78px;
  height: 78px;
  border-radius: 22px;
  object-fit: cover;
}

.footer-col h4 {
  margin: 0 0 12px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
}

.footer-col a, .footer-col button {
  display: block;
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--text-soft);
  text-align: left;
  text-decoration: none;
}

.footer-copy {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px 20px;
  color: var(--muted);
  font-size: 12px;
}

.toast-stack {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 100;
  display: grid;
  gap: 10px;
  width: min(400px, calc(100vw - 36px));
}

.toast {
  border-radius: 18px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(148,163,184,0.18);
  box-shadow: var(--shadow);
  animation: fadeInUp 0.25s ease both;
}

.toast-title { font-weight: 900; margin: 0 0 4px; }
.toast-text { margin: 0; color: var(--text-soft); font-size: 13px; line-height: 1.5; }

.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(148,163,184,0.12), rgba(148,163,184,0.22), rgba(148,163,184,0.12));
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
  border-radius: 16px;
}

.skeleton-line { height: 14px; width: 100%; }
.skeleton-box { height: 180px; width: 100%; }

@media (max-width: 1180px) {
  .hero-card, .detail-layout, .footer-inner, .grid-4 { grid-template-columns: 1fr; }
  .metric-grid, .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .page, .topbar-inner { padding-left: 16px; padding-right: 16px; }
  .hero-card, .panel-card, .auth-card, .detail-card, .admin-card { padding: 16px; border-radius: 22px; }
  .metric-grid, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .topbar-inner { align-items: flex-start; flex-direction: column; }
  .topbar-actions { width: 100%; justify-content: flex-start; }
  .brand-title strong { font-size: 16px; }
}
`;function qN(){if(document.getElementById("serra-equacions-styles"))return;const s=document.createElement("style");s.id="serra-equacions-styles",s.innerHTML=BN,document.head.appendChild(s)}function Qt(s){return String(s??"").replace(/[<>]/g,"").replace(/\s+/g," ").trim()}function sh(s){return Qt(s).toLowerCase()}function Ns(s){return Array.isArray(s)?s.filter(Boolean):[]}function Xl(s){try{const e=s!=null&&s.toDate?s.toDate():s?new Date(s):null;return!e||Number.isNaN(e.getTime())?"—":new Intl.DateTimeFormat("ca-ES",{dateStyle:"medium",timeStyle:"short"}).format(e)}catch{return"—"}}function XE(s){try{const e=s!=null&&s.toDate?s.toDate():s?new Date(s):null;return!e||Number.isNaN(e.getTime())?"—":new Intl.DateTimeFormat("ca-ES",{dateStyle:"medium"}).format(e)}catch{return"—"}}function JE(s){const e=Cb.find(i=>i.value===s);return(e==null?void 0:e.icon)||"📄"}function _m(s){return[...new Set(s.filter(Boolean))]}function HN(s){const e=[...ph];return[...s].sort((i,r)=>{const l=e.indexOf(i),c=e.indexOf(r);return l===-1&&c===-1?i.localeCompare(r,"ca"):l===-1?1:c===-1?-1:l-c})}function FN(){const[s,e]=me.useState([]);return{toasts:s,pushToast:(r,l,c="info")=>{var p;const d=((p=crypto==null?void 0:crypto.randomUUID)==null?void 0:p.call(crypto))||`${Date.now()}-${Math.random()}`;e(g=>[...g,{id:d,title:r,text:l,kind:c}]),window.setTimeout(()=>{e(g=>g.filter(_=>_.id!==d))},4200)}}}function GN(){const{toasts:s,pushToast:e}=FN(),i=me.useRef(!1),r=me.useRef(null),l=me.useRef(null),c=me.useRef(null),[d,p]=me.useState(!0),[g,_]=me.useState(null),[b,R]=me.useState(null),[M,Y]=me.useState("login"),[ee,se]=me.useState({email:"",password:"",name:"",courseId:fn[0]}),[re,_e]=me.useState(""),[xe,ge]=me.useState("home"),[it,Ke]=me.useState(fn[0]),[Re,N]=me.useState(null),[S,x]=me.useState(null),[j,D]=me.useState(null),[P,I]=me.useState(""),[Ze,Tt]=me.useState(""),[Q,ie]=me.useState({}),[he,qe]=me.useState([]),[Ge,V]=me.useState([]),[X,ne]=me.useState([]),[le,Te]=me.useState([]),[be,Oe]=me.useState([]),[bt,st]=me.useState(!1),[Vi,Mi]=me.useState(""),[ss,ji]=me.useState(""),[gn,Qr]=me.useState(!1),[gi,qs]=me.useState(fn[0]),[yi,At]=me.useState("materials"),[St,_i]=me.useState(!1),[ka,Yr]=me.useState(!1),[De,jt]=me.useState({title:"",longDescription:"",shortDescription:"",url:"",theme:ph[0],newTheme:"",type:"Teoria",courseIds:[fn[0]],visible:!0,tags:"",requireDelivery:!1}),[ki,rs]=me.useState({body:"",targetCourses:[]}),[Vn,Kr]=me.useState({title:"",notes:""}),ln=me.useMemo(()=>(g==null?void 0:g.email)===hi,[g]),Zt=me.useMemo(()=>ln&&gn?gi:(b==null?void 0:b.courseId)||it,[ln,gn,gi,it,b]),vi=me.useMemo(()=>{const w=sh(P);return he.filter(q=>{var ke,_t;const W=Ns(q.courseIds).includes(Zt),ae=sh([q.title,q.shortDescription,q.longDescription,q.theme,(_t=(ke=q.tags)==null?void 0:ke.join)==null?void 0:_t.call(ke," ")].join(" ")),je=!w||ae.includes(w);return W&&je&&q.visible!==!1})},[he,P,Zt]),un=me.useMemo(()=>Ge.filter(w=>{const q=Ns(w.targetCourses);return q.length===0||q.includes(Zt)||q.includes("General")}),[Ge,Zt]),wt=me.useMemo(()=>{const w=_m(vi.map(q=>q.theme||"Sense tema"));return HN(w)},[vi]),Tn=me.useMemo(()=>{const w=new Map;for(const q of vi){const W=q.theme||"Sense tema";w.has(W)||w.set(W,[]),w.get(W).push(q)}for(const[q,W]of w.entries())W.sort((ae,je)=>{var An,Ei,We,vt;const ke=((Ei=(An=ae.createdAt)==null?void 0:An.toMillis)==null?void 0:Ei.call(An))||0;return(((vt=(We=je.createdAt)==null?void 0:We.toMillis)==null?void 0:vt.call(We))||0)-ke});return w},[vi]),mt=me.useMemo(()=>X.filter(w=>{const q=!Zt||w.courseId===Zt||w.curs===Zt,W=sh(Ze);if(!W)return q;const ae=sh([w.studentName,w.studentEmail,w.fileName,w.materialTitle,w.courseId,w.notes].join(" "));return q&&ae.includes(W)}),[X,Zt,Ze]),Hs=me.useMemo(()=>Re&&he.find(w=>w.id===Re)||null,[he,Re]);me.useEffect(()=>{qN(),i.current=!0},[]),me.useEffect(()=>{const w=oR(Ao,async q=>{try{if(p(!0),_e(""),!q){_(null),R(null),ge("home"),p(!1);return}_(q);const W=Ji(Jt,"usuaris",q.uid),ae=await YE(W);if(ae.exists()){const je=ae.data();R({id:q.uid,email:q.email,name:je.name||q.displayName||"Usuari",courseId:je.courseId||fn[0],photoURL:je.photoURL||q.photoURL||"",role:je.role||(q.email===hi?"admin":"student"),createdAt:je.createdAt||null}),Ke(je.courseId||fn[0])}else{const je={name:q.displayName||"Usuari nou",email:q.email,courseId:fn[0],photoURL:q.photoURL||"",role:q.email===hi?"admin":"student",createdAt:Xi()};await mm(W,je,{merge:!0}),R({id:q.uid,...je,createdAt:new Date}),Ke(fn[0])}}catch(W){console.error(W),_e("No s'ha pogut carregar el perfil."),e("Error d'autenticació",(W==null?void 0:W.message)||"Error desconegut","error")}finally{p(!1)}});return()=>w()},[e]),me.useEffect(()=>{const w=Kl(Ql(xs(Jt,"materials"),Yl("createdAt","desc")),W=>{qe(W.docs.map(ae=>({id:ae.id,...ae.data()})))},W=>{console.error(W),e("Materials","No s'han pogut carregar els materials.","error")}),q=Kl(Ql(xs(Jt,"avisos"),Yl("createdAt","desc"),kN(40)),W=>{V(W.docs.map(ae=>({id:ae.id,...ae.data()})))},W=>{console.error(W),e("Avisos","No s'han pogut carregar els avisos.","error")});return()=>{w(),q()}},[e]),me.useEffect(()=>{if(!g||!ln)return;const w=Kl(Ql(xs(Jt,"entregues"),Yl("createdAt","desc")),W=>{ne(W.docs.map(ae=>({id:ae.id,...ae.data()})))},W=>{console.error(W),e("Entregues","No s'han pogut carregar les entregues.","error")}),q=Kl(Ql(xs(Jt,"usuaris"),Yl("createdAt","desc")),W=>{Te(W.docs.map(ae=>({id:ae.id,...ae.data()})))},W=>{console.error(W),e("Usuaris","No s'han pogut carregar els usuaris.","error")});return()=>{w(),q()}},[g,ln,e]),me.useEffect(()=>{if(!Re){Oe([]),x(null);return}x(Hs),st(!0),Mi("");const w=xs(Jt,"materials",Re,"comments"),q=Ql(w,Yl("createdAt","asc")),W=Kl(q,ae=>{Oe(ae.docs.map(je=>({id:je.id,...je.data()}))),st(!1)},ae=>{console.error(ae),st(!1),Mi("No s'han pogut carregar els comentaris."),e("Comentaris","Error carregant el xat del material.","error")});return()=>W()},[Re,Hs,e]),me.useEffect(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth",block:"end"})},[be,Re]);const as=me.useMemo(()=>g?g.email===hi?"Administrador":"Alumne":"Convidat",[g]),Xr=me.useMemo(()=>vi.length,[vi]),Mn=me.useMemo(()=>wt.length,[wt]),Pi=me.useMemo(()=>un.length,[un]),Rt=me.useMemo(()=>le.length,[le]),jn=()=>{N(null),x(null),ji(""),Mi(""),D(null),ge("home")},kn=w=>{N(w),ge("detail")},yn=()=>!g||!b?(e("Accés denegat","Has d'iniciar sessió.","warning"),ge("home"),!1):!0,os=()=>ln?!0:(e("Accés restringit","Només l'administrador pot realitzar aquesta acció.","warning"),!1),Jr=(w,q={})=>({name:Qt(q.name||w.displayName||"Usuari"),email:w.email,courseId:q.courseId||fn[0],photoURL:w.photoURL||"",role:w.email===hi?"admin":"student",updatedAt:Xi()}),Kn=async w=>{w.preventDefault(),_e("");const q=Qt(ee.email).toLowerCase(),W=ee.password,ae=Qt(ee.name),je=Qt(ee.courseId);try{if(!q||!q.includes("@"))throw new Error("Introdueix un correu electrònic vàlid.");if(M==="login"){if(!W)throw new Error("La contrasenya és obligatòria.");await nR(Ao,q,W),e("Benvingut/da","Sessió iniciada correctament.","success")}if(M==="signup"){if(!W||W.length<6)throw new Error("La contrasenya ha de tenir almenys 6 caràcters.");if(!ae)throw new Error("El nom és obligatori.");const ke=await tR(Ao,q,W);await sR(ke.user,{displayName:ae}),await mm(Ji(Jt,"usuaris",ke.user.uid),Jr(ke.user,{name:ae,courseId:je}),{merge:!0}),e("Compte creat","El teu accés ha estat registrat.","success")}M==="reset"&&(await eR(Ao,q),e("Correu enviat","Revisa la teva bústia per recuperar la contrasenya.","success"),Y("login"))}catch(ke){console.error(ke),_e((ke==null?void 0:ke.message)||"No s'ha pogut completar l'operació."),e("Error d'accés",(ke==null?void 0:ke.message)||"Error desconegut","error")}},ls=async()=>{try{const w=new Ds,W=(await CR(Ao,w)).user,ae=Ji(Jt,"usuaris",W.uid);(await YE(ae)).exists()||await mm(ae,Jr(W,{name:W.displayName,courseId:fn[0]}),{merge:!0}),e("Accés Google","Sessió iniciada amb èxit.","success")}catch(w){console.error(w),_e((w==null?void 0:w.message)||"No s'ha pogut iniciar amb Google."),e("Google Login",(w==null?void 0:w.message)||"Error desconegut","error")}},Xo=async w=>{if(yn())try{const q=Qt(w),W=Ji(Jt,"usuaris",g.uid);await pm(W,{courseId:q,updatedAt:Xi()}),R(ae=>({...ae,courseId:q})),Ke(q),qs(q),e("Perfil actualitzat",`Ara treballes amb el curs ${q}.`,"success")}catch(q){console.error(q),e("Perfil",(q==null?void 0:q.message)||"No s'ha pogut actualitzar el curs.","error")}},us=async w=>{if(!w)throw new Error("No s'ha seleccionat cap fitxer.");if(w.size>ym*1024*1024)throw new Error(`El fitxer supera el límit de ${ym}MB.`);if(KE.length>0&&!KE.includes(w.type))throw new Error("Format no suportat. Utilitza PDF, JPG, PNG o WEBP.");const q=new FormData;q.append("file",w),q.append("upload_preset",UN),q.append("folder","serra-d-equacions/entregues");const W=await fetch(`https://api.cloudinary.com/v1_1/${LN}/upload`,{method:"POST",body:q});if(!W.ok){const je=await W.text();throw new Error(`Cloudinary ha respost amb error (${W.status}). ${je}`)}const ae=await W.json();if(!(ae!=null&&ae.secure_url))throw new Error("La pujada no ha retornat un enllaç vàlid.");return ae},Fs=async(w,q="home")=>{var ae,je;const W=(je=(ae=w==null?void 0:w.target)==null?void 0:ae.files)==null?void 0:je[0];if(W&&yn())try{if(!j&&q==="detail")throw new Error("No hi ha cap material vinculat a aquesta entrega.");q==="home"&&_i(!0),q==="detail"&&Yr(!0);const ke=await us(W),_t=q==="detail"?Hs:j,An={studentId:g.uid,studentName:(b==null?void 0:b.name)||g.displayName||"Alumne",studentEmail:g.email,courseId:(b==null?void 0:b.courseId)||Zt,materialId:(_t==null?void 0:_t.id)||null,materialTitle:(_t==null?void 0:_t.title)||Vn.title||"Entrega sense material",notes:Qt(Vn.notes),fileName:W.name,fileUrl:ke.secure_url,fileType:ke.resource_type||W.type,cloudinaryPublicId:ke.public_id||"",createdAt:Xi(),status:"submitted"};await nh(xs(Jt,"entregues"),An),_t!=null&&_t.id&&await pm(Ji(Jt,"materials",_t.id),{submissionCount:BE(1),updatedAt:Xi()}),e("Entrega registrada","El fitxer s'ha pujat i guardat correctament.","success"),Kr({title:"",notes:""}),l.current&&(l.current.value=""),c.current&&(c.current.value="")}catch(ke){console.error(ke),e("Entrega fallida",(ke==null?void 0:ke.message)||"No s'ha pogut completar la pujada.","error")}finally{_i(!1),Yr(!1)}},$r=async w=>{if(w.preventDefault(),!os())return;const q=Qt(De.title),W=Qt(De.longDescription),ae=Qt(De.shortDescription),je=Qt(De.url),ke=Qt(De.type),_t=Qt(De.newTheme||De.theme),An=_m(De.courseIds.map(We=>Qt(We))),Ei=Qt(De.tags).split(",").map(We=>Qt(We)).filter(Boolean);if(!q)return e("Validació","El títol és obligatori.","warning");if(!_t)return e("Validació","El tema és obligatori.","warning");if(!je&&ke!=="Projecte")return e("Validació","L'enllaç del recurs és obligatori.","warning");if(!An.length)return e("Validació","Selecciona com a mínim un curs.","warning");try{const We={title:q,shortDescription:ae,longDescription:W||ae||q,url:je,theme:_t,type:ke,courseIds:An,tags:Ei,visible:!!De.visible,requireDelivery:!!De.requireDelivery,createdBy:(g==null?void 0:g.uid)||hi,createdByEmail:(g==null?void 0:g.email)||hi,createdAt:Xi(),updatedAt:Xi(),commentsCount:0,submissionCount:0};await nh(xs(Jt,"materials"),We),e("Material publicat","El recurs s'ha guardat correctament.","success"),jt({title:"",longDescription:"",shortDescription:"",url:"",theme:ph[0],newTheme:"",type:"Teoria",courseIds:[Zt],visible:!0,tags:"",requireDelivery:!1})}catch(We){console.error(We),e("Material",(We==null?void 0:We.message)||"No s'ha pogut crear el material.","error")}},cs=async w=>{if(w.preventDefault(),!os())return;const q=Qt(ki.body),W=_m(ki.targetCourses.map(ae=>Qt(ae)));if(!q){e("Validació","Escriu el contingut de l'avís.","warning");return}try{await nh(xs(Jt,"avisos"),{body:q,targetCourses:W,author:(g==null?void 0:g.email)||hi,createdAt:Xi()}),rs({body:"",targetCourses:[]}),e("Avís publicat","La notificació s'ha enviat correctament.","success")}catch(ae){console.error(ae),e("Avisos",(ae==null?void 0:ae.message)||"No s'ha pogut publicar l'avís.","error")}},Xn=async w=>{if(os()&&window.confirm("Segur que vols eliminar aquest material?"))try{await gm(Ji(Jt,"materials",w)),e("Material eliminat","El recurs s'ha suprimit.","success"),Re===w&&jn()}catch(q){console.error(q),e("Material",(q==null?void 0:q.message)||"No s'ha pogut eliminar.","error")}},Zr=async w=>{if(os())try{await gm(Ji(Jt,"avisos",w)),e("Avís eliminat","La notificació s'ha suprimit.","success")}catch(q){console.error(q),e("Avís",(q==null?void 0:q.message)||"No s'ha pogut eliminar.","error")}},Pn=async w=>{if(os()&&window.confirm("Eliminar aquesta entrega?"))try{await gm(Ji(Jt,"entregues",w)),e("Entrega eliminada","La entrega s'ha suprimit.","success")}catch(q){console.error(q),e("Entregues",(q==null?void 0:q.message)||"No s'ha pogut eliminar.","error")}},Ln=async w=>{if(w.preventDefault(),!yn())return;if(!Re){e("Comentaris","Selecciona un material primer.","warning");return}const q=Qt(ss);if(!q){e("Comentaris","El missatge no pot estar buit.","warning");return}try{const W=xs(Jt,"materials",Re,"comments");await nh(W,{text:q,authorId:g.uid,authorName:(b==null?void 0:b.name)||g.displayName||"Usuari",authorEmail:g.email,authorPhotoURL:g.photoURL||(b==null?void 0:b.photoURL)||"",createdAt:Xi()}),await pm(Ji(Jt,"materials",Re),{commentsCount:BE(1),updatedAt:Xi()}),ji(""),e("Comentari enviat","Missatge afegit al xat del material.","success")}catch(W){console.error(W),e("Comentaris",(W==null?void 0:W.message)||"No s'ha pogut enviar el comentari.","error")}},It=w=>{jt(q=>{const W=q.courseIds.includes(w);return{...q,courseIds:W?q.courseIds.filter(ae=>ae!==w):[...q.courseIds,w]}})},kt=w=>{rs(q=>{const W=q.targetCourses.includes(w);return{...q,targetCourses:W?q.targetCourses.filter(ae=>ae!==w):[...q.targetCourses,w]}})},Jn=w=>{kn(w)},Gs=()=>d?E.jsx("div",{className:"auth-wrap",children:E.jsxs("div",{className:"auth-card",children:[E.jsxs("div",{className:"auth-header",children:[E.jsx("img",{src:ih,alt:wr,className:"auth-logo"}),E.jsx("div",{className:"skeleton skeleton-line",style:{width:"42%",height:18}}),E.jsx("div",{className:"skeleton skeleton-line",style:{width:"70%",height:14}})]}),E.jsxs("div",{className:"stack",children:[E.jsx("div",{className:"skeleton skeleton-box"}),E.jsx("div",{className:"skeleton skeleton-line"}),E.jsx("div",{className:"skeleton skeleton-line",style:{width:"78%"}})]})]})}):g?null:E.jsx("div",{className:"auth-wrap",children:E.jsxs("div",{className:"auth-card",children:[E.jsxs("div",{className:"auth-header",children:[E.jsx("img",{src:ih,alt:wr,className:"auth-logo"}),E.jsx("div",{className:"hero-eyebrow",children:"Premium SaaS · Aula Virtual de Matemàtiques"}),E.jsxs("div",{children:[E.jsx("h1",{style:{margin:"10px 0 4px",letterSpacing:"-0.05em",fontSize:"34px"},children:wr}),E.jsx("p",{style:{margin:0,color:"var(--text-soft)",lineHeight:1.6},children:"Accedeix al teu espai de treball, consulta recursos, entrega PDFs i participa al xat dels materials."})]})]}),E.jsxs("div",{className:"auth-tabs",children:[E.jsx("button",{className:`auth-tab ${M==="login"?"is-active":""}`,onClick:()=>Y("login"),children:"Inicia sessió"}),E.jsx("button",{className:`auth-tab ${M==="signup"?"is-active":""}`,onClick:()=>Y("signup"),children:"Registra't"}),E.jsx("button",{className:`auth-tab ${M==="reset"?"is-active":""}`,onClick:()=>Y("reset"),children:"Recupera clau"})]}),E.jsxs("button",{className:"button button-soft",onClick:ls,style:{width:"100%",marginBottom:16},children:[E.jsx("span",{children:"🔐"})," Entra amb Google"]}),E.jsxs("div",{className:"notice-bar",style:{marginBottom:16},children:[E.jsx("strong",{children:"Administrador:"})," ",hi]}),E.jsxs("form",{className:"stack",onSubmit:Kn,children:[M==="signup"&&E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Nom i cognoms"}),E.jsx("input",{className:"text-input",placeholder:"Nom i cognoms",value:ee.name,onChange:w=>se(q=>({...q,name:w.target.value})),required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Correu electrònic"}),E.jsx("input",{className:"text-input",type:"email",placeholder:"alumne@centre.cat",value:ee.email,onChange:w=>se(q=>({...q,email:w.target.value})),required:!0})]}),M!=="reset"&&E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Contrasenya"}),E.jsx("input",{className:"text-input",type:"password",placeholder:"••••••••",value:ee.password,onChange:w=>se(q=>({...q,password:w.target.value})),required:!0})]}),M==="signup"&&E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Curs"}),E.jsx("select",{className:"select-input",value:ee.courseId,onChange:w=>se(q=>({...q,courseId:w.target.value})),children:fn.map(w=>E.jsx("option",{value:w,children:w},w))})]}),re&&E.jsx("div",{className:"notice-bar warn",children:re}),E.jsxs("button",{className:"button button-primary",type:"submit",children:[M==="login"&&"Accedeix a l'aula",M==="signup"&&"Crea el compte",M==="reset"&&"Envia el correu"]})]}),E.jsx("div",{className:"section-divider"}),E.jsxs("p",{style:{margin:0,color:"var(--text-soft)",fontSize:13,lineHeight:1.7},children:["Si ets alumne, utilitza el correu del centre. Si ets professor, entra amb ",hi,"."]})]})}),Jo=()=>g?E.jsx("header",{className:"app-topbar",children:E.jsxs("div",{className:"topbar-inner",children:[E.jsxs("a",{href:"#",className:"brand",onClick:w=>{w.preventDefault(),ge("home"),N(null)},children:[E.jsx("img",{src:ih,alt:wr,className:"brand-logo"}),E.jsxs("div",{className:"brand-title",children:[E.jsx("strong",{children:wr}),E.jsx("span",{children:"Gestió d\\'aula virtual de matemàtiques"})]})]}),E.jsxs("div",{className:"topbar-actions",children:[E.jsx("span",{className:"chip chip-muted",children:as}),E.jsx("span",{className:"chip chip-primary",children:Zt}),ln&&E.jsx("button",{className:`button ${gn?"button-emerald":"button-soft"} button-pill`,onClick:()=>Qr(w=>!w),children:gn?"Vista alumne":"Vista alumne simulada"}),E.jsx("button",{className:"button button-soft button-pill",onClick:()=>ge("home"),children:"Home"}),ln&&E.jsx("button",{className:"button button-soft button-pill",onClick:()=>ge("admin"),children:"Admin"}),E.jsx("button",{className:"button button-danger button-pill",onClick:()=>lR(Ao),children:"Sortir"})]})]})}):null,Pa=()=>g?E.jsxs("section",{className:"hero-card",children:[E.jsxs("div",{className:"hero-copy",children:[E.jsx("div",{className:"hero-eyebrow",children:"📘 Matemàtiques · Recursos · Entregues · Comentaris"}),E.jsx("h2",{className:"hero-title",children:"Benvingut/da a la teva aula digital."}),E.jsx("p",{className:"hero-subtitle",children:"Cerca materials per tema, obre el detall de cada recurs, entrega fitxers amb Cloudinary i mantén la conversa en temps real sobre cada material."}),E.jsxs("div",{className:"material-meta",style:{marginTop:16},children:[E.jsxs("span",{className:"chip chip-primary",children:[Xr," materials"]}),E.jsxs("span",{className:"chip chip-emerald",children:[Mn," temes"]}),E.jsxs("span",{className:"chip",children:[Pi," avisos"]}),ln&&E.jsxs("span",{className:"chip",children:[Rt," usuaris"]})]})]}),E.jsxs("div",{className:"hero-side",children:[E.jsxs("div",{className:"panel-card",style:{background:"rgba(255,255,255,0.8)"},children:[E.jsx("div",{className:"label",children:"Perfil actiu"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[E.jsx("div",{className:"material-icon",style:{width:62,height:62},children:b!=null&&b.photoURL?E.jsx("img",{src:b.photoURL,alt:"avatar",style:{width:"100%",height:"100%",borderRadius:18,objectFit:"cover"}}):"👩‍🎓"}),E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:900,fontSize:18,letterSpacing:"-0.03em"},children:(b==null?void 0:b.name)||g.displayName||"Usuari"}),E.jsx("div",{style:{color:"var(--text-soft)",fontSize:13},children:(b==null?void 0:b.email)||g.email})]})]})]}),E.jsxs("div",{className:"panel-card",style:{background:"rgba(255,255,255,0.8)"},children:[E.jsx("div",{className:"label",children:"Curs actiu"}),E.jsx("select",{className:"select-input",value:Zt,onChange:w=>Xo(w.target.value),children:fn.map(w=>E.jsx("option",{value:w,children:w},w))})]})]})]}):null,La=()=>E.jsxs("section",{className:"panel-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Avisos recents ",E.jsx("small",{children:"Del teu curs i generals"})]}),E.jsxs("div",{className:"card-list",children:[un.length===0&&E.jsx("div",{className:"notice-bar success",children:"No hi ha avisos nous. Tot al dia."}),un.map(w=>E.jsxs("article",{className:"material-card",style:{cursor:"default"},children:[E.jsxs("div",{className:"material-row",children:[E.jsx("div",{className:"material-icon",children:"📣"}),E.jsxs("div",{className:"material-content",children:[E.jsxs("div",{className:"material-meta",style:{marginTop:0},children:[E.jsx("span",{className:"chip chip-primary",children:(w.targetCourses||[]).length?w.targetCourses.join(", "):"General"}),E.jsx("span",{className:"chip",children:Xl(w.createdAt)})]}),E.jsx("p",{className:"material-desc",style:{marginTop:12},children:w.body})]})]}),ln&&E.jsx("div",{className:"material-actions",children:E.jsx("button",{className:"button button-danger button-pill",onClick:()=>Zr(w.id),children:"Eliminar avís"})})]},w.id))]})]}),$n=()=>E.jsxs("section",{className:"panel-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Lliurar tasca ",E.jsx("small",{children:"Puja un PDF o imatge"})]}),E.jsxs("div",{className:"upload-dropzone",children:[E.jsx("div",{className:"dropzone-icon",children:"⬆️"}),E.jsx("p",{style:{margin:"0 0 8px",fontWeight:900},children:"Arrossega o selecciona el fitxer"}),E.jsxs("p",{style:{margin:"0 0 16px",color:"var(--text-soft)",fontSize:13},children:["PDF, JPG, PNG o WEBP. Límit recomanat: ",ym,"MB."]}),E.jsx("input",{ref:l,type:"file",accept:".pdf,.png,.jpg,.jpeg,.webp",onChange:w=>Fs(w,"home")}),E.jsx("button",{className:"button button-primary",type:"button",onClick:()=>{var w;return(w=l.current)==null?void 0:w.click()},disabled:St,children:St?"Pujant...":"Selecciona fitxer"})]}),E.jsx("div",{className:"section-divider"}),E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Títol opcional de la tasca"}),E.jsx("input",{className:"text-input",placeholder:"Per exemple: Exercicis d\\'equacions 2n ESO",value:Vn.title,onChange:w=>Kr(q=>({...q,title:w.target.value}))})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Observacions"}),E.jsx("textarea",{className:"textarea-input",placeholder:"Comentaris per al professor...",value:Vn.notes,onChange:w=>Kr(q=>({...q,notes:w.target.value}))})]})]})]}),Qs=()=>E.jsxs("section",{className:"stack",children:[E.jsxs("div",{className:"toolbar",children:[E.jsxs("div",{children:[E.jsxs("h3",{className:"section-title",style:{marginBottom:6},children:[E.jsx("span",{className:"line"})," Recursos i tasques ",E.jsx("small",{children:"Separats per temari"})]}),E.jsx("div",{className:"helper",children:"Cerca per nom, descripció, etiquetes o tema. Fes clic per obrir el detall."})]}),E.jsxs("div",{className:"search-wrap",children:[E.jsx("span",{className:"search-icon",children:"🔎"}),E.jsx("input",{className:"search-input",placeholder:"Cerca un tema, material o paraula clau...",value:P,onChange:w=>I(w.target.value)})]})]}),wt.length===0?E.jsx("div",{className:"panel-card",children:E.jsx("div",{className:"notice-bar",children:"Encara no hi ha materials publicats per a aquest curs."})}):wt.map(w=>{const q=Tn.get(w)||[];return E.jsxs("section",{className:"theme-block",children:[E.jsxs("div",{className:"theme-header",children:[E.jsx("h3",{children:w}),E.jsx("div",{className:"theme-line"}),E.jsxs("small",{children:[q.length," recursos"]})]}),E.jsx("div",{className:"card-list",children:q.map(W=>E.jsxs("article",{className:"material-card",onClick:()=>Jn(W.id),children:[E.jsxs("div",{className:"material-row",children:[E.jsx("div",{className:"material-icon",children:JE(W.type)}),E.jsxs("div",{className:"material-content",children:[E.jsx("h4",{className:"material-title",children:W.title}),E.jsxs("div",{className:"material-meta",children:[E.jsx("span",{className:"chip chip-primary",children:W.type||"Recurs"}),Ns(W.courseIds).slice(0,3).map(ae=>E.jsx("span",{className:"chip",children:ae},ae)),W.requireDelivery&&E.jsx("span",{className:"chip chip-emerald",children:"Entrega obligatòria"}),E.jsx("span",{className:"chip",children:XE(W.createdAt)})]}),W.shortDescription&&E.jsx("p",{className:"material-desc",children:W.shortDescription}),!W.shortDescription&&W.longDescription&&E.jsxs("p",{className:"material-desc",children:[W.longDescription.slice(0,160),"..."]})]})]}),E.jsxs("div",{className:"material-actions",children:[E.jsx("button",{className:"button button-primary button-pill",type:"button",children:"Obrir detall"}),W.url&&E.jsx("button",{className:"button button-soft button-pill",type:"button",onClick:ae=>{ae.stopPropagation(),window.open(W.url,"_blank","noopener,noreferrer")},children:"Accedir al recurs"}),g&&E.jsx("button",{className:"button button-emerald button-pill",type:"button",onClick:ae=>{ae.stopPropagation(),D(W),N(W.id),ge("detail"),setTimeout(()=>{var je;return(je=c.current)==null?void 0:je.click()},120)},children:"Entregar aquí"}),ln&&E.jsx("button",{className:"button button-danger button-pill",type:"button",onClick:ae=>{ae.stopPropagation(),Xn(W.id)},children:"Eliminar"})]})]},W.id))})]},w)})]}),Zn=()=>E.jsxs("main",{className:"page",children:[Pa(),E.jsxs("div",{className:"metric-grid",children:[E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Materials visibles"}),E.jsx("div",{className:"metric-value",children:Xr}),E.jsx("div",{className:"metric-help",children:"Materials filtrats per curs actiu."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Temes actius"}),E.jsx("div",{className:"metric-value",children:Mn}),E.jsx("div",{className:"metric-help",children:"Organització per seccions de temari."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Avisos"}),E.jsx("div",{className:"metric-value",children:Pi}),E.jsx("div",{className:"metric-help",children:"Comunicacions del professorat."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Rol"}),E.jsx("div",{className:"metric-value",children:as}),E.jsx("div",{className:"metric-help",children:"Accés condicionat per email."})]})]}),E.jsxs("div",{className:"grid-2",style:{alignItems:"start"},children:[E.jsxs("div",{className:"stack",children:[La(),Qs()]}),E.jsxs("div",{className:"stack",children:[$n(),E.jsxs("section",{className:"panel-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Enllaços útils ",E.jsx("small",{children:"Accés ràpid"})]}),E.jsxs("div",{className:"stack",children:[E.jsx("button",{className:"button button-soft",onClick:()=>ge("home"),children:"Torna al llistat principal"}),E.jsx("button",{className:"button button-soft",onClick:()=>I("equacions"),children:"Veure materials d\\'equacions"}),E.jsx("button",{className:"button button-soft",onClick:()=>I("funcions"),children:"Veure materials de funcions"})]})]})]})]})]}),bn=()=>S?E.jsxs("main",{className:"page",children:[E.jsx("button",{className:"button button-ghost button-pill",onClick:jn,style:{marginBottom:18},children:"← Tornar al llistat"}),E.jsxs("div",{className:"detail-layout",children:[E.jsxs("section",{className:"detail-card detail-hero",children:[E.jsxs("div",{className:"material-meta",style:{marginTop:0},children:[E.jsx("span",{className:"chip chip-primary",children:S.type||"Recurs"}),E.jsx("span",{className:"chip chip-emerald",children:S.theme||"Sense tema"}),E.jsx("span",{className:"chip",children:Ns(S.courseIds).join(", ")}),E.jsx("span",{className:"chip",children:S.requireDelivery?"Amb entrega":"Sense entrega"})]}),E.jsx("h1",{className:"detail-title",children:S.title}),E.jsx("p",{style:{margin:0,color:"var(--text-soft)",lineHeight:1.7},children:S.shortDescription||"Recurs publicat per l'equip docent."}),E.jsx("div",{className:"section-divider"}),E.jsx("div",{className:"detail-longdesc",children:S.longDescription||S.shortDescription||"Sense descripció detallada."}),E.jsxs("div",{className:"material-actions",children:[S.url&&E.jsx("button",{className:"button button-primary button-pill",onClick:()=>window.open(S.url,"_blank","noopener,noreferrer"),children:"Accedir al recurs"}),S.requireDelivery&&E.jsx("button",{className:"button button-emerald button-pill",onClick:()=>{var w;return(w=c.current)==null?void 0:w.click()},children:"Pujar entrega vinculada"})]}),E.jsxs("div",{className:"material-meta",children:[E.jsxs("span",{className:"chip",children:["Creat: ",Xl(S.createdAt)]}),E.jsxs("span",{className:"chip",children:["Comentaris: ",S.commentsCount||be.length]}),E.jsxs("span",{className:"chip",children:["Entregues: ",S.submissionCount||0]})]})]}),E.jsxs("aside",{className:"detail-aside",children:[E.jsxs("section",{className:"panel-card comment-panel",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Xat de comentaris ",E.jsx("small",{children:"Temps real"})]}),E.jsxs("div",{className:"comment-list",children:[bt&&E.jsx("div",{className:"notice-bar",children:"Carregant comentaris..."}),Vi&&E.jsx("div",{className:"notice-bar warn",children:Vi}),!bt&&be.length===0&&E.jsx("div",{className:"notice-bar",children:"Encara no hi ha comentaris. Sigues el primer!"}),be.map(w=>E.jsxs("div",{className:"comment-item",children:[E.jsxs("div",{className:"comment-head",children:[E.jsx("div",{className:"comment-author",children:w.authorName||"Usuari"}),E.jsx("div",{className:"comment-time",children:Xl(w.createdAt)})]}),E.jsx("p",{className:"comment-text",children:w.text})]},w.id)),E.jsx("div",{ref:r})]}),E.jsxs("form",{onSubmit:Ln,className:"stack",children:[E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Escriu un comentari"}),E.jsx("textarea",{className:"textarea-input",placeholder:"Pregunta, dubte o aportació...",value:ss,onChange:w=>ji(w.target.value)})]}),E.jsx("button",{className:"button button-primary",type:"submit",children:"Enviar missatge"})]})]}),E.jsxs("section",{className:"panel-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Entrega ràpida ",E.jsx("small",{children:"Cloudinary → Firestore"})]}),E.jsxs("div",{className:"upload-dropzone",children:[E.jsx("div",{className:"dropzone-icon",children:"📤"}),E.jsx("p",{style:{margin:"0 0 8px",fontWeight:900},children:"Puja la teva entrega"}),E.jsx("p",{style:{margin:"0 0 16px",color:"var(--text-soft)",fontSize:13},children:"El fitxer es desa a Cloudinary i la referència queda a Firestore."}),E.jsx("input",{ref:c,type:"file",accept:".pdf,.png,.jpg,.jpeg,.webp",onChange:w=>Fs(w,"detail")}),E.jsx("button",{className:"button button-emerald",type:"button",onClick:()=>{var w;return(w=c.current)==null?void 0:w.click()},disabled:ka,children:ka?"Pujant...":"Selecciona i entrega"})]})]}),E.jsxs("section",{className:"panel-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Dades del recurs ",E.jsx("small",{children:"Resum"})]}),E.jsxs("div",{className:"stack",children:[E.jsxs("div",{className:"notice-bar",children:["Tema: ",E.jsx("strong",{children:S.theme||"Sense tema"})]}),E.jsxs("div",{className:"notice-bar",children:["Tipus: ",E.jsx("strong",{children:S.type||"Recurs"})]}),E.jsxs("div",{className:"notice-bar",children:["Cursos: ",E.jsx("strong",{children:Ns(S.courseIds).join(", ")})]}),E.jsxs("div",{className:"notice-bar",children:["Etiquetes: ",E.jsx("strong",{children:Ns(S.tags).join(", ")||"Cap"})]})]})]})]})]})]}):E.jsx("main",{className:"page",children:E.jsxs("div",{className:"panel-card",children:[E.jsx("div",{className:"notice-bar warn",children:"No s\\'ha trobat el material seleccionat."}),E.jsx("button",{className:"button button-primary button-pill",style:{marginTop:16},onClick:()=>ge("home"),children:"Tornar"})]})}),_n=()=>ln?E.jsxs("main",{className:"page",children:[E.jsxs("section",{className:"hero-card",style:{marginBottom:20},children:[E.jsxs("div",{className:"hero-copy",children:[E.jsx("div",{className:"hero-eyebrow",children:"⚙️ Panell Admin robust"}),E.jsx("h2",{className:"hero-title",children:"Gestió completa de materials, avisos i entregues."}),E.jsx("p",{className:"hero-subtitle",children:"Crea materials per a múltiples cursos, publica comunicats massius, revisa entregues i obre els fitxers directament des de la taula de control."})]}),E.jsxs("div",{className:"hero-side",children:[E.jsxs("div",{className:"panel-card",children:[E.jsx("div",{className:"label",children:"Vista activa"}),E.jsx("select",{className:"select-input",value:gi,onChange:w=>qs(w.target.value),children:fn.map(w=>E.jsx("option",{value:w,children:w},w))})]}),E.jsxs("div",{className:"panel-card",children:[E.jsx("div",{className:"label",children:"Secció"}),E.jsxs("select",{className:"select-input",value:yi,onChange:w=>At(w.target.value),children:[E.jsx("option",{value:"materials",children:"Materials"}),E.jsx("option",{value:"announcements",children:"Avisos"}),E.jsx("option",{value:"deliveries",children:"Entregues"}),E.jsx("option",{value:"users",children:"Usuaris"})]})]})]})]}),E.jsxs("div",{className:"metric-grid",children:[E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Cursos a editar"}),E.jsx("div",{className:"metric-value",children:fn.length}),E.jsx("div",{className:"metric-help",children:"Destinacions disponibles."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Materials totals"}),E.jsx("div",{className:"metric-value",children:he.length}),E.jsx("div",{className:"metric-help",children:"Repositori complet."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Entregues"}),E.jsx("div",{className:"metric-value",children:X.length}),E.jsx("div",{className:"metric-help",children:"Arxius pujats a Cloudinary."})]}),E.jsxs("div",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Comentaris"}),E.jsx("div",{className:"metric-value",children:he.reduce((w,q)=>w+(q.commentsCount||0),0)}),E.jsx("div",{className:"metric-help",children:"Activitat dels materials."})]})]}),yi==="materials"&&E.jsxs("div",{className:"grid-2",children:[E.jsxs("section",{className:"admin-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Creació massiva de material ",E.jsx("small",{children:"Múltiples cursos"})]}),E.jsxs("form",{className:"stack",onSubmit:$r,children:[E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Títol"}),E.jsx("input",{className:"text-input",value:De.title,onChange:w=>jt(q=>({...q,title:w.target.value})),placeholder:"Nom del material",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Descripció curta"}),E.jsx("input",{className:"text-input",value:De.shortDescription,onChange:w=>jt(q=>({...q,shortDescription:w.target.value})),placeholder:"Resum per a la targeta"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Descripció llarga"}),E.jsx("textarea",{className:"textarea-input",value:De.longDescription,onChange:w=>jt(q=>({...q,longDescription:w.target.value})),placeholder:"Descripció extensa que apareixerà al detall"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"URL del recurs"}),E.jsx("input",{className:"text-input",value:De.url,onChange:w=>jt(q=>({...q,url:w.target.value})),placeholder:"https://..."})]}),E.jsxs("div",{className:"grid-2",children:[E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Tipus"}),E.jsx("select",{className:"select-input",value:De.type,onChange:w=>jt(q=>({...q,type:w.target.value})),children:Cb.map(w=>E.jsxs("option",{value:w.value,children:[w.icon," ",w.label]},w.value))})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Tema existent"}),E.jsx("select",{className:"select-input",value:De.theme,onChange:w=>jt(q=>({...q,theme:w.target.value,newTheme:""})),children:ph.map(w=>E.jsx("option",{value:w,children:w},w))})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"O crea un tema nou"}),E.jsx("input",{className:"text-input",value:De.newTheme,onChange:w=>jt(q=>({...q,newTheme:w.target.value})),placeholder:"Nom del tema nou"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Etiquetes separades per comes"}),E.jsx("input",{className:"text-input",value:De.tags,onChange:w=>jt(q=>({...q,tags:w.target.value})),placeholder:"equacions, 2n ESO, repàs"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Cursos destinataris"}),E.jsx("div",{className:"grid-2",children:fn.map(w=>E.jsxs("label",{className:"chip",style:{justifyContent:"flex-start"},children:[E.jsx("input",{type:"checkbox",checked:De.courseIds.includes(w),onChange:()=>It(w)}),w]},w))})]}),E.jsxs("div",{className:"grid-2",children:[E.jsxs("label",{className:"chip",style:{justifyContent:"flex-start"},children:[E.jsx("input",{type:"checkbox",checked:De.visible,onChange:w=>jt(q=>({...q,visible:w.target.checked}))}),"Material visible"]}),E.jsxs("label",{className:"chip",style:{justifyContent:"flex-start"},children:[E.jsx("input",{type:"checkbox",checked:De.requireDelivery,onChange:w=>jt(q=>({...q,requireDelivery:w.target.checked}))}),"Requereix entrega"]})]}),E.jsx("button",{className:"button button-primary",type:"submit",children:"Publicar a Firestore"})]})]}),E.jsxs("section",{className:"admin-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Vista de materials ",E.jsx("small",{children:"CRUD ràpid"})]}),E.jsxs("div",{className:"search-wrap",style:{marginBottom:14},children:[E.jsx("span",{className:"search-icon",children:"🔎"}),E.jsx("input",{className:"search-input",placeholder:"Filtra materials...",value:Ze,onChange:w=>Tt(w.target.value)})]}),E.jsx("div",{className:"card-list",style:{maxHeight:780,overflow:"auto",paddingRight:4},children:he.map(w=>E.jsxs("article",{className:"material-card",children:[E.jsxs("div",{className:"material-row",children:[E.jsx("div",{className:"material-icon",children:JE(w.type)}),E.jsxs("div",{className:"material-content",children:[E.jsx("h4",{className:"material-title",children:w.title}),E.jsxs("div",{className:"material-meta",children:[E.jsx("span",{className:"chip chip-primary",children:w.theme||"Sense tema"}),E.jsx("span",{className:"chip",children:Ns(w.courseIds).join(", ")}),E.jsx("span",{className:"chip",children:XE(w.createdAt)})]}),E.jsx("p",{className:"material-desc",children:w.shortDescription||w.longDescription||"Sense descripció"})]})]}),E.jsxs("div",{className:"material-actions",children:[E.jsx("button",{className:"button button-primary button-pill",onClick:()=>kn(w.id),children:"Obrir"}),w.url&&E.jsx("button",{className:"button button-soft button-pill",onClick:()=>window.open(w.url,"_blank","noopener,noreferrer"),children:"Fitxer"}),E.jsx("button",{className:"button button-danger button-pill",onClick:()=>Xn(w.id),children:"Eliminar"})]})]},w.id))})]})]}),yi==="announcements"&&E.jsxs("div",{className:"grid-2",children:[E.jsxs("section",{className:"admin-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Publicació massiva d\\'avisos ",E.jsx("small",{children:"Selecciona diversos cursos"})]}),E.jsxs("form",{className:"stack",onSubmit:cs,children:[E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Missatge"}),E.jsx("textarea",{className:"textarea-input",value:ki.body,onChange:w=>rs(q=>({...q,body:w.target.value})),placeholder:"Escriu l\\'avís per al grup o general"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"label",children:"Cursos destinataris"}),E.jsx("div",{className:"grid-2",children:fn.map(w=>E.jsxs("label",{className:"chip",style:{justifyContent:"flex-start"},children:[E.jsx("input",{type:"checkbox",checked:ki.targetCourses.includes(w),onChange:()=>kt(w)}),w]},w))})]}),E.jsx("button",{className:"button button-emerald",type:"submit",children:"Publicar avís"})]})]}),E.jsxs("section",{className:"admin-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Avisos creats ",E.jsx("small",{children:"Últims elements"})]}),E.jsx("div",{className:"card-list",style:{maxHeight:760,overflow:"auto",paddingRight:4},children:Ge.map(w=>E.jsxs("article",{className:"material-card",children:[E.jsxs("div",{className:"material-row",children:[E.jsx("div",{className:"material-icon",children:"📣"}),E.jsxs("div",{className:"material-content",children:[E.jsx("h4",{className:"material-title",children:w.body}),E.jsxs("div",{className:"material-meta",children:[E.jsx("span",{className:"chip chip-primary",children:Ns(w.targetCourses).length?Ns(w.targetCourses).join(", "):"General"}),E.jsx("span",{className:"chip",children:Xl(w.createdAt)})]})]})]}),E.jsx("div",{className:"material-actions",children:E.jsx("button",{className:"button button-danger button-pill",onClick:()=>Zr(w.id),children:"Eliminar"})})]},w.id))})]})]}),yi==="deliveries"&&E.jsxs("section",{className:"admin-card",children:[E.jsxs("div",{className:"toolbar",style:{marginTop:0},children:[E.jsxs("div",{children:[E.jsxs("h3",{className:"section-title",style:{marginBottom:6},children:[E.jsx("span",{className:"line"})," Taula de control d\\'entregues ",E.jsx("small",{children:"Vista de fitxers"})]}),E.jsx("div",{className:"helper",children:"Filtra i obre els fitxers directament des del panell."})]}),E.jsxs("div",{className:"search-wrap",style:{minWidth:340},children:[E.jsx("span",{className:"search-icon",children:"🔎"}),E.jsx("input",{className:"search-input",placeholder:"Cerca alumne, curs o fitxer...",value:Ze,onChange:w=>Tt(w.target.value)})]})]}),E.jsx("div",{className:"table-wrap",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{children:"Alumne"}),E.jsx("th",{children:"Curs"}),E.jsx("th",{children:"Material"}),E.jsx("th",{children:"Fitxer"}),E.jsx("th",{children:"Data"}),E.jsx("th",{children:"Accions"})]})}),E.jsxs("tbody",{children:[mt.length===0&&E.jsx("tr",{children:E.jsx("td",{colSpan:"6",children:"No hi ha entregues per mostrar."})}),mt.map(w=>E.jsxs("tr",{children:[E.jsxs("td",{children:[E.jsx("strong",{children:w.studentName}),E.jsx("div",{style:{color:"var(--text-soft)",fontSize:12},children:w.studentEmail})]}),E.jsx("td",{children:w.courseId||w.curs||"—"}),E.jsx("td",{children:w.materialTitle||"—"}),E.jsx("td",{children:w.fileName}),E.jsx("td",{children:Xl(w.createdAt)}),E.jsx("td",{children:E.jsxs("div",{className:"material-actions",style:{marginTop:0},children:[E.jsx("button",{className:"button button-primary button-pill",onClick:()=>window.open(w.fileUrl,"_blank","noopener,noreferrer"),children:"Obrir fitxer"}),E.jsx("button",{className:"button button-danger button-pill",onClick:()=>Pn(w.id),children:"Eliminar"})]})})]},w.id))]})]})})]}),yi==="users"&&E.jsxs("section",{className:"admin-card",children:[E.jsxs("h3",{className:"section-title",children:[E.jsx("span",{className:"line"})," Usuaris registrats ",E.jsx("small",{children:"Perfil d\\'alumnes i professors"})]}),E.jsx("div",{className:"table-wrap",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{children:"Nom"}),E.jsx("th",{children:"Email"}),E.jsx("th",{children:"Curs"}),E.jsx("th",{children:"Rol"}),E.jsx("th",{children:"Avatar"})]})}),E.jsx("tbody",{children:le.map(w=>E.jsxs("tr",{children:[E.jsx("td",{children:w.name||"—"}),E.jsx("td",{children:w.email||"—"}),E.jsx("td",{children:w.courseId||"—"}),E.jsx("td",{children:w.role||(w.email===hi?"admin":"student")}),E.jsx("td",{children:w.photoURL?E.jsx("a",{href:w.photoURL,target:"_blank",rel:"noreferrer",children:"Veure"}):"—"})]},w.id||w.email))})]})})]})]}):E.jsx("main",{className:"page",children:E.jsx("div",{className:"panel-card",children:E.jsx("div",{className:"notice-bar warn",children:"No tens permisos per veure el panell administratiu."})})}),Wn=()=>g?xe==="detail"?bn():xe==="admin"?_n():Zn():Gs(),pt=w=>{w==="courses"&&I(""),w==="equacions"&&I("equacions"),w==="funcions"&&I("funcions"),w==="contact"&&window.open("mailto:"+hi,"_blank")};return E.jsxs("div",{className:"app-shell",children:[Jo(),Wn(),E.jsxs("footer",{className:"footer",children:[E.jsxs("div",{className:"footer-inner",children:[E.jsxs("div",{className:"footer-brand",children:[E.jsx("img",{src:ih,alt:wr}),E.jsxs("div",{children:[E.jsx("h3",{style:{margin:"0 0 6px",fontSize:18,letterSpacing:"-0.04em"},children:wr}),E.jsx("p",{style:{margin:0,color:"var(--text-soft)",lineHeight:1.7},children:"Plataforma premium per a la gestió d\\'una aula virtual de matemàtiques amb materials, comentaris, entregues i panell docent."})]})]}),E.jsxs("div",{className:"footer-col",children:[E.jsx("h4",{children:"Navegació"}),E.jsx("button",{onClick:()=>ge("home"),children:"Home"}),E.jsx("button",{onClick:()=>ge("detail"),children:"Detall de material"}),E.jsx("button",{onClick:()=>ge("admin"),children:"Panell admin"})]}),E.jsxs("div",{className:"footer-col",children:[E.jsx("h4",{children:"Accés ràpid"}),E.jsx("button",{onClick:()=>pt("equacions"),children:"Materials d\\'equacions"}),E.jsx("button",{onClick:()=>pt("funcions"),children:"Materials de funcions"}),E.jsx("button",{onClick:()=>pt("contact"),children:"Contacte"})]})]}),E.jsxs("div",{className:"footer-copy",children:["© 2026 ",wr,". Tots els drets reservats."]})]}),E.jsx("div",{className:"toast-stack",children:s.map(w=>E.jsxs("div",{className:"toast",children:[E.jsx("div",{className:"toast-title",children:w.title}),E.jsx("p",{className:"toast-text",children:w.text})]},w.id))})]})}"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(s=>{for(const e of s)e.unregister()}),"caches"in window&&caches.keys().then(s=>{s.forEach(e=>caches.delete(e))}));gS.createRoot(document.getElementById("root")).render(E.jsx(lS.StrictMode,{children:E.jsx(GN,{})}));
