const express = require("express");
const app = express();

const port = 9090;

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "north-west" },
  { name: "Azin", region: "london" },
  { name: "Chioma", region: "london" },
  { name: "Pakize", region: "london" },
];

app.get("/", (req, res) => {
  console.log("Hello world, you've reached my API");
  res.send("Hello world, you are gettinga response from my server");
});

app.get("/trainees", (req, res) => {
  console.log("Received a request to the /trainees endpoint");
  let output = [];
  if (req.query.region) {
    let region = req.query.region.toLocaleLowerCase();
    if (region === "north-west") {
      output = trainees.filter((trainee) => trainee.region === "north-west");
      return res.send({
        data: output,
        message: "ok",
      });
    } else if (region === "london") {
      output = trainees.filter((trainee) => trainee.region === "london");
      return res.send({
        data: output,
        message: "ok",
      });
    } else {
      return res.status(404).send({
        data: null,
        message: "the region was not found!",
      });
    }
  } else {
    return res.send({
      data: trainees,
      message: "ok",
    });
  }
});

app.listen(port, () => {
  console.log("My application is now listening on port 9090...");
});
