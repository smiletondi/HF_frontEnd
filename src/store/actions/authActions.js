import axios from "axios";

export const SIGN_IN_BEGIN = "SIGN_IN_BEGIN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCES";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCES";

export const signIn = payload => (dispatch, getState) => {
    // API call
    dispatch({
        type: SIGN_IN_BEGIN
    })
    axios({
        url: ("http://localhost:3010/signin"),
        method: "POST",
        data: payload
    }).then(({data}) => {
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        })
    }).catch(err => {
        dispatch({
            type: SIGN_IN_ERROR,
            payload: err.response.data
        })
    })
};

export const signOut = payload => (dispatch, getState) => {
    return dispatch({
        type: SIGN_OUT_SUCCESS
    });
}

export const signUp = payload => (dispatch, getState) => {
    return dispatch({
        type: "SIGN_UP",
        payload: payload
    });
}