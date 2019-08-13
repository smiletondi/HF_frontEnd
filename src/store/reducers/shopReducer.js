import {
    FETCH_NEARBY_SHOPS_BEGIN, FETCH_NEARBY_SHOPS_SUCCESS, FETCH_NEARBY_SHOPS_ERROR,
    FETCH_PREFERRED_SHOPS_BEGIN, FETCH_PREFERRED_SHOPS_SUCCESS, FETCH_PREFERRED_SHOPS_ERROR,
    LIKE_SHOP_SUCCESS, LIKE_SHOP_ERROR,
    REMOVE_SHOP_SUCCESS, REMOVE_SHOP_ERROR
} from "../actions/shopActions";

const initState = {
    nearbyShops: {
        loading: false,
        shops: [],
        error: null
    },
    preferredShops: {
        loading: false,
        shops: [],
        error: null
    }
};

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_NEARBY_SHOPS_BEGIN:
            console.log(FETCH_NEARBY_SHOPS_BEGIN);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: [],
                    loading: true
                }
            };
        case FETCH_NEARBY_SHOPS_SUCCESS:
            console.log(FETCH_NEARBY_SHOPS_SUCCESS);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: action.payload,
                    loading: false
                }
            };
        case FETCH_NEARBY_SHOPS_ERROR:
            console.log(FETCH_NEARBY_SHOPS_ERROR);
            return {
                ...state,
                nearbyShops: {
                    ...state.nearbyShops,
                    shops: [],
                    error: action.payload
                }
            };
        case FETCH_PREFERRED_SHOPS_BEGIN:
            console.log(FETCH_PREFERRED_SHOPS_BEGIN);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: [],
                    loading: true
                }
            };
        case FETCH_PREFERRED_SHOPS_SUCCESS:
            console.log(FETCH_PREFERRED_SHOPS_SUCCESS);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: action.payload,
                    loading: false
                }
            };
        case FETCH_PREFERRED_SHOPS_ERROR:
            console.log(FETCH_PREFERRED_SHOPS_ERROR);
            return {
                ...state,
                preferredShops: {
                    ...state.preferredShops,
                    shops: [],
                    error: action.payload
                }
            };
        case LIKE_SHOP_SUCCESS:
            console.log("i like ", action.payload.name);
            return state;
        case LIKE_SHOP_ERROR:
            console.log("An eror occured when liking a shop", action.payload);
            return state;
        case REMOVE_SHOP_SUCCESS:
            console.log("i REMOVED ", action.payload.name);
            return state;
        case REMOVE_SHOP_ERROR:
            console.log("An eror occured when liking a shop", action.payload);
            return state;
        case "DISLIKE_SHOP":
            console.log("i don't like ", action.payload.name, ", ", action.payload.distance, "miles is way too far.");
            return state;
        case "DISLIKE_SHOP_ERROR":
            console.log("An eror occured when disliking a shop /n", action.payload);
            return state;
        default:
            return state;
    }
};

export default shopReducer;