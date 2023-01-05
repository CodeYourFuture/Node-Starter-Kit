const express = require("express");
const app = express();
const port = 9090;

const education = [
  { name: "CodeYourFuture", year: "2022-2023", location: "Manchester" },
  { name: "MongoDB", year: "2023", location: "Manchester" },
  { name: "Test", year: "2022-2023", location: "Sweden" },
];

app.get("/", (request, respond) => {
  console.log("hello this your first API req");
  let serachQuery = request.query.search;
  respond.send("this the respond form ./ page" + serachQuery);
});

app.get("/tester", (request, respond) => {
  console.log("Received a request to the /tester endpoint");
  respond.send({ education });
});

app.listen(port, () => {
  console.log("my application is now listen to port 9090...");
});
