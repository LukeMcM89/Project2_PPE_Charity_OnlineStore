const Shopper = require('./Shopper');
const Products = require('./Products');

Shopper.hasMany(Products, {
  foreignKey: 'product_name',
});

Products.belongsTo(Shopper, {
  foreignKey: 'shopper_id',
});

module.exports = { Shopper, Products };