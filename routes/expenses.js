const express = require("../node_modules/express");
const router = express.Router();
const expensesController = require('../controllers/expensesController');
const passport = require("../node_modules/passport/lib");

const authCheck = passport.authenticate("jwt", { session: false });

router.post('/create', expensesController.createExpense);
router.patch('/update', expensesController.updateExpense);
router.delete('/delete', expensesController.deleteExpense);
router.get('/yearly', expensesController.searchByYear);
router.get('/monthly', expensesController.searchByMonth);
router.get('/list', expensesController.listOfExpense);







module.exports = router;