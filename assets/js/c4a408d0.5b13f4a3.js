"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"New Syntax/Switch Statement",id:"New Syntax/Switch Statement",title:"Switch Statement",description:"The switch statement consists of the following new keywords:",source:"@site/docs/New Syntax/Switch Statement.md",sourceDirName:"New Syntax",slug:"/New Syntax/Switch Statement",permalink:"/docs/New Syntax/Switch Statement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lambda Expressions",permalink:"/docs/New Syntax/Lambda Expressions"},next:{title:"Ternary Expressions",permalink:"/docs/New Syntax/Ternary Expressions"}},s={},c=[{value:"Interactive Example",id:"interactive-example",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The switch statement consists of the following new keywords:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"case")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default"))),(0,a.kt)("p",null,"The behavior of this syntax is nearly identical with C, so you should learn how they work in C if you're unaware."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},'local value = 3\nswitch value do\n  case 1:\n  case 2:\n  case 3:\n  case 4:\n  case 5:\n    print("Got 1-5.")\n    break\n  default:\n    print("Value is greater than 5.")\nend\n-- Break jumps here.\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," case will run if you don't break from any prior case expressions.")),(0,a.kt)("h1",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,a.kt)("p",null,"The keywords will be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_case")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_default"))),(0,a.kt)("h4",{id:"interactive-example"},(0,a.kt)("a",{parentName:"h4",href:"https://plutolang.github.io/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here."},"Interactive Example")))}u.isMDXComponent=!0}}]);