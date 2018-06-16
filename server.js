var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://Icarus:AmdFx8320@ds018238.mlab.com:18238/lantern_dragon", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to db");
  }
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is running");
});

var commentSchema = new mongoose.Schema({
  user: String,
  content: String,
  date: {type: Date, default: Date.now}
});
