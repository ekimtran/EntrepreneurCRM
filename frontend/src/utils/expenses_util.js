import axios from "axios";

export const createExpense = data => {
    return axios.post('/api/expenses/create')
};

export const updateExpense = data => {
    return axios.patch('/api/expenses/update', data)
};

export const deleteExpense = data => {
    return axios.delete('/api/expenses/delete')
};
