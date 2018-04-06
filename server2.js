// var mongojs = require('mongojs');
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
//Intialize express
var app = express();

PORT = 3500

//Database Configuration
// Save the URL of our database as well as the name of our collection

// var databaseUrl = 'flightdata';
// var collections = ['asitrep'];


// Connecting MongoDB to database and collection table
// var db = mongojs(databaseUrl, collections);

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/flightdata", {
  // useMongoClient: true
}).then(function(err){
  if (err) throw err;
console.log("connected databse");
});

//If error on database throw err
// db.on("error", function(err){
//   console.log('database error', err);
// });

//On connection, log connection
// db.on('connect', function(){
//   // fs.readfile('Asitrep.csv','utf8', function(error,data){
//   //   if(error){
//   //   console.log(error);
//   // }
//   // console.log(data);
//   // })
// });

app.get('/all', function(req,res){
// db.asitrep.find({}, function(err,found){
//   if (err){
//   console.log(err);
// } else {
//   res.json(found);
fs.readFile('Asitrep.csv','utf8', function(error,data){
  if(error){
  console.log(error);
}
res.json(data);
})
});


app.get("/", function(req, res) {
  res.send("Hello world");
});


app.listen(PORT, function(){
  console.log(`app running on port ${PORT}`);
});
