"use strict";(self.webpackChunkbuiler=self.webpackChunkbuiler||[]).push([[80],{80:(e,t,r)=>{r.d(t,{Kd:()=>y});var n=r(540),o=r.t(n,2),u=r(961),a=r.t(u,2),c=r(588);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const l=n.createContext(null),s=n.createContext(null);function f(e){let{basename:t="/",children:r=null,location:o,navigationType:u=c.rc.Pop,navigator:a,static:f=!1,future:p}=e;null!=n.useContext(s)&&(0,c.Oi)(!1);let y=t.replace(/^\/*/,"/"),d=n.useMemo((()=>({basename:y,navigator:a,static:f,future:i({v7_relativeSplatPath:!1},p)})),[y,p,a,f]);"string"==typeof o&&(o=(0,c.Rr)(o));let{pathname:h="/",search:m="",hash:v="",state:b=null,key:_="default"}=o,S=n.useMemo((()=>{let e=(0,c.pb)(h,y);return null==e?null:{location:{pathname:e,search:m,hash:v,state:b,key:_},navigationType:u}}),[y,h,m,v,b,_,u]);return null==S?null:n.createElement(l.Provider,{value:d},n.createElement(s.Provider,{children:r,value:S}))}n.Component,o.startTransition,new Promise((()=>{})),n.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(e){}new Map;const p=o.startTransition;function y(e){let{basename:t,children:r,future:o,window:u}=e,a=n.useRef();null==a.current&&(a.current=(0,c.zR)({window:u,v5Compat:!0}));let i=a.current,[l,s]=n.useState({action:i.action,location:i.location}),{v7_startTransition:y}=o||{},d=n.useCallback((e=>{y&&p?p((()=>s(e))):s(e)}),[s,y]);return n.useLayoutEffect((()=>i.listen(d)),[i,d]),n.createElement(f,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:o})}var d,h,m,v;a.flushSync,o.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(v=d||(d={})).UseScrollRestoration="useScrollRestoration",v.UseSubmit="useSubmit",v.UseSubmitFetcher="useSubmitFetcher",v.UseFetcher="useFetcher",v.useViewTransitionState="useViewTransitionState",(m=h||(h={})).UseFetcher="useFetcher",m.UseFetchers="useFetchers",m.UseScrollRestoration="useScrollRestoration"},287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var S=_.prototype=new b;S.constructor=_,h(S,v.prototype),S.isPureReactComponent=!0;var w=Array.isArray,R=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)R.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:a,ref:c,props:u,_owner:E.current}}function g(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var $=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return a=a(i=e),e=""===u?"."+j(i,0):u,w(a)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(g(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace($,"$&/")+"/")+e)),t.push(a)),1;if(i=0,u=""===u?".":u+":",w(e))for(var l=0;l<e.length;l++){var s=u+j(c=e[l],l);i+=O(c,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(c=e.next()).done;)i+=O(c=c.value,t,o,s=u+j(c,l++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},F={transition:null},U={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:F,ReactCurrentOwner:E};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.act=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)R.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){i=Array(l);for(var s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=g,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)}}]);
//# sourceMappingURL=80.09434df6e469d704ec65.js.map