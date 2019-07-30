import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to="/nearbyshops" className="nav-item nav-link" href="#">Nearby Shops</NavLink>
                    <NavLink to="/preferredshops" className="nav-item nav-link" href="#">My Preferred Shops</NavLink>
                    <NavLink to="" className="nav-item nav-link text-danger" href="#"><i className="fas fa-sign-out-alt"></i> Log Out</NavLink>
                </div>
            </div>
    )
}

export default SignedInLinks;
