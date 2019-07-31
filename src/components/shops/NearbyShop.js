import React from 'react';

function NearbyShop({ shop: { name, distance } }) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);

    const handleLike = () => {
        console.log("i like ", name);
    }
    const handleDisLike = () => {
        console.log("i don't like ", name, ", ", distance, "miles is too far.");
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

export default NearbyShop;
