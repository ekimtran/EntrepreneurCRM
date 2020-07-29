const express = require("../node_modules/express");
const router = express.Router();
const passport = require("../node_modules/passport/lib");

const authCheck = passport.authenticate("jwt", { session: false });

router.post

module.exports = router;
