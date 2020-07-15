const express = require("express");
const router = express.Router();
const expensesController = require('../controllers/expensesController');
const passport = require("passport");

const authCheck = passport.authenticate("jwt", { session: false });

router.post('/create', expensesController.createExpense);
router.patch('/update', expensesController.updateExpense);
router.delete('/delete', expensesController.deleteExpense);
router.get('/yearly', expensesController.searchByYear);
router.get('/monthly', expensesController.searchByMonth);







module.exports = router;