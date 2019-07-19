
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    statut: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User,{foreignKey: 'user_id', as:'user'});
    Cart.belongsToMany(models.Product,{through:'CartHasProducts',foreignKey: 'user_id',as:'products'});
  };
  return Cart;
};