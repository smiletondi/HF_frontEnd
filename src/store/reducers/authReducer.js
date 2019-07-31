const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            console.log("Sign in Form submited ", action.payload);
            break;
        case "SIGN_UP":
            console.log("Sign in Form submited ", action.payload);
            break;
        default:
        // console.log("Default");
    }
    return state;
}

export default authReducer;