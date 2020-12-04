module.exports = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("UserTable", {
    }, {
        tableName: "UserTables",
        timestamps: false
    });

    UserTable.associate = models => {
        UserTable.belongsTo(models.User, { foreignKey: "user_id" });
        UserTable.belongsTo(models.Table, { foreignKey: "table_id" });
    };

    return UserTable;
}