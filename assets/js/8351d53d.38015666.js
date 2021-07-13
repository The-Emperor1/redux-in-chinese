(self.webpackChunk=self.webpackChunk||[]).push([[5080],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4612:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={id:"prerequisite-concepts",title:"Prerequisite Concepts",description:"Structuring Reducers > Prerequisite Concepts: Key concepts to understand when using Redux",hide_title:!1},s={unversionedId:"recipes/structuring-reducers/prerequisite-concepts",id:"recipes/structuring-reducers/prerequisite-concepts",isDocsHomePage:!1,title:"Prerequisite Reducer Concepts",description:"Structuring Reducers > Prerequisite Concepts: Key concepts to understand when using Redux",source:"@site/../docs/recipes/structuring-reducers/PrerequisiteConcepts.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/prerequisite-concepts",permalink:"/recipes/structuring-reducers/prerequisite-concepts",version:"current",frontMatter:{id:"prerequisite-concepts",title:"Prerequisite Concepts",description:"Structuring Reducers > Prerequisite Concepts: Key concepts to understand when using Redux",hide_title:!1},sidebar:"docs",previous:{title:"Structuring Reducers",permalink:"/recipes/structuring-reducers/structuring-reducers"},next:{title:"Basic Reducer Structure and State Shape",permalink:"/recipes/structuring-reducers/basic-reducer-structure"}},l=[],u={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},'"Redux Fundamentals" Part 3: State, Actions, and Reducers'),", a Redux reducer function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Should have a signature of ",(0,i.kt)("inlineCode",{parentName:"li"},"(previousState, action) => newState"),", similar to the type of function you would pass to ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},(0,i.kt)("inlineCode",{parentName:"a"},"Array.prototype.reduce(reducer, ?initialValue)"))),(0,i.kt)("li",{parentName:"ul"},'Should be "pure", which means the reducer:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Does not ",(0,i.kt)("em",{parentName:"li"},"perform side effects")," (such as calling API's or modifying non-local objects or variables)."),(0,i.kt)("li",{parentName:"ul"},"Does not ",(0,i.kt)("em",{parentName:"li"},"call non-pure functions")," (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Date.now")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Math.random"),")."),(0,i.kt)("li",{parentName:"ul"},"Does not ",(0,i.kt)("em",{parentName:"li"},"mutate")," its arguments. If the reducer updates state, it should not ",(0,i.kt)("em",{parentName:"li"},"modify")," the ",(0,i.kt)("strong",{parentName:"li"},"existing")," state object in-place. Instead, it should generate a ",(0,i.kt)("strong",{parentName:"li"},"new")," object containing the necessary changes. The same approach should be used for any sub-objects within state that the reducer updates.")))),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"note-on-immutability-side-effects-and-mutation"},"Note on immutability, side effects, and mutation"),(0,i.kt)("p",{parentName:"blockquote"},"Mutation is discouraged because it generally breaks time-travel debugging, and React Redux's ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," function:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"For time traveling, the Redux DevTools expect that replaying recorded actions would output a state value, but not change anything else. ",(0,i.kt)("strong",{parentName:"li"},"Side effects like mutation or asynchronous behavior will cause time travel to alter behavior between steps, breaking the application"),"."),(0,i.kt)("li",{parentName:"ul"},"For React Redux, ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," checks to see if the props returned from a ",(0,i.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," function have changed in order to determine if a component needs to update. To improve performance, ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," takes some shortcuts that rely on the state being immutable, and uses shallow reference equality checks to detect changes. This means that ",(0,i.kt)("strong",{parentName:"li"},"changes made to objects and arrays by direct mutation will not be detected, and components will not re-render"),".")),(0,i.kt)("p",{parentName:"blockquote"},"Other side effects like generating unique IDs or timestamps in a reducer also make the code unpredictable and harder to debug and test.")),(0,i.kt)("p",null,"Because of these rules, it's important that the following core concepts are fully understood before moving on to other specific techniques for organizing Redux reducers:"),(0,i.kt)("h4",{id:"redux-reducer-basics"},"Redux Reducer Basics"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key concepts"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thinking in terms of state and state shape"),(0,i.kt)("li",{parentName:"ul"},"Delegating update responsibility by slice of state (",(0,i.kt)("em",{parentName:"li"},"reducer composition"),")"),(0,i.kt)("li",{parentName:"ul"},"Higher order reducers"),(0,i.kt)("li",{parentName:"ul"},"Defining reducer initial state")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reading list"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},'"Redux Fundamentals" Part 3: State, Actions, and Reducers')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/reducing-boilerplate"},"Redux Docs: Reducing Boilerplate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/implementing-undo-history"},"Redux Docs: Implementing Undo History")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/combinereducers"},"Redux Docs: ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://slides.com/omnidan/hor#/"},"The Power of Higher-Order Reducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer"},"Stack Overflow: Store initial state and ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer"},"Stack Overflow: State key names and ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")))),(0,i.kt)("h4",{id:"pure-functions-and-side-effects"},"Pure Functions and Side Effects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Concepts"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Side effects"),(0,i.kt)("li",{parentName:"ul"},"Pure functions"),(0,i.kt)("li",{parentName:"ul"},"How to think in terms of combining functions")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reading List"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/"},"The Little Idea of Functional Programming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://c2fo.io/c2fo/programming/2016/05/11/understanding-programmatic-side-effects/"},"Understanding Programmatic Side-Effects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/e-5obm1G_FY"},"Learning Functional Programming in Javascript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/"},"An Introduction to Reasonably Pure Functional Programming"))),(0,i.kt)("h4",{id:"immutable-data-management"},"Immutable Data Management"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Concepts"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutability vs immutability"),(0,i.kt)("li",{parentName:"ul"},"Immutably updating objects and arrays safely"),(0,i.kt)("li",{parentName:"ul"},"Avoiding functions and statements that mutate state")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reading List"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/"},"Pros and Cons of Using Immutability With React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/"},"Immutable Data using ES6 and Beyond")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ryanfunduk.com/articles/immutable-data-from-scratch/"},"Immutable Data from Scratch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/recipes/using-object-spread-operator"},"Redux Docs: Using the Object Spread Operator"))),(0,i.kt)("h4",{id:"normalizing-data"},"Normalizing Data"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Concepts"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database structure and organization"),(0,i.kt)("li",{parentName:"ul"},"Splitting relational/nested data up into separate tables"),(0,i.kt)("li",{parentName:"ul"},"Storing a single definition for a given item"),(0,i.kt)("li",{parentName:"ul"},"Referring to items by IDs"),(0,i.kt)("li",{parentName:"ul"},"Using objects keyed by item IDs as lookup tables, and arrays of IDs to track ordering"),(0,i.kt)("li",{parentName:"ul"},"Associating items in relationships")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reading List"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/"},"Database Normalization in Simple English")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/javascript-redux-normalizing-the-state-shape"},"Idiomatic Redux: Normalizing the State Shape")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paularmstrong/normalizr"},"Normalizr Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html"},"Redux Without Profanity: Normalizr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f"},"Querying a Redux Store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Associative_entity"},"Wikipedia: Associative Entity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=manymany.php"},"Database Design: Many-to-Many")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@talkol/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a"},"Avoiding Accidental Complexity When Structuring Your App State"))))}c.isMDXComponent=!0}}]);