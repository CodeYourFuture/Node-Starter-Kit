
const express=require ("express")
const app=express();
const port=9091
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
  ];
  app.use(express.json());

  app.get("/albums", function (req, res) {
    res.send(albumsData);
  });
  app.get("/albums/:albumId",(req,res)=>{
    const findAlbum=albumsData.find(item=>Number(item.albumId)=== Number(req.params.albumId))
    if (findAlbum){
        res.send(findAlbum)
    }else res.status(404).send("error")
    
  })
app.post("/albums", function (req, res) {
   let body=req.body
   albumsData.push(body)
   res.send(albumsData)


  });
  app.delete("/albums/:albumID", function (req, res) {
    let id=+req.params.albumID
    let index=albumsData.findIndex(item=>item.albumId===id)
    let deleted=albumsData.splice(index,1)
    res.send(deleted)
  });
  app.listen(port,(req,res)=>{
    console.log("server is listening on 9090")
  })
