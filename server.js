const express = require("express");
const app = express();
const port = 9090;

const trainees = [
  { name: "Ekrem", region: "north-west" },
  { name: "Ekrem1", region: "London" },
  { name: "Ekrem2", region: "north-east" },
  { name: "Ekrem3", region: "Leeds" },
  { name: "Ekrem4", region: "north-west" },
];

app.get("/", (req, res) => {
  console.log("Hello World! console");
  res.send("Hello World!");
});

app.get("/trainees", (req, res) => {
  console.log(req.query.region, "<------ request.query.region");
  console.log("Received a request to the/trainees endpoint");
  res.send({ trainees });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
