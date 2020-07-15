'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    month: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT
  }, {});
  Expense.associate = models => {
    Expense.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };
  return Expense;
};