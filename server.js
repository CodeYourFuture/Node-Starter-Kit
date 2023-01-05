const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 9090;

// creating server
const trainees = [
  { name: "Ali", age: 20, Region: "NW", week: "JS2W2" },
  { name: "Adam", age: 20, Region: "London", week: "ReactW1" },
];



app.get("/trainees", (req, res) => {
  const region = req.query.Region
  const filteredByRegion = trainees.filter(el => el.Region === region)
  res.send({filteredByRegion});
});

app.listen(port, () => {
  console.log(`CYF server is secceffully launched ${port}`);
});
