import "../css/card.css"
import { Link } from "react-router-dom";

function Card(props) {

    const {movie, finalGenra} = props
    const {id, poster_path, title, vote_average, vote_count, release_date} = movie

    /**
     * 
     * poster_sizes: (7) ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
     */

    return (
        <div className="col">
            <div className="card h-100 position-relative overflow-hidden">
                <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text small">{finalGenra.join(", ")}</p>
                </div>
                <div className="card-body position-absolute cardBody">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text small">{finalGenra.join(", ")}</p>
                    <p>Release date: {release_date}</p>
                    <p> Rating:  {vote_average} <small>({vote_count})</small></p>
                    <Link className="btn btn-outline-dark" to={`./movie/${id}`}>More</Link>
                </div>
            </div>
        </div>
    );
  }
  
export default Card;
  