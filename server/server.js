var path = require('path');
var fs = require('fs');
var express = require('express');

var indexRoutes = require('./routes/index');

// create app //
var app = express();

// view engine //
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
    fs.readFile(path, 'utf-8', callbacks);
});

// middleware //
app.use(express.static(path.join(__dirname, '../client')));


app.use('/', indexRoutes);


// error handler
app.use(function (err, req, res, next){
  res.static(err.status || 500);
});

module.exports = app;

