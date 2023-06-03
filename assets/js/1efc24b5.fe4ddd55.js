"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7150],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(g,l(l({ref:r},c),{},{components:t})):n.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3279:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={},l=void 0,s={unversionedId:"New Features/Numeral Parsing",id:"New Features/Numeral Parsing",title:"Numeral Parsing",description:"Pluto makes two small changes to numeral parsing.",source:"@site/docs/New Features/Numeral Parsing.md",sourceDirName:"New Features",slug:"/New Features/Numeral Parsing",permalink:"/docs/New Features/Numeral Parsing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Named Varargs",permalink:"/docs/New Features/Named Varargs"},next:{title:"Object-Oriented Programming",permalink:"/docs/New Features/Object-Oriented Programming"}},i={},u=[{value:"Cosmetic Underscores",id:"cosmetic-underscores",level:2},{value:"Binary Integers",id:"binary-integers",level:2}],c={toc:u},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pluto makes two small changes to numeral parsing."),(0,a.kt)("h2",{id:"cosmetic-underscores"},"Cosmetic Underscores"),(0,a.kt)("p",null,"You can add underscores to your numeric literals to make them more readable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"local n = 10_000_000\nassert(n == 10000000)\n")),(0,a.kt)("p",null,"These underscores are ignored by the compiler, so they are purely cosmetic."),(0,a.kt)("h2",{id:"binary-integers"},"Binary Integers"),(0,a.kt)("p",null,"Similar to how Lua allows you to input numbers in hexadecimal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"local n = 0x420\nassert(n == 1056)\n")),(0,a.kt)("p",null,"Pluto allows you to input numbers in binary as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"local n = 0b1000101\nassert(n == 69)\n")))}m.isMDXComponent=!0}}]);