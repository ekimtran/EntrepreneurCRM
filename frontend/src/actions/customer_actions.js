import * as CustomerUtil from '../utils/customer_util';

export const RECEIVE_ALL_CUSTOMERS = 'RECEIVE_ALL_CUSTOMERS';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';


const receiveAllCustomers = customers => {
    return {
        type: RECEIVE_ALL_CUSTOMERS,
        customers,
    }
};

const receieveCustomer = customer => {
    return {
        type: RECEIVE_CUSTOMER,
        customer
    }
};

const removeCustomer = customerId => {
    return {
        type: REMOVE_CUSTOMER,
        customerId
    }
};

export const fetchAllCustomers = () => dispatch => 
    CustomerUtil.customerList()
        .then(customers => dispatch(receiveAllCustomers(customers)));

export const createCustomer = data => dispatch => 
    CustomerUtil.createCustomer(data)
        .then(customer => dispatch(receieveCustomer(customer)));

export const updateCustomer = data => dispatch => 
    CustomerUtil.updateCustomer(data)
        .then(customer => dispatch(receieveCustomer(customer)));

export const deleteCustomer = data => dispatch => 
    CustomerUtil.removeCustomer(data)
        .then(() => dispatch(removeCustomer(data)))
