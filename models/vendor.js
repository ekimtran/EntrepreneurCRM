'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    "Vendor",
    {
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      company: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Vendor.associate = function(models) {

    Vendor.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    Vendor.hasMany(models.Item, {
      foreignKey: "vendorId",
      as: "item",
    });
  
  };
  return Vendor;
};