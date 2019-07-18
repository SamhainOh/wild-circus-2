'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartHasProduct = sequelize.define('CartHasProduct', {
    statut: DataTypes.STRING,
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  CartHasProduct.associate = function(models) {
    // associations can be defined here
  };
  return CartHasProduct;
};