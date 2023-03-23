// require: This line imports the express module, which is a Node.js framework for building web applications. By requiring the express module, we can access all of its functionality within our application.
const { request, response } = require("express");
const express = require("express");

// express(): This line creates a new instance of the express application. We can use this instance to define the behavior of our web server, such as defining routes and middleware.
const app = express();

const port = 2999;

// console.log(app.get);

// app.get(): This line defines a new route for our web application. The get method is used to define a route that handles HTTP GET requests. In this case, the route is set to the root path (/), and the second argument is a callback function that is executed when a GET request is received at that path.
app.get("/", (request, response) => {
  console.log(request);
  console.log("Hello :), You've reached my API");
  response.send("Hello Word!. you're getting response from my server");
});

app.get("/array", (request, response) => {
  const arrayData = ["one", "two", "Three"];
  response.send(arrayData);
});
// GET http://localhost:2999/array

app.get("/time", (request, response) => {
  const currentTime = new Date();
  response.send(currentTime);
});
// GET http://localhost:2999/time

app.get("/mydata", (request, response) => {
  const myData = {
    name: "Mo Reel",
    age: 39,
    city: "London",
  };
  response.send(myData);
});
// GET http://localhost:2999/mydata

app.get("/numbers", (request, response) => {
  const someData = [1, 2, 3];
  response.json(someData);
});
// GET http://localhost:2999/numbers

app.get("/", (request, response) => {
  let searchQuery = request.query.search;
  response.send("Hello world! You searched for " + searchQuery);
});
// GET http://localhost:2999/?search=hello

app.get("/chocolate", (request, response) => {
  let amount = request.query.amount;
  response.send("You want " + amount + " bars of chocolate!");
});
//GET http://localhost:2999/chocolate?amount=3

app.get("/trainees", (request, response) => {
  const trainees = [
    { name: "Maziar", region: "north-west" },
    { name: "Shimen", region: "north-west" },
    { name: "Zaw", region: "north-west" },
    { name: "Azin", region: "London" },
    { name: "Chioma", region: "London" },
    { name: "Pakize", region: "London" },
  ];

  let region = request.query.region.toLowerCase();
  let filteredTrainees = trainees.filter((trainee) => {
    return trainee.region.toLowerCase() === region;
  });

  response.send(filteredTrainees);
});

//GET http://localhost:2999/trainees?region=london

// app.listen(): This line starts the web server and makes it listen for incoming HTTP requests. The first argument is the port number that the server should listen on, and the second argument is an optional callback function that is executed when the server starts listening.
app.listen(port, () => {
  console.log("My application is now listening on port 2999...");
});

// response.sendFile(): These lines send a file in response to an HTTP request. The sendFile method is used to send a file as the response to an HTTP request. In this case, the file that is being sent is an HTML file that is located in the public directory of the application.

// response.sendFile();
