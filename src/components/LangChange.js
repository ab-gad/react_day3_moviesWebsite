import { useContext } from "react";
import { langContext } from "../context/langContext";

function LangChange (){
    
    //object destructure and not array like useState >> mark the difference
    const {contextLang, setContextLang} = useContext(langContext);

    return(
        <button 
            className="btn btn-primary rounded"
            onClick={()=>{setContextLang(contextLang === "EN" ? "AR" : "EN")}}
        >
            {contextLang === "EN" ? "AR" : "EN"}
        </button>
    )
}

export default LangChange;