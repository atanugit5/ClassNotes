import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { productReducer } from "./products/reducer";

// axios.defaults.baseURL = "http://localhost:8082";
// axios.defaults.headers.post["Content-Type"] = "application/json";

const rootReducer = combineReducers({
  ecomData: productReducer,
  auth:authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
