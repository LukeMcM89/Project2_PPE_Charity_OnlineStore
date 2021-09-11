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
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            types: DataTypes.DATEONLY,
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