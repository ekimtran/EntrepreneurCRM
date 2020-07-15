// const Customer = require('../models').Customer;
// const User = require('../models').User;
const db = require('../models');

const createCustomer = (req, res) => {
    db.Customer
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