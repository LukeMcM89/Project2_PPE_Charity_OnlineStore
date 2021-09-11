const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Products { }


Inventory.init(
    {
        id: {
            types: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        inventory_available: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id',
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscorec: true,
        modelName: 'inventory',
    },
);

module.exports = Inventory;