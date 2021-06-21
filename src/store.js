import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { todos } from "./todos/reducers";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/lib/persistReducer";

const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistReducers = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistReducers);
