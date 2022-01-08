import { useSelector } from "react-redux";

function FavNum() {
    
    const fav = useSelector((state)=> state.fav)
    const num = fav.length

    return (
        <div id="fav-num" className="position-relative">
            <img src={require("../assets/favorite.png")} alt=""/>
            <div className="position-absolute top-50 start-100 translate-middle">{num}</div>

        </div>
    )
}

export default FavNum;