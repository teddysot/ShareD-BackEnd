module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_url: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("Customer", "Restaurant", "Kitchen", "Admin"),
      allowNull: false
    },
    otp: {
      type: DataTypes.STRING,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: "Users",
    timestamps: false
  });

  User.associate = models => {
    User.hasMany(models.UserTable, { foreignKey: "user_id" });
    User.hasMany(models.MenuCategory, { foreignKey: "user_id" });
    User.hasMany(models.Invoice, { foreignKey: "user_id" });
    User.hasMany(models.OrderedMenu, { foreignKey: "user_id" });
  };

  return User;
}