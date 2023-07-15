const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/", function(req, res) {
    console.log(req);
    res.send("Welcome to Afsha's bubble!")
});

app.get("/node", function(req, res) {
    res.send("Imagine that all the people living life in peace...")
})

app.get("/codeyourfuture", function (req, res) {
  res.send("Imagine that all the programmers learning only JavaScript...");
});

app.get("/chocolate", function (req, res) {
    console.log (req.query.amount);
    let amountQuery = req.query.amount
        res.send(`I am craving for ${amountQuery} chocolates`);
});

app.get("/multiply", function (req, res) {
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    let result = value1 * value2;
    res.send(`We need ${result} boxes of chocolates for our class pupils`)
})