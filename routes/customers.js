const express = require('../node_modules/express');
const router = express.Router();
const passport = require("../node_modules/passport/lib");
const customersControler = require('../controllers/customersController');
const customersController = require('../controllers/customersController');


router.get("/test", (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

const authCheck = passport.authenticate("jwt", { session: false });

router.post('/create', customersControler.createCustomer);
router.get('/searchNumber', customersControler.searchNumber);
router.get('/searchName', customersControler.searchName);
router.get('/customerList', customersControler.listOfCustomer);
router.patch('/update', customersControler.updateCustomer);
router.delete('/remove', customersController.deleteCustomer);


module.exports = router;