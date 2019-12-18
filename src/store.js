import reduxThunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
