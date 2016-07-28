'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

// require routes files from routes dir

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('<h1>Final Project</h1>');
});

// api routes

app.listen(PORT, function () {
  console.log('Listening on port', PORT);
});