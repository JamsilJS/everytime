const express = require('express');
const db = require('../schema/db');
const router = express.Router();

router.route('/register')
  .post((req, res) => {
    console.log(req.body);
    let query = `INSERT everytime.board VALUES (1, '${req.body.boardTitle}', '${req.body.boardContent}', '${req.body.writer}', '', 0);`
    db.query(query, (err, result) => {
      if(err) res.status(404).send();
      else res.status(200).send();
    })
  })
  .get((req, res) => {
    db.query('SELECT * FROM everytime.board', (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        //console.log(rows);
      }
      else res.status(404).send();
    })
  })

module.exports = router;