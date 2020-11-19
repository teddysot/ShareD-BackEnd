module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("Menu", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    }, {
        tableName: "Menus",
        timestamps: false
    });

    Menu.associate = models => {
        Menu.belongsTo(models.MenuCategory, { foreignKey: "category_id" });
    };

    return Menu;
}