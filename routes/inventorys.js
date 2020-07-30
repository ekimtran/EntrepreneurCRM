const express = require("../node_modules/express");
const router = express.Router();
const inventoryController = require('../controllers/inventorysController');
const passport = require("../node_modules/passport/lib");

const authCheck = passport.authenticate("jwt", { session: false });

router.post('/create', inventoryController.createInventory)

module.exports = router;
