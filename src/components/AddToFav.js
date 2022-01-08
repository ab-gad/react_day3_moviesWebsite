import { useDispatch, useSelector } from "react-redux";
import { resetFav, rmFav, addFav } from "../redux/action";

function AddToFav (props){
    const {id, type} = props

    const fav = useSelector((state)=> state.fav)

    console.log ("FROM FAV", fav)

    const dispatch = useDispatch();

    const addtofavHandler = (id) => {
        fav.indexOf(id)=== -1 && dispatch(addFav(id))
    }


    return (
        <>
            {type==="add" && <button onClick={()=> addtofavHandler(id)} className="btn btn-success">Add to Favourites</button>}
            {type==="reset" && <button onClick={()=> dispatch(resetFav())} className="btn btn-outline-danger">RESET Favourites</button>}
            {type==="rm" && <button onClick={()=> dispatch(rmFav(id))} className="btn btn-warning">Remove from Favourites</button>}

        </>        
    )

}
export default AddToFav;