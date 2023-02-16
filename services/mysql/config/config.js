'use strict';
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ 
  path: path.join(process.cwd(), '.env')
});

module.exports = {
  development: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_MIGRATION_PORT,
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_MIGRATION_PORT,
    dialect: "mysql"
  },
  demo: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_MIGRATION_PORT,
    dialect: "mysql"
  },
  production: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_MIGRATION_PORT,
    dialect: "mysql"
  },
  uat: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_MIGRATION_PORT,
    dialect: "mysql"
  }
}
