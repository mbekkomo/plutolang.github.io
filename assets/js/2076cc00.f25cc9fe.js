"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"New Syntax/Ternary Expressions",id:"New Syntax/Ternary Expressions",title:"Ternary Expressions",description:"Ternary expressions behave identical as to how they would in C. They introduce no new keywords.",source:"@site/docs/New Syntax/Ternary Expressions.md",sourceDirName:"New Syntax",slug:"/New Syntax/Ternary Expressions",permalink:"/docs/New Syntax/Ternary Expressions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Switch Statement",permalink:"/docs/New Syntax/Switch Statement"},next:{title:"When Statement",permalink:"/docs/New Syntax/When Statement"}},s={},c=[{value:"Interactive Example",id:"interactive-example",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ternary expressions behave identical as to how they would in C. They introduce no new keywords."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"-- Old\nlocal max\nif a > b then\n  max = a\nelse\n  max = b\nend\n\n-- New\nlocal max = if a > b then a else b\n")),(0,a.kt)("p",null,"Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statements, these do not terminate with ",(0,a.kt)("inlineCode",{parentName:"p"},"end"),". They don't support ",(0,a.kt)("inlineCode",{parentName:"p"},"elseif")," either."),(0,a.kt)("h4",{id:"interactive-example"},(0,a.kt)("a",{parentName:"h4",href:"https://plutolang.github.io/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20if%20a%20%3E%20b%20then%20a%20else%20b%0A%0Aprint(max)"},"Interactive Example")))}u.isMDXComponent=!0}}]);