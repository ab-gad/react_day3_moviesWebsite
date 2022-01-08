import { useEffect, useState } from "react";
import axios from "axios";
import AccordionItem from "../components/AccordionItem";
import SearchInput from "../components/SearchInput"
import Header from "../components/Header";

function Search () {
    const[query, setQuery]=useState("")
    const[searchResult, setSearchResult]= useState([])

    function getResults(){
        const encodedQuery = encodeURI(query)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1c61f7854caf371b34a23ef611f0efed&language=en-US&query=${encodedQuery}`)
            .then(res=>res.data)
            .then(result=>{
                console.log("SE.RESULT",result)
                setSearchResult(result.results)
                //console.log("state",moviesPopular)        
            })
    }

    useEffect(()=>{
        getResults()   
    },[query])

    return (
        <>  
            <SearchInput setQuery={setQuery}/>
            <Header title="Search the best"/>       
            <AccordionItem
                favEdit="add"
                fromFav={false}
                movies = {searchResult} 
                moviesGenre = {[]}
                title="Search Results"
                hid = "headingOne"
                btnView = "" 
                ariaExpanded = "true"
                dataBsTarget="#collapseOne"
                ariaControls="collapseOne"
                divId="collapseOne"
                divView="show" // for the 1st only
                ariaLabelledby="headingOne"
            />
        </>

    )
}

export default Search;