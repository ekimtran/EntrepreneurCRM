import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState;

    switch(action.type) {
        case LOGIN_USER:
            nextState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
            return nextState;
        case LOGOUT_USER:
            return {};
        default: 
            return state;
    }
};

export default usersReducer;