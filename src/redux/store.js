import { createStore } from "redux";
import allReducers from "./allReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore (allReducers, composeWithDevTools())

export default store;