import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AccordionItem from "../components/AccordionItem";
import Header from "../components/Header";
import AddToFav from "../components/AddToFav";

function Favourites() {
    
    const fav = useSelector((state)=> state.fav.fav)
    console.log("fav", fav)

    const [movies, setMovies] = useState([])
    console.log("INtial",movies)

    //const [isMovLoading, setMovLoading]= useState(true)

    const allMovies = []
    const getfavMovies = () => {
        fav.forEach((id) => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1c61f7854caf371b34a23ef611f0efed`)
            .then(res=>res.data)
                .then(result=>{
                    console.log("AMOVIE",result)
                    
                    allMovies.push(result)
                    console.log("ALL",allMovies)

                    fav.indexOf(id) === fav.length - 1 && setMovies(allMovies)
                })
        })
    }
    
    useEffect (()=>{
        getfavMovies();
        fav.length===0 && setMovies([])
    },[fav])

    // useEffect(()=>{
        
    //     console.log("Loading",isMovLoading)
    //     console.log("ALL",allMovies)
    // },[isMovLoading])

    return(
        <>
            <Header title="My Favourite Movies"/>
            <div className="accordion pb-5" id="accordionExample">
                <AccordionItem
                    favEdit="rm"
                    fromFav={true}
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