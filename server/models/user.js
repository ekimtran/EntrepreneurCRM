const bcrypt = require('bcrypt-nodejs');

'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define(
    "User",
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please provide a company name",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please provide a password",
        },
        validate: {
          isNotShort: (value) => {
            if (value.length < 8) {
              throw new Error ('Password should be at least 8 characters')
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email already exists",
        },
        allowNull: {
          args: false,
          msg: "Please provide an email address",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address",
          },
        },
      },
    },
    {}
  );


  User.beforeSave((user, options) => {
    if (user.changed("password")) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
  });
  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};