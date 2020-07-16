const express = require("express");
const router = express.Router();
const vendorsController = require('../controllers/vendorsController');


router.post('/create', vendorsController.createVendor);



module.exports = router;