module.exports = (sequelize, DataTypes) => {
    const OrderedMenu = sequelize.define("OrderedMenu", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "OrderedMenus",
        timestamps: false
    });

    OrderedMenu.associate = models => {
        OrderedMenu.belongsTo(models.Invoice, { foreignKey: "invoice_id" });
        OrderedMenu.belongsTo(models.Table, { foreignKey: "table_id" });
        OrderedMenu.belongsTo(models.User, { foreignKey: "user_id" });
    };

    return OrderedMenu;
}