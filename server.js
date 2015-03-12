var express = require('express');
var app = express();

app.use(express.static('dist'));
app.get('/*', function(req, res, next){
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(4500, function(){
  console.log('on port 4500');
});
