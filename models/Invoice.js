module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define("Invoice", {
        menu: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("Unpaid", "Paid"),
            allowNull: false,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM("Total", "Individual"),
            allowNull: false
        }
    }, {
        tableName: "Invoices",
        timestamps: false
    });

    Invoice.associate = models => {
        Invoice.belongsTo(models.User, { foreignKey: "user_id" });
        Invoice.belongsTo(models.Table, { foreignKey: "table_id" });
        Invoice.hasMany(models.OrderedMenu, { foreignKey: "invoice_id" });
    };

    return Invoice;
}