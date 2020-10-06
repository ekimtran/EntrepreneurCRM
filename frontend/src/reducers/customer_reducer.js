import {
    RECEIVE_ALL_CUSTOMERS,
    RECEIVE_CUSTOMER,
    REMOVE_CUSTOMER
} from '../actions/customer_actions';

const customerReducers = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_CUSTOMERS:
            return Object.assign({}, state, action.customers);
        case RECEIVE_CUSTOMER:
            return Object.assign({}, state, {[action.customer.id]: action.customer});
        case REMOVE_CUSTOMER:
             const nextState = Object.assign({}, state);
             delete nextState[action.customer.id];
             return nextState;
        default:
            return state;
    }
};


export default customerReducers;