const connection = require("./data/db");

//Express
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my blog");
  console.log("Welcome to my blog");
});

app.listen(port, () => {
  console.log(`On listening on port ${port}`);
});
