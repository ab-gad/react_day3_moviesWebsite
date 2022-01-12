import axios from "axios"

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

/*
 * ______________________MOVIES FOR REDUX THUNCK________________________
 */

export const getPopular = () => (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1c61f7854caf371b34a23ef611f0efed')
    .then(res=>res.data)
    .then(result => dispatch({
        type:'GET_POPULAR',
        payload: result.results
        })
    )
    .catch ((err) => console.log("get popular err",err)) 
}

export const getTrend = () => (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=1c61f7854caf371b34a23ef611f0efed')
    .then(res => res.data)
    .then(result => dispatch ({
        type : 'GET_TREND',
        payload : result.results
        })    
    )
}

export const getGenre = () => (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1c61f7854caf371b34a23ef611f0efed')
    .then(res=>res.data)
    .then(result=> dispatch ({
        type: 'GET_GENRE',
        payload: result.genres
    }))
}