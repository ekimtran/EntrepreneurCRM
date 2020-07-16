const Expense = require("../models").Expense;
const User = require("../models").User;
const validateExpenseInput = require('../validation/expense');


const createExpense = (req, res) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    Expense.create({
        month: req.body.month,
        year: req.body.year,
        type: req.body.type,
        userId: req.body.userId,
        amount: req.body.amount,
        description: req.body.description
    })
    .then(() => res.status(201).json({message: 'Expense added!'}))
    .catch(error => res.status(400).json(error))
};

const updateExpense = (req, res) => {
    Expense.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(expense => {
        expense.update({
          month: req.body.month,
          year: req.body.year,
          type: req.body.type,
          amount: req.body.amount,
          description: req.body.description,
        })
        .then(() => res.status(201).json({ expense: 'Expense updated!'}))
    })
    .catch(error => res.status(400).json(error))
};

const deleteExpense = (req, res) => {
    Expense.findOne({
        where: {
        id: req.body.id,
        },
    })
    .then(expense => {
        expense.destroy()
        .then(() => res.status(201).json({ expense: 'Expense deleted!'}))
        .catch(error => res.status(400).json(error));
    })
    .catch(err => res.status(400).json(err))
};

const searchByYear = (req, res) => {
    Expense.findOne({
        where: {
        year: req.body.year,
        userId: req.body.userId
        },
    })
    .then(expense => {
        if (expense) {
            return res.status(201).json(expense);
        } else {
            return res.status(400).json({expense: `No Expenses in ${req.body.year}`})
        }
    })
    .catch(error => res.status(400).json(error))
};
 
const searchByMonth = (req, res) => {
    Expense.findOne({
        where: {
        month: req.body.month,
        userId: req.body.userId,
        },
    })
    .then((expense) => {
        if (expense) {
            return res.status(201).json(expense);
        } else {
            return res.status(400).json({ expense: `No Expenses in ${req.body.month}` });
        }
    })
    .catch((error) => res.status(400).json(error));
};

const listOfExpense = (req, res) => {
    Expense.findAll({
      where: { userId: req.body.userId },
      order: [['createdAt', 'DESC']],
    })
    .then(expense => res.status(201).json(expense))
    .catch(() => res.status(400).json({ expense: 'No expense so far'}))
}


module.exports = {
    createExpense,
    updateExpense,
    deleteExpense,
    searchByYear,
    searchByMonth,
    listOfExpense
}