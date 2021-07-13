(self.webpackChunk=self.webpackChunk||[]).push([[7433],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7697:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return l}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),s={id:"basic-reducer-structure",title:"Basic Reducer Structure",description:"Structuring Reducers > Basic Reducer Structure: Overview of how reducer functions work with Redux state",hide_title:!1},o={unversionedId:"recipes/structuring-reducers/basic-reducer-structure",id:"recipes/structuring-reducers/basic-reducer-structure",isDocsHomePage:!1,title:"Basic Reducer Structure and State Shape",description:"Structuring Reducers > Basic Reducer Structure: Overview of how reducer functions work with Redux state",source:"@site/../docs/recipes/structuring-reducers/BasicReducerStructure.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/basic-reducer-structure",permalink:"/recipes/structuring-reducers/basic-reducer-structure",version:"current",frontMatter:{id:"basic-reducer-structure",title:"Basic Reducer Structure",description:"Structuring Reducers > Basic Reducer Structure: Overview of how reducer functions work with Redux state",hide_title:!1},sidebar:"docs",previous:{title:"Prerequisite Reducer Concepts",permalink:"/recipes/structuring-reducers/prerequisite-concepts"},next:{title:"Splitting Up Reducer Logic",permalink:"/recipes/structuring-reducers/splitting-reducer-logic"}},u=[{value:"Basic Reducer Structure",id:"basic-reducer-structure",children:[]},{value:"Basic State Shape",id:"basic-state-shape",children:[]}],c={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic-reducer-structure"},"Basic Reducer Structure"),(0,i.kt)("p",null,"First and foremost, it's important to understand that your entire application really only has ",(0,i.kt)("strong",{parentName:"p"},"one single reducer function"),": the function that you've passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"createStore")," as the first argument. That one single reducer function ultimately needs to do several things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first time the reducer is called, the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," value will be ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),". The reducer needs to handle this case by supplying a default state value before handling the incoming action."),(0,i.kt)("li",{parentName:"ul"},"It needs to look at the previous state and the dispatched action, and determine what kind of work needs to be done"),(0,i.kt)("li",{parentName:"ul"},"Assuming actual changes need to occur, it needs to create new objects and arrays with the updated data and return those"),(0,i.kt)("li",{parentName:"ul"},"If no changes are needed, it should return the existing state as-is.")),(0,i.kt)("p",null,"The simplest possible approach to writing reducer logic is to put everything into a single function declaration, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function counter(state, action) {\n  if (typeof state === 'undefined') {\n    state = 0 // If state is undefined, initialize it with a default value\n  }\n\n  if (action.type === 'INCREMENT') {\n    return state + 1\n  } else if (action.type === 'DECREMENT') {\n    return state - 1\n  } else {\n    return state // In case an action is passed in we don't understand\n  }\n}\n")),(0,i.kt)("p",null,"Notice that this simple function fulfills all the basic requirements. It returns a default value if none exists, initializing the store; it determines what sort of update needs to be done based on the type of the action, and returns new values; and it returns the previous state if no work needs to be done."),(0,i.kt)("p",null,"There are some simple tweaks that can be made to this reducer. First, repeated ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statements quickly grow tiresome, so it's very common to use ",(0,i.kt)("inlineCode",{parentName:"p"},"switch"),' statements instead. Second, we can use ES6\'s default parameter values to handle the initial "no existing data" case. With those changes, the reducer would look like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"This is the basic structure that a typical Redux reducer function uses."),(0,i.kt)("h2",{id:"basic-state-shape"},"Basic State Shape"),(0,i.kt)("p",null,'Redux encourages you to think about your application in terms of the data you need to manage. The data at any given point in time is the "',(0,i.kt)("em",{parentName:"p"},"state"),'" of your application, and the structure and organization of that state is typically referred to as its "',(0,i.kt)("em",{parentName:"p"},"shape"),'". The shape of your state plays a major role in how you structure your reducer logic.'),(0,i.kt)("p",null,'A Redux state usually has a plain Javascript object as the top of the state tree. (It is certainly possible to have another type of data instead, such as a single number, an array, or a specialized data structure, but most libraries assume that the top-level value is a plain object.) The most common way to organize data within that top-level object is to further divide data into sub-trees, where each top-level key represents some "domain" or "slice" of related data. For example, a basic Todo app\'s state might look like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [\n    {\n      text: 'Consider using Redux',\n      completed: true,\n    },\n    {\n      text: 'Keep all state in a single tree',\n      completed: false\n    }\n  ]\n}\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"todos")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityFilter"),' are both top-level keys in the state, and each represents a "slice" of data for some particular concept.'),(0,i.kt)("p",null,"Most applications deal with multiple types of data, which can be broadly divided into three categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Domain data"),': data that the application needs to show, use, or modify (such as "all of the Todos retrieved from the server")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"App state"),': data that is specific to the application\'s behavior (such as "Todo #5 is currently selected", or "there is a request in progress to fetch Todos")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"UI state"),': data that represents how the UI is currently displayed (such as "The EditTodo modal dialog is currently open")')),(0,i.kt)("p",null,"Because the store represents the core of your application, you should ",(0,i.kt)("strong",{parentName:"p"},"define your state shape in terms of your domain data and app state, not your UI component tree"),". As an example, a shape of ",(0,i.kt)("inlineCode",{parentName:"p"},"state.leftPane.todoList.todos"),' would be a bad idea, because the idea of "todos" is central to the whole application, not just a single part of the UI. The ',(0,i.kt)("inlineCode",{parentName:"p"},"todos")," slice should be at the top of the state tree instead."),(0,i.kt)("p",null,"There will ",(0,i.kt)("em",{parentName:"p"},"rarely")," be a 1-to-1 correspondence between your UI tree and your state shape. The exception to that might be if you are explicitly tracking various aspects of UI data in your Redux store as well, but even then the shape of the UI data and the shape of the domain data would likely be different."),(0,i.kt)("p",null,"A typical app's state shape might look roughly like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n    domainData1 : {},\n    domainData2 : {},\n    appState1 : {},\n    appState2 : {},\n    ui : {\n        uiState1 : {},\n        uiState2 : {},\n    }\n}\n")))}l.isMDXComponent=!0}}]);