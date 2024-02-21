const mysql = require('mysql2/promise');
const config = require('../config/database.js');

const pool = mysql.createPool({
  host: config['LOCAL'].MYSQL_HOST,
  user: config['LOCAL'].MYSQL_USER,
  password: config['LOCAL'].MYSQL_PW,
  database: config['LOCAL'].MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports.execute = async (query) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(query); 
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (connection) connection.release();
  }
};
