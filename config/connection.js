const Sequelize = require("sequelize");
require("dotenv").config();

var sequelize;
if (process.env.IS_HEROKU == "false") {
  console.log("Local");
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
} else {
  console.log("Non-Local");
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}

module.exports = sequelize;
