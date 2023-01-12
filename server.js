const { request, response } = require("express");
const express= require("express");
const app = express();

app.use(express.json())

const trainees = [
  { name: "Leila", region: "north-west" },
  { name: "Sahar", region: "north-west" },
  { name: "Bahar", region: "north-west" },
];
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
    collectionName: "For Leila",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});
app.get("/",(req,res)=>{
    res.send("Yay Node!")
    console.log(req);
});

app.get("/node",(req,res)=>{
    res.send("the node endpoint")
});

app.get("/codeyourfuture",(req,res)=>{
    res.send("the cyf endpoint")
});

app.get("/chocolate",(req,res)=>{
    let amountQuery = req.query.amount;
    res.send("your choosing chocolate is " + amountQuery)
});

app.get("/multiply",(req,res)=>{
    let value1 =req.query.value1;
    let value2 =req.query.value2;
    res.send(`your request value is ${value1 * value2}`)
})
app.get("/trainees",(req,res)=>{
    let nameQuery=req.query.name;
    res.send(`name : ${nameQuery}`);
})
app.get("/albums",(request,response)=>{
    response.status(200).send({albumsData})
})
app.get("/albums/:albumId",(request,response)=>{
    const albumId=request.params.albumId;
    console.log(albumId);
    const result=albumsData.find(album=>album.albumId===albumId)
    console.log(result);
    // response.status(200).send({result})
    response.send(result)
})
app.post("/albums",(request,response)=>{
  const newAlbum = request.body;
  albumsData.push(newAlbum);
  response.status(201).send({newAlbum});
})

app.delete("/albums/:albumId",(request,response)=>{
  const id =request.params.albumId;
  if(id===-1) return response.status(404).send({});
  albumsData.splice(id,1);
  response.send({albumsData})
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000.Ready to accept request!");
    
});