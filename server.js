const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.get("/node", function (req, res) {
  res.send("node");
});

app.get("/chocolate", function (req, res) {
  let amount = req.query.amount;
  res.send("You have requested " + amount + " bars of chocolate!");
});

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "north-west" },
  { name: "Azin", region: "London" },
  { name: "Chioma", region: "London" },
  { name: "Pakize", region: "London" },
];

app.get("/trainees", function (req, res) {
  let region = req.query.region.toLowerCase();
  let filteredTrainees = trainees.filter((trainee) => {
    return trainee.region.toLowerCase() === region;
  });
  res.send(filteredTrainees);
});

app.get("/multiply", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  let result = value1 * value2;
  res.send("The results is: " + result);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
