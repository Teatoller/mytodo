import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "./reducers";
import thunk from "redux-thunk";

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions'

const initialState = {};

const middleware = [thunk];

const store = createStore(
  todoApp,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// console.log("store....", store.getState()) // Log the initial state
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()

export default store;
