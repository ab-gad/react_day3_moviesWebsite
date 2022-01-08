const INITIAL_STATE = {
    fav: [],
    wishList: [],
}

export const setFavReducer = (state = INITIAL_STATE, action) => {
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