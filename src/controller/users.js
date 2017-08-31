
const users = require('./../model/queries/users.js');

  exports.home = (req, res, next) => {
  users.getUsers((err,result)=>{
    if(err){
      next(err)
    } else {
      res.render('home.hbs', {users: result.rows});

    }
  });
};
