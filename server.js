const albums = require("./albums.json");

const express = require("express");
const app = express();

app.use(express.json());

// ********************* Week 1 **********************
app.get("/", (req, res) => {
  const searchQuery = req.query.search;
  res.status(200).json(`Hello World! Yay Node! You searched for ${searchQuery}`);
  // console.log(req);
});

app.get("/node", (req, res) => {
  res.status(200).json("We are in Node endpoint!");
});

app.get("/codeyourfuture", (req, res) => {
  res.status(200).json("We are in codeyourfuture endpoint!")
});

app.get("/chocolate", (req, res) => {
  const amount = req.query.amount;
  res.status(200).json(`You asked for ${amount} chocolate!`);
});

app.get("/multiply", (req, res) => {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  res.status(200).json(`The multiply is ${value1 * value2}`);
});

// ********************* Week 2 **********************

app.get("/albums", (req, res) => {
  res.status(200).json(albums);
})

app.post("/albums", (req, res) => {
  albums.push(req.body);
  res.status(200).json("Your album added!")
});

app.delete("/albums/:id", (req, res) => {
  albums.forEach((album, index) => {
    if (album.albumId === req.params.id) {
      albums.splice(index, 1);
      res.status(200).json("Deleted");
    }
  })
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});