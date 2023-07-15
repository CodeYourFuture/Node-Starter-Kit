const express = require("express");
const afshasServer = express();
//express "express js" server is easier to code

const port = 9852;

const trainees = [
  { name: "malkit", region: "scotland" },
  { name: "siver", region: "scotland" },
  { name: "afsha", region: "london" },
];

afshasServer.listen(port, function () {
  console.log("listening on 9852");
});

afshasServer.get("/", function (req, res) {
  res.send("LOOK AT THIS AFSHA!!!!!!");
});

afshasServer.get("/chocs", function (req, res) {
  console.log(req.query.region);
  let filteredList = trainees.filter(
    (trainee) => trainee.region === req.query.region
  );
  res.send({ filteredList });
});

afshasServer.get("/sweets", function (req, res) {
  console.log(req.query.region);
  let filteredList = trainees.filter(
    (trainee) => trainee.region === req.query.region
  );
  res.send({ filteredList });
});

afshasServer.get("/multiply", function (req, res) {
  let firstNum = req.query.firstNum;
  let secondNum = req.query.secondNum;
  let result = firstNum * secondNum;
  res.send({ result });
});
