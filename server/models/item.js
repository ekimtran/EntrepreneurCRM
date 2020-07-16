'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    name: DataTypes.STRING,
    vendorId: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};