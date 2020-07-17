'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    userId: DataTypes.INTEGER
    
  }, {});

  Customer.associate = models => {
    Customer.belongsTo(models.User, {
      foreignKey: 'userId',
      as: "user",
    });
  };
  return Customer;
};