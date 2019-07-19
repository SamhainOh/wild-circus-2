
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Cart,{through:'CartHasProducts', as:'products'});
  };
  return Product;
};