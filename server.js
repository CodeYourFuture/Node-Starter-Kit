// require: This line imports the express module, which is a Node.js framework for building web applications. By requiring the express module, we can access all of its functionality within our application.
const { response } = require("express");
const express = require("express");

// express(): This line creates a new instance of the express application. We can use this instance to define the behavior of our web server, such as defining routes and middleware.
const app = express();

const port = 2999;

// console.log(app.get);

// app.get(): This line defines a new route for our web application. The get method is used to define a route that handles HTTP GET requests. In this case, the route is set to the root path (/), and the second argument is a callback function that is executed when a GET request is received at that path.
app.get("/", function (request, response) {
  console.log(request);
  console.log("Hello :), You've reached my API");
  response.send("Hello Word!. you're getting response from my server");
});

// app.listen(): This line starts the web server and makes it listen for incoming HTTP requests. The first argument is the port number that the server should listen on, and the second argument is an optional callback function that is executed when the server starts listening.
app.listen(port, function () {
  console.log("My application is now listening on port 2999...");
});

// response.sendFile(): These lines send a file in response to an HTTP request. The sendFile method is used to send a file as the response to an HTTP request. In this case, the file that is being sent is an HTML file that is located in the public directory of the application.

// response.sendFile();
