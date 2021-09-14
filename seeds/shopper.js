const { DataTypes, INTEGER } = require('sequelize/');
const { Shopper } = require('../models');

const shopperData = [
    {
        shopper_id: 1,
        shopper_name: 'Test',
        shopper_password: 'Testerson',
        date_created: '1/1/21',
    },  
];

const seedShopper = () => Shopper.bulkcreate(shopperData);

module.exports = seedShopper;