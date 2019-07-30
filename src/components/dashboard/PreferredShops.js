import React, { Component } from 'react';
import PreferredShop from "../shops/PreferredShop";

class PreferredShops extends Component {
    render() {
        return (
            <div>
                <h1>This is the list of preferred shops:</h1>
                <hr />
                <div className="container">

                    <PreferredShop />
                    <PreferredShop />
                </div>

            </div>
        )
    }
}

export default PreferredShops;