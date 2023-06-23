'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name:'Polarized Lens',
        price: 5000,
        description: '2023 Eyewear Brand Hot Sale Round Sunglasses Polarized Lens Men Designer Driving Sunglasses',
        categoryId: 4,
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Beam Polarized',
        price: 6500,
        description: "UNOC 2022 New Double Beam Polarized Sunglasses Men's Trend Riding Driving Metal Sunglasses For Man",
        categoryId: 5,
        quantity: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Vintage Retro Gothic Steampunk',
        price: 7000,
        description: 'Vintage Retro Gothic Steampunk Mirror Sunglasses Gold and Black Round Circle Men custom Sunglasses UV400',
        categoryId: 6,
        quantity: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Products', null, {});
  }
};
