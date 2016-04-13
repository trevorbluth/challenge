var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/challengeAPI');

var Challenge = require('./models/challengeModel');

var app = express();

var port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

challengeRouter = require('./Routes/challengeRoutes')(Challenge);


app.use('/api/challenges', challengeRouter); 


app.get('/', function(req, res){
    res.send('Hopefully this API works!');
});

app.listen(port, function(){
    console.log('Gulp is running the challenge on  PORT: ' + port);
});