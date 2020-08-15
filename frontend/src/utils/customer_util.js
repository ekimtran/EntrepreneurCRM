import axios from "axios";

export const createCustomer = data => {
    return axios.post('/api/customers/create', data)
};

export const customerList = () => {
    return axios.get('/api/customers/customerList')
};

export const updateCustomer = data => {
    return axios.patch('/api/customers/update', data)
};

export const removeCustomer = data => {
    return axios.delete('/api/customers/remove', data)
}