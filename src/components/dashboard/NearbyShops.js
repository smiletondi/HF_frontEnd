import React, { Component } from 'react';
import NearbyShop from "../shops/NearbyShop";

class NearbyShops extends Component {
    render() {
        return (
            <div>
                <h1>This is the list of nearby shops:</h1>
                <hr />
                <div className="container">

                    <NearbyShop />
                    <NearbyShop />
                    <NearbyShop />
                    <NearbyShop />
                </div>

            </div>
        )
    }
}

export default NearbyShops;