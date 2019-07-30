import React from 'react';

function PreferredShop(props) {
    // console.log(props);
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const handleRemove= ()=>{
        console.log("Removed from preferred shops")
    }
    return (
        <div className="card shadow d-inline-flex mr-4 mb-4" style={{ width: "18rem" }}>
            <h5 className="card-title">Aswak Salam</h5>
            <img src={"https://picsum.photos/200?random=" + randomNumber} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <button onClick={handleRemove} className="btn btn-danger mr-3"><i className="far fa-trash-alt"></i> Remove</button>
            </div>
            <div className="card-footer">
                <small className="text-muted">distrance: 8 miles</small>
            </div>
        </div>
    )
}

export default PreferredShop;
