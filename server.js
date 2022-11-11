const express = require('express');
const app = express();

// app.get("/", function(request, response){
//     response.send("Hello World");
// })

// app.get('/',(req, res)=>{
//     res.send("Hello Miles")
// });

// app.post('/',(req, res)=>{
//     res.send('Check out my Post')
// });

// app.put('/', (req, res)=>{
//     res.send('Got a put request from /user')
// })

app.get("/", (req, res)=>{
    console.log(req)
    res.send("Yay Node");
});

app.get("/node", (req, res)=>{
    console.log(req)
    res.send("We Found Node");
});

app.get("/cyf", (req, res)=>{
    console.log(req)
    res.send("Hello CYF!");
});

app.get("/chocolate", (req, res)=>{
    let searchQuery = req.query.amount;
    res.send(`I want ${searchQuery} Chocolate`);
});

app.get("/chocolate/values", (req, res)=>{
    let white = req.query.value1;
    let dark = req.query.value2;
    res.send(`I want ${white} white Chocolates,
     ${dark} dark Chocolates and in total ${white * dark} Chocolates`);
});

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000. Ready to accept requests!");
});