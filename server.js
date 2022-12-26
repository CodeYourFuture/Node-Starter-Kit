const express= require("express");
const app = express();

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
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000.Ready to accept request!");
});