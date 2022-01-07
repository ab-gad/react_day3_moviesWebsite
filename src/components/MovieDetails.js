function MovieDetails(props) {

    const {
        budget,
        status,
        genres,
        homepage, 
        id,
        original_language,
        overview,
        popularity,
        release_date,
        tagline,
        vote_average,
        vote_count,
        poster_path,
        title
    } = props.movie
    
    return (
        
        <section className="my-5">
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{title}</h4>
                                <small><i>({tagline})</i></small>
                                <hr/>
                                <div>
                                    <ul>
                                        <li>Genres: {genres && genres.map(g=>g.name).join(", ")}</li>
                                        <hr/>
                                        <li><span className="badge bg-primary">{status}</span></li>    
                                        <li>Release Date: {release_date}</li>
                                        <li>Budget: {budget} $</li>
                                        <li>Lang: {original_language}</li>
                                        <hr/>
                                        <li>Popularity: {popularity}</li>
                                        <li>vote average: {vote_average}</li>
                                        <li>Vote countt: {vote_count}</li>
                                        <hr/>
                                        <li>
                                            Website: <br/> <a href={homepage}>{homepage}</a> 
                                        </li>
                                    </ul>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>
                        Overview
                    </h4>
                    <p>
                        {overview}
                    </p>    
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;