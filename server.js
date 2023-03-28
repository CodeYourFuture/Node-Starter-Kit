const express = require("express");
const app = express();
const port = 9090;

const trainees = [
    { name: "Olga", region: "Nort-west" },
    { name: "Michael", region: "Nort-west" },
    { name: "Elba", region: "Manchester" },
    { name: "Robert", region: "London" },
    { name: "Patrick", region: "Essex" },
    { name: "Silvia", region: "London" }
];

//http://localhost:9090 
app.get("/", function (request, response){
    console.log(request);
    console.log("hello world, you've reached my API");
    response.send("hello Karla, you are getting the response from my server");
})

//http://localhost:9090    we were calling this in the postman
//http://localhost:9090/trainees?region=London       and this was the second query in the second handeler

app.get("/trainees", function (request, response){
    console.log(request.query, "<-------request.query" );
    console.log("receiving a request to the /trainees endPoint");
    response.send({ trainees });
})

/*

If we change the get on postman the url =  " http://localhost:9090/trainees?region=London"  we are asking, if you data trainees has 
"region", give "london", and with the console.log in the line 25 we are
sending back to our terminal which paramentre is requiring in the postman. this is the result that we expect after we 
sent the url:   

after run this:
----npm start-----

> node-starter-kit@1.0.0 start
> node server.js

my application is now listening on port 9090
{ region: 'London' } <-------request.query

======once we change the query on postam we will received diferent data======

postman   ---------> http://localhost:9090/trainees?region=Birmigan

terminal ----------> 
{ region: 'Birmigan' } <-------request.query
receiving a request to the /trainees endPoint


*/


app.listen(port, function () {
    console.log("my application is now listening on port 9090");
});



// console.log(app.get); this was using like test

