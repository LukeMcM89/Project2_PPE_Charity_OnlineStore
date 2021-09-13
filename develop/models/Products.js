const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

//IF problems investigate line20+25

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        products_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscorec: true,
        modelName: 'products',
    }
);

module.exports = Products;