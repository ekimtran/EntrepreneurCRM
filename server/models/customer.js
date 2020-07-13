'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
    
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    models.Customer.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Customer;
};