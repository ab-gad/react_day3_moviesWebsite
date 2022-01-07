import Card from "./Card";

function AccordionItem (props) {
    const{ 
        moviesGenre,
        movies,
        title,
        hId, 
        btnView, 
        ariaExpanded, 
        dataBsTarget, 
        ariaControls, 
        divId, 
        divView, 
        ariaLabelledby
    }=props

    return (
        <>
             <div className="accordion-item">
                <h2 className="accordion-header" id={hId}>
                    <button 
                        className= {`accordion-button ${btnView}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={dataBsTarget} 
                        aria-expanded={ariaExpanded} 
                        aria-controls={ariaControls}
                    >
                        {title}
                    </button>
                </h2>
                <div 
                    id={divId} 
                    className={`accordion-collapse collapse ${divView}`} 
                    aria-labelledby={ariaLabelledby} 
                    data-bs-parent="#accordionExample"
                >

                    <div className="accordion-body">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {movies.map((movie) => {

                                //getting names of movies ganra from the other arr 'moviesGenre' 
                                const finalGenra = []
                                movie.genre_ids.forEach((gid)=>{
                                    moviesGenre.forEach(genra => {
                                        (genra.id === gid) && finalGenra.push(genra.name)  
                                    });
                                })
                                return (
                                    <Card  
                                        key={movie.id} 
                                        movie={movie}
                                        finalGenra={finalGenra}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </>
    )
}

export default AccordionItem;