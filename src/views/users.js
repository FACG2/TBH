const express = require('express');
const { Router } = express;
const userRouter = Router();
const users = require('./../model/queries/users.js');




userRouter.get('/home',(req, res) => {
  users.getUsers((err,result)=>{
    if(err){
      console.log(err);
    }
    else{
        res.render('home.hbs',{users:result.rows});
    }
  })

});

//
// userRouter.get('/register', (req, res) => {
//   console.log('qqqqqqqqqqqqqqq');
//     res.render('logSignup.hbs');
// });

//
// userRouter.post('/register', (req, res) => {
//   console.log(req.body);
//   users.register(req.body.usaname, req.body.password, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//        res.redirect(`/users/${req.params.reciever_id}/addNote`);
//     }
//   });
// });

module.exports= userRouter;
