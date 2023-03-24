const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!, Yay Node!");
  // console.log(req);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
