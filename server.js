// Get dependencies

var mongoose = require('mongoose'),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useMongoClient: true})
  .then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp`)})
  .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/todoapp`)});

