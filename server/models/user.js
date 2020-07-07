'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define(
    "User",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please provide a first name",
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please provide a last name",
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
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};