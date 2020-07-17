const express = require("../node_modules/express");
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/test', (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

router.post('/register', usersController.signup);
router.post('/login', usersController.login);
router.get('/alldb', usersController.completeDataBase);

module.exports = router;