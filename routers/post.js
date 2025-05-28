const express = require("express");
const router = express.Router();
const

router.get("/", (req, res) => {
  res.send("Lista dei post");
});

module.exports = router;
