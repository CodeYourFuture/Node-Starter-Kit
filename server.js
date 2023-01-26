const express = require("express");
const app = express();
const port = 9090;

app.use(express.json());

const albumsData = [
  {
    albumId: 10,
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: 11,
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/", (req, res) => {
  console.log("hello this your first API req...");
  let serachQuery = req.query.search;
  res.send("this the respond form ./ page" + serachQuery);
});

app.get("/albums", function (req, res) {
  res.send({ albumsData });
});

app.post("/albums", (req, res) => {
  console.log(req.body, "<<<< this is the data from client");
  const newSong = req.body;
  albumsData.push(newSong);
  res.status(201).send({ newSong });
});

app.get("/albums/:id", (req, res) => {
  console.log(req.params, "----> request.params");
  const findItem = Number(req.params.id);
  console.log(findItem);
  const album = albumsData.find((album) => album.albumId === findItem);
  res.status(200).send({ album });
});

app.listen(port, () => {
  console.log("my application is now listen to port 9090...");
});
