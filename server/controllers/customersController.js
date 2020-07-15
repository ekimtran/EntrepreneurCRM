const Customer = require('../models').Customer;
const User = require('../models').User;
const validateCustomerInput = require('../validation/customer');

const createCustomer = (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Customer.find({
        where: {
            phoneNumber: req.body.phoneNumber
        }
    }).then(customer => {
        if (customer) {
            return res
                .status(400).json({customer: 'Customer already existed'})
        } else {
            Customer.create({
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                userId: req.body.userId,
            })
                .then(() =>
                res.status(201).json({ message: "Customer Created!" })
                )
                .catch((error) => res.status(400).json(error));
        }
    })
};

const searchNumber = (req, res) => {
    
    Customer.findOne({
        where: {
            phoneNumber: req.body.phoneNumber
        }
    })
    .then(customer => {
        if (customer) {
            return res.status(201).json(customer);
        } else {
            return res.status(201).json({customer: 'Customer does not exist'})
        }
    })
    .catch(error => res.status(400).json(error));
};

const searchName = (req)

module.exports = {
    createCustomer,
    searchNumber
}