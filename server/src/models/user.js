"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      roles: DataTypes.INTEGER,
      status:DataTypes.INTEGER,
      avatar: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
