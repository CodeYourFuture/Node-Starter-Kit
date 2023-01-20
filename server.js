const express = require("express");
const app = express();
const port = 9090;

app.use(express.json()); //<---- need this to access request body.
// before our routes definition
// const trainees = [
//   { name: "Maziar", region: "north-west" },
//   { name: "Shimen", region: "north-west" },
//   { name: "Zaw", region: "north-west" },
//   { name: "Azin", region: "London" },
//   { name: "Chioma", region: "London" },
//   { name: "Pakize", region: "London" },
// ];

const movies = [
  {
    id: 1,
    title: "Girlhood",
    yearsOfRelease: 1995,
    director: "Celione Sciamma",
  },
  {
    id: 2,
    title: "Jurassic Park",
    certificate: "PG",
    yearsOfRelease: 1993,
    director: "Cel Scia",
  },
  {
    id: 3,
    title: "Juli iamma",
    certificate: "PGl",
    yearsOfRelease: 1991,
    director: "Cel Jurassic",
  },
];
// http://locaalhost:9090
// app.get("/", function (request, response) {
//   console.log(request);
//   // console.log("Hello World, you've reached my API");
//   // response.send("hello World you're getting response from my server!");
//   response.status(200).send("Welcome to my move API!");
// });
// http://localhost:9090/trainees
// http://localhost:9090/trainees?region=north-west
app.get("/movies", function (request, response) {
  // console.log(request.query.region, "<----request.query.region");
  // console.log("Recived a request to the /trainees endpoint");
  // response.send({ trainees });
  response.status(200).send({ movies });
});

app.put("/movies/:id", function (request, response) {
  //replace the movie with id 2 with the req.body

  const newMovie = { ...request.body, ...request.params };
  const movieIndex = movies.findIndex(
    (movie) => movie.id === Number(request.params.id)
  );

  movies.splice(movieIndex, 1, newMovie);
  console.log(movies, "<----movies?");
  response.status(200).send({ success: true });

  // const idToFind = Number(request.params.id);
  // const movie = movies.find((movie) => movie.id === idToFind);
  // response.status(200).send({ movie });
});
// app.post("/movies", function (request, response) {
//   console.log(request.body, "<---- this is a data client sent over!");
//   const newMovie = request.body;
//   movies.push(newMovie);
//   response.status(201).send({ newMovie });
// });
app.listen(port, function () {
  console.log(" server is listening on port 9090...");
});
