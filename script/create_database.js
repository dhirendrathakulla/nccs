(async () => {
  try {
    require("dotenv").config({
      path: require("path").join(__dirname, "../.env")
    });
    const mysql = require("mysql2/promise");
    let connectionProp = {
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      host: process.env.MYSQL_DB_HOST,
      port: process.env.MYSQL_DB_MIGRATION_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    }
    const dbClient = await mysql.createPool(connectionProp);

    const [result] = await dbClient.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB_NAME};`
    );

    dbClient.end();
    process.exit();
  } catch (error) {
    throw error
  }
})();
