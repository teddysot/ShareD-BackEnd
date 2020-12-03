"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("MenuCategories", [
      {
        name: "ราเมนหมู", // ชื่อประเภท 1
        user_id: 1, // เลขร้าน
      },
      {
        name: "ราเมนหมู, ไก่", // ชื่อประเภท 2
        user_id: 1, // เลขร้าน
      },
      {
        name: "ราเมนไก่", // ชื่อประเภท 3
        user_id: 1, // เลขร้าน
      },
      {
        name: "ราเมนเป็ด", // ชื่อประเภท 4
        user_id: 1, // เลขร้าน
      },
      {
        name: "ราเมนทะเล", // ชื่อประเภท 5
        user_id: 1, // เลขร้าน
      },
      {
        name: "ราเมนผัก", // ชื่อประเภท 6
        user_id: 1, // เลขร้าน
      },
      {
        name: "ข้าว", // ชื่อประเภท 7
        user_id: 1, // เลขร้าน
      },
      {
        name: "สลัด", // ชื่อประเภท 8
        user_id: 1, // เลขร้าน
      },
      {
        name: "อาหารทานเล่น", // ชื่อประเภท 9
        user_id: 1, // เลขร้าน
      },
      {
        name: "เครื่องดื่ม", // ชื่อประเภท 10
        user_id: 1, // เลขร้าน
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => { },
};

