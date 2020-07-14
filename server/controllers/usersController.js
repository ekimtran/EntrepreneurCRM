const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../config/passport")(passport);
const keys = require('../config/keys');
const User = require('../models').User;
const bcrypt = require("bcryptjs");


const signup = (req, res) => {
    // console.log(req.body)
    if (!req.body.email || !req.body.password || !req.body.companyName) {
        res.status(400).send({ msg: "Please pass the required information." });
    } 
    
    if (req.body.password.length < 8) {
      res.status(400).send({ msg: "Password should be at least 8 characters"})
    } else {
      User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        if (user) {
          return res
            .status(400)
            .json({ email: "a user is already registered with that email" });
        } else {
          const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            companyName: req.body.companyName,
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              const payload = {
                id: newUser.id,
                email: newUser.email,
                companyName: newUser.companyName,
                
              };
              newUser
                .save()
                .then((user) => {
                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer " + token,
                      });
                    }
                  );
                })
              .catch((error) => {
                const er = {msg: []};
                const allErr = error.errors
                for(i = 0; i < allErr.length; i++) {
                  er["msg"].push(allErr[i].message)
                  console.log(allErr[i].message)
                }
                  res.status(400).json(er)
              });
            });
          });
        }
      }
      );
  }
};


// const signup = (req, res) => {
//   console.log(req.body);
//   if (
//     !req.body.email ||
//     !req.body.password ||
//     !req.body.companyName
//   ) {
//     res.status(400).send({ msg: "Please pass the required information." });
//   } else {
//     User.create({
//       email: req.body.email,
//       password: req.body.password,
//       companyName: req.body.companyName,
//     })
//       .then((user) => res.status(201).send(user))
//       .catch((error) => {
//         console.log(error);
//         res.status(400).send(error);
//       });
//   }
// };


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
            keys.secretOrKey,
            { expiresIn: 86400 * 30 }
          );
          jwt.verify(token, keys.secretOrKey, function (err, data) {
            console.log(err, data);
          });
          res.json({ success: true, token: "Bearer " + token });
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
    .catch((error) => res.status(400).json(error));

}

module.exports = {
    signup,
    login
}




 

