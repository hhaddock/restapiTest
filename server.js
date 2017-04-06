//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Setting up DB connection
var db;
mongoose.connect('mongodb://root:1234@ds151820.mlab.com:51820/videodata', function(err, db){
  console.log("API is running on port 3000");
  if(!err)
    console.log("DB connection successful");
  db = mongoose.connection;
  app.listen(3000);
});

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
app.use('/api', require('./routes/api'));
