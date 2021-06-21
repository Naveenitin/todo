import { createStore, combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { isLoading, todos } from "./todos/reducers";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/lib/persistReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  todos,
  isLoading,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistReducers = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistReducers, composeWithDevTools(applyMiddleware(thunk)));
