import React, { Component } from 'react';
import { connect } from "react-redux";

import PreferredShop from "./PreferredShop";
import { fetchPreferredShops } from '../../store/actions/shopActions';

class PreferredShops extends Component {
    componentDidMount() {
        this.props.fetchPreferredShops(this.props.token);
    }

    render() {
        const { shops } = this.props;
        return (
            <div>
                <h1>This is the list of preferred shops:</h1>
                <hr />
                <div className="container">
                    {shops && shops.map(shop => {
                        return <PreferredShop key={shop._id} shop={shop} />
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    shops: state.shop.preferredShops.shops,
    token: state.auth.user.token
});

const mapDispatchToProps = (dispatch) => ({
    fetchPreferredShops: (token) => dispatch(fetchPreferredShops(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(PreferredShops);