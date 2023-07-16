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
    artistName: "Beyoncé",
    collectionName: "Renaissance",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2022-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

const express = require("express");
const app = express();
app.use(express.json());
app.get("/albums", function (request, response) {
  response.send(albumsData);
});

//a single album using ID
app.get("/albums/:id", function (request, response) {
  const idToFind = request.params.id;
  const album = albumsData.find((el) => el.albumId == parseInt(idToFind));
  if (album) {
    response.send(album);
  } else {
    response.send(`Album with id ${idToFind} not found!`);
  }
});
//post a new album
app.post("/albums", function (request, response) {
  let newAlbum = request.body;
  albumsData.push(newAlbum);
  console.log(`New album with the id ${newAlbum.albumId} has been added:`);
  response.send(newAlbum);
});

//delete an album
app.delete("/albums/:id", function (request, response) {
  const idToDelete = request.params.id;
  const albumIndex = albumsData.findIndex(
    (album) => album.albumId == parseInt(idToDelete)
  );
  // checks whether the findIndex method find a valid index for the album with the specified Id.
  if (albumIndex !== -1) {
    albumsData.splice(albumIndex, 1);
    response.send(`Album with ID ${idToDelete} has been removed.`);
  } else {
    response.send(`Album ${idToDelete} not found!`);
  }
});
app.listen(4000, function () {
  console.log("Server is listening on port 40000");
});
