import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { authReducer } from "./Auth/reducer";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  auth: authReducer,
});

// export const store = createStore(rootReducer,applyMiddleware(thunk),
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const myCustomThunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    return typeof action === "function"
      ? action(dispatch, getState)
      : next(action);
  };

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log("wil dispatch", action, getState());
    const returnValue = next(action);
    console.log("state after dispatch", getState());
    return returnValue;
  };
};

export const store = createStore(
  rootReducer,
  applyMiddleware(myCustomThunk, logger)
);
