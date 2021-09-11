const { DataTypes, INTEGER } = require('sequelize/types');
const { Products } = require('../models');

const productsData = [
    {
        products_id: 1,
        products_name: 'Test',
        products_description: 'Yada yada yada yada',
        date_created: '1/1/21',
    },
];

const seedProducts = () => Products.bulkcreate(productsData);

module.exports = seedProducts;