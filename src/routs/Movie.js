import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";

function Movie(props) {
    const[movie, setMovie] = useState({})
    
    const {id} = props.match.params
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`)
        .then(res=>res.data)
            .then(result=>{
                console.log("AMOVIE",result)
                setMovie(result)       
            })
    },[])

    /**
     * backdrop_sizes: (4) ['w300', 'w780', 'w1280', 'original']
     */
    return (
      <>
        <header  
            className="py-5"
            style={{backgroundImage:`url(http://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`, backgroundSize:"cover"}}>
            <div className="overlay" style={{backgroundColor:"#ffffff82"}}>
                <h1 className="display-1 text-center fw-bold my-5">
                    {movie.title}
                </h1>
            </div>
        </header>
        <MovieDetails movie={movie}/>       
      </>
    );
  }
  
export default Movie;