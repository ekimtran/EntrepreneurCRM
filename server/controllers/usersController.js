const User = require('../models').User;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const validateRegisterInput = require('../validation/register');



const createUser = (req, res) => {

    User.findOne()
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING },
      username: { allowNull: false, type: Sequelize.STRING },
      email: { allowNull: false, unique: true, type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: (queryInterface) /* , Sequelize */ => queryInterface.dropTable("Users"),
};