"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},l="Getting Started",a={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"This document will explain how to get started with writing Pluto in no time.",source:"@site/docs/Getting Started.md",sourceDirName:".",slug:"/Getting Started",permalink:"/docs/Getting Started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Pluto?",permalink:"/docs/Introduction"},next:{title:"New Syntax",permalink:"/docs/category/new-syntax"}},u={},p=[{value:"Write Pluto Online",id:"write-pluto-online",level:2},{value:"Prebuilt Binaries",id:"prebuilt-binaries",level:2},{value:"Compile Pluto Yourself",id:"compile-pluto-yourself",level:2},{value:"Note for Windows",id:"note-for-windows",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"This document will explain how to get started with writing Pluto in no time."),(0,o.kt)("h2",{id:"write-pluto-online"},"Write Pluto Online"),(0,o.kt)("p",null,"The easiest way to get started writing Pluto is to use ",(0,o.kt)("a",{parentName:"p",href:"https://plutolang.github.io/web/"},"Write Pluto Online"),", which runs Pluto code directly in your browser using WASM."),(0,o.kt)("h2",{id:"prebuilt-binaries"},"Prebuilt Binaries"),(0,o.kt)("p",null,"You can find pre-built binaries of Pluto for Windows, Linux, & Mac OS over on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/well-in-that-case/Pluto/actions?query=event%3Apush+branch%3Amain"},"Pluto's Github repository"),". Just click on the latest successful workflow run and download the appropriate artifact."),(0,o.kt)("h2",{id:"compile-pluto-yourself"},"Compile Pluto Yourself"),(0,o.kt)("p",null,"Pluto can compile on virtually any platform, as long as there's a C++ 17 compiler for it, which includes, but is not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BSD"),(0,o.kt)("li",{parentName:"ul"},"FreeBSD"),(0,o.kt)("li",{parentName:"ul"},"Linux"),(0,o.kt)("li",{parentName:"ul"},"MacOS"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Solaris")),(0,o.kt)("p",null,"To compile Pluto yourself, you first need to clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/well-in-that-case/Pluto.git\ncd Pluto\n")),(0,o.kt)("p",null,"And then it's as simple as running the make command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make PLAT={yourplatform}\n")),(0,o.kt)("p",null,"The platform list can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/well-in-that-case/Pluto/blob/main/src/Makefile#L33"},"here"),"."),(0,o.kt)("p",null,"After you compile Pluto, all the binaries will be within the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/")," directory."),(0,o.kt)("h4",{id:"note-for-windows"},"Note for Windows"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command isn't installed by default, so you should install ",(0,o.kt)("a",{parentName:"p",href:"https://www.msys2.org/"},"MSYS"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"On Windows, you can install Visual Studio 2022 and simply use the vendored Visual Studio files from the Pluto repository.")))}c.isMDXComponent=!0}}]);