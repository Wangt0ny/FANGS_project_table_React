import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'
import '../assets/css/navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <img className="navbar-img" src={logo} />
                <Link className="navbar-link" to='/'>訂單紀錄</Link>
                <Link className="navbar-link" to='/edit'>編輯菜單</Link>
                <Link className="navbar-link" to='/report'>報表統計</Link>
            </div>
        </>
    );
}

export default Navbar;