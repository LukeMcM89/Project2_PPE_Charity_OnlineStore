const sequelize = require('../config/connection');
const productsData = require('./products');
const shopperData = require('./shopper');
const covidData = require('../')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await productsData();
  await shopperData();
  process.exit(0);
};
seedAll();