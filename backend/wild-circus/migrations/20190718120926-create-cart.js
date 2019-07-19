
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statut: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
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
    return queryInterface.dropTable('Carts');
  }
};