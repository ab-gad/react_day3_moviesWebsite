import { Link } from "react-router-dom";

function Pagination (props) {

    const {catigory, pageNum, setPage} = props
    console.log(props)


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><Link className="page-link" onClick={()=>{setPage(pageNum>1 ? pageNum-1 : 1)}} to={`/movies/${catigory}/${pageNum>1 ? pageNum-1 : 1}`}>Previous</Link></li>
                <li className={`page-item ${pageNum===1 ? "active" : ""}`}><Link className="page-link" onClick={()=>{setPage(1)}} to={`/movies/${catigory}/1`}>1</Link></li>
                <li className={`page-item ${pageNum===2 ? "active" : ""}`}><Link className="page-link" onClick={()=>{setPage(2)}} to={`/movies/${catigory}/2`}>2</Link></li>
                <li className={`page-item ${pageNum===3 ? "active" : ""}`}><Link className="page-link" onClick={()=>{setPage(3)}} to={`/movies/${catigory}/3`}>3</Link></li>
                <li className="page-item"><Link className="page-link" onClick={()=>{setPage(pageNum+1)}} to={`/movies/${catigory}/${pageNum+1}`}>Next</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination;

