'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    name: DataTypes.STRING,
    vendorId: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {

    Item.belongsTo(models.Vendor, {
      foreignKey: 'vendorId',
      as: 'vendor',
    });

  };
  return Item;
};