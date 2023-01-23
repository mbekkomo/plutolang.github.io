"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a=void 0,p={unversionedId:"Optimizations/For Loops",id:"Optimizations/For Loops",title:"For Loops",description:"The pairs and ipairs functions are optimized in Pluto. On a consistent basis, pairs & ipairs loops are 3.5x faster than their Lua counterparts.",source:"@site/docs/Optimizations/For Loops.md",sourceDirName:"Optimizations",slug:"/Optimizations/For Loops",permalink:"/docs/Optimizations/For Loops",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Optimizations",permalink:"/docs/category/optimizations"},next:{title:"Jump Table",permalink:"/docs/Optimizations/Jump Table"}},s={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pairs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ipairs")," functions are optimized in Pluto. On a consistent basis, ",(0,i.kt)("inlineCode",{parentName:"p"},"pairs")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ipairs")," loops are ",(0,i.kt)("strong",{parentName:"p"},"3.5x")," faster than their Lua counterparts."),(0,i.kt)("h1",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"It doesn't operate under all circumstances though, the state of the iterator is stored in the to-be-closed variable returned by these functions, which is the last variable they give. If you interact or modify this variable, then the optimization won't occur."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pairs: next, table, nil, nil\nipairs: ipairsaux, table, integer, nil\n")),(0,i.kt)("p",null,"As long as you don't access the last ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," value, you're fine."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This optimization was published by Xmelia Hermit.")))}u.isMDXComponent=!0}}]);