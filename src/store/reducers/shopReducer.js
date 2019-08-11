const initState = {
    shops: [],
    user: null
};

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_SHOPS":
            console.log("Getting the shops...");
            return {
                ...state,
                shops: action.payload.shops
            };
        case "LIKE_SHOP":
            console.log("i like ", action.payload.name);
            return state;
        case "LIKE_SHOP_ERROR":
            console.log("An eror occured when liking a shop /n", action.payload);
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