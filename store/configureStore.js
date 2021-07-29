import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

import { loadState } from "../utilities/storage";

export function configureStore() {
  const persistedState = loadState();
  return createStore(rootReducer, persistedState);
}
