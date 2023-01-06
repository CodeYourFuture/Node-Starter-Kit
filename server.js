const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "north-west" },
  { name: "Azin", region: "London" },
  { name: "Chioma", region: "London" },
  { name: "Pakize", region: "London" },
];
// http://locaalhost:9090
app.get("/", function (request, response) {
  console.log(request);
  console.log("Hello World, you've reached my API");
  response.send("hello World you're getting response from my server!");
});
// http://localhost:9090/trainees
// http://localhost:9090/trainees?region=north-west
app.get("/trainees", function (request, response) {
  console.log(request.query.region, "<----request.query.region");
  console.log("Recived a request to the /trainees endpoint");
  response.send({ trainees });
});

app.listen(port, function () {
  console.log(" my application now listening on port 9090...");
});
