const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const register = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });

    if (targetUser) {
        res.status(400).send({ message: "Username already taken." });
    } else {
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
        const hashedPW = bcrypt.hashSync(password, salt);

        await db.User.create({
            username,
            password: hashedPW
        });

        res.status(201).send({ message: "User created." });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    if (targetUser) {
        if (bcrypt.compareSync(password, targetUser.password)) {
            const token = jwt.sign({ id: targetUser.id, username: targetUser.username }, process.env.SECRET_KEY, { expiresIn: 3600 });
            res.status(200).send({ token });
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
        attributes: ["id", "name", "profile_url"]
    });

    res.status(200).send({ targetUser })
};

module.exports = {
    register,
    login,
    getUserById,
};