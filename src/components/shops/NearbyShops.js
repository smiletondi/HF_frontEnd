import React, { Component } from 'react';
import { connect } from "react-redux";

import NearbyShop from "./NearbyShop";



class NearbyShops extends Component {
    render() {

        const { shops } = this.props;

        return (
            <div>
                <h1>This is the list of nearby shops:</h1>
                <hr />
                <div className="container">
                    {shops && shops.map( shop => {
                        return <NearbyShop key={shop.id} shop={shop} />
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    shops: state.shop.shops
});

export default connect(mapStateToProps)(NearbyShops);