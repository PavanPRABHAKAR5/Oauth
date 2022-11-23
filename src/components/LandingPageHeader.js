import React from 'react'
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
const LandingPageHeader = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        CRUD APP
                    </a>
                    <ul id="navigation" className="navbar-nav signout">

                        <li className="nav-item active">
                            <a
                                id="active" className="nav-link "
                                aria-current="page"
                                aria-selected="true"
                                href="#"
                                onClick={handleClick}
                            >
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default LandingPageHeader