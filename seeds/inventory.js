const { DataTypes, INTEGER } = require('sequelize/types');
const { Inventory } = require('../models');

const inventoryData = [
    {
        inventory_id: 1,
        inventory_available: 10,
    },
];

const seedInventory = () => Inventory.bulkcreate(inventoryData);

module.exports = seedInventory;