const express = require("express");
const router = express.Router();
const expensesController = require('../controllers/expensesController');
const passport = require("passport");

const authCheck = passport.authenticate("jwt", { session: false });

router.post('/create', expensesController.createExpense);







module.exports = router;