const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../config/passport")(passport);
const keys = require('../config/keys');
const User = require('../models').User;

const signup = (req, res) => {

    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        res.status(400).send({ msg: "Please pass the required information." });
  } else {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.username
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
  }
};

module.exports = {
    signup
}




 

