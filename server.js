//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Setting up DB connection
var db;
mongoose.connect('mongodb://root:1234@ds151820.mlab.com:51820/videodata', function(err, db){
  console.log("API is running on port 8000");
  if(!err)
    console.log("DB connection successful");
  db = mongoose.connection;
  app.listen(8000);
});

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Routing
app.use('/api', require('./routes/api'));
