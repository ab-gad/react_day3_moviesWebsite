import axios from "axios";
import { useEffect, useState } from "react";
import AccordionItem from "../components/AccordionItem";

function Home() {
    const [moviesPopular, setMoviesPopular] = useState([])
    const [moviesGenre, setMoviesGenre] = useState([])

    function getPopularMovies(){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1c61f7854caf371b34a23ef611f0efed')
            .then(res=>res.data)
            .then(result=>{
                console.log("RESULT",result)
                setMoviesPopular(result.results)
                //console.log("state",moviesPopular)        
            })
    }

    function getConfigurations(){
        axios.get('https://api.themoviedb.org/3/configuration?api_key=1c61f7854caf371b34a23ef611f0efed')
            .then(res=>res.data)
            .then(result=>{
                console.log("CONF.",result)
                //console.log("state",moviesPopular)        
            })
    }

    function getMoviesGenre(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1c61f7854caf371b34a23ef611f0efed')
            .then(res=>res.data)
            .then(result=>{
                console.log("Genre.",result.genres)
                setMoviesGenre(result.genres)  
            })
    }

    
    //like ComponentDidMount
    useEffect(()=>{
        getPopularMovies();
        getConfigurations();
        getMoviesGenre();
    },[])

    console.log("state",moviesPopular, moviesGenre)

    return (
      <>
        <div className="accordion" id="accordionExample">
            <AccordionItem
                popularMovies = {moviesPopular} 
                moviesGenre = {moviesGenre}
                title="Most Popular Movies"
                hid = "headingOne"
                btnView = "" 
                ariaExpanded = "true"
                dataBsTarget="#collapseOne"
                ariaControls="collapseOne"
                divId="collapseOne"
                divView="show" // for the 1st only
                ariaLabelledby="headingOne"
            />
            {/* {<AccordionItem 
                title="Trending Movies"
                hId = "headingTwo"
                btnView = "collapsed" //or nothing for the first
                ariaExpanded ="false"  
                dataBsTarget="#collapseTwo"
                ariaControls="collapseTwo"
                divId="collapseTwo"
                divView="" // for the 1st only
                ariaLabelledby="headingTwo"
            />} */}
        </div>
      </>
    );
  }
  
export default Home;