const mysql = require('mysql2/promise');

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PW,
  MYSQL_DB,
} = process.env;

pool = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PW,
  database: MYSQL_DB,
  connectTimeout: 5000,
  connectionLimit: 30 //default 10
})

module.exports = {
  pool,
  getConnectionPool: (callback) => {
    pool.getConnection((err, conn) => {
        if (err) {
            console.error(err);
        } else {
            callback(conn);
        }
    });
  }
}
