const express = require("express");
const app = express();
app.use(express.json());

app.get("/node", function (req, res) {
  res.send("Yay Node!");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Yay CYF!");
});

app.get("/chocolate", function (req, res) {
  let searchQuery = req.query.amount;
  res.send("This is the amount of chocolate I want!" + searchQuery);
});

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
    albumId: "35",
    artistName: "Irianni",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:id", function (request, response) {
  const id = request.params.id;
  const foundAlbum = albumsData.find((album) => album.albumId == id);
  response.send(foundAlbum);
});

app.post("/albums", function (request, response) {
  const newAlbum = request.body;
  albumsData.push({
    albumId: newAlbum.albumId,
    artistName: newAlbum.artistName,
    collectionName: newAlbum.collectionName,
    artworkUrl100: newAlbum.artworkUrl100,
    releaseDate: newAlbum.releaseDate,
    primaryGenreName: newAlbum.primaryGenreName,
    url: newAlbum.url,
  });
  response.json(newAlbum);
});

app.delete("/albums/:id", function (request, response) {
  const id = request.params.id;
  const deleteAlbum = albumsData.findIndex(({ albumId }) => albumId == id);
  if (deleteAlbum >= 0) {
    albumsData.splice(deleteAlbum, 1);
    response.send("The album was deleted", { albumsData });
  } else {
    response.send("Invalid id");
  }
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
