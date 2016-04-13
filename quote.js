var express = require('express');
var app = express();
var quote = {};

app.use('/quote'); 

app.get('/quote', function(req, res) {
   var quote = {
       words : 'Doh!',
       person : 'Homer Simpson',
       year : '',
       }
   } 
   res.send(quote);
});


    
app.listen(9000);