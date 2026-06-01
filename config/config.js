require("dotenv").config();

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

  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT) || 3306,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};