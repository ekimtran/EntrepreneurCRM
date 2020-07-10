const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/test', (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

router.post('/register', usersController.signup);
router.post('/login', usersController.login);

module.exports = router;