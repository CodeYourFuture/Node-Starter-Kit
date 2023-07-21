const express = require("express");
const app = express();

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "12",
    artistName: "The Beatles",
    collectionName: "With the Beatles",
    artworkUrl100:
      "https://en.wikipedia.org/wiki/With_the_Beatles#/media/File:Withthebeatlescover.jpg",
    releaseDate: "1963-11-22T07:00:00Z",
    primaryGenreName: "Rock",
    url: "https://www.youtube.com/watch?v=UVKU6SevefY&list=PLycVTiaj8OI-XRoKhxMmBhnsefIc77M2_",
  },
];

app.get("/", function(req, res) {
    console.log(req);
    res.send("Welcome to Alisha's bubble!")
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

app.get("/albums", function (req, res) {
  res.send({ albumsData });
});

app.listen(35981, function () {
    console.log("Server is listening on port 35981. Ready to accept requests!");
});