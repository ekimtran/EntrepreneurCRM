const Customer = require('../models').Customer;
const User = require('../models').User;
const validateCustomerInput = require('../validation/customer');

const createCustomer = (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

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