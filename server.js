const albumsData = require("./albumsData.json"); 

const express = require("express");
const app = express();
app.use(express.json()); // to access to req.body
// const bodyParser = require()
/*************************************** Query*/
app.get("/", (req, res) => {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
  // console.log(req.query);
});
// localhost:3000/multiply?value1=2&value2=10
app.get("/multiply", (req, res) => {
  let valueOne = req.query.value1;
  let valueTwo = req.query.value2;
  res.send(`You searched for value1: ${valueOne * valueTwo} `);
});

app.get("/json", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  console.log("value1 and value2",req.query)
  res.send(`multiply two values=  ${value1*value2}`);
});

/********************************************** */
app.get("/node", (req, res) => {
  res.send("Yay Node! how areeeeee you?????");
});
app.get("/", (req, res) => {
  res.json("Yay Node!");
});

/****************************************listen2 */
app.get("/albums", function (req, res) {
  res.json(albumsData);
});

// app.get("/albums/:albumId", function (req, res) {
//   const albumToFind= (req.params.albumId);
//   console.log(albumToFind)
//   const album = albumsData.find((album) => album.albumId === albumToFind);
//   console.log(album);
//     res.status(200).send({album});

// });
app.post("/albums", function (req, res) {
  console.log(req.body,"POST /albums route");
  // const newAlbum = req.body;
  // albumsData.push(newAlbum);
  // res.send({newAlbum})
  res.send("ive got your message")
});
// app.post("/myAlbums", function (req, res) {
//     console.log("POST /albums route");
//     console.log(req.body)
//     const newAl = req.body;
//     albumsData.push(newAl)
// });

// // notice .delete
// app.delete("/albums/:albumID", function (req, res) {
//    deleteanAlbum = req.params.albumID ;
//    console.log (`the client want to delet Album number ${deleteanAlbum}`)
//     const album = albumsData.find((album) => album.albumId === deleteanAlbum);
//      albumsData.splice(album, 1);
//      res.send(`The Album number ${deleteanAlbum} have deleted .`)

// });

app.listen(3000, () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
