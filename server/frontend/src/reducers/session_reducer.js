import {
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser.id,
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
}