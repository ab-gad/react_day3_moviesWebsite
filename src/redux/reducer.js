/**
 * _______________________________________APP INITIAL STATE
 */

const INITIAL_LANG = {
    lang:"EN"
}

const INITIAL_FAV = {
    fav: []
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