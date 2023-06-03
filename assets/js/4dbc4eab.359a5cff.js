"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={},a=void 0,i={unversionedId:"QoL Improvements/Reserved Identifiers",id:"QoL Improvements/Reserved Identifiers",title:"Reserved Identifiers",description:"Pluto allows you to use reserved tokens such as if from Lua and class from Pluto as identifiers with shorthand table syntax and for goto labels.",source:"@site/docs/QoL Improvements/Reserved Identifiers.md",sourceDirName:"QoL Improvements",slug:"/QoL Improvements/Reserved Identifiers",permalink:"/docs/QoL Improvements/Reserved Identifiers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Removed Locals Limit",permalink:"/docs/QoL Improvements/Removed Locals Limit"},next:{title:"Syntax Errors",permalink:"/docs/QoL Improvements/Syntax Errors"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto allows you to use reserved tokens such as ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," from Lua and ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," from Pluto as identifiers with shorthand table syntax and for goto labels."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Reserved tokens as identifiers with shorthand table syntax"',showLineNumbers:!0,title:'"Reserved',tokens:!0,as:!0,identifiers:!0,with:!0,shorthand:!0,table:!0,'syntax"':!0},'local t = {\n    class = "key"\n}\nprint(t.class)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Reserved tokens as identifiers for goto labels"',showLineNumbers:!0,title:'"Reserved',tokens:!0,as:!0,identifiers:!0,for:!0,goto:!0,'labels"':!0},"-- Print every number besides five.\nfor i = 1, 10 do\n    if i == 5 then\n        goto continue\n    end\n    print(i)\n    ::continue::\nend\n")),(0,o.kt)("p",null,"However, variable names and function calls will not allow you to use reserved tokens as identifiers."))}d.isMDXComponent=!0}}]);