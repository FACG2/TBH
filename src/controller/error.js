const express = require('express');
const { Router } = express;
const routePageNotFound = Router();




routePageNotFound.get('*', function(req, res){
  res.render('pageNotFound.hbs');
});


module.exports= routePageNotFound;