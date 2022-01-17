import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccordionItem from "../components/AccordionItem";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getPopular } from "../redux/action";
import { getTrend } from "../redux/action";
import { getGenre } from "../redux/action";
import { useContext } from "react";
import { langContext } from "../context/langContext";


function Home() {
    const {contextLang} = useContext(langContext);
    const moviesPopular = useSelector((state)=>state.movies.popular)
    const moviesTrend   = useSelector((state)=> state.movies.trend)
    const moviesGenre   = useSelector((state)=> state.movies.genre)

    const araTranslation = {
      title:"عالم الأفلام",
      more: "المزيد من الأفلام الأكثر انتشارا",
      occrdionTitle1:"الأكثر رواجا",
      occrdionTitle2:"أحدث الأفلام"
      
    }
    const enTranslation = {
        title:" Movies Word",
        more: "More Popular Movies",
        occrdionTitle1:"Most Popular Movies",
        occrdionTitle2:"Trending Movies"
    }

    const tanslation = contextLang === "EN" ? enTranslation : araTranslation


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPopular());
        dispatch(getTrend());
        dispatch(getGenre())
    },[])


    return (
      <>
        <Header title = {tanslation.title} />
        <div className="accordion pb-5" id="accordionExample">
            <AccordionItem
                favEdit="add"
                fromFav={false}
                movies = {moviesPopular} 
                moviesGenre = {moviesGenre}
                title={tanslation.occrdionTitle1}
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
               <Link className="btn btn-outline-primary" to="/movies/popular/1">{tanslation.more}</Link>
           </div>
            <AccordionItem
                favEdit="add" 
                fromFav={false}
                movies = {moviesTrend} 
                moviesGenre = {moviesGenre}
                title={tanslation.occrdionTitle2}
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