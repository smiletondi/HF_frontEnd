import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" href="#">Nearby Shops</NavLink>
                    <NavLink className="nav-item nav-link" href="#">My Preferred Shops</NavLink>
                    <NavLink className="nav-item nav-link" href="#">Log Out</NavLink>
                </div>
            </div>
    )
}

export default SignedInLinks;
