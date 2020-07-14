const { reset } = require('nodemon');

const Customer = require('../models').Customer;
const User = require('../models').User;

const createCustomer = (req, res) => {

    if (!req.body.name || !req.body.phoneNumber || !req.body.userId) {
        res.status(400).json({msg: 'Please pass the required information'})
    }
    
    Customer
        .create({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            userId: req.body.userId
        })
        .then(() => res.status(201).json({message: 'Customer Created!'}))
        .catch(error => res.status(400).json(error))
};

module.exports = {
    createCustomer,
}