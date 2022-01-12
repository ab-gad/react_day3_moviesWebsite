import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccordionItem from "../components/AccordionItem";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getPopular } from "../redux/action";
import { getTrend } from "../redux/action";
import { getGenre } from "../redux/action";

function Home() {
    //const [moviesGenre, setMoviesGenre] = useState([])

    const moviesPopular = useSelector((state)=>state.movies.popular)
    const moviesTrend   = useSelector((state)=> state.movies.trend)
    const moviesGenre   = useSelector((state)=> state.movies.genre)

    const dispatch = useDispatch()

    // function getConfigurations(){
    //     axios.get('https://api.themoviedb.org/3/configuration?api_key=1c61f7854caf371b34a23ef611f0efed')
    //         .then(res=>res.data)
    //         .then(result=>{
    //             //console.log("CONF.",result)
    //             //console.log("state",moviesPopular)        
    //         })
    // }
    //like ComponentDidMount

    useEffect(()=>{
        //getConfigurations();
        //getMoviesGenre();
        dispatch(getPopular());
        dispatch(getTrend());
        dispatch(getGenre())

    },[])


    return (
      <>
        <Header title = "Movies World" />
        <div className="accordion pb-5" id="accordionExample">
            <AccordionItem
                favEdit="add"
                fromFav={false}
                movies = {moviesPopular} 
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
           <div className="mb-4 text-center">
               <Link className="btn btn-outline-primary" to="/movies/popular/1">More Popular Movies</Link>
           </div>
            <AccordionItem
                favEdit="add" 
                fromFav={false}
                movies = {moviesTrend} 
                moviesGenre = {moviesGenre}
                title="Trending Movies"
                hId = "headingTwo"
                btnView = "collapsed" //or nothing for the first
                ariaExpanded ="false"  
                dataBsTarget="#collapseTwo"
                ariaControls="collapseTwo"
                divId="collapseTwo"
                divView="" // for the 1st only
                ariaLabelledby="headingTwo"
            />
        </div>
      </>
    );
  }
  
export default Home;