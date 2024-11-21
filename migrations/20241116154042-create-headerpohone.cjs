

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('headerphone', {

      name:
      {
        SmartPhone: true,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     
     Id: {
       type: Sequelize.INTEGER
     },
     name: {
       type: Sequelize.STRING
     },
     stock: {
       type: Sequelize.INTEGER
     },
     tilte: {
       type: Sequelize.STRING
     },
     descriptin: {
       type: Sequelize.STRING
     },
     price: {
       type: Sequelize.INTEGER
     },
     descountPercentage: {
       type: Sequelize.INTEGER
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
   await queryInterface.dropTable('headerphone');
   
 }
   
};






 
    
    
/*

name: [
        { id: "1",
        name: "Telefon", 
        stock: 50, 
        title: "Fantastisk Smartphone",
         description: "En kraftfull smartphone med högkvalitativ kamera och snabb processor.",
          price: 5999, 
          discountPercentage: 10, 
          rating: 4.5, 
          category: "Elektronik" }, 
          { id: "2", 
           name: "Laptop", 
           stock: 500, 
           title: "Slank och kraftfull Laptop",
            description: "En lätt och kraftfull laptop perfekt för arbete och underhållning.",
             price: 12999, 
             discountPercentage: 5, 
             rating: 4.2,
              category: "Elektronik" },
               { id: "3", name: "Tablet", 
                   stock: 100, 
                   title: "Multifunktionell Tablet", 
                   description: "En användarvänlig tablet för surfning, filmer och spel.",
                    price: 3999, 
                    discountPercentage: 0, 
                    rating: 3.8, 
                    category: "Elektronik" }, 
                    { id: "4",
                        name: "Hörlurar", 
                        stock: 200, 
                        title: "Högkvalitativa Hörlurar",
                         description: "Trådlösa hörlurar med fantastisk ljudkvalitet och lång batteritid.", 
                         price: 1999, 
                         discountPercentage: 15,
                          rating: 4.7, 
                          category: "Audio" 
                        } ] ,// GET /products - Retrieve all products 
 //============== 
 
      name:
       {

        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      Id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      tilte: {
        type: Sequelize.STRING
      },
      descriptin: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      descountPercentage: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Headerphone');
    
  }
    
};
*/
