module.exports = (sequelize, DataTypes) => {
    const Table = sequelize.define("Table", {
        table_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("Active", "Finished", "Canceled"),
            allowNull: false
        }
    }, {
        tableName: "Tables"
    });

    Table.associate = models => {
        Table.hasMany(models.UserTable, { foreignKey: "table_id" });
        Table.hasMany(models.Invoice, { foreignKey: "table_id" });
        Table.hasMany(models.OrderedMenu, { foreignKey: "table_id" });
    };

    return Table;
}