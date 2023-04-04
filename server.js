// const quotes = require("./quotes.json"); the way of import a json file

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
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];
const express = require("express");
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  console.log(req);

  res.send("Yay Node!");
});

app.get("/node", (req, res) => {
  console.log(req);

  res.send("Yay Node! how areeeeee you?????");
});
//localhost:3000/multiply?value1=2&value2=10
app.get("/multiply", (req, res) => {
  let valueOne = req.query.value1;
  let valueTwo = req.query.value2;
  console.log(req);

  res.send(`You searched for value1: ${valueOne * valueTwo} `);
});

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:albumId", function (req, res) {
  const albumToFind= (req.params.albumId);
  console.log(albumToFind)
  const album = albumsData.find((album) => album.albumId === albumToFind);
  console.log(album);
    res.status(200).send({album});

});
app.post("/albums", function (req, res) {
  console.log(req.body,"POST /albums route");
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send({newAlbum})
});
app.post("/myAlbums", function (req, res) {
    console.log("POST /albums route");
    console.log(req.body)
    const newAl = req.body;
    albumsData.push(newAl)
});

// notice .delete
app.delete("/albums/:albumID", function (req, res) {
   deleteanAlbum = req.params.albumID ;
   console.log (`the client want to delet Album number ${deleteanAlbum}`)
    const album = albumsData.find((album) => album.albumId === deleteanAlbum);
     albumsData.splice(album, 1);
     res.send(`The Album number ${deleteanAlbum} have deleted .`)
  
});


app.listen(3000, () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
