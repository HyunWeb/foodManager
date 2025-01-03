const { config } = require("dotenv");

require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DIALECT,
  timezone: process.env.DB_TIMEZONE,
};

const test = {};
const production = {};
module.exports = { development };
