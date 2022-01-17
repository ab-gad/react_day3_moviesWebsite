import { Link } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import FavNum from "./FavNum";
import LangChange from "./LangChange";
import { useContext } from "react";
import { langContext } from "../context/langContext";


function Navbar() {
    const {contextLang} = useContext(langContext);

    const araTranslation = {
        moviesWord:"عالم الأفلام",
        home: "الرئيسية",
        favourite:"المفضلة",
        search:"البحث",
        login:"تسجيل الدخول",
        regstr:"مستخدم جديد"
    }
    const enTranslation = {
        moviesWord:" Movies Word",
        home: "Home",
        favourite:"Favourite",
        search:"Search",
        login:"Login",
        regstr:"Register"
    }

    const tanslation = contextLang === "EN" ? enTranslation : araTranslation

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{tanslation.moviesWord}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ${contextLang === "EN"? "me-auto":"ms-auto"} mb-2 mb-lg-0`}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{tanslation.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">{tanslation.search}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourites">{tanslation.favourite}</Link>
                        </li>
                        <div className="me-5">
                            <FavNum />
                        </div>
                    </ul>
                        <LangChange />
                    <LoginRegister login={tanslation.login} register={tanslation.regstr}/>
                </div>
            </div>
        </nav>
    );
  }
  
export default Navbar;
  