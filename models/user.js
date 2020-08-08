'use strict';

const bcrypt = require("../node_modules/bcryptjs");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define(
    "User",
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email already exists",
        },
        allowNull: false,
      },
    },
    {}
  );


  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.associate = models => {

    User.hasMany(models.Customer, {
      foreignKey: "userId",
      as: "customer",
    });

    User.hasMany(models.Expense, {
      foreignKey: "userId",
      as: "expense",
    });

    User.hasMany(models.Vendor, {
      foreignKey: "userId",
      as: "vendor",
    });

  }

  return User;
};