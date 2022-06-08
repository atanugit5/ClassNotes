import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer
});
export const store = createStore(rootReducer);
