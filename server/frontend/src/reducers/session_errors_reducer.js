import {
    LOGIN_USER,
    SESSION_ERRORS,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type) {
        case SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return state;
        default:
            return state;
    }
};

export default sessionErrorsReducer;