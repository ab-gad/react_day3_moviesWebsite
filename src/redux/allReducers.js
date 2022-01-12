import { setLangReducer, setFavReducer } from "./reducer";
import { combineReducers } from "redux";

export default combineReducers ({
    fav: setFavReducer,
    lang: setLangReducer
})  