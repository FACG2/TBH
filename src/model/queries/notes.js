 const connection = require('../database/dbConnection.js');
 const getNotes = (user_id, cb) => {
   console.log(user_id);
   const sql = {
     text: `SELECT * FROM notes WHERE user_id = $1`,
     values: [user_id] };

   connection.dbconnection.query(sql, (err, res) => {
     console.log(res);
     if (err) {
       console.log('err connection', err);
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
   connection.dbconnection.query(sql, (err, res) => {
     if (err) {
       cb(err);
     } else {
       cb(null, res.rows);
     }
   });
 };
 // getNotes(1,(err,res)=>{
 //   console.log(res);
 // })
 // addNote(1, 'new new', (err, result) => {
 //   if (err) {
 //     console.log(err);
 //   } else {
 //     console.log(result);
 //   }
 // });
 module.exports = {

   getNotes,
   addNote
 };
