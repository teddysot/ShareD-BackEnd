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
const tableList = []
/*
tableList
    {
        code: '324sf'
        users: ['cake','pup']
    }
*/

io.on("connection", (socket) => {
    console.log(`Connected: [${socket.userId}]${socket.userName}`);

    socket.on("disconnect", () => {
        console.log(`Disconnected: [${socket.userId}]${socket.userName}`);
    });

    // Input Code
    socket.on("joinTable", (res) => {
        const { tableCode } = res
        // หาใน database ว่ามี Table Code อยู่ไหม
        db.Table.findOne({ where: { room_code: tableCode } })
            // หาเจอ
            .then(res => {
                // เข้าลูปหา table code ใน table list
                tableList.map(table => {
                    // ให้ตรวจสอบ tableCode ถ้ามีก็ส่งข้อมูลไปบรรทัดต่อไป
                    if (table.code === tableCode) {
                        // ข้อมูล user เก็บไว้ใน array users
                        table.users.push(socket.userName)
                        // join เข้าห้อง
                        socket.join(`${tableCode}`)
                        // io.in ส่งให้ทุกคนที่อยู่ในห้อง .emit ส่งรายชื่อคนในห้องกลับไปหาไปฝั่ง front
                        io.in(`${tableCode}`).emit('joinTable', { users: table.users })
                    }
                    // หาใน server ไม่เจอ
                    else {
                        socket.emit("joinTable", 404)
                    }
                })
            })
            // หาใน database ไม่เจอ
            .catch(err => {
                // ถ้าหาไม่เจอส่งข้อความแจ้ง users ว่าไม่มีข้อมูล
                socket.emit("joinTable", 404)
            })


    })
});

