const express = require("../node_modules/express");
const router = express.Router();
const vendorsController = require('../controllers/vendorsController');


router.post('/create', vendorsController.createVendor);
router.patch('/update', vendorsController.updateVendor);
router.get('/list', vendorsController.listOfVendors);
router.delete('/delete', vendorsController.deleteVendors)



module.exports = router;