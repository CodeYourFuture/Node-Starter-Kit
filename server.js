const { response } = require("express");
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res) "/ is our root"
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/node", function (req, res) {
  res.send("This is the node response");
});

// app.get("/chocolate", function (req, res) {
//     res.type("json");
//     res.json({brand: "cadbury", name:"milk chocolate"})
//  // res.send("<h1>chocolate</h1><p>Mm chocolate :O</p>");
// });

app.get("/codeyourfuture", function (req, res) {
  res.send("codeyourfuture is great.");
});

app.get("/even", function (req, res) {
    console.log(req.query);
  if (req.query.number) {
  let oddOrEven = ((req.query.number % 2) === 0);
  let reply = {number: req.query.number, answer: oddOrEven };
  res.send(reply);
  } else {
    res.json({"error": "you are not a number"});
  }
});
// if you type in the browser http://localhost:3000/even?number=5&name=tony
app.get("/chocolate", (req, res) => {
    console.log(req.query);
  if (req.query.number){
    res.json({amount: `Here is your ${req.query.number} delicious Chocolate bar`});
  }else {
      res.json({"error": "Invalid number"});
  }
});

app.get("/location", (req, res) => {
    let lat = req.query.lat;
    let lng = req.query.lng;
  res.send(`Your searched for Lat: ${lat} and Lng: ${lng}`);
})
//http://localhost:3000/location?lat=18.9&lng=78.9