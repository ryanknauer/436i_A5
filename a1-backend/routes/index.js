var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-xs4rj.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let Messages = require('../messages.model');
const mongoose = require('mongoose')
var path = require('path');

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const app = express();
/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname + '/../client/build')))
/*React root*/
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


//var messages =  [{name:'ryan', text: 'hello world'}, {name:'carl', text: 'hello ryan'}]

/* GET home page. */
router.get('/messages', function(req, res, next) {
  res.header('Content-Type', 'application/json')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('heelllloooo');
  console.log(Messages)
  Messages.find(function(err, msgs){
    if(err){
      console.log(err);
    }
    else {
      console.log('heelllloooo2');
      res.json(msgs);
    }
  });
});


router.post('/messages', function(req, res, next) {
  res.header('Content-Type', 'application/json')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
  console.log('pushing new message')
  console.log(req.body)
  let message = new Messages(req.body);
  message.save()
  res.send(JSON.stringify(message));
});

// router.post('/clear', function(req, res, next) {
//   res.header('Content-Type', 'application/json')
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
//   messages = []
//   res.send('success!');
// });






module.exports = router;
