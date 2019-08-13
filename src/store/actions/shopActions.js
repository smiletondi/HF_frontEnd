import axios from "axios";

// Action Names
export const FETCH_NEARBY_SHOPS_BEGIN = "FETCH_NEARBY_SHOPS_BEGIN";
export const FETCH_NEARBY_SHOPS_SUCCESS = "FETCH_NEARBY_SHOPS_SUCCESS";
export const FETCH_NEARBY_SHOPS_ERROR = "FETCH_NEARBY_SHOPS_ERROR";
export const FETCH_PREFERRED_SHOPS_BEGIN = "FETCH_PREFERRED_SHOPS_BEGIN";
export const FETCH_PREFERRED_SHOPS_SUCCESS = "FETCH_PREFERRED_SHOPS_SUCCESS";
export const FETCH_PREFERRED_SHOPS_ERROR = "FETCH_PREFERRED_SHOPS_ERROR";
export const LIKE_SHOP_SUCCESS = "LIKE_SHOP_SUCCESS";
export const LIKE_SHOP_ERROR = "LIKE_SHOP_ERROR";
export const REMOVE_SHOP_SUCCESS = "REMOVE_SHOP_SUCCESS";
export const REMOVE_SHOP_ERROR = "REMOVE_SHOP_ERROR";
export const DISLIKE_SHOP = "DISLIKE_SHOP";
export const GET_SHOPS = "GET_SHOPS";

// Action creators

export const fetchNearbyShops = token => (dispatch, getState) => {
    // API call
    dispatch({
        type: FETCH_NEARBY_SHOPS_BEGIN
    })
    axios({
        url: ("http://localhost:3010/shops/nearbyShops"),
        method: "GET",
        // data: payload
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(({ data }) => {
        dispatch({
            type: FETCH_NEARBY_SHOPS_SUCCESS,
            payload: data
        })
    }).catch(err => {
        dispatch({
            type: FETCH_NEARBY_SHOPS_ERROR,
            payload: err.response.data
        })
    })
}

export const fetchPreferredShops = token => (dispatch, getState) => {
    // API call
    dispatch({
        type: FETCH_PREFERRED_SHOPS_BEGIN
    })
    axios({
        url: ("http://localhost:3010/shops/preferredShops"),
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(({ data }) => {
        dispatch({
            type: FETCH_PREFERRED_SHOPS_SUCCESS,
            payload: data
        })
    }).catch(err => {
        dispatch({
            type: FETCH_PREFERRED_SHOPS_SUCCESS,
            payload: err.response.data
        })
    })
}


export const likeShop = (shop, token) => async (dispatch, getState) => {
    /*
        Make async call to post data to the api
    */
    await axios({
        url: "http://localhost:3010/shops/" + shop._id + "/like",
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(() => {
        dispatch({
            type: LIKE_SHOP_SUCCESS,
            payload: shop
        });
    }).catch(err => {
        dispatch({
            type: LIKE_SHOP_ERROR,
            payload: err
        });
    });
}
export const removeShop = (shop, token) => async (dispatch, getState) => {
    /*
        Make async call to post data to the api
    */
    await axios({
        url: "http://localhost:3010/shops/" + shop._id + "/remove",
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(() => {
        dispatch({
            type: REMOVE_SHOP_SUCCESS,
            payload: shop
        });
    }).catch(err => {
        dispatch({
            type: REMOVE_SHOP_ERROR,
            payload: err
        });
    });
}

export const dislikeShop = shop => (dispatch, getState) => {
    /*
        Make async call to post data to the api
    */
    axios.post(("http://localhost:3010/shops/" + shop.id + "/like"), shop)
        .then(() => {
            dispatch({
                type: DISLIKE_SHOP,
                payload: shop
            });

        }).catch(err => {
            dispatch({
                type: "DISLIKE_SHOP_ERROR",
                payload: err
            });

        });
}