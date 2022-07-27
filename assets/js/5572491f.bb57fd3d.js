"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"New Features/Table Freezing",id:"New Features/Table Freezing",title:"Table Freezing",description:"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table.",source:"@site/docs/New Features/Table Freezing.md",sourceDirName:"New Features",slug:"/New Features/Table Freezing",permalink:"/docs/New Features/Table Freezing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"String Indexing",permalink:"/docs/New Features/String Indexing"},next:{title:"New Operators",permalink:"/docs/category/new-operators"}},s={},u=[{value:"What will this prevent?",id:"what-will-this-prevent",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code 1"',showLineNumbers:!0,title:'"Example',Code:!0,'1"':!0},"-- Disallowing any edits to the global environment table.\ntable.freeze(_G)\n\n// ERROR:\n_G.string = {}\n// ERROR:\n-- file.lua:2: attempt to modify frozen table.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code 3"',showLineNumbers:!0,title:'"Example',Code:!0,'3"':!0},'-- Creating a constant local that\'s associated with a frozen table.\nlocal Frozen <const> = table.freeze({ 1, 2, 3 })\n\n// ERROR:\nFrozen = {}\n// ERROR:\n-- file.lua:4: attempt to reassign constant.\n\n// ERROR:\nFrozen[1] = "new value"\n// ERROR:\n-- file.lua:7: attempt to modify frozen table.\n\n// ERROR:\nrawset(Frozen, "key", "value")\n// ERROR:\n-- file.lua:10: attempt to modify frozen table.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code 4"',showLineNumbers:!0,title:'"Example',Code:!0,'4"':!0},'--- Trying to swap the value with the debug library.\nfor i = 1, 249 do\n  local name, value = debug.getlocal(1, i)\n  if name == "Frozen" then\n    // ERROR:\n    debug.setlocal(1, i, { ["key"] = "hello world" })\n    // ERROR:\n    -- file.lua:5: attempt to modify local variable with a frozen table.\n  end\nend\n')),(0,a.kt)("h3",{id:"what-will-this-prevent"},"What will this prevent?"),(0,a.kt)("p",null,"All modifications to the table from within the Lua environment will be prevented, including those from the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," library."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're going to use this for a sandbox, ensure you call ",(0,a.kt)("inlineCode",{parentName:"p"},"table.freeze")," before any users can access the Lua environment, otherwise they can replace that function.")))}p.isMDXComponent=!0}}]);