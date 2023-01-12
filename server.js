const trainees =[
 {name: "Miguel", region: "Manchester"},
 {name: "Sandra", region: "Manchester"},
 {name: "Zaw", region: "Manchester"},
 {name: "Dawood", region: "London"},
 {name: "Leila", region: "London"},
];




const { response } = require("express");
const express = require("express");
const app = express();
const port = 9090;

app.get("/", function (req, res){
 console.log("hello world");
 res.send("hello world are u getting a response")
});

app.get("/trainees", function(req, res){
 console.log(req.query.region, "...request.query.region");

 console.log("received a request to the /trainees");
 res.send({trainees});
});

 app.listen(port, function(){
  console.log("my application is now working");
 });