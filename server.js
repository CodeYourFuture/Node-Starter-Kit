const express = require("express");
const app = express();
const port = 9090;


const foodArray = [

    {
        "name": "biryani",
        "flavour" : "spicy",
    },
    {
        "name": "nihari",
        "flavour" : "spicy"
    },
    {
        "name": "mithai",
        "flavour" : "sweet"
    }
];


app.get("/", (request, response) => {
    console.log("You've reached my API");
    response.send("Here's your response!!!");
    console.log(request.query, "<---Request.query");
});

app.get("/trainees", (request, response) => { 
    console.log(request.query, "<---Request.query");

    response.send(`Response : FROM TRAINEES ENDPOINT \n\  ${foodArray}`);
})

app.listen(port, () => {
    console.log(`Example app listening now..`);
});


