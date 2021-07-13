(self.webpackChunk=self.webpackChunk||[]).push([[2221],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=r,h=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6731:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={id:"troubleshooting",title:"Troubleshooting",hide_title:!1},s={unversionedId:"recipes/troubleshooting",id:"recipes/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This is a place to share common problems and solutions to them.",source:"@site/../docs/recipes/Troubleshooting.md",sourceDirName:"recipes",slug:"/recipes/troubleshooting",permalink:"/recipes/troubleshooting",version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting",hide_title:!1},sidebar:"docs",previous:{title:"Code Splitting",permalink:"/recipes/code-splitting"},next:{title:"Structuring Reducers",permalink:"/recipes/structuring-reducers/structuring-reducers"}},p=[{value:"Nothing happens when I dispatch an action",id:"nothing-happens-when-i-dispatch-an-action",children:[]},{value:"Something else doesn&#39;t work",id:"something-else-doesnt-work",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a place to share common problems and solutions to them.\nThe examples use React, but you should still find them useful if you use something else."),(0,a.kt)("h3",{id:"nothing-happens-when-i-dispatch-an-action"},"Nothing happens when I dispatch an action"),(0,a.kt)("p",null,"Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this."),(0,a.kt)("h4",{id:"never-mutate-reducer-arguments"},"Never mutate reducer arguments"),(0,a.kt)("p",null,"It is tempting to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," passed to you by Redux. Don't do this!"),(0,a.kt)("p",null,"Redux assumes that you never mutate the objects it gives to you in the reducer. ",(0,a.kt)("strong",{parentName:"p"},"Every single time, you must return the new state object.")," Even if you don't use a library like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"Immer"),", you need to completely avoid mutation."),(0,a.kt)("p",null,"Immutability is what lets ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux")," efficiently subscribe to fine-grained updates of your state. It also enables great developer experience features such as time travel with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"redux-devtools"),"."),(0,a.kt)("p",null,"For example, a reducer like this is wrong because it mutates the state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      // Wrong! This mutates state\n      state.push({\n        text: action.text,\n        completed: false\n      })\n      return state\n    case 'COMPLETE_TODO':\n      // Wrong! This mutates state[action.index].\n      state[action.index].completed = true\n      return state\n    default:\n      return state\n  }\n}\n")),(0,a.kt)("p",null,"It needs to be rewritten like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      // Return a new array\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case 'COMPLETE_TODO':\n      // Return a new array\n      return state.map((todo, index) => {\n        if (index === action.index) {\n          // Copy the object before mutating\n          return Object.assign({}, todo, {\n            completed: true\n          })\n        }\n        return todo\n      })\n    default:\n      return state\n  }\n}\n")),(0,a.kt)("p",null,"It's more code, but it's exactly what makes Redux predictable and efficient. If you want to have less code, you can use a helper like ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/update.html"},(0,a.kt)("inlineCode",{parentName:"a"},"React.addons.update"))," to write immutable transformations with a terse syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Before:\nreturn state.map((todo, index) => {\n  if (index === action.index) {\n    return Object.assign({}, todo, {\n      completed: true\n    })\n  }\n  return todo\n})\n\n// After\nreturn update(state, {\n  [action.index]: {\n    completed: {\n      $set: true\n    }\n  }\n})\n")),(0,a.kt)("p",null,"Finally, to update objects, you'll need something like ",(0,a.kt)("inlineCode",{parentName:"p"},"_.extend")," from Underscore, or better, an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,a.kt)("inlineCode",{parentName:"a"},"Object.assign"))," polyfill."),(0,a.kt)("p",null,"Make sure that you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign")," correctly. For example, instead of returning something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign(state, newData)")," from your reducers, return ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign({}, state, newData)"),". This way you don't override the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,a.kt)("p",null,"You can also enable the ",(0,a.kt)("a",{parentName:"p",href:"/recipes/using-object-spread-operator"},"object spread operator proposal")," for a more succinct syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Before:\nreturn state.map((todo, index) => {\n  if (index === action.index) {\n    return Object.assign({}, todo, {\n      completed: true\n    })\n  }\n  return todo\n})\n\n// After:\nreturn state.map((todo, index) => {\n  if (index === action.index) {\n    return { ...todo, completed: true }\n  }\n  return todo\n})\n")),(0,a.kt)("p",null,"Note that experimental language features are subject to change."),(0,a.kt)("p",null,"Also keep an eye out for nested state objects that need to be deeply copied. Both ",(0,a.kt)("inlineCode",{parentName:"p"},"_.extend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign")," make a shallow copy of the state. See ",(0,a.kt)("a",{parentName:"p",href:"/recipes/structuring-reducers/immutable-update-patterns#updating-nested-objects"},"Updating Nested Objects")," for suggestions on how to deal with nested state objects."),(0,a.kt)("h4",{id:"dont-forget-to-call-dispatchaction"},"Don't forget to call ",(0,a.kt)("a",{parentName:"h4",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch(action)"))),(0,a.kt)("p",null,"If you define an action creator, calling it will ",(0,a.kt)("em",{parentName:"p"},"not")," automatically dispatch the action. For example, this code will do nothing:"),(0,a.kt)("h4",{id:"todoactionsjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"TodoActions.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return { type: 'ADD_TODO', text }\n}\n")),(0,a.kt)("h4",{id:"addtodojs"},(0,a.kt)("inlineCode",{parentName:"h4"},"AddTodo.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport { addTodo } from './TodoActions'\n\nclass AddTodo extends Component {\n  handleClick() {\n    // Won't work!\n    addTodo('Fix the issue')\n  }\n\n  render() {\n    return <button onClick={() => this.handleClick()}>Add</button>\n  }\n}\n")),(0,a.kt)("p",null,"It doesn't work because your action creator is just a function that ",(0,a.kt)("em",{parentName:"p"},"returns")," an action. It is up to you to actually dispatch it. We can't bind your action creators to a particular Store instance during the definition because apps that render on the server need a separate Redux store for every request."),(0,a.kt)("p",null,"The fix is to call ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch()"))," method on the ",(0,a.kt)("a",{parentName:"p",href:"/api/store"},"store")," instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleClick() {\n  // Works! (but you need to grab store somehow)\n  store.dispatch(addTodo('Fix the issue'))\n}\n")),(0,a.kt)("p",null,"If you're somewhere deep in the component hierarchy, it is cumbersome to pass the store down manually. This is why ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux")," lets you use a ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750"},"higher-order component")," that will, apart from subscribing you to a Redux store, inject ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," into your component's props."),(0,a.kt)("p",null,"The fixed code looks like this:"),(0,a.kt)("h4",{id:"addtodojs-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"AddTodo.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { addTodo } from './TodoActions'\n\nclass AddTodo extends Component {\n  handleClick() {\n    // Works!\n    this.props.dispatch(addTodo('Fix the issue'))\n  }\n\n  render() {\n    return <button onClick={() => this.handleClick()}>Add</button>\n  }\n}\n\n// In addition to the state, `connect` puts `dispatch` in our props.\nexport default connect()(AddTodo)\n")),(0,a.kt)("p",null,"You can then pass ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," down to other components manually, if you want to."),(0,a.kt)("h4",{id:"make-sure-mapstatetoprops-is-correct"},"Make sure mapStateToProps is correct"),(0,a.kt)("p",null,"It's possible you're correctly dispatching an action and applying your reducer but the corresponding state is not being correctly translated into props."),(0,a.kt)("h2",{id:"something-else-doesnt-work"},"Something else doesn't work"),(0,a.kt)("p",null,"Ask around on the ",(0,a.kt)("strong",{parentName:"p"},"#redux")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.reactiflux.com/"},"Reactiflux")," Discord channel, or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues"},"create an issue"),".\nIf you figure it out, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/edit/master/docs/recipes/Troubleshooting.md"},"edit this document")," as a courtesy to the next person having the same problem."))}u.isMDXComponent=!0}}]);