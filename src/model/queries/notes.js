const connection = require('../database/dbConnection.js');
 const getNotes = (user_id, cb) => {
   const sql = {
     text: `SELECT * FROM notes WHERE user_id = $1`,
     values: [user_id] };

   connection.query(sql, (err, res) => {
     if (err) {
       cb(err);
     } else {
       cb(null, res.rows);
     }
   });
 };

 const addNote = (reciever_id, content, cb) => {
   const sql = {
     text: `INSERT INTO notes (user_id,content) VALUES ($1,$2)`,
     values: [reciever_id, content]
   };
   connection.query(sql, (err, res) => {
     if (err) {
       cb(err);
     } else {
       cb(null, res.rows);
     }
   });
 };

 module.exports = {

   getNotes,
   addNote
 };