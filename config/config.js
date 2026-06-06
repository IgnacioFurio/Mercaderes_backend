require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const getProductionConfig = () => {
  return {
    username: process.env.DB_USERNAME || process.env.MYSQLUSER,
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
    database: process.env.DB_DATABASE || process.env.MYSQLDATABASE,
    host: process.env.DB_HOST || process.env.MYSQLHOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT || process.env.MYSQLPORT) || 3306,

    dialectOptions:
      process.env.DB_SSL === "true"
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
  };
};

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "Mercaderes",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3309,
  },

  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },

  production: getProductionConfig(),
};