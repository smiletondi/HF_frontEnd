import React from 'react';

function PreferredShop(props) {
    // Destructuring name, distance and imageUrl
    const { shop: { name, distance, imageUrl } } = props;

    const handleRemove = () => {
        console.log("Removed from preferred shops")
    }
    return (
        <div className="card shadow d-inline-flex mr-4 mb-4" style={{ width: "18rem" }}>
            <h5 className="card-title text-center">{name}</h5>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <button onClick={handleRemove} className="btn btn-danger mr-3"><i className="far fa-trash-alt"></i> Remove</button>
            </div>
            <div className="card-footer">
                <small className="text-muted">distrance: {distance} miles</small>
            </div>
        </div>
    )
}

export default PreferredShop;
