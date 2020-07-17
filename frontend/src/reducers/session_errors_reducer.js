import {
    LOGIN_USER,
    SESSION_ERRORS,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    const newState = { ...state };

    switch(action.type) {
        case SESSION_ERRORS:
            // return action.errors;
            return action.errors.response.data;
        case CLEAR_SESSION_ERRORS:
            delete newState.errors
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;