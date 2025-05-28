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

const show = (req, res) => {
  console.log(`SHOW`);
};

const destroy = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM posts WHERE id = ?`;
  connection.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.sendStatus(204);
  });
};

module.exports = { index, show, destroy };
