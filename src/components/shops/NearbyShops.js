import React, { Component } from 'react';
import { connect } from "react-redux";

import NearbyShop from "./NearbyShop";
import { getShops } from '../../store/actions/shopActions';



class NearbyShops extends Component {
    componentDidMount(){
        this.props.dispatch(getShops);
    }
    render() {


        const { shops } = this.props;

        return (
            <div>
                <h1>This is the list of nearby shops:</h1>
                <hr />
                <div className="container">
                    {shops && shops.map(shop => {
                        return <NearbyShop key={shop._id} shop={shop} />
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