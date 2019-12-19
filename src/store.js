import reduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";

import rootReducer from "./rootReducer";

// TODO: Move this configuration to its own file.
const persistConfig = {
  key: "deviget-code-challenge",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
