"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          fileName: "w-1.webp",
          productId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "w-2.webp",
          productId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "w-3.webp",
          productId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "w-4.webp",
          productId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "m-1.webp",
          productId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "m-2.webp",
          productId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "m-3.webp",
          productId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "m-4.webp",
          productId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          fileName: "r-1.webp",
          productId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "r-2.webp",
          productId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "r-3.webp",
          productId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "r-4.webp",
          productId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "r-5.webp",
          productId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
