import { Link } from "react-router-dom";

function LoginRegister (props){
    return(
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/login">{props.login}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">{props.register}</Link>
            </li>
        </ul>
    )
}

export default LoginRegister;