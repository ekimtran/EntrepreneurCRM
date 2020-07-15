const Expense = require("../models").Expense;
const User = require("../models").User;
const validateExpenseInput = require('../validation/expense');

const createExpense = (req, res) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    Expense.create({
        month: req.body.name,
        year: req.body.year,
        type: req.body.type,
        userId: req.body.userId,
        amount: req.body.amount,
        description: req.body.description
    })
    .then(() => res.status(201).json({message: 'Expense added!'}))
    .catch(error => res.status(400).json(error))
};

module.exports = {
    createExpense
}