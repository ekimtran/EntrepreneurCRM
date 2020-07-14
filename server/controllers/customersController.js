const Customer = require('../models').Customer;
const User = require('../models').User;

const createCustomer = (req, res) => {
    Customer
        .create({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            UserId: req.body.UserId
        })
        .then(() => res.status(201).json({message: 'Customer Created!'}))
        .catch(error => res.status(400).json(error))
};

module.exports = {
    createCustomer,
}