import axios from "axios";

// Action Names
export const LIKE_SHOP = "LIKE_SHOP";
export const DISLIKE_SHOP = "DISLIKE_SHOP";
export const GET_SHOPS = "GET_SHOPS";

// Action creators

export const getShops = async (dispatch, getState) => {
    axios({
        url: "http://localhost:3010/shops",
        method: "GET"
    }).then(({ data }) => {
        console.log(getState());
        dispatch({
            type: GET_SHOPS,
            payload: { shops: data }
        });
    }).catch(err => console.log(err));
}


export const likeShop = shop => async (dispatch, getState) => {
    /*
        Make async call to post data to the api
    */
    await axios({
        url: "http://localhost:3010/shops/" + shop.id + "/like",
        method: "POST",
        data: shop
    })
        .then(() => {
            dispatch({
                type: LIKE_SHOP,
                payload: shop
            });

        }).catch(err => console.log(err));
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