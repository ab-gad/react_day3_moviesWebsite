import { createStore } from "redux";
import { setFavReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore (setFavReducer, composeWithDevTools())

export default store;