import axios from "axios";

export const axiosInstance = axios.create (
    {baseURL: "https://api.themoviedb.org/3/movie/550?api_key=1c61f7854caf371b34a23ef611f0efed"}
)