// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();

// app.use(session({secret: 'neahahahaha'}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));







// app.get('/' , (req, res) =>{
  
//     if() res.redirect('/notes/:userId');
//   else{
//     mySession = req.session;
//     res.sendFile(path.join(__dirname , 'index.html'));
//   } 
// });

// app.post('/login' , (req, res) => {
//   mySession.email = req.body.email;
//   res.redirect('/admin');
// });


// app.get('/admin' , (req, res) => {
//   console.log(mySession.email)
//   if(!mySession.email) {
//     res.redirect('/');
//   }
//   else {
//     res.end('<h1>Hello  '+mySession.email+'</h1>'+
//       '<form action="/logout" method="POST"><button>Logout</button></form>');
//   }
// });


// app.post('/logout' , (req, res) => {
//   req.session.destroy((err) => {
//     if(err){
//       console.log(err);
//     }else{
//       mySession = {};
//       res.redirect('/');
//     }
//   })
// });

// app.listen(3001 , () => {
//   console.log('Server runs at port 3001');
// });