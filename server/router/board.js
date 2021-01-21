const express = require('express');
const db = require('../schema/db');
const router = express.Router();

router.route('/register')
  .post((req, res) => {
    console.log(req.body);
    let query = `INSERT everytime.board VALUES (null, ?, ?, ?, ?, 0);`,
        id = req.body.id, 
        board_title = req.body.boardTitle, 
        board_content = req.body.boardContent
        board_writer = req.body.writer
        board_comment = req.body.comment,
        board_like = req.body.like,
        params = [board_title, board_content, board_writer, board_comment, board_like];
    db.query(query, params, 
      (err, rows, fields) => {
        res.send(rows);
        if(err) res.status(404).send();
        else res.status(200).send();
      })
  })

  .post((req, res) => {
    db.query('SELECT * FROM everytime.board', (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        console.log(rows);
      }
      else res.status(404).send();
    })
  })

module.exports = router;