"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Menus", [
      // 1
      {
        name: "ฮะจังเมน", // ชื่อเมนู
        price: 73.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/4FVDPZCA.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 2
      {
        name: "มิโซะ ราเมน", // ชื่อเมนู
        price: 90.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/K4LIDK3N.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 3
      {
        name: "ไพตัน ราเมน", // ชื่อเมนู
        price: 93.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/ORXJ7UUB.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 4
      {
        name: "ชาชูเมน", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/1VJRBJZX.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 5
      {
        name: "ทงโคะสึ โชยุ ราเมน", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/5WIN3CZY.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 6
      {
        name: "ต้มยำ ชาชูเมน", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/5X0FZ408.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 7
      {
        name: "มิโซะ ชาชูเมน", // ชื่อเมนู
        price: 103.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/OUWSLO93.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 8
      {
        name: "ไพตัน ชาชูเมน", // ชื่อเมนู
        price: 105.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/3T5C2E25.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 9
      {
        name: "เนงิ ชาชูเมน", // ชื่อเมนู
        price: 88.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/UYYQ6DWY.png",// url รูปของเมนูนี้
        category_id: 1, // เลขประเภทอาหาร 
      },
      // 10
      {
        name: "ทันตัมเมน", // ชื่อเมนู
        price: 93.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/UMJS9US1.png",// url รูปของเมนูนี้
        category_id: 2, // เลขประเภทอาหาร 
      },
      // 11
      {
        name: "ทงโคะสึ ทันตัมเมน", // ชื่อเมนู
        price: 95.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/XPJBAH4C.png",// url รูปของเมนูนี้
        category_id: 2, // เลขประเภทอาหาร 
      },
      // 12
      {
        name: "คาราเมน", // ชื่อเมนู
        price: 93.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/7KQ2J52L.png",// url รูปของเมนูนี้
        category_id: 2, // เลขประเภทอาหาร 
      },
      // 13
      {
        name: "เทริยากิ ชิกเก้น ราเมน", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/2MIZ6ORA.png",// url รูปของเมนูนี้
        category_id: 3, // เลขประเภทอาหาร 
      },
      // 14
      {
        name: "โทริโซบะ", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/3N1NW3CC.png",// url รูปของเมนูนี้
        category_id: 3, // เลขประเภทอาหาร 
      },
      // 15
      {
        name: "ญาซัย อิตาเมะ", // ชื่อเมนู
        price: 90.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/RGQRVATN.png",// url รูปของเมนูนี้
        category_id: 3, // เลขประเภทอาหาร 
      },
      // 16
      {
        name: "คาโมะนิ ราเมน", // ชื่อเมนู
        price: 100.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/L8I7Z37X.png",// url รูปของเมนูนี้
        category_id: 4, // เลขประเภทอาหาร 
      },
      // 17
      {
        name: "โกโมะคึ ราเมน", // ชื่อเมนู
        price: 118.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/8NRG7WRY.png",// url รูปของเมนูนี้
        category_id: 5, // เลขประเภทอาหาร 
      },
      // 18
      {
        name: "ต้มยำกุ้ง ราเมน", // ชื่อเมนู
        price: 118.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/JYTEAY54.png",// url รูปของเมนูนี้
        category_id: 5, // เลขประเภทอาหาร 
      },
      // 19
      {
        name: "เรเมน", // ชื่อเมนู
        price: 105.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/JPJO1ET9.png",// url รูปของเมนูนี้
        category_id: 5, // เลขประเภทอาหาร 
      },
      // 20
      {
        name: "ยากิโซบะ", // ชื่อเมนู
        price: 95.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/JATR42MA.png",// url รูปของเมนูนี้
        category_id: 5, // เลขประเภทอาหาร 
      },
      // 21
      {
        name: "โกมะ ซารุ ราเมน", // ชื่อเมนู
        price: 88.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/35NMTFUL.png",// url รูปของเมนูนี้
        category_id: 6, // เลขประเภทอาหาร 
      },
      // 22
      {
        name: "ซารุ ราเมน", // ชื่อเมนู
        price: 93.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/RSII7T7L.png",// url รูปของเมนูนี้
        category_id: 6, // เลขประเภทอาหาร 
      },
      // 23
      {
        name: "ชาฮั่ง", // ชื่อเมนู
        price: 90.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/5M2PADUX.png",// url รูปของเมนูนี้
        category_id: 7, // เลขประเภทอาหาร 
      },
      // 24
      {
        name: "วาฟู ชิกเก้น สลัด", // ชื่อเมนู
        price: 90.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/I7EAMAE3.png",// url รูปของเมนูนี้
        category_id: 8, // เลขประเภทอาหาร 
      },
      // 25
      {
        name: "ลูกชิ้นปลาหมายเลข 8", // ชื่อเมนู
        price: 48.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/O92RX6WM.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 26
      {
        name: "โพเทโท้", // ชื่อเมนู
        price: 58.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/KEWFOO8L.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 27
      {
        name: "เกี๊ยวซ่า 6 ชิ้น", // ชื่อเมนู
        price: 73.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/1LF4YSYG.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 28
      {
        name: "เกี๊ยวซ่า 12 ชิ้น", // ชื่อเมนู
        price: 144.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/1LF4YSYG.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 29
      {
        name: "เอบิโรล", // ชื่อเมนู
        price: 75.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/MVVEQCSN.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 30
      {
        name: "เทบะ คาระ", // ชื่อเมนู
        price: 75.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/KV8D4RNO.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 31
      {
        name: "ทาโกะยากิ", // ชื่อเมนู
        price: 85.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/9Q99I662.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 32
      {
        name: "คาราอะเกะ 4 ชิ้น", // ชื่อเมนู
        price: 85.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/JXB6CGZH.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 33
      {
        name: "คาราอะเกะ 8 ชิ้น", // ชื่อเมนู
        price: 168.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/JXB6CGZH.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 34
      {
        name: "เทริยากิ ชิกเก้น", // ชื่อเมนู
        price: 95.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/R2U0V99E.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 35
      {
        name: "คาโมะนิ", // ชื่อเมนู
        price: 98.00, // ราคาอาหาร
        image_url: "https://www.hachiban.co.th/_files/product/full/PRREX63T.png",// url รูปของเมนูนี้
        category_id: 9, // เลขประเภทอาหาร 
      },
      // 36
      {
        name: "น้ำเปล่า", // ชื่อเมนู
        price: 20.00, // ราคาอาหาร
        image_url: "https://aumento.officemate.co.th/media/catalog/product/0/0/0001689_x2.jpg?imwidth=640",// url รูปของเมนูนี้
        category_id: 10, // เลขประเภทอาหาร 
      },
      // 37
      {
        name: "โค๊ก", // ชื่อเมนู
        price: 50.00, // ราคาอาหาร
        image_url: "https://static.bigc.co.th/media/catalog/product/8/8/8855199141018.jpg",// url รูปของเมนูนี้
        category_id: 10, // เลขประเภทอาหาร 
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => { },
};

