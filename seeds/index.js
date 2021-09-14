const sequelize = require('../config/connection');
const productData = require('./products');
const shopperData = require('./shopper');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await productData();
  await shopperData();
  process.exit(0);
};
seedAll();