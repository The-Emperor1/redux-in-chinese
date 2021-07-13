(self.webpackChunk=self.webpackChunk||[]).push([[6157],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3884:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o={id:"reducers",title:"Reducers",hide_title:!1},s={unversionedId:"faq/reducers",id:"faq/reducers",isDocsHomePage:!1,title:"Redux FAQ: Reducers",description:"Table of Contents",source:"@site/../docs/faq/Reducers.md",sourceDirName:"faq",slug:"/faq/reducers",permalink:"/faq/reducers",version:"current",frontMatter:{id:"reducers",title:"Reducers",hide_title:!1},sidebar:"docs",previous:{title:"Redux FAQ: General",permalink:"/faq/general"},next:{title:"Redux FAQ: Organizing State",permalink:"/faq/organizing-state"}},u=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Reducers",id:"reducers",children:[{value:"How do I share state between two reducers? Do I have to use <code>combineReducers</code>?",id:"how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers",children:[]},{value:"Do I have to use the <code>switch</code> statement to handle actions?",id:"do-i-have-to-use-the-switch-statement-to-handle-actions",children:[]}]}],c={toc:u};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#redux-faq-reducers"},"Redux FAQ: Reducers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reducers"},"Reducers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers"},"How do I share state between two reducers? Do I have to use ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"),"?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information"},"Further information")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#do-i-have-to-use-the-switch-statement-to-handle-actions"},"Do I have to use the ",(0,i.kt)("inlineCode",{parentName:"a"},"switch")," statement to handle actions?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information"))))))))),(0,i.kt)("h2",{id:"reducers"},"Reducers"),(0,i.kt)("h3",{id:"how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers"},"How do I share state between two reducers? Do I have to use ",(0,i.kt)("inlineCode",{parentName:"h3"},"combineReducers"),"?"),(0,i.kt)("p",null,"The suggested structure for a Redux store is to split the state object into multiple \u201cslices\u201d or \u201cdomains\u201d by key, and provide a separate reducer function to manage each individual data slice. This is similar to how the standard Flux pattern has multiple independent stores, and Redux provides the ",(0,i.kt)("a",{parentName:"p",href:"/api/combinereducers"},(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))," utility function to make this pattern easier. However, it's important to note that ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," is ",(0,i.kt)("em",{parentName:"p"},"not")," required\u2014it is simply a utility function for the common use case of having a single reducer function per state slice, with plain JavaScript objects for the data."),(0,i.kt)("p",null,"Many users later want to try to share data between two reducers, but find that ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," does not allow them to do so. There are several approaches that can be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a reducer needs to know data from another slice of state, the state tree shape may need to be reorganized so that a single reducer is handling more of the data."),(0,i.kt)("li",{parentName:"ul"},"You may need to write some custom functions for handling some of these actions. This may require replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"combineReducers")," with your own top-level reducer function. You can also use a utility such as ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acdlite/reduce-reducers"},"reduce-reducers")," to run ",(0,i.kt)("inlineCode",{parentName:"li"},"combineReducers")," to handle most actions, but also run a more specialized reducer for specific actions that cross state slices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-4-store#middleware"},"Middleware with async logic")," such as ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},"redux-thunk")," have access to the entire state through ",(0,i.kt)("inlineCode",{parentName:"li"},"getState()"),". An action creator can retrieve additional data from the state and put it in an action, so that each reducer has enough information to update its own state slice.")),(0,i.kt)("p",null,"In general, remember that reducers are just functions\u2014you can organize them and subdivide them any way you want, and you are encouraged to break them down into smaller, reusable functions (\u201creducer composition\u201d). While you do so, you may pass a custom third argument from a parent reducer if a child reducer needs additional data to calculate its next state. You just need to make sure that together they follow the basic rules of reducers: ",(0,i.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),", and update state immutably rather than mutating it directly."),(0,i.kt)("h4",{id:"further-information"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/combinereducers"},"API: combineReducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/structuring-reducers/structuring-reducers"},"Recipes: Structuring Reducers"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/601"},"#601: A concern on combineReducers, when an action is related to multiple reducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1400"},"#1400: Is passing top-level state object to branch reducer an anti-pattern?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34333979/accessing-other-parts-of-the-state-when-using-combined-reducers"},"Stack Overflow: Accessing other parts of the state when using combined reducers?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34427851/reducing-an-entire-subtree-with-redux-combinereducers"},"Stack Overflow: Reducing an entire subtree with redux combineReducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://invalidpatent.wordpress.com/2016/02/18/sharing-state-between-redux-reducers/"},"Sharing State Between Redux Reducers"))),(0,i.kt)("h3",{id:"do-i-have-to-use-the-switch-statement-to-handle-actions"},"Do I have to use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"switch")," statement to handle actions?"),(0,i.kt)("p",null,"No. You are welcome to use any approach you'd like to respond to an action in a reducer. The ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statement is the most common approach, but it's fine to use ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statements, a lookup table of functions, or to create a function that abstracts this away. In fact, while Redux does require that action objects contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field, your reducer logic doesn't even have to rely on that to handle the action. That said, the standard approach is definitely using a switch statement or a lookup table based on ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,i.kt)("h4",{id:"further-information-1"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/reducing-boilerplate"},"Recipes: Reducing Boilerplate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/structuring-reducers/splitting-reducer-logic"},"Recipes: Structuring Reducers - Splitting Reducer Logic"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/883"},"#883: take away the huge switch block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1167"},"#1167: Reducer without switch"))))}l.isMDXComponent=!0}}]);