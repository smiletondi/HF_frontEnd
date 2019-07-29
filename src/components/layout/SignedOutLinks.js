import React from 'react';
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
    return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" href="#">Sign Up</NavLink>
                    <NavLink className="nav-item nav-link" href="#">Log in</NavLink>
                </div>
            </div>
    )
}

export default SignedOutLinks;
