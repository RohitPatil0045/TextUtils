import React from "react";
import PropTypes from 'prop-types'
import logo from "../img/logo.png";
function Navbar(props) {


    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} > 
            <div className="container-fluid">
            <img src={logo} alt="Logo" width="30" height="24"/>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">{props.homepage}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.about}</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode ==='dark'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

Navbar.prototype = {
    title: PropTypes.string,
    homepage: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'SiteName',
    homepage: 'Home',
    about: 'About Us'
}