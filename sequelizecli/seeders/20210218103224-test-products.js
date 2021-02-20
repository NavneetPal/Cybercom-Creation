'use strict';

const faker=require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const items=generateFakeItems(100);
    await queryInterface.bulkInsert('Products', items, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

function generateFakeItems(rowsCount){

  //generate code for fake data
  const data=[];

  for(let k=0;k<rowsCount;k++){

    const newItem={
      name:faker.commerce.productName(),
      description:`This is the test content for product ${k+1}`,
      amount:faker.commerce.price(),
      status:faker.random.arrayElement(["active","inactive"])
    }
    data.push(newItem);
  }

  return data;
}