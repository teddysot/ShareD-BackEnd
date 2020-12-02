const db = require("../models");
const { Op } = require("sequelize");

const getAllMenu = async (req, res) => {
    const allMenu = await db.Menu.findAll({})
    return res.status(200).send({allMenu});
};

module.exports = {
    getAllMenu,
};