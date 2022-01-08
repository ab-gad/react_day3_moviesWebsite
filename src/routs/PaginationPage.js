import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import AccordionItem from "../components/AccordionItem";

function PaginationPage (props) {
    
    const {catigory} = props.match.params

    const [page, setPage]= useState(1);
    const [movies, setMovies] =useState([])

    function getMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1c61f7854caf371b34a23ef611f0efed&page=${page}`)
            .then(res=>res.data)
            .then(result=>{
                console.log("RESULT",result)
                setMovies(result.results)
                //console.log("state",moviesPopular)        
            })
    }


    useEffect(()=>{
        getMovies();
    },[page])

    return(
        <>
            <div className="accordion" id="accordionExample">
                <AccordionItem
                    favEdit="add"
                    fromFav={false}
                    movies = {movies} 
                    moviesGenre = {[]}
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
                <Pagination catigory={catigory} pageNum={page} setPage={setPage}/>
            </div>
        </>

    )

 }

 export default PaginationPage;