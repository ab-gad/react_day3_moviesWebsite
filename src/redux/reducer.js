/**
 * _______________________________________APP INITIAL STATE
 */

import { getTrend } from "./action"

const INITIAL_LANG = {
    lang:"EN"
}

const INITIAL_FAV = {
    fav: []
}

const INITIAL_MOVIES = {
    popular : [],
    trend   : [],
    genre   : []
}
/**
 * ________________________________________FAV REDUCER
 */
export const setFavReducer = (state = INITIAL_FAV, action) => {
    switch (action.type) {
        case "RESET_FAV":
            return {
                ...state,
                fav:[]
            }
        case "ADD_FAV":
            return {
                ...state,
                fav:[...state.fav, action.payload]
            }
        case "RM_FAV":
            return {
                ...state,
                fav:state.fav.filter( i=> i !== action.payload)
            }
        default:
            return state;
    }
} 

/**
 * ______________________________LANG REDUCER
 */

export const setLangReducer = (state = INITIAL_LANG, action) => {
    switch (action.type) {
        case "AR":
            return {
                lang:"AR"
            }
        case "EN":
            return {
                lang:"EN"
            }
            
        default:
            return state;
    }
}

/**
 * _______________ GET MOVIES REDUCER _ FOR DAY TASK
 */

export const setMoviesReducer = (state=INITIAL_MOVIES , action) => {
    switch (action.type) {
        case "GET_POPULAR":
            return {
                ...state,
                popular: action.payload
            }
        case "GET_TREND" :
            return {
                ...state,
                trend: action.payload
            }
        case 'GET_GENRE' : 
            return {
                ...state,
                genre: action.payload
            }
        default:
            return state;
    }
} 