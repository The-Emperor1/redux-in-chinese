(self.webpackChunk=self.webpackChunk||[]).push([[3666],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9787:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"createstore",title:"createStore",hide_title:!0},p={unversionedId:"api/createstore",id:"api/createstore",isDocsHomePage:!1,title:"createStore",description:"Creates a Redux store that holds the complete state tree of your app.",source:"@site/../docs/api/createStore.md",sourceDirName:"api",slug:"/api/createstore",permalink:"/api/createstore",version:"current",frontMatter:{id:"createstore",title:"createStore",hide_title:!0},sidebar:"docs",previous:{title:"API Reference",permalink:"/api/api-reference"},next:{title:"Store",permalink:"/api/store"}},s=[],c={toc:s};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createstorereducer-preloadedstate-enhancer"},(0,o.kt)("inlineCode",{parentName:"h1"},"createStore(reducer, [preloadedState], [enhancer])")),(0,o.kt)("p",null,"Creates a Redux ",(0,o.kt)("a",{parentName:"p",href:"/api/store"},"store")," that holds the complete state tree of your app.\nThere should only be a single store in your app."),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," ",(0,o.kt)("em",{parentName:"p"},"(Function)"),": A ",(0,o.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#reducer"},"reducing function")," that returns the next ",(0,o.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#state"},"state tree"),", given the current state tree and an ",(0,o.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#action"},"action")," to handle.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"preloadedState"),"]"," ",(0,o.kt)("em",{parentName:"p"},"(any)"),": The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," with ",(0,o.kt)("a",{parentName:"p",href:"/api/combinereducers"},(0,o.kt)("inlineCode",{parentName:"a"},"combineReducers")),", this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," can understand.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"enhancer"),"]"," ",(0,o.kt)("em",{parentName:"p"},"(Function)"),": The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is ",(0,o.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,o.kt)("inlineCode",{parentName:"a"},"applyMiddleware()")),"."))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,"(",(0,o.kt)("a",{parentName:"p",href:"/api/store"},(0,o.kt)("em",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"em"},"Store"))),"): An object that holds the complete state of your app. The only way to change its state is by ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},"dispatching actions"),". You may also ",(0,o.kt)("a",{parentName:"p",href:"/api/store#subscribelistener"},"subscribe")," to the changes to its state to update the UI."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return state.concat([action.text])\n    default:\n      return state\n  }\n}\n\nconst store = createStore(todos, ['Use Redux'])\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Read the docs'\n})\n\nconsole.log(store.getState())\n// [ 'Use Redux', 'Read the docs' ]\n")),(0,o.kt)("h4",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Don't create more than one store in an application! Instead, use ",(0,o.kt)("a",{parentName:"p",href:"/api/combinereducers"},(0,o.kt)("inlineCode",{parentName:"a"},"combineReducers"))," to create a single root reducer out of many.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Redux state is normally plain JS objects and arrays.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your state is a plain object, make sure you never mutate it! For example, instead of returning something like ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign(state, newData)")," from your reducers, return ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign({}, state, newData)"),". This way you don't override the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". You can also write ",(0,o.kt)("inlineCode",{parentName:"p"},"return { ...state, ...newData }")," if you enable the ",(0,o.kt)("a",{parentName:"p",href:"/recipes/using-object-spread-operator"},"object spread operator proposal"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", and you're all set.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To apply multiple store enhancers, you may use ",(0,o.kt)("a",{parentName:"p",href:"/api/compose"},(0,o.kt)("inlineCode",{parentName:"a"},"compose()")),"."))))}l.isMDXComponent=!0}}]);