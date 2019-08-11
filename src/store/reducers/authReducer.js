import { SIGN_IN_BEGIN, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, UPDATE_USER_STATE } from "../actions/authActions";

const initState = {
    loading: false,
    user: null,
    error: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN_BEGIN:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_SUCCESS:
            console.log("Login success");
            sessionStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }
        case SIGN_IN_ERROR:
            console.log("Login Error");
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload.message
            }
        case SIGN_OUT_SUCCESS:
            console.log("SignOut success");
            sessionStorage.removeItem("user");
            return initState
        case UPDATE_USER_STATE:
            console.log("user state updated");
            return {
                ...state,
                user: action.payload
            }
        // case "SIGN_UP":
        //     return {

        //     }
        default:
            return state;
    }
}

export default authReducer;