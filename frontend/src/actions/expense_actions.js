import * as ExpenseUtil from '../utils/expenses_util';

export const RECEIVE_ALL_EXPENSES = 'RECEIVE_ALL_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const receiveAllExpenses = expenses => {
    return {
        type: RECIEVE_ALL_EXPENSES,
        expenses
    }
};

const receiveExpense = expense => {
    return {
        type: RECEIVE_EXPENSE,
        expense
    }
};

const removeExpense = expenseId => {
    return {
        type: REMOVE_EXPENSE,
        expenseId
    }
};

export const createExpense = data => dispatch => 
    ExpenseUtil.createExpense(data)
        .then(expense => dispatch(receiveExpense(expense)));

export const updateExpense = data => dispatch => 
    ExpenseUtil.updateExpense(data)
        .then(expense => dispatch(receiveExpense(expense)));

export const deleteExpense = data => dispatch => 
    ExpenseUtil.deleteExpense(data)
        .then(() => dispatch(removeExpense(data)));