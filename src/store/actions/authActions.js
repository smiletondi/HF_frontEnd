export const signIn = payload => (dispatch, getState) => {
    dispatch({
        type: "SIGN_IN",
        payload: payload
    });
};

export const signUp = payload => (dispatch, getState) => {
    dispatch({
        type: "SIGN_UP",
        payload: payload
    });
}