// Node js
const express = require('express');
const app = express();
const port = 9090;

// console.log(app.get);

app.get('/', function (request, response) {
    
    console.log('hello world');
    response.send('hell bbo');
});

app.get('/trainees', function(request, response){
    console.log('recieved');
    
    response.send(trainees);
});


app.listen(port, function(){
    console.log('hello');
});