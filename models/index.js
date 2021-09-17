const Shopper = require('./Shopper');
const Products = require('./Products');
const Project = require('./Project');

Shopper.hasMany(Project, {
  foreignKey: 'shopper_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Shopper, {
  foreignKey: 'shopper_id'
});

Shopper.hasMany(Products, {
  foreignKey: 'product_name',
});

Products.belongsTo(Shopper, {
  foreignKey: 'shopper_id',
});

module.exports = { Shopper, Products, Project };