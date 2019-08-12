import React, { Component } from 'react';
import { connect } from "react-redux";

import NearbyShop from "./NearbyShop";
import { fetchNearbyShops } from '../../store/actions/shopActions';



class NearbyShops extends Component {
    componentDidMount(){
        this.props.fetchNearbyShops(this.props.token);
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
    shops: state.shop.nearbyShops.shops,
    token: state.auth.user.token
});

const mapDispatchToProps = (dispatch) => ({
    fetchNearbyShops: (token) => dispatch(fetchNearbyShops(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyShops);