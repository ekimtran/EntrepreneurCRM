'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    quanity: DataTypes.INTEGER
  }, {});
  Inventory.associate = function(models) {

    Inventory.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    Inventory.hasMany(models.Item, {
      foreignKey: "itemId",
      as: "item",
    });

  };
  return Inventory;
};