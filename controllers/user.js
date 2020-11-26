const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const register = async (req, res) => {
    const { username, password, email, phone_number, name, profile_url, role, isConfirmed } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });

    if (targetUser) {
        res.status(400).send({ message: "Username already taken." });
    } else {
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
        const hashedPW = bcrypt.hashSync(password, salt);

        await db.User.create({
            username,
            email,
            phone_number,
            name,
            profile_url,
            role,
            isConfirmed,
            password: hashedPW
        });

        res.status(201).send({ message: "User created." });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    const name = targetUser.name.split(' ')
    if (targetUser) {
        if (bcrypt.compareSync(password, targetUser.password)) {
            const token = jwt.sign({
                id: targetUser.id
            }, process.env.SECRET_KEY, { expiresIn: 3600 });
            res.status(200).send({
                token,
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

const getUserById = async (req, res) => {
    const userId = req.params.userId;
    const targetUser = await db.User.findOne({
        where: { id: userId },
        attributes: ["username"]
    });

    res.status(200).send(targetUser)
};

module.exports = {
    register,
    login,
    getUserById,
};