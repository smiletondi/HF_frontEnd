import React from 'react';
import { connect } from "react-redux";
import { likeShop, dislikeShop } from "../../store/actions/shopActions";

function NearbyShop(props) {
    // Destructuring name and distance
    const { shop: { name, distance } } = props;

    const randomNumber = Math.floor(Math.random() * 10 + 1);

    const handleLike = () => {
        props.likeShop(props.shop);
    }
    const handleDisLike = () => {
        props.dislikeShop(props.shop);
    }

    return (
        <div className="card shadow d-inline-flex mr-4 mb-4" style={{ width: "18rem" }}>
            <h5 className="card-title text-center">{name}</h5>
            <img src={"https://picsum.photos/200?random=" + randomNumber} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <button onClick={handleDisLike} className="btn btn-danger mr-3"><i className="far fa-thumbs-down"></i> Dislike</button>
                <button onClick={handleLike} className="btn btn-success"><i className="far fa-thumbs-up"></i> Like</button>
            </div>
            <div className="card-footer">
                <small className="text-muted">distrance: {distance} miles</small>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeShop: (shop) => dispatch(likeShop(shop)),
        dislikeShop: (shop) => dispatch(dislikeShop(shop))
    }
}

export default connect(null, mapDispatchToProps)(NearbyShop);
