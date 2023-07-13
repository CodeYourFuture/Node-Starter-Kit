const express = require("express");
const app = express();

app.get("/node", function (req, res) {
  res.send("Yay Node!");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Yay CYF!");
});

app.get("/chocolate", function (req, res) {
  let searchQuery = req.query.amount;
  res.send("This is the amount of chocolate I want!" + searchQuery);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
