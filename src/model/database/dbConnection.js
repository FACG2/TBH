
require('env2')('./config.env');
const pg = require('pg');

// const herokuDB = {
//   host: process.env.HEROKU_HOST,
//   user: process.env.HEROKU_USER,
//   password: process.env.PASSWORD,
//   database: process.env.HEROKU_DB,
//   ssl: true,
// };

const config = {
  host: 'localhost',
  port: 5432,
  database: process.env.LOCAL_DB,
  user:process.env.LOCAL_USERNAME,
  password:process.env.LOCAL_PASSWORD
};


function dbconnection(config, cb) {
    var client = new pg.Client(config);
    client.connect(function(err) {
        if (err) {
            cb(err, undefined);
            return;
        }
    });
    return client;
}



// const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

 // const db = new pg.Client(connection);
module.exports =  {
  dbconnection: dbconnection(config, function(err) {
    }),
  }
