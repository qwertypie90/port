var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.listen(port, function() {
    console.log("Your site listening on: " + port);
});