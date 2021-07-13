(self.webpackChunk=self.webpackChunk||[]).push([[2043],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4407:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"api-reference",title:"API Reference",hide_title:!1},c={unversionedId:"api/api-reference",id:"api/api-reference",isDocsHomePage:!1,title:"API Reference",description:"The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as reducers) and provides a few helper functions to tie these contracts together.",source:"@site/../docs/api/README.md",sourceDirName:"api",slug:"/api/api-reference",permalink:"/api/api-reference",version:"current",frontMatter:{id:"api-reference",title:"API Reference",hide_title:!1},sidebar:"docs",previous:{title:"Style Guide",permalink:"/style-guide/style-guide"},next:{title:"createStore",permalink:"/api/createstore"}},p=[{value:"Top-Level Exports",id:"top-level-exports",children:[]},{value:"Store API",id:"store-api",children:[]},{value:"Importing",id:"importing",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as ",(0,i.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#reducer"},"reducers"),") and provides a few helper functions to tie these contracts together."),(0,i.kt)("p",null,"This section documents the complete Redux API. Keep in mind that Redux is only concerned with managing the state. In a real app, you'll also want to use UI bindings like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux"),"."),(0,i.kt)("h3",{id:"top-level-exports"},"Top-Level Exports"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/createstore"},"createStore(reducer, [preloadedState], [enhancer])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/combinereducers"},"combineReducers(reducers)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/applymiddleware"},"applyMiddleware(...middlewares)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/bindactioncreators"},"bindActionCreators(actionCreators, dispatch)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/compose"},"compose(...functions)"))),(0,i.kt)("h3",{id:"store-api"},"Store API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/store"},"Store"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/store#getState"},"getState()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/store#dispatchaction"},"dispatch(action)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/store#subscribelistener"},"subscribe(listener)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/store#replacereducernextreducer"},"replaceReducer(nextReducer)"))))),(0,i.kt)("h3",{id:"importing"},"Importing"),(0,i.kt)("p",null,"Every function described above is a top-level export. You can import any of them like this:"),(0,i.kt)("h4",{id:"es6"},"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\n")),(0,i.kt)("h4",{id:"es5-commonjs"},"ES5 (CommonJS)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var createStore = require('redux').createStore\n")),(0,i.kt)("h4",{id:"es5-umd-build"},"ES5 (UMD build)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var createStore = Redux.createStore\n")))}u.isMDXComponent=!0}}]);