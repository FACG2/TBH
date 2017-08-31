const connection = require('../database/dbConnection.js');
// const pg = require('pg');
// const db = pg(connection);
require('env2')('./config.env');





const register = (username, password, cb) => {
  const sql = {
    text: `INSERT INTO users (username,password) VALUES ($1,$2)`,
    values: [username, password]
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const existed = new Error('existed user');
      cb(existed);
    } else {
      cb(null, result);
    }
  });
};

const getUsers = (cb) => {
  const sql = {
    text: `SELECT id,username FROM users`
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const getErr = new Error('Error in getting users');
      cb(getErr);
    } else {
      cb(null, result);
    }
  });
};

module.exports = {getUsers};
