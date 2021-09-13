const { Products } = require('../models');

const productsData = [
    {
        products_name: 'Test',
        products_description: 'Yada yada yada yada',
        //date_created: 'April 20, 2021 07:00:00',
    },
];

const seedProducts = () => Products.bulkcreate(productsData);

module.exports = seedProducts;