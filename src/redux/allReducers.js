import { setLangReducer, setFavReducer, setMoviesReducer } from "./reducer";
import { combineReducers } from "redux";

export default combineReducers ({
    fav: setFavReducer,
    lang: setLangReducer,
    movies: setMoviesReducer
})  