const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Shopper extends Model {
    checkPassword(loginPw) {
        //COME BACK TO THIS 
    }
};

Shopper.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [15],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscorec: true,
        modelName: 'shopper',
    }
);

module.exports = Shopper;