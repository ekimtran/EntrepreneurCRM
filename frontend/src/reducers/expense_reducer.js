import {
    RECEIVE_ALL_EXPENSES,
    RECEIVE_EXPENSE,
    REMOVE_EXPENSE
} from '../actions/expense_actions';

const expenseReducers = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_EXPENSES:
            return Object.assign({}, state, action.expenses);
        case RECEIVE_EXPENSE:
            return Object.assign({}, state, {[action.expense.id]: expense});
        case REMOVE_EXPENSE:
            const nextState = Object.assign({}, state);
            delete nextState[action.expense.id]
            return nextState;
        default:
            return state;
    };
};

export default expenseReducers;