'use strict';

const {
    Model 
} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models){
            // mendefinisakan asosiasi
        }
    }
    User.init ({
        username : DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};