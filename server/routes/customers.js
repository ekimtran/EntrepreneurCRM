const express = require('express');
const router = express.Router();
const customersControler = require('../controllers/customersController');

router.get("/test", (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

router.post('/create', customersControler.createCustomer);
router.get('/searchNumber', customersControler.searchNumber);
router.get('/searchName', customersControler.searchName);
router.patch('/update', customersControler.updateCustomer);

module.exports = router;