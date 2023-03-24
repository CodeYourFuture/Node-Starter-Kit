const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const searchQuery = req.query.search;
  res.send(`Hello World!, Yay Node! You searched for ${searchQuery}`);
  // console.log(req);
});

app.get("/node", (req, res) => {
  res.send("We are in Node endpoint!");
});

app.get("/codeyourfuture", (req, res) => {
  res.send("We are in codeyourfuture endpoint!")
});

app.get("/chocolate", (req, res) => {
  const amount = req.query.amount;
  res.send(`You asked for ${amount} chocolate!`);
});

app.get("/multiply", (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  res.send(`The multiply is ${value1 * value2}`);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
