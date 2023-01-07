const { request, response } = require("express");
const express = require ("express");
const app = express(); ///variable, and App is ubject//
const port = 9090;

const trainees = [
    {name: "A", region: "north-west"},
    {name: "B", region: "north-west"},
    {name: "C", region: "north-west"},
    {name: "D", region: "north-west"},
    {name: "E", region: "north-west"},
    {name: "C", region: "north-west"},

];


//http://localhost:9090

app.get('/', function(request, response) {
    console.log('Hello world');
    response.send("Hello world, you are getting a response from my server....")
});

//http://localhost:9090/trainees
//http://localhost:9090/trainees?region=north-west

app.get("/trainees", function(request, response){
    console.log(request.query.region, "....request.query.region");
    console.log("received a request to the /trainees");
    response.send({trainees});
});


app.listen(port, function() {
    console.log('my application is now listening on port 9090...');
});