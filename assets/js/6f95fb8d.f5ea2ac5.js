"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,c={unversionedId:"For Developers/Execution Time Limit",id:"For Developers/Execution Time Limit",title:"Execution Time Limit",description:"To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining PLUTOETLENABLE in luaconf.h or your build config.",source:"@site/docs/For Developers/Execution Time Limit.md",sourceDirName:"For Developers",slug:"/For Developers/Execution Time Limit",permalink:"/docs/For Developers/Execution Time Limit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Content Moderation",permalink:"/docs/For Developers/Content Moderation"},next:{title:"Infinite Loop Prevention",permalink:"/docs/For Developers/Infinite Loop Prevention"}},l={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining ",(0,o.kt)("inlineCode",{parentName:"p"},"PLUTO_ETL_ENABLE")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"luaconf.h")," or your build config."),(0,o.kt)("p",null,"By default, ETL allows code to run for a total of 1 ms (1.000.000 nanos). This can be changed by overwriting ",(0,o.kt)("inlineCode",{parentName:"p"},"PLUTO_ETL_NANOS"),"."),(0,o.kt)("p",null,"Note that this is a hammer solution. If you only want to prevent stupid mistakes, ",(0,o.kt)("a",{parentName:"p",href:"Infinite%20Loop%20Prevention"},"Infinite Loop Prevention")," is a far better tool."))}s.isMDXComponent=!0}}]);