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

const { nanoid } = require('nanoid')

io.on("connection", (socket) => {
    console.log(`Connected: [${socket.userId}]${socket.userName}`);

    socket.on("disconnect", () => {
        console.log(`Disconnected: [${socket.userId}]${socket.userName}`);
    });

    socket.on('createTable', (res) => {

        const {tableNumber} = res
        // Generate Code
        const tableCode = nanoid(6);
        
        // Create Table
        const newTable = {
            users: [],
            code: tableCode// Code จากข้างบน
        }

        console.log(`createTable ${newTable.code} ${newTable.users}`);
        // Update Database
        db.Table.create({table_number:tableNumber, total_price: 0, status:"Unpaid", room_code: tableCode})
        res.status(201).send(newPost);
        
        tableList.push(newTable)
        console.log('tableCode',tableCode)
        socket.emit('createTable', { tableCode })
    })
});
