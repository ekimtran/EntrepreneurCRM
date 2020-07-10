import * as SessionUtil from '../utils/session_util'; 
import jwt_decode from 'jwt-decode';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SESSION_ERRORS = "SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const loginUser = currentUser => {
    return {
        type: LOGIN_USER,
        currentUser
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
};

const sessionErrors = errors => {
    return {
        type: SESSION_ERRORS,
        errors
    }
};

const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
};


export const signup = user => dispatch => {
    return SessionUtil.signup(user)
        .then(res => res.status(201).send('Account Created'))
        // .then(res => {
        //     const { token } = res.data;
        //     localStorage.setItem("jwtToken", token);
        //     SessionUtil.setAuthToken(token);
        //     const decoded = jwt_decode(token);
        //     dispatch(loginUser(decoded))
        // })
        .catch(err => {
            dispatch(sessionErrors(err.response.data))
        });
}

export const login = user => dispatch => 
    SessionUtil.login(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            SessionUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(loginUser(decoded));
        })
        .catch(err => {
            dispatch(sessionErrors(err.response.data))
        });

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionUtil.setAuthToken(false);
    dispatch(logoutUser());
};

export const clearErrors = () => dispatch => {
    dispatch(clearSessionErrors());
};