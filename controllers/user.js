const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { customAlphabet } = require("nanoid");
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: process.env.EMAIL_OTP,
        pass: process.env.PASSWORD_OTP,
    }

});

const register = async (req, res) => {
    const { username, password, email, phone_number, name, profile_url, role } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });

    if (targetUser) {
        res.status(400).send({ message: "Username already taken." });
    } else {
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
        const hashedPW = bcrypt.hashSync(password, salt);

        const otp = customAlphabet('1234567890', 6)()

        await db.User.create({
            username,
            email,
            phone_number,
            name,
            profile_url,
            role,
            otp,
            isConfirmed: false,
            password: hashedPW
        });

        // ส่ง OTP เข้า email ผู้ใช้
        sendEmail(email, otp)

        res.status(201).send({ message: "User created." });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    const name = targetUser.name.split(' ')
    if (targetUser && targetUser.isConfirmed) {
        if (bcrypt.compareSync(password, targetUser.password)) {
            const token = jwt.sign({
                id: targetUser.id,
                username: targetUser.username,
                email: targetUser.email,
                phone_number: targetUser.phone_number,
                fname: name[0],
                lname: name[1],
                profile_url: targetUser.profile_url,
                role: targetUser.role,
                isConfirmed: targetUser.isConfirmed
            }, process.env.SECRET_KEY, { expiresIn: 3600 });
            res.status(200).send({
                token,
                id: targetUser.id,
                username: targetUser.username,
                email: targetUser.email,
                phone_number: targetUser.phone_number,
                fname: name[0],
                lname: name[1],
                profile_url: targetUser.profile_url,
                role: targetUser.role,
                isConfirmed: targetUser.isConfirmed
            });
        } else {
            res.status(400).send({ message: "Username or password incorrect." });
        }
    } else {
        res.status(400).send({ message: "Username or password incorrect." });
    }
};

const getRole = async (req, res) => {
    const role = req.user.role
    res.send({ role })
}

const getUserById = async (req, res) => {
    const userId = req.params.userId;
    const targetUser = await db.User.findOne({
        where: { id: userId },
        attributes: ["username"]
    });

    res.status(200).send(targetUser)
};

const verifyUser = async (req, res) => {
    const { email, otp: otpNumber } = req.query;
    const targetUser = await db.User.findOne({ where: { email } });
    if (otpNumber === targetUser.otp) {
        targetUser.update({ isConfirmed: true });
        res.status(200).send();
    } else {
        res.status(400).send();
    }
}

const sendOTP = async (req, res) => {
    const { email } = req.query;
    const otp = customAlphabet('1234567890', 6)()
    const targetUser = await db.User.findOne({ where: { email } });
    targetUser.update({ otp })
    sendEmail(email, otp);
    res.status(200).send()
}

function sendEmail(email, otp) {
    // send mail with defined transport object
    var mailOptions = {
        to: email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        }
    });
}

const getUserInfo = async (req, res) => {
    const { username, email, phone_number, name, profile_url, role, isConfirmed } = req.user
    const splitName = name.split(' ')
    const fname = splitName[0]
    const lname = splitName[1]

    res.send({ user: { username, email, phone_number, fname, lname, profile_url, role, isConfirmed } })
}

module.exports = {
    register,
    login,
    getUserById,
    verifyUser,
    sendOTP,
    getRole,
    getUserInfo
};