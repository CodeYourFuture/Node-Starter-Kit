// PREVIOUS CODE FOR WEEK 1
const express = require("express");
const app = express();
const port = 9090;
app.use(express.json()); // before our routes definition

// const foodArray = [

//     {
//         "name": "biryani",
//         "flavour" : "spicy",
//     },
//     {
//         "name": "nihari",
//         "flavour" : "spicy"
//     },
//     {
//         "name": "mithai",
//         "flavour" : "sweet"
//     }
// ];

// app.get("/", (request, response) => {
//     console.log("You've reached my API");
//     response.send("Here's your response!!!");
//     console.log(request.query, "<---Request.query");
// });

// app.get("/trainees", (request, response) => {
//     console.log(request.query, "<---Request.query");

//     response.send(`Response : FROM TRAINEES ENDPOINT \n\  ${foodArray}`);
// })

app.listen(port, () => {
  console.log(`Example app listening now..`);
});

// PREVIOUS CODE ABOVE FOR WEEK 1

// LESSON 2
const albumsData = [
    {
      
        albumId: "9",
        artistName: "Beyonce",
  },
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
];


const beyonceAlbum = {
  albumId: "13",
  artistName: "Beyoncé",
  collectionName: "B'Day (Deluxe Edition)",
  artworkUrl100:
    "http://is5.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg",
  releaseDate: "2007-05-29T07:00:00Z",
  primaryGenreName: "Pop",
  url: "https://www.youtube.com/embed/RQ9BWndKEgs?rel=0&amp;controls=0&amp;showinfo=0",
};

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

// notice .post (not .get)
app.post("/albums", function (req, res) {
    console.log("POST /albums route");
    res.json(beyonceAlbum);
    console.log(req.body);
});

// notice .delete
app.delete("/albums/:albumID", function (req, res) {
  console.log("DELETE /albums route");
});
// LESSON 2
