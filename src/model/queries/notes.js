const dbConnection = require('../database/dbConnection.js');

const getNotes = (user_id,cb) => {
  const sql = {
    text: `SELECT * FROM notes WHERE user_id = $1`,
    values: user_id};

  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

// const addNote=()=>{
//
// }

module.exports = {
  getNotes
}
