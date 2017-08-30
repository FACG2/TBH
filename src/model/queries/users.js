const connection = require('../database/dbConnection.js');
const register = (username, password,cb) => {
  const sql = {
    text: `INSERT INTO users (username,password) VALUES ($1,$2)`,
    values: [username, password]
  };
  connection.dbconnection.query(sql, (err, result) => {
    if (err) {
      const existed=new Error('existed user')
      console.log('err register', err);
      cb(existed);
    } else {
      cb(null, result);
    }
  });
};

const getUsers = (cb) => {
  const sql = {
    text: `SELECT id,username FROM users`,
  };
  connection.dbconnection.query(sql, (err, result) => {
    if (err) {
      const existed=new Error('existed user')
      console.log('err', err);
      cb(existed);
    } else {
      cb(null, result);
    }
  });
};


// register('aaa2',1115,(err,res)=>{
//   if(err){
//     console.log('existed user');
//   }
//   else{
//     console.log(res);
//   }
// });

module.exports={getUsers};
