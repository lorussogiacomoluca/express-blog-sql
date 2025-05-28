const connection = require("../data/db");

const index = (req, res) => {
  const sql = `SELECT * FROM posts`;
  connection.query(sql, (error, resutls) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.send(resutls);
  });
};

const destroy = (req, res) => {
  console.log("Deleted post");
};

module.exports = { index, destroy };
