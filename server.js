const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "malkit", region: "scotland" },
  { name: "siver", region: "scotland" },
  { name: "afsha", region: "london" },
];

app.listen(port, function () {
  console.log("listening on 9090");
});

app.get("/", function (req, res) {
  console.log("hello world");
  res.send("this is your response");
});

app.get("/chocs", function (req, res) {
  console.log(req.query.region);
  let filteredList = trainees.filter(
    (trainee) => trainee.region === req.query.region
  );
  res.send({ filteredList });
});

app.get("/multiply", function (req, res) {
  let firstNum = req.query.firstNum;
  let secondNum = req.query.secondNum;
  let result = firstNum * secondNum;
  res.send({ result });
});
