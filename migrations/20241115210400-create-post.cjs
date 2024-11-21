




'use strict';
 /**@type {import('sequelize-cli').Migration} **/
     module.exports = {

 async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
 // GET products - Hämta alla produkter
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL
      },
      category: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};







