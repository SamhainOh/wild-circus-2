
module.exports = (sequelize, DataTypes) => {
  const CartHasProduct = sequelize.define('CartHasProduct', {
    statut: DataTypes.STRING,
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  CartHasProduct.associate = function(models) {
    // associations can be defined here
    CartHasProduct.belongsTo(models.Product,{ foreignKey:'product_id', as: 'product'});
    CartHasProduct.belongsTo(models.Cart,{ foreignKey:'cart_id',as: 'cart'});
  };
  return CartHasProduct;
};