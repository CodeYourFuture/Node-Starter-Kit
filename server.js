const express = require("express");
const app = express();
const port = 9090;
const fs = require("fs").promises;

app.use(express.json());

//----bringing data-------

// ---------   Createing routes  ------------

// reading All albums
app.get("/albums", (req, res) => {
  fs.readFile("./albums.json", "utf-8").then((movie) => {
    movie = JSON.parse(movie);
    res.status(200).send(movie);
  });
});

// reading albums by id
app.get(`/albums/:id`, (req, res) => {
  const id = +req.params.id;
  const index = fs.readFile("./albums.json", "utf-8").then((movie) => {
    const searchedAlbum = JSON.parse(movie).findIndex(
      (album) => +album.id === +req.params.id
    );
    res.status(200).send(searchedAlbum);
  });
  console.log(index);
  //const theAlbum = albums.filter((album) => album.id === id);
});

// PUT rount

/* Todo
use put method with fs modules
*/
app.put(`/albums/:id`, (req, res) => {
  const requestBody = req.body;

  const albumIndex = albums.findIndex((album) => +album.id === +req.params.id);
  const theOldAlbum = albums[albumIndex];

  const newAlbum = {
    album: requestBody.album,
    artist: requestBody.artist,
    id: theOldAlbum.id, // here I want don't want to change the old id
  };

  albums.splice(albumIndex, 1, newAlbum);
  res.status(200).send(theOldAlbum); // returning the replaced album
});

app.listen(port, () => {
  console.log(`Server is runing ${port}`);
});
