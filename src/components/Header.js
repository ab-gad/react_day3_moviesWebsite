function Header (props){
    const{title}=props
    return(
        <header 
            style={{backgroundImage:`url(${require("../assets/bgmovie.jpg")})`, backgroundSize:"cover"}}
        >
            <div className="overlay py-5" style={{backgroundColor:"#ffffff82"}}>
                <div className="py-5 ">
                <h1 className="display-1 text-center fw-bold my-5 my-3" style={{backgroundColor:"#ffffff82"}}>
                    {title}
                </h1>
                </div>
            </div>
        </header>
    )
}

export default Header; 