const express = require("express");
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.post('/create', itemsController.createItem);

module.exports = router;