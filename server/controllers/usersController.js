const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../config/passport")(passport);
const keys = require('../config/keys');
const User = require('../models').User;


const signup = (req, res) => {
    console.log(req.body)
    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        res.status(400).send({ msg: "Please pass the required information." });
  } else {
        User
        .create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
  }
};

const login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          message: "Authentication failed. User not found.",
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign(
            JSON.parse(JSON.stringify(user)),
            // "nodeauthsecret",
            keys.secretOrKey,
            { expiresIn: 86400 * 30 }
          );
          jwt.verify(token, keys.secretOrKey, function (err, data) {
            console.log(err, data);
          });
          res.json({ success: true, token: "JWT " + token });
        } else {
          res
            .status(401)
            .send({
              success: false,
              msg: "Authentication failed. Wrong password.",
            });
        }
      });
    })
    .catch((error) => res.status(400).send(error));

}

module.exports = {
    signup,
    login
}




 

