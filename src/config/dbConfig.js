const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: true,
});

db.sync()
    .then(() => {
        console.log("Database connection successfully");
    })
    .catch((error) => {
        console.log("Database connection error...");
        console.log("error: ", error);
    });
