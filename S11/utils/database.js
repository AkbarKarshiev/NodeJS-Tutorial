const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs-tutorial',
  password: 'gentoo'
});

module.exports = pool.promise();