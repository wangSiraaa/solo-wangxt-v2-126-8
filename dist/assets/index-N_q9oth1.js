var Qx=Object.defineProperty;var e3=(t,e,n)=>e in t?Qx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>e3(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function t3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fv={exports:{}},Uu={},dv={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),n3=Symbol.for("react.portal"),i3=Symbol.for("react.fragment"),r3=Symbol.for("react.strict_mode"),s3=Symbol.for("react.profiler"),o3=Symbol.for("react.provider"),a3=Symbol.for("react.context"),l3=Symbol.for("react.forward_ref"),c3=Symbol.for("react.suspense"),u3=Symbol.for("react.memo"),f3=Symbol.for("react.lazy"),hm=Symbol.iterator;function d3(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pv=Object.assign,mv={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=mv,this.updater=n||hv}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gv(){}gv.prototype=Fo.prototype;function Gh(t,e,n){this.props=t,this.context=e,this.refs=mv,this.updater=n||hv}var Wh=Gh.prototype=new gv;Wh.constructor=Gh;pv(Wh,Fo.prototype);Wh.isPureReactComponent=!0;var pm=Array.isArray,vv=Object.prototype.hasOwnProperty,jh={current:null},_v={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vv.call(e,i)&&!_v.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sl,type:t,key:s,ref:o,props:r,_owner:jh.current}}function h3(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function p3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mm=/\/+/g;function uf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p3(""+t.key):e.toString(36)}function _c(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case n3:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uf(o,0):i,pm(r)?(n="",t!=null&&(n=t.replace(mm,"$&/")+"/"),_c(r,e,n,"",function(u){return u})):r!=null&&(Xh(r)&&(r=h3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uf(s,a);o+=_c(s,e,n,l,r)}else if(l=d3(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uf(s,a++),o+=_c(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var i=[],r=0;return _c(t,i,"","",function(s){return e.call(n,s,r++)}),i}function m3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},xc={transition:null},g3={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:xc,ReactCurrentOwner:jh};function yv(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Fo;je.Fragment=i3;je.Profiler=s3;je.PureComponent=Gh;je.StrictMode=r3;je.Suspense=c3;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g3;je.act=yv;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vv.call(e,l)&&!_v.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:sl,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:a3,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o3,_context:t},t.Consumer=t};je.createElement=xv;je.createFactory=function(t){var e=xv.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:l3,render:t}};je.isValidElement=Xh;je.lazy=function(t){return{$$typeof:f3,_payload:{_status:-1,_result:t},_init:m3}};je.memo=function(t,e){return{$$typeof:u3,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=xc.transition;xc.transition={};try{t()}finally{xc.transition=e}};je.unstable_act=yv;je.useCallback=function(t,e){return cn.current.useCallback(t,e)};je.useContext=function(t){return cn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};je.useEffect=function(t,e){return cn.current.useEffect(t,e)};je.useId=function(){return cn.current.useId()};je.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return cn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};je.useRef=function(t){return cn.current.useRef(t)};je.useState=function(t){return cn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return cn.current.useTransition()};je.version="18.3.1";dv.exports=je;var Ve=dv.exports;const v3=t3(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _3=Ve,x3=Symbol.for("react.element"),y3=Symbol.for("react.fragment"),S3=Object.prototype.hasOwnProperty,M3=_3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E3={key:!0,ref:!0,__self:!0,__source:!0};function Sv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)S3.call(e,i)&&!E3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x3,type:t,key:s,ref:o,props:r,_owner:M3.current}}Uu.Fragment=y3;Uu.jsx=Sv;Uu.jsxs=Sv;fv.exports=Uu;var L=fv.exports,C0={},Mv={exports:{}},bn={},Ev={exports:{}},wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var $=D.length;D.push(Z);e:for(;0<$;){var ie=$-1>>>1,_e=D[ie];if(0<r(_e,Z))D[ie]=Z,D[$]=_e,$=ie;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],$=D.pop();if($!==Z){D[0]=$;e:for(var ie=0,_e=D.length,De=_e>>>1;ie<De;){var q=2*(ie+1)-1,te=D[q],le=q+1,ue=D[le];if(0>r(te,$))le<_e&&0>r(ue,te)?(D[ie]=ue,D[le]=$,ie=le):(D[ie]=te,D[q]=$,ie=q);else if(le<_e&&0>r(ue,$))D[ie]=ue,D[le]=$,ie=le;else break e}}return Z}function r(D,Z){var $=D.sortIndex-Z.sortIndex;return $!==0?$:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=D)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function S(D){if(x=!1,v(D),!m)if(n(l)!==null)m=!0,z(P);else{var Z=n(u);Z!==null&&Y(S,Z.startTime-D)}}function P(D,Z){m=!1,x&&(x=!1,h(R),R=-1),p=!0;var $=f;try{for(v(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||D&&!M());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var _e=ie(d.expirationTime<=Z);Z=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&i(l),v(Z)}else i(l);d=n(l)}if(d!==null)var De=!0;else{var q=n(u);q!==null&&Y(S,q.startTime-Z),De=!1}return De}finally{d=null,f=$,p=!1}}var A=!1,T=null,R=-1,B=5,y=-1;function M(){return!(t.unstable_now()-y<B)}function k(){if(T!==null){var D=t.unstable_now();y=D;var Z=!0;try{Z=T(!0,D)}finally{Z?H():(A=!1,T=null)}}else A=!1}var H;if(typeof _=="function")H=function(){_(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,I=j.port2;j.port1.onmessage=k,H=function(){I.postMessage(null)}}else H=function(){g(k,0)};function z(D){T=D,A||(A=!0,H())}function Y(D,Z){R=g(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,z(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var $=f;f=Z;try{return D()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=f;f=D;try{return Z()}finally{f=$}},t.unstable_scheduleCallback=function(D,Z,$){var ie=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,D){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=$+_e,D={id:c++,callback:Z,priorityLevel:D,startTime:$,expirationTime:_e,sortIndex:-1},$>ie?(D.sortIndex=$,e(u,D),n(l)===null&&D===n(u)&&(x?(h(R),R=-1):x=!0,Y(S,$-ie))):(D.sortIndex=_e,e(l,D),m||p||(m=!0,z(P))),D},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(D){var Z=f;return function(){var $=f;f=Z;try{return D.apply(this,arguments)}finally{f=$}}}})(wv);Ev.exports=wv;var w3=Ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T3=Ve,Cn=w3;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tv=new Set,Na={};function gs(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(Na[t]=e,t=0;t<e.length;t++)Tv.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P0=Object.prototype.hasOwnProperty,A3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gm={},vm={};function R3(t){return P0.call(vm,t)?!0:P0.call(gm,t)?!1:A3.test(t)?vm[t]=!0:(gm[t]=!0,!1)}function C3(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P3(t,e,n,i){if(e===null||typeof e>"u"||C3(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,qh);jt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,qh);jt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,qh);jt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P3(e,n,r,i)&&(n=null),i||r===null?R3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=T3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),Rv=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),L0=Symbol.for("react.suspense"),D0=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Cv=Symbol.for("react.offscreen"),_m=Symbol.iterator;function Ho(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,ff;function oa(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var df=!1;function hf(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function b3(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=hf(t.type,!1),t;case 11:return t=hf(t.type.render,!1),t;case 1:return t=hf(t.type,!0),t;default:return""}}function I0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Gs:return"Portal";case b0:return"Profiler";case Kh:return"StrictMode";case L0:return"Suspense";case D0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rv:return(t.displayName||"Context")+".Consumer";case Av:return(t._context.displayName||"Context")+".Provider";case Zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:I0(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return I0(t(e))}catch{}}return null}function L3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I0(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D3(t){var e=Pv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=D3(t))}function bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Pv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function N0(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lv(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function U0(t,e){Lv(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?F0(t,e.type,n):e.hasOwnProperty("defaultValue")&&F0(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function F0(t,e,n){(e!=="number"||Bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function O0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(aa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function Dv(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function z0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,Nv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I3=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){I3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function Uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function Fv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Uv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var N3=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function k0(t,e){if(e){if(N3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function B0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var V0=null,ao=null,lo=null;function Em(t){if(t=ll(t)){if(typeof V0!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Bu(e),V0(t.stateNode,t.type,e))}}function Ov(t){ao?lo?lo.push(t):lo=[t]:ao=t}function zv(){if(ao){var t=ao,e=lo;if(lo=ao=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function kv(t,e){return t(e)}function Bv(){}var pf=!1;function Hv(t,e,n){if(pf)return t(e,n);pf=!0;try{return kv(t,e,n)}finally{pf=!1,(ao!==null||lo!==null)&&(Bv(),zv())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=Bu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var G0=!1;if(Hi)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){G0=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{G0=!1}function U3(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _a=!1,Hc=null,Vc=!1,W0=null,F3={onError:function(t){_a=!0,Hc=t}};function O3(t,e,n,i,r,s,o,a,l){_a=!1,Hc=null,U3.apply(F3,arguments)}function z3(t,e,n,i,r,s,o,a,l){if(O3.apply(this,arguments),_a){if(_a){var u=Hc;_a=!1,Hc=null}else throw Error(se(198));Vc||(Vc=!0,W0=u)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(vs(t)!==t)throw Error(se(188))}function k3(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wm(r),t;if(s===i)return wm(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Gv(t){return t=k3(t),t!==null?Wv(t):null}function Wv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wv(t);if(e!==null)return e;t=t.sibling}return null}var jv=Cn.unstable_scheduleCallback,Tm=Cn.unstable_cancelCallback,B3=Cn.unstable_shouldYield,H3=Cn.unstable_requestPaint,Rt=Cn.unstable_now,V3=Cn.unstable_getCurrentPriorityLevel,ep=Cn.unstable_ImmediatePriority,Xv=Cn.unstable_UserBlockingPriority,Gc=Cn.unstable_NormalPriority,G3=Cn.unstable_LowPriority,$v=Cn.unstable_IdlePriority,Fu=null,yi=null;function W3(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:$3,j3=Math.log,X3=Math.LN2;function $3(t){return t>>>=0,t===0?32:31-(j3(t)/X3|0)|0}var yl=64,Sl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=la(a):(s&=o,s!==0&&(i=la(s)))}else o=n&~r,o!==0?i=la(o):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function q3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y3(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=q3(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function j0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qv(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function K3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function Yv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kv,np,Zv,Jv,Qv,X0=!1,Ml=[],pr=null,mr=null,gr=null,Oa=new Map,za=new Map,lr=[],Z3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Am(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ll(e),e!==null&&np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function J3(t,e,n,i,r){switch(e){case"focusin":return pr=Go(pr,t,e,n,i,r),!0;case"dragenter":return mr=Go(mr,t,e,n,i,r),!0;case"mouseover":return gr=Go(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oa.set(s,Go(Oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,Go(za.get(s)||null,t,e,n,i,r)),!0}return!1}function e_(t){var e=qr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=Vv(n),e!==null){t.blockedOn=e,Qv(t.priority,function(){Zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);H0=i,n.target.dispatchEvent(i),H0=null}else return e=ll(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function Rm(t,e,n){yc(t)&&n.delete(e)}function Q3(){X0=!1,pr!==null&&yc(pr)&&(pr=null),mr!==null&&yc(mr)&&(mr=null),gr!==null&&yc(gr)&&(gr=null),Oa.forEach(Rm),za.forEach(Rm)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,X0||(X0=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Q3)))}function ka(t){function e(r){return Wo(r,t)}if(0<Ml.length){Wo(Ml[0],t);for(var n=1;n<Ml.length;n++){var i=Ml[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&Wo(pr,t),mr!==null&&Wo(mr,t),gr!==null&&Wo(gr,t),Oa.forEach(e),za.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)e_(n),n.blockedOn===null&&lr.shift()}var co=qi.ReactCurrentBatchConfig,jc=!0;function ey(t,e,n,i){var r=ct,s=co.transition;co.transition=null;try{ct=1,ip(t,e,n,i)}finally{ct=r,co.transition=s}}function ty(t,e,n,i){var r=ct,s=co.transition;co.transition=null;try{ct=4,ip(t,e,n,i)}finally{ct=r,co.transition=s}}function ip(t,e,n,i){if(jc){var r=$0(t,e,n,i);if(r===null)Tf(t,e,i,Xc,n),Am(t,i);else if(J3(r,t,e,n,i))i.stopPropagation();else if(Am(t,i),e&4&&-1<Z3.indexOf(t)){for(;r!==null;){var s=ll(r);if(s!==null&&Kv(s),s=$0(t,e,n,i),s===null&&Tf(t,e,i,Xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tf(t,e,i,null,n)}}var Xc=null;function $0(t,e,n,i){if(Xc=null,t=Qh(i),t=qr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function t_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V3()){case ep:return 1;case Xv:return 4;case Gc:case G3:return 16;case $v:return 536870912;default:return 16}default:return 16}}var fr=null,rp=null,Sc=null;function n_(){if(Sc)return Sc;var t,e=rp,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sc=r.slice(t,1<i?1-i:void 0)}function Mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Cm(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Cm,this.isPropagationStopped=Cm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Ln(Oo),al=Et({},Oo,{view:0,detail:0}),ny=Ln(al),gf,vf,jo,Ou=Et({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(gf=t.screenX-jo.screenX,vf=t.screenY-jo.screenY):vf=gf=0,jo=t),gf)},movementY:function(t){return"movementY"in t?t.movementY:vf}}),Pm=Ln(Ou),iy=Et({},Ou,{dataTransfer:0}),ry=Ln(iy),sy=Et({},al,{relatedTarget:0}),_f=Ln(sy),oy=Et({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=Ln(oy),ly=Et({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Ln(ly),uy=Et({},Oo,{data:0}),bm=Ln(uy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hy[t])?!!e[t]:!1}function op(){return py}var my=Et({},al,{key:function(t){if(t.key){var e=fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gy=Ln(my),vy=Et({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=Ln(vy),_y=Et({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),xy=Ln(_y),yy=Et({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=Ln(yy),My=Et({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=Ln(My),wy=[9,13,27,32],ap=Hi&&"CompositionEvent"in window,xa=null;Hi&&"documentMode"in document&&(xa=document.documentMode);var Ty=Hi&&"TextEvent"in window&&!xa,i_=Hi&&(!ap||xa&&8<xa&&11>=xa),Dm=" ",Im=!1;function r_(t,e){switch(t){case"keyup":return wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Ay(t,e){switch(t){case"compositionend":return s_(e);case"keypress":return e.which!==32?null:(Im=!0,Dm);case"textInput":return t=e.data,t===Dm&&Im?null:t;default:return null}}function Ry(t,e){if(js)return t==="compositionend"||!ap&&r_(t,e)?(t=n_(),Sc=rp=fr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i_&&e.locale!=="ko"?null:e.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cy[t.type]:e==="textarea"}function o_(t,e,n,i){Ov(i),e=$c(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ya=null,Ba=null;function Py(t){v_(t,0)}function zu(t){var e=qs(t);if(bv(e))return t}function by(t,e){if(t==="change")return e}var a_=!1;if(Hi){var xf;if(Hi){var yf="oninput"in document;if(!yf){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),yf=typeof Um.oninput=="function"}xf=yf}else xf=!1;a_=xf&&(!document.documentMode||9<document.documentMode)}function Fm(){ya&&(ya.detachEvent("onpropertychange",l_),Ba=ya=null)}function l_(t){if(t.propertyName==="value"&&zu(Ba)){var e=[];o_(e,Ba,t,Qh(t)),Hv(Py,e)}}function Ly(t,e,n){t==="focusin"?(Fm(),ya=e,Ba=n,ya.attachEvent("onpropertychange",l_)):t==="focusout"&&Fm()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Ba)}function Iy(t,e){if(t==="click")return zu(e)}function Ny(t,e){if(t==="input"||t==="change")return zu(e)}function Uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:Uy;function Ha(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!P0.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=Om(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function c_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?c_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u_(){for(var t=window,e=Bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bc(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fy(t){var e=u_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&c_(n.ownerDocument.documentElement,n)){if(i!==null&&lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zm(n,s);var o=zm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Oy=Hi&&"documentMode"in document&&11>=document.documentMode,Xs=null,q0=null,Sa=null,Y0=!1;function km(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Y0||Xs==null||Xs!==Bc(i)||(i=Xs,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Ha(Sa,i)||(Sa=i,i=$c(q0,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xs)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Sf={},f_={};Hi&&(f_=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function ku(t){if(Sf[t])return Sf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f_)return Sf[t]=e[n];return t}var d_=ku("animationend"),h_=ku("animationiteration"),p_=ku("animationstart"),m_=ku("transitionend"),g_=new Map,Bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){g_.set(t,e),gs(e,[t])}for(var Mf=0;Mf<Bm.length;Mf++){var Ef=Bm[Mf],zy=Ef.toLowerCase(),ky=Ef[0].toUpperCase()+Ef.slice(1);Pr(zy,"on"+ky)}Pr(d_,"onAnimationEnd");Pr(h_,"onAnimationIteration");Pr(p_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(m_,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Hm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,z3(i,e,void 0,t),t.currentTarget=null}function v_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hm(r,a,u),s=l}}}if(Vc)throw t=W0,Vc=!1,W0=null,t}function mt(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(__(e,t,2,!1),n.add(i))}function wf(t,e,n){var i=0;e&&(i|=4),__(n,t,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[Tl]){t[Tl]=!0,Tv.forEach(function(n){n!=="selectionchange"&&(By.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,wf("selectionchange",!1,e))}}function __(t,e,n,i){switch(t_(e)){case 1:var r=ey;break;case 4:r=ty;break;default:r=ip}n=r.bind(null,e,n,t),r=void 0,!G0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hv(function(){var u=s,c=Qh(n),d=[];e:{var f=g_.get(t);if(f!==void 0){var p=sp,m=t;switch(t){case"keypress":if(Mc(n)===0)break e;case"keydown":case"keyup":p=gy;break;case"focusin":m="focus",p=_f;break;case"focusout":m="blur",p=_f;break;case"beforeblur":case"afterblur":p=_f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xy;break;case d_:case h_:case p_:p=ay;break;case m_:p=Sy;break;case"scroll":p=ny;break;case"wheel":p=Ey;break;case"copy":case"cut":case"paste":p=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lm}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Fa(_,h),S!=null&&x.push(Ga(_,S,v)))),g)break;_=_.return}0<x.length&&(f=new p(f,m,null,n,c),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==H0&&(m=n.relatedTarget||n.fromElement)&&(qr(m)||m[Vi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?qr(m):null,m!==null&&(g=vs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(x=Pm,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Lm,S="onPointerLeave",h="onPointerEnter",_="pointer"),g=p==null?f:qs(p),v=m==null?f:qs(m),f=new x(S,_+"leave",p,n,c),f.target=g,f.relatedTarget=v,S=null,qr(c)===u&&(x=new x(h,_+"enter",m,n,c),x.target=v,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,h=m,_=0,v=x;v;v=ys(v))_++;for(v=0,S=h;S;S=ys(S))v++;for(;0<_-v;)x=ys(x),_--;for(;0<v-_;)h=ys(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=ys(x),h=ys(h)}x=null}else x=null;p!==null&&Vm(d,f,p,x,!1),m!==null&&g!==null&&Vm(d,g,m,x,!0)}}e:{if(f=u?qs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=by;else if(Nm(f))if(a_)P=Ny;else{P=Dy;var A=Ly}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Iy);if(P&&(P=P(t,u))){o_(d,P,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&F0(f,"number",f.value)}switch(A=u?qs(u):window,t){case"focusin":(Nm(A)||A.contentEditable==="true")&&(Xs=A,q0=u,Sa=null);break;case"focusout":Sa=q0=Xs=null;break;case"mousedown":Y0=!0;break;case"contextmenu":case"mouseup":case"dragend":Y0=!1,km(d,n,c);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":km(d,n,c)}var T;if(ap)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else js?r_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(i_&&n.locale!=="ko"&&(js||R!=="onCompositionStart"?R==="onCompositionEnd"&&js&&(T=n_()):(fr=c,rp="value"in fr?fr.value:fr.textContent,js=!0)),A=$c(u,R),0<A.length&&(R=new bm(R,t,null,n,c),d.push({event:R,listeners:A}),T?R.data=T:(T=s_(n),T!==null&&(R.data=T)))),(T=Ty?Ay(t,n):Ry(t,n))&&(u=$c(u,"onBeforeInput"),0<u.length&&(c=new bm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}v_(d,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Fa(n,s),l!=null&&o.unshift(Ga(n,l,a))):r||(l=Fa(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Vy,"")}function Al(t,e,n){if(e=Gm(e),Gm(t)!==e&&n)throw Error(se(425))}function qc(){}var K0=null,Z0=null;function J0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Q0=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(jy)}:Q0;function jy(t){setTimeout(function(){throw t})}function Af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ka(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),gi="__reactFiber$"+zo,Wa="__reactProps$"+zo,Vi="__reactContainer$"+zo,ed="__reactEvents$"+zo,Xy="__reactListeners$"+zo,$y="__reactHandles$"+zo;function qr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jm(t);t!==null;){if(n=t[gi])return n;t=jm(t)}return e}t=n,n=t.parentNode}return null}function ll(t){return t=t[gi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Bu(t){return t[Wa]||null}var td=[],Ys=-1;function br(t){return{current:t}}function vt(t){0>Ys||(t.current=td[Ys],td[Ys]=null,Ys--)}function dt(t,e){Ys++,td[Ys]=t.current,t.current=e}var Tr={},Qt=br(Tr),mn=br(!1),rs=Tr;function _o(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Yc(){vt(mn),vt(Qt)}function Xm(t,e,n){if(Qt.current!==Tr)throw Error(se(168));dt(Qt,e),dt(mn,n)}function x_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,L3(t)||"Unknown",r));return Et({},n,i)}function Kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,rs=Qt.current,dt(Qt,t),dt(mn,mn.current),!0}function $m(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=x_(t,e,rs),i.__reactInternalMemoizedMergedChildContext=t,vt(mn),vt(Qt),dt(Qt,t)):vt(mn),dt(mn,n)}var Di=null,Hu=!1,Rf=!1;function y_(t){Di===null?Di=[t]:Di.push(t)}function qy(t){Hu=!0,y_(t)}function Lr(){if(!Rf&&Di!==null){Rf=!0;var t=0,e=ct;try{var n=Di;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,Hu=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),jv(ep,Lr),r}finally{ct=e,Rf=!1}}return null}var Ks=[],Zs=0,Zc=null,Jc=0,Un=[],Fn=0,ss=null,Ni=1,Ui="";function Hr(t,e){Ks[Zs++]=Jc,Ks[Zs++]=Zc,Zc=t,Jc=e}function S_(t,e,n){Un[Fn++]=Ni,Un[Fn++]=Ui,Un[Fn++]=ss,ss=t;var i=Ni;t=Ui;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-ci(e)+r|n<<r|i,Ui=s+t}else Ni=1<<s|n<<r|i,Ui=t}function cp(t){t.return!==null&&(Hr(t,1),S_(t,1,0))}function up(t){for(;t===Zc;)Zc=Ks[--Zs],Ks[Zs]=null,Jc=Ks[--Zs],Ks[Zs]=null;for(;t===ss;)ss=Un[--Fn],Un[Fn]=null,Ui=Un[--Fn],Un[Fn]=null,Ni=Un[--Fn],Un[Fn]=null}var Rn=null,Tn=null,_t=!1,ii=null;function M_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Tn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Ni,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Tn=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(_t){var e=Tn;if(e){var n=e;if(!qm(t,e)){if(nd(t))throw Error(se(418));e=vr(n.nextSibling);var i=Rn;e&&qm(t,e)?M_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Rn=t)}}else{if(nd(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,Rn=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Rl(t){if(t!==Rn)return!1;if(!_t)return Ym(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!J0(t.type,t.memoizedProps)),e&&(e=Tn)){if(nd(t))throw E_(),Error(se(418));for(;e;)M_(t,e),e=vr(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Rn?vr(t.stateNode.nextSibling):null;return!0}function E_(){for(var t=Tn;t;)t=vr(t.nextSibling)}function xo(){Tn=Rn=null,_t=!1}function fp(t){ii===null?ii=[t]:ii.push(t)}var Yy=qi.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function w_(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Sr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,S){return _===null||_.tag!==6?(_=Nf(v,h.mode,S),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,S){var P=v.type;return P===Ws?c(h,_,v.props.children,S,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===or&&Km(P)===_.type)?(S=r(_,v.props),S.ref=Xo(h,_,v),S.return=h,S):(S=Pc(v.type,v.key,v.props,null,h.mode,S),S.ref=Xo(h,_,v),S.return=h,S)}function u(h,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Uf(v,h.mode,S),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function c(h,_,v,S,P){return _===null||_.tag!==7?(_=ns(v,h.mode,S,P),_.return=h,_):(_=r(_,v),_.return=h,_)}function d(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nf(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vl:return v=Pc(_.type,_.key,_.props,null,h.mode,v),v.ref=Xo(h,null,_),v.return=h,v;case Gs:return _=Uf(_,h.mode,v),_.return=h,_;case or:var S=_._init;return d(h,S(_._payload),v)}if(aa(_)||Ho(_))return _=ns(_,h.mode,v,null),_.return=h,_;Cl(h,_)}return null}function f(h,_,v,S){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:return v.key===P?l(h,_,v,S):null;case Gs:return v.key===P?u(h,_,v,S):null;case or:return P=v._init,f(h,_,P(v._payload),S)}if(aa(v)||Ho(v))return P!==null?null:c(h,_,v,S,null);Cl(h,v)}return null}function p(h,_,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(_,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vl:return h=h.get(S.key===null?v:S.key)||null,l(_,h,S,P);case Gs:return h=h.get(S.key===null?v:S.key)||null,u(_,h,S,P);case or:var A=S._init;return p(h,_,v,A(S._payload),P)}if(aa(S)||Ho(S))return h=h.get(v)||null,c(_,h,S,P,null);Cl(_,S)}return null}function m(h,_,v,S){for(var P=null,A=null,T=_,R=_=0,B=null;T!==null&&R<v.length;R++){T.index>R?(B=T,T=null):B=T.sibling;var y=f(h,T,v[R],S);if(y===null){T===null&&(T=B);break}t&&T&&y.alternate===null&&e(h,T),_=s(y,_,R),A===null?P=y:A.sibling=y,A=y,T=B}if(R===v.length)return n(h,T),_t&&Hr(h,R),P;if(T===null){for(;R<v.length;R++)T=d(h,v[R],S),T!==null&&(_=s(T,_,R),A===null?P=T:A.sibling=T,A=T);return _t&&Hr(h,R),P}for(T=i(h,T);R<v.length;R++)B=p(T,h,R,v[R],S),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?R:B.key),_=s(B,_,R),A===null?P=B:A.sibling=B,A=B);return t&&T.forEach(function(M){return e(h,M)}),_t&&Hr(h,R),P}function x(h,_,v,S){var P=Ho(v);if(typeof P!="function")throw Error(se(150));if(v=P.call(v),v==null)throw Error(se(151));for(var A=P=null,T=_,R=_=0,B=null,y=v.next();T!==null&&!y.done;R++,y=v.next()){T.index>R?(B=T,T=null):B=T.sibling;var M=f(h,T,y.value,S);if(M===null){T===null&&(T=B);break}t&&T&&M.alternate===null&&e(h,T),_=s(M,_,R),A===null?P=M:A.sibling=M,A=M,T=B}if(y.done)return n(h,T),_t&&Hr(h,R),P;if(T===null){for(;!y.done;R++,y=v.next())y=d(h,y.value,S),y!==null&&(_=s(y,_,R),A===null?P=y:A.sibling=y,A=y);return _t&&Hr(h,R),P}for(T=i(h,T);!y.done;R++,y=v.next())y=p(T,h,R,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?R:y.key),_=s(y,_,R),A===null?P=y:A.sibling=y,A=y);return t&&T.forEach(function(k){return e(h,k)}),_t&&Hr(h,R),P}function g(h,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:e:{for(var P=v.key,A=_;A!==null;){if(A.key===P){if(P=v.type,P===Ws){if(A.tag===7){n(h,A.sibling),_=r(A,v.props.children),_.return=h,h=_;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===or&&Km(P)===A.type){n(h,A.sibling),_=r(A,v.props),_.ref=Xo(h,A,v),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===Ws?(_=ns(v.props.children,h.mode,S,v.key),_.return=h,h=_):(S=Pc(v.type,v.key,v.props,null,h.mode,S),S.ref=Xo(h,_,v),S.return=h,h=S)}return o(h);case Gs:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Uf(v,h.mode,S),_.return=h,h=_}return o(h);case or:return A=v._init,g(h,_,A(v._payload),S)}if(aa(v))return m(h,_,v,S);if(Ho(v))return x(h,_,v,S);Cl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Nf(v,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return g}var yo=w_(!0),T_=w_(!1),Qc=br(null),eu=null,Js=null,dp=null;function hp(){dp=Js=eu=null}function pp(t){var e=Qc.current;vt(Qc),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){eu=t,dp=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(eu===null)throw Error(se(308));Js=t,eu.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Yr=null;function mp(t){Yr===null?Yr=[t]:Yr.push(t)}function A_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function Ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}function Zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(f=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Et({},d,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var cl={},Si=br(cl),ja=br(cl),Xa=br(cl);function Kr(t){if(t===cl)throw Error(se(174));return t}function vp(t,e){switch(dt(Xa,e),dt(ja,t),dt(Si,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:z0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=z0(e,t)}vt(Si),dt(Si,e)}function So(){vt(Si),vt(ja),vt(Xa)}function C_(t){Kr(Xa.current);var e=Kr(Si.current),n=z0(e,t.type);e!==n&&(dt(ja,t),dt(Si,n))}function _p(t){ja.current===t&&(vt(Si),vt(ja))}var yt=br(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function xp(){for(var t=0;t<Cf.length;t++)Cf[t]._workInProgressVersionPrimary=null;Cf.length=0}var wc=qi.ReactCurrentDispatcher,Pf=qi.ReactCurrentBatchConfig,os=0,Mt=null,It=null,zt=null,iu=!1,Ma=!1,$a=0,Ky=0;function Xt(){throw Error(se(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Sp(t,e,n,i,r,s){if(os=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wc.current=t===null||t.memoizedState===null?eS:tS,t=n(i,r),Ma){s=0;do{if(Ma=!1,$a=0,25<=s)throw Error(se(301));s+=1,zt=It=null,e.updateQueue=null,wc.current=nS,t=n(i,r)}while(Ma)}if(wc.current=ru,e=It!==null&&It.next!==null,os=0,zt=It=Mt=null,iu=!1,e)throw Error(se(300));return t}function Mp(){var t=$a!==0;return $a=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function $n(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(se(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function qa(t,e){return typeof e=="function"?e(t):e}function bf(t){var e=$n(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=c,as|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,as|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=$n(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function P_(){}function b_(t,e){var n=Mt,i=$n(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Ep(I_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,D_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));os&30||L_(n,e,r)}return r}function L_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D_(t,e,n,i){e.value=n,e.getSnapshot=i,N_(e)&&U_(t)}function I_(t,e,n){return n(function(){N_(e)&&U_(t)})}function N_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function U_(t){var e=Gi(t,1);e!==null&&ui(e,t,1,-1)}function Qm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Qy.bind(null,Mt,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function F_(){return $n().memoizedState}function Tc(t,e,n,i){var r=hi();Mt.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function Vu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&yp(i,o.deps)){r.memoizedState=Ya(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function eg(t,e){return Tc(8390656,8,t,e)}function Ep(t,e){return Vu(2048,8,t,e)}function O_(t,e){return Vu(4,2,t,e)}function z_(t,e){return Vu(4,4,t,e)}function k_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B_(t,e,n){return n=n!=null?n.concat([t]):null,Vu(4,4,k_.bind(null,e,t),n)}function wp(){}function H_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function V_(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function G_(t,e,n){return os&21?(fi(n,e)||(n=qv(),Mt.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function Zy(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=Pf.transition;Pf.transition={};try{t(!1),e()}finally{ct=n,Pf.transition=i}}function W_(){return $n().memoizedState}function Jy(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))X_(e,n);else if(n=A_(t,e,n,i),n!==null){var r=on();ui(n,t,i,r),$_(n,e,i)}}function Qy(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))X_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=A_(t,e,r,i),n!==null&&(r=on(),ui(n,t,i,r),$_(n,e,i))}}function j_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function X_(t,e){Ma=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}var ru={readContext:Xn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},eS={readContext:Xn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,k_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Jy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:wp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=Zy.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=hi();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));os&30||L_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,eg(I_.bind(null,i,s,t),[t]),i.flags|=2048,Ya(9,D_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Bt.identifierPrefix;if(_t){var n=Ui,i=Ni;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tS={readContext:Xn,useCallback:H_,useContext:Xn,useEffect:Ep,useImperativeHandle:B_,useInsertionEffect:O_,useLayoutEffect:z_,useMemo:V_,useReducer:bf,useRef:F_,useState:function(){return bf(qa)},useDebugValue:wp,useDeferredValue:function(t){var e=$n();return G_(e,It.memoizedState,t)},useTransition:function(){var t=bf(qa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:P_,useSyncExternalStore:b_,useId:W_,unstable_isNewReconciler:!1},nS={readContext:Xn,useCallback:H_,useContext:Xn,useEffect:Ep,useImperativeHandle:B_,useInsertionEffect:O_,useLayoutEffect:z_,useMemo:V_,useReducer:Lf,useRef:F_,useState:function(){return Lf(qa)},useDebugValue:wp,useDeferredValue:function(t){var e=$n();return It===null?e.memoizedState=t:G_(e,It.memoizedState,t)},useTransition:function(){var t=Lf(qa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:P_,useSyncExternalStore:b_,useId:W_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=yr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ui(e,t,r,i),Ec(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=yr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(ui(e,t,r,i),Ec(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=yr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(ui(e,t,i,n),Ec(e,t,i))}};function tg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,i)||!Ha(r,s):!0}function q_(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=gn(e)?rs:Qt.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=gn(e)?rs:Qt.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gu.enqueueReplaceState(r,r.state,null),tu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=b3(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function Y_(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ou||(ou=!0,vd=i),ad(t,e)},n}function K_(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ig(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vS.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var rS=qi.ReactCurrentOwner,pn=!1;function nn(t,e,n,i){e.child=t===null?T_(e,null,n,i):yo(e,t.child,n,i)}function og(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=Sp(t,e,n,i,s,r),n=Mp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&n&&cp(e),e.flags|=1,nn(t,e,i,r),e.child)}function ag(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z_(t,e,s,i,r)):(t=Pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Z_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ha(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return ld(t,e,n,i,r)}function J_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(eo,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(eo,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(eo,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(eo,wn),wn|=i;return nn(t,e,r,n),e.child}function Q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var s=gn(n)?rs:Qt.current;return s=_o(e,s),uo(e,r),n=Sp(t,e,n,i,s,r),i=Mp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&i&&cp(e),e.flags|=1,nn(t,e,n,r),e.child)}function lg(t,e,n,i,r){if(gn(n)){var s=!0;Kc(e)}else s=!1;if(uo(e,r),e.stateNode===null)Ac(t,e),q_(e,n,i),od(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xn(u):(u=gn(n)?rs:Qt.current,u=_o(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ng(e,o,i,u),ar=!1;var f=e.memoizedState;o.state=f,tu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||ar?(typeof c=="function"&&(sd(e,n,c,i),l=e.memoizedState),(a=ar||tg(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,R_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=gn(n)?rs:Qt.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ng(e,o,i,l),ar=!1,f=e.memoizedState,o.state=f,tu(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||mn.current||ar?(typeof p=="function"&&(sd(e,n,p,i),m=e.memoizedState),(u=ar||tg(e,n,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,s,r)}function cd(t,e,n,i,r,s){Q_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$m(e,n,!1),Wi(t,e,s);i=e.stateNode,rS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&$m(e,n,!0),e.child}function e2(t){var e=t.stateNode;e.pendingContext?Xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xm(t,e.context,!1),vp(t,e.containerInfo)}function cg(t,e,n,i,r){return xo(),fp(r),e.flags|=256,nn(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function t2(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=ud,t):Tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tp(t,e){return e=Xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pl(t,e,n,i){return i!==null&&fp(i),yo(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Df(Error(se(422))),Pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xu({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=fd(o),e.memoizedState=ud,s);if(!(e.mode&1))return Pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Df(s,i,void 0),Pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),ui(i,t,r,-1))}return Lp(),i=Df(Error(se(421))),Pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=vr(r.nextSibling),Rn=e,_t=!0,ii=null,t!==null&&(Un[Fn++]=Ni,Un[Fn++]=Ui,Un[Fn++]=ss,Ni=t.id,Ui=t.overflow,ss=e),e=Tp(e,i.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function If(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function n2(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oS(t,e,n){switch(e.tag){case 3:e2(e),xo();break;case 5:C_(e);break;case 1:gn(e.type)&&Kc(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Qc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?t2(t,e,n):(dt(yt,yt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return n2(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,J_(t,e,n)}return Wi(t,e,n)}var i2,dd,r2,s2;i2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};r2=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(Si.current);var s=null;switch(n){case"input":r=N0(t,r),i=N0(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=O0(t,r),i=O0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qc)}k0(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s2=function(t,e,n,i){n!==i&&(e.flags|=4)};function $o(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aS(t,e,n){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return gn(e.type)&&Yc(),$t(e),null;case 3:return i=e.stateNode,So(),vt(mn),vt(Qt),xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(yd(ii),ii=null))),dd(t,e),$t(e),null;case 5:_p(e);var r=Kr(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)r2(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return $t(e),null}if(t=Kr(Si.current),Rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)mt(ca[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":xm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Sm(i,s),mt("invalid",i)}k0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,t),r=["children",""+a]):Na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":_l(i),ym(i,s,!0);break;case"textarea":_l(i),Mm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[Wa]=i,i2(t,e,!1,!1),e.stateNode=t;e:{switch(o=B0(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)mt(ca[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":xm(t,i),r=N0(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Sm(t,i),r=O0(t,i),mt("invalid",t);break;default:r=i}k0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Yh(t,s,l,o))}switch(n){case"input":_l(t),ym(t,i,!1);break;case"textarea":_l(t),Mm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)s2(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Kr(Xa.current),Kr(Si.current),Rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return $t(e),null;case 13:if(vt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))E_(),xo(),e.flags|=98560,s=!1;else if(s=Rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[gi]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else ii!==null&&(yd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):Lp())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return So(),dd(t,e),t===null&&Va(e.stateNode.containerInfo),$t(e),null;case 10:return pp(e.type._context),$t(e),null;case 17:return gn(e.type)&&Yc(),$t(e),null;case 19:if(vt(yt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$o(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,$o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Eo&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304)}else{if(!i)if(t=nu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return $t(e),null}else 2*Rt()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function lS(t,e){switch(up(e),e.tag){case 1:return gn(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),vt(mn),vt(Qt),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(vt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(yt),null;case 4:return So(),null;case 10:return pp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var bl=!1,Zt=!1,cS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var fg=!1;function uS(t,e){if(K0=jc,t=u_(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Z0={focusedElem:t,selectionRange:n},jc=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return m=fg,fg=!1,m}function Ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,n,s)}r=r.next}while(r!==i)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o2(t){var e=t.alternate;e!==null&&(t.alternate=null,o2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[Wa],delete e[ed],delete e[Xy],delete e[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a2(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qc));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var Vt=null,ni=!1;function Zi(t,e,n){for(n=n.child;n!==null;)l2(t,e,n),n=n.sibling}function l2(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:Zt||Qs(n,e);case 6:var i=Vt,r=ni;Vt=null,Zi(t,e,n),Vt=i,ni=r,Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ni?(t=Vt,n=n.stateNode,t.nodeType===8?Af(t.parentNode,n):t.nodeType===1&&Af(t,n),ka(t)):Af(Vt,n.stateNode));break;case 4:i=Vt,r=ni,Vt=n.stateNode.containerInfo,ni=!0,Zi(t,e,n),Vt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hd(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!Zt&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Zi(t,e,n),Zt=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cS),e.forEach(function(i){var r=xS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ni=!1;break e;case 3:Vt=a.stateNode.containerInfo,ni=!0;break e;case 4:Vt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Vt===null)throw Error(se(160));l2(s,o,r),Vt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c2(e,t),e=e.sibling}function c2(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),di(t),i&4){try{Ea(3,t,t.return),Wu(3,t)}catch(x){Tt(t,t.return,x)}try{Ea(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Kn(e,t),di(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if(Kn(e,t),di(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{Ua(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lv(r,s),B0(a,o);var u=B0(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Fv(r,d):c==="dangerouslySetInnerHTML"?Nv(r,d):c==="children"?Ua(r,d):Yh(r,c,d,u)}switch(a){case"input":U0(r,s);break;case"textarea":Dv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Kn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Kn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Kn(e,t),di(t);break;case 13:Kn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cp=Rt())),i&4&&hg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,Kn(e,t),Zt=u):Kn(e,t),di(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(d=ve=c;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ea(4,f,f.return);break;case 1:Qs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Qs(f,f.return);break;case 22:if(f.memoizedState!==null){mg(d);continue}}p!==null?(p.return=f,ve=p):mg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Uv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),di(t),i&4&&hg(t);break;case 21:break;default:Kn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a2(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ua(r,""),i.flags&=-33);var s=dg(t);gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dg(t);md(t,a,o);break;default:throw Error(se(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fS(t,e,n){ve=t,u2(t)}function u2(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=bl;var u=Zt;if(bl=o,(Zt=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?gg(r):l!==null?(l.return=o,ve=l):gg(r);for(;s!==null;)ve=s,u2(s),s=s.sibling;ve=r,bl=a,Zt=u}pg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):pg(t)}}function pg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Zt||e.flags&512&&pd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function mg(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function gg(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{pd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{pd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var dS=Math.ceil,su=qi.ReactCurrentDispatcher,Ap=qi.ReactCurrentOwner,Wn=qi.ReactCurrentBatchConfig,Je=0,Bt=null,Lt=null,Wt=0,wn=0,eo=br(0),Nt=0,Ka=null,as=0,ju=0,Rp=0,wa=null,hn=null,Cp=0,Eo=1/0,Li=null,ou=!1,vd=null,xr=null,Ll=!1,dr=null,au=0,Ta=0,_d=null,Rc=-1,Cc=0;function on(){return Je&6?Rt():Rc!==-1?Rc:Rc=Rt()}function yr(t){return t.mode&1?Je&2&&Wt!==0?Wt&-Wt:Yy.transition!==null?(Cc===0&&(Cc=qv()),Cc):(t=ct,t!==0||(t=window.event,t=t===void 0?16:t_(t.type)),t):1}function ui(t,e,n,i){if(50<Ta)throw Ta=0,_d=null,Error(se(185));ol(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(ju|=n),Nt===4&&cr(t,Wt)),vn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Eo=Rt()+500,Hu&&Lr()))}function vn(t,e){var n=t.callbackNode;Y3(t,e);var i=Wc(t,t===Bt?Wt:0);if(i===0)n!==null&&Tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tm(n),e===1)t.tag===0?qy(vg.bind(null,t)):y_(vg.bind(null,t)),Wy(function(){!(Je&6)&&Lr()}),n=null;else{switch(Yv(i)){case 1:n=ep;break;case 4:n=Xv;break;case 16:n=Gc;break;case 536870912:n=$v;break;default:n=Gc}n=_2(n,f2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f2(t,e){if(Rc=-1,Cc=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Wc(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lu(t,i);else{e=i;var r=Je;Je|=2;var s=h2();(Bt!==t||Wt!==e)&&(Li=null,Eo=Rt()+500,ts(t,e));do try{mS();break}catch(a){d2(t,a)}while(!0);hp(),su.current=s,Je=r,Lt!==null?e=0:(Bt=null,Wt=0,e=Nt)}if(e!==0){if(e===2&&(r=j0(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Ka,ts(t,0),cr(t,i),vn(t,Rt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hS(r)&&(e=lu(t,i),e===2&&(s=j0(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=Ka,ts(t,0),cr(t,i),vn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Vr(t,hn,Li);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=Cp+500-Rt(),10<e)){if(Wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Q0(Vr.bind(null,t,hn,Li),e);break}Vr(t,hn,Li);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dS(i/1960))-i,10<i){t.timeoutHandle=Q0(Vr.bind(null,t,hn,Li),i);break}Vr(t,hn,Li);break;case 5:Vr(t,hn,Li);break;default:throw Error(se(329))}}}return vn(t,Rt()),t.callbackNode===n?f2.bind(null,t):null}function xd(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=lu(t,e),t!==2&&(e=hn,hn=n,e!==null&&yd(e)),t}function yd(t){hn===null?hn=t:hn.push.apply(hn,t)}function hS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Rp,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function vg(t){if(Je&6)throw Error(se(327));fo();var e=Wc(t,0);if(!(e&1))return vn(t,Rt()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var i=j0(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Ka,ts(t,0),cr(t,e),vn(t,Rt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,hn,Li),vn(t,Rt()),null}function Pp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Eo=Rt()+500,Hu&&Lr())}}function ls(t){dr!==null&&dr.tag===0&&!(Je&6)&&fo();var e=Je;Je|=1;var n=Wn.transition,i=ct;try{if(Wn.transition=null,ct=1,t)return t()}finally{ct=i,Wn.transition=n,Je=e,!(Je&6)&&Lr()}}function bp(){wn=eo.current,vt(eo)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gy(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yc();break;case 3:So(),vt(mn),vt(Qt),xp();break;case 5:_p(i);break;case 4:So();break;case 13:vt(yt);break;case 19:vt(yt);break;case 10:pp(i.type._context);break;case 22:case 23:bp()}n=n.return}if(Bt=t,Lt=t=Sr(t.current,null),Wt=wn=e,Nt=0,Ka=null,Rp=ju=as=0,hn=wa=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function d2(t,e){do{var n=Lt;try{if(hp(),wc.current=ru,iu){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(os=0,zt=It=Mt=null,Ma=!1,$a=0,Ap.current=null,n===null||n.return===null){Nt=1,Ka=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=rg(o);if(p!==null){p.flags&=-257,sg(p,o,a,s,e),p.mode&1&&ig(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){ig(s,u,e),Lp();break e}l=Error(se(426))}}else if(_t&&a.mode&1){var g=rg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),sg(g,o,a,s,e),fp(Mo(l,a));break e}}s=l=Mo(l,a),Nt!==4&&(Nt=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Y_(s,l,e);Zm(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xr===null||!xr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=K_(s,a,e);Zm(s,S);break e}}s=s.return}while(s!==null)}m2(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function h2(){var t=su.current;return su.current=ru,t===null?ru:t}function Lp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Bt===null||!(as&268435455)&&!(ju&268435455)||cr(Bt,Wt)}function lu(t,e){var n=Je;Je|=2;var i=h2();(Bt!==t||Wt!==e)&&(Li=null,ts(t,e));do try{pS();break}catch(r){d2(t,r)}while(!0);if(hp(),Je=n,su.current=i,Lt!==null)throw Error(se(261));return Bt=null,Wt=0,Nt}function pS(){for(;Lt!==null;)p2(Lt)}function mS(){for(;Lt!==null&&!B3();)p2(Lt)}function p2(t){var e=v2(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?m2(t):Lt=e,Ap.current=null}function m2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Lt=null;return}}else if(n=aS(n,e,wn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Vr(t,e,n){var i=ct,r=Wn.transition;try{Wn.transition=null,ct=1,gS(t,e,n,i)}finally{Wn.transition=r,ct=i}return null}function gS(t,e,n,i){do fo();while(dr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K3(t,s),t===Bt&&(Lt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,_2(Gc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=ct;ct=1;var a=Je;Je|=4,Ap.current=null,uS(t,n),c2(n,t),Fy(Z0),jc=!!K0,Z0=K0=null,t.current=n,fS(n),H3(),Je=a,ct=o,Wn.transition=s}else t.current=n;if(Ll&&(Ll=!1,dr=t,au=r),s=t.pendingLanes,s===0&&(xr=null),W3(n.stateNode),vn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ou)throw ou=!1,t=vd,vd=null,t;return au&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===_d?Ta++:(Ta=0,_d=t):Ta=0,Lr(),null}function fo(){if(dr!==null){var t=Yv(au),e=Wn.transition,n=ct;try{if(Wn.transition=null,ct=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,au=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:Ea(8,c,s)}var d=c.child;if(d!==null)d.return=c,ve=d;else for(;ve!==null;){c=ve;var f=c.sibling,p=c.return;if(o2(c),c===u){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){o=ve;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ve=v;else e:for(o=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wu(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(Je=r,Lr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Fu,t)}catch{}i=!0}return i}finally{ct=n,Wn.transition=e}}return!1}function _g(t,e,n){e=Mo(n,e),e=Y_(t,e,1),t=_r(t,e,1),e=on(),t!==null&&(ol(t,1,e),vn(t,e))}function Tt(t,e,n){if(t.tag===3)_g(t,t,n);else for(;e!==null;){if(e.tag===3){_g(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Mo(n,t),t=K_(e,t,1),e=_r(e,t,1),t=on(),e!==null&&(ol(e,1,t),vn(e,t));break}}e=e.return}}function vS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>Rt()-Cp?ts(t,0):Rp|=n),vn(t,e)}function g2(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=on();t=Gi(t,e),t!==null&&(ol(t,e,n),vn(t,n))}function _S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g2(t,n)}function xS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),g2(t,n)}var v2;v2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,oS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,_t&&e.flags&1048576&&S_(e,Jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ac(t,e),t=e.pendingProps;var r=_o(e,Qt.current);uo(e,n),r=Sp(null,e,i,t,r,n);var s=Mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=Gu,e.stateNode=r,r._reactInternals=e,od(e,i,t,n),e=cd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&cp(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ac(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SS(i),t=ti(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=lg(null,e,i,t,n);break e;case 11:e=og(null,e,i,t,n);break e;case 14:e=ag(null,e,i,ti(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),lg(t,e,i,r,n);case 3:e:{if(e2(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,R_(t,e),tu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(se(423)),e),e=cg(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(se(424)),e),e=cg(t,e,i,n,r);break e}else for(Tn=vr(e.stateNode.containerInfo.firstChild),Rn=e,_t=!0,ii=null,n=T_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Wi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return C_(e),t===null&&id(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,J0(i,r)?o=null:s!==null&&J0(i,s)&&(e.flags|=32),Q_(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&id(e),null;case 13:return t2(t,e,n);case 4:return vp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),og(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Qc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!mn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=Xn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),ag(t,e,i,r,n);case 15:return Z_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ac(t,e),e.tag=1,gn(i)?(t=!0,Kc(e)):t=!1,uo(e,n),q_(e,i,r),od(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return n2(t,e,n);case 22:return J_(t,e,n)}throw Error(se(156,e.tag))};function _2(t,e){return jv(t,e)}function yS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new yS(t,e,n,i)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SS(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zh)return 11;if(t===Jh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ws:return ns(n.children,r,s,e);case Kh:o=8,r|=8;break;case b0:return t=Bn(12,n,e,r|2),t.elementType=b0,t.lanes=s,t;case L0:return t=Bn(13,n,e,r),t.elementType=L0,t.lanes=s,t;case D0:return t=Bn(19,n,e,r),t.elementType=D0,t.lanes=s,t;case Cv:return Xu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Av:o=10;break e;case Rv:o=9;break e;case Zh:o=11;break e;case Jh:o=14;break e;case or:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Xu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=Cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Nf(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Uf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,i,r,s,o,a,l){return t=new MS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function x2(t){if(!t)return Tr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(gn(n))return x_(t,n,e)}return e}function y2(t,e,n,i,r,s,o,a,l){return t=Ip(n,i,!0,t,r,s,o,a,l),t.context=x2(null),n=t.current,i=on(),r=yr(n),s=ki(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,ol(t,r,i),vn(t,i),t}function $u(t,e,n,i){var r=e.current,s=on(),o=yr(r);return n=x2(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(ui(t,r,o,s),Ec(t,r,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){xg(t,e),(t=t.alternate)&&xg(t,e)}function wS(){return null}var S2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}qu.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));$u(t,e,null,null)};qu.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){$u(null,t,null,null)}),e[Vi]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&e_(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yg(){}function TS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cu(o);s.call(u)}}var o=y2(e,i,t,0,null,!1,!1,"",yg);return t._reactRootContainer=o,t[Vi]=o.current,Va(t.nodeType===8?t.parentNode:t),ls(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=cu(l);a.call(u)}}var l=Ip(t,0,!1,null,null,!1,!1,"",yg);return t._reactRootContainer=l,t[Vi]=l.current,Va(t.nodeType===8?t.parentNode:t),ls(function(){$u(e,l,n,i)}),l}function Ku(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}$u(e,o,t,r)}else o=TS(n,e,t,r,i);return cu(o)}Kv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(tp(e,n|1),vn(e,Rt()),!(Je&6)&&(Eo=Rt()+500,Lr()))}break;case 13:ls(function(){var i=Gi(t,1);if(i!==null){var r=on();ui(i,t,1,r)}}),Np(t,1)}};np=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=on();ui(e,t,134217728,n)}Np(t,134217728)}};Zv=function(t){if(t.tag===13){var e=yr(t),n=Gi(t,e);if(n!==null){var i=on();ui(n,t,e,i)}Np(t,e)}};Jv=function(){return ct};Qv=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};V0=function(t,e,n){switch(e){case"input":if(U0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bu(i);if(!r)throw Error(se(90));bv(i),U0(i,r)}}}break;case"textarea":Dv(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};kv=Pp;Bv=ls;var AS={usingClientEntryPoint:!1,Events:[ll,qs,Bu,Ov,zv,Pp]},qo={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RS={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gv(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{Fu=Dl.inject(RS),yi=Dl}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(se(200));return ES(t,e,null,n)};bn.createRoot=function(t,e){if(!Fp(t))throw Error(se(299));var n=!1,i="",r=S2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,Va(t.nodeType===8?t.parentNode:t),new Up(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Gv(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return ls(t)};bn.hydrate=function(t,e,n){if(!Yu(e))throw Error(se(200));return Ku(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=S2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y2(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,Va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new qu(e)};bn.render=function(t,e,n){if(!Yu(e))throw Error(se(200));return Ku(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(se(40));return t._reactRootContainer?(ls(function(){Ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};bn.unstable_batchedUpdates=Pp;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Ku(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function M2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M2)}catch(t){console.error(t)}}M2(),Mv.exports=bn;var CS=Mv.exports,Sg=CS;C0.createRoot=Sg.createRoot,C0.hydrateRoot=Sg.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="169",PS=0,Mg=1,bS=2,E2=1,LS=2,Ci=3,Ar=0,an=1,vi=2,Mr=0,ho=1,Eg=2,wg=3,Tg=4,DS=5,jr=100,IS=101,NS=102,US=103,FS=104,OS=200,zS=201,kS=202,BS=203,Sd=204,Md=205,HS=206,VS=207,GS=208,WS=209,jS=210,XS=211,$S=212,qS=213,YS=214,Ed=0,wd=1,Td=2,wo=3,Ad=4,Rd=5,Cd=6,Pd=7,w2=0,KS=1,ZS=2,Er=0,JS=1,QS=2,eM=3,tM=4,nM=5,iM=6,rM=7,T2=300,To=301,Ao=302,bd=303,Ld=304,Zu=306,Dd=1e3,Zr=1001,Id=1002,Hn=1003,sM=1004,Il=1005,ri=1006,Ff=1007,Jr=1008,ji=1009,A2=1010,R2=1011,Za=1012,zp=1013,cs=1014,Fi=1015,ul=1016,kp=1017,Bp=1018,Ro=1020,C2=35902,P2=1021,b2=1022,oi=1023,L2=1024,D2=1025,po=1026,Co=1027,I2=1028,Hp=1029,N2=1030,Vp=1031,Gp=1033,bc=33776,Lc=33777,Dc=33778,Ic=33779,Nd=35840,Ud=35841,Fd=35842,Od=35843,zd=36196,kd=37492,Bd=37496,Hd=37808,Vd=37809,Gd=37810,Wd=37811,jd=37812,Xd=37813,$d=37814,qd=37815,Yd=37816,Kd=37817,Zd=37818,Jd=37819,Qd=37820,eh=37821,Nc=36492,th=36494,nh=36495,U2=36283,ih=36284,rh=36285,sh=36286,oM=3200,aM=3201,lM=0,cM=1,ur="",pi="srgb",Dr="srgb-linear",Wp="display-p3",Ju="display-p3-linear",uu="linear",gt="srgb",fu="rec709",du="p3",Ss=7680,Ag=519,uM=512,fM=513,dM=514,F2=515,hM=516,pM=517,mM=518,gM=519,oh=35044,Rg="300 es",Oi=2e3,hu=2001;class ko{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cg=1234567;const Aa=Math.PI/180,Ja=180/Math.PI;function Bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function jp(t,e){return(t%e+e)%e}function vM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function _M(t,e,n){return t!==e?(n-t)/(e-t):0}function Ra(t,e,n){return(1-n)*t+n*e}function xM(t,e,n,i){return Ra(t,e,1-Math.exp(-n*i))}function yM(t,e=1){return e-Math.abs(jp(t,e*2)-e)}function SM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function MM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function EM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function wM(t,e){return t+Math.random()*(e-t)}function TM(t){return t*(.5-Math.random())}function AM(t){t!==void 0&&(Cg=t);let e=Cg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RM(t){return t*Aa}function CM(t){return t*Ja}function PM(t){return(t&t-1)===0&&t!==0}function bM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function LM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function DM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*m,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*m,a*u);break;case"ZYZ":t.set(l*m,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Pg={DEG2RAD:Aa,RAD2DEG:Ja,generateUUID:Bi,clamp:rn,euclideanModulo:jp,mapLinear:vM,inverseLerp:_M,lerp:Ra,damp:xM,pingpong:yM,smoothstep:SM,smootherstep:MM,randInt:EM,randFloat:wM,randFloatSpread:TM,seededRandom:AM,degToRad:RM,radToDeg:CM,isPowerOfTwo:PM,ceilPowerOfTwo:bM,floorPowerOfTwo:LM,setQuaternionFromProperEuler:DM,normalize:at,denormalize:si};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],m=i[8],x=r[0],g=r[3],h=r[6],_=r[1],v=r[4],S=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*g+a*v+l*A,s[6]=o*h+a*S+l*T,s[1]=u*x+c*_+d*P,s[4]=u*g+c*v+d*A,s[7]=u*h+c*S+d*T,s[2]=f*x+p*_+m*P,s[5]=f*g+p*v+m*A,s[8]=f*h+p*S+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Of.makeScale(e,n)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,n){return this.premultiply(Of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new We;function O2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IM(){const t=pu("canvas");return t.style.display="block",t}const bg={};function Uc(t){t in bg||(bg[t]=!0,console.warn(t))}function NM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function UM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function FM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[Dr]:{transfer:uu,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[pi]:{transfer:gt,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ju]:{transfer:uu,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Lg)},[Wp]:{transfer:gt,primaries:du,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Lg).convertLinearToSRGB()}},OM=new Set([Dr,Ju]),st={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!OM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Yo[e].toReference,r=Yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Yo[t].primaries},getTransfer:function(t){return t===ur?uu:Yo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Yo[e].luminanceCoefficients)}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class zM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=pu("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kM=0;class z2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;class ln extends ko{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Zr,r=Zr,s=ri,o=Jr,a=oi,l=ji,u=ln.DEFAULT_ANISOTROPY,c=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Bi(),this.name="",this.source=new z2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=T2;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,P=(h+1)/2,A=(c+f)/4,T=(d+x)/4,R=(m+g)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-x)/_,this.z=(f-c)/_,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HM extends ko{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new z2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends HM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k2 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(d!==x||l!==f||u!==p||c!==m){let g=1-a;const h=l*f+u*p+c*m+d*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,h*_);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const S=a*_;if(l=l*g+f*S,u=u*g+p*S,c=c*g+m*S,d=d*g+x*S,g===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=P,u*=P,c*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+c*d+l*p-u*f,e[n+1]=l*m+c*f+u*d-a*p,e[n+2]=u*m+c*p+a*f-l*d,e[n+3]=c*m-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"YXZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"ZXY":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"ZYX":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"YZX":this._x=f*c*d+u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d-f*p*m;break;case"XZY":this._x=f*c*d-u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new O,Ig=new fs;class fl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ul.subVectors(this.max,Ko),Es.subVectors(e.a,Ko),ws.subVectors(e.b,Ko),Ts.subVectors(e.c,Ko),Ji.subVectors(ws,Es),Qi.subVectors(Ts,ws),Ur.subVectors(Es,Ts);let n=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Ur.z,Ur.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Ur.z,0,-Ur.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Ur.y,Ur.x,0];return!Hf(n,Es,ws,Ts,Ul)||(n=[1,0,0,0,1,0,0,0,1],!Hf(n,Es,ws,Ts,Ul))?!1:(Fl.crossVectors(Ji,Qi),n=[Fl.x,Fl.y,Fl.z],Hf(n,Es,ws,Ts,Ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,Nl=new fl,Es=new O,ws=new O,Ts=new O,Ji=new O,Qi=new O,Ur=new O,Ko=new O,Ul=new O,Fl=new O,Fr=new O;function Hf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),u=n.dot(Fr),c=i.dot(Fr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const GM=new fl,Zo=new O,Vf=new O;class dl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Vf)),this.expandByPoint(Zo.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new O,Gf=new O,Ol=new O,er=new O,Wf=new O,zl=new O,jf=new O;class Qu{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),Ol.copy(n).sub(e).normalize(),er.copy(this.origin).sub(Gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ol),a=er.dot(this.direction),l=-er.dot(Ol),u=er.lengthSq(),c=Math.abs(1-o*o);let d,f,p,m;if(c>0)if(d=o*l-a,f=o*a-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const x=1/c;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gf).addScaledVector(Ol,f),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Wf.subVectors(n,e),zl.subVectors(i,e),jf.crossVectors(Wf,zl);let o=this.direction.dot(jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(er,zl));if(l<0)return null;const u=a*this.direction.dot(Wf.cross(er));if(u<0||l+u>o)return null;const c=-a*er.dot(jf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,u,c,d,f,p,m,x,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,x,g)}set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,m=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+m*u,n[5]=f-x*u,n[9]=-a*l,n[2]=x-f*u,n[6]=m+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,m=u*c,x=u*d;n[0]=f+x*a,n[4]=m*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-m,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,m=u*c,x=u*d;n[0]=f-x*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*c,n[9]=x-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,m=a*c,x=a*d;n[0]=l*c,n[4]=m*u-p,n[8]=f*u+x,n[1]=l*d,n[5]=x*u+f,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,m=a*l,x=a*u;n[0]=l*c,n[4]=x-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+m,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*u,m=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+x,n[5]=o*c,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*c,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WM,e,jM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),tr.crossVectors(i,Mn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),tr.crossVectors(i,Mn)),tr.normalize(),kl.crossVectors(Mn,tr),r[0]=tr.x,r[4]=kl.x,r[8]=Mn.x,r[1]=tr.y,r[5]=kl.y,r[9]=Mn.y,r[2]=tr.z,r[6]=kl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],m=i[2],x=i[6],g=i[10],h=i[14],_=i[3],v=i[7],S=i[11],P=i[15],A=r[0],T=r[4],R=r[8],B=r[12],y=r[1],M=r[5],k=r[9],H=r[13],j=r[2],I=r[6],z=r[10],Y=r[14],D=r[3],Z=r[7],$=r[11],ie=r[15];return s[0]=o*A+a*y+l*j+u*D,s[4]=o*T+a*M+l*I+u*Z,s[8]=o*R+a*k+l*z+u*$,s[12]=o*B+a*H+l*Y+u*ie,s[1]=c*A+d*y+f*j+p*D,s[5]=c*T+d*M+f*I+p*Z,s[9]=c*R+d*k+f*z+p*$,s[13]=c*B+d*H+f*Y+p*ie,s[2]=m*A+x*y+g*j+h*D,s[6]=m*T+x*M+g*I+h*Z,s[10]=m*R+x*k+g*z+h*$,s[14]=m*B+x*H+g*Y+h*ie,s[3]=_*A+v*y+S*j+P*D,s[7]=_*T+v*M+S*I+P*Z,s[11]=_*R+v*k+S*z+P*$,s[15]=_*B+v*H+S*Y+P*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],h=e[15];return m*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+x*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+g*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],h=e[15],_=d*g*u-x*f*u+x*l*p-a*g*p-d*l*h+a*f*h,v=m*f*u-c*g*u-m*l*p+o*g*p+c*l*h-o*f*h,S=c*x*u-m*d*u+m*a*p-o*x*p-c*a*h+o*d*h,P=m*d*l-c*x*l-m*a*f+o*x*f+c*a*g-o*d*g,A=n*_+i*v+r*S+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*f*s-d*g*s-x*r*p+i*g*p+d*r*h-i*f*h)*T,e[2]=(a*g*s-x*l*s+x*r*u-i*g*u-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*g*s-m*f*s+m*r*p-n*g*p-c*r*h+n*f*h)*T,e[6]=(m*l*s-o*g*s-m*r*u+n*g*u+o*r*h-n*l*h)*T,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(m*d*s-c*x*s-m*i*p+n*x*p+c*i*h-n*d*h)*T,e[10]=(o*x*s-m*a*s+m*i*u-n*x*u-o*i*h+n*a*h)*T,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*T,e[12]=P*T,e[13]=(c*x*r-m*d*r+m*i*f-n*x*f-c*i*g+n*d*g)*T,e[14]=(m*a*r-o*x*r-m*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,m=s*d,x=o*c,g=o*d,h=a*d,_=l*u,v=l*c,S=l*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(x+h))*P,r[1]=(p+S)*P,r[2]=(m-v)*P,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+v)*T,r[9]=(g-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const u=1/s,c=1/o,d=1/a;return Jn.elements[0]*=u,Jn.elements[1]*=u,Jn.elements[2]*=u,Jn.elements[4]*=c,Jn.elements[5]*=c,Jn.elements[6]*=c,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,m;if(a===Oi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===hu)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),f=(n+e)*u,p=(i+r)*c;let m,x;if(a===Oi)m=(o+s)*d,x=-2*d;else if(a===hu)m=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const As=new O,Jn=new xt,WM=new O(0,0,0),jM=new O(1,1,1),tr=new O,kl=new O,Mn=new O,Ng=new xt,Ug=new fs;class Xi{constructor(e=0,n=0,i=0,r=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XM=0;const Fg=new O,Rs=new fs,Ti=new xt,Bl=new O,Jo=new O,$M=new O,qM=new fs,Og=new O(1,0,0),zg=new O(0,1,0),kg=new O(0,0,1),Bg={type:"added"},YM={type:"removed"},Cs={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Jt extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new O,n=new Xi,i=new fs,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,n){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bl.copy(e):Bl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Jo,Bl,this.up):Ti.lookAt(Bl,Jo,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YM),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new O(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new O,Ai=new O,$f=new O,Ri=new O,Ps=new O,bs=new O,Hg=new O,qf=new O,Yf=new O,Kf=new O,Zf=new Ct,Jf=new Ct,Qf=new Ct;class zn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ai.subVectors(i,n),$f.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Ai),l=Qn.dot($f),u=Ai.dot(Ai),c=Ai.dot($f),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Zf.setScalar(0),Jf.setScalar(0),Qf.setScalar(0),Zf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zf,s.x),o.addScaledVector(Jf,s.y),o.addScaledVector(Qf,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ai.subVectors(e,n),Qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),bs.subVectors(s,i),qf.subVectors(e,i);const l=Ps.dot(qf),u=bs.dot(qf);if(l<=0&&u<=0)return n.copy(i);Yf.subVectors(e,r);const c=Ps.dot(Yf),d=bs.dot(Yf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ps,o);Kf.subVectors(e,s);const p=Ps.dot(Kf),m=bs.dot(Kf);if(m>=0&&p<=m)return n.copy(s);const x=p*u-l*m;if(x<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(bs,a);const g=c*m-p*d;if(g<=0&&d-c>=0&&p-m>=0)return Hg.subVectors(s,r),a=(d-c)/(d-c+(p-m)),n.copy(r).addScaledVector(Hg,a);const h=1/(g+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(Ps,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function e0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=jp(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=e0(o,s,e+1/3),this.g=e0(o,s,e),this.b=e0(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const i=B2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=zf(e.r),this.g=zf(e.g),this.b=zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return st.fromWorkingColorSpace(Yt.copy(this),e),Math.round(rn(Yt.r*255,0,255))*65536+Math.round(rn(Yt.g*255,0,255))*256+Math.round(rn(Yt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=pi){st.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(Hl);const i=Ra(nr.h,Hl.h,n),r=Ra(nr.s,Hl.s,n),s=Ra(nr.l,Hl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Xe;Xe.NAMES=B2;let KM=0;class _s extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=ho,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mu extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=w2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Vl=new $e;class sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=oh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vl.fromBufferAttribute(this,n),Vl.applyMatrix3(e),this.setXY(n,Vl.x,Vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=si(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=si(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=si(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}}class H2 extends sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class V2 extends sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZM=0;const In=new xt,t0=new Jt,Ls=new O,En=new fl,Qo=new fl,Ot=new O;class kt extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O2(e)?V2:H2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return t0.lookAt(e),t0.updateMatrix(),this.applyMatrix4(t0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,Qo.min),En.expandByPoint(Ot),Ot.addVectors(En.max,Qo.max),En.expandByPoint(Ot)):(En.expandByPoint(Qo.min),En.expandByPoint(Qo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(Ls.fromBufferAttribute(e,u),Ot.add(Ls)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const u=new O,c=new O,d=new O,f=new $e,p=new $e,m=new $e,x=new O,g=new O;function h(R,B,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,B),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,B),m.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),m.sub(f);const M=1/(p.x*m.y-m.x*p.y);isFinite(M)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(M),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(M),a[R].add(x),a[B].add(x),a[y].add(x),l[R].add(g),l[B].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,B=_.length;R<B;++R){const y=_[R],M=y.start,k=y.count;for(let H=M,j=M+k;H<j;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new O,S=new O,P=new O,A=new O;function T(R){P.fromBufferAttribute(r,R),A.copy(P);const B=a[R];v.copy(B),v.sub(P.multiplyScalar(P.dot(B))).normalize(),S.crossVectors(A,B);const M=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,M)}for(let R=0,B=_.length;R<B;++R){const y=_[R],M=y.start,k=y.count;for(let H=M,j=M+k;H<j;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let h=0;h<c;h++)f[m++]=u[p++]}return new sn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new xt,Or=new Qu,Gl=new dl,Gg=new O,Wl=new O,jl=new O,Xl=new O,n0=new O,$l=new O,Wg=new O,ql=new O;class ai extends Jt{constructor(e=new kt,n=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(n0.fromBufferAttribute(d,e),o?$l.addScaledVector(n0,c):$l.addScaledVector(n0.sub(n),c))}n.add($l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Gl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Gl,Gg)===null||Or.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Vg.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Vg),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],h=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,P=v;S<P;S+=3){const A=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=Yl(this,h,e,i,u,c,d,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const _=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Yl(this,o,e,i,u,c,d,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],h=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,P=v;S<P;S+=3){const A=S,T=S+1,R=S+2;r=Yl(this,h,e,i,u,c,d,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const _=g,v=g+1,S=g+2;r=Yl(this,o,e,i,u,c,d,_,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function JM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;ql.copy(a),ql.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ql);return u<n.near||u>n.far?null:{distance:u,point:ql.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Wl),t.getVertexPosition(l,jl),t.getVertexPosition(u,Xl);const c=JM(t,e,n,i,Wl,jl,Xl,Wg);if(c){const d=new O;zn.getBarycoord(Wg,Wl,jl,Xl,d),r&&(c.uv=zn.getInterpolatedAttribute(r,a,l,u,d,new $e)),s&&(c.uv1=zn.getInterpolatedAttribute(s,a,l,u,d,new $e)),o&&(c.normal=zn.getInterpolatedAttribute(o,a,l,u,d,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new O,materialIndex:0};zn.getNormal(Wl,jl,Xl,f.normal),c.face=f,c.barycoord=d}return c}class hl extends kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(c,3)),this.setAttribute("uv",new _n(d,2));function m(x,g,h,_,v,S,P,A,T,R,B){const y=S/T,M=P/R,k=S/2,H=P/2,j=A/2,I=T+1,z=R+1;let Y=0,D=0;const Z=new O;for(let $=0;$<z;$++){const ie=$*M-H;for(let _e=0;_e<I;_e++){const De=_e*y-k;Z[x]=De*_,Z[g]=ie*v,Z[h]=j,u.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[h]=A>0?1:-1,c.push(Z.x,Z.y,Z.z),d.push(_e/T),d.push(1-$/R),Y+=1}}for(let $=0;$<R;$++)for(let ie=0;ie<T;ie++){const _e=f+ie+I*$,De=f+ie+I*($+1),q=f+(ie+1)+I*($+1),te=f+(ie+1)+I*$;l.push(_e,De,te),l.push(De,q,te),D+=6}a.addGroup(p,D,B),p+=D,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Po(t[n]);for(const r in i)e[r]=i[r]}return e}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const eE={clone:Po,merge:tn};var tE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tE,this.fragmentShader=nE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class W2 extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new O,jg=new $e,Xg=new $e;class On extends W2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,jg,Xg),n.subVectors(Xg,jg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Is=1;class iE extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Ds,Is,e,n);r.layers=this.layers,this.add(r);const s=new On(Ds,Is,e,n);s.layers=this.layers,this.add(s);const o=new On(Ds,Is,e,n);o.layers=this.layers,this.add(o);const a=new On(Ds,Is,e,n);a.layers=this.layers,this.add(a);const l=new On(Ds,Is,e,n);l.layers=this.layers,this.add(l);const u=new On(Ds,Is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class j2 extends ln{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:To,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rE extends us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hl(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Mr});s.uniforms.tEquirect.value=n;const o=new ai(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=ri),new iE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const i0=new O,sE=new O,oE=new We;class Gr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=i0.subVectors(i,n).cross(sE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(i0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oE.getNormalMatrix(e),r=this.coplanarPoint(i0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new dl,Kl=new O;class X2{constructor(e=new Gr,n=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],m=r[9],x=r[10],g=r[11],h=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,g-p,S-h).normalize(),i[1].setComponents(l+s,f+u,g+p,S+h).normalize(),i[2].setComponents(l+o,f+c,g+m,S+_).normalize(),i[3].setComponents(l-o,f-c,g-m,S-_).normalize(),i[4].setComponents(l-a,f-d,g-x,S-v).normalize(),n===Oi)i[5].setComponents(l+a,f+d,g+x,S+v).normalize();else if(n===hu)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aE(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const x=d[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class ef extends kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],m=[],x=[],g=[];for(let h=0;h<c;h++){const _=h*f-o;for(let v=0;v<u;v++){const S=v*d-s;m.push(S,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+u*h,S=_+u*(h+1),P=_+1+u*(h+1),A=_+1+u*h;p.push(v,S,A),p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.width,e.height,e.widthSegments,e.heightSegments)}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
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
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,ME=`#ifdef USE_BUMPMAP
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IE=`vec3 transformedNormal = objectNormal;
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
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",kE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
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
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
#endif`,e4=`#ifdef USE_ENVMAP
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
#endif`,t4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s4=`PhysicalMaterial material;
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
#endif`,o4=`struct PhysicalMaterial {
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
}`,a4=`
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
#endif`,l4=`#if defined( RE_IndirectDiffuse )
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
#endif`,c4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v4=`#if defined( USE_POINTS_UV )
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
#endif`,_4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E4=`#ifdef USE_MORPHTARGETS
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
#endif`,w4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b4=`#ifdef USE_NORMALMAP
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
#endif`,L4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,W4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X4=`float getShadowMask() {
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
}`,$4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q4=`#ifdef USE_SKINNING
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
#endif`,Y4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K4=`#ifdef USE_SKINNING
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
#endif`,Z4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tw=`#ifdef USE_TRANSMISSION
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
#endif`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lw=`uniform sampler2D t2D;
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`#include <common>
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
}`,pw=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mw=`#define DISTANCE
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
}`,gw=`#define DISTANCE
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`uniform float scale;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#include <common>
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Ew=`#define LAMBERT
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
}`,ww=`#define LAMBERT
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
}`,Tw=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Rw=`#define NORMAL
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
}`,Cw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,bw=`#define PHONG
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,Iw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Uw=`uniform float size;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,zw=`uniform vec3 color;
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
}`,kw=`uniform float rotation;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:fE,alphatest_fragment:dE,alphatest_pars_fragment:hE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:vE,begin_vertex:_E,beginnormal_vertex:xE,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:AE,color_fragment:RE,color_pars_fragment:CE,color_pars_vertex:PE,color_vertex:bE,common:LE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:IE,displacementmap_pars_vertex:NE,displacementmap_vertex:UE,emissivemap_fragment:FE,emissivemap_pars_fragment:OE,colorspace_fragment:zE,colorspace_pars_fragment:kE,envmap_fragment:BE,envmap_common_pars_fragment:HE,envmap_pars_fragment:VE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:e4,envmap_vertex:WE,fog_vertex:jE,fog_pars_vertex:XE,fog_fragment:$E,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:KE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:JE,lights_pars_begin:QE,lights_toon_fragment:t4,lights_toon_pars_fragment:n4,lights_phong_fragment:i4,lights_phong_pars_fragment:r4,lights_physical_fragment:s4,lights_physical_pars_fragment:o4,lights_fragment_begin:a4,lights_fragment_maps:l4,lights_fragment_end:c4,logdepthbuf_fragment:u4,logdepthbuf_pars_fragment:f4,logdepthbuf_pars_vertex:d4,logdepthbuf_vertex:h4,map_fragment:p4,map_pars_fragment:m4,map_particle_fragment:g4,map_particle_pars_fragment:v4,metalnessmap_fragment:_4,metalnessmap_pars_fragment:x4,morphinstance_vertex:y4,morphcolor_vertex:S4,morphnormal_vertex:M4,morphtarget_pars_vertex:E4,morphtarget_vertex:w4,normal_fragment_begin:T4,normal_fragment_maps:A4,normal_pars_fragment:R4,normal_pars_vertex:C4,normal_vertex:P4,normalmap_pars_fragment:b4,clearcoat_normal_fragment_begin:L4,clearcoat_normal_fragment_maps:D4,clearcoat_pars_fragment:I4,iridescence_pars_fragment:N4,opaque_fragment:U4,packing:F4,premultiplied_alpha_fragment:O4,project_vertex:z4,dithering_fragment:k4,dithering_pars_fragment:B4,roughnessmap_fragment:H4,roughnessmap_pars_fragment:V4,shadowmap_pars_fragment:G4,shadowmap_pars_vertex:W4,shadowmap_vertex:j4,shadowmask_pars_fragment:X4,skinbase_vertex:$4,skinning_pars_vertex:q4,skinning_vertex:Y4,skinnormal_vertex:K4,specularmap_fragment:Z4,specularmap_pars_fragment:J4,tonemapping_fragment:Q4,tonemapping_pars_fragment:ew,transmission_fragment:tw,transmission_pars_fragment:nw,uv_pars_fragment:iw,uv_pars_vertex:rw,uv_vertex:sw,worldpos_vertex:ow,background_vert:aw,background_frag:lw,backgroundCube_vert:cw,backgroundCube_frag:uw,cube_vert:fw,cube_frag:dw,depth_vert:hw,depth_frag:pw,distanceRGBA_vert:mw,distanceRGBA_frag:gw,equirect_vert:vw,equirect_frag:_w,linedashed_vert:xw,linedashed_frag:yw,meshbasic_vert:Sw,meshbasic_frag:Mw,meshlambert_vert:Ew,meshlambert_frag:ww,meshmatcap_vert:Tw,meshmatcap_frag:Aw,meshnormal_vert:Rw,meshnormal_frag:Cw,meshphong_vert:Pw,meshphong_frag:bw,meshphysical_vert:Lw,meshphysical_frag:Dw,meshtoon_vert:Iw,meshtoon_frag:Nw,points_vert:Uw,points_frag:Fw,shadow_vert:Ow,shadow_frag:zw,sprite_vert:kw,sprite_frag:Bw},ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mi={basic:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:tn([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:tn([ce.lights,ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};mi.physical={uniforms:tn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Zl={r:0,b:0,g:0},kr=new Xi,Hw=new xt;function Vw(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=m(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===Zu)?(c===void 0&&(c=new ai(new hl(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Po(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),kr.copy(v.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(kr)),c.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new ai(new ef(2,2),new $i({name:"BackgroundMaterial",uniforms:Po(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function h(_,v){_.getRGB(Zl,G2(t)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:g}}function Gw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,M,k,H,j){let I=!1;const z=d(H,k,M);s!==z&&(s=z,u(s.object)),I=p(y,H,k,j),I&&m(y,H,k,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,S(y,M,k,H),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function d(y,M,k){const H=k.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let I=j[M.id];I===void 0&&(I={},j[M.id]=I);let z=I[H];return z===void 0&&(z=f(l()),I[H]=z),z}function f(y){const M=[],k=[],H=[];for(let j=0;j<n;j++)M[j]=0,k[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,M,k,H){const j=s.attributes,I=M.attributes;let z=0;const Y=k.getAttributes();for(const D in Y)if(Y[D].location>=0){const $=j[D];let ie=I[D];if(ie===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),$===void 0||$.attribute!==ie||ie&&$.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==H}function m(y,M,k,H){const j={},I=M.attributes;let z=0;const Y=k.getAttributes();for(const D in Y)if(Y[D].location>=0){let $=I[D];$===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const ie={};ie.attribute=$,$&&$.data&&(ie.data=$.data),j[D]=ie,z++}s.attributes=j,s.attributesNum=z,s.index=H}function x(){const y=s.newAttributes;for(let M=0,k=y.length;M<k;M++)y[M]=0}function g(y){h(y,0)}function h(y,M){const k=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;k[y]=1,H[y]===0&&(t.enableVertexAttribArray(y),H[y]=1),j[y]!==M&&(t.vertexAttribDivisor(y,M),j[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let k=0,H=M.length;k<H;k++)M[k]!==y[k]&&(t.disableVertexAttribArray(k),M[k]=0)}function v(y,M,k,H,j,I,z){z===!0?t.vertexAttribIPointer(y,M,k,j,I):t.vertexAttribPointer(y,M,k,H,j,I)}function S(y,M,k,H){x();const j=H.attributes,I=k.getAttributes(),z=M.defaultAttributeValues;for(const Y in I){const D=I[Y];if(D.location>=0){let Z=j[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const $=Z.normalized,ie=Z.itemSize,_e=e.get(Z);if(_e===void 0)continue;const De=_e.buffer,q=_e.type,te=_e.bytesPerElement,le=q===t.INT||q===t.UNSIGNED_INT||Z.gpuType===zp;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Ne=ue.stride,V=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<D.locationSize;Fe++)h(D.location+Fe,ue.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<D.locationSize;Fe++)g(D.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Fe=0;Fe<D.locationSize;Fe++)v(D.location+Fe,ie/D.locationSize,q,$,Ne*te,(V+ie/D.locationSize*Fe)*te,le)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)h(D.location+ue,Z.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<D.locationSize;ue++)g(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ue=0;ue<D.locationSize;ue++)v(D.location+ue,ie/D.locationSize,q,$,ie*te,ie/D.locationSize*ue*te,le)}}else if(z!==void 0){const $=z[Y];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(D.location,$);break;case 3:t.vertexAttrib3fv(D.location,$);break;case 4:t.vertexAttrib4fv(D.location,$);break;default:t.vertexAttrib1fv(D.location,$)}}}}_()}function P(){R();for(const y in i){const M=i[y];for(const k in M){const H=M[k];for(const j in H)c(H[j].object),delete H[j];delete M[k]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const k in M){const H=M[k];for(const j in H)c(H[j].object),delete H[j];delete M[k]}delete i[y.id]}function T(y){for(const M in i){const k=i[M];if(k[y.id]===void 0)continue;const H=k[y.id];for(const j in H)c(H[j].object),delete H[j];delete k[y.id]}}function R(){B(),o=!0,s!==r&&(s=r,u(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Ww(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let m=0;m<d;m++)p+=c[m];n.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)o(u[m],c[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=c[x];for(let x=0;x<f.length;x++)n.update(m,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ji&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:A}}function Xw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const _=s?0:i,v=_*4;let S=h.clippingState||null;l.value=S,S=c(m,f,v,p);for(let P=0;P!==v;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const h=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function $w(t){let e=new WeakMap;function n(o,a){return a===bd?o.mapping=To:a===Ld&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bd||a===Ld)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new rE(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qw extends W2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=4,$g=[.125,.215,.35,.446,.526,.582],Xr=20,r0=new qw,qg=new Xe;let s0=null,o0=0,a0=0,l0=!1;const Wr=(1+Math.sqrt(5))/2,Ns=1/Wr,Yg=[new O(-Wr,Ns,0),new O(Wr,Ns,0),new O(-Ns,0,Wr),new O(Ns,0,Wr),new O(0,Wr,-Ns),new O(0,Wr,Ns),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){s0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(s0,o0,a0),this._renderer.xr.enabled=l0,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===To||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),s0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),a0=this._renderer.getActiveMipmapLevel(),l0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ul,format:oi,colorSpace:Dr,depthBuffer:!1},r=Zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=Kw(s,e,n)}return r}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,r0)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(qg),c.toneMapping=Er,c.autoClear=!1;const p=new mu({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new ai(new hl,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(qg),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Jl(r,_*v,h>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===To||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,r0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yg[(r-s-1)%Yg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ai(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),x=s/m,g=isFinite(s)?1+Math.floor(c*x):Xr;g>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xr}`);const h=[];let _=0;for(let T=0;T<Xr;++T){const R=T/x,B=Math.exp(-R*R/2);h.push(B),T===0?_+=B:T<g&&(_+=2*B)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-to?r-v+to:0),A=4*(this._cubeSize-S);Jl(n,P,A,3*S,2*S),l.setRenderTarget(n),l.render(d,r0)}}function Yw(t){const e=[],n=[],i=[];let r=t;const s=t-to+1+$g.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-to?l=$g[o-t+to-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,m=6,x=3,g=2,h=1,_=new Float32Array(x*m*p),v=new Float32Array(g*m*p),S=new Float32Array(h*m*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,B=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(B,x*m*A),v.set(f,g*m*A);const y=[A,A,A,A,A,A];S.set(y,h*m*A)}const P=new kt;P.setAttribute("position",new sn(_,x)),P.setAttribute("uv",new sn(v,g)),P.setAttribute("faceIndex",new sn(S,h)),e.push(P),r>to&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zg(t,e,n){const i=new us(t,e,n);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Kw(t,e,n){const i=new Float32Array(Xr),r=new O(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$p(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Jg(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Qg(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function $p(){return`

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
	`}function Zw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bd||l===Ld,c=l===To||l===Ao;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Kg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Kg(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Jw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Uc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const x=p[m];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,m=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,S=_.length;v<S;v+=3){const P=_[v+0],A=_[v+1],T=_[v+2];f.push(P,A,A,T,T,P)}}else if(m!==void 0){const _=m.array;x=m.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const P=v+0,A=v+1,T=v+2;f.push(P,A,A,T,T,P)}}else return;const g=new(O2(f)?V2:H2)(f,1);g.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function eT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*o,m),n.update(p,i,m))}function c(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,m);let h=0;for(let _=0;_<m;_++)h+=p[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function tT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nT(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let P=a.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*d),R=new k2(T,P,A,d);R.type=Fi,R.needsUpdate=!0;const B=S*4;for(let M=0;M<d;M++){const k=h[M],H=_[M],j=v[M],I=P*A*4*M;for(let z=0;z<k.count;z++){const Y=z*B;m===!0&&(r.fromBufferAttribute(k,z),T[I+Y+0]=r.x,T[I+Y+1]=r.y,T[I+Y+2]=r.z,T[I+Y+3]=0),x===!0&&(r.fromBufferAttribute(H,z),T[I+Y+4]=r.x,T[I+Y+5]=r.y,T[I+Y+6]=r.z,T[I+Y+7]=0),g===!0&&(r.fromBufferAttribute(j,z),T[I+Y+8]=r.x,T[I+Y+9]=r.y,T[I+Y+10]=r.z,T[I+Y+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new $e(P,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function iT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class q2 extends ln{constructor(e,n,i,r,s,o,a,l,u,c=po){if(c!==po&&c!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===po&&(i=cs),i===void 0&&c===Co&&(i=Ro),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y2=new ln,e1=new q2(1,1),K2=new k2,Z2=new VM,J2=new j2,t1=[],n1=[],i1=new Float32Array(16),r1=new Float32Array(9),s1=new Float32Array(4);function Bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=t1[r];if(s===void 0&&(s=new Float32Array(r),t1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tf(t,e){let n=n1[e];n===void 0&&(n=new Int32Array(e),n1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;s1.set(i),t.uniformMatrix2fv(this.addr,!1,s1),Ft(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;r1.set(i),t.uniformMatrix3fv(this.addr,!1,r1),Ft(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;i1.set(i),t.uniformMatrix4fv(this.addr,!1,i1),Ft(n,i)}}function fT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(e1.compareFunction=F2,s=e1):s=Y2,n.setTexture2D(e||s,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z2,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||J2,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K2,r)}function ET(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function wT(t,e){t.uniform1fv(this.addr,e)}function TT(t,e){const n=Bo(e,this.size,2);t.uniform2fv(this.addr,n)}function AT(t,e){const n=Bo(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=Bo(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PT(t,e){const n=Bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=Bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function LT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function IT(t,e){t.uniform3iv(this.addr,e)}function NT(t,e){t.uniform4iv(this.addr,e)}function UT(t,e){t.uniform1uiv(this.addr,e)}function FT(t,e){t.uniform2uiv(this.addr,e)}function OT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=tf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Y2,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=tf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Z2,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=tf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||J2,s[o])}function VT(t,e,n){const i=this.cache,r=e.length,s=tf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||K2,s[o])}function GT(t){switch(t){case 5126:return wT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return PT;case 35676:return bT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return FT;case 36295:return OT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const c0=/(\w+)(\])?(\[|\.)?/g;function o1(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(c0.lastIndex=0;;){const s=c0.exec(i),o=c0.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){o1(n,u===void 0?new WT(a,t,e):new jT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new XT(a),o1(n,d)),n=d}}}class Fc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$T(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function a1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qT=37297;let YT=0;function KT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===du&&n===fu?i="LinearDisplayP3ToLinearSRGB":e===fu&&n===du&&(i="LinearSRGBToLinearDisplayP3"),t){case Dr:case Ju:return[i,"LinearTransferOETF"];case pi:case Wp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function l1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+KT(t.getShaderSource(e),o)}else return r}function JT(t,e){const n=ZT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function QT(t,e){let n;switch(e){case JS:n="Linear";break;case QS:n="Reinhard";break;case eM:n="Cineon";break;case tM:n="ACESFilmic";break;case iM:n="AgX";break;case rM:n="Neutral";break;case nM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new O;function e5(){st.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t5(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function n5(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function i5(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function c1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r5=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(t){return t.replace(r5,o5)}const s5=new Map;function o5(t,e){let n=Ge[e];if(n===void 0){const i=s5.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ah(n)}const a5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f1(t){return t.replace(a5,l5)}function l5(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c5(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===E2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===LS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function u5(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case To:case Ao:e="ENVMAP_TYPE_CUBE";break;case Zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f5(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function d5(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w2:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function h5(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function p5(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=c5(n),u=u5(n),c=f5(n),d=d5(n),f=h5(n),p=t5(n),m=n5(s),x=r.createProgram();let g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(g=[d1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[d1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Er?QT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),e5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=ah(o),o=c1(o,n),o=u1(o,n),a=ah(a),a=c1(a,n),a=u1(a,n),o=f1(o),a=f1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+g+o,S=_+h+a,P=a1(r,r.VERTEX_SHADER,v),A=a1(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(A).trim();let I=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const Y=l1(r,P,"vertex"),D=l1(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+Y+`
`+D)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||j==="")&&(z=!1);z&&(M.diagnostics={runnable:I,programLog:k,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:h}})}r.deleteShader(P),r.deleteShader(A),R=new Fc(r,x),B=i5(r,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let B;this.getAttributes=function(){return B===void 0&&T(this),B};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,qT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let m5=0;class g5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new v5(e),n.set(e,i)),i}}class v5{constructor(e){this.id=m5++,this.code=e,this.usedTimes=0}}function _5(t,e,n,i,r,s,o){const a=new Xp,l=new g5,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function h(y,M,k,H,j){const I=H.fog,z=j.geometry,Y=y.isMeshStandardMaterial?H.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),Z=D&&D.mapping===Zu?D.image.height:null,$=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_e=ie!==void 0?ie.length:0;let De=0;z.morphAttributes.position!==void 0&&(De=1),z.morphAttributes.normal!==void 0&&(De=2),z.morphAttributes.color!==void 0&&(De=3);let q,te,le,ue;if($){const dn=mi[$];q=dn.vertexShader,te=dn.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),V=j.isInstancedMesh===!0,Fe=j.isBatchedMesh===!0,Qe=!!y.map,J=!!y.matcap,b=!!D,Le=!!y.aoMap,de=!!y.lightMap,Re=!!y.bumpMap,Ee=!!y.normalMap,Be=!!y.displacementMap,Ie=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,ee=y.clearcoat>0,re=y.dispersion>0,Q=y.iridescence>0,Ce=y.sheen>0,fe=y.transmission>0,ye=G&&!!y.anisotropyMap,et=ee&&!!y.clearcoatMap,oe=ee&&!!y.clearcoatNormalMap,Se=ee&&!!y.clearcoatRoughnessMap,ze=Q&&!!y.iridescenceMap,ke=Q&&!!y.iridescenceThicknessMap,Me=Ce&&!!y.sheenColorMap,qe=Ce&&!!y.sheenRoughnessMap,He=!!y.specularMap,ft=!!y.specularColorMap,N=!!y.specularIntensityMap,me=fe&&!!y.transmissionMap,K=fe&&!!y.thicknessMap,ne=!!y.gradientMap,he=!!y.alphaMap,ge=y.alphaTest>0,Ke=!!y.alphaHash,Pt=!!y.extensions;let fn=Er;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(fn=t.toneMapping);const nt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&j._colorsTexture!==null,instancing:V,instancingColor:V&&j.instanceColor!==null,instancingMorph:V&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Dr,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:J,envMap:b,envMapMode:b&&D.mapping,envMapCubeUVHeight:Z,aoMap:Le,lightMap:de,bumpMap:Re,normalMap:Ee,displacementMap:p&&Be,emissiveMap:Ie,normalMapObjectSpace:Ee&&y.normalMapType===cM,normalMapTangentSpace:Ee&&y.normalMapType===lM,metalnessMap:C,roughnessMap:E,anisotropy:G,anisotropyMap:ye,clearcoat:ee,clearcoatMap:et,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:re,iridescence:Q,iridescenceMap:ze,iridescenceThicknessMap:ke,sheen:Ce,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:He,specularColorMap:ft,specularIntensityMap:N,transmission:fe,transmissionMap:me,thicknessMap:K,gradientMap:ne,opaque:y.transparent===!1&&y.blending===ho&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:Ke,combine:y.combine,mapUv:Qe&&g(y.map.channel),aoMapUv:Le&&g(y.aoMap.channel),lightMapUv:de&&g(y.lightMap.channel),bumpMapUv:Re&&g(y.bumpMap.channel),normalMapUv:Ee&&g(y.normalMap.channel),displacementMapUv:Be&&g(y.displacementMap.channel),emissiveMapUv:Ie&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:E&&g(y.roughnessMap.channel),anisotropyMapUv:ye&&g(y.anisotropyMap.channel),clearcoatMapUv:et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(y.sheenRoughnessMap.channel),specularMapUv:He&&g(y.specularMap.channel),specularColorMapUv:ft&&g(y.specularColorMap.channel),specularIntensityMapUv:N&&g(y.specularIntensityMap.channel),transmissionMapUv:me&&g(y.transmissionMap.channel),thicknessMapUv:K&&g(y.thicknessMap.channel),alphaMapUv:he&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ee||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!z.attributes.uv&&(Qe||he),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:fn,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=u.has(1),nt.vertexUv2s=u.has(2),nt.vertexUv3s=u.has(3),u.clear(),nt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)M.push(k),M.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const M=x[y.type];let k;if(M){const H=mi[M];k=eE.clone(H.uniforms)}else k=y.uniforms;return k}function A(y,M){let k;for(let H=0,j=c.length;H<j;H++){const I=c[H];if(I.cacheKey===M){k=I,++k.usedTimes;break}}return k===void 0&&(k=new p5(t,M,y,s),c.push(k)),k}function T(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function B(){l.dispose()}return{getParameters:h,getProgramCacheKey:_,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:B}}function x5(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function y5(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function h1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function p1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,m,x,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=x,h.group=g),e++,h}function a(d,f,p,m,x,g){const h=o(d,f,p,m,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,m,x,g){const h=o(d,f,p,m,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||y5),i.length>1&&i.sort(f||h1),r.length>1&&r.sort(f||h1)}function c(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function S5(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new p1,t.set(i,[o])):r>=s.length?(o=new p1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function M5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Xe};break;case"SpotLight":n={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function E5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let w5=0;function T5(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function A5(t){const e=new M5,n=E5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(u){let c=0,d=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,x=0,g=0,h=0,_=0,v=0,S=0,P=0,A=0,T=0;u.sort(T5);for(let B=0,y=u.length;B<y;B++){const M=u[B],k=M.color,H=M.intensity,j=M.distance,I=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=k.r*H,d+=k.g*H,f+=k.b*H;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],H);T++}else if(M.isDirectionalLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,D=n.get(M);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=M.shadow.matrix,_++}i.directional[p]=z,p++}else if(M.isSpotLight){const z=e.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(k).multiplyScalar(H),z.distance=j,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[x]=z;const Y=M.shadow;if(M.map&&(i.spotLightMap[P]=M.map,P++,Y.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,M.castShadow){const D=n.get(M);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=I,S++}x++}else if(M.isRectAreaLight){const z=e.get(M);z.color.copy(k).multiplyScalar(H),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[g]=z,g++}else if(M.isPointLight){const z=e.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const Y=M.shadow,D=n.get(M);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=I,i.pointShadowMatrix[m]=M.shadow.matrix,v++}i.point[m]=z,m++}else if(M.isHemisphereLight){const z=e.get(M);z.skyColor.copy(M.color).multiplyScalar(H),z.groundColor.copy(M.groundColor).multiplyScalar(H),i.hemi[h]=z,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=T,i.version=w5++)}function l(u,c){let d=0,f=0,p=0,m=0,x=0;const g=c.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function m1(t){const e=new A5(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function R5(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new m1(t),e.set(r,[a])):s>=o.length?(a=new m1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class C5 extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P5 extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L5=`uniform sampler2D shadow_pass;
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
}`;function D5(t,e,n){let i=new X2;const r=new $e,s=new $e,o=new Ct,a=new C5({depthPacking:aM}),l=new P5,u={},c=n.maxTextureSize,d={[Ar]:an,[an]:Ar,[vi]:vi},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:b5,fragmentShader:L5}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ai(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E2;let h=this.type;this.render=function(A,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const B=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Mr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=h!==Ci&&this.type===Ci,j=h===Ci&&this.type!==Ci;for(let I=0,z=A.length;I<z;I++){const Y=A[I],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||H===!0||j===!0){const ie=this.type!==Ci?{minFilter:Hn,magFilter:Hn}:{};D.map!==null&&D.map.dispose(),D.map=new us(r.x,r.y,ie),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const $=D.getViewportCount();for(let ie=0;ie<$;ie++){const _e=D.getViewport(ie);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),k.viewport(o),D.updateMatrices(Y,ie),i=D.getFrustum(),S(T,R,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Ci&&_(D,R),D.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(B,y,M)};function _(A,T){const R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new us(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,p,x,null)}function v(A,T,R,B){let y=null;const M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,H=T.uuid;let j=u[k];j===void 0&&(j={},u[k]=j);let I=j[H];I===void 0&&(I=y.clone(),j[H]=I,T.addEventListener("dispose",P)),y=I}if(y.visible=T.visible,y.wireframe=T.wireframe,B===Ci?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=R}return y}function S(A,T,R,B,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const H=e.update(A),j=A.material;if(Array.isArray(j)){const I=H.groups;for(let z=0,Y=I.length;z<Y;z++){const D=I[z],Z=j[D.materialIndex];if(Z&&Z.visible){const $=v(A,Z,B,y);A.onBeforeShadow(t,A,T,R,H,$,D),t.renderBufferDirect(R,null,H,$,A,D),A.onAfterShadow(t,A,T,R,H,$,D)}}}else if(j.visible){const I=v(A,j,B,y);A.onBeforeShadow(t,A,T,R,H,I,null),t.renderBufferDirect(R,null,H,I,A,null),A.onAfterShadow(t,A,T,R,H,I,null)}}const k=A.children;for(let H=0,j=k.length;H<j;H++)S(k[H],T,R,B,y)}function P(A){A.target.removeEventListener("dispose",P);for(const R in u){const B=u[R],y=A.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}const I5={[Ed]:wd,[Td]:Cd,[Ad]:Pd,[wo]:Rd,[wd]:Ed,[Cd]:Td,[Pd]:Ad,[Rd]:wo};function N5(t){function e(){let N=!1;const me=new Ct;let K=null;const ne=new Ct(0,0,0,0);return{setMask:function(he){K!==he&&!N&&(t.colorMask(he,he,he,he),K=he)},setLocked:function(he){N=he},setClear:function(he,ge,Ke,Pt,fn){fn===!0&&(he*=Pt,ge*=Pt,Ke*=Pt),me.set(he,ge,Ke,Pt),ne.equals(me)===!1&&(t.clearColor(he,ge,Ke,Pt),ne.copy(me))},reset:function(){N=!1,K=null,ne.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,K=null,ne=null,he=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?le(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ge){K!==ge&&!N&&(t.depthMask(ge),K=ge)},setFunc:function(ge){if(me&&(ge=I5[ge]),ne!==ge){switch(ge){case Ed:t.depthFunc(t.NEVER);break;case wd:t.depthFunc(t.ALWAYS);break;case Td:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case Rd:t.depthFunc(t.GEQUAL);break;case Cd:t.depthFunc(t.GREATER);break;case Pd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ge}},setLocked:function(ge){N=ge},setClear:function(ge){he!==ge&&(t.clearDepth(ge),he=ge)},reset:function(){N=!1,K=null,ne=null,he=null}}}function i(){let N=!1,me=null,K=null,ne=null,he=null,ge=null,Ke=null,Pt=null,fn=null;return{setTest:function(nt){N||(nt?le(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!N&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,dn,Mi){(K!==nt||ne!==dn||he!==Mi)&&(t.stencilFunc(nt,dn,Mi),K=nt,ne=dn,he=Mi)},setOp:function(nt,dn,Mi){(ge!==nt||Ke!==dn||Pt!==Mi)&&(t.stencilOp(nt,dn,Mi),ge=nt,Ke=dn,Pt=Mi)},setLocked:function(nt){N=nt},setClear:function(nt){fn!==nt&&(t.clearStencil(nt),fn=nt)},reset:function(){N=!1,me=null,K=null,ne=null,he=null,ge=null,Ke=null,Pt=null,fn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,m=!1,x=null,g=null,h=null,_=null,v=null,S=null,P=null,A=new Xe(0,0,0),T=0,R=!1,B=null,y=null,M=null,k=null,H=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=z>=2);let D=null,Z={};const $=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),_e=new Ct().fromArray($),De=new Ct().fromArray(ie);function q(N,me,K,ne){const he=new Uint8Array(4),ge=t.createTexture();t.bindTexture(N,ge),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<K;Ke++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(me+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ge}const te={};te[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(wo),de(!1),Re(Mg),le(t.CULL_FACE),b(Mr);function le(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function ue(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Ne(N,me){return c[N]!==me?(t.bindFramebuffer(N,me),c[N]=me,N===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=me),N===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=me),!0):!1}function V(N,me){let K=f,ne=!1;if(N){K=d.get(me),K===void 0&&(K=[],d.set(me,K));const he=N.textures;if(K.length!==he.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ke=he.length;ge<Ke;ge++)K[ge]=t.COLOR_ATTACHMENT0+ge;K.length=he.length,ne=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ne=!0);ne&&t.drawBuffers(K)}function Fe(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Qe={[jr]:t.FUNC_ADD,[IS]:t.FUNC_SUBTRACT,[NS]:t.FUNC_REVERSE_SUBTRACT};Qe[US]=t.MIN,Qe[FS]=t.MAX;const J={[OS]:t.ZERO,[zS]:t.ONE,[kS]:t.SRC_COLOR,[Sd]:t.SRC_ALPHA,[jS]:t.SRC_ALPHA_SATURATE,[GS]:t.DST_COLOR,[HS]:t.DST_ALPHA,[BS]:t.ONE_MINUS_SRC_COLOR,[Md]:t.ONE_MINUS_SRC_ALPHA,[WS]:t.ONE_MINUS_DST_COLOR,[VS]:t.ONE_MINUS_DST_ALPHA,[XS]:t.CONSTANT_COLOR,[$S]:t.ONE_MINUS_CONSTANT_COLOR,[qS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(N,me,K,ne,he,ge,Ke,Pt,fn,nt){if(N===Mr){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),N!==DS){if(N!==x||nt!==R){if((g!==jr||v!==jr)&&(t.blendEquation(t.FUNC_ADD),g=jr,v=jr),nt)switch(N){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eg:t.blendFunc(t.ONE,t.ONE);break;case wg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Eg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,_=null,S=null,P=null,A.set(0,0,0),T=0,x=N,R=nt}return}he=he||me,ge=ge||K,Ke=Ke||ne,(me!==g||he!==v)&&(t.blendEquationSeparate(Qe[me],Qe[he]),g=me,v=he),(K!==h||ne!==_||ge!==S||Ke!==P)&&(t.blendFuncSeparate(J[K],J[ne],J[ge],J[Ke]),h=K,_=ne,S=ge,P=Ke),(Pt.equals(A)===!1||fn!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,fn),A.copy(Pt),T=fn),x=N,R=!1}function Le(N,me){N.side===vi?ue(t.CULL_FACE):le(t.CULL_FACE);let K=N.side===an;me&&(K=!K),de(K),N.blending===ho&&N.transparent===!1?b(Mr):b(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ne=N.stencilWrite;o.setTest(ne),ne&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(N){B!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),B=N)}function Re(N){N!==PS?(le(t.CULL_FACE),N!==y&&(N===Mg?t.cullFace(t.BACK):N===bS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=N}function Ee(N){N!==M&&(I&&t.lineWidth(N),M=N)}function Be(N,me,K){N?(le(t.POLYGON_OFFSET_FILL),(k!==me||H!==K)&&(t.polygonOffset(me,K),k=me,H=K)):ue(t.POLYGON_OFFSET_FILL)}function Ie(N){N?le(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(N){N===void 0&&(N=t.TEXTURE0+j-1),D!==N&&(t.activeTexture(N),D=N)}function E(N,me,K){K===void 0&&(D===null?K=t.TEXTURE0+j-1:K=D);let ne=Z[K];ne===void 0&&(ne={type:void 0,texture:void 0},Z[K]=ne),(ne.type!==N||ne.texture!==me)&&(D!==K&&(t.activeTexture(K),D=K),t.bindTexture(N,me||te[N]),ne.type=N,ne.texture=me)}function G(){const N=Z[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){_e.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),_e.copy(N))}function Me(N){De.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),De.copy(N))}function qe(N,me){let K=l.get(me);K===void 0&&(K=new WeakMap,l.set(me,K));let ne=K.get(N);ne===void 0&&(ne=t.getUniformBlockIndex(me,N.name),K.set(N,ne))}function He(N,me){const ne=l.get(me).get(N);a.get(me)!==ne&&(t.uniformBlockBinding(me,ne,N.__bindingPointIndex),a.set(me,ne))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,Z={},c={},d=new WeakMap,f=[],p=null,m=!1,x=null,g=null,h=null,_=null,v=null,S=null,P=null,A=new Xe(0,0,0),T=0,R=!1,B=null,y=null,M=null,k=null,H=null,_e.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ue,bindFramebuffer:Ne,drawBuffers:V,useProgram:Fe,setBlending:b,setMaterial:Le,setFlipSided:de,setCullFace:Re,setLineWidth:Ee,setPolygonOffset:Be,setScissorTest:Ie,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:Se,texImage3D:ze,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:et,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:ke,viewport:Me,reset:ft}}function g1(t,e,n,i){const r=U5(i);switch(n){case P2:return t*e;case L2:return t*e;case D2:return t*e*2;case I2:return t*e/r.components*r.byteLength;case Hp:return t*e/r.components*r.byteLength;case N2:return t*e*2/r.components*r.byteLength;case Vp:return t*e*2/r.components*r.byteLength;case b2:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Gp:return t*e*4/r.components*r.byteLength;case bc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Od:return Math.max(t,16)*Math.max(e,8)/4;case Nd:case Fd:return Math.max(t,8)*Math.max(e,8)/2;case zd:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nc:case th:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case U2:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rh:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function U5(t){switch(t){case ji:case A2:return{byteLength:1,components:1};case Za:case R2:case ul:return{byteLength:2,components:1};case kp:case Bp:return{byteLength:2,components:4};case cs:case zp:case Fi:return{byteLength:4,components:1};case C2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function F5(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return p?new OffscreenCanvas(C,E):pu("canvas")}function x(C,E,G){let ee=1;const re=Ie(C);if((re.width>G||re.height>G)&&(ee=G/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ee*re.width),Ce=Math.floor(ee*re.height);d===void 0&&(d=m(Q,Ce));const fe=E?m(Q,Ce):d;return fe.width=Q,fe.height=Ce,fe.getContext("2d").drawImage(C,0,0,Q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Hn&&C.minFilter!==ri}function h(C){t.generateMipmap(C)}function _(C,E,G,ee,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=E;if(E===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),E===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Ce=re?uu:st.getTransfer(ee);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Ce===gt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,E){let G;return C?E===null||E===cs||E===Ro?G=t.DEPTH24_STENCIL8:E===Fi?G=t.DEPTH32F_STENCIL8:E===Za&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cs||E===Ro?G=t.DEPTH_COMPONENT24:E===Fi?G=t.DEPTH_COMPONENT32F:E===Za&&(G=t.DEPTH_COMPONENT16),G}function S(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){const E=C.target;E.removeEventListener("dispose",P),T(E),E.isVideoTexture&&c.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),B(E)}function T(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,ee=f.get(G);if(ee){const re=ee[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(C),Object.keys(ee).length===0&&f.delete(G)}i.remove(C)}function R(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const G=C.source,ee=f.get(G);delete ee[E.__cacheKey],o.memory.textures--}function B(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let re=0;re<E.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let ee=0,re=G.length;ee<re;ee++){const Q=i.get(G[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(C)}let y=0;function M(){y=0}function k(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function H(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function j(C,E){const G=i.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(G,C,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function I(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){De(G,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function z(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){De(G,C,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function Y(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){q(G,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const D={[Dd]:t.REPEAT,[Zr]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},Z={[Hn]:t.NEAREST,[sM]:t.NEAREST_MIPMAP_NEAREST,[Il]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Ff]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},$={[uM]:t.NEVER,[gM]:t.ALWAYS,[fM]:t.LESS,[F2]:t.LEQUAL,[dM]:t.EQUAL,[mM]:t.GEQUAL,[hM]:t.GREATER,[pM]:t.NOTEQUAL};function ie(C,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Ff||E.magFilter===Il||E.magFilter===Jr||E.minFilter===ri||E.minFilter===Ff||E.minFilter===Il||E.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==Il&&E.minFilter!==Jr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _e(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const ee=E.source;let re=f.get(ee);re===void 0&&(re={},f.set(ee,re));const Q=H(E);if(Q!==C.__cacheKey){re[Q]===void 0&&(re[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[Q].usedTimes++;const Ce=re[C.__cacheKey];Ce!==void 0&&(re[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&R(E)),C.__cacheKey=Q,C.__webglTexture=re[Q].texture}return G}function De(C,E,G){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const re=_e(C,E),Q=E.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+G);const Ce=i.get(Q);if(Q.version!==Ce.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const fe=st.getPrimaries(st.workingColorSpace),ye=E.colorSpace===ur?null:st.getPrimaries(E.colorSpace),et=E.colorSpace===ur||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let oe=x(E.image,!1,r.maxTextureSize);oe=Be(E,oe);const Se=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let ke=_(E.internalFormat,Se,ze,E.colorSpace,E.isVideoTexture);ie(ee,E);let Me;const qe=E.mipmaps,He=E.isVideoTexture!==!0,ft=Ce.__version===void 0||re===!0,N=Q.dataReady,me=S(E,oe);if(E.isDepthTexture)ke=v(E.format===Co,E.type),ft&&(He?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,ze,null));else if(E.isDataTexture)if(qe.length>0){He&&ft&&n.texStorage2D(t.TEXTURE_2D,me,ke,qe[0].width,qe[0].height);for(let K=0,ne=qe.length;K<ne;K++)Me=qe[K],He?N&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,ze,Me.data):n.texImage2D(t.TEXTURE_2D,K,ke,Me.width,Me.height,0,Se,ze,Me.data);E.generateMipmaps=!1}else He?(ft&&n.texStorage2D(t.TEXTURE_2D,me,ke,oe.width,oe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,ze,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,ze,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,ke,qe[0].width,qe[0].height,oe.depth);for(let K=0,ne=qe.length;K<ne;K++)if(Me=qe[K],E.format!==oi)if(Se!==null)if(He){if(N)if(E.layerUpdates.size>0){const he=g1(Me.width,Me.height,E.format,E.type);for(const ge of E.layerUpdates){const Ke=Me.data.subarray(ge*he/Me.data.BYTES_PER_ELEMENT,(ge+1)*he/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ge,Me.width,Me.height,1,Se,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,Se,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ke,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,Se,ze,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ke,Me.width,Me.height,oe.depth,0,Se,ze,Me.data)}else{He&&ft&&n.texStorage2D(t.TEXTURE_2D,me,ke,qe[0].width,qe[0].height);for(let K=0,ne=qe.length;K<ne;K++)Me=qe[K],E.format!==oi?Se!==null?He?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,ze,Me.data):n.texImage2D(t.TEXTURE_2D,K,ke,Me.width,Me.height,0,Se,ze,Me.data)}else if(E.isDataArrayTexture)if(He){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,ke,oe.width,oe.height,oe.depth),N)if(E.layerUpdates.size>0){const K=g1(oe.width,oe.height,E.format,E.type);for(const ne of E.layerUpdates){const he=oe.data.subarray(ne*K/oe.data.BYTES_PER_ELEMENT,(ne+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Se,ze,he)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,ze,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,Se,ze,oe.data);else if(E.isData3DTexture)He?(ft&&n.texStorage3D(t.TEXTURE_3D,me,ke,oe.width,oe.height,oe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,ze,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,Se,ze,oe.data);else if(E.isFramebufferTexture){if(ft)if(He)n.texStorage2D(t.TEXTURE_2D,me,ke,oe.width,oe.height);else{let K=oe.width,ne=oe.height;for(let he=0;he<me;he++)n.texImage2D(t.TEXTURE_2D,he,ke,K,ne,0,Se,ze,null),K>>=1,ne>>=1}}else if(qe.length>0){if(He&&ft){const K=Ie(qe[0]);n.texStorage2D(t.TEXTURE_2D,me,ke,K.width,K.height)}for(let K=0,ne=qe.length;K<ne;K++)Me=qe[K],He?N&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se,ze,Me):n.texImage2D(t.TEXTURE_2D,K,ke,Se,ze,Me);E.generateMipmaps=!1}else if(He){if(ft){const K=Ie(oe);n.texStorage2D(t.TEXTURE_2D,me,ke,K.width,K.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,ze,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,Se,ze,oe);g(E)&&h(ee),Ce.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function q(C,E,G){if(E.image.length!==6)return;const ee=_e(C,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const Q=i.get(re);if(re.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Ce=st.getPrimaries(st.workingColorSpace),fe=E.colorSpace===ur?null:st.getPrimaries(E.colorSpace),ye=E.colorSpace===ur||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let ne=0;ne<6;ne++)!et&&!oe?Se[ne]=x(E.image[ne],!0,r.maxCubemapSize):Se[ne]=oe?E.image[ne].image:E.image[ne],Se[ne]=Be(E,Se[ne]);const ze=Se[0],ke=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),qe=_(E.internalFormat,ke,Me,E.colorSpace),He=E.isVideoTexture!==!0,ft=Q.__version===void 0||ee===!0,N=re.dataReady;let me=S(E,ze);ie(t.TEXTURE_CUBE_MAP,E);let K;if(et){He&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,qe,ze.width,ze.height);for(let ne=0;ne<6;ne++){K=Se[ne].mipmaps;for(let he=0;he<K.length;he++){const ge=K[he];E.format!==oi?ke!==null?He?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ge.width,ge.height,ke,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,qe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ge.width,ge.height,ke,Me,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,qe,ge.width,ge.height,0,ke,Me,ge.data)}}}else{if(K=E.mipmaps,He&&ft){K.length>0&&me++;const ne=Ie(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Se[ne].width,Se[ne].height,ke,Me,Se[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Se[ne].width,Se[ne].height,0,ke,Me,Se[ne].data);for(let he=0;he<K.length;he++){const Ke=K[he].image[ne].image;He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,Ke.width,Ke.height,ke,Me,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,qe,Ke.width,Ke.height,0,ke,Me,Ke.data)}}else{He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ke,Me,Se[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,ke,Me,Se[ne]);for(let he=0;he<K.length;he++){const ge=K[he];He?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,ke,Me,ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,qe,ke,Me,ge.image[ne])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),Q.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function te(C,E,G,ee,re,Q){const Ce=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),ye=_(G.internalFormat,Ce,fe,G.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>Q),Se=Math.max(1,E.height>>Q);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,Q,ye,oe,Se,E.depth,0,Ce,fe,null):n.texImage2D(re,Q,ye,oe,Se,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,i.get(G).__webglTexture,0,de(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const ee=E.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,Q=v(E.stencilBuffer,re),Ce=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=de(E);Re(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Q,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{const ee=E.textures;for(let re=0;re<ee.length;re++){const Q=ee[re],Ce=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),ye=_(Q.internalFormat,Ce,fe,Q.colorSpace),et=de(E);G&&Re(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ye,E.width,E.height):Re(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,ye,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ye,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,re=de(E);if(E.depthTexture.format===po)Re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Co)Re(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ee}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(E.__webglDepthbuffer[ee],C,!1);else{const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(C,E,G){const ee=i.get(C);E!==void 0&&te(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ne(C)}function Fe(C){const E=C.texture,G=i.get(C),ee=i.get(E);C.addEventListener("dispose",A);const re=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ce=re.length>1;if(Ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)G.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ye=re.length;fe<ye;fe++){const et=i.get(re[fe]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Re(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ye=re[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const et=s.convert(ye.format,ye.colorSpace),oe=s.convert(ye.type),Se=_(ye.internalFormat,et,oe,ye.colorSpace,C.isXRRenderTarget===!0),ze=de(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Se,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),le(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(G.__webglFramebuffer[fe][ye],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else te(G.__webglFramebuffer[fe],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ye=re.length;fe<ye;fe++){const et=re[fe],oe=i.get(et);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ie(t.TEXTURE_2D,et),te(G.__webglFramebuffer,C,et,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(et)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),ie(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(G.__webglFramebuffer[ye],C,E,t.COLOR_ATTACHMENT0,fe,ye);else te(G.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,fe,0);g(E)&&h(fe),n.unbindTexture()}C.depthBuffer&&Ne(C)}function Qe(C){const E=C.textures;for(let G=0,ee=E.length;G<ee;G++){const re=E[G];if(g(re)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(re).__webglTexture;n.bindTexture(Q,Ce),h(Q),n.unbindTexture()}}}const J=[],b=[];function Le(C){if(C.samples>0){if(Re(C)===!1){const E=C.textures,G=C.width,ee=C.height;let re=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),fe=E.length>1;if(fe)for(let ye=0;ye<E.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const et=i.get(E[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,re,t.NEAREST),l===!0&&(J.length=0,b.length=0,J.push(t.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(Q),b.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<E.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const et=i.get(E[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function de(C){return Math.min(r.maxSamples,C.samples)}function Re(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(C){const E=o.render.frame;c.get(C)!==E&&(c.set(C,E),C.update())}function Be(C,E){const G=C.colorSpace,ee=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Dr&&G!==ur&&(st.getTransfer(G)===gt?(ee!==oi||re!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=j,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=V,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Re}function O5(t,e){function n(i,r=ur){let s;const o=st.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===kp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===C2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===A2)return t.BYTE;if(i===R2)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===zp)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===ul)return t.HALF_FLOAT;if(i===P2)return t.ALPHA;if(i===b2)return t.RGB;if(i===oi)return t.RGBA;if(i===L2)return t.LUMINANCE;if(i===D2)return t.LUMINANCE_ALPHA;if(i===po)return t.DEPTH_COMPONENT;if(i===Co)return t.DEPTH_STENCIL;if(i===I2)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===N2)return t.RG;if(i===Vp)return t.RG_INTEGER;if(i===Gp)return t.RGBA_INTEGER;if(i===bc||i===Lc||i===Dc||i===Ic)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Ud||i===Fd||i===Od)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===kd||i===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zd||i===kd)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===qd||i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$d)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===th||i===nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nc)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U2||i===ih||i===rh||i===sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class z5 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k5={type:"move"};class u0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(u,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k5)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const B5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H5=`
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

}`;class V5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:B5,fragmentShader:H5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new ef(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G5 extends ko{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,m=null;const x=new V5,g=n.getContextAttributes();let h=null,_=null;const v=[],S=[],P=new $e;let A=null;const T=new On;T.layers.enable(1),T.viewport=new Ct;const R=new On;R.layers.enable(2),R.viewport=new Ct;const B=[T,R],y=new z5;y.layers.enable(1),y.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=v[q];return te===void 0&&(te=new u0,v[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=v[q];return te===void 0&&(te=new u0,v[q]=te),te.getGripSpace()},this.getHand=function(q){let te=v[q];return te===void 0&&(te=new u0,v[q]=te),te.getHandSpace()};function H(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const le=v[te];le!==void 0&&(le.update(q.inputSource,q.frame,u||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",I);for(let q=0;q<v.length;q++){const te=S[q];te!==null&&(S[q]=null,v[q].disconnect(te))}M=null,k=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new us(p.framebufferWidth,p.framebufferHeight,{format:oi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,le=null,ue=null;g.depth&&(ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?Co:po,le=g.stencil?Ro:cs);const Ne={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new us(f.textureWidth,f.textureHeight,{format:oi,type:ji,depthTexture:new q2(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(q){for(let te=0;te<q.removed.length;te++){const le=q.removed[te],ue=S.indexOf(le);ue>=0&&(S[ue]=null,v[ue].disconnect(le))}for(let te=0;te<q.added.length;te++){const le=q.added[te];let ue=S.indexOf(le);if(ue===-1){for(let V=0;V<v.length;V++)if(V>=S.length){S.push(le),ue=V;break}else if(S[V]===null){S[V]=le,ue=V;break}if(ue===-1)break}const Ne=v[ue];Ne&&Ne.connect(le)}}const z=new O,Y=new O;function D(q,te,le){z.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ue=z.distanceTo(Y),Ne=te.projectionMatrix.elements,V=le.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),Qe=Ne[14]/(Ne[10]+1),J=(Ne[9]+1)/Ne[5],b=(Ne[9]-1)/Ne[5],Le=(Ne[8]-1)/Ne[0],de=(V[8]+1)/V[0],Re=Fe*Le,Ee=Fe*de,Be=ue/(-Le+de),Ie=Be*-Le;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=Fe+Be,E=Qe+Be,G=Re-Ie,ee=Ee+(ue-Ie),re=J*Qe/E*C,Q=b*Qe/E*C;q.projectionMatrix.makePerspective(G,ee,re,Q,C,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,le=q.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(le=x.depthFar)),y.near=R.near=T.near=te,y.far=R.far=T.far=le,(M!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,k=y.far);const ue=q.parent,Ne=y.cameras;Z(y,ue);for(let V=0;V<Ne.length;V++)Z(Ne[V],ue);Ne.length===2?D(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),$(q,y,ue)};function $(q,te,le){le===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ja*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ie=null;function _e(q,te){if(c=te.getViewerPose(u||o),m=te,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let V=0;V<le.length;V++){const Fe=le[V];let Qe=null;if(p!==null)Qe=p.getViewport(Fe);else{const b=d.getViewSubImage(f,Fe);Qe=b.viewport,V===0&&(e.setRenderTargetTextures(_,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let J=B[V];J===void 0&&(J=new On,J.layers.enable(V),J.viewport=new Ct,B[V]=J),J.matrix.fromArray(Fe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Fe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),V===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(J)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const V=d.getDepthInformation(le[0]);V&&V.isValid&&V.texture&&x.init(e,V,r.renderState)}}for(let le=0;le<v.length;le++){const ue=S[le],Ne=v[le];ue!==null&&Ne!==void 0&&Ne.update(ue,te,u||o)}ie&&ie(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}const De=new $2;De.setAnimationLoop(_e),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}const Br=new Xi,W5=new xt;function j5(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,G2(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,_,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,_,v):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===an&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===an&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const _=e.get(h),v=_.envMap,S=_.envMapRotation;v&&(g.envMap.value=v,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(W5.makeRotationFromEuler(Br)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,_,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const _=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X5(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(m(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(_,P);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function c(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),P=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let B=0,y=R.length;B<y;B++){const M=R[B];if(p(M,A,B,P)===!0){const k=M.__offset,H=Array.isArray(M.value)?M.value:[M.value];let j=0;for(let I=0;I<H.length;I++){const z=H[I],Y=x(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,k+j,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,P){const A=_.value,T=v+"_"+S;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const R=P[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(_){const v=_.uniforms;let S=0;const P=16;for(let T=0,R=v.length;T<R;T++){const B=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=B.length;y<M;y++){const k=B[y],H=Array.isArray(k.value)?k.value:[k.value];for(let j=0,I=H.length;j<I;j++){const z=H[j],Y=x(z),D=S%P,Z=D%Y.boundary,$=D+Z;S+=Z,$!==0&&P-$<Y.storage&&(S+=P-$),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Y.storage}}}const A=S%P;return A>0&&(S+=P-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class $5{constructor(e={}){const{canvas:n=IM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=Er,this.toneMappingExposure=1;const v=this;let S=!1,P=0,A=0,T=null,R=-1,B=null;const y=new Ct,M=new Ct;let k=null;const H=new Xe(0);let j=0,I=n.width,z=n.height,Y=1,D=null,Z=null;const $=new Ct(0,0,I,z),ie=new Ct(0,0,I,z);let _e=!1;const De=new X2;let q=!1,te=!1;const le=new xt,ue=new xt,Ne=new O,V=new Ct,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function J(){return T===null?Y:1}let b=i;function Le(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ge,!1),b===null){const U="webgl2";if(b=Le(U,w),b===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,Re,Ee,Be,Ie,C,E,G,ee,re,Q,Ce,fe,ye,et,oe,Se,ze,ke,Me,qe,He,ft,N;function me(){de=new Jw(b),de.init(),He=new O5(b,de),Re=new jw(b,de,e,He),Ee=new N5(b),Re.reverseDepthBuffer&&Ee.buffers.depth.setReversed(!0),Be=new tT(b),Ie=new x5,C=new F5(b,de,Ee,Ie,Re,He,Be),E=new $w(v),G=new Zw(v),ee=new aE(b),ft=new Gw(b,ee),re=new Qw(b,ee,Be,ft),Q=new iT(b,re,ee,Be),ke=new nT(b,Re,C),oe=new Xw(Ie),Ce=new _5(v,E,G,de,Re,ft,oe),fe=new j5(v,Ie),ye=new S5,et=new R5(de),ze=new Vw(v,E,G,Ee,Q,f,l),Se=new D5(v,Q,Re),N=new X5(b,Be,Re,Ee),Me=new Ww(b,de,Be),qe=new eT(b,de,Be),Be.programs=Ce.programs,v.capabilities=Re,v.extensions=de,v.properties=Ie,v.renderLists=ye,v.shadowMap=Se,v.state=Ee,v.info=Be}me();const K=new G5(v,b);this.xr=K,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(I,z,!1))},this.getSize=function(w){return w.set(I,z)},this.setSize=function(w,U,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,z=U,n.width=Math.floor(w*Y),n.height=Math.floor(U*Y),W===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(I*Y,z*Y).floor()},this.setDrawingBufferSize=function(w,U,W){I=w,z=U,Y=W,n.width=Math.floor(w*W),n.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,U,W,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,U,W,X),Ee.viewport(y.copy($).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,U,W,X){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,W,X),Ee.scissor(M.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){Ee.setScissorTest(_e=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,U=!0,W=!0){let X=0;if(w){let F=!1;if(T!==null){const ae=T.texture.format;F=ae===Gp||ae===Vp||ae===Hp}if(F){const ae=T.texture.type,pe=ae===ji||ae===cs||ae===Za||ae===Ro||ae===kp||ae===Bp,we=ze.getClearColor(),Ae=ze.getClearAlpha(),Ue=we.r,Oe=we.g,Pe=we.b;pe?(p[0]=Ue,p[1]=Oe,p[2]=Pe,p[3]=Ae,b.clearBufferuiv(b.COLOR,0,p)):(m[0]=Ue,m[1]=Oe,m[2]=Pe,m[3]=Ae,b.clearBufferiv(b.COLOR,0,m))}else X|=b.COLOR_BUFFER_BIT}U&&(X|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),et.dispose(),Ie.dispose(),E.dispose(),G.dispose(),Q.dispose(),ft.dispose(),N.dispose(),Ce.dispose(),K.dispose(),K.removeEventListener("sessionstart",sm),K.removeEventListener("sessionend",om),Nr.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Be.autoReset,U=Se.enabled,W=Se.autoUpdate,X=Se.needsUpdate,F=Se.type;me(),Be.autoReset=w,Se.enabled=U,Se.autoUpdate=W,Se.needsUpdate=X,Se.type=F}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const U=w.target;U.removeEventListener("dispose",Ke),Pt(U)}function Pt(w){fn(w),Ie.remove(w)}function fn(w){const U=Ie.get(w).programs;U!==void 0&&(U.forEach(function(W){Ce.releaseProgram(W)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,X,F,ae){U===null&&(U=Fe);const pe=F.isMesh&&F.matrixWorld.determinant()<0,we=Yx(w,U,W,X,F);Ee.setMaterial(X,pe);let Ae=W.index,Ue=1;if(X.wireframe===!0){if(Ae=re.getWireframeAttribute(W),Ae===void 0)return;Ue=2}const Oe=W.drawRange,Pe=W.attributes.position;let ot=Oe.start*Ue,pt=(Oe.start+Oe.count)*Ue;ae!==null&&(ot=Math.max(ot,ae.start*Ue),pt=Math.min(pt,(ae.start+ae.count)*Ue)),Ae!==null?(ot=Math.max(ot,0),pt=Math.min(pt,Ae.count)):Pe!=null&&(ot=Math.max(ot,0),pt=Math.min(pt,Pe.count));const wt=pt-ot;if(wt<0||wt===1/0)return;ft.setup(F,X,we,W,Ae);let yn,it=Me;if(Ae!==null&&(yn=ee.get(Ae),it=qe,it.setIndex(yn)),F.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*J()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(F.isLine){let be=X.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*J()),F.isLineSegments?it.setMode(b.LINES):F.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else F.isPoints?it.setMode(b.POINTS):F.isSprite&&it.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Ht=F._multiDrawCounts,rt=F._multiDrawCount,Yn=Ae?ee.get(Ae).bytesPerElement:1,xs=Ie.get(X).currentProgram.getUniforms();for(let Sn=0;Sn<rt;Sn++)xs.setValue(b,"_gl_DrawID",Sn),it.render(be[Sn]/Yn,Ht[Sn])}else if(F.isInstancedMesh)it.renderInstances(ot,wt,F.count);else if(W.isInstancedBufferGeometry){const be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ht=Math.min(W.instanceCount,be);it.renderInstances(ot,wt,Ht)}else it.render(ot,wt)};function nt(w,U,W){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,ml(w,U,W),w.side=Ar,w.needsUpdate=!0,ml(w,U,W),w.side=vi):ml(w,U,W)}this.compile=function(w,U,W=null){W===null&&(W=w),g=et.get(W),g.init(U),_.push(g),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),w!==W&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const X=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const we=ae[pe];nt(we,W,F),X.add(we)}else nt(ae,W,F),X.add(ae)}),_.pop(),g=null,X},this.compileAsync=function(w,U,W=null){const X=this.compile(w,U,W);return new Promise(F=>{function ae(){if(X.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){F(w);return}setTimeout(ae,10)}de.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let dn=null;function Mi(w){dn&&dn(w)}function sm(){Nr.stop()}function om(){Nr.start()}const Nr=new $2;Nr.setAnimationLoop(Mi),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(w){dn=w,K.setAnimationLoop(w),w===null?Nr.stop():Nr.start()},K.addEventListener("sessionstart",sm),K.addEventListener("sessionend",om),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,T),g=et.get(w,_.length),g.init(U),_.push(g),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(ue),te=this.localClippingEnabled,q=oe.init(this.clippingPlanes,te),x=ye.get(w,h.length),x.init(),h.push(x),K.enabled===!0&&K.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&of(ae,U,-1/0,v.sortObjects)}of(w,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,Z),Qe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Qe&&ze.addToRenderList(x,w),this.info.render.frame++,q===!0&&oe.beginShadows();const W=g.state.shadowsArray;Se.render(W,w,U),q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,F=x.transmissive;if(g.setupLights(),U.isArrayCamera){const ae=U.cameras;if(F.length>0)for(let pe=0,we=ae.length;pe<we;pe++){const Ae=ae[pe];lm(X,F,w,Ae)}Qe&&ze.render(w);for(let pe=0,we=ae.length;pe<we;pe++){const Ae=ae[pe];am(x,w,Ae,Ae.viewport)}}else F.length>0&&lm(X,F,w,U),Qe&&ze.render(w),am(x,w,U);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,U),ft.resetDefaultState(),R=-1,B=null,_.pop(),_.length>0?(g=_[_.length-1],q===!0&&oe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function of(w,U,W,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){X&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const pe=Q.update(w),we=w.material;we.visible&&x.push(w,pe,we,W,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const pe=Q.update(w),we=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),V.copy(pe.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Ae=pe.groups;for(let Ue=0,Oe=Ae.length;Ue<Oe;Ue++){const Pe=Ae[Ue],ot=we[Pe.materialIndex];ot&&ot.visible&&x.push(w,pe,ot,W,V.z,Pe)}}else we.visible&&x.push(w,pe,we,W,V.z,null)}}const ae=w.children;for(let pe=0,we=ae.length;pe<we;pe++)of(ae[pe],U,W,X)}function am(w,U,W,X){const F=w.opaque,ae=w.transmissive,pe=w.transparent;g.setupLightsView(W),q===!0&&oe.setGlobalState(v.clippingPlanes,W),X&&Ee.viewport(y.copy(X)),F.length>0&&pl(F,U,W),ae.length>0&&pl(ae,U,W),pe.length>0&&pl(pe,U,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function lm(w,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new us(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?ul:ji,minFilter:Jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ae=g.state.transmissionRenderTarget[X.id],pe=X.viewport||y;ae.setSize(pe.z,pe.w);const we=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(H),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&ze.render(W);const Ae=v.toneMapping;v.toneMapping=Er;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),q===!0&&oe.setGlobalState(v.clippingPlanes,X),pl(w,W,X),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),de.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Pe=0,ot=U.length;Pe<ot;Pe++){const pt=U[Pe],wt=pt.object,yn=pt.geometry,it=pt.material,be=pt.group;if(it.side===vi&&wt.layers.test(X.layers)){const Ht=it.side;it.side=an,it.needsUpdate=!0,cm(wt,W,X,yn,it,be),it.side=Ht,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(we),v.setClearColor(H,j),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=Ae}function pl(w,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=w.length;F<ae;F++){const pe=w[F],we=pe.object,Ae=pe.geometry,Ue=X===null?pe.material:X,Oe=pe.group;we.layers.test(W.layers)&&cm(we,U,W,Ae,Ue,Oe)}}function cm(w,U,W,X,F,ae){w.onBeforeRender(v,U,W,X,F,ae),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,U,W,X,w,ae),F.transparent===!0&&F.side===vi&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,v.renderBufferDirect(W,U,X,F,w,ae),F.side=Ar,F.needsUpdate=!0,v.renderBufferDirect(W,U,X,F,w,ae),F.side=vi):v.renderBufferDirect(W,U,X,F,w,ae),w.onAfterRender(v,U,W,X,F,ae)}function ml(w,U,W){U.isScene!==!0&&(U=Fe);const X=Ie.get(w),F=g.state.lights,ae=g.state.shadowsArray,pe=F.state.version,we=Ce.getParameters(w,F.state,ae,U,W),Ae=Ce.getProgramCacheKey(we);let Ue=X.programs;X.environment=w.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Ke),Ue=new Map,X.programs=Ue);let Oe=Ue.get(Ae);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===pe)return fm(w,we),Oe}else we.uniforms=Ce.getUniforms(w),w.onBeforeCompile(we,v),Oe=Ce.acquireProgram(we,Ae),Ue.set(Ae,Oe),X.uniforms=we.uniforms;const Pe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),fm(w,we),X.needsLights=Zx(w),X.lightsStateVersion=pe,X.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function um(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function fm(w,U){const W=Ie.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Yx(w,U,W,X,F){U.isScene!==!0&&(U=Fe),C.resetTextureUnits();const ae=U.fog,pe=X.isMeshStandardMaterial?U.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Dr,Ae=(X.isMeshStandardMaterial?G:E).get(X.envMap||pe),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let wt=Er;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=v.toneMapping);const yn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=yn!==void 0?yn.length:0,be=Ie.get(X),Ht=g.state.lights;if(q===!0&&(te===!0||w!==B)){const Dn=w===B&&X.id===R;oe.setState(X,w,Dn)}let rt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ht.state.version||be.outputColorSpace!==we||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Ae||X.fog===!0&&be.fog!==ae||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==Oe||be.morphTargets!==Pe||be.morphNormals!==ot||be.morphColors!==pt||be.toneMapping!==wt||be.morphTargetsCount!==it)&&(rt=!0):(rt=!0,be.__version=X.version);let Yn=be.currentProgram;rt===!0&&(Yn=ml(X,U,F));let xs=!1,Sn=!1,af=!1;const At=Yn.getUniforms(),Ki=be.uniforms;if(Ee.useProgram(Yn.program)&&(xs=!0,Sn=!0,af=!0),X.id!==R&&(R=X.id,Sn=!0),xs||B!==w){Re.reverseDepthBuffer?(le.copy(w.projectionMatrix),UM(le),FM(le),At.setValue(b,"projectionMatrix",le)):At.setValue(b,"projectionMatrix",w.projectionMatrix),At.setValue(b,"viewMatrix",w.matrixWorldInverse);const Dn=At.map.cameraPosition;Dn!==void 0&&Dn.setValue(b,Ne.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,Sn=!0,af=!0)}if(F.isSkinnedMesh){At.setOptional(b,F,"bindMatrix"),At.setOptional(b,F,"bindMatrixInverse");const Dn=F.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),At.setValue(b,"boneTexture",Dn.boneTexture,C))}F.isBatchedMesh&&(At.setOptional(b,F,"batchingTexture"),At.setValue(b,"batchingTexture",F._matricesTexture,C),At.setOptional(b,F,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",F._indirectTexture,C),At.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",F._colorsTexture,C));const lf=W.morphAttributes;if((lf.position!==void 0||lf.normal!==void 0||lf.color!==void 0)&&ke.update(F,W,Yn),(Sn||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,At.setValue(b,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ki.envMap.value=Ae,Ki.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(Ki.envMapIntensity.value=U.environmentIntensity),Sn&&(At.setValue(b,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Kx(Ki,af),ae&&X.fog===!0&&fe.refreshFogUniforms(Ki,ae),fe.refreshMaterialUniforms(Ki,X,Y,z,g.state.transmissionRenderTarget[w.id]),Fc.upload(b,um(be),Ki,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fc.upload(b,um(be),Ki,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(b,"center",F.center),At.setValue(b,"modelViewMatrix",F.modelViewMatrix),At.setValue(b,"normalMatrix",F.normalMatrix),At.setValue(b,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dn=X.uniformsGroups;for(let cf=0,Jx=Dn.length;cf<Jx;cf++){const dm=Dn[cf];N.update(dm,Yn),N.bind(dm,Yn)}}return Yn}function Kx(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Zx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,U,W){Ie.get(w.texture).__webglTexture=U,Ie.get(w.depthTexture).__webglTexture=W;const X=Ie.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const W=Ie.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){T=w,P=U,A=W;let X=!0,F=null,ae=!1,pe=!1;if(w){const Ae=Ie.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(b.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ae.__hasExternalTextures)C.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(Ae.__boundDepthTexture!==Pe){if(Pe!==null&&Ie.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const Oe=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?F=Oe[U][W]:F=Oe[U],ae=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[W]:F=Oe,y.copy(w.viewport),M.copy(w.scissor),k=w.scissorTest}else y.copy($).multiplyScalar(Y).floor(),M.copy(ie).multiplyScalar(Y).floor(),k=_e;if(Ee.bindFramebuffer(b.FRAMEBUFFER,F)&&X&&Ee.drawBuffers(w,F),Ee.viewport(y),Ee.scissor(M),Ee.setScissorTest(k),ae){const Ae=Ie.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,W)}else if(pe){const Ae=Ie.get(w.texture),Ue=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ue)}R=-1},this.readRenderTargetPixels=function(w,U,W,X,F,ae,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){Ee.bindFramebuffer(b.FRAMEBUFFER,we);try{const Ae=w.texture,Ue=Ae.format,Oe=Ae.type;if(!Re.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&W>=0&&W<=w.height-F&&b.readPixels(U,W,X,F,He.convert(Ue),He.convert(Oe),ae)}finally{const Ae=T!==null?Ie.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,U,W,X,F,ae,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){const Ae=w.texture,Ue=Ae.format,Oe=Ae.type;if(!Re.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-X&&W>=0&&W<=w.height-F){Ee.bindFramebuffer(b.FRAMEBUFFER,we);const Pe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),b.readPixels(U,W,X,F,He.convert(Ue),He.convert(Oe),0);const ot=T!==null?Ie.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,ot);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await NM(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae),b.deleteBuffer(Pe),b.deleteSync(pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,W=0){w.isTexture!==!0&&(Uc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(w.image.width*X),ae=Math.floor(w.image.height*X),pe=U!==null?U.x:0,we=U!==null?U.y:0;C.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,W,0,0,pe,we,F,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(w,U,W=null,X=null,F=0){w.isTexture!==!0&&(Uc("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let ae,pe,we,Ae,Ue,Oe;W!==null?(ae=W.max.x-W.min.x,pe=W.max.y-W.min.y,we=W.min.x,Ae=W.min.y):(ae=w.image.width,pe=w.image.height,we=0,Ae=0),X!==null?(Ue=X.x,Oe=X.y):(Ue=0,Oe=0);const Pe=He.convert(U.format),ot=He.convert(U.type);C.setTexture2D(U,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const pt=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),be=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[F]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Ue,Oe,ae,pe,Pe,ot,Ht.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Ue,Oe,Ht.width,Ht.height,Pe,Ht.data):b.texSubImage2D(b.TEXTURE_2D,F,Ue,Oe,ae,pe,Pe,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,pt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,be),F===0&&U.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,U,W=null,X=null,F=0){w.isTexture!==!0&&(Uc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0);let ae,pe,we,Ae,Ue,Oe,Pe,ot,pt;const wt=w.isCompressedTexture?w.mipmaps[F]:w.image;W!==null?(ae=W.max.x-W.min.x,pe=W.max.y-W.min.y,we=W.max.z-W.min.z,Ae=W.min.x,Ue=W.min.y,Oe=W.min.z):(ae=wt.width,pe=wt.height,we=wt.depth,Ae=0,Ue=0,Oe=0),X!==null?(Pe=X.x,ot=X.y,pt=X.z):(Pe=0,ot=0,pt=0);const yn=He.convert(U.format),it=He.convert(U.type);let be;if(U.isData3DTexture)C.setTexture3D(U,0),be=b.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),be=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Yn=b.getParameter(b.UNPACK_SKIP_PIXELS),xs=b.getParameter(b.UNPACK_SKIP_ROWS),Sn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ue),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(be,F,Pe,ot,pt,ae,pe,we,yn,it,wt.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(be,F,Pe,ot,pt,ae,pe,we,yn,wt.data):b.texSubImage3D(be,F,Pe,ot,pt,ae,pe,we,yn,it,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,xs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Sn),F===0&&U.generateMipmaps&&b.generateMipmap(be),Ee.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Ee.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wp?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Ju?"display-p3":"srgb"}}class q5 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Y5{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new O;class gu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=si(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Q2 extends _s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const ea=new O,Fs=new O,Os=new O,zs=new $e,ta=new $e,ex=new xt,ec=new O,na=new O,tc=new O,v1=new $e,f0=new $e,_1=new $e;class K5 extends Jt{constructor(e=new Q2){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new kt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Y5(n,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new gu(i,3,0,!1)),Us.setAttribute("uv",new gu(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new $e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),ex.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;nc(ec.set(-.5,-.5,0),Os,o,Fs,r,s),nc(na.set(.5,-.5,0),Os,o,Fs,r,s),nc(tc.set(.5,.5,0),Os,o,Fs,r,s),v1.set(0,0),f0.set(1,0),_1.set(1,1);let a=e.ray.intersectTriangle(ec,na,tc,!1,ea);if(a===null&&(nc(na.set(-.5,.5,0),Os,o,Fs,r,s),f0.set(0,1),a=e.ray.intersectTriangle(ec,tc,na,!1,ea),a===null))return;const l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||n.push({distance:l,point:ea.clone(),uv:zn.getInterpolation(ea,ec,na,tc,v1,f0,_1,new $e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nc(t,e,n,i,r,s){zs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ta.x=s*zs.x-r*zs.y,ta.y=r*zs.x+s*zs.y):ta.copy(zs),t.copy(e),t.x+=ta.x,t.y+=ta.y,t.applyMatrix4(ex)}class Hs extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vu=new O,_u=new O,x1=new xt,ia=new Qu,ic=new dl,d0=new O,y1=new O;class lh extends Jt{constructor(e=new kt,n=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vu.fromBufferAttribute(n,r-1),_u.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vu.distanceTo(_u);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(r),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;x1.copy(r).invert(),ia.copy(e.ray).applyMatrix4(x1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=u){const h=c.getX(x),_=c.getX(x+1),v=rc(this,e,ia,l,h,_);v&&n.push(v)}if(this.isLineLoop){const x=c.getX(m-1),g=c.getX(p),h=rc(this,e,ia,l,x,g);h&&n.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=u){const h=rc(this,e,ia,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=rc(this,e,ia,l,m-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(vu.fromBufferAttribute(o,r),_u.fromBufferAttribute(o,s),n.distanceSqToSegment(vu,_u,d0,y1)>i)return;d0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(d0);if(!(l<e.near||l>e.far))return{distance:l,point:y1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class h0 extends lh{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Z5 extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S1=new xt,ch=new Qu,sc=new dl,oc=new O;class J5 extends Jt{constructor(e=new kt,n=new Z5){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(r),sc.radius+=s,e.ray.intersectsSphere(sc)===!1)return;S1.copy(r).invert(),ch.copy(e.ray).applyMatrix4(S1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=f,x=p;m<x;m++){const g=u.getX(m);oc.fromBufferAttribute(d,g),M1(oc,g,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,x=p;m<x;m++)oc.fromBufferAttribute(d,m),M1(oc,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function M1(t,e,n,i,r,s,o){const a=ch.distanceSqToPoint(t);if(a<n){const l=new O;ch.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Q5 extends ln{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qp extends kt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let d=e;const f=(n-e)/r,p=new O,m=new $e;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const h=s+g/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),u.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,c.push(m.x,m.y)}d+=f}for(let x=0;x<r;x++){const g=x*(i+1);for(let h=0;h<i;h++){const _=h+g,v=_,S=_+i+1,P=_+i+2,A=_+1;a.push(v,S,A),a.push(S,P,A)}}this.setIndex(a),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yp extends kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new O,f=new O,p=[],m=[],x=[],g=[];for(let h=0;h<=i;h++){const _=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(A+S,1-v),_.push(u++)}c.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const v=c[h][_+1],S=c[h][_],P=c[h+1][_],A=c[h+1][_+1];(h!==0||o>0)&&p.push(v,S,A),(h!==i-1||l<Math.PI)&&p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const E1=new xt;class e6{constructor(e,n,i=0,r=1/0){this.ray=new Qu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return E1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E1),this}intersectObject(e,n=!0,i=[]){return uh(e,this,i,n),i.sort(w1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uh(e[r],this,i,n);return i.sort(w1),i}}function w1(t,e){return t.distance-e.distance}function uh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)uh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);const li=Math.PI/180,fh=180/Math.PI;function tx(t){return Math.max(-1,Math.min(1,t))}function xu(t,e,n,i){const r=(i-e)*li;let s=((n-t+540)%360-180)*li;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*li)*Math.cos(i*li)*a*a;return 2*Math.asin(tx(Math.sqrt(l)))*fh}function Kp(t,e,n,i){const r=i*li,s=n*li,o=e*li,a=t*li,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),u=Math.asin(tx(l)),c=Math.sin(s)*Math.sin(r)*Math.cos(o),d=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(c,d))*fh%360+360)%360,u*fh]}function t6(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(Kp(t,e,360*s/i,n));return r}function bo(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function Lo(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function T1(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}const rr=1;function n6(t){return t.kind==="sun"?new Xe(16765565):t.kind==="moon"?new Xe(14673650):t.kind==="planet"?new Xe(10406911):new Xe(16777215)}function A1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function i6(t){var f;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=Ve.useRef(null),u=Ve.useRef(null),[c,d]=Ve.useState(null);return Ve.useEffect(()=>{if(l.current)try{const p=new r6(l.current,t);return u.current=p,()=>{p.dispose(),u.current=null}}catch{d("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),Ve.useEffect(()=>{var p;(p=u.current)==null||p.update(t)}),Ve.useEffect(()=>{var m;if(!t.focusToken)return;const p=e.targets.find(x=>x.id===t.focusToken.id);p&&((m=u.current)==null||m.flyTo(p.hx,p.hy,p.hz))},[(f=t.focusToken)==null?void 0:f.nonce]),L.jsxs("div",{className:"globe-wrap",children:[c?L.jsx("div",{className:"globe-mount globe-error",children:c}):L.jsx("div",{ref:l,className:"globe-mount"}),L.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",L.jsx("br",{}),"地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",i?" · 已开启地平线裁切":""]})]})}class r6{constructor(e,n){tt(this,"renderer");tt(this,"scene");tt(this,"camera");tt(this,"raf",0);tt(this,"mount");tt(this,"resizeObs");tt(this,"points");tt(this,"pointMaterial");tt(this,"fovLine");tt(this,"horizonLine");tt(this,"groundDisc");tt(this,"graticuleGroup",new Qr);tt(this,"equatorLine",null);tt(this,"highlight");tt(this,"labelsGroup",new Qr);tt(this,"annotationsGroup",new Qr);tt(this,"raycaster",new e6);tt(this,"pickSphere");tt(this,"drag",{active:!1,x:0,y:0,moved:0});tt(this,"camDir",new O(0,0,1));tt(this,"camTargetDir",new O(0,0,1));tt(this,"props");tt(this,"positionData",[]);tt(this,"disposed",!1);tt(this,"cleanupEvents",()=>{});tt(this,"everMoved",!1);tt(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(rr)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new $5({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new q5,this.scene.background=new Xe(461332),this.camera=new On(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new ai(new Yp(rr,48,32),new mu({visible:!1,side:an})),this.scene.add(this.pickSphere),this.highlight=new ai(new qp(.022,.032,32),new mu({color:16766282,side:vi,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new kt,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new sn(i,3)),n.setAttribute("aSize",new sn(r,1)),n.setAttribute("aColor",new sn(s,3)),n.setAttribute("aShape",new sn(o,1)),n.setDrawRange(0,0),this.pointMaterial=new $i({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`}),this.points=new J5(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new kt().setFromPoints(e),s=new Hs({color:n,transparent:i<1,opacity:i});return new h0(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new O(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new h0(new kt().setFromPoints(e),new Hs({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new O(Math.cos(s)*rr,-Math.sin(s)*rr,-.002))}this.groundDisc=new lh(new kt().setFromPoints([...n,new O(0,0,-rr*.98),n[0]]),new Hs({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new O(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new O(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new O(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new Q5(r),a=new Q2({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new K5(a);return l.position.copy(n.clone().multiplyScalar(rr*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,u=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(u),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,u)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=Pg.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new O(0,0,1),o=new O().crossVectors(s,r).normalize(),a=new fs().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new fs().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new $e(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const u=a.clone().project(this.camera),c=(u.x+1)/2*i.width,d=(-u.y+1)/2*i.height,f=(r.x+1)/2*i.width,p=(-r.y+1)/2*i.height;Math.hypot(c-f,d-p)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(c=>c.inFov&&c.passesMag&&(!n||c.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),u=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let c=0;c<s;c++){const d=i[c],f=new O(d.hx,d.hy,d.hz).multiplyScalar(rr);o.setXYZ(c,f.x,f.y,f.z);const p=d.id===this.props.selectedId||d.id===this.props.hoverId;let m=Pg.clamp(2.6-d.mag*.28,.5,3.4)*.012;d.kind!=="star"&&(m=Math.max(m,.04)),p&&(m*=1.6),a.setX(c,m);const x=n6(d);l.setXYZ(c,x.r,x.g,x.b),u.setX(c,A1(d.kind)==="circle"?0:A1(d.kind)==="square"?1:2),this.positionData.push({id:d.id,vec:new O(d.hx,d.hy,d.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,u.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*li,i=e.sky.centerAlt*li;return new O(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*li,r=Math.abs(n.z)<.9?new O(0,0,1):new O(1,0,0),s=new O().crossVectors(r,n).normalize(),o=new O().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const u=2*Math.PI*l/128,c=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(u))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(u))).normalize().multiplyScalar(rr*1.002);a.push(c)}this.fovLine=new h0(new kt().setFromPoints(a),new Hs({color:5759881})),this.scene.add(this.fovLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new O(o,a,l)),s=new lh(new kt().setFromPoints(r),new Hs({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new O(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class ds{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*s6(t){for(const e of t)yield*e}function nx(t){return Array.from(s6(t))}function no(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var Ye=1e-6,ix=1e-12,Ze=Math.PI,Vn=Ze/2,R1=Ze/4,qn=Ze*2,ei=180/Ze,Gt=Ze/180,ht=Math.abs,rx=Math.atan,Do=Math.atan2,ut=Math.cos,ac=Math.ceil,lt=Math.sin,o6=Math.sign||function(t){return t>0?1:t<0?-1:0},Yi=Math.sqrt;function sx(t){return t>1?0:t<-1?Ze:Math.acos(t)}function Rr(t){return t>1?Vn:t<-1?-Vn:Math.asin(t)}function Gn(){}function yu(t,e){t&&P1.hasOwnProperty(t.type)&&P1[t.type](t,e)}var C1={Feature:function(t,e){yu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)yu(n[i].geometry,e)}},P1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){dh(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)dh(n[i],e,0)},Polygon:function(t,e){b1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)b1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)yu(n[i],e)}};function dh(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function b1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)dh(t[n],e,1);e.polygonEnd()}function Vs(t,e){t&&C1.hasOwnProperty(t.type)?C1[t.type](t,e):yu(t,e)}function hh(t){return[Do(t[1],t[0]),Rr(t[2])]}function Io(t){var e=t[0],n=t[1],i=ut(n);return[i*ut(e),i*lt(e),lt(n)]}function lc(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Su(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function p0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function cc(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function ph(t){var e=Yi(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function ks(t){return function(){return t}}function mh(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function gh(t,e){return ht(t)>Ze&&(t-=Math.round(t/qn)*qn),[t,e]}gh.invert=gh;function ox(t,e,n){return(t%=qn)?e||n?mh(D1(t),I1(e,n)):D1(t):e||n?I1(e,n):gh}function L1(t){return function(e,n){return e+=t,ht(e)>Ze&&(e-=Math.round(e/qn)*qn),[e,n]}}function D1(t){var e=L1(t);return e.invert=L1(-t),e}function I1(t,e){var n=ut(t),i=lt(t),r=ut(e),s=lt(e);function o(a,l){var u=ut(l),c=ut(a)*u,d=lt(a)*u,f=lt(l),p=f*n+c*i;return[Do(d*r-p*s,c*n-f*i),Rr(p*r+d*s)]}return o.invert=function(a,l){var u=ut(l),c=ut(a)*u,d=lt(a)*u,f=lt(l),p=f*r-d*s;return[Do(d*r+f*s,c*n+p*i),Rr(p*n-c*i)]},o}function ax(t,e,n,i,r,s){if(n){var o=ut(e),a=lt(e),l=i*n;r==null?(r=e+i*qn,s=e-l/2):(r=N1(o,r),s=N1(o,s),(i>0?r<s:r>s)&&(r+=i*qn));for(var u,c=r;i>0?c>s:c<s;c-=l)u=hh([o,-a*ut(c),-a*lt(c)]),t.point(u[0],u[1])}}function N1(t,e){e=Io(e),e[0]-=t,ph(e);var n=sx(-e[1]);return((-e[2]<0?-n:n)+qn-Ye)%qn}function nf(){var t=ks([0,0]),e=ks(90),n=ks(2),i,r,s={point:o};function o(l,u){i.push(l=r(l,u)),l[0]*=ei,l[1]*=ei}function a(){var l=t.apply(this,arguments),u=e.apply(this,arguments)*Gt,c=n.apply(this,arguments)*Gt;return i=[],r=ox(-l[0]*Gt,-l[1]*Gt,0).invert,ax(s,u,c,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:ks([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:ks(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:ks(+l),a):n},a}function lx(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:Gn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Oc(t,e){return ht(t[0]-e[0])<Ye&&ht(t[1]-e[1])<Ye}function uc(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function cx(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(m){if(!((x=m.length-1)<=0)){var x,g=m[0],h=m[x],_;if(Oc(g,h)){if(!g[2]&&!h[2]){for(r.lineStart(),a=0;a<x;++a)r.point((g=m[a])[0],g[1]);r.lineEnd();return}h[0]+=2*Ye}s.push(_=new uc(g,m,null,!0)),o.push(_.o=new uc(g,null,_,!1)),s.push(_=new uc(h,m,null,!1)),o.push(_.o=new uc(h,null,_,!0))}}),!!s.length){for(o.sort(e),U1(s),U1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var u=s[0],c,d;;){for(var f=u,p=!0;f.v;)if((f=f.n)===u)return;c=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(a=0,l=c.length;a<l;++a)r.point((d=c[a])[0],d[1]);else i(f.x,f.n.x,1,r);f=f.n}else{if(p)for(c=f.p.z,a=c.length-1;a>=0;--a)r.point((d=c[a])[0],d[1]);else i(f.x,f.p.x,-1,r);f=f.p}f=f.o,c=f.z,p=!p}while(!f.v);r.lineEnd()}}}function U1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function m0(t){return ht(t[0])<=Ze?t[0]:o6(t[0])*((ht(t[0])+Ze)%qn-Ze)}function a6(t,e){var n=m0(e),i=e[1],r=lt(i),s=[lt(n),-ut(n),0],o=0,a=0,l=new ds;r===1?i=Vn+Ye:r===-1&&(i=-Vn-Ye);for(var u=0,c=t.length;u<c;++u)if(f=(d=t[u]).length)for(var d,f,p=d[f-1],m=m0(p),x=p[1]/2+R1,g=lt(x),h=ut(x),_=0;_<f;++_,m=S,g=A,h=T,p=v){var v=d[_],S=m0(v),P=v[1]/2+R1,A=lt(P),T=ut(P),R=S-m,B=R>=0?1:-1,y=B*R,M=y>Ze,k=g*A;if(l.add(Do(k*B*lt(y),h*T+k*ut(y))),o+=M?R+B*qn:R,M^m>=n^S>=n){var H=Su(Io(p),Io(v));ph(H);var j=Su(s,H);ph(j);var I=(M^R>=0?-1:1)*Rr(j[2]);(i>I||i===I&&(H[0]||H[1]))&&(a+=M^R>=0?1:-1)}}return(o<-Ye||o<Ye&&l<-ix)^a&1}function ux(t,e,n,i){return function(r){var s=e(r),o=lx(),a=e(o),l=!1,u,c,d,f={point:p,lineStart:x,lineEnd:g,polygonStart:function(){f.point=h,f.lineStart=_,f.lineEnd=v,c=[],u=[]},polygonEnd:function(){f.point=p,f.lineStart=x,f.lineEnd=g,c=nx(c);var S=a6(u,i);c.length?(l||(r.polygonStart(),l=!0),cx(c,c6,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),c=u=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,P){t(S,P)&&r.point(S,P)}function m(S,P){s.point(S,P)}function x(){f.point=m,s.lineStart()}function g(){f.point=p,s.lineEnd()}function h(S,P){d.push([S,P]),a.point(S,P)}function _(){a.lineStart(),d=[]}function v(){h(d[0][0],d[0][1]),a.lineEnd();var S=a.clean(),P=o.result(),A,T=P.length,R,B,y;if(d.pop(),u.push(d),d=null,!!T){if(S&1){if(B=P[0],(R=B.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<R;++A)r.point((y=B[A])[0],y[1]);r.lineEnd()}return}T>1&&S&2&&P.push(P.pop().concat(P.shift())),c.push(P.filter(l6))}}return f}}function l6(t){return t.length>1}function c6(t,e){return((t=t.x)[0]<0?t[1]-Vn-Ye:Vn-t[1])-((e=e.x)[0]<0?e[1]-Vn-Ye:Vn-e[1])}const F1=ux(function(){return!0},u6,d6,[-Ze,-Vn]);function u6(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Ze:-Ze,l=ht(s-e);ht(l-Ze)<Ye?(t.point(e,n=(n+o)/2>0?Vn:-Vn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Ze&&(ht(e-i)<Ye&&(e-=i*Ye),ht(s-a)<Ye&&(s-=a*Ye),n=f6(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function f6(t,e,n,i){var r,s,o=lt(t-n);return ht(o)>Ye?rx((lt(e)*(s=ut(i))*lt(n)-lt(i)*(r=ut(e))*lt(t))/(r*s*o)):(e+i)/2}function d6(t,e,n,i){var r;if(t==null)r=n*Vn,i.point(-Ze,r),i.point(0,r),i.point(Ze,r),i.point(Ze,0),i.point(Ze,-r),i.point(0,-r),i.point(-Ze,-r),i.point(-Ze,0),i.point(-Ze,r);else if(ht(t[0]-e[0])>Ye){var s=t[0]<e[0]?Ze:-Ze;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function h6(t){var e=ut(t),n=2*Gt,i=e>0,r=ht(e)>Ye;function s(c,d,f,p){ax(p,t,n,f,c,d)}function o(c,d){return ut(c)*ut(d)>e}function a(c){var d,f,p,m,x;return{lineStart:function(){m=p=!1,x=1},point:function(g,h){var _=[g,h],v,S=o(g,h),P=i?S?0:u(g,h):S?u(g+(g<0?Ze:-Ze),h):0;if(!d&&(m=p=S)&&c.lineStart(),S!==p&&(v=l(d,_),(!v||Oc(d,v)||Oc(_,v))&&(_[2]=1)),S!==p)x=0,S?(c.lineStart(),v=l(_,d),c.point(v[0],v[1])):(v=l(d,_),c.point(v[0],v[1],2),c.lineEnd()),d=v;else if(r&&d&&i^S){var A;!(P&f)&&(A=l(_,d,!0))&&(x=0,i?(c.lineStart(),c.point(A[0][0],A[0][1]),c.point(A[1][0],A[1][1]),c.lineEnd()):(c.point(A[1][0],A[1][1]),c.lineEnd(),c.lineStart(),c.point(A[0][0],A[0][1],3)))}S&&(!d||!Oc(d,_))&&c.point(_[0],_[1]),d=_,p=S,f=P},lineEnd:function(){p&&c.lineEnd(),d=null},clean:function(){return x|(m&&p)<<1}}}function l(c,d,f){var p=Io(c),m=Io(d),x=[1,0,0],g=Su(p,m),h=lc(g,g),_=g[0],v=h-_*_;if(!v)return!f&&c;var S=e*h/v,P=-e*_/v,A=Su(x,g),T=cc(x,S),R=cc(g,P);p0(T,R);var B=A,y=lc(T,B),M=lc(B,B),k=y*y-M*(lc(T,T)-1);if(!(k<0)){var H=Yi(k),j=cc(B,(-y-H)/M);if(p0(j,T),j=hh(j),!f)return j;var I=c[0],z=d[0],Y=c[1],D=d[1],Z;z<I&&(Z=I,I=z,z=Z);var $=z-I,ie=ht($-Ze)<Ye,_e=ie||$<Ye;if(!ie&&D<Y&&(Z=Y,Y=D,D=Z),_e?ie?Y+D>0^j[1]<(ht(j[0]-I)<Ye?Y:D):Y<=j[1]&&j[1]<=D:$>Ze^(I<=j[0]&&j[0]<=z)){var De=cc(B,(-y+H)/M);return p0(De,T),[j,hh(De)]}}}function u(c,d){var f=i?t:Ze-t,p=0;return c<-f?p|=1:c>f&&(p|=2),d<-f?p|=4:d>f&&(p|=8),p}return ux(o,a,s,i?[0,-t]:[-Ze,t-Ze])}function p6(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],u=e[1],c=0,d=1,f=l-o,p=u-a,m;if(m=n-o,!(!f&&m>0)){if(m/=f,f<0){if(m<c)return;m<d&&(d=m)}else if(f>0){if(m>d)return;m>c&&(c=m)}if(m=r-o,!(!f&&m<0)){if(m/=f,f<0){if(m>d)return;m>c&&(c=m)}else if(f>0){if(m<c)return;m<d&&(d=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<c)return;m<d&&(d=m)}else if(p>0){if(m>d)return;m>c&&(c=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>d)return;m>c&&(c=m)}else if(p>0){if(m<c)return;m<d&&(d=m)}return c>0&&(t[0]=o+c*f,t[1]=a+c*p),d<1&&(e[0]=o+d*f,e[1]=a+d*p),!0}}}}}var fa=1e9,fc=-fa;function m6(t,e,n,i){function r(u,c){return t<=u&&u<=n&&e<=c&&c<=i}function s(u,c,d,f){var p=0,m=0;if(u==null||(p=o(u,d))!==(m=o(c,d))||l(u,c)<0^d>0)do f.point(p===0||p===3?t:n,p>1?i:e);while((p=(p+d+4)%4)!==m);else f.point(c[0],c[1])}function o(u,c){return ht(u[0]-t)<Ye?c>0?0:3:ht(u[0]-n)<Ye?c>0?2:1:ht(u[1]-e)<Ye?c>0?1:0:c>0?3:2}function a(u,c){return l(u.x,c.x)}function l(u,c){var d=o(u,1),f=o(c,1);return d!==f?d-f:d===0?c[1]-u[1]:d===1?u[0]-c[0]:d===2?u[1]-c[1]:c[0]-u[0]}return function(u){var c=u,d=lx(),f,p,m,x,g,h,_,v,S,P,A,T={point:R,lineStart:k,lineEnd:H,polygonStart:y,polygonEnd:M};function R(I,z){r(I,z)&&c.point(I,z)}function B(){for(var I=0,z=0,Y=p.length;z<Y;++z)for(var D=p[z],Z=1,$=D.length,ie=D[0],_e,De,q=ie[0],te=ie[1];Z<$;++Z)_e=q,De=te,ie=D[Z],q=ie[0],te=ie[1],De<=i?te>i&&(q-_e)*(i-De)>(te-De)*(t-_e)&&++I:te<=i&&(q-_e)*(i-De)<(te-De)*(t-_e)&&--I;return I}function y(){c=d,f=[],p=[],A=!0}function M(){var I=B(),z=A&&I,Y=(f=nx(f)).length;(z||Y)&&(u.polygonStart(),z&&(u.lineStart(),s(null,null,1,u),u.lineEnd()),Y&&cx(f,a,I,s,u),u.polygonEnd()),c=u,f=p=m=null}function k(){T.point=j,p&&p.push(m=[]),P=!0,S=!1,_=v=NaN}function H(){f&&(j(x,g),h&&S&&d.rejoin(),f.push(d.result())),T.point=R,S&&c.lineEnd()}function j(I,z){var Y=r(I,z);if(p&&m.push([I,z]),P)x=I,g=z,h=Y,P=!1,Y&&(c.lineStart(),c.point(I,z));else if(Y&&S)c.point(I,z);else{var D=[_=Math.max(fc,Math.min(fa,_)),v=Math.max(fc,Math.min(fa,v))],Z=[I=Math.max(fc,Math.min(fa,I)),z=Math.max(fc,Math.min(fa,z))];p6(D,Z,t,e,n,i)?(S||(c.lineStart(),c.point(D[0],D[1])),c.point(Z[0],Z[1]),Y||c.lineEnd(),A=!1):Y&&(c.lineStart(),c.point(I,z),A=!1)}_=I,v=z,S=Y}return T}}function O1(t,e,n){var i=no(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function z1(t,e,n){var i=no(t,e-Ye,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function g6(){var t,e,n,i,r,s,o,a,l=10,u=l,c=90,d=360,f,p,m,x,g=2.5;function h(){return{type:"MultiLineString",coordinates:_()}}function _(){return no(ac(i/c)*c,n,c).map(m).concat(no(ac(a/d)*d,o,d).map(x)).concat(no(ac(e/l)*l,t,l).filter(function(v){return ht(v%c)>Ye}).map(f)).concat(no(ac(s/u)*u,r,u).filter(function(v){return ht(v%d)>Ye}).map(p))}return h.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},h.outline=function(){return{type:"Polygon",coordinates:[m(i).concat(x(o).slice(1),m(n).reverse().slice(1),x(a).reverse().slice(1))]}},h.extent=function(v){return arguments.length?h.extentMajor(v).extentMinor(v):h.extentMinor()},h.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),h.precision(g)):[[i,a],[n,o]]},h.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),h.precision(g)):[[e,s],[t,r]]},h.step=function(v){return arguments.length?h.stepMajor(v).stepMinor(v):h.stepMinor()},h.stepMajor=function(v){return arguments.length?(c=+v[0],d=+v[1],h):[c,d]},h.stepMinor=function(v){return arguments.length?(l=+v[0],u=+v[1],h):[l,u]},h.precision=function(v){return arguments.length?(g=+v,f=O1(s,r,90),p=z1(e,t,g),m=O1(a,o,90),x=z1(i,n,g),h):g},h.extentMajor([[-180,-90+Ye],[180,90-Ye]]).extentMinor([[-180,-80-Ye],[180,80+Ye]])}function fx(){return g6()()}const vh=t=>t;var g0=new ds,_h=new ds,dx,hx,xh,yh,Ii={point:Gn,lineStart:Gn,lineEnd:Gn,polygonStart:function(){Ii.lineStart=v6,Ii.lineEnd=x6},polygonEnd:function(){Ii.lineStart=Ii.lineEnd=Ii.point=Gn,g0.add(ht(_h)),_h=new ds},result:function(){var t=g0/2;return g0=new ds,t}};function v6(){Ii.point=_6}function _6(t,e){Ii.point=px,dx=xh=t,hx=yh=e}function px(t,e){_h.add(yh*t-xh*e),xh=t,yh=e}function x6(){px(dx,hx)}var No=1/0,Mu=No,Qa=-No,Eu=Qa,wu={point:y6,lineStart:Gn,lineEnd:Gn,polygonStart:Gn,polygonEnd:Gn,result:function(){var t=[[No,Mu],[Qa,Eu]];return Qa=Eu=-(Mu=No=1/0),t}};function y6(t,e){t<No&&(No=t),t>Qa&&(Qa=t),e<Mu&&(Mu=e),e>Eu&&(Eu=e)}var Sh=0,Mh=0,da=0,Tu=0,Au=0,io=0,Eh=0,wh=0,ha=0,mx,gx,_i,xi,kn={point:hs,lineStart:k1,lineEnd:B1,polygonStart:function(){kn.lineStart=E6,kn.lineEnd=w6},polygonEnd:function(){kn.point=hs,kn.lineStart=k1,kn.lineEnd=B1},result:function(){var t=ha?[Eh/ha,wh/ha]:io?[Tu/io,Au/io]:da?[Sh/da,Mh/da]:[NaN,NaN];return Sh=Mh=da=Tu=Au=io=Eh=wh=ha=0,t}};function hs(t,e){Sh+=t,Mh+=e,++da}function k1(){kn.point=S6}function S6(t,e){kn.point=M6,hs(_i=t,xi=e)}function M6(t,e){var n=t-_i,i=e-xi,r=Yi(n*n+i*i);Tu+=r*(_i+t)/2,Au+=r*(xi+e)/2,io+=r,hs(_i=t,xi=e)}function B1(){kn.point=hs}function E6(){kn.point=T6}function w6(){vx(mx,gx)}function T6(t,e){kn.point=vx,hs(mx=_i=t,gx=xi=e)}function vx(t,e){var n=t-_i,i=e-xi,r=Yi(n*n+i*i);Tu+=r*(_i+t)/2,Au+=r*(xi+e)/2,io+=r,r=xi*t-_i*e,Eh+=r*(_i+t),wh+=r*(xi+e),ha+=r*3,hs(_i=t,xi=e)}function _x(t){this._context=t}_x.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,qn);break}}},result:Gn};var Th=new ds,v0,xx,yx,pa,ma,el={point:Gn,lineStart:function(){el.point=A6},lineEnd:function(){v0&&Sx(xx,yx),el.point=Gn},polygonStart:function(){v0=!0},polygonEnd:function(){v0=null},result:function(){var t=+Th;return Th=new ds,t}};function A6(t,e){el.point=Sx,xx=pa=t,yx=ma=e}function Sx(t,e){pa-=t,ma-=e,Th.add(Yi(pa*pa+ma*ma)),pa=t,ma=e}let H1,Ru,V1,G1;class W1{constructor(e){this._append=e==null?Mx:R6(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==V1||this._append!==Ru){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,V1=i,Ru=this._append,G1=this._,this._=r}this._+=G1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function Mx(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function R6(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return Mx;if(e!==H1){const n=10**e;H1=e,Ru=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Ru}function Ex(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Vs(a,r(s))),s.result()}return o.area=function(a){return Vs(a,r(Ii)),Ii.result()},o.measure=function(a){return Vs(a,r(el)),el.result()},o.bounds=function(a){return Vs(a,r(wu)),wu.result()},o.centroid=function(a){return Vs(a,r(kn)),kn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,vh):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new W1(n)):new _x(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new W1(n)),o},o.projection(t).digits(n).context(e)}function Zp(t){return function(e){var n=new Ah;for(var i in t)n[i]=t[i];return n.stream=e,n}}function Ah(){}Ah.prototype={constructor:Ah,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Jp(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),Vs(n,t.stream(wu)),e(wu.result()),i!=null&&t.clipExtent(i),t}function wx(t,e,n){return Jp(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function C6(t,e,n){return wx(t,[[0,0],e],n)}function P6(t,e,n){return Jp(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function b6(t,e,n){return Jp(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var j1=16,L6=ut(30*Gt);function X1(t,e){return+e?I6(t,e):D6(t)}function D6(t){return Zp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function I6(t,e){function n(i,r,s,o,a,l,u,c,d,f,p,m,x,g){var h=u-i,_=c-r,v=h*h+_*_;if(v>4*e&&x--){var S=o+f,P=a+p,A=l+m,T=Yi(S*S+P*P+A*A),R=Rr(A/=T),B=ht(ht(A)-1)<Ye||ht(s-d)<Ye?(s+d)/2:Do(P,S),y=t(B,R),M=y[0],k=y[1],H=M-i,j=k-r,I=_*H-h*j;(I*I/v>e||ht((h*H+_*j)/v-.5)>.3||o*f+a*p+l*m<L6)&&(n(i,r,s,o,a,l,M,k,B,S/=T,P/=T,A,x,g),g.point(M,k),n(M,k,B,S,P,A,u,c,d,f,p,m,x,g))}}return function(i){var r,s,o,a,l,u,c,d,f,p,m,x,g={point:h,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),g.lineStart=P},polygonEnd:function(){i.polygonEnd(),g.lineStart=_}};function h(R,B){R=t(R,B),i.point(R[0],R[1])}function _(){d=NaN,g.point=v,i.lineStart()}function v(R,B){var y=Io([R,B]),M=t(R,B);n(d,f,c,p,m,x,d=M[0],f=M[1],c=R,p=y[0],m=y[1],x=y[2],j1,i),i.point(d,f)}function S(){g.point=h,i.lineEnd()}function P(){_(),g.point=A,g.lineEnd=T}function A(R,B){v(r=R,B),s=d,o=f,a=p,l=m,u=x,g.point=v}function T(){n(d,f,c,p,m,x,s,o,r,a,l,u,j1,i),g.lineEnd=S,S()}return g}}var N6=Zp({point:function(t,e){this.stream.point(t*Gt,e*Gt)}});function U6(t){return Zp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function F6(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function $1(t,e,n,i,r,s){if(!s)return F6(t,e,n,i,r);var o=ut(s),a=lt(s),l=o*t,u=a*t,c=o/t,d=a/t,f=(a*n-o*e)/t,p=(a*e+o*n)/t;function m(x,g){return x*=i,g*=r,[l*x-u*g+e,n-u*x-l*g]}return m.invert=function(x,g){return[i*(c*x-d*g+f),r*(p-d*x-c*g)]},m}function Qp(t){return O6(function(){return t})()}function O6(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,u=0,c,d=0,f=1,p=1,m=null,x=F1,g=null,h,_,v,S=vh,P=.5,A,T,R,B,y;function M(I){return R(I[0]*Gt,I[1]*Gt)}function k(I){return I=R.invert(I[0],I[1]),I&&[I[0]*ei,I[1]*ei]}M.stream=function(I){return B&&y===I?B:B=N6(U6(c)(x(A(S(y=I)))))},M.preclip=function(I){return arguments.length?(x=I,m=void 0,j()):x},M.postclip=function(I){return arguments.length?(S=I,g=h=_=v=null,j()):S},M.clipAngle=function(I){return arguments.length?(x=+I?h6(m=I*Gt):(m=null,F1),j()):m*ei},M.clipExtent=function(I){return arguments.length?(S=I==null?(g=h=_=v=null,vh):m6(g=+I[0][0],h=+I[0][1],_=+I[1][0],v=+I[1][1]),j()):g==null?null:[[g,h],[_,v]]},M.scale=function(I){return arguments.length?(n=+I,H()):n},M.translate=function(I){return arguments.length?(i=+I[0],r=+I[1],H()):[i,r]},M.center=function(I){return arguments.length?(s=I[0]%360*Gt,o=I[1]%360*Gt,H()):[s*ei,o*ei]},M.rotate=function(I){return arguments.length?(a=I[0]%360*Gt,l=I[1]%360*Gt,u=I.length>2?I[2]%360*Gt:0,H()):[a*ei,l*ei,u*ei]},M.angle=function(I){return arguments.length?(d=I%360*Gt,H()):d*ei},M.reflectX=function(I){return arguments.length?(f=I?-1:1,H()):f<0},M.reflectY=function(I){return arguments.length?(p=I?-1:1,H()):p<0},M.precision=function(I){return arguments.length?(A=X1(T,P=I*I),j()):Yi(P)},M.fitExtent=function(I,z){return wx(M,I,z)},M.fitSize=function(I,z){return C6(M,I,z)},M.fitWidth=function(I,z){return P6(M,I,z)},M.fitHeight=function(I,z){return b6(M,I,z)};function H(){var I=$1(n,0,0,f,p,d).apply(null,e(s,o)),z=$1(n,i-I[0],r-I[1],f,p,d);return c=ox(a,l,u),T=mh(e,z),R=mh(c,T),A=X1(T,P),j()}function j(){return B=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&k,H()}}function z6(t){return function(e,n){var i=ut(e),r=ut(n),s=t(i*r);return s===1/0?[2,0]:[s*r*lt(e),s*lt(n)]}}function Tx(t){return function(e,n){var i=Yi(e*e+n*n),r=t(i),s=lt(r),o=ut(r);return[Do(e*s,i*o),Rr(i&&n*s/i)]}}var Ax=z6(function(t){return(t=sx(t))&&t/lt(t)});Ax.invert=Tx(function(t){return t});function k6(){return Qp(Ax).scale(79.4188).clipAngle(180-.001)}var Ca=1.340264,Pa=-.081106,ba=893e-6,La=.003796,Cu=Yi(3)/2,B6=12;function Rx(t,e){var n=Rr(Cu*lt(e)),i=n*n,r=i*i*i;return[t*ut(n)/(Cu*(Ca+3*Pa*i+r*(7*ba+9*La*i))),n*(Ca+Pa*i+r*(ba+La*i))]}Rx.invert=function(t,e){for(var n=e,i=n*n,r=i*i*i,s=0,o,a,l;s<B6&&(a=n*(Ca+Pa*i+r*(ba+La*i))-e,l=Ca+3*Pa*i+r*(7*ba+9*La*i),n-=o=a/l,i=n*n,r=i*i*i,!(ht(o)<ix));++s);return[Cu*t*(Ca+3*Pa*i+r*(7*ba+9*La*i))/ut(n),Rr(lt(n)/Cu)]};function H6(){return Qp(Rx).scale(177.158)}function Cx(t,e){var n=ut(e),i=1+ut(t)*n;return[n*lt(t)/i,lt(e)/i]}Cx.invert=Tx(function(t){return 2*rx(t)});function V6(){return Qp(Cx).scale(250).clipAngle(142)}const tl=210,An=560;function G6(t,e,n,i){const[r,s]=Kp(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const u=(o+a)/2;t.scale(u);const c=t([r,s]),d=t([e,n]);if(!c||!d){o=u;continue}Math.hypot(c[0]-d[0],c[1]-d[1])<tl?o=u:a=u}return(o+a)/2}function Px(t,e,n,i){const r=t==="stereographic"?V6():k6();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=G6(r,e,n,i);r.scale(s).translate([An/2,An/2]);const o=Ex(r),a=c=>o(c)??"",l=c=>{const[d,f]=Kp(e,n,90,c),p=r([d,f]),m=r([e,n]);return!p||!m?0:Math.hypot(p[0]-m[0],p[1]-m[1])},u=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:u,scaleRatioAt:c=>l(c)/c/(u||1)}}function bx(){return fx()}function Pu(t,e,n,i=128){return nf().center([t,e]).radius(n).precision(.1)()}function Lx(t,e){return nf().center([t,e]).radius(90-1e-4).precision(.1)()}function Dx(t,e){return nf().center([t,e]).radius(90).precision(.05)()}function _0(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Nn=An/2;function q1(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=Ve.useMemo(()=>Px(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=Ve.useMemo(()=>{const m=o.path(bx()),x=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,g=[];for(let S=x;S<i.radiusDeg;S+=x)g.push({d:o.path(Pu(i.centerRa,i.centerDec,S)),rDeg:S});const h=o.path(Pu(i.centerRa,i.centerDec,i.radiusDeg)),_=o.path(Dx(n.horizon.nadirRa,n.horizon.nadirDec)),v=o.path(Lx(n.horizon.nadirRa,n.horizon.nadirDec));return{grat:m,rings:g,fovPath:h,horizon:_,below:v}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec]),l=Ve.useMemo(()=>{const m=[];for(const x of n.targets){if(!x.inFov||!x.passesMag||r&&!x.aboveHorizon)continue;const g=_0(o.projection,x.ra,x.dec);if(!g)continue;const h=Math.max(1.6,Math.min(7,6.2-x.mag*.9)),_=x.kind==="star"?h:Math.max(h,5);m.push({t:x,x:g[0],y:g[1],r:_})}return m},[o,n.targets,r]),u=Ve.useMemo(()=>l.filter(m=>m.t.id===t.selectedId||m.t.id===t.hoverId||m.t.kind!=="star"||m.t.mag<=1.6),[l,t.selectedId,t.hoverId]),c=Ve.useMemo(()=>{const m=g=>g.trim().split(/\s+/).pop()??g,x=[];for(const g of n.horizon.cardinalPoints){const h=_0(o.projection,g.ra,g.dec);h&&x.push({x:h[0],y:h[1],label:m(g.label)})}return x},[o,n.horizon.cardinalPoints]),d=Ve.useMemo(()=>t.annotations.map(m=>{const x=_0(o.projection,m.ra,m.dec);return x?{a:m,x:x[0],y:x[1]}:null}).filter(m=>m!==null),[o,t.annotations]),f=t.selectedId?n.targets.find(m=>m.id===t.selectedId):null,p=o.scaleRatioAt(i.radiusDeg);return L.jsxs("div",{className:"proj-view",children:[L.jsxs("div",{className:"proj-title",children:[L.jsx("strong",{children:o.label}),L.jsxs("span",{className:"proj-sub",children:["中心 ",bo(i.centerRa)," / ",Lo(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),L.jsxs("svg",{width:An,height:An,viewBox:`0 0 ${An} ${An}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[L.jsx("defs",{children:L.jsx("clipPath",{id:`disc-${e}`,children:L.jsx("circle",{cx:Nn,cy:Nn,r:tl})})}),L.jsx("circle",{cx:Nn,cy:Nn,r:tl,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),L.jsxs("g",{clipPath:`url(#disc-${e})`,children:[L.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(m=>L.jsx("path",{d:m.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},m.rDeg)),s&&L.jsxs(L.Fragment,{children:[L.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),L.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),L.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&c.map((m,x)=>L.jsx("text",{x:m.x,y:m.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:m.label},x)),l.map(({t:m,x,y:g,r:h})=>{const _=m.id===t.selectedId,v=m.id===t.hoverId,S=!m.aboveHorizon,P=m.kind==="sun"?"#ffd27d":m.kind==="moon"?"#dfe6f2":m.kind==="planet"?"#9ecbff":"#ffffff";return L.jsxs("g",{transform:`translate(${x},${g})`,className:"star-marker",onMouseEnter:()=>t.onHover(m.id),onClick:A=>{A.stopPropagation(),t.onSelect(m.id)},children:[_&&L.jsx("circle",{r:h+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),v&&!_&&L.jsx("circle",{r:h+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),m.kind==="star"?L.jsx("circle",{r:h,fill:P,opacity:S&&!r?.35:1}):m.kind==="planet"?L.jsx("rect",{x:-h,y:-h,width:h*2,height:h*2,fill:P}):L.jsx("polygon",{points:`0,${-h} ${h},0 0,${h} ${-h},0`,fill:P})]},m.id)}),u.map(({t:m,x,y:g})=>L.jsx("text",{x:x+7,y:g+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:m.name},`l-${m.id}`)),d.map(({a:m,x,y:g})=>L.jsxs("g",{transform:`translate(${x},${g})`,children:[L.jsx("circle",{r:5,fill:"none",stroke:m.color,strokeWidth:1.6}),L.jsx("text",{x:8,y:4,fill:m.color,fontSize:11,children:m.text})]},m.uuid)),L.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[L.jsx("line",{x1:Nn-7,y1:Nn,x2:Nn+7,y2:Nn}),L.jsx("line",{x1:Nn,y1:Nn-7,x2:Nn,y2:Nn+7})]})]})]}),L.jsxs("div",{className:"proj-foot",children:[L.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${p.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),f&&L.jsxs("span",{className:"proj-foot-sel",children:[f.name,"：距视场中心 ",f.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",f.alt.toFixed(1),"°"]})]})]})}const bu=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],zc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}],xe=t=>t*15,em=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:xe(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:xe(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:xe(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:xe(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:xe(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:xe(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:xe(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:xe(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:xe(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:xe(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:xe(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:xe(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:xe(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:xe(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:xe(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:xe(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:xe(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:xe(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:xe(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:xe(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:xe(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:xe(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:xe(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:xe(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:xe(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:xe(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:xe(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:xe(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:xe(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:xe(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:xe(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:xe(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:xe(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:xe(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:xe(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:xe(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:xe(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:xe(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:xe(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:xe(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:xe(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:xe(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:xe(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:xe(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:xe(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:xe(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:xe(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:xe(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:xe(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:xe(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:xe(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:xe(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:xe(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:xe(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:xe(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:xe(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:xe(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:xe(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:xe(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:xe(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:xe(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:xe(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:xe(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:xe(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:xe(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}],Y1=em;function W6(t){const e=t.items,n=[];for(const a of Y1){const l=[],u=[];for(const c of e){const d=xu(a.ra,a.dec,c.fov.centerRa,c.fov.centerDec);d<=c.fov.radiusDeg&&(l.push(c),u.push(d))}n.push({target:a,items:l,separations:u})}const i=n.filter(a=>a.items.length===0),r=n.filter(a=>a.items.length>=2),s=n.filter(a=>a.items.length===1).length,o=e.map(a=>({item:a,count:n.filter(l=>l.items.some(u=>u.itemId===a.itemId)).length}));return{covers:n,uncovered:i,duplicated:r,coveredOnceCount:s,itemStats:o,totalTargets:Y1.length}}function j6(t,e,n){let i=null;for(const r of n.items){const s=xu(t,e,r.fov.centerRa,r.fov.centerDec)-r.fov.radiusDeg;(!i||s<i.distanceDeg)&&(i={item:r,distanceDeg:s})}return i}const dc=["#57e389","#57a6ff","#ffd54a","#ff8a5c","#c08bff","#4fd6e0","#ff7ab0","#b5e36a"];function Rh(t){return dc[(t%dc.length+dc.length)%dc.length]}const x0="#ff5d5d",K1="#ffd54a";function X6(t){var c,d;const[e,n]=Ve.useState(""),[i,r]=Ve.useState(""),[s,o]=Ve.useState("#ffd54a"),a=f=>t.onChangeFov({...t.fov,centerRa:(f%360+360)%360}),l=f=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,f))}),u=f=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,f))});return L.jsxs("div",{className:"controls",children:[L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"演示场景"}),L.jsx("div",{className:"btn-row",children:zc.map(f=>L.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(f.id),title:f.description,children:f.label},f.id))}),L.jsx("p",{className:"hint",title:(c=zc.find(f=>f.id==="horizon"))==null?void 0:c.description,children:(d=zc.find(f=>f.id==="horizon"))==null?void 0:d.description})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"观测位置与时间"}),L.jsxs("label",{children:["位置",L.jsx("select",{value:t.site.id,onChange:f=>{const p=bu.find(m=>m.id===f.target.value);t.onChangeSite({...p})},children:bu.map(f=>L.jsx("option",{value:f.id,children:f.name},f.id))})]}),t.site.id==="custom"&&L.jsxs("div",{className:"num-row",children:[L.jsxs("label",{children:["纬度°",L.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,latitude:Number(f.target.value)})})]}),L.jsxs("label",{children:["经度°",L.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,longitude:Number(f.target.value)})})]})]}),L.jsxs("label",{children:["时间（UTC，非本地时区）",L.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:f=>t.onChangeTime(f.target.value+"Z")})]}),L.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"视场（J2000 赤道坐标）"}),L.jsxs("div",{className:"num-row",children:[L.jsxs("label",{children:["中心赤经°",L.jsx("input",{type:"number",value:y0(t.fov.centerRa),min:0,max:360,step:.1,onChange:f=>a(Number(f.target.value))})]}),L.jsxs("label",{children:["中心赤纬°",L.jsx("input",{type:"number",value:y0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:f=>l(Number(f.target.value))})]}),L.jsxs("label",{children:["角半径°",L.jsx("input",{type:"number",value:y0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:f=>u(Number(f.target.value))})]})]}),L.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),L.jsxs("div",{className:"save-row",children:[L.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:f=>n(f.target.value)}),L.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&L.jsx("ul",{className:"store-list",children:t.savedFovs.map(f=>{const p=t.plan.items.some(m=>m.sourceFovUuid===f.uuid);return L.jsxs("li",{children:[L.jsx("button",{className:"link-btn",title:`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(f),children:f.name}),L.jsx("button",{className:"plus-btn",disabled:p,title:p?"已在覆盖规划中":"加入大图覆盖规划（不影响原视场）",onClick:()=>t.onAddPlanItem(f),children:"＋"}),L.jsx("button",{className:"x-btn",title:"删除已保存视场（不影响覆盖规划中的快照）",onClick:()=>t.onDeleteFov(f.uuid),children:"×"})]},f.uuid)})})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"大图覆盖规划（多视场拼合，球面判定）"}),L.jsx("p",{className:"hint",children:"从上方已保存视场点 ＋ 选择多个范围；系统在球面上计算每个内置目标落入哪些视场及重复覆盖， 不拼接投影图片、不使用像素边界。"}),t.plan.items.length>0?L.jsx("ul",{className:"store-list plan-list",children:t.plan.items.map((f,p)=>L.jsxs("li",{children:[L.jsx("span",{className:"dot",style:{background:Rh(p)}}),L.jsxs("button",{className:"link-btn",title:`${bo(f.fov.centerRa)} / ${Lo(f.fov.centerDec)} · 角半径 ${f.fov.radiusDeg}°
点击回到该视场三视图`,onClick:()=>t.onReviewPlanItem(f.itemId),children:[f.name,L.jsxs("small",{children:[" ","r",f.fov.radiusDeg,"°"]})]}),L.jsx("button",{className:"x-btn",title:"移出规划（不删除已保存视场与批注）",onClick:()=>t.onRemovePlanItem(f.itemId),children:"×"})]},f.itemId))}):L.jsx("p",{className:"hint",children:"尚无规划项。"})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"筛选（两条相互独立）"}),L.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),L.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:f=>t.onChangeMag(Number(f.target.value))})]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:f=>t.onToggleHorizonClip(f.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:f=>t.onToggleShowHorizon(f.target.checked)}),"显示地平圈与地平以下区域"]}),L.jsxs("label",{className:"check",children:[L.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:f=>t.onToggleGraticule(f.target.checked)}),"显示 J2000 经纬网"]})]}),L.jsxs("section",{className:"ctl-block",children:[L.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),L.jsxs("div",{className:"save-row",children:[L.jsx("input",{type:"color",value:s,onChange:f=>o(f.target.value)}),L.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:f=>r(f.target.value)}),L.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&L.jsx("ul",{className:"store-list",children:t.annotations.map(f=>L.jsxs("li",{children:[L.jsx("span",{className:"dot",style:{background:f.color}}),L.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:f.ra,centerDec:f.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:f.text}),L.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(f.uuid),children:"×"})]},f.uuid))})]})]})}function y0(t){return Math.round(t*1e3)/1e3}const $6={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function q6({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r}){return L.jsxs("div",{className:"info-panel",children:[t?L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"info-head",children:[L.jsx("span",{className:"info-name",children:t.name}),L.jsx("span",{className:"info-desig",children:t.designation}),L.jsx("span",{className:"info-kind",children:$6[t.kind]})]}),L.jsxs("div",{className:"info-grid",children:[L.jsxs("div",{children:[L.jsx("label",{children:"赤经 RA (J2000)"}),L.jsx("strong",{children:bo(t.ra)}),L.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"赤纬 Dec (J2000)"}),L.jsx("strong",{children:Lo(t.dec)}),L.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"方位角 A（北=0 顺时针）"}),L.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),L.jsxs("span",{className:"sub",children:[T1(t.az),"方"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"地平高度 h"}),L.jsxs("strong",{className:t.alt>=0?"up":"down",children:[t.alt.toFixed(2),"°"]}),L.jsx("span",{className:"sub",children:t.alt>=0?"地平以上":"地平以下"})]}),L.jsxs("div",{children:[L.jsx("label",{children:"视星等"}),L.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&L.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),L.jsxs("div",{children:[L.jsx("label",{children:"距视场中心（球面角距）"}),L.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),L.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):L.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",L.jsxs("ul",{children:[L.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),L.jsx("li",{children:"绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环"})]})]}),L.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",T1(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}const Z1=1e3,J1=500;function Y6(t){const{plan:e,result:n}=t,i=e.items.length>0,{projection:r,path:s}=Ve.useMemo(()=>{const c=H6();return c.fitExtent([[16,14],[Z1-16,J1-14]],{type:"Sphere"}),{projection:c,path:Ex(c)}},[]),o=Ve.useMemo(()=>e.items.map((c,d)=>{const f=nf().center([c.fov.centerRa,c.fov.centerDec]).radius(c.fov.radiusDeg).precision(.05)(),p=r([c.fov.centerRa,c.fov.centerDec]);return{item:c,color:Rh(d),d:s(f)??"",cx:p?p[0]:0,cy:p?p[1]:0}}),[e.items,r,s]),a=Ve.useMemo(()=>{const c=new Map;return e.items.forEach((d,f)=>c.set(d.itemId,f)),c},[e.items]),l=Ve.useMemo(()=>n.covers.map(c=>{const d=r([c.target.ra,c.target.dec]);return{c,x:d?d[0]:0,y:d?d[1]:0,state:c.items.length===0?"uncovered":c.items.length>=2?"duplicated":"covered"}}),[n,r]),u=(c,d)=>{var f;t.onReviewTarget(c.target.id,d??((f=c.items[0])==null?void 0:f.itemId))};return L.jsxs("div",{className:"cov-overview",children:[L.jsxs("div",{className:"cov-head",children:[L.jsx("h2",{className:"view-label",children:"大图覆盖规划总览（J2000 全球面，多视场叠加）"}),L.jsxs("div",{className:"cov-badges",children:[L.jsxs("span",{className:"cov-badge",children:["内置目标 ",n.totalTargets]}),L.jsxs("span",{className:"cov-badge once",children:["单次覆盖 ",i?n.coveredOnceCount:0]}),L.jsxs("span",{className:"cov-badge dup",children:["重复覆盖 ",i?n.duplicated.length:0]}),L.jsxs("span",{className:"cov-badge miss",children:["未覆盖 ",i?n.uncovered.length:n.totalTargets]}),L.jsxs("span",{className:"cov-badge",children:["规划视场 ",e.items.length]})]})]}),L.jsxs("svg",{viewBox:`0 0 ${Z1} ${J1}`,className:"cov-svg",onMouseLeave:()=>t.onHover(null),children:[L.jsx("path",{d:s({type:"Sphere"})??"",fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.2}),L.jsx("path",{d:s(fx())??"",fill:"none",stroke:"#223255",strokeWidth:.5}),o.map(({item:c,color:d,d:f})=>L.jsx("path",{d:f,fill:d,opacity:.1},`fill-${c.itemId}`)),l.filter(c=>c.state==="covered").map(({c,x:d,y:f})=>L.jsx(S0,{x:d,y:f,r:2.4,fill:"#8fa6cf",c,selected:t.selectedId===c.target.id,hovered:t.hoverId===c.target.id,onHover:t.onHover,onReview:u},c.target.id)),l.filter(c=>c.state==="uncovered").map(({c,x:d,y:f})=>L.jsx(S0,{x:d,y:f,r:3.8,fill:x0,c,selected:t.selectedId===c.target.id,hovered:t.hoverId===c.target.id,onHover:t.onHover,onReview:u},c.target.id)),l.filter(c=>c.state==="duplicated").map(({c,x:d,y:f})=>L.jsx(S0,{x:d,y:f,r:4.4,fill:K1,ring:x0,c,selected:t.selectedId===c.target.id,hovered:t.hoverId===c.target.id,onHover:t.onHover,onReview:u},c.target.id)),l.filter(c=>c.state!=="covered"&&(t.hoverId===c.c.target.id||t.selectedId===c.c.target.id)).map(({c,x:d,y:f})=>L.jsx("text",{x:d+7,y:f+3,className:"cov-label",fontSize:11,children:c.target.name},`lb-${c.target.id}`)),o.map(({item:c,color:d,d:f,cx:p,cy:m})=>L.jsxs("g",{className:"cov-fov-group",onClick:()=>t.onReviewItem(c.itemId),children:[L.jsx("path",{d:f,fill:"none",stroke:d,strokeWidth:1.6}),L.jsx("line",{x1:p-5,y1:m,x2:p+5,y2:m,stroke:d,strokeWidth:1}),L.jsx("line",{x1:p,y1:m-5,x2:p,y2:m+5,stroke:d,strokeWidth:1}),L.jsx("text",{x:p,y:m-8,fontSize:11,fill:d,className:"cov-fov-name",textAnchor:"middle",children:c.name})]},`bd-${c.itemId}`))]}),L.jsxs("div",{className:"cov-legend",children:[L.jsxs("span",{children:[L.jsx("i",{className:"cov-dot",style:{background:"#8fa6cf"}}),"单次覆盖"]}),L.jsxs("span",{children:[L.jsx("i",{className:"cov-dot",style:{background:K1}}),"重复覆盖（≥2 视场）"]}),L.jsxs("span",{children:[L.jsx("i",{className:"cov-dot",style:{background:x0}}),"未覆盖"]}),o.map(({item:c,color:d},f)=>{var p;return L.jsxs("span",{children:[L.jsx("i",{className:"cov-dot",style:{background:d}}),c.name,"（",((p=n.itemStats[f])==null?void 0:p.count)??0,"）"]},c.itemId)}),L.jsx("span",{className:"cov-note",children:"覆盖判定 = J2000 球面 haversine 角距 ≤ 视场半径，与投影方式、画布缩放、像素位置无关； 点击星点 / 视场边界 / 目标名可回到相应视场三视图。"})]}),i?L.jsxs("div",{className:"cov-lists",children:[L.jsxs("div",{className:"cov-list-box miss",children:[L.jsxs("h4",{children:["未覆盖的内置目标（",n.uncovered.length,"）",L.jsx("span",{className:"cov-list-hint",children:"点击进入球面上最近的规划视场"})]}),n.uncovered.length===0?L.jsx("p",{className:"cov-empty-line",children:"全部内置目标至少被一个规划视场覆盖 ✓"}):L.jsx("ul",{className:"cov-list",children:n.uncovered.map(c=>L.jsx("li",{className:"cov-row",children:L.jsxs("button",{className:"link-btn cov-target-btn",title:`${bo(c.target.ra)} / ${Lo(c.target.dec)}`,onClick:()=>u(c),onMouseEnter:()=>t.onHover(c.target.id),onMouseLeave:()=>t.onHover(null),children:[c.target.name,L.jsxs("small",{children:[c.target.designation," · ",c.target.ra.toFixed(1),"°,",c.target.dec.toFixed(1),"°"]})]})},c.target.id))})]}),L.jsxs("div",{className:"cov-list-box dup",children:[L.jsxs("h4",{children:["重复覆盖的内置目标（",n.duplicated.length,"）",L.jsx("span",{className:"cov-list-hint",children:"点目标名进入首个视场，点色点进入对应视场"})]}),n.duplicated.length===0?L.jsx("p",{className:"cov-empty-line",children:"没有目标被多个视场重复覆盖 ✓"}):L.jsx("ul",{className:"cov-list",children:n.duplicated.map(c=>L.jsxs("li",{className:"cov-row",children:[L.jsxs("button",{className:"link-btn cov-target-btn",title:`${bo(c.target.ra)} / ${Lo(c.target.dec)}`,onClick:()=>u(c),onMouseEnter:()=>t.onHover(c.target.id),onMouseLeave:()=>t.onHover(null),children:[c.target.name,L.jsxs("small",{children:[c.target.designation," ×",c.items.length]})]}),L.jsx("span",{className:"cov-item-dots",children:c.items.map(d=>L.jsx("button",{className:"cov-item-dot",style:{background:Rh(a.get(d.itemId)??0)},title:`回到「${d.name}」三视图`,onClick:()=>u(c,d.itemId)},d.itemId))})]},c.target.id))})]})]}):L.jsx("p",{className:"cov-empty",children:"还没有规划项：在左侧「大图覆盖规划」中，从已保存视场点 ＋ 把多个相邻天区加入规划。"})]})}function S0(t){const{x:e,y:n,r:i,fill:r,ring:s,c:o}=t,a=l=>l?`回到「${l.name}」三视图`:"回到球面上最近的规划视场";return L.jsxs("g",{transform:`translate(${e},${n})`,className:"cov-marker",onMouseEnter:()=>t.onHover(o.target.id),onClick:l=>{l.stopPropagation(),t.onReview(o)},children:[L.jsx("title",{children:`${o.target.name}（${o.target.designation}）
${a(o.items[0])}`}),t.selected&&L.jsx("circle",{r:i+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),t.hovered&&!t.selected&&L.jsx("circle",{r:i+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),s&&L.jsx("circle",{r:i+1.6,fill:"none",stroke:s,strokeWidth:1}),L.jsx("circle",{r:i,fill:r})]})}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const Ix=173.1446326846693,$r=14959787069098932e-8,Dt=.017453292519943295,ps=57.29577951308232,K6=3.819718634205488,Z6=365.24217,Q1=new Date("2000-01-01T12:00:00Z"),Pi=2*Math.PI,sr=3600*(180/Math.PI),ro=484813681109536e-20,Nx=180*60*60,J6=2*Nx,ev=7292115e-11,Q6=Nx/Math.PI,eA=-.17-5*Math.log10(Q6),Ch=.996647180302104,tA=Ch*Ch,Ph=6378.1366,nA=Ph/$r,Ux=81.30056,tm=.0002959122082855911,bh=2825345909524226e-22,Lh=8459715185680659e-23,Dh=1292024916781969e-23,Ih=1524358900784276e-23;function Lu(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function jn(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function Bs(t){return t-Math.floor(t)}function iA(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:ps*Math.acos(r)}var Te;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(Te||(Te={}));const rA=[Te.Star1,Te.Star2,Te.Star3,Te.Star4,Te.Star5,Te.Star6,Te.Star7,Te.Star8],sA=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function oA(t){const e=rA.indexOf(t);return e>=0?sA[e]:null}function nm(t){const e=oA(t);return e&&e.dist>0?e:null}var Pn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Pn||(Pn={}));const zi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function aA(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/Z6;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let lA=aA;function tv(t){return t+lA(t)/86400}class is{constructor(e){if(e instanceof is){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Q1.getTime())/n,this.tt=tv(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Q1.getTime()+e*n),this.ut=e,this.tt=tv(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new is(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new is(this.ut+e)}}function xn(t){return t instanceof is?t:new is(t)}function cA(t){function e(f){return f%J6*ro}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),u=(-172064161-174666*n)*a+33386*l,c=(92052331+9086*n)*l+15377*a,d=2*(r-s+o);return a=Math.sin(d),l=Math.cos(d),u+=(-13170906-1675*n)*a-13696*l,c+=(5730336-3015*n)*l-4587*a,d=2*(r+o),a=Math.sin(d),l=Math.cos(d),u+=(-2276413-234*n)*a+2796*l,c+=(978459-485*n)*l+1374*a,d=2*o,a=Math.sin(d),l=Math.cos(d),u+=(2074554+207*n)*a-698*l,c+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),u+=(1475877-3633*n)*a+11817*l,c+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+u*1e-7,deps:388e-6+c*1e-7}}function Fx(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var hc;function im(t){if(!hc||Math.abs(hc.tt-t.tt)>1e-6){const e=cA(t),n=Fx(t),i=n+e.deps/3600;hc={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*Dt)/15,mobl:n,tobl:i}}return hc}function uA(t,e){const n=t*Dt,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function fA(t,e){return uA(Fx(t),e)}function dA(t){const e=t.tt/36525;function n(J,b){const Le=[];let de;for(de=0;de<=b-J;++de)Le.push(0);return{min:J,array:Le}}function i(J,b,Le,de){const Re=[];for(let Ee=0;Ee<=b-J;++Ee)Re.push(n(Le,de));return{min:J,array:Re}}function r(J,b,Le){const de=J.array[b-J.min];return de.array[Le-de.min]}function s(J,b,Le,de){const Re=J.array[b-J.min];Re.array[Le-Re.min]=de}let o,a,l,u,c,d,f,p,m,x,g,h,_,v,S,P,A,T,R,B,y,M,k,H=i(-6,6,1,4),j=i(-6,6,1,4);function I(J,b){return r(H,J,b)}function z(J,b){return r(j,J,b)}function Y(J,b,Le){return s(H,J,b,Le)}function D(J,b,Le){return s(j,J,b,Le)}function Z(J,b,Le,de,Re){Re(J*Le-b*de,b*Le+J*de)}function $(J){return Math.sin(Pi*J)}f=e*e,m=0,k=0,g=0,h=3422.7;var ie=$(.19833+.05611*e),_e=$(.27869+.04508*e),De=$(.16827-.36903*e),q=$(.34734-5.37261*e),te=$(.10498-5.37899*e),le=$(.42681-.41855*e),ue=$(.14943-5.37511*e);for(T=.84*ie+.31*_e+14.27*De+7.26*q+.28*te+.24*le,R=2.94*ie+.31*_e+14.27*De+9.34*q+1.12*te+.83*le,B=-6.4*ie-1.89*le,y=.21*ie+.31*_e+14.27*De-88.7*q-15.3*te+.24*le-1.86*ue,M=T-B,p=-3332e-9*$(.59734-5.37261*e)-539e-9*$(.35498-5.37899*e)-64e-9*$(.39943-5.37511*e),_=Pi*Bs(.60643382+1336.85522467*e-313e-8*f)+T/sr,v=Pi*Bs(.37489701+1325.55240982*e+2565e-8*f)+R/sr,S=Pi*Bs(.99312619+99.99735956*e-44e-8*f)+B/sr,P=Pi*Bs(.25909118+1342.2278298*e-892e-8*f)+y/sr,A=Pi*Bs(.82736186+1236.85308708*e-397e-8*f)+M/sr,c=1;c<=4;++c){switch(c){case 1:l=v,a=4,u=1.000002208;break;case 2:l=S,a=3,u=.997504612-.002495388*e;break;case 3:l=P,a=4,u=1.000002708+139.978*p;break;case 4:l=A,a=6,u=1;break;default:throw`Internal error: I = ${c}`}for(Y(0,c,1),Y(1,c,Math.cos(l)*u),D(0,c,0),D(1,c,Math.sin(l)*u),d=2;d<=a;++d)Z(I(d-1,c),z(d-1,c),I(1,c),z(1,c),(J,b)=>(Y(d,c,J),D(d,c,b)));for(d=1;d<=a;++d)Y(-d,c,I(d,c)),D(-d,c,-z(d,c))}function Ne(J,b,Le,de){for(var Re={x:1,y:0},Ee=[0,J,b,Le,de],Be=1;Be<=4;++Be)Ee[Be]!==0&&Z(Re.x,Re.y,I(Ee[Be],Be),z(Ee[Be],Be),(Ie,C)=>(Re.x=Ie,Re.y=C));return Re}function V(J,b,Le,de,Re,Ee,Be,Ie){var C=Ne(Re,Ee,Be,Ie);m+=J*C.y,k+=b*C.y,g+=Le*C.x,h+=de*C.x}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0);function Fe(J,b,Le,de,Re){return J*Ne(b,Le,de,Re).y}x=0,x+=Fe(-526.069,0,0,1,-2),x+=Fe(-3.352,0,0,1,-4),x+=Fe(44.297,1,0,1,-2),x+=Fe(-6,1,0,1,-4),x+=Fe(20.599,-1,0,1,0),x+=Fe(-30.598,-1,0,1,-2),x+=Fe(-24.649,-2,0,1,0),x+=Fe(-2,-2,0,1,-2),x+=Fe(-22.571,0,1,1,-2),x+=Fe(10.985,0,-1,1,-2),m+=.82*$(.7736-62.5512*e)+.31*$(.0466-125.1025*e)+.35*$(.5785-25.1042*e)+.66*$(.4591+1335.8075*e)+.64*$(.313-91.568*e)+1.14*$(.148+1331.2898*e)+.21*$(.5918+1056.5859*e)+.44*$(.5784+1322.8595*e)+.24*$(.2275-5.7374*e)+.28*$(.2965+2.6929*e)+.33*$(.3132+6.3368*e),o=P+k/sr;let Qe=(1.000002708+139.978*p)*(18518.511+1.189+g)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Pi*Bs((_+m/sr)/Pi),geo_eclip_lat:Math.PI/(180*3600)*Qe,distance_au:sr*nA/(.999953253*h)}}function Ox(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function Du(t,e,n){const i=zx(e,n);return Ox(i,t)}function zx(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=ro,r*=ro,s*=ro,o*=ro;const a=Math.sin(i),l=Math.cos(i),u=Math.sin(-r),c=Math.cos(-r),d=Math.sin(-s),f=Math.cos(-s),p=Math.sin(o),m=Math.cos(o),x=m*c-u*p*f,g=m*u*l+p*f*c*l-a*p*d,h=m*u*a+p*f*c*a+l*p*d,_=-p*c-u*m*f,v=-p*u*l+m*f*c*l-a*m*d,S=-p*u*a+m*f*c*a+l*m*d,P=u*d,A=-d*c*l-a*f,T=-d*c*a+f*l;if(e===Pn.Into2000)return new Cr([[x,g,h],[_,v,S],[P,A,T]]);if(e===Pn.From2000)return new Cr([[x,_,P],[g,v,A],[h,S,T]]);throw"Invalid precess direction"}function hA(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let pc;function rm(t){if(!pc||pc.tt!==t.tt){const e=t.tt/36525;let n=15*im(t).ee;const i=hA(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),pc={tt:t.tt,st:s}}return pc.st}function pA(t){const e=xn(t);return rm(e)}function mA(t,e){const n=t.latitude*Dt,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,Ch*i),o=tA*s,a=t.height/1e3,l=Ph*s+a,u=Ph*o+a,c=(15*e+t.longitude)*Dt,d=Math.sin(c),f=Math.cos(c);return{pos:[l*r*f/$r,l*r*d/$r,u*i/$r],vel:[-ev*l*r*d*86400/$r,ev*l*r*f*86400/$r,0]}}function Nh(t,e,n){const i=kx(e,n);return Ox(i,t)}function kx(t,e){const n=im(t),i=n.mobl*Dt,r=n.tobl*Dt,s=n.dpsi*ro,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s),f=c,p=-d*o,m=-d*a,x=d*l,g=c*o*l+a*u,h=c*a*l-o*u,_=d*u,v=c*o*u-a*l,S=c*a*u+o*l;if(e===Pn.From2000)return new Cr([[f,x,_],[p,g,v],[m,h,S]]);if(e===Pn.Into2000)return new Cr([[f,p,m],[x,g,h],[_,v,S]]);throw"Invalid precess direction"}function gA(t,e,n){return n===Pn.Into2000?Du(Nh(t,e,n),e,n):Nh(Du(t,e,n),e,n)}function vA(t,e){const n=rm(t),i=mA(e,n).pos;return gA(i,t,Pn.Into2000)}class St{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class hr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Da{constructor(e,n,i){this.lat=jn(e),this.lon=jn(n),this.dist=jn(i)}}class nv{constructor(e,n,i,r){this.ra=jn(e),this.dec=jn(n),this.dist=jn(i),this.vec=r}}class Cr{constructor(e){this.rot=e}}class _A{constructor(e,n,i){this.vec=e,this.elat=jn(n),this.elon=jn(i)}}function xA(t,e){return new St(t[0],t[1],t[2],e)}function yA(t,e){const n=xA(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new nv(0,n.z<0?-90:90,r,n)}let s=K6*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=ps*Math.atan2(t[2],Math.sqrt(i));return new nv(s,o,r,n)}function M0(t,e){const n=t*Dt,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function Bx(t){if(!(t instanceof Hx))throw`Not an instance of the Observer class: ${t}`;if(jn(t.latitude),jn(t.longitude),jn(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class Hx{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,Bx(this)}}function SA(t,e,n,i,r){Bx(n),Lu(i),Lu(r);const s=xn(e),o=vA(s,n),a=IA(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]];return yA(l,s)}function MA(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=ps*Math.atan2(r,i),a<0&&(a+=360));let l=ps*Math.atan2(s,o),u=new St(i,r,s,t.t);return new _A(u,l,a)}function EA(t){const e=im(t.t),n=[t.x,t.y,t.z],i=Du(n,t.t,Pn.From2000),[r,s,o]=Nh(i,t.t,Pn.From2000),a=new St(r,s,o,t.t),l=e.tobl*Dt;return MA(a,Math.cos(l),Math.sin(l))}function Uo(t){const e=xn(t),n=dA(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=fA(e,r),o=Du(s,e,Pn.Into2000);return new St(o[0],o[1],o[2],e)}function Vx(t){const e=xn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=Uo(i),o=Uo(r);return new hr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function wA(t){const e=xn(t),n=Vx(e),i=1+Ux;return new hr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function go(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,u,c]of s)o+=l*Math.cos(u+e*c);let a=i*o;n&&(a%=Pi),r+=a,i*=e}return r}function E0(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[u,c,d]of o){let f=c+e*d;a+=u*d*Math.sin(f),s>0&&(l+=u*Math.cos(f))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const ga=365250,Uh=0,Fh=1,Oh=2;function zh(t){return new Kt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function Gx(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Ia(t,e){const n=e.tt/ga,i=go(t[Uh],n,!0),r=go(t[Fh],n,!1),s=go(t[Oh],n,!1),o=Gx(i,r,s);return zh(o).ToAstroVector(e)}function kh(t,e){const n=e/ga,i=go(t[Uh],n,!0),r=go(t[Fh],n,!1),s=go(t[Oh],n,!1),o=E0(t[Uh],n),a=E0(t[Fh],n),l=E0(t[Oh],n),u=Math.cos(i),c=Math.sin(i),d=Math.cos(r),f=Math.sin(r),p=+(l*d*u)-s*f*u*a-s*d*c*o,m=+(l*d*c)-s*f*c*a+s*d*u*o,x=+(l*f)+s*d*a,g=Gx(i,r,s),h=[p/ga,m/ga,x/ga],_=zh(g),v=zh(h);return new ms(e,_,v)}function mc(t,e,n,i){const r=i/(i+tm),s=Ia(zi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function TA(t){const e=new St(0,0,0,t);return mc(e,t,Te.Jupiter,bh),mc(e,t,Te.Saturn,Lh),mc(e,t,Te.Uranus,Dh),mc(e,t,Te.Neptune,Ih),e}const Bh=51,AA=29200,so=146,bi=201,es=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Kt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Kt(this.x,this.y,this.z)}ToAstroVector(e){return new St(this.x,this.y,this.z,e)}static zero(){return new Kt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Kt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Kt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Kt(e*this.x,e*this.y,e*this.z)}div(e){return new Kt(this.x/e,this.y/e,this.z/e)}mean(e){return new Kt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Kt(-this.x,-this.y,-this.z)}}class ms{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new ms(this.tt,this.r,this.v)}sub(e){return new ms(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function RA(t){let[e,[n,i,r],[s,o,a]]=t;return new ms(e,new Kt(n,i,r),new Kt(s,o,a))}function gc(t,e,n,i){const r=i/(i+tm),s=kh(zi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function ra(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class rf{constructor(e){let n=new ms(e,new Kt(0,0,0),new Kt(0,0,0));this.Jupiter=gc(n,e,Te.Jupiter,bh),this.Saturn=gc(n,e,Te.Saturn,Lh),this.Uranus=gc(n,e,Te.Uranus,Dh),this.Neptune=gc(n,e,Te.Neptune,Ih),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new ms(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=ra(e,tm,this.Sun.r);return n.incr(ra(e,bh,this.Jupiter.r)),n.incr(ra(e,Lh,this.Saturn.r)),n.incr(ra(e,Dh,this.Uranus.r)),n.incr(ra(e,Ih,this.Neptune.r)),n}}class sf{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new sf(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Wx{constructor(e,n){this.bary=e,this.grav=n}}function Iu(t,e,n,i){return new Kt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function iv(t,e,n){return new Kt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Hh(t,e){const n=t-e.tt,i=new rf(t),r=Iu(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Iu(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),u=new sf(t,o,a,l);return new Wx(i,u)}const CA=[];function jx(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Vh(t){const e=RA(t),n=new rf(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new sf(e.tt,i,r,s);return new Wx(n,o)}function PA(t,e){const n=es[0][0];if(e<n||e>es[Bh-1][0])return null;const i=jx((e-n)/AA,Bh-1);if(!t[i]){const s=t[i]=[];s[0]=Vh(es[i]).grav,s[bi-1]=Vh(es[i+1]).grav;let o,a=s[0].tt;for(o=1;o<bi-1;++o)s[o]=Hh(a+=so,s[o-1]).grav;a=s[bi-1].tt;var r=[];for(r[bi-1]=s[bi-1],o=bi-2;o>0;--o)r[o]=Hh(a-=so,r[o+1]).grav;for(o=bi-2;o>0;--o){const l=o/(bi-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function rv(t,e,n){let i=Vh(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Hh(s+1===r?e:i.grav.tt+n,i.grav);return i}function Xx(t,e){let n,i,r;const s=PA(CA,t.tt);if(s){const o=jx((t.tt-s[0].tt)/so,bi-1),a=s[o],l=s[o+1],u=a.a.mean(l.a),c=Iu(t.tt-a.tt,a.r,a.v,u),d=iv(t.tt-a.tt,a.v,u),f=Iu(t.tt-l.tt,l.r,l.v,u),p=iv(t.tt-l.tt,l.v,u),m=(t.tt-a.tt)/so;n=c.mul(1-m).add(f.mul(m)),i=d.mul(1-m).add(p.mul(m))}else{let o;t.tt<es[0][0]?o=rv(es[0],t.tt,-so):o=rv(es[Bh-1],t.tt,+so),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new rf(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new hr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function nl(t,e){var n=xn(e);if(t in zi)return Ia(zi[t],n);if(t===Te.Pluto){const o=Xx(n);return new St(o.x,o.y,o.z,n)}if(t===Te.Sun)return new St(0,0,0,n);if(t===Te.Moon){var i=Ia(zi.Earth,n),r=Uo(n);return new St(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===Te.EMB){const o=Ia(zi.Earth,n),a=Uo(n),l=1+Ux;return new St(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===Te.SSB)return TA(n);const s=nm(t);if(s){const o=new Da(s.dec,15*s.ra,s.dist);return kc(o,n)}throw`HelioVector: Unknown body "${t}"`}function bA(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/Ix;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class LA{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=nl(this.observerBody,e));const n=nl(this.targetBody,e);return new St(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function DA(t,e,n,i){Lu(i);const r=xn(t);if(nm(n)){const a=nl(n,r);{const l=UA(e,r),u=new St(a.x-l.x,a.y-l.y,a.z-l.z,r),c=Ix/u.Length();return new St(u.x+l.vx/c,u.y+l.vy/c,u.z+l.vz/c,r)}}let s;s=new St(0,0,0,r);const o=new LA(e,n,i,s);return bA(a=>o.Position(a),r)}function IA(t,e,n){Lu(n);const i=xn(e);switch(t){case Te.Earth:return new St(0,0,0,i);case Te.Moon:return Uo(i);default:const r=DA(i,Te.Earth,t,n);return r.t=i,r}}function NA(t,e){return new hr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function UA(t,e){const n=xn(e);switch(t){case Te.Sun:return new hr(0,0,0,0,0,0,n);case Te.SSB:const i=new rf(n.tt);return new hr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case Te.Mercury:case Te.Venus:case Te.Earth:case Te.Mars:case Te.Jupiter:case Te.Saturn:case Te.Uranus:case Te.Neptune:const r=kh(zi[t],n.tt);return NA(r,n);case Te.Pluto:return Xx(n);case Te.Moon:case Te.EMB:const s=kh(zi.Earth,n.tt),o=t==Te.Moon?Vx(n):wA(n);return new hr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(nm(t)){const a=nl(t,n);return new hr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function FA(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case Te.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case Te.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case Te.Mars:r=-1.52,s=1.6;break;case Te.Jupiter:r=-9.4,s=.5;break;case Te.Uranus:r=-7.19,s=.25;break;case Te.Neptune:r=-6.87;break;case Te.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let u=r+l*(s+l*(o+l*a));return u+=5*Math.log10(n*i),u}function OA(t,e,n,i,r){const s=EA(i),o=Dt*28.06,a=Dt*(169.51+382e-7*r.tt),l=Dt*s.elat,u=Dt*s.elon,c=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(u-a)),d=Math.sin(Math.abs(c));let f=-9+.044*t;return f+=d*(-2.6+1.2*d),f+=5*Math.log10(e*n),{mag:f,ring_tilt:ps*c}}function zA(t,e,n){let i=t*Dt,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/$r;let l=n/a;return o+=5*Math.log10(e*l),o}class kA{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(Dt*i))/2}}function BA(t,e){if(t===Te.Earth)throw"The illumination of the Earth is not defined.";const n=xn(e),i=Ia(zi.Earth,n);let r,s,o,a;t===Te.Sun?(o=new St(-i.x,-i.y,-i.z,n),s=new St(0,0,0,n),r=0):(t===Te.Moon?(o=Uo(n),s=new St(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=nl(t,e),o=new St(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=iA(o,s));let l=o.Length(),u=s.Length(),c;if(t===Te.Sun)a=eA+5*Math.log10(l);else if(t===Te.Moon)a=zA(r,u,l);else if(t===Te.Saturn){const d=OA(r,u,l,o,n);a=d.mag,c=d.ring_tilt}else a=FA(t,r,u,l);return new kA(n,a,r,u,l,o,s,c)}var sv;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(sv||(sv={}));function $x(t){return new Cr([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function qx(t,e){return new Cr([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function kc(t,e){e=xn(e);const n=t.lat*Dt,i=t.lon*Dt,r=t.dist*Math.cos(n);return new St(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function HA(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=ps*Math.atan2(t.y,t.x),r<0&&(r+=360),i=ps*Math.atan2(t.z,Math.sqrt(e));return new Da(i,r,n)}function VA(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function GA(t,e){const n=HA(t);return n.lon=VA(n.lon),n.lat+=WA(e,n.lat),n}function WA(t,e){let n;return jn(e),e<-90||e>90?0:(n=0,n)}function sa(t,e){return new St(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function jA(t){t=xn(t);const e=kx(t,Pn.Into2000),n=zx(t,Pn.Into2000);return qx(e,n)}function XA(t,e){t=xn(t);const n=Math.sin(e.latitude*Dt),i=Math.cos(e.latitude*Dt),r=Math.sin(e.longitude*Dt),s=Math.cos(e.longitude*Dt),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],u=-15*rm(t),c=M0(u,o),d=M0(u,a),f=M0(u,l);return new Cr([[d[0],f[0],c[0]],[d[1],f[1],c[1]],[d[2],f[2],c[2]]])}function $A(t,e){const n=XA(t,e);return $x(n)}function qA(t,e){t=xn(t);const n=$A(t,e),i=jA(t);return qx(n,i)}function YA(t,e){const n=qA(t,e);return $x(n)}var ov;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(ov||(ov={}));var av;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(av||(av={}));function KA(t){const e=t.rot;return new Cr([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class ZA{constructor(e,n){tt(this,"time");tt(this,"observer");tt(this,"rEqjToHor");tt(this,"rHorToEqj");this.time=new is(e),this.observer=new Hx(n.latitude,n.longitude,n.height),this.rEqjToHor=YA(this.time,this.observer),this.rHorToEqj=KA(this.rEqjToHor)}julianDay(){return 2451545+this.time.tt}gmstHours(){return pA(this.time)}equatorialToHorizontal(e,n){const i=kc(new Da(n,e,1),this.time),r=sa(this.rEqjToHor,i),s=GA(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=kc(new Da(n,e,1),this.time),r=sa(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=sa(this.rEqjToHor,kc(new Da(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=sa(this.rHorToEqj,new St(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizonPointEquatorial(e){const n=e*Math.PI/180,i=new St(Math.cos(n),-Math.sin(n),0,this.time),r=sa(this.rHorToEqj,i),s=Math.hypot(r.x,r.y,r.z)||1,o=(Math.atan2(r.y/s,r.x/s)*180/Math.PI%360+360)%360,a=Math.asin(Math.max(-1,Math.min(1,r.z/s)))*180/Math.PI;return{ra:o,dec:a}}solarSystemBodies(){return[{body:Te.Sun,name:"太阳"},{body:Te.Moon,name:"月球"},{body:Te.Mercury,name:"水星"},{body:Te.Venus,name:"金星"},{body:Te.Mars,name:"火星"},{body:Te.Jupiter,name:"木星"},{body:Te.Saturn,name:"土星"}].map(({body:n,name:i})=>{const r=SA(n,this.time,this.observer,!1,!0),s=BA(n,this.time);return{body:n,name:i,ra:r.ra*15,dec:r.dec,mag:s.mag,phaseFraction:n===Te.Moon?s.phase_fraction:void 0}})}}function JA(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function QA(t,e,n,i,r){const s=t.solarSystemBodies(),o=[];for(const p of em){const m=t.equatorialToHorizontal(p.ra,p.dec),x=xu(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,h=m.altDeg>=0;o.push({id:p.id,name:p.name,designation:p.designation,kind:"star",ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:p.mag<=n,aboveHorizon:h,tags:p.tags})}for(const p of s){const m=t.equatorialToHorizontal(p.ra,p.dec),x=xu(e.centerRa,e.centerDec,p.ra,p.dec),g=x<=e.radiusDeg,h=m.altDeg>=0;o.push({id:`body-${p.body}`,name:p.name,designation:p.name,kind:JA(p.name),ra:p.ra,dec:p.dec,mag:p.mag,az:m.azDeg,alt:m.altDeg,hx:m.hx,hy:m.hy,hz:m.hz,sepFromCenter:x,inFov:g,passesMag:!0,aboveHorizon:h,tags:[],phaseFraction:p.phaseFraction})}const a=[],l=[],u={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},c=240;for(let p=0;p<c;p++){const m=360*p/c,x=t.horizonPointEquatorial(m);a.push([x.ra,x.dec]),m in u&&l.push({label:u[m],ra:x.ra,dec:x.dec})}a.push(a[0]);const d=t.nadirEquatorial(),f=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const p of o)p.inFov=p.sepFromCenter<=e.radiusDeg;return{targets:o,horizon:{ring:a,nadirRa:d.ra,nadirDec:d.dec,cardinalPoints:l},centerAlt:f.altDeg,centerAz:f.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function w0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}function e8(t){return t.replace(".000Z","Z").replace("T"," ")}function lv(t,e,n,i,r){const s=Px(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),o=An/2,a=30,l=70,u=92,c=An+a*2,d=An+a*2+l+u,f=a,p=l,m=s.path(bx()),x=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,g=[];for(let R=x;R<r.fov.radiusDeg;R+=x)g.push(s.path(Pu(r.fov.centerRa,r.fov.centerDec,R)));const h=s.path(Pu(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),_=s.path(Dx(e.horizon.nadirRa,e.horizon.nadirDec)),v=s.path(Lx(e.horizon.nadirRa,e.horizon.nadirDec)),S=R=>R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=n.map(R=>{const B=s.projection([R.ra,R.dec]);if(!B)return"";const y=Math.max(1.6,Math.min(7,6.2-R.mag*.9));return R.kind==="star"?`<circle cx="${B[0].toFixed(1)}" cy="${B[1].toFixed(1)}" r="${y.toFixed(1)}" fill="#fff" opacity="${R.aboveHorizon?1:.35}"/>`:R.kind==="planet"?`<rect x="${(B[0]-y).toFixed(1)}" y="${(B[1]-y).toFixed(1)}" width="${(y*2).toFixed(1)}" height="${(y*2).toFixed(1)}" fill="#9ecbff"/>`:`<polygon points="${B[0].toFixed(1)},${(B[1]-y).toFixed(1)} ${(B[0]+y).toFixed(1)},${B[1].toFixed(1)} ${B[0].toFixed(1)},${(B[1]+y).toFixed(1)} ${(B[0]-y).toFixed(1)},${B[1].toFixed(1)}" fill="${R.kind==="sun"?"#ffd27d":"#dfe6f2"}"/>`}).join(""),A=n.filter(R=>R.kind!=="star"||R.mag<=1.6).map(R=>{const B=s.projection([R.ra,R.dec]);return B?`<text x="${(B[0]+7).toFixed(1)}" y="${(B[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${S(R.name)}</text>`:""}).join(""),T=i.map(R=>{const B=s.projection([R.ra,R.dec]);return B?`<circle cx="${B[0].toFixed(1)}" cy="${B[1].toFixed(1)}" r="5" fill="none" stroke="${R.color}" stroke-width="1.6"/><text x="${(B[0]+8).toFixed(1)}" y="${(B[1]+4).toFixed(1)}" font-size="11" fill="${R.color}">${S(R.text)}</text>`:""}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${d}" viewBox="0 0 ${c} ${d}" font-family="sans-serif">
<rect width="${c}" height="${d}" fill="#070a14"/>
<text x="${f}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${S(r.projectionLabel)}</text>
<text x="${f}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${bo(r.fov.centerRa)} / ${Lo(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${f},${p})">
<circle cx="${o}" cy="${o}" r="${tl}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${o}" cy="${o}" r="${tl}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${m}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${g.map(R=>`<path d="${R}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${v}" fill="#5a1f24" opacity="0.35"/>
<path d="${_}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${h}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${P}
${A}
${T}
</g>
</g>
<g transform="translate(${f},${p+An+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${e8(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${S(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
</g>
</svg>`}function cv(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function t8(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((d,f)=>{s.onload=()=>d(),s.onerror=()=>f(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):An,l=o?Number(o[2]):An,u=document.createElement("canvas");u.width=a*n,u.height=l*n;const c=u.getContext("2d");c.fillStyle="#070a14",c.fillRect(0,0,u.width,u.height),c.drawImage(s,0,0,u.width,u.height),URL.revokeObjectURL(r),u.toBlob(d=>{if(!d)return;const f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.download=e,p.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)},"image/png")}function n8(t,e,n,i){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},targets:e.map(r=>({id:r.id,name:r.name,designation:r.designation,kind:r.kind,ra_J2000_deg:Number(r.ra.toFixed(5)),dec_J2000_deg:Number(r.dec.toFixed(5)),magnitude:r.mag,azimuth_deg:Number(r.az.toFixed(3)),altitude_deg:Number(r.alt.toFixed(3)),angularSeparationFromCenter_deg:Number(r.sepFromCenter.toFixed(3))})),annotations:n},null,2)}const i8="local-starchart",r8=2,il="fovs",rl="annotations",Nu="coverage";let vc=null;function s8(){return vc||(vc=new Promise((t,e)=>{const n=indexedDB.open(i8,r8);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(il)||i.createObjectStore(il,{keyPath:"uuid"}),i.objectStoreNames.contains(rl)||i.createObjectStore(rl,{keyPath:"uuid"}),i.objectStoreNames.contains(Nu)||i.createObjectStore(Nu,{keyPath:"id"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),vc)}function Ir(t,e,n){return s8().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function o8(t){await Ir(il,"readwrite",e=>e.put(t))}async function T0(){return(await Ir(il,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function a8(t){await Ir(il,"readwrite",e=>e.delete(t))}async function l8(t){await Ir(rl,"readwrite",e=>e.put(t))}async function A0(){return(await Ir(rl,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function c8(t){await Ir(rl,"readwrite",e=>e.delete(t))}async function u8(){return Ir(Nu,"readonly",t=>t.get("main")).then(t=>t??null)}async function f8(t){await Ir(Nu,"readwrite",e=>e.put(t))}const uv=bu[0],d8="2026-09-30T13:00:00Z",h8={centerRa:213.9,centerDec:19.2,radiusDeg:30};function R0(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}const p8={id:"main",items:[],updatedAt:0};function m8(){const[t,e]=Ve.useState(uv),[n,i]=Ve.useState(d8),[r,s]=Ve.useState(h8),[o,a]=Ve.useState(4.5),[l,u]=Ve.useState(!1),[c,d]=Ve.useState(!0),[f,p]=Ve.useState(!0),[m,x]=Ve.useState(null),[g,h]=Ve.useState(null),[_,v]=Ve.useState(null),[S,P]=Ve.useState([]),[A,T]=Ve.useState([]),[R,B]=Ve.useState(p8);Ve.useEffect(()=>{T0().then(P).catch(()=>{}),A0().then(T).catch(()=>{}),u8().then(J=>{J&&B(J)}).catch(()=>{})},[]);const y=Ve.useMemo(()=>{const J=new Date(n);return Number.isNaN(J.getTime())?null:new ZA(J,t)},[t.latitude,t.longitude,t.height,n]),M=Ve.useMemo(()=>t6(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),k=Ve.useMemo(()=>y?QA(y,r,o,l,M):null,[y,r,o,l,M]),H=Ve.useMemo(()=>y==null?void 0:y.graticuleHorizontal(),[y]),j=Ve.useMemo(()=>m&&k?k.targets.find(J=>J.id===m)??null:null,[m,k]),I=J=>{x(J),J&&v({id:J,nonce:Date.now()})},z=J=>{const b=zc.find(de=>de.id===J);if(!b)return;const Le=bu.find(de=>de.id===b.siteId)??uv;e({...Le}),i(b.timeUtcIso),s({centerRa:b.centerRaDeg,centerDec:b.centerDecDeg,radiusDeg:b.fovRadiusDeg}),a(b.magLimit),u(b.horizonClip),b.suggestSelectId&&(x(b.suggestSelectId),v({id:b.suggestSelectId,nonce:Date.now()}))},Y=J=>{const b={uuid:R0(),name:J,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};o8(b).then(()=>T0().then(P))},D=J=>a8(J).then(()=>T0().then(P)),Z=J=>s({...J.fov}),$=(J,b)=>{if(!j){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const Le={uuid:R0(),createdAt:Date.now(),ra:j.ra,dec:j.dec,text:J,color:b};l8(Le).then(()=>A0().then(T))},ie=J=>c8(J).then(()=>A0().then(T)),_e=Ve.useMemo(()=>W6(R),[R]),De=J=>{const b={id:"main",items:J,updatedAt:Date.now()};B(b),f8(b).catch(()=>{})},q=J=>{R.items.some(b=>b.sourceFovUuid===J.uuid)||De([...R.items,{itemId:R0(),sourceFovUuid:J.uuid,name:J.name,fov:{...J.fov},addedAt:Date.now()}])},te=J=>{De(R.items.filter(b=>b.itemId!==J))},le=J=>{var Le;const b=R.items.find(de=>de.itemId===J);b&&(s({...b.fov}),(Le=document.getElementById("three-views"))==null||Le.scrollIntoView({behavior:"smooth",block:"start"}))},ue=(J,b)=>{var Re,Ee;const Le=em.find(Be=>Be.id===J);if(!Le)return;let de=b?R.items.find(Be=>Be.itemId===b):void 0;if(!de){const Be=_e.covers.find(Ie=>Ie.target.id===J);de=Be&&Be.items.length>0?Be.items[0]:(Re=j6(Le.ra,Le.dec,R))==null?void 0:Re.item}de&&s({...de.fov}),x(J),v({id:J,nonce:Date.now()}),(Ee=document.getElementById("three-views"))==null||Ee.scrollIntoView({behavior:"smooth",block:"start"})},Ne=J=>k?{projectionLabel:J,site:t,timeUtcIso:n,fov:r,julianDay:k.julianDay,gmstHours:k.gmstHours,horizonClip:l,magLimit:o}:null,V=J=>{if(!k)return;const Le=Ne(J==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),de=k.targets.filter(Ee=>w0(Ee,l)),Re=lv(J,k,de,A,Le);cv(`星图_${J}_${n.slice(0,10)}.svg`,Re,"image/svg+xml;charset=utf-8")},Fe=async J=>{if(!k)return;const Le=Ne("立体投影 Stereographic"),de=k.targets.filter(Ee=>w0(Ee,l)),Re=lv(J,k,de,A,Le);await t8(Re,`星图_${J}_${n.slice(0,10)}.png`)},Qe=()=>{if(!k)return;const J=Ne("数据导出 JSON"),b=k.targets.filter(Le=>w0(Le,l));cv(`星表视场_${n.slice(0,10)}.json`,n8(k,b,A,J),"application/json")};return L.jsxs("div",{className:"app",children:[L.jsxs("header",{className:"app-header",children:[L.jsxs("div",{children:[L.jsx("h1",{children:"本地星图工具"}),L.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),L.jsxs("div",{className:"export-bar",children:[L.jsx("button",{className:"btn",onClick:()=>V("stereographic"),children:"导出 立体 SVG"}),L.jsx("button",{className:"btn",onClick:()=>V("equidistant"),children:"导出 等距 SVG"}),L.jsx("button",{className:"btn",onClick:()=>Fe("stereographic"),children:"导出 PNG"}),L.jsx("button",{className:"btn",onClick:Qe,children:"导出 JSON"})]})]}),L.jsxs("div",{className:"main-grid",children:[L.jsx("aside",{className:"sidebar",children:L.jsx(X6,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:c,showGraticule:f,savedFovs:S,annotations:A,plan:R,onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:u,onToggleShowHorizon:d,onToggleGraticule:p,onApplyScenario:z,onSaveFov:Y,onLoadFov:Z,onDeleteFov:D,onAddAnnotation:$,onDeleteAnnotation:ie,onAddPlanItem:q,onRemovePlanItem:te,onReviewPlanItem:le})}),L.jsx("main",{className:"content",children:k?L.jsxs(L.Fragment,{children:[L.jsx("section",{className:"view-row cov-section",children:L.jsx(Y6,{plan:R,result:_e,selectedId:m,hoverId:g,onHover:h,onReviewTarget:ue,onReviewItem:le})}),L.jsxs("div",{id:"three-views",children:[L.jsxs("section",{className:"view-row globe-section",children:[L.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),L.jsx(i6,{sky:k,fov:r,horizonClip:l,showGraticule:f,annotations:A,selectedId:m,hoverId:g,onSelect:I,onHover:h,focusToken:_,graticuleHorizontal:H})]}),L.jsxs("section",{className:"view-row proj-section",children:[L.jsx(q1,{kind:"stereographic",sky:k,fov:r,horizonClip:l,showHorizon:c,annotations:A,selectedId:m,hoverId:g,onSelect:I,onHover:h}),L.jsx(q1,{kind:"equidistant",sky:k,fov:r,horizonClip:l,showHorizon:c,annotations:A,selectedId:m,hoverId:g,onSelect:I,onHover:h})]}),L.jsx(q6,{target:j,centerAlt:k.centerAlt,centerAz:k.centerAz,gmstHours:k.gmstHours,julianDay:k.julianDay})]})]}):L.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),L.jsx("footer",{className:"app-footer",children:"纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距"})]})}C0.createRoot(document.getElementById("root")).render(L.jsx(v3.StrictMode,{children:L.jsx(m8,{})}));
