const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());


const bodyParser = require('body-parser');

var currentString = "";
var lastModified = "";
var currentTime = "";


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/api/messageform', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/api/getmessages', function(req, res){
   var current = new Date();
   var hours = current.getHours();         // 0-23
   var minutes = current.getMinutes();     // 0-59
   var seconds = current.getSeconds();
   currentTime = `${hours}:${minutes}:${seconds}`;
   res.json({"currentString": currentString, "currentTime": currentTime, "lastModified": lastModified});
});

app.post('/api/postmessages',function(req,res){
  res.send("current message is " + req.body.message);
  const { message } = req.body;

  if (!message) {
    return res.status(400).send('Message is required');
  } 
  var modify = new Date();
  var hours = modify.getHours();
  var minutes = modify.getMinutes();
  var seconds = modify.getSeconds();
  currentString = req.body.message;
  lastModified = `${hours}:${minutes}:${seconds}`;
});

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });
