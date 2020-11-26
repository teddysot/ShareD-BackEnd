require("dotenv").config();
require("./config/passport");
const db = require("./models");
const express = require("express");
const cors = require("cors")
const fileUpload = require('express-fileupload');
const app = express();

//Setup Cross Origin / Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("uploads"));

const userRoutes = require("./routes/user")
const uploadRoutes = require("./routes/upload")

// Routes
app.use("/user", userRoutes);
app.use("/upload", uploadRoutes);

// Running Server
const server = app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT);
});

db.sequelize.sync({ force: false }).then(() => {
    console.log("Completed Connect And Sync");
});

// Socket.io 
const io = require("socket.io")(server);
const jwt = require("jsonwebtoken");

io.use(async (socket, next) => {
    try {
        const token = socket.handshake.query.token;
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        socket.userId = payload.id;
        socket.userName = payload.username
        next();
    } catch (err) { }
});

const users = []
let tableList = []

const { nanoid } = require('nanoid')

io.on("connection", (socket) => {
    console.log(`Connected: [${socket.userId}]${socket.userName}`);
    // หาโต๊ะที่ยัง active ใน database
    db.Table.findAll({ where: { status: "Active" }, attributes: ["table_number", "room_code", "id"] })
        .then((res) => {
            const newTableList = []
            // loop ไปทีละโต๊ะ
            res.map((table) => {
                const { id, table_number, room_code } = table
                const newUsers = []
                //หา user ว่าใครอยู่ในโต๊ะนั้นบ้าง
                db.UserTable.findAll({ where: { table_id: id }, attributes: ["user_id"] })
                    .then((res) => {
                        //loop เข้าไปในข้อมูลของ user ในโต๊ะนั้น
                        res.map((user) => {
                            // หาว่า user นั้นชื่อว่าอะไรใน database
                            db.User.findOne({ where: { id: user.user_id }, attributes: ["name", "profile_url"] })
                                .then((res) => {
                                     // หาชื่อจริง
                                    const firstName = res.name.split(' ')[0]

                                    const user = {
                                        username: firstName,
                                        profile_url: res.profile_url
                                    }
                                    newUsers.push(user)
                                })
                        })
                    })
                // ดึงค่ามาใส่ในโต๊ะใหม่
                const newTable = {
                    users: newUsers,
                    number: table_number,
                    code: room_code// Code จากข้างบน
                }
                // เพิ่มเข้าไปใน list ใหม่ของโต๊ะ
                newTableList.push(newTable)
                // เปลี่ยน list โต๊ะเก่าเป็น list โต๊ะใหม่
                tableList = newTableList
            })
            // ส่งข้อมูลไปให้ fontend ของทุกคน
            io.emit('fetchTable', { tableList })
        })

    socket.on("disconnect", () => {
        console.log(`Disconnected: [${socket.userId}]${socket.userName}`);
    });

    socket.on('createTable', (res) => {

        const { tableNumber } = res
        // Generate Code
        const tableCode = nanoid(6);

        // Create Table
        const newTable = {
            users: [],
            number: tableNumber,
            code: tableCode// Code จากข้างบน
        }

        console.log(`createTable ${tableCode} ${tableNumber}`);
        // Update Database
        db.Table.create({ table_number: tableNumber, room_code: tableCode, total_price: 0, status: "Active" })
            .then((res) => {
                tableList.push(newTable)
                console.log('tableCode', tableCode)
                socket.emit('createTable', { tableCode, status: 200 })
            })
            .catch((err) => {
                socket.emit('createTable', { status: 400 })
            })

        io.emit('fetchTable', { tableList })
    })
});
