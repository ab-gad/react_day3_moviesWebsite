import { Link } from "react-router-dom";

function LoginRegister (){
    return(
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    )
}

export default LoginRegister;