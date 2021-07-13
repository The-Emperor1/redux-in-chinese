(self.webpackChunk=self.webpackChunk||[]).push([[933],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},542:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),s={id:"design-decisions",title:"Design Decisions",hide_title:!1},o={unversionedId:"faq/design-decisions",id:"faq/design-decisions",isDocsHomePage:!1,title:"Redux FAQ: Design Decisions",description:"Table of Contents",source:"@site/../docs/faq/DesignDecisions.md",sourceDirName:"faq",slug:"/faq/design-decisions",permalink:"/faq/design-decisions",version:"current",frontMatter:{id:"design-decisions",title:"Design Decisions",hide_title:!1},sidebar:"docs",previous:{title:"Redux FAQ: Performance",permalink:"/faq/performance"},next:{title:"Redux FAQ: React Redux",permalink:"/faq/react-redux"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Design Decisions",id:"design-decisions",children:[{value:"Why doesn&#39;t Redux pass the state and action to subscribers?",id:"why-doesnt-redux-pass-the-state-and-action-to-subscribers",children:[]},{value:"Why doesn&#39;t Redux support using classes for actions and reducers?",id:"why-doesnt-redux-support-using-classes-for-actions-and-reducers",children:[]},{value:"Why does the middleware signature use currying?",id:"why-does-the-middleware-signature-use-currying",children:[]},{value:"Why does <code>applyMiddleware</code> use a closure for <code>dispatch</code>?",id:"why-does-applymiddleware-use-a-closure-for-dispatch",children:[]},{value:"Why doesn&#39;t <code>combineReducers</code> include a third argument with the entire state when it calls each reducer?",id:"why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer",children:[]},{value:"Why doesn&#39;t <code>mapDispatchToProps</code> allow use of return values from <code>getState()</code> or <code>mapStateToProps()</code>?",id:"why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops",children:[]}]}],c={toc:l};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-doesnt-redux-pass-the-state-and-action-to-subscribers"},"Why doesn't Redux pass the state and action to subscribers?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-doesnt-redux-support-using-classes-for-actions-and-reducers"},"Why doesn't Redux support using classes for actions and reducers?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-does-the-middleware-signature-use-currying"},"Why does the middleware signature use currying?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-does-applymiddleware-use-a-closure-for-dispatch"},"Why does applyMiddleware use a closure for dispatch?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer"},"Why doesn't ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")," include a third argument with the entire state when it calls each reducer?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops"},"Why doesn't mapDispatchToProps allow use of return values from ",(0,i.kt)("inlineCode",{parentName:"a"},"getState()")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"mapStateToProps()"),"?"))),(0,i.kt)("h2",{id:"design-decisions"},"Design Decisions"),(0,i.kt)("h3",{id:"why-doesnt-redux-pass-the-state-and-action-to-subscribers"},"Why doesn't Redux pass the state and action to subscribers?"),(0,i.kt)("p",null,"Subscribers are intended to respond to the state value itself, not the action. Updates to the state are processed synchronously, but notifications to subscribers can be batched or debounced, meaning that subscribers are not always notified with every action. This is a common ",(0,i.kt)("a",{parentName:"p",href:"/faq/performance#performance-update-events"},"performance optimization")," to avoid repeated re-rendering."),(0,i.kt)("p",null,"Batching or debouncing is possible by using enhancers to override ",(0,i.kt)("inlineCode",{parentName:"p"},"store.dispatch")," to change the way that subscribers are notified. Also, there are libraries that change Redux to process actions in batches to optimize performance and avoid repeated re-rendering:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/manaflair/redux-batch"},"redux-batch")," allows passing an array of actions to ",(0,i.kt)("inlineCode",{parentName:"li"},"store.dispatch()")," with only one notification,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tappleby/redux-batched-subscribe"},"redux-batched-subscribe")," allows batching of subscribe notifications that occur as a result of dispatches.")),(0,i.kt)("p",null,"The intended guarantee is that Redux eventually calls all subscribers with the most recent state available, but not that it always calls each subscriber for each action. The store state is available in the subscriber simply by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"store.getState()"),". The action cannot be made available in the subscribers without breaking the way that actions might be batched."),(0,i.kt)("p",null,"A potential use-case for using the action inside a subscriber -- which is an unsupported feature -- is to ensure that a component only re-renders after certain kinds of actions. Instead, re-rendering should be controlled through:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate"},"shouldComponentUpdate")," lifecycle method"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/optimizing-performance.html#avoid-reconciliation"},"virtual DOM equality check (vDOMEq)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/optimizing-performance.html#examples"},"React.PureComponent")),(0,i.kt)("li",{parentName:"ol"},"Using React-Redux: use ",(0,i.kt)("a",{parentName:"li",href:"https://react-redux.js.org/api#connect"},"mapStateToProps")," to subscribe components to only the parts of the store that they need.")),(0,i.kt)("h4",{id:"further-information"},"Further Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Articles")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#performance-update-events"},"How can I reduce the number of store update events?"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/580"},"#580: Why doesn't Redux pass the state to subscribers?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/2214"},"#2214: Alternate Proof of Concept: Enhancer Overhaul -- more on debouncing"))),(0,i.kt)("h3",{id:"why-doesnt-redux-support-using-classes-for-actions-and-reducers"},"Why doesn't Redux support using classes for actions and reducers?"),(0,i.kt)("p",null,"The pattern of using functions, called action creators, to return action objects may seem counterintuitive to programmers with a lot of Object Oriented Programming experience, who would see this is a strong use-case for Classes and instances. Class instances for action objects and reducers are not supported because class instances make serialization and deserialization tricky. Deserialization methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.parse(string)")," will return a plain old Javascript object rather than class instances."),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("a",{parentName:"p",href:"/faq/organizing-state#organizing-state-non-serializable"},"Store FAQ"),", if you are okay with things like persistence and time-travel debugging not working as intended, you are welcome to put non-serializable items into your Redux store."),(0,i.kt)("p",null,"Serialization enables the browser to store all actions that have been dispatched, as well as the previous store states, with much less memory. Rewinding and 'hot reloading' the store is central to the Redux developer experience and the function of Redux DevTools. This also enables deserialized actions to be stored on the server and re-serialized in the browser in the case of server-side rendering with Redux."),(0,i.kt)("h4",{id:"further-information-1"},"Further Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Articles")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/organizing-state#organizing-state-non-serializable"},"Can I put functions, promises, or other non-serializable items in my store state?"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1171#issuecomment-196819727"},"#1171: Why doesn't Redux use classes for actions and reducers?"))),(0,i.kt)("h3",{id:"why-does-the-middleware-signature-use-currying"},"Why does the middleware signature use currying?"),(0,i.kt)("p",null,"Redux middleware are written using a triply-nested function structure that looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"const middleware = storeAPI => next => action => {}"),", rather than a single function that looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"const middleware = (storeAPI, next, action) => {}"),". There's a few reasons for this."),(0,i.kt)("p",null,'One is that "currying" functions is a standard functional programming technique, and Redux was explicitly intended to use functional programming principles in its design. Another is that currying functions creates closures where you can declare variables that exist for the lifetime of the middleware (which could be considered a functional equivalent to instance variables that exist for the lifetime of a class instance). Finally, it\'s simply the approach that was chosen when Redux was initially designed.'),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/issues/1744"},"curried function signature")," of declaring middleware is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/pull/784"},"deemed unnecessary")," by some, because both store and next are available when the applyMiddleware function is executed. This issue has been determined to not be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/issues/1744"},"worth introducing breaking changes"),", as there are now hundreds of middleware in the Redux ecosystem that rely on the existing middleware definition."),(0,i.kt)("h4",{id:"further-information-2"},"Further Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why does the middleware signature use currying?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Prior discussions: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/55"},"#55"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/534"},"#534"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/784"},"#784"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/922"},"#922"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1744"},"#1744")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/09/presentation-might-need-redux-ecosystem/"},"React Boston 2017: You Might Need Redux (And Its Ecosystem)"))))),(0,i.kt)("h3",{id:"why-does-applymiddleware-use-a-closure-for-dispatch"},"Why does ",(0,i.kt)("inlineCode",{parentName:"h3"},"applyMiddleware")," use a closure for ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispatch"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," takes the existing dispatch from the store and closes over it to create the initial chain of middlewares that have been invoked with an object that exposes the getState and dispatch functions, which enables middlewares that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/redux/pull/1592"},"rely on dispatch during initialization")," to run."),(0,i.kt)("h4",{id:"further-information-3"},"Further Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why does applyMiddleware use a closure for dispatch?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/1592"},"#1592")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/2097"},"#2097"))))),(0,i.kt)("h3",{id:"why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer"},"Why doesn't ",(0,i.kt)("inlineCode",{parentName:"h3"},"combineReducers")," include a third argument with the entire state when it calls each reducer?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," is opinionated to encourage splitting reducer logic by domain. As stated in ",(0,i.kt)("a",{parentName:"p",href:"/recipes/structuring-reducers/beyond-combinereducers"},"Beyond ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")),",",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," is deliberately limited to handle a single common use case: updating a state tree that is a plain Javascript object by delegating the work of updating each slice of state to a specific slice reducer."),(0,i.kt)("p",null,"It's not immediately obvious what a potential third argument to each reducer should be: the entire state tree, some callback function, some other part of the state tree, etc. If ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," doesn't fit your use case, consider using libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ryo33/combine-section-reducers"},"combineSectionReducers")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acdlite/reduce-reducers"},"reduceReducers")," for other options with deeply nested reducers and reducers that require access to the global state."),(0,i.kt)("p",null,"If none of the published utilities solve your use case, you can always write a function yourself that does just exactly what you need."),(0,i.kt)("h4",{id:"further-information-4"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Articles")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/structuring-reducers/beyond-combinereducers"},"Beyond ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/1768"},"#1768 Allow reducers to consult global state"))),(0,i.kt)("h3",{id:"why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops"},"Why doesn't ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," allow use of return values from ",(0,i.kt)("inlineCode",{parentName:"h3"},"getState()")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapStateToProps()"),"?"),(0,i.kt)("p",null,"There have been requests to use either the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," or the return value of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapState")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatch"),", so that when functions are declared inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatch"),", they can close over the latest returned values from the store."),(0,i.kt)("p",null,"This approach is not supported in ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatch")," because it would mean also calling ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatch")," every time the store is updated. This would cause the re-creation of functions with every state update, thus adding a lot of performance overhead."),(0,i.kt)("p",null,"The preferred way to handle this use-case--needing to alter props based on the current state and mapDispatchToProps functions--is to work from mergeProps, the third argument to the connect function. If specified, it is passed the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps()"),", and the container component's props. The plain object returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"mergeProps")," will be passed as props to the wrapped component."),(0,i.kt)("h4",{id:"further-information-5"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/react-redux/issues/237"},"#237 Why doesn't mapDispatchToProps allow use of return values from getState() or mapStateToProps()?"))))}u.isMDXComponent=!0}}]);