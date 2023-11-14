const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("jwt", "root", null, {
  host: "localhost",
  dialect: "postgres",
  port: 5432, // Cổng mặc định của PostgreSQL
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
