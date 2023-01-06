const express = require("express");
const app = express();

const trainees = [
  {
    id: 1,
    name: "John",
    age: 20,
    region: "Africa",
  },
  {
    id: 2,
    name: "Jane",
    age: 21,
    region: "Asia",
  },
  {
    id: 3,
    name: "Jack",
    age: 22,
    region: "Europe",
  },
  {
    id: 4,
    name: "Jill",
    age: 23,
    region: "Asia",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/trainees", (req, res) => {
  console.log(req.query);
  if (req.query.region) {
    const traineesByRegion = trainees.filter(
      t => t.region === req.query.region
    );
    return res.send(traineesByRegion);
  }
  return res.send(trainees);
});

app.get("/trainees/:id", (req, res) => {
  const trainee = trainees.find(t => t.id === parseInt(req.params.id));
  if (!trainee)
    res.status(404).send("The trainee with the given ID was not found.");
  res.send(trainee);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
