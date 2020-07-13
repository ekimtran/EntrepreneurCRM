const express = require('express');
const router = express.Router();
const customersControler = require('../controllers/customersController');

router.get("/test", (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

router.post('/create', customersControler.createCustomer);

module.exports = router;