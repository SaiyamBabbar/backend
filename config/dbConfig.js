const { Sequelize } = require("sequelize");

// Choose either PostgreSQL or MySQL depending on your setup
const sequelize = new Sequelize("dbname", "user", "password", {
  host: "localhost",
  dialect: "postgres", // Use 'mysql' if using MySQL
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
