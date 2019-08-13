import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NearbyShop from "./NearbyShop";
import { fetchNearbyShops } from '../../store/actions/shopActions';



class NearbyShops extends Component {
    componentDidMount(){
        if (this.props.user)
            this.props.fetchNearbyShops(this.props.user.token);
    }
    render() {
        if(!this.props.user) return <Redirect to="/signin" />

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
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    fetchNearbyShops: (token) => dispatch(fetchNearbyShops(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyShops);