var path = require('path');
var fs = require('fs');
var express = require('express');

// create app //
var app = express();

// view engine //
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
    fs.readFile(path, 'utf-8', callbacks);
});

// middleware //
app.use(express.static(__dirname));

// routers //
app.get('/', function(req, res){
    res.sendfile(path.join(__dirname, 'index.html'));
});

// error handler
app.use(function (err, req, res, next){
  res.static(err.status || 500);
});

//server app
var port = 8000;
app.listen(port, function(){
   console.log('running at localhost:'+port);
});

//module.exports = app;

