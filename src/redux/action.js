export const resetFav = () => {
    return {
        type:"RESET_FAV",
    }
}


//payload == id
export const addFav = (payload) => {
    return {
        type:"ADD_FAV",
        payload
    }
}

export const rmFav = (payload) => {
    return {
        type:"RM_FAV",
        payload
    }
}