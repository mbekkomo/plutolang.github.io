"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"New Features/Safe Navigation",id:"New Features/Safe Navigation",title:"Safe Navigation",description:'Accessing deeply nested fields which can potentially be nil was problematic, because you\'d need an unreasonable amount of guard clauses to prevent an "attempt to index nil" error. Pluto now offers this syntax:',source:"@site/docs/New Features/Safe Navigation.md",sourceDirName:"New Features",slug:"/New Features/Safe Navigation",permalink:"/docs/New Features/Safe Navigation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Numeral Parsing",permalink:"/docs/New Features/Numeral Parsing"},next:{title:"String Indexing",permalink:"/docs/New Features/String Indexing"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Accessing deeply nested fields which can potentially be ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),' was problematic, because you\'d need an unreasonable amount of guard clauses to prevent an "attempt to index nil" error. Pluto now offers this syntax:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Basic Usage"',showLineNumbers:!0,title:'"Basic','Usage"':!0},"local value = a?.b?.c?.d\n")),(0,a.kt)("p",null,"In this example, every field is nil. However, this does not throw an error. It simply returns ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),'. Without safe table navigation, this would\'ve returned several "attempt to index nil" errors.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Practical Usage"',showLineNumbers:!0,title:'"Practical','Usage"':!0},'-- Pretend userConfig is parsed from a JSON file, or something.\n\n--- Returning the user\'s preferred color, or Red if they have no preferred color.\nlocal function get_color()\n    return userConfig.colors?.preferred ?? "Red"\nend\n\nprint(get_color())\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These cannot be used for statements, like ",(0,a.kt)("inlineCode",{parentName:"p"},"a?.b?.c = 0"),". They're only valid as expressions.")))}p.isMDXComponent=!0}}]);