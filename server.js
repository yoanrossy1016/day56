var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('dist'));

app.use('/dist', express.static('dist'));


//identify unused port between 1520 and 1540
var port = 1541;
http.listen(port, function(){
  console.log('listening on https://seattleacademy.software/'+port);
});