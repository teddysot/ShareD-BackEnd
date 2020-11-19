module.exports = (sequelize, DataTypes) => {
    const MenuCategory = sequelize.define("MenuCategory", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: "MenuCategories",
        timestamps: false
    });

    MenuCategory.associate = models => {
        MenuCategory.belongsTo(models.User, { foreignKey: "user_id" });
        MenuCategory.hasMany(models.Menu, { foreignKey: "category_id" });
    };

    return MenuCategory;
}