const express = require('express');
const path = require('path');
const app = express();

// handle CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Tell express where to serve static files from
app.use(express.static(__dirname + '/public'));

// Render homepage.
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// render success page
app.get('/success', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/success.html'));
});

app.listen(4321, function(){
  console.log('vote app berjalan di port 4321');
})
