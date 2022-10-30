'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol,{
        as: "rols",
        foreignKey: "rolId"
  
      });
      User.belongsTo(models.Gender,{
        as: "genders",
        foreignKey: "genderId"
  
      });
      User.hasMany(models.Address,{
        as: "adresses",
        foreignKey: "userId"
  
      });
    }
    
  }
  
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    avatar: DataTypes.STRING,
    genderId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true
  });
  return User;
};