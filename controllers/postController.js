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
  const id = req.params.id;
  const sqlPost = `SELECT * FROM posts WHERE id = ?`;

  connection.query(sqlPost, [id], (error, resultsPost) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    const post = resultsPost[0];
    const sqlTags = `SELECT T.* FROM tags T join post_tag PT on T.id = PT.tag_id WHERE PT.post_id = ?`;
    connection.query(sqlTags, [id], (error, resultsTags) => {
      if (error) {
        res.status(500).json({ message: error.message });
      }
      post.tags = resultsTags;
      res.json(post);
    });
  });
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
