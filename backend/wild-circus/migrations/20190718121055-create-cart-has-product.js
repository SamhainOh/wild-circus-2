
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CartHasProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statut: {
        type: Sequelize.STRING
      },
      cart_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Carts',
          foreignKey:'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Products',
          foreignKey:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CartHasProducts');
  }
};