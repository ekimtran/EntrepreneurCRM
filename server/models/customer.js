'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
    
  }, {});

  Customer.associate = models => {
    Customer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Customer;
};