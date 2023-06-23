'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name:'For Women',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'For Men',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Retro',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});
  }
};
