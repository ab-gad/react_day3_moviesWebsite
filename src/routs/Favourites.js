import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AccordionItem from "../components/AccordionItem";
import Header from "../components/Header";
import AddToFav from "../components/AddToFav";

function Favourites() {
    
    const fav = useSelector((state)=> state.fav)
    console.log("fav", fav)

    const [movies, setMovies] = useState([])
    console.log("INtial",movies)

    const allMovies = []
    
    useEffect (()=>{
        fav.length===0 ? setMovies([]) : setMovies(fav)
    },[fav])

    return(
        <>
            <Header title="My Favourite Movies"/>
            <div className="accordion pb-5" id="accordionExample">
                <AccordionItem
                    favEdit="rm"
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
            </div>
            <div className="text-center mb-5 py-3">
                <AddToFav type="reset"/>
            </div>
        </>
    )
}

export default Favourites;