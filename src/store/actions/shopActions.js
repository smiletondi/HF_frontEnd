export const likeShop= shop => (dispatch, getState) => {
    // make async call to API
    dispatch({
        type: "LIKE_SHOP",
        payload: shop
    });
}
export const dislikeShop= shop => (dispatch, getState) => {
    // make async call to API
    dispatch({
        type: "DISLIKE_SHOP",
        payload: shop
    });
}