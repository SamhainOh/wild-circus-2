'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    statut: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};