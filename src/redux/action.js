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

/**
 * ________________________ LANG________________________
 */

export const arabic = () => {
    return {
        type: "AR"
    }
}

export const english = () => {
    return {
        type: "EN"
    }
}