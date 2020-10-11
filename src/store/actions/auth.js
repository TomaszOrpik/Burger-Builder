import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: idToken,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const checkAuthTimeout = (exporationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, exporationTime*1000)
    };
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/v1/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDYQ-xcTRIYpxqrnQDz0YBV4d1yuZb5qL0';
        if (!isSignup) {
            url = 'https://www.googleapis.com/v1/identitytoolkit/v3/relyingparty/verifypassword?key=AIzaSyDYQ-xcTRIYpxqrnQDz0YBV4d1yuZb5qL0'
        }
        ///GOOGLE AUTH TOKEN RESPONSE WITH 400 ERROR
        axios.post(url, authData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error))
        })
    };
};