'use strict';

const faker=require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const items=generateFakeCategories(150);
    await queryInterface.bulkInsert('Categories', items, {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};

function generateFakeCategories(rowsCount){
  const data=[];
  for(let k=0;k<rowsCount;k++){
    const category={
      name: faker.commerce.department(),
      categoryImage:faker.image.imageUrl(),
      status:faker.random.arrayElement([0,1])
    }

    data.push(category);
  }
  return data;
}