var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "./client/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+"/client/views");
app.set("view engine", "ejs");

require("./server/config/mongoose.js");
var routes_setter = require("./server/config/routes.js")
routes_setter(app);


app.listen(8000, function() {
  console.log("listening on port 8000");
})