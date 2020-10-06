import { combineReducers } from 'redux';
import usersReducer from './users_reducers';
import customerReducer from './customer_reducer';

export default combineReducers({
    users: usersReducer,
    customers: customerReducer,
})