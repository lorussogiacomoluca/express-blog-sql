const connection = require("./data/db");

//Routers
const postRouter = require("./routers/post.js");

//Express
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my blog");
  console.log("Welcome to my blog");
});

app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`On listening on port ${port}`);
});
