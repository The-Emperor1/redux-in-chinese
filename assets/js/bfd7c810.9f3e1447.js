(self.webpackChunk=self.webpackChunk||[]).push([[2826],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s={id:"writing-tests",title:"Writing Tests",hide_title:!1},i={unversionedId:"recipes/writing-tests",id:"recipes/writing-tests",isDocsHomePage:!1,title:"Writing Tests",description:"Because most of the Redux code you write are functions, and many of them are pure, they are easy to test without mocking.",source:"@site/../docs/recipes/WritingTests.md",sourceDirName:"recipes",slug:"/recipes/writing-tests",permalink:"/redux-in-chinese/recipes/writing-tests",version:"current",frontMatter:{id:"writing-tests",title:"Writing Tests",hide_title:!1},sidebar:"docs",previous:{title:"Server Rendering",permalink:"/redux-in-chinese/recipes/server-rendering"},next:{title:"Computing Derived Data",permalink:"/redux-in-chinese/recipes/computing-derived-data"}},c=[{value:"Setting Up",id:"setting-up",children:[]},{value:"Action Creators",id:"action-creators",children:[]},{value:"Async Action Creators",id:"async-action-creators",children:[]},{value:"Reducers",id:"reducers",children:[]},{value:"Components",id:"components",children:[]},{value:"Connected Components",id:"connected-components",children:[]},{value:"Middleware",id:"middleware",children:[]},{value:"Glossary",id:"glossary",children:[]}],p={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Because most of the Redux code you write are functions, and many of them are pure, they are easy to test without mocking."),(0,o.kt)("h3",{id:"setting-up"},"Setting Up"),(0,o.kt)("p",null,"We recommend ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"Jest")," as the testing engine.\nNote that it runs in a Node environment, so you won't have access to the DOM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev jest\n")),(0,o.kt)("p",null,"To use it together with ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io"},"Babel"),", you will need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-jest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev babel-jest\n")),(0,o.kt)("p",null,"and configure it to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/tree/master/packages/babel-preset-env"},"babel-preset-env")," features in ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "presets": ["@babel/preset-env"]\n}\n')),(0,o.kt)("p",null,"Then, add this to ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...\n  "scripts": {\n    ...\n    "test": "jest",\n    "test:watch": "npm test -- --watch"\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"and run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," to run it once, or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test:watch")," to test on every file change."),(0,o.kt)("h3",{id:"action-creators"},"Action Creators"),(0,o.kt)("p",null,"In Redux, action creators are functions which return plain objects. When testing action creators, we want to test whether the correct action creator was called and also whether the right action was returned."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n")),(0,o.kt)("p",null,"can be tested like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as actions from '../../actions/TodoActions'\nimport * as types from '../../constants/ActionTypes'\n\ndescribe('actions', () => {\n  it('should create an action to add a todo', () => {\n    const text = 'Finish docs'\n    const expectedAction = {\n      type: types.ADD_TODO,\n      text\n    }\n    expect(actions.addTodo(text)).toEqual(expectedAction)\n  })\n})\n")),(0,o.kt)("h3",{id:"async-action-creators"},"Async Action Creators"),(0,o.kt)("p",null,"For async action creators using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"Redux Thunk")," or other middleware, it's best to completely mock the Redux store for tests. You can apply the middleware to a mock store using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arnaudbenard/redux-mock-store"},"redux-mock-store"),". You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://www.wheresrhys.co.uk/fetch-mock/"},"fetch-mock")," to mock the HTTP requests."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'cross-fetch/polyfill'\n\nfunction fetchTodosRequest() {\n  return {\n    type: FETCH_TODOS_REQUEST\n  }\n}\n\nfunction fetchTodosSuccess(body) {\n  return {\n    type: FETCH_TODOS_SUCCESS,\n    body\n  }\n}\n\nfunction fetchTodosFailure(ex) {\n  return {\n    type: FETCH_TODOS_FAILURE,\n    ex\n  }\n}\n\nexport function fetchTodos() {\n  return dispatch => {\n    dispatch(fetchTodosRequest())\n    return fetch('http://example.com/todos')\n      .then(res => res.json())\n      .then(body => dispatch(fetchTodosSuccess(body)))\n      .catch(ex => dispatch(fetchTodosFailure(ex)))\n  }\n}\n")),(0,o.kt)("p",null,"can be tested like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import configureMockStore from 'redux-mock-store'\nimport thunk from 'redux-thunk'\nimport * as actions from '../../actions/TodoActions'\nimport * as types from '../../constants/ActionTypes'\nimport fetchMock from 'fetch-mock'\nimport expect from 'expect' // You can use any testing library\n\nconst middlewares = [thunk]\nconst mockStore = configureMockStore(middlewares)\n\ndescribe('async actions', () => {\n  afterEach(() => {\n    fetchMock.restore()\n  })\n\n  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {\n    fetchMock.getOnce('/todos', {\n      body: { todos: ['do something'] },\n      headers: { 'content-type': 'application/json' }\n    })\n\n    const expectedActions = [\n      { type: types.FETCH_TODOS_REQUEST },\n      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }\n    ]\n    const store = mockStore({ todos: [] })\n\n    return store.dispatch(actions.fetchTodos()).then(() => {\n      // return of async actions\n      expect(store.getActions()).toEqual(expectedActions)\n    })\n  })\n})\n")),(0,o.kt)("h3",{id:"reducers"},"Reducers"),(0,o.kt)("p",null,"A reducer should return the new state after applying the action to the previous state, and that's the behavior tested below."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ADD_TODO } from '../constants/ActionTypes'\n\nconst initialState = [\n  {\n    text: 'Use Redux',\n    completed: false,\n    id: 0\n  }\n]\n\nexport default function todos(state = initialState, action) {\n  switch (action.type) {\n    case ADD_TODO:\n      return [\n        {\n          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,\n          completed: false,\n          text: action.text\n        },\n        ...state\n      ]\n\n    default:\n      return state\n  }\n}\n")),(0,o.kt)("p",null,"can be tested like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import reducer from '../../structuring-reducers/todos'\nimport * as types from '../../constants/ActionTypes'\n\ndescribe('todos reducer', () => {\n  it('should return the initial state', () => {\n    expect(reducer(undefined, {})).toEqual([\n      {\n        text: 'Use Redux',\n        completed: false,\n        id: 0\n      }\n    ])\n  })\n\n  it('should handle ADD_TODO', () => {\n    expect(\n      reducer([], {\n        type: types.ADD_TODO,\n        text: 'Run the tests'\n      })\n    ).toEqual([\n      {\n        text: 'Run the tests',\n        completed: false,\n        id: 0\n      }\n    ])\n\n    expect(\n      reducer(\n        [\n          {\n            text: 'Use Redux',\n            completed: false,\n            id: 0\n          }\n        ],\n        {\n          type: types.ADD_TODO,\n          text: 'Run the tests'\n        }\n      )\n    ).toEqual([\n      {\n        text: 'Run the tests',\n        completed: false,\n        id: 1\n      },\n      {\n        text: 'Use Redux',\n        completed: false,\n        id: 0\n      }\n    ])\n  })\n})\n")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("p",null,"A nice thing about React components is that they are usually small and only rely on their props. That makes them easy to test."),(0,o.kt)("p",null,"First, we will install ",(0,o.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"React Testing Library"),". React Testing Library is a simple and complete React DOM testing utilities that encourage good testing practices. It uses react-dom's ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function and ",(0,o.kt)("inlineCode",{parentName:"p"},"act")," from react-dom/tests-utils."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @testing-library/react\n")),(0,o.kt)("p",null,"If you are using jest as recommended above, we also recommend installing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"jest-dom")," as it provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain. jest-dom is being used in the examples below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @testing-library/jest-dom\n")),(0,o.kt)("p",null,"To test the components, we ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," them into the DOM and pass stubbed callbacks as props, then we assert whether the callbacks were called when expected."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport PropTypes from 'prop-types'\nimport TodoTextInput from './TodoTextInput'\n\nconst Header = ({ addTodo }) => {\n  const handleSave = text => {\n    if (text.length !== 0) {\n      addTodo(text)\n    }\n  }\n\n  return (\n    <header className=\"header\">\n      <h1>todos</h1>\n      <TodoTextInput\n        newTodo={true}\n        onSave={handleSave}\n        placeholder=\"What needs to be done?\"\n      />\n    </header>\n  )\n}\n\nHeader.propTypes = {\n  addTodo: PropTypes.func.isRequired\n}\n\nexport default Header\n")),(0,o.kt)("p",null,"can be tested like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render, fireEvent, screen } from '@testing-library/react'\nimport Header from '../../components/Header'\n\nit('should not call addTodo if length of text is 0', () => {\n  const mockAddTodo = jest.fn()\n  render(<Header addTodo={mockAddTodo} />)\n\n  fireEvent.change(screen.getByPlaceholderText(/what needs to be done/i), {\n    target: { value: '' }\n  })\n\n  expect(mockAddTodo).toHaveBeenCalledTimes(0)\n})\n\nit('should call addTodo if length of text is greater than 0', () => {\n  const mockAddTodo = jest.fn()\n  render(<Header addTodo={mockAddTodo} />)\n\n  fireEvent.change(screen.getByPlaceholderText(/what needs to be done/i), {\n    target: { value: 'Use Redux' }\n  })\n\n  expect(mockAddTodo).toHaveBeenCalledTimes(1)\n})\n")),(0,o.kt)("h3",{id:"connected-components"},"Connected Components"),(0,o.kt)("p",null,"If you use a library like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux"),", you might be using ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750"},"higher-order components")," like ",(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org/api/connect"},(0,o.kt)("inlineCode",{parentName:"a"},"connect()")),". This lets you inject Redux state into a regular React component."),(0,o.kt)("p",null,"Consider the following ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux'\n\nconst App = props => {\n  return <div>{props.user}</div>\n}\n\nconst mapStateToProps = state => {\n  return state\n}\n\nexport default connect(mapStateToProps)(App)\n")),(0,o.kt)("p",null,"To test it, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," option in React Testing Library's ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function and export our own ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function as explained in React Testing Library's ",(0,o.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/setup"},"setup docs"),"."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// test-utils.js\nimport React from 'react'\nimport { render as rtlRender } from '@testing-library/react'\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\n// Import your own reducer\nimport reducer from '../reducer'\n\nfunction render(\n  ui,\n  {\n    initialState,\n    store = createStore(reducer, initialState),\n    ...renderOptions\n  } = {}\n) {\n  function Wrapper({ children }) {\n    return <Provider store={store}>{children}</Provider>\n  }\n  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })\n}\n\n// re-export everything\nexport * from '@testing-library/react'\n// override render method\nexport { render }\n")),(0,o.kt)("p",null,"And our test can use our exported ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n// We're using our own custom render function and not RTL's render\n// our custom utils also re-export everything from RTL\n// so we can import fireEvent and screen here as well\nimport { render, fireEvent, screen } from '../../test-utils'\nimport App from '../../containers/App'\n\nit('Renders the connected app with initialState', () => {\n  render(<App />, { initialState: { user: 'Redux User' } })\n\n  expect(screen.getByText(/redux user/i)).toBeInTheDocument()\n})\n")),(0,o.kt)("h3",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"Middleware functions wrap behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," calls in Redux, so to test this modified behavior we need to mock the behavior of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," call."),(0,o.kt)("h4",{id:"example-4"},"Example"),(0,o.kt)("p",null,"First, we'll need a middleware function. This is similar to the real ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk/blob/master/src/index.js"},"redux-thunk"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const thunk =\n  ({ dispatch, getState }) =>\n  next =>\n  action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState)\n    }\n\n    return next(action)\n  }\n")),(0,o.kt)("p",null,"We need to create a fake ",(0,o.kt)("inlineCode",{parentName:"p"},"getState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," functions. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn()")," to create stubs, but with other test frameworks you would likely use ",(0,o.kt)("a",{parentName:"p",href:"https://sinonjs.org/"},"Sinon"),"."),(0,o.kt)("p",null,"The invoke function runs our middleware in the same way Redux does."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const create = () => {\n  const store = {\n    getState: jest.fn(() => ({})),\n    dispatch: jest.fn()\n  }\n  const next = jest.fn()\n\n  const invoke = action => thunk(store)(next)(action)\n\n  return { store, next, invoke }\n}\n")),(0,o.kt)("p",null,"We test that our middleware is calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"getState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," functions at the right time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"it('passes through non-function action', () => {\n  const { next, invoke } = create()\n  const action = { type: 'TEST' }\n  invoke(action)\n  expect(next).toHaveBeenCalledWith(action)\n})\n\nit('calls the function', () => {\n  const { invoke } = create()\n  const fn = jest.fn()\n  invoke(fn)\n  expect(fn).toHaveBeenCalled()\n})\n\nit('passes dispatch and getState', () => {\n  const { store, invoke } = create()\n  invoke((dispatch, getState) => {\n    dispatch('TEST DISPATCH')\n    getState()\n  })\n  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')\n  expect(store.getState).toHaveBeenCalled()\n})\n")),(0,o.kt)("p",null,"In some cases, you will need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function to use different mock implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"getState")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),"."),(0,o.kt)("h3",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"React Testing Library"),': React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is: "The more your tests resemble the way your software is used, the more confidence they can give you."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-utils.html"},"React Test Utils"),": ReactTestUtils makes it easy to test React components in the testing framework of your choice. React Testing Library uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"act")," function exported by React Test Utils."))))}l.isMDXComponent=!0}}]);