// Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Reducers
import { mainReducer } from "./mainReducers";

// View dispatches, actions and states
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

// For view in devToolExtension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store with Middleware
const store = createStore(
  mainReducer,
  /*{ state: {data: false}  },*/
  composeEnhancers(
    applyMiddleware(
      // logger,
      thunk
    )
  )
);

export default store;
