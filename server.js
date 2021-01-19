// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/timestamp/:date_string", function (req, res) {
  let date_string = req.params.date_string;
  const date = new Date(date_string);
  if(date_string.match(/\d{5,}/)){
    date_string = parseInt(date_string);
  const date = new Date(date_string);
  res.json({unix: date.getTime() , utc:date.toUTCString()});
  }
  if(date.toString() == "Invalid Date"){
    res.json({ error : "Invalid Date" })
  }
  else{
  const date = new Date(date_string);
  res.json({unix: date.getTime() , utc:date.toUTCString()});
}
  
});

app.get("/api/timestamp/", function (req, res){
  const date = new Date();
  res.json({unix:date.getTime() , utc:date.toUTCString()})
})



// // listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port http://localhost:3000');
});
